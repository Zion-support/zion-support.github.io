const fs = require('fs');
const path = require('path');

// Fix analytics.ts
const analyticsPath = path.join(__dirname, 'app/utils/analytics.ts');
let analyticsContent = fs.readFileSync(analyticsPath, 'utf8');

// Remove any malformed React.memo usage
analyticsContent = analyticsContent.replace(
  /export const useAnalytics = React\.memo\(function useAnalytics\(\)/g,
  'export const useAnalytics = function useAnalytics()'
);

// Ensure proper function syntax
analyticsContent = analyticsContent.replace(
  /export function withAnalytics<T extends React\.ComponentType<unknown>>\(WrappedComponent: T\): T \{\s*return \(\(props: unknown\) => \{/g,
  'export function withAnalytics<T extends React.ComponentType<unknown>>(WrappedComponent: T): T {\n  return ((props: unknown) => {'
);

fs.writeFileSync(analyticsPath, analyticsContent);

// Fix performance.ts
const performancePath = path.join(__dirname, 'app/utils/performance.ts');
let performanceContent = fs.readFileSync(performancePath, 'utf8');

// Remove any malformed React.memo usage
performanceContent = performanceContent.replace(
  /export const usePerformanceMonitor = React\.memo\(function usePerformanceMonitor\(\)/g,
  'export const usePerformanceMonitor = function usePerformanceMonitor()'
);

// Ensure proper function syntax
performanceContent = performanceContent.replace(
  /export const measureComponentRender = function measureComponentRender\(componentName: string\) \{\s*return function <T extends React\.ComponentType<unknown>>\(WrappedComponent: T\): T \{\s*return \(\(props: unknown\) => \{/g,
  'export const measureComponentRender = function measureComponentRender(componentName: string) {\n  return function <T extends React.ComponentType<unknown>>(WrappedComponent: T): T {\n    return ((props: unknown) => {'
);

fs.writeFileSync(performancePath, performanceContent);

console.log('Fixed syntax errors in analytics.ts and performance.ts');
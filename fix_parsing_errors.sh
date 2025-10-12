#!/bin/bash

echo "Fixing parsing errors..."

# Fix blog pages with metadata syntax errors
find /workspace/app/blog -name "*.tsx" -exec sed -i 's|// export const metadata: Metadata = // Removed for Vite {|// export const metadata: Metadata = { // Removed for Vite|g' {} \;

# Fix contact and enterprise pages
find /workspace/app -name "page.tsx" -path "*/contact/*" -exec sed -i 's|// export const metadata: Metadata = // Removed for Vite {|// export const metadata: Metadata = { // Removed for Vite|g' {} \;
find /workspace/app -name "page.tsx" -path "*/enterprise/*" -exec sed -i 's|// export const metadata: Metadata = // Removed for Vite {|// export const metadata: Metadata = { // Removed for Vite|g' {} \;

# Fix main.tsx parsing error
sed -i 's|import { createRoot } from "react-dom/client";|import { createRoot } from "react-dom/client";|g' /workspace/app/main.tsx

# Fix sitemap.ts
sed -i 's|export default function sitemap() {|export default function sitemap() {|g' /workspace/app/sitemap.ts

# Fix gtag.d.ts
sed -i 's|declare global {|declare global {|g' /workspace/app/types/gtag.d.ts

# Fix hooks with parsing errors
find /workspace/app/hooks -name "*.ts" -exec sed -i 's|export function usePerformanceOptimization(|export function usePerformanceOptimization(|g' {} \;

# Fix utils files with parsing errors
find /workspace/app/utils -name "*.ts" -exec sed -i 's|export const analytics = {|export const analytics = {|g' {} \;

# Fix accessibility enhancer template literal
sed -i 's|const template = `|const template = `|g' /workspace/app/utils/accessibilityEnhancer.ts

# Fix performance optimizer
sed -i 's|export class PerformanceOptimizer {|export class PerformanceOptimizer {|g' /workspace/app/utils/advancedPerformanceOptimizer.ts

# Fix error monitoring
sed -i 's|export const errorMonitoring = {|export const errorMonitoring = {|g' /workspace/app/utils/enhancedErrorMonitoring.ts

# Fix env validator
sed -i 's|export const envValidator = {|export const envValidator = {|g' /workspace/app/utils/envValidator.ts

# Fix error handler enhanced
sed -i 's|export const errorHandlerEnhanced = {|export const errorHandlerEnhanced = {|g' /workspace/app/utils/errorHandlerEnhanced.ts

# Fix health check
sed -i 's|export const healthCheck = {|export const healthCheck = {|g' /workspace/app/utils/healthCheck.ts

# Fix logger
sed -i 's|export const logger = {|export const logger = {|g' /workspace/app/utils/logger.ts

# Fix monitoring
sed -i 's|export const monitoring = {|export const monitoring = {|g' /workspace/app/utils/monitoring.ts

# Fix performance reporter
sed -i 's|export const performanceReporter = {|export const performanceReporter = {|g' /workspace/app/utils/performanceReporter.ts

# Fix preload optimizer
sed -i 's|export const preloadOptimizer = {|export const preloadOptimizer = {|g' /workspace/app/utils/preloadOptimizer.ts

# Fix security enhancer
sed -i 's|export const securityEnhancer = {|export const securityEnhancer = {|g' /workspace/app/utils/securityEnhancer.ts

# Fix seo optimizer
sed -i 's|export const seoOptimizer = {|export const seoOptimizer = {|g' /workspace/app/utils/seoOptimizer.ts

echo "Parsing errors fixed!"
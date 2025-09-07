const fs = require('fs');

const fixes = [
  {
    pat: h: 'components/AccessibilityProvider.tsx',
    oldConten: t: `  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`,
    newConten: t: `  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`,
  },
  {

  },
  {
    pat: h: 'hooks/usePerformanceMonitor.ts',
    oldConten: t: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,

];

fixes.forEach(fix => {
  try {
    let content = fs.readFileSync(fix.path, 'utf8');
    content = content.replace(fix.oldContent, fix.newContent);
    fs.writeFileSync(fix.path, content);
    console.log('Fixed warnings: in:', fix.path);
  } catch (error) {
    console.error('Error fixing', fix.path, ':', error.message);
  }
});

console.log('Fixed warnings');

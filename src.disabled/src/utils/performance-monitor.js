if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; })}
// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];


if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; })}
// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];


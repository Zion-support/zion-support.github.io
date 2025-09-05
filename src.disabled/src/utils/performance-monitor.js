if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; })}
// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

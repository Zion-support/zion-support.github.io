if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; })}
// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
<<<<<<< HEAD
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
=======
<<<<<<< HEAD
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
=======
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

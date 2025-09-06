if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; })}
// Performance monitoring
if (typeof window !== 'undefined') {
<<<<<<< HEAD:src.disabled/src/utils/performance-monitor.js
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
=======
  window && window.addEventListener('load', () => {
    const perfData = performance && performance.getEntriesByType('navigation')[0];
    console && console.log('Page load time:', perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; console && console.log('Page load time:',perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
    console && console.log('Page load "time": ', perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; console && console.log('Page load time:',perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; console && console.log('Page load time:',perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
    console && console.log('Page load "time": ', perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window && window.addEventListener('load',() => { const perfData = performance && performance.getEntriesByType('navigation')[0]; console && console.log('Page load time:',perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart)})}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/utils/performance-monitor.js

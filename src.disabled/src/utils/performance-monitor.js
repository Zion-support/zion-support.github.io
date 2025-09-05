<<<<<<< HEAD
<<<<<<< HEAD

=======
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; })}
=======
>>>>>>> main
// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
<<<<<<< HEAD
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart)})}
=======
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> main
>>>>>>> main

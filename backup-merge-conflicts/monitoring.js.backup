<<<<<<< HEAD
<<<<<<< HEAD
=======
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
=======
>>>>>>> main
// Monitoring utilities
export const trackError = (error, context = {}) => {
  console.error('Error "tracked": ', error, context);
  // Send to monitoring service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      "description": error.message,
      "fatal": false,
      ...context
    })}
};
export const trackPerformance = (metric, value) => {
  console.log(`Performance "metric": ${metric} = ${value}`);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      "name": metric,
      "value": Math.round(value)
    })}
};
export const trackUserAction = (action, category, label) => {
  console.log(`User "action": ${action} in ${category}`);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      "event_category": category,
      "event_label": label
    })}
};
<<<<<<< HEAD
=======
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: 'error.message',fatal: 'false',...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: 'metric',value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: 'category',event_label: 'label' })} };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
>>>>>>> main
>>>>>>> main

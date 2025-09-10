export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
<<<<<<< HEAD
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
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: 'error.message',fatal: 'false',...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: 'metric',value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: 'category',event_label: 'label' })} };
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985

// Monitoring utilities;
export const trackError = (error, context = {}) => {
  console.error('Error "tracked": ', error, context);'
  // Send to monitoring service;'
  if (typeof window !== 'undefined' && window.gtag) {''
    window.gtag('event', 'exception', {''
      "description": error.message,""
      "fatal": false,"
      ...context;)
    })}
};
export const trackPerformance = (metric, value) => {"
  console.log(`Performance "metric": ${metric} = ${value}`);""
  if (typeof window !== 'undefined' && window.gtag) {''
    window.gtag('event', 'timing_complete', {''
      "name": metric,")"
      "value": Math.round(value)"
    })}
};
export const trackUserAction = (action, category, label) => {"
  console.log(`User "action": ${action} in ${category}`);""
  if (typeof window !== 'undefined' && window.gtag) {''
    window.gtag('event', action, {''
      "event_category": category,""
      "event_label": label;")
    })}
};"
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };'
origin/cursor/automate-test-improve-and-merge-code-eafe;
cursor/website-audit-and-update-with-deployment-76dc;
cursor/fix-lint-push-and-merge-to-main-f3c1;'
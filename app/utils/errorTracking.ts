// Error tracking utility for the application
export const reportError = (error: Error, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[ERROR] ${context || 'Unknown context'}:`, error)
  } else {
    // In production, you would send this to an error tracking service
    // like Sentry, LogRocket, etc.
    console.error('Error reported:', error)
  }
}
export const initErrorReporting = () => {
  if (typeof window !== 'undefined') {
    // Initialize error reporting for client-side
    window.addEventListener('error', (event) => {
      reportError(event.error, 'Global error'
  );
})
    window.addEventListener('unhandledrejection', (event) => {
      reportError(new Error(event.reason), 'Unhandled promise rejection')
    })
  }}
export default { reportError, initErrorReporting }
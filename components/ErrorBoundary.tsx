class ErrorBoundary extends Component<Props, State> {
  constructor (props: Props) {
  super (props)
this.state = {
  hasError: false 
}
}static getDerivedStateFromError (error: Error) : State {
  return {
  hasError: true, error 
}
}> Reload Page </button> >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 console.error ('Error caught by boundary:', error, errorInfo)
this.setState ({
  error
errorInfo 
})
//Call the onError prop if provided if (this.props.onError) {
  this.props.onError (error, errorInfo)
}//Log error to external service (e.g., Sentry) if (typeof window !== 'undefined' && (window as any) .Sentry) {
  (window as any) .Sentry.captureException (error, {
  extra: errorInfo 
})
}

export default function Page() {
-${Math.random().toString(36).substr(2, 9)}`}}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    this.setState({ errorInfo });

    // Log error to console'
    // console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if(this.props.onError) {

      this.props.onError(error, errorInfo)}

    // Send error to error reporting service
    this.reportError(error, errorInfo) }
  private async reportError(error: Error, errorInfo: ErrorInfo) {

    try {
      // Send to your error reporting endpoint'
      await fetch('/api/error-report', {

        method: 'POST',

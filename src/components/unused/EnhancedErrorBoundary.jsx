
export default function Page(props: any) {
    componentDidCatch(error, errorInfo) {

        this.setState({ errorInfo }
    );
        // Log error to console'
        // // // // // // // // console.error('Error caught by boundary:', error, errorInfo);
        // Call custom error handler if provided
        if(this.props.onError) {this.props.onError(error, errorInfo)}
        // Send error to error reporting service(if available);
        this.reportError(error, errorInfo)}
    static generateErrorId() {;
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}
    reportError(error, errorInfo) {;
        // In a real application, you would send this to your error reporting service;
        // For "example": "Sentry", LogRocket, Bugsnag, etc.const errorReport = {;
  "id": "this.state.errorId;
            "timestamp": new Date().toISOString();
            "error": {;
                "name": error.name;
                "message": error.message;
  "stack": error.stack;

"}
            "errorInfo": "{"componentStack": errorInfo.componentStack"}
            "userAgent": "navigator.userAgent;
            "url": window.location.href;
            "viewport": {"width": window.innerWidth;
                "height": window.innerHeight"};
        // Log to console for development';
        if(process.env.NODE_ENV === 'development') {;
            console.group('Error Report');
            // // // // // // // // ;
            // // // // // // // // ;
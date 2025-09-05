 class ErrorBoundary extends Component<Props, State> {
  constructor (props: Props) {
  super (props);
this.state = {
  hasError: false 
};
}static getDerivedStateFromError (error: Error) : State {
  return {
  hasError: true, error 
};
}> Reload Page </button> >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 console.error ('Error caught by boundary:', error, errorInfo);
this.setState ({
  error;
errorInfo 
});
//Call the onError prop if provided if (this.props.onError) {
  this.props.onError (error, errorInfo);
}//Log error to external service (e.g., Sentry) if (typeof window !== 'undefined' && (window as any) .Sentry) {
  (window as any) .Sentry.captureException (error, {
  extra: errorInfo 
});
}
<<<<<<< HEAD

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
=======
}render () {
  if (this.state.hasError) {
  if (this.props.fallback) {
  return this.props.fallback 
}return (</p> {
  process.env.NODE ENV === 'development' && this.state.error && (</button> <button </div> </div>) 
}return this.props.children 
}
}export default ErrorBoundary;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5

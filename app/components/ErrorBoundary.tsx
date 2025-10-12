import { Component, ErrorInfo, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State /> {
  public state: const State = {,
  hasError: false
  };
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="text-6 xl font-boldtext-white mb-4"  >Oops!</h1>
            <p className="text-xl text-gray-300 mb-8">Something went wrong.</p>
            <button
              onClick="{()" =  />this.setState({ hasError: false, error: undefined })}
              className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300"
            >
              Try Again
            </button>
          </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from &amp;apos;react&amp;apos;;

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) =&amp;gt; void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component&amp;lt;Props, State&amp;gt; {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(&amp;apos;ErrorBoundary caught an error:&amp;apos;, error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        &amp;lt;div className=&amp;quot;min-h-screen flex items-center justify-center bg-slate-900&amp;quot;&amp;gt;
          &amp;lt;div className=&amp;quot;text-center p-8&amp;quot;&amp;gt;
            &amp;lt;h1 className=&amp;quot;text-2xl font-bold text-white mb-4&amp;quot;&amp;gt;Something went wrong&amp;lt;/h1&amp;gt;
            &amp;lt;p className=&amp;quot;text-gray-300 mb-6&amp;quot;&amp;gt;
              We&amp;apos;re sorry, but something unexpected happened. Please try refreshing the page.
            &amp;lt;/p&amp;gt;
            &amp;lt;button
              onClick={() =&amp;gt; window.location.reload()}
              className=&amp;quot;px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors&amp;quot;
            &amp;gt;
              Refresh Page
            &amp;lt;/button&amp;gt;
          &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
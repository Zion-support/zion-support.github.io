import React from 'react';

interface ErrorBoundaryState {
hasError: boolean;
error?: Error;
}

interface ErrorBoundaryProps {
children: React.ReactNode;
}

export default class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
constructor(props: ErrorBoundaryProps) {
super(props);
this.state = { hasError: false };
}

static getDerivedStateFromError(error: Error): ErrorBoundaryState {
return { hasError: true, error };
}

componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
console.error('Error caught by boundary:', error, errorInfo);
}

render() {
  if (this.state.hasError) {
    return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
    <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
    <p className="text-zion-slate-light mb-8">
We're sorry, but something unexpected happened. Please try refreshing the page.
</p>
<button
onClick={() => window.location.reload()}
className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors"
>
Refresh Page
</button>
</div>
</div>
);
}

return this.props.children;
}
}
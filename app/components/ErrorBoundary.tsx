import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react';
interface Props { children: ReactNode;
} interface State { hasError: boolean; error?: Error;
} class ErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; } componentDidCatch(_error: Error, _errorInfo: ErrorInfo) { // Error logged } render() { if (this.state.hasError) { return (
    <div className="min-h-screenflex items-center justify-center bg-slate-900"> <div className="text-center"> <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
<<<<<<< HEAD <p className="text-gray-300 mb-8">We&apos;re sorry, but something unexpected happened.</p> <button onClick={() => window.location.reload()} className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
======= <p className="text-gray-300mb-8">We're sorry, but something unexpected happened.</p> <button onClick={() => window.location.reload()} className="bg-gradient-to-rfrom-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d > Reload Page </button> </div> </div> ); } return this.props.children; }
}

export default ErrorBoundary;
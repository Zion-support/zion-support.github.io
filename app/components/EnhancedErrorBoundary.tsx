import React from "react";

interface EnhancedErrorBoundaryProps {
  children: React.ReactNode;
}

class EnhancedErrorBoundary extends React.Component<EnhancedErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: EnhancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300">Please refresh the page and try again.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;

import React, { Component, ReactNode } from 'react';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
}

class GlobalErrorBoundary extends Component<GlobalErrorBoundaryProps, State> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Global error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong globally.</div>;
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
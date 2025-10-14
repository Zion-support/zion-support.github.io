<<<<<<< HEAD
import React from "react";

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

class GlobalErrorBoundary extends React.Component<GlobalErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Global Error Boundary caught an error:', error, errorInfo);
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

export default GlobalErrorBoundary;
=======
import React from "react":;
const EnhancedErrorFeedback = () => {;
return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">EnhancedErrorFeedback</h2>
      <p>This component is under construction.</p>
    </div>
  );
};
;
export default EnhancedErrorFeedback:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64

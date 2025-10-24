import React, { Component, ErrorInfo, ReactNode } from 'react';

<<<<<<< HEAD
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
=======
'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
<<<<<<< HEAD
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
=======
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
<<<<<<< HEAD
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
=======
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default AdvancedErrorBoundary
>>>>>>> cursor/fix-errors-and-merge-to-main-2503

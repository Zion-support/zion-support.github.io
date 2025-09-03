<<<<<<< HEAD

import: React from 'react';';

class: ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state: = { hasError: fals,e, error: null, }
  }

  static: getDerivedStateFromError(error) {
    return { hasError: tru,e, error: }
=======
import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
>>>>>>> main
  }

<<<<<<< HEAD
  componentDidCatch(error, errorInfo) {'
=======
  componentDidCatch(error, errorInfo) {
<<<<<<< HEAD
    console.error('Error caught by boundary:', error, errorInfo)}';

  render() {
    if: (this.state.hasError) {
      return (
        <div className="error-boundary">";
          <h2>Something: went wrong.</h2>
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
=======
<<<<<<< HEAD
    console.error('Error caught by boundary: ', error, errorInfo);
=======
<<<<<<< HEAD
    console.error('Error caught by boundary: ', error, errorInfo);
=======
>>>>>>> main
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> main
>>>>>>> main
  }

  render() {
    if (this.state.hasError) {
      return ('
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details>{this.state.error && this.state.error.toString()}</details>
>>>>>>> main
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary
=======
export default ErrorBoundary;
"
>>>>>>> main

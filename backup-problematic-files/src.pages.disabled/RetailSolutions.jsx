class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

<<<<<<< HEAD
=======
const RetailSolutions = ({ className }) => {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const RetailSolutions = ({ className }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <div className={className || ''}>
      <h1>RetailSolutions</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

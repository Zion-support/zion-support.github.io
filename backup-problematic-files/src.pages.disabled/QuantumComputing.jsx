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

=======
const QuantumComputing = ({ className }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <div className={className || ''}>
      <h1>QuantumComputing</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

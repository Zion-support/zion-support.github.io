<<<<<<< HEAD
return (
=======
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

const Signup = ({ className }) => {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className={className || ''}>

      <h1>Signup</h1>
      <p>This component is under development.</p>
<<<<<<< HEAD
    </div>
=======
    </div>
  );
};

<<<<<<< HEAD
export default Signup;
=======
export default Signup;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

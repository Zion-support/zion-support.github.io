import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Password reset functionality would go here.</p>
    </div>
  );
}

export default ForgotPassword;
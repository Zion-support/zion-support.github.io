<<<<<<< HEAD
import React from "react";
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import React from "react";
import React from './react';
(" ");
export default /**
 * ForgotPassword - Function description
 */
function ForgotPassword() {
  return (
<<<<<<< HEAD
=======

}

=======
    <div>;
      <h1 > Forgot Password</h1>;
      <p > Password reset functionality would go here.</p>;
    </div>);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div>
      <h1>Forgot Password</h1>
      <p>Password reset functionality would go here.</p>
    </div>;
  );
}
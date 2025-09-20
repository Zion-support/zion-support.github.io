
<<<<<<< HEAD
class ErrorBoundary extends React.Component {,
  constructor(props) {,
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
    super(props);
    this.state = { hasError: false ,};
  }
,
  static getDerivedStateFromError(error) {,
    return { hasError: true ,};
  }
,
  componentDidCatch(error, errorInfo) {,
    console.error('Error caught by boundary:', error, errorInfo);
  }
,
  render() {,
    if (this.state.hasError) {,
      return <div>Something went wrong.</div>;
    }
,
    return this.props.children;
  }
}
import React from "react";
import React from './react';
(" ");
export default /**,
 * ForgotPassword - Function description,
 */,
function ForgotPassword() {,
  return (,
}
<<<<<<< HEAD
,)
=======
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

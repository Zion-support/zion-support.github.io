<<<<<<< HEAD

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
<<<<<<< HEAD
export default function About() {
=======

export default function About() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div>;
      <main>;
        <h1>About Zion Tech Group</h1>;
=======
import React from './react';
;
export default /**
 * About - Function description
 */
function About() {
  return (
    <div>;
      <main>;
        <h1 > About Zion Tech Group</h1>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        <p>;
          We are a leading provider of advanced IT solutions and AI services.;
        </p>;
      </main>;
<<<<<<< HEAD
    </div>;
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
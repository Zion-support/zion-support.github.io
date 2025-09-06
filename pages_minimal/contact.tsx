
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
export default function Contact() {
=======

export default function Contact() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div>;
      <main>;
        <h1>Contact Us</h1>;
        <p>Get in touch with our team for your IT and AI service needs.</p>;
      </main>;
    </div>;
  );
}
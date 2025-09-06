
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
export default function NotFoundPage() {
=======

export default function NotFoundPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='container mx-auto px-4 py-20 text-center'>;
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>;
      <p className='mt-2 text-gray-600 dark:text-gray-300'>;
        Sorry, we couldn’t find that page.;
      </p>;
    </div>;
  );export default function NotFoundPage() {;
  return (
    <div className="container mx-auto px-4 py-20 text-center">;
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>;
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find that page.</p>;
    </div>;
  );
}
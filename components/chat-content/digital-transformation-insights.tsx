
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

export default function DigitalTransformationInsightsPage() {;
  return (
    <div className='container mx-auto px-4 py-10'>;
      <h1 className='text-2xl font-semibold'>;
        Digital Transformation Insights;
      </h1>;
      <p className='mt-2 text-gray-600 dark:text-gray-300'>;
        Article coming soon.;
      </p>;
    </div>;
  );export default function DigitalTransformationInsightsPage() {;
  return (
    <div className="container mx-auto px-4 py-10">;
      <h1 className="text-2xl font-semibold">Digital Transformation Insights</h1>;
      <p className="mt-2 text-gray-600 dark: text-gray-300">Article coming soon.</p>;
    </div>;
  );
}

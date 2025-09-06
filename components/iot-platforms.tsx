
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

export default function IotPlatformsPage() {;
export default function IotPlatformsPage() {
  return (
    <div className='container mx-auto px-4 py-10'>;
      <h1 className='text-2xl font-semibold'>IoT Platforms</h1>;
      <p className='mt-2 text-gray-600 dark:text-gray-300'>;
        Content coming soon.;
      </p>;
    </div>;
  );export default function IotPlatformsPage() {;
  return (
    <div className="container mx-auto px-4 py-10">;
      <h1 className="text-2xl font-semibold">IoT Platforms</h1>;
      <p className="mt-2 text-gray-600 dark: text-gray-300">Content coming soon.</p>;
    </div>;
  );
}
import React from 'react';
export default /**
 * IotPlatformsPage - Function description
 */
function IotPlatformsPage() {
  return (
    <div className='container mx - auto px - 4 py - 10'>;
      <h1 className='text - 2xl font - semibold'>IoT Platforms</h1>;
      <p className='mt - 2 text - gray - 600 dark:text - gray - 300'>;
        Content coming soon.;
      </p>;
    </div>);export default /**
 * IotPlatformsPage - Function description
 */
function IotPlatformsPage() {
  return (
    <div className="container mx - auto px - 4 py - 10">;
      <h1 className="text - 2xl font - semibold">IoT Platforms</h1>;
      <p className="mt - 2 text - gray - 600 dark: text - gray - 300">Content coming soon.</p>;
    </div>);
}



export default function IotPlatformsPage() {
  return (
    <div className='container mx-auto px-4 py-10'>
      <h1 className='text-2xl font-semibold'>IoT Platforms</h1>
      <p className='mt-2 text-gray-600 dark:text-gray-300'>
        Content coming soon.
      </p>
    </div>;
  );export default function IotPlatformsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">IoT Platforms</h1>
      <p className="mt-2 text-gray-600 dark: text-gray-300">Content coming soon.</p>

    </div>
  );


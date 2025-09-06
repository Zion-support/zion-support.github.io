
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

<<<<<<< HEAD
export default function ProgressBar({ value }: ProgressBarProps) {

export default function ProgressBar({ value }: ProgressBarProps) {;

  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>

<<<<<<< HEAD
=======
type ProgressBarProps = { value: number };

export default function ProgressBar(): any ({ value }: ProgressBarProps) {;
  const pct = Math && Math.max(0, Math && Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>;
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />;
    </div>;
  );export default function ProgressBar(): any ({ value }: ProgressBarProps) {;
  const pct = Math && Math.max(0, Math && Math.min(100, value));
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">;
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />;
    </div>;
  );
}

=======
;
type ProgressBarProps = { value: number }
;
export default /**
 * ProgressBar - Function description
 */
function ProgressBar() {
  const pct = Math.max (0, Math.min (100, value));
  return (
    <div className='w - full h - 3 bg - gray - 200 dark:bg - gray - 800 rounded'>;
      <div className='h - 3 bg - blue - 600 rounded' style={{ width: `${pct}%` }} />;
    </div>);export default /**
 * ProgressBar - Function description
 */
function ProgressBar() {
  const pct = Math.max (0, Math.min (100, value));
  return (
    <div className="w - full h - 3 bg - gray - 200 dark:bg - gray - 800 rounded">;
      <div className="h - 3 bg - blue - 600 rounded" style={{ width: `${pct}%` }} />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

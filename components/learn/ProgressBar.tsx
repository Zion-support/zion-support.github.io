<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>

<<<<<<< HEAD
type ProgressBarProps = { value: number },
import React from 'react';

type ProgressBarProps = { value: number }
type ProgressBarProps = { value: number };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type ProgressBarProps = { value: number };

export default function ProgressBar({ value }: ProgressBarProps) {
export default function ProgressBar({ value }: ProgressBarProps) {;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
  );export default function ProgressBar({ value }: ProgressBarProps) {;
  );export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return (
    <div className=&quot;w-full h-3 bg-gray-200 dark:bg-gray-800 rounded&quot;>
      <div className=&quot;h-3 bg-blue-600 rounded&quot; style={{ width: `${pct}%` }} />
    </div>
  )

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}



<<<<<<< HEAD
  );
}

}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

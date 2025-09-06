
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

type ProgressBarProps = { value: number }
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

type ProgressBarProps = { value: number };

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function ProgressBar({ value }: ProgressBarProps) {
=======
export default function ProgressBar({ value }: ProgressBarProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const pct = Math.max(0, Math.min(100, value));
  return (
<<<<<<< HEAD
=======
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
  );export default function ProgressBar({ value }: ProgressBarProps) {;
=======
  );export default function ProgressBar({ value }: ProgressBarProps) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const pct = Math.max(0, Math.min(100, value));

  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
);
}
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

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
type ProgressBarProps = any;
=======
type ProgressBarProps = { value: number }
=======

type ProgressBarProps = { value: number };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
  );export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
);
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

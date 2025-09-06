import React from 'react';
<<<<<<< HEAD

type ProgressBarProps = { value: number };

=======
<<<<<<< HEAD
<<<<<<< HEAD

type ProgressBarProps = { value: number };

=======
type ProgressBarProps = { value: number },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
type ProgressBarProps = { value: number },
export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

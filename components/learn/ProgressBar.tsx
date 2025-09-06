import React from 'react';

type ProgressBarProps = { value: number };

export default function ProgressBar({ value }: ProgressBarProps) {;
  const pct = Math.max(0, Math.min(100, value));
  return (
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
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
);
}
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

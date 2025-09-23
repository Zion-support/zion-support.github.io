import React from 'react';

type ProgressBarProps = { value: number };

export default function ProgressBar({ value }: ProgressBarProps) {
<<<<<<< HEAD
  const pct = Math.max(0Math.min(100value));
=======
  const pct = Math.max(0, Math.min(100, value));
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
  );
}
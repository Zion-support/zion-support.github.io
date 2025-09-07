import React from 'react'
type ProgressBarProps = { value: number },

export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value)),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
import React from 'react',
type ProgressBarProps = { value: number },

export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value)),
  return (
    <div className=&quot;w-full h-3 bg-gray-200 dark:bg-gray-800 rounded&quot;>
      <div className=&quot;h-3 bg-blue-600 rounded&quot; style={{ width: `${pct}%` }} />
    </div>
  )
=======
import React from 'react',;
type ProgressBarProps = { value: number },;
export default function ProgressBar({ value }: ProgressBarProps) {;
  const pct = Math.max(0, Math.min(100, value));
  return (;
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">;
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
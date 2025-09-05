import React from 'react';

type ProgressBarProps = {_value: number};

export default function ProgressBar(_{_value}: ProgressBarProps) {_const _pct = Math.max(0, _Math.min(100, _value));
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
  );
}
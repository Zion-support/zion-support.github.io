import React from 'react',

type ProgressBarProps = { value: number
  },
export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value)),
  return (
    <div className="max-w-2xl mx-auto">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
  ),
}
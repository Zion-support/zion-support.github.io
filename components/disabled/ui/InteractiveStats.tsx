import React  from 'react';interface StatItem {
  label: string
   value: string | number
   description?: string
}

:components/disabled/ui/InteractiveStats.tsx
}: InteractiveStatsProps) {
  return (
    <div className={className}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-lg shadow-md"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stat.value}
          </div>
          <div className="text-lg font-semibold text-gray-900 mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-gray-600 text-sm">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
:components/disabled/ui/InteractiveStats.tsx
}

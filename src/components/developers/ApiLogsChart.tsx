import React from 'react';

type LogItem = {
  id: string;
  created_at: string;
};

export const ApiLogsChart: React.FC<{ logs: LogItem[] }> = ({ logs }) => {
  // Minimal placeholder visualization to unblock build
  const countByDay = logs.reduce<Record<string, number>>((acc, log) => {
    const day = new Date(log.created_at).toISOString().slice(0, 10);
    acc[day] = (acc[day] || 0) + 1;
    return acc;
  }, {});

  const entries = Object.entries(countByDay).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[400px]">
        <div className="flex items-end space-x-2 h-32">
          {entries.map(([day, count]) => (
            <div key={day} className="flex flex-col items-center">
              <div
                className="w-6 bg-zion-cyan rounded"
                style={{ height: `${Math.min(100, count * 10)}%` }}
                title={`${day}: ${count}`}
              />
              <span className="text-xs text-zinc-400 mt-1">{day.slice(5)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


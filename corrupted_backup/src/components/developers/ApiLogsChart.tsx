import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ApiLog {
  id: string;
  method: string;
  endpoint: string;
  status_code: number;
  response_time_ms?: number;
  ip_address?: string;
  created_at: string;
}

interface ApiLogsChartProps {
  logs: ApiLog[];
}

export function ApiLogsChart({ logs }: ApiLogsChartProps) {
  // Group logs by day
  const logsByDay = logs.reduce((acc, log) => {
    const date = new Date(log.created_at).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date]++;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(logsByDay).map(([date, count]) => ({
    date,
    requests: count,
  }));

  return (
    <div className="h-64 w-full">
      <h3 className="text-lg font-semibold mb-4 text-white">API Requests Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="date" 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
              color: '#F9FAFB',
            }}
          />
          <Bar 
            dataKey="requests" 
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
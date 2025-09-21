import { useState, useCallback } from 'react',
interface ApiLog {
  id: string,
  method: string,
  endpoint: string,
  status_code: number;
  response_time_ms?: number;
  ip_address?: string;
  created_at: string, }

export function useApiKeys() {
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchApiLogs = useCallback(async (limit: number, offset: number) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockLogs: ApiLog[] = [
        {
          id: '1',
          method: 'GET',
          endpoint: '/api/v1/projects',
          status_code: 200,
          response_time_ms: 150,
          ip_address: '192.168.1.1',
          created_at: '2024-01-20T14:30:00Z',
        },
        {
          id: '2',
          method: 'POST',
          endpoint: '/api/v1/projects',
          status_code: 201,
          response_time_ms: 300,
          ip_address: '192.168.1.1',
          created_at: '2024-01-20T14:25:00Z',
        },
        {
          id: '3',
          method: 'GET',
          endpoint: '/api/v1/users',
          status_code: 200,
          response_time_ms: 120,
          ip_address: '192.168.1.2',
          created_at: '2024-01-20T14:20:00Z',
        }, ];
      
      setLogs(mockLogs);
      setTotalLogs(mockLogs.length); catch (error) {
      console.error('Failed to fetch API logs:', error); finally {
      setLoading(false);
  }, []);

  return {
    logs,
    totalLogs,
    loading,
    fetchApiLogs,
  }, }
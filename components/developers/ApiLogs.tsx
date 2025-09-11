import React, { useState } from 'react';
import { FileText, Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface ApiLog {
  id: string;
  timestamp: string;
  method: string;
  endpoint: string;
  status: number;
  responseTime: number;
  ip: string;
  userAgent: string;
}

const ApiLogs: React.FC = () => {
  const [logs, setLogs] = useState<ApiLog[]>([
    {
      id: '1',
      timestamp: '2024-01-20T10:30:00Z',
      method: 'GET',
      endpoint: '/api/orders',
      status: 200,
      responseTime: 150,
      ip: '192.168.1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    {
      id: '2',
      timestamp: '2024-01-20T10:29:45Z',
      method: 'POST',
      endpoint: '/api/orders',
      status: 201,
      responseTime: 320,
      ip: '192.168.1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    {
      id: '3',
      timestamp: '2024-01-20T10:28:12Z',
      method: 'GET',
      endpoint: '/api/services',
      status: 200,
      responseTime: 89,
      ip: '192.168.1.2',
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return 'bg-green-100 text-green-800';
    if (status >= 300 && status < 400) return 'bg-blue-100 text-blue-800';
    if (status >= 400 && status < 500) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch =
      log.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.method.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || log.status.toString().startsWith(statusFilter);

    return matchesSearch && matchesStatus;
  });

  const exportLogs = () => {
    const csvContent = [
      'Timestamp,Method,Endpoint,Status,Response Time (ms),IP,User Agent',
      ...filteredLogs.map(
        log =>
          `${log.timestamp},${log.method},${log.endpoint},${log.status},${log.responseTime},${log.ip},"${log.userAgent}"`
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'api-logs.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>API Logs</h2>
          <p className='text-gray-600'>
            Monitor your API usage and performance
          </p>
        </div>
        <Button onClick={exportLogs}>
          <Download className='h-4 w-4 mr-2' />
          Export Logs
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className='p-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Search
              </label>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
                <Input
                  placeholder='Search logs...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='pl-10'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Status
              </label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder='All Statuses' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Statuses</SelectItem>
                  <SelectItem value='2'>2xx Success</SelectItem>
                  <SelectItem value='3'>3xx Redirect</SelectItem>
                  <SelectItem value='4'>4xx Client Error</SelectItem>
                  <SelectItem value='5'>5xx Server Error</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='flex items-end'>
              <Button variant='outline' className='w-full'>
                <Filter className='h-4 w-4 mr-2' />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <FileText className='h-5 w-5 mr-2' />
            Recent API Calls
          </CardTitle>
          <CardDescription>{filteredLogs.length} logs found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b'>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    Timestamp
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    Method
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    Endpoint
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    Status
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    Response Time
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-700'>
                    IP
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id} className='border-b hover:bg-gray-50'>
                    <td className='py-3 px-4 text-sm text-gray-600'>
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className='py-3 px-4'>
                      <Badge variant='outline' className='font-mono'>
                        {log.method}
                      </Badge>
                    </td>
                    <td className='py-3 px-4 text-sm font-mono text-gray-600'>
                      {log.endpoint}
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status}
                      </Badge>
                    </td>
                    <td className='py-3 px-4 text-sm text-gray-600'>
                      {log.responseTime}ms
                    </td>
                    <td className='py-3 px-4 text-sm text-gray-600'>
                      {log.ip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLogs.length === 0 && (
            <div className='text-center py-8'>
              <FileText className='h-12 w-12 text-gray-400 mx-auto mb-4' />
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                No logs found
              </h3>
              <p className='text-gray-600'>
                Try adjusting your search criteria or check back later.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiLogs;

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Activity, Server, Cpu, HardDrive } from 'lucide-react';

interface MonitoringData {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLatency: number;
  uptime: number;
  activeConnections: number;
}

interface ComprehensiveMonitoringDashboardProps {
  data: MonitoringData;
  className?: string;
}

export const ComprehensiveMonitoringDashboard: React.FC<ComprehensiveMonitoringDashboardProps> = ({
  data,
  className = ''
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600" />
            <span>System Monitoring Dashboard</span>
          </CardTitle>
          <CardDescription>
            Real-time system performance and health metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Cpu className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold">{data.cpuUsage}%</div>
                    <div className="text-sm text-gray-600">CPU Usage</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Server className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">{data.memoryUsage}%</div>
                    <div className="text-sm text-gray-600">Memory Usage</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <HardDrive className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold">{data.diskUsage}%</div>
                    <div className="text-sm text-gray-600">Disk Usage</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Activity className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold">{data.networkLatency}ms</div>
                    <div className="text-sm text-gray-600">Network Latency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveMonitoringDashboard;
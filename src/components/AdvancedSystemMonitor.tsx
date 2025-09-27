import React from 'react';

interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLatency: number;
  uptime: number;
}

interface AdvancedSystemMonitorProps {
  onSystemUpdate?: (metrics: SystemMetrics) => void;
}

export const AdvancedSystemMonitor: React.FC<AdvancedSystemMonitorProps> = ({
  onSystemUpdate
}) => {
  const [metrics, setMetrics] = React.useState<SystemMetrics | null>(null);

  const updateSystemMetrics = React.useCallback(() => {
    const newMetrics: SystemMetrics = {
      cpuUsage: Math.random() * 100,
      memoryUsage: Math.random() * 100,
      diskUsage: Math.random() * 100,
      networkLatency: Math.random() * 100,
      uptime: Date.now() - Date.now() + 86400000 // 24 hours
    };

    setMetrics(newMetrics);
    onSystemUpdate?.(newMetrics);
  }, [onSystemUpdate]);

  React.useEffect(() => {
    updateSystemMetrics();
  }, [updateSystemMetrics]);

  return (
    <div className="advanced-system-monitor">
      {metrics && (
        <div>
          <h3>System Monitor</h3>
          <p>CPU Usage: {metrics.cpuUsage.toFixed(1)}%</p>
          <p>Memory Usage: {metrics.memoryUsage.toFixed(1)}%</p>
          <p>Disk Usage: {metrics.diskUsage.toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default AdvancedSystemMonitor;
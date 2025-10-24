'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Wifi } from 'lucide-react';

interface SystemMonitorProps {
  showDetails?: boolean;
  refreshInterval?: number;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  showDetails = true,
  refreshInterval = 5000,
}) => {
  const [systemStats, setSystemStats] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
  });

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateStats = () => {
      // Simulate system monitoring (in a real app, you'd get this from an API)
      setSystemStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
      });
    };

    // Initial update
    updateStats();

    // Set up interval
    const interval = setInterval(updateStats, refreshInterval);

    // Monitor online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [refreshInterval]);

  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500';
    if (value < 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusText = (value: number) => {
    if (value < 50) return 'Good';
    if (value < 80) return 'Moderate';
    return 'High';
  };

  return (
    <div className="system-monitor">
      <div className="monitor-header">
        <div className="monitor-title">
          <Activity size={20} />
          <span>System Monitor</span>
        </div>
        <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </div>
      </div>

      <div className="monitor-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <Cpu size={16} />
          </div>
          <div className="stat-content">
            <div className="stat-label">CPU</div>
            <div className="stat-value">
              <span className={getStatusColor(systemStats.cpu)}>
                {systemStats.cpu.toFixed(1)}%
              </span>
              <span className="stat-status">
                {getStatusText(systemStats.cpu)}
              </span>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <HardDrive size={16} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Memory</div>
            <div className="stat-value">
              <span className={getStatusColor(systemStats.memory)}>
                {systemStats.memory.toFixed(1)}%
              </span>
              <span className="stat-status">
                {getStatusText(systemStats.memory)}
              </span>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <HardDrive size={16} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Disk</div>
            <div className="stat-value">
              <span className={getStatusColor(systemStats.disk)}>
                {systemStats.disk.toFixed(1)}%
              </span>
              <span className="stat-status">
                {getStatusText(systemStats.disk)}
              </span>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <Wifi size={16} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Network</div>
            <div className="stat-value">
              <span className={getStatusColor(systemStats.network)}>
                {systemStats.network.toFixed(1)}%
              </span>
              <span className="stat-status">
                {getStatusText(systemStats.network)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="monitor-details">
          <div className="detail-item">
            <span>Last Updated:</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
          <div className="detail-item">
            <span>Refresh Rate:</span>
            <span>{refreshInterval / 1000}s</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemMonitor;
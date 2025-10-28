'use client';

import React, { memo } from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const SystemMonitor: React.FC<SystemMonitorProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`system-monitor ${className}`}>
      {children}
    </div>
  );
});

SystemMonitor.displayName = 'SystemMonitor';

export default SystemMonitor;
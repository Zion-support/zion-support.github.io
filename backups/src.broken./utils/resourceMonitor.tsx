/* global ErrorEvent, Event */
import React, { useState, useEffect } from 'react';

interface ResourceError {
  url: string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number;
}

interface ResourceMonitorProps {
  children: React.ReactNode;
}

const ResourceMonitor: React.FC<ResourceMonitorProps> = ({ children }) => {
  const [errors, setErrors] = useState<ResourceError[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (!isMonitoring) return;

    const handleError = (event: ErrorEvent) => {
      const resourceError: ResourceError = {
        url: event.filename || '',
        type: getResourceType(event.filename || ''),
        error: event.message,
        timestamp: Date.now(),
      };
      
      setErrors(prev => [...prev, resourceError]);
    };

    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'SCRIPT' || target.tagName === 'LINK')) {
        const resourceError: ResourceError = {
          url: (target as any).src || (target as any).href || '',
          type: getResourceType((target as any).src || (target as any).href || ''),
          error: 'Resource failed to load',
          timestamp: Date.now(),
        };
        
        setErrors(prev => [...prev, resourceError]);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('error', handleResourceError, true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, [isMonitoring]);

  const getResourceType = (url: string): 'script' | 'stylesheet' | 'image' | 'font' | 'other' => {
    const extension = url.split('.').pop()?.toLowerCase();
    
    if (['js', 'mjs'].includes(extension || '')) return 'script';
    if (['css'].includes(extension || '')) return 'stylesheet';
    if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(extension || '')) return 'image';
    if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(extension || '')) return 'font';
    
    return 'other';
  };

  const startMonitoring = () => setIsMonitoring(true);
  const stopMonitoring = () => setIsMonitoring(false);
  const clearErrors = () => setErrors([]);

  return (
    <div>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ position: 'fixed', bottom: 0, right: 0, background: '#f0f0f0', padding: '10px', fontSize: '12px' }}>
          <div>Resource Errors: {errors.length}</div>
          <button onClick={startMonitoring}>Start</button>
          <button onClick={stopMonitoring}>Stop</button>
          <button onClick={clearErrors}>Clear</button>
          {errors.length > 0 && (
            <div style={{ maxHeight: '200px', overflow: 'auto' }}>
              {errors.map((error, index) => (
                <div key={index} style={{ margin: '5px 0', padding: '5px', background: '#ffebee', border: '1px solid #f44336' }}>
                  <div><strong>{error.type}</strong>: {error.url}</div>
                  <div>{error.error}</div>
                  <div style={{ fontSize: '10px', color: '#666' }}>
                    {new Date(error.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourceMonitor;
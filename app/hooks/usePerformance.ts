import { useState, useEffect, useCallback } from 'react';

interface PerformanceState {
  isSlowConnection: boolean;
  isLowEndDevice: boolean;
  memoryUsage?: number;
  connectionType?: string;
}

export function usePerformance() {
  const [state, setState] = useState<PerformanceState>({
    isSlowConnection: false,
    isLowEndDevice: false,
  });

  const checkConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const slowConnections = ['slow-2g', '2g', '3g'];
      return slowConnections.includes(connection.effectiveType);
    }
    return false;
  }, []);

  const checkDeviceCapabilities = useCallback(() => {
    // Check for low-end device indicators
    const isLowEnd = 
      navigator.hardwareConcurrency <= 2 || // Low CPU cores
      (navigator as any).deviceMemory <= 2 || // Low RAM
      screen.width <= 768; // Small screen
    
    return isLowEnd;
  }, []);

  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    const updatePerformanceState = () => {
      setState(prev => ({
        ...prev,
        isSlowConnection: checkConnectionSpeed(),
        isLowEndDevice: checkDeviceCapabilities(),
        memoryUsage: getMemoryUsage()?.used,
        connectionType: (navigator as any).connection?.effectiveType,
      }));
    };

    // Initial check
    updatePerformanceState();

    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', updatePerformanceState);
      
      return () => {
        connection.removeEventListener('change', updatePerformanceState);
      };
    }
  }, [checkConnectionSpeed, checkDeviceCapabilities, getMemoryUsage]);

  const optimizeForPerformance = useCallback(() => {
    // Disable animations for low-end devices
    if (state.isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0ms');
    }
    
    // Reduce image quality for slow connections
    if (state.isSlowConnection) {
      document.documentElement.classList.add('low-bandwidth');
    }
  }, [state.isLowEndDevice, state.isSlowConnection]);

  useEffect(() => {
    optimizeForPerformance();
  }, [optimizeForPerformance]);

  return { 
    state, 
    setState,
    optimizeForPerformance,
    isSlowConnection: state.isSlowConnection,
    isLowEndDevice: state.isLowEndDevice,
    memoryUsage: state.memoryUsage,
    connectionType: state.connectionType,
  };
}

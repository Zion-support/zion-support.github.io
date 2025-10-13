import { useState, useEffect, useCallback } from 'react';

interface PerformanceState {
  data: any;
  loading: boolean;
  error: string | null;
}

export const useEnhancedPerformance = () => {
  const [state, setState] = useState<PerformanceState>({
    data: null,
    loading: false,
    error: null
  });

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setState(prev => ({ ...prev, data: 'Performance data loaded', loading: false }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Unknown error',
        loading: false 
      }));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData
  };
};

export default useEnhancedPerformance;
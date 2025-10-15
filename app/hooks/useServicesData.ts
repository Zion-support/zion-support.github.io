import { useState, useEffect, useCallback } from 'react';
import { servicesDataOptimized, Service } from '../data/servicesDataOptimized';

interface UseServicesDataReturn {
  services: Service[];
  loading: boolean;
  error: string | null;
  getServiceById: (id: string) => Service | undefined;
  getServicesByCategory: (category: 'ai' | 'it' | 'microsaas') => Service[];
}

export const useServicesData = (): UseServicesDataReturn => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate async loading for better UX
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const allServices = [
        ...servicesDataOptimized.aiServices,
        ...servicesDataOptimized.itServices,
        ...servicesDataOptimized.microSAAS
      ];
      
      setServices(allServices);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load services');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  const getServiceById = useCallback((id: string): Service | undefined => {
    return servicesDataOptimized.getServiceById(id);
  }, []);

  const getServicesByCategory = useCallback((category: 'ai' | 'it' | 'microsaas'): Service[] => {
    return servicesDataOptimized.getServicesByCategory(category);
  }, []);

  return {
    services,
    loading,
    error,
    getServiceById,
    getServicesByCategory
  };
};

export default useServicesData;
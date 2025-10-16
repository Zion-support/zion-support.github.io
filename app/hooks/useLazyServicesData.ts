import { useState, useEffect, useCallback } from 'react';

// Define the services data type
interface ServicesData {
  [key: string]: any[];
}

// Lazy loading hook for services data
export const useLazyServicesData = () => {
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadServicesData = useCallback(async () => {
    if (servicesData) return servicesData; // Already loaded
    
    setLoading(true);
    setError(null);
    
    try {
      // Dynamic import for code splitting
      const { servicesData: data } = await import('../data/servicesData');
      setServicesData(data);
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load services data');
      setError(error);
      console.error('Failed to load services data:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [servicesData]);

  // Load data on first call
  useEffect(() => {
    if (!servicesData && !loading && !error) {
      loadServicesData();
    }
  }, [loadServicesData, servicesData, loading, error]);

  return {
    servicesData,
    loading,
    error,
    loadServicesData,
    isLoaded: !!servicesData,
  };
};

// Hook for specific service categories
export const useLazyServiceCategory = (category: string) => {
  const { servicesData, loading, error, loadServicesData } = useLazyServicesData();
  const [categoryData, setCategoryData] = useState<any[] | null>(null);

  useEffect(() => {
    if (servicesData && category) {
      const data = servicesData[category];
      setCategoryData(data);
    }
  }, [servicesData, category]);

  return {
    data: categoryData,
    loading,
    error,
    loadData: loadServicesData,
    isLoaded: !!categoryData,
  };
};

// Hook for individual service
export const useLazyService = (serviceId: string) => {
  const { servicesData, loading, error, loadServicesData } = useLazyServicesData();
  const [service, setService] = useState<any | null>(null);

  useEffect(() => {
    if (servicesData && serviceId) {
      // Search through all categories for the service
      let foundService = null;
      for (const category in servicesData) {
        const services = servicesData[category];
        if (Array.isArray(services)) {
          foundService = services.find((s: any) => s.id === serviceId);
          if (foundService) break;
        }
      }
      setService(foundService);
    }
  }, [servicesData, serviceId]);

  return {
    service,
    loading,
    error,
    loadData: loadServicesData,
    isLoaded: !!service,
  };
};
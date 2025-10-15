import { useState, useEffect, useCallback } from 'react';
import { Service, ServicesData } from '../data/servicesData';

interface UseServicesDataReturn {
  aiServices: Service[];
  itServices: Service[];
  microSAAS: Service[];
  enterpriseServices: Service[];
  loading: boolean;
  error: string | null;
  loadService: (serviceType: keyof ServicesData) => Promise<void>;
}

export const useServicesData = (): UseServicesDataReturn => {
  const [aiServices, setAIServices] = useState<Service[]>([]);
  const [itServices, setITServices] = useState<Service[]>([]);
  const [microSAAS, setMicroSAAS] = useState<Service[]>([]);
  const [enterpriseServices, setEnterpriseServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadService = useCallback(async (serviceType: keyof ServicesData) => {
    try {
      setLoading(true);
      setError(null);

      switch (serviceType) {
        case 'aiServices': {
          if (aiServices.length === 0) {
            const { aiServices: data } = await import('../data/servicesData/aiServices');
            setAIServices(data);
          }
          break;
        }
        case 'itServices': {
          if (itServices.length === 0) {
            const { itServices: data } = await import('../data/servicesData/itServices');
            setITServices(data);
          }
          break;
        }
        case 'microSAAS': {
          if (microSAAS.length === 0) {
            const { microSAAS: data } = await import('../data/servicesData/microSAAS');
            setMicroSAAS(data);
          }
          break;
        }
        case 'enterpriseServices': {
          if (enterpriseServices.length === 0) {
            const { enterpriseServices: data } = await import('../data/servicesData/enterpriseServices');
            setEnterpriseServices(data);
          }
          break;
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load service data');
    } finally {
      setLoading(false);
    }
  }, [aiServices.length, itServices.length, microSAAS.length, enterpriseServices.length]);

  // Load AI services by default
  useEffect(() => {
    loadService('aiServices');
  }, [loadService]);

  return {
    aiServices,
    itServices,
    microSAAS,
    enterpriseServices,
    loading,
    error,
    loadService
  };
};
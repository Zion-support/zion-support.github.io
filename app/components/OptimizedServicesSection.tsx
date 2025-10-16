import React, { Suspense, lazy, useState } from 'react';
import { useLazyServicesData } from '../hooks/useLazyServicesData';

// Lazy load heavy components - create simple placeholders for now
const ServiceCard = lazy(() => Promise.resolve({ 
  default: ({ service, onClick }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
      <div className="text-blue-600 font-medium">Learn More →</div>
    </div>
  )
}));

const ServiceModal = lazy(() => Promise.resolve({ 
  default: ({ service, onClose }: any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="space-y-2">
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc list-inside space-y-1">
            {service.features?.slice(0, 5).map((feature: string, index: number) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}));

// Loading component
const ServiceCardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-lg shadow-md p-6">
    <div className="h-6 bg-gray-200 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded mb-4"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
  </div>
);

// Error boundary component
class ServiceErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Service component error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Unable to load services
          </h3>
          <p className="text-gray-500">
            Please try refreshing the page or contact support.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

interface OptimizedServicesSectionProps {
  category?: string;
  limit?: number;
  showLoadMore?: boolean;
}

export const OptimizedServicesSection: React.FC<OptimizedServicesSectionProps> = ({
  category = 'aiServices',
  limit = 6,
  showLoadMore = true,
}) => {
  const { servicesData, loading, error, loadServicesData } = useLazyServicesData();
  const [selectedService, setSelectedService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(limit);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + limit);
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit }).map((_, index) => (
          <ServiceCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <h3 className="text-lg font-semibold text-red-600 mb-2">
          Error loading services
        </h3>
        <p className="text-gray-500 mb-4">
          {error.message || 'Something went wrong'}
        </p>
        <button
          onClick={loadServicesData}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!servicesData) {
    return (
      <div className="text-center p-8">
        <button
          onClick={loadServicesData}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Load Services
        </button>
      </div>
    );
  }

  const services = (servicesData?.[category] as any[]) || [];
  const visibleServices = services.slice(0, visibleCount);
  const hasMore = visibleCount < services.length;

  return (
    <ServiceErrorBoundary>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service: any) => (
            <Suspense key={service.id} fallback={<ServiceCardSkeleton />}>
              <ServiceCard
                service={service}
                onClick={() => handleServiceClick(service)}
              />
            </Suspense>
          ))}
        </div>

        {showLoadMore && hasMore && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Load More Services ({services.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {selectedService && (
          <Suspense fallback={<div>Loading service details...</div>}>
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          </Suspense>
        )}
      </div>
    </ServiceErrorBoundary>
  );
};

export default OptimizedServicesSection;
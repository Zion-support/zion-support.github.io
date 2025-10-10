'use client';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default ServiceWorker;

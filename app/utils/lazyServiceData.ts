// Lazy loading utility for services data
export const loadServicesData = async () => {
  const { servicesData } = await import('../data/servicesData');
  return servicesData;
};

// Cache for loaded data
let cachedServicesData: any = null;

export const getServicesData = async () => {
  if (cachedServicesData) {
    return cachedServicesData;
  }
  
  cachedServicesData = await loadServicesData();
  return cachedServicesData;
};

// Preload services data for better performance
export const preloadServicesData = () => {
  if (!cachedServicesData) {
    loadServicesData().then(data => {
      cachedServicesData = data;
    });
  }
};

// API services for the application
export interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
  rating?: number;
}

export async function getServices(): Promise<Service[]> {
  // Mock data for now
  return [
    {
      id: '1',
      name: 'AI Consulting',
      description: 'AI strategy and implementation consulting',
      price: 5000,
      rating: 4.8
    }
  ];
}

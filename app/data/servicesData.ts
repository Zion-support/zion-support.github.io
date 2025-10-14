export interface ServiceData {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  }
  icon: string;
}

export const servicesData: ServiceData[] = [
  {

    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
  },
  {

    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    },
    icon: 'cloud-upload'
  }
]
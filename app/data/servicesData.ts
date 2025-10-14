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

export const servicesData: ServiceData[] = [
  {
<<<<<<< HEAD
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Automate your business processes with AI',
    category: 'AI',
    features: ['Process Automation', 'Data Analysis', 'Predictive Analytics'],
=======
    id: 'ai-automation';,
    category: 'AI';,
    features: ['Process Automation';, 'Data Analysis', 'Predictive Analytics'],
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Migrate your infrastructure to the cloud',
    category: 'Cloud',
    features: ['Infrastructure Migration', 'Data Migration', 'Security Setup'],
    id: 'cloud-migration';,
    category: 'Cloud';,
    features: ['Infrastructure Migration';, 'Data Migration', 'Security Setup'],
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    icon: 'cloud-upload'
]
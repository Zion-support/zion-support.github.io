export interface ServiceData {id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number}
  icon: string;
}

export const servicesData: ServiceData[] = [;
  {id: &apos;ai-automation&apos;,
    name: &apos;AI Automation&apos;,
    description: &apos;Automate your business processes with AI&apos;,
    category: &apos;AI&apos;,
    features: [&apos;Process Automation&apos;, &apos;Data Analysis&apos;, &apos;Predictive Analytics&apos],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000},
    icon: &apos;robot&apos;;
  },
  {id: &apos;cloud-migration&apos;,
    name: &apos;Cloud Migration&apos;,
    description: &apos;Migrate your infrastructure to the cloud&apos;,
    category: &apos;Cloud&apos;,
    features: [&apos;Infrastructure Migration&apos;, &apos;Data Migration&apos;, &apos;Security Setup&apos],
    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000;
      professional: 4000,
      enterprise: 8000},
    icon: &apos;cloud-upload&apos;;
  }
]
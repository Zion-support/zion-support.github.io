export interface ServiceData {
  id: string
  name: string
  description: string
  category: string
  features: string[]
  pricing: {
    starter: number
    professional: number
    enterprise: number
  }
  icon: string
}

export const servicesData: ServiceData[] = [
  {
    id: 'ai-automation'
    name: 'AI Automation'
    description: 'Automate your business processes with AI'
    category: 'AI'
    features: ['Process Automation', 'Data Analysis', 'Predictive Analytics'
    icon: 'robot'
    id: 'cloud-migration'
    name: 'Cloud Migration'
    description: 'Migrate your infrastructure to the cloud'
    category: 'Cloud'
    features: ['Infrastructure Migration', 'Data Migration', 'Security Setup'
    icon: 'cloud-upload'
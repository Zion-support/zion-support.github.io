<<<<<<< HEAD
export const CATEGORIES = [
  {
    id: '1',
    name: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    icon: 'brain',
    description: 'Artificial intelligence and machine learning solutions',
    count: 25
  },
  {
    id: '2',
    name: 'Web Development',
    slug: 'web-development',
    icon: 'code',
    description: 'Modern web applications and websites',
    count: 18
  },
  {
    id: '3',
    name: 'Mobile Development',
    slug: 'mobile-development',
    icon: 'smartphone',
    description: 'iOS and Android mobile applications',
    count: 12
  },
  {
    id: '4',
    name: 'Cloud Services',
    slug: 'cloud-services',
    icon: 'cloud',
    description: 'Cloud infrastructure and deployment solutions',
    count: 15
  },
  {
    id: '5',
    name: 'Data Analytics',
    slug: 'data-analytics',
    icon: 'bar-chart',
    description: 'Data analysis and business intelligence tools',
    count: 8
  },
  {
    id: '6',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    icon: 'shield',
    description: 'Security solutions and protection services',
    count: 10
=======
export interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  count: number;
  slug: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions and machine learning services",
    icon: "Brain",
    count: 25,
    slug: "ai-machine-learning"
  },
  {
    id: 2,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: "BarChart3",
    count: 18,
    slug: "data-analytics"
  },
  {
    id: 3,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and services",
    icon: "Cloud",
    count: 32,
    slug: "cloud-services"
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions",
    icon: "Shield",
    count: 15,
    slug: "cybersecurity"
  },
  {
    id: 5,
    title: "Software Development",
    description: "Custom software solutions and development services",
    icon: "Code",
    count: 28,
    slug: "software-development"
  },
  {
    id: 6,
    title: "Database Management",
    description: "Database design, optimization, and management services",
    icon: "Database",
    count: 12,
    slug: "database-management"
  },
  {
    id: 7,
    title: "Hardware Solutions",
    description: "AI hardware and computing solutions",
    icon: "Cpu",
    count: 8,
    slug: "hardware-solutions"
  },
  {
    id: 8,
    title: "Network Infrastructure",
    description: "Network design, implementation, and management",
    icon: "Network",
    count: 14,
    slug: "network-infrastructure"
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  }
];
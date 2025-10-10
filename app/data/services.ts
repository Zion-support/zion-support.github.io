export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Custom AI development and machine learning solutions tailored to your business needs',
    category: 'AI & Machine Learning',
    price: 'Starting at $5,000/month',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    benefits: ['Automated decision making', 'Improved efficiency', 'Cost reduction', 'Competitive advantage'],
    icon: 'Brain',
    popular: true
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses',
    category: 'Infrastructure',
    price: 'Starting at $2,000/month',
    features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    benefits: ['Scalability', 'Cost optimization', 'High availability', 'Global reach'],
    icon: 'Cloud',
    popular: false
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    category: 'Security',
    price: 'Starting at $3,000/month',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
    benefits: ['Data protection', 'Regulatory compliance', 'Risk mitigation', 'Peace of mind'],
    icon: 'Shield',
    popular: true
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics',
    category: 'Analytics',
    price: 'Starting at $1,500/month',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Dashboards', 'Custom Reports'],
    benefits: ['Data-driven decisions', 'Performance insights', 'Cost optimization', 'Growth opportunities'],
    icon: 'BarChart',
    popular: false
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    category: 'Development',
    price: 'Starting at $3,500/project',
    features: ['React/Next.js', 'Node.js Backend', 'Mobile Responsive', 'SEO Optimized'],
    benefits: ['Modern design', 'Fast performance', 'Mobile-friendly', 'Search optimized'],
    icon: 'Code',
    popular: false
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    category: 'Development',
    price: 'Starting at $5,000/project',
    features: ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization'],
    benefits: ['Native performance', 'Cross-platform', 'App store ready', 'User engagement'],
    icon: 'Smartphone',
    popular: false
  },
  {
    id: 'iot-solutions',
    name: 'IoT Solutions',
    description: 'Connect and manage devices with our comprehensive IoT platform',
    category: 'IoT',
    price: 'Starting at $4,000/month',
    features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Security'],
    benefits: ['Operational efficiency', 'Predictive maintenance', 'Cost savings', 'Automation'],
    icon: 'Wifi',
    popular: false
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business goals',
    category: 'Consulting',
    price: 'Starting at $200/hour',
    features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'],
    benefits: ['Strategic alignment', 'Technology roadmap', 'Process improvement', 'Digital transformation'],
    icon: 'Users',
    popular: false
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'AI & Machine Learning', name: 'AI & ML', count: services.filter(s => s.category === 'AI & Machine Learning').length },
  { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
  { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
  { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
  { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
  { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
  { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length }
];

export const servicePricing = {
  basic: {
    name: 'Basic',
    price: '$2,000/month',
    features: ['Up to 3 services', 'Basic support', 'Standard features', 'Email support'],
    popular: false
  },
  professional: {
    name: 'Professional',
    price: '$5,000/month',
    features: ['Up to 5 services', 'Priority support', 'Advanced features', 'Phone support'],
    popular: true
  },
  enterprise: {
    name: 'Enterprise',
    price: '$10,000/month',
    features: ['Unlimited services', '24/7 support', 'Custom features', 'Dedicated manager'],
    popular: false
  }
};
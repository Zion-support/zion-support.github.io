export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development Services',
    description: 'Custom AI solutions tailored to your business needs',
    shortDescription: 'Build intelligent applications with our AI expertise',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Custom AI Solutions'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Better customer insights',
      'Reduced operational costs'
    ],
    useCases: [
      'Chatbots and virtual assistants',
      'Predictive maintenance',
      'Fraud detection',
      'Recommendation systems'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'https://ziontech.com/ai'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    shortDescription: 'Professional web development services',
    icon: '🌐',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'API Development',
      'Performance Optimization',
      'SEO Optimization'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: [
      'Mobile-first design',
      'Fast loading times',
      'SEO optimized',
      'Scalable architecture'
    ],
    useCases: [
      'Corporate websites',
      'E-commerce platforms',
      'Web applications',
      'Portfolio sites'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-555-0124',
      email: 'web@ziontech.com',
      website: 'https://ziontech.com/web'
    }
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    shortDescription: 'Build powerful mobile experiences',
    icon: '📱',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications'
    ],
    pricing: {
      basic: 8000,
      pro: 25000,
      enterprise: 80000
    },
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'App store presence',
      'User engagement features'
    ],
    useCases: [
      'Business applications',
      'E-commerce apps',
      'Social media apps',
      'Utility apps'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    contactInfo: {
      phone: '+1-555-0125',
      email: 'mobile@ziontech.com',
      website: 'https://ziontech.com/mobile'
    }
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    shortDescription: 'Migrate and optimize your cloud infrastructure',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling',
      'Security Implementation',
      'Cost Optimization',
      '24/7 Monitoring'
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better reliability'
    ],
    useCases: [
      'Data center migration',
      'Application hosting',
      'Disaster recovery',
      'Development environments'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    contactInfo: {
      phone: '+1-555-0126',
      email: 'cloud@ziontech.com',
      website: 'https://ziontech.com/cloud'
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets',
    shortDescription: 'Secure your business with our cybersecurity expertise',
    icon: '🔒',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Training',
      'Incident Response',
      'Compliance Management'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Protection against threats',
      'Compliance assurance',
      'Risk mitigation',
      'Security awareness'
    ],
    useCases: [
      'Security assessments',
      'Compliance audits',
      'Security training',
      'Incident response'
    ],
    technologies: ['OWASP', 'NIST', 'ISO 27001', 'SOC 2', 'GDPR'],
    contactInfo: {
      phone: '+1-555-0127',
      email: 'security@ziontech.com',
      website: 'https://ziontech.com/security'
    }
  }
];

export default services;

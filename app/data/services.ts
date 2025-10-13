import {
  Brain, Shield, Stethoscope, DollarSign, Truck, FileText, Factory,
  GraduationCap, MessageSquare, Settings, BarChart, Eye, CreditCard,
  Cloud, Building, Database, Lock, Code, Smartphone, Settings as SettingsIcon,
  Target, Zap, BarChart as BarChartIcon, Users, Globe, Cpu, Lock as LockIcon
} from 'lucide-react';

export const microSAASServices = [
  // Productivity & Management Tools
  {
    title: 'AI Project Manager Pro',
    description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
    users: '10,000+',
    freeTrial: '14 days',
    icon: Brain,
    category: 'Productivity',
    pricing: '$29/month'
  },
  {
    title: 'AI Meeting Assistant Pro',
    description: 'Revolutionary meeting management with real-time transcription, action item extraction, and intelligent follow-ups. Used by Fortune 500 companies.',
    users: '20,000+',
    freeTrial: '14 days',
    icon: MessageSquare,
    category: 'Communication',
    pricing: '$19/month'
  },
  {
    title: 'AI Document Intelligence Pro',
    description: 'Transform any document into actionable insights with AI-powered analysis, summarization, and knowledge extraction.',
    users: '15,000+',
    freeTrial: '7 days',
    icon: FileText,
    category: 'Document Management',
    pricing: '$39/month'
  },
  {
    title: 'AI Personal Assistant Pro',
    description: 'Your intelligent personal assistant that manages emails, schedules, and tasks with natural language processing.',
    users: '45,000+',
    freeTrial: '14 days',
    icon: Brain,
    category: 'Personal Productivity',
    pricing: '$15/month'
  },
  {
    title: 'AI Team Collaboration Hub',
    description: 'Advanced team collaboration platform with AI-powered insights, smart notifications, and productivity analytics.',
    users: '25,000+',
    freeTrial: '30 days',
    icon: Users,
    category: 'Team Collaboration',
    pricing: '$49/month'
  }
];

export const enterpriseServices = [
  {
    title: 'AI-Powered Business Intelligence',
    description: 'Advanced analytics and business intelligence solutions powered by machine learning and AI.',
    icon: BarChart,
    category: 'Analytics',
    features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization']
  },
  {
    title: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for complex problem solving and optimization.',
    icon: Cpu,
    category: 'Quantum Computing',
    features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research support']
  },
  {
    title: 'Autonomous Systems Development',
    description: 'Development of autonomous systems for various industries including robotics and IoT.',
    icon: Settings,
    category: 'Autonomous Systems',
    features: ['Robotics', 'IoT integration', 'Machine learning', 'Sensor fusion']
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation services to modernize your business processes.',
    icon: Building,
    category: 'Consulting',
    features: ['Process optimization', 'Technology integration', 'Change management', 'Training']
  },
  {
    title: 'Cloud Infrastructure Solutions',
    description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
    icon: Cloud,
    category: 'Cloud Services',
    features: ['Cloud migration', 'Infrastructure as code', 'Security', 'Monitoring']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets.',
    icon: Shield,
    category: 'Security',
    features: ['Threat detection', 'Security audits', 'Compliance', 'Incident response']
  }
];

export const serviceCategories = [
  { name: 'AI Solutions', icon: Brain, count: 12 },
  { name: 'Cloud Services', icon: Cloud, count: 8 },
  { name: 'Security', icon: Shield, count: 6 },
  { name: 'Analytics', icon: BarChart, count: 10 },
  { name: 'Consulting', icon: MessageSquare, count: 5 },
  { name: 'Development', icon: Code, count: 15 }
];

export default {
  microSAASServices,
  enterpriseServices,
  serviceCategories
};
import { Brain, Shield, Stethoscope, DollarSign, Truck, FileText, Factory, GraduationCap, MessageSquare, Settings, BarChart, Eye, CreditCard, Cloud, Building, Database, Lock, Code, Smartphone, Settings as SettingsIcon, Target, Zap, BarChart as BarChartIcon, Users, Globe, Cpu, Lock as LockIcon } from 'lucide-react';

export const microSAASServices = [
  // Productivity & Management Tools
  {
    title: 'AI Project Manager Pro',
    description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
    icon: 'bar-chart',
    price: '$99/month',
    originalPrice: '$149/month',
    features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
    benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
    link: '/ai-project-manager',
    popular: true,
    category: 'Productivity',
    rating: 4.9,
    users: '10,000+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Meeting Assistant Pro',
    description: 'Revolutionary meeting management with real-time transcription, action item extraction, and intelligent follow-ups. Used by Fortune 500 companies.',
    icon: 'target',
    price: '$79/month',
    originalPrice: '$119/month',
    features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Follow-up automation', 'Calendar integration', 'Voice recognition', 'Multi-language support', 'Meeting analytics'],
    benefits: ['90% meeting efficiency', 'Zero missed action items', 'Automatic follow-ups', 'Better meeting outcomes'],
    link: '/ai-meeting-assistant',
    popular: true,
    category: 'Productivity',
    rating: 4.8,
    users: '20,000+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Task Scheduler Pro',
    description: 'Smart task scheduling with AI optimization, deadline management, and priority-based organization. Perfect for busy professionals.',
    icon: 'calendar',
    price: '$49/month',
    originalPrice: '$79/month',
    features: ['Smart scheduling', 'Deadline tracking', 'Priority management', 'Time blocking', 'Automated reminders', 'Team coordination', 'Progress tracking', 'Integration support'],
    benefits: ['50% better time management', 'Zero missed deadlines', 'Improved focus', 'Reduced stress'],
    link: '/ai-task-scheduler',
    popular: false,
    category: 'Productivity',
    rating: 4.7,
    users: '5,000+',
    freeTrial: '7 days'
  }
];

export const aiServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content with AI-powered writing assistance for blogs, articles, and marketing materials.',
    icon: 'file-text',
    price: '$29/month',
    originalPrice: '$49/month',
    features: ['Content generation', 'SEO optimization', 'Multiple formats', 'Brand voice training', 'Plagiarism check', 'Grammar correction', 'Tone adjustment', 'Bulk generation'],
    benefits: ['10x faster content creation', 'Consistent quality', 'SEO optimized', 'Cost effective'],
    link: '/ai-content-generator',
    popular: true,
    category: 'AI Tools',
    rating: 4.6,
    users: '15,000+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Comprehensive analytics with AI insights, predictive modeling, and automated reporting for data-driven decisions.',
    icon: 'bar-chart',
    price: '$99/month',
    originalPrice: '$149/month',
    features: ['Real-time analytics', 'Predictive modeling', 'Automated reports', 'Custom dashboards', 'Data visualization', 'Trend analysis', 'Alert system', 'API integration'],
    benefits: ['Better decision making', 'Time savings', 'Accurate predictions', 'Competitive advantage'],
    link: '/ai-analytics-dashboard',
    popular: true,
    category: 'AI Tools',
    rating: 4.8,
    users: '8,000+',
    freeTrial: '14 days'
  }
];

export const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Complete cloud infrastructure management with monitoring, optimization, and security for your business.',
    icon: 'cloud',
    price: '$199/month',
    originalPrice: '$299/month',
    features: ['Cloud monitoring', 'Cost optimization', 'Security management', 'Backup solutions', 'Disaster recovery', 'Performance tuning', '24/7 support', 'Compliance'],
    benefits: ['Reduced costs', 'Better security', 'Improved performance', 'Peace of mind'],
    link: '/cloud-infrastructure',
    popular: true,
    category: 'IT Services',
    rating: 4.9,
    users: '2,000+',
    freeTrial: '30 days'
  },
  {
    title: 'Cybersecurity Suite',
    description: 'Comprehensive cybersecurity protection with threat detection, vulnerability assessment, and incident response.',
    icon: 'shield',
    price: '$149/month',
    originalPrice: '$199/month',
    features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing', 'Security training', '24/7 monitoring'],
    benefits: ['Enhanced security', 'Compliance ready', 'Risk reduction', 'Expert support'],
    link: '/cybersecurity',
    popular: true,
    category: 'IT Services',
    rating: 4.7,
    users: '1,500+',
    freeTrial: '14 days'
  }
];

export default {
  microSAASServices,
  aiServices,
  itServices
};
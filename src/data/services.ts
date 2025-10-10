import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

export interface Service {
  name: string;
  path: string;
  description: string;
  icon?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  title: string;
  icon: any;
  color: string;
  bgColor: string;
  hoverColor: string;
  services: Service[];
}

export const microSaasServices: Service[] = [
  { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
  { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
  { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
  { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
  { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
  { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
  { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false },
  { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false }
];

export const aiServices: Service[] = [
  { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
  { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
  { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
  { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
  { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
  { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
  { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
  { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
  { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
  { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
  { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
  { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
  { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
  { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
  { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
  { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
  { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform' },
  { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
  { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
  { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' },
  { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' },
  { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge' }
];

export const itServices: Service[] = [
  { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
  { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
  { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
  { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
  { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
  { name: 'Database Management', path: '/database-management', description: 'Database management' },
  { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
  { name: 'System Administration', path: '/system-administration', description: 'System management' },
  { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
  { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
  { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
  { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure' },
  { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring' },
  { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
  { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
  { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
];

export const emergingTech: Service[] = [
  { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions' },
  { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics' },
  { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
  { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
  { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights' },
  { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
  { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
  { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
  { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
  { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
  { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
  { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
];

export const specializedSolutions: Service[] = [
  { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
  { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
  { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
  { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
  { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
  { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
  { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
  { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
  { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
  { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
  { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
  { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
  { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
  { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
  { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
  { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
  { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
  { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
  { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
  { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
  { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
  { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
  { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Micro SAAS Solutions',
    icon: Zap,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    hoverColor: 'hover:bg-cyan-500/20',
    services: microSaasServices
  },
  {
    title: 'AI Services',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    services: aiServices
  },
  {
    title: 'IT Services',
    icon: Cloud,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    services: itServices
  },
  {
    title: 'Specialized Solutions',
    icon: Sparkles,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    hoverColor: 'hover:bg-pink-500/20',
    services: specializedSolutions
  },
  {
    title: 'Emerging Technologies',
    icon: Zap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:bg-orange-100',
    services: emergingTech
  }
];
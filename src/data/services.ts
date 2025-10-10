import { 
  BarChart, 
  Zap, 
  Target, 
  Bot, 
  Code, 
  FileText, 
  Users, 
  MessageSquare, 
  Database, 
  Palette, 
  ShoppingCart, 
  Mail, 
  DollarSign, 
  Stethoscope, 
  Briefcase, 
  Shield, 
  TrendingUp, 
  Smartphone, 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Home, 
  Cpu, 
  Search, 
  Truck, 
  Video, 
  Globe, 
  Cloud, 
  Settings, 
  Link, 
  Brain, 
  Eye, 
  ArrowRight 
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: string;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular?: boolean;
  category: string;
  rating: number;
  users: string;
  freeTrial: string;
}

export const microSAASServices: Service[] = [
  // Productivity & Management Tools
  {
    title: 'AI Project Manager Pro',
    description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
    icon: '📊',
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
    title: 'AI Quantum Task Optimizer',
    description: 'Revolutionary quantum-inspired task optimization that processes millions of task combinations to find the perfect workflow. Achieve 99.9% efficiency.',
    icon: '⚛️',
    price: '$199/month',
    originalPrice: '$299/month',
    features: ['Quantum algorithms', 'Multi-dimensional optimization', 'Real-time adaptation', 'Predictive scheduling', 'Energy efficiency', 'Parallel processing', 'Quantum encryption', 'Neural networks'],
    benefits: ['99.9% efficiency', 'Quantum speed', 'Zero waste', 'Future-proof'],
    link: '/ai-quantum-task-optimizer',
    popular: true,
    category: 'Productivity',
    rating: 4.9,
    users: '2,500+',
    freeTrial: '30 days'
  },
  {
    title: 'AI Holographic Workspace',
    description: 'Immersive 3D workspace with holographic project visualization, spatial computing, and AR collaboration. The future of remote work.',
    icon: '🌐',
    price: '$299/month',
    originalPrice: '$399/month',
    features: ['3D holographic display', 'AR collaboration', 'Spatial computing', 'Gesture control', 'Voice commands', 'Real-time sync', 'VR integration', 'Haptic feedback'],
    benefits: ['Immersive experience', 'Better collaboration', 'Spatial awareness', 'Next-gen interface'],
    link: '/ai-holographic-workspace',
    popular: true,
    category: 'Productivity',
    rating: 4.8,
    users: '1,200+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Neural Memory Assistant',
    description: 'Advanced AI that learns your work patterns and automatically organizes information, creates connections, and retrieves data instantly.',
    icon: '🧠',
    price: '$149/month',
    originalPrice: '$199/month',
    features: ['Pattern learning', 'Auto-organization', 'Instant retrieval', 'Context awareness', 'Memory mapping', 'Predictive search', 'Knowledge graphs', 'Semantic analysis'],
    benefits: ['Perfect memory', 'Instant access', 'Smart organization', 'Learning system'],
    link: '/ai-neural-memory-assistant',
    popular: true,
    category: 'Productivity',
    rating: 4.9,
    users: '5,000+',
    freeTrial: '21 days'
  },
  {
    title: 'AI Telepathic Interface Pro',
    description: 'Mind-controlled computing interface using advanced EEG and neural pattern recognition. Control your digital workspace with thoughts.',
    icon: '🔮',
    price: '$399/month',
    originalPrice: '$599/month',
    features: ['EEG integration', 'Neural pattern recognition', 'Thought commands', 'Mental shortcuts', 'Focus enhancement', 'Brain training', 'Privacy protection', 'Medical grade'],
    benefits: ['Hands-free control', 'Mental efficiency', 'Accessibility', 'Cutting-edge tech'],
    link: '/ai-telepathic-interface',
    popular: true,
    category: 'Productivity',
    rating: 4.7,
    users: '800+',
    freeTrial: '7 days'
  },
  {
    title: 'AI Task Manager Pro',
    description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
    icon: '✅',
    price: '$49/month',
    originalPrice: '$79/month',
    features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
    benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals'],
    link: '/ai-task-manager',
    popular: true,
    category: 'Productivity',
    rating: 4.8,
    users: '25,000+',
    freeTrial: '7 days'
  },
  {
    title: 'AI Workflow Automation Pro',
    description: 'Automate repetitive tasks with AI-powered workflow optimization. Save 20+ hours per week with intelligent automation.',
    icon: '⚡',
    price: '$79/month',
    originalPrice: '$119/month',
    features: ['Visual workflow builder', 'AI optimization', '500+ integrations', 'Custom triggers', 'Error handling', 'Analytics dashboard', 'Team collaboration', 'API access'],
    benefits: ['20+ hours saved weekly', '99.9% accuracy', 'Easy setup', 'Scalable automation'],
    link: '/ai-workflow-automation',
    popular: true,
    category: 'Productivity',
    rating: 4.7,
    users: '15,000+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Meeting Scheduler Pro',
    description: 'Intelligent meeting scheduling with calendar optimization, conflict resolution, and time zone management. Used by Fortune 500 companies.',
    icon: '📅',
    price: '$39/month',
    originalPrice: '$59/month',
    features: ['Smart scheduling', 'Calendar integration', 'Conflict resolution', 'Time zone handling', 'Meeting analytics', 'Auto-reminders', 'Room booking', 'Catering coordination'],
    benefits: ['50% scheduling time saved', 'Zero double bookings', 'Better time utilization', 'Reduced no-shows'],
    link: '/ai-meeting-scheduler',
    popular: true,
    category: 'Productivity',
    rating: 4.8,
    users: '30,000+',
    freeTrial: '7 days'
  },
  {
    title: 'AI Time Tracker Pro',
    description: 'Intelligent time tracking with productivity insights, automated reporting, and team analytics. Trusted by remote teams globally.',
    icon: '⏱️',
    price: '$29/month',
    originalPrice: '$49/month',
    features: ['Automatic time tracking', 'Productivity insights', 'Team analytics', 'Project billing', 'Screenshot monitoring', 'App usage tracking', 'Idle detection', 'Custom reports'],
    benefits: ['Accurate time tracking', 'Better productivity', 'Easy billing', 'Team insights'],
    link: '/ai-time-tracker',
    popular: true,
    category: 'Productivity',
    rating: 4.6,
    users: '40,000+',
    freeTrial: '14 days'
  },
  {
    title: 'AI Calendar Optimizer Pro',
    description: 'Smart calendar management with AI-powered scheduling, meeting optimization, and time blocking. Maximize your productivity.',
    icon: '📆',
    price: '$59/month',
    originalPrice: '$89/month',
    features: ['Smart scheduling', 'Time blocking', 'Meeting optimization', 'Focus time protection', 'Travel time calculation', 'Energy level tracking', 'Priority scheduling', 'Team coordination'],
    benefits: ['Better time management', 'Increased focus', 'Reduced stress', 'Higher productivity'],
    link: '/ai-calendar-optimizer',
    popular: true,
    category: 'Productivity',
    rating: 4.7,
    users: '18,000+',
    freeTrial: '7 days'
  }
];

export const aiServices = [
  { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
  { name: 'AI Automation', href: '/ai-automation', icon: Zap },
  { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Target },
  { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot },
  { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code },
  { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
  { name: 'AI CRM', href: '/ai-crm', icon: Users },
  { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare },
  { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
  { name: 'AI Design Studio', href: '/ai-design-studio', icon: Palette },
  { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
  { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
  { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
  { name: 'AI Healthcare', href: '/ai-healthcare', icon: Stethoscope },
  { name: 'AI HR Assistant', href: '/ai-hr-assistant', icon: Briefcase },
  { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: Shield },
  { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
  { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
  { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart3 },
  { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar },
  { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: CheckCircle },
  { name: 'AI Real Estate', href: '/ai-real-estate', icon: Home },
  { name: 'AI Robotics', href: '/ai-robotics', icon: Cpu },
  { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
  { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
  { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Users },
  { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp },
  { name: 'AI Supply Chain', href: '/ai-supply-chain', icon: Truck },
  { name: 'AI Task Manager', href: '/ai-task-manager', icon: CheckCircle },
  { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video },
  { name: 'AI Website Builder', href: '/ai-website-builder', icon: Globe },
  { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText }
];

export const itServices = [
  { name: 'Cloud Computing', href: '/cloud-computing', icon: Cloud },
  { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
  { name: 'Data Management', href: '/data-management', icon: Database },
  { name: 'DevOps', href: '/devops', icon: Settings },
  { name: 'IT Consulting', href: '/it-consulting', icon: Users },
  { name: 'Network Security', href: '/network-security', icon: Lock },
  { name: 'Software Development', href: '/software-development', icon: Code },
  { name: 'System Integration', href: '/system-integration', icon: Settings },
  { name: 'Web Development', href: '/web-development', icon: Globe },
  { name: 'Mobile App Development', href: '/mobile-app-development', icon: Smartphone }
];

export const specializedServices = [
  { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Link },
  { name: 'IoT Development', href: '/iot-development', icon: Cpu },
  { name: 'Machine Learning', href: '/machine-learning', icon: Brain },
  { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap },
  { name: 'AR/VR Development', href: '/ar-vr-development', icon: Eye },
  { name: 'Edge Computing', href: '/edge-computing', icon: Cpu },
  { name: '5G Solutions', href: '/5g-solutions', icon: Zap },
  { name: 'Digital Transformation', href: '/digital-transformation', icon: ArrowRight }
];
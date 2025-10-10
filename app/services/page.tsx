'use client'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target,
  Code,
  Mail,
  Calendar,
  DollarSign,
  TrendingUp,
  Lock,
  Cpu,
  Network,
  Server,
  Monitor,
  Smartphone as Mobile,
  Wifi,
  HardDrive,
  Terminal,
  Layers,
  Activity,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Key,
  Fingerprint,
  ShieldCheck,
  Bug,
  GitBranch,
  Database as DbIcon,
  Globe as WebIcon,
  Smartphone as PhoneIcon,
  Laptop,
  Headphones,
  Camera,
  Video,
  Mic,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Link,
  ExternalLink,
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Bell,
  Clock,
  MapPin,
  Phone,
  Mail as EmailIcon,
  User,
  UserPlus,
  Users as UsersIcon,
  UserCheck,
  UserX,
  Crown,
  Award,
  Trophy,
  Medal,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  Minus,
  Plus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Building,
  Factory,
  Store,
  ShoppingBag,
  Package,
  Truck,
  Plane,
  Car,
  Bike,
  Train,
  Ship,
  Rocket,
  Satellite,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Signal,
  Battery,
  Power,
  Zap as Lightning,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Tree,
  Mountain,
  Waves,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Mouse,
  Bug as BugIcon,
  Spider,
  Butterfly,
  Bee,
  Ant,
  Ladybug,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Flamingo,
  Toucan,
  Hummingbird,
  Robin,
  Sparrow,
  Crow,
  Raven,
  Dove,
  Pigeon,
  Chicken,
  Rooster,
  Duck,
  Goose,
  Swan,
  Turkey,
  Peacock as PeacockIcon,
  Flamingo as FlamingoIcon,
  Toucan as ToucanIcon,
  Hummingbird as HummingbirdIcon,
  Robin as RobinIcon,
  Sparrow as SparrowIcon,
  Crow as CrowIcon,
  Raven as RavenIcon,
  Dove as DoveIcon,
  Pigeon as PigeonIcon,
  Chicken as ChickenIcon,
  Rooster as RoosterIcon,
  Duck as DuckIcon,
  Goose as GooseIcon,
  Swan as SwanIcon,
  Turkey as TurkeyIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-chatbots'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-vision'
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      icon: MessageSquare,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      category: 'ai',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Save 80% content time', 'Consistent quality', 'SEO optimized', 'Multi-platform'],
      link: 'https://ziontechgroup.com/ai-content'
    },
    {
      icon: Users,
      title: 'AI Customer Insights',
      description: 'Advanced customer analytics with sentiment analysis, churn prediction, and personalized recommendations.',
      category: 'ai',
      features: ['Sentiment Analysis', 'Churn Prediction', 'Customer Segmentation', 'Personalized Recommendations', 'Behavioral Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Increase retention by 40%', 'Predict customer churn', 'Personalized experiences', 'Data-driven insights'],
      link: 'https://ziontechgroup.com/ai-customer-insights'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization for multiple programming languages.',
      category: 'ai',
      features: ['Code Completion', 'Debugging Help', 'Code Optimization', 'Multi-language Support', 'Documentation'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase productivity by 50%', 'Reduce bugs by 70%', 'Faster development', 'Better code quality'],
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments.',
      category: 'it',
      features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring & Maintenance', 'Disaster Recovery'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance', '24/7 monitoring'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration, monitoring, and maintenance services.',
      category: 'it',
      features: ['Server Administration', 'Performance Monitoring', 'Security Hardening', 'Backup & Recovery', 'Patch Management', 'Capacity Planning'],
      price: 'Starting at $800/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Optimal performance', 'Enhanced security', 'Reduced downtime', 'Expert administration'],
      link: 'https://ziontechgroup.com/server-management'
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for your organization.',
      category: 'it',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training', 'Documentation', 'SLA Management'],
      price: 'Starting at $500/month',
      marketPrice: '$800-2500/month',
      benefits: ['Quick issue resolution', 'Reduced downtime', 'User satisfaction', 'Cost-effective support'],
      link: 'https://ziontechgroup.com/it-support'
    },
    
    // Micro SaaS Services
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      icon: Globe,
      title: 'Zion Web Builder Pro',
      description: 'AI-powered website builder with drag-and-drop interface and advanced customization options.',
      category: 'saas',
      features: ['Drag-and-Drop Builder', 'AI Design Suggestions', 'Mobile Responsive', 'SEO Optimization', 'E-commerce Integration', 'Analytics Dashboard'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['No coding required', 'Professional websites', 'SEO optimized', 'Mobile responsive'],
      link: 'https://ziontechgroup.com/zion-web-builder'
    },
    {
      icon: Smartphone,
      title: 'Zion Mobile App Creator',
      description: 'Create native mobile apps for iOS and Android with our intuitive no-code platform.',
      category: 'saas',
      features: ['No-Code Development', 'Native Performance', 'App Store Publishing', 'Push Notifications', 'Offline Functionality', 'Analytics Integration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['No coding required', 'Native performance', 'App store ready', 'Cross-platform'],
      link: 'https://ziontechgroup.com/zion-mobile-creator'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      icon: Mail,
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing platform with AI personalization and automation.',
      category: 'saas',
      features: ['AI Personalization', 'Email Automation', 'A/B Testing', 'Advanced Analytics', 'List Segmentation', 'Template Builder'],
      price: 'Starting at $39/month',
      marketPrice: '$80-300/month',
      benefits: ['Increase open rates by 250%', 'Automated campaigns', 'Better deliverability', 'Advanced analytics'],
      link: 'https://ziontechgroup.com/zion-email-marketing'
    },
    {
      icon: Calendar,
      title: 'Zion Scheduler AI',
      description: 'Intelligent scheduling platform with AI optimization and automated meeting coordination.',
      category: 'saas',
      features: ['AI Scheduling Optimization', 'Calendar Integration', 'Automated Reminders', 'Meeting Analytics', 'Time Zone Management', 'Resource Booking'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Reduce scheduling time by 80%', 'Automated coordination', 'Better time management', 'Reduced no-shows'],
      link: 'https://ziontechgroup.com/zion-scheduler-ai'
    },
    {
      icon: DollarSign,
      title: 'Zion Expense Tracker Pro',
      description: 'AI-powered expense management with receipt scanning and automated categorization.',
      category: 'saas',
      features: ['Receipt Scanning', 'AI Categorization', 'Budget Tracking', 'Tax Preparation', 'Multi-currency', 'Team Management'],
      price: 'Starting at $15/month',
      marketPrice: '$30-100/month',
      benefits: ['Save 70% expense tracking time', 'Automated categorization', 'Tax-ready reports', 'Budget insights'],
      link: 'https://ziontechgroup.com/zion-expense-tracker'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive lead scoring and automated sales processes.',
      category: 'saas',
      features: ['AI Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Email Integration', 'Task Automation', 'Performance Analytics'],
      price: 'Starting at $59/month',
      marketPrice: '$120-400/month',
      benefits: ['Increase sales by 35%', 'Automated lead nurturing', 'Better conversion rates', 'Revenue optimization'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, business automation, cloud solutions, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to transform your business with cutting-edge technology
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 cyber-card-enhanced">
                <h2 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default ServicesPage
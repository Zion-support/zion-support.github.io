import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Atom,
  Truck,
  GitFork,
  Database,
  Network,
  Smartphone,
  PenTool,
  Target,
  BarChart3,
  ShoppingCart,
  MessageCircle,
  FileText,
  Settings,
  Key,
  Leaf,
  Scale,
  Building2,
  Car,
  Factory,
  City,
  Eye,
  Server,
  Monitor,
  Code,
  Gauge,
  Clock,
  DollarSign,
  Award,
  Home
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  pricing: PricingTier[];
  benefits: string[];
  useCases: string[];
  href: string;
  color: string;
  featured: boolean;
}

const services: Service[] = [
  {
    id: 'ai-legal-document-analysis',
    name: 'AI Legal Document Analysis',
    description: 'Advanced AI-powered legal document review, contract analysis, and compliance checking with 99.9% accuracy.',
    icon: Scale,
    category: 'AI & Legal Tech',
    pricing: [
      {
        name: 'Starter',
        price: '$299',
        period: '/month',
        description: 'Perfect for small law firms and legal departments',
        features: [
          'Up to 100 documents/month',
          'Basic contract analysis',
          'Standard compliance checking',
          'Email support',
          'Basic reporting'
        ],
        color: 'from-blue-500 to-blue-600'
      },
      {
        name: 'Professional',
        price: '$799',
        period: '/month',
        description: 'Ideal for growing legal practices',
        features: [
          'Up to 500 documents/month',
          'Advanced contract analysis',
          'Multi-language support',
          'Priority support',
          'Advanced analytics',
          'Custom compliance rules',
          'API access'
        ],
        popular: true,
        color: 'from-blue-600 to-indigo-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large legal organizations and corporations',
        features: [
          'Unlimited documents',
          'Custom AI models',
          'Dedicated support team',
          'White-label solutions',
          'Advanced security features',
          'Custom integrations',
          'SLA guarantees'
        ],
        color: 'from-indigo-700 to-purple-800'
      }
    ],
    benefits: [
      'Reduce legal review time by 80%',
      'Minimize compliance risks',
      'Cost-effective legal operations',
      '24/7 document processing'
    ],
    useCases: [
      'Law firms and legal departments',
      'Corporate compliance teams',
      'Contract management',
      'Regulatory reporting'
    ],
    href: '/services/ai-legal-document-analysis',
    color: 'from-blue-600 to-indigo-700',
    featured: true
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics, demand forecasting, and real-time optimization.',
    icon: Truck,
    category: 'AI & Operations',
    pricing: [
      {
        name: 'Starter',
        price: '$499',
        period: '/month',
        description: 'For small to medium businesses',
        features: [
          'Basic demand forecasting',
          'Inventory optimization',
          'Route planning',
          'Email support',
          'Standard reports'
        ],
        color: 'from-green-500 to-green-600'
      },
      {
        name: 'Professional',
        price: '$1,299',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced forecasting models',
          'Real-time optimization',
          'Supplier analytics',
          'Priority support',
          'Custom dashboards',
          'API access',
          'Multi-location support'
        ],
        popular: true,
        color: 'from-green-600 to-emerald-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large enterprises',
        features: [
          'Custom AI models',
          'Global supply chain support',
          'Dedicated account manager',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-emerald-700 to-teal-800'
      }
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Enhanced supplier relationships',
      'Real-time visibility and control'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail and e-commerce',
      'Logistics providers',
      'Distribution networks'
    ],
    href: '/services/ai-supply-chain-optimization',
    color: 'from-green-600 to-emerald-700',
    featured: true
  },
  {
    id: 'ai-healthcare-analytics',
    name: 'AI Healthcare Analytics Platform',
    description: 'Comprehensive healthcare analytics with patient insights, predictive diagnostics, and operational optimization.',
    icon: Heart,
    category: 'AI & Healthcare',
    pricing: [
      {
        name: 'Starter',
        price: '$599',
        period: '/month',
        description: 'For small clinics and practices',
        features: [
          'Basic patient analytics',
          'Standard reporting',
          'Email support',
          'Basic dashboards',
          'HIPAA compliance'
        ],
        color: 'from-red-500 to-red-600'
      },
      {
        name: 'Professional',
        price: '$1,499',
        period: '/month',
        description: 'For hospitals and healthcare systems',
        features: [
          'Advanced patient insights',
          'Predictive diagnostics',
          'Operational analytics',
          'Priority support',
          'Custom dashboards',
          'API access',
          'Advanced security'
        ],
        popular: true,
        color: 'from-red-600 to-pink-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large healthcare organizations',
        features: [
          'Custom AI models',
          'Population health insights',
          'Dedicated support team',
          'Custom integrations',
          'Advanced compliance',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-pink-700 to-rose-800'
      }
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce healthcare costs by 20%',
      'Enhanced patient outcomes',
      'Compliance with healthcare regulations'
    ],
    useCases: [
      'Hospitals and clinics',
      'Healthcare systems',
      'Medical research institutions',
      'Health insurance companies'
    ],
    href: '/services/ai-healthcare-analytics',
    color: 'from-red-600 to-pink-700',
    featured: true
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    description: 'Advanced algorithmic trading with machine learning, risk management, and real-time market analysis.',
    icon: TrendingUp,
    category: 'AI & Fintech',
    pricing: [
      {
        name: 'Starter',
        price: '$999',
        period: '/month',
        description: 'For individual traders',
        features: [
          'Basic trading algorithms',
          'Market analysis',
          'Risk management',
          'Email support',
          'Standard reports'
        ],
        color: 'from-yellow-500 to-yellow-600'
      },
      {
        name: 'Professional',
        price: '$2,999',
        period: '/month',
        description: 'For professional traders',
        features: [
          'Advanced algorithms',
          'Real-time analysis',
          'Portfolio optimization',
          'Priority support',
          'Custom dashboards',
          'API access',
          'Advanced risk management'
        ],
        popular: true,
        color: 'from-yellow-600 to-orange-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For institutional clients',
        features: [
          'Custom trading strategies',
          'White-label solutions',
          'Dedicated support team',
          'Custom integrations',
          'Advanced compliance',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-orange-700 to-red-800'
      }
    ],
    benefits: [
      'Increase trading efficiency by 60%',
      'Reduce risk exposure',
      '24/7 market monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Individual traders',
      'Financial institutions'
    ],
    href: '/services/ai-financial-trading',
    color: 'from-yellow-600 to-orange-700',
    featured: true
  },
  {
    id: 'quantum-ai-trading',
    name: 'Quantum AI Trading Platform',
    description: 'Next-generation quantum computing-powered trading with unprecedented speed and accuracy.',
    icon: Atom,
    category: 'Quantum Computing',
    pricing: [
      {
        name: 'Starter',
        price: '$1,999',
        period: '/month',
        description: 'For advanced traders',
        features: [
          'Quantum algorithm access',
          'Basic quantum simulations',
          'Standard support',
          'Basic reporting',
          'Quantum advantage features'
        ],
        color: 'from-purple-500 to-purple-600'
      },
      {
        name: 'Professional',
        price: '$4,999',
        period: '/month',
        description: 'For professional trading firms',
        features: [
          'Advanced quantum algorithms',
          'Real-time quantum analysis',
          'Portfolio optimization',
          'Priority support',
          'Custom dashboards',
          'API access',
          'Advanced quantum features'
        ],
        popular: true,
        color: 'from-purple-600 to-pink-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For institutional clients',
        features: [
          'Custom quantum models',
          'White-label solutions',
          'Dedicated quantum team',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-pink-700 to-rose-800'
      }
    ],
    benefits: [
      '1000x faster processing speed',
      'Quantum advantage in complex calculations',
      'Enhanced prediction accuracy',
      'Future-proof technology'
    ],
    useCases: [
      'High-frequency trading',
      'Complex financial modeling',
      'Risk assessment',
      'Portfolio optimization'
    ],
    href: '/services/quantum-ai-trading-platform',
    color: 'from-purple-600 to-pink-700',
    featured: true
  },
  {
    id: 'ai-workflow-orchestrator',
    name: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation with AI-powered decision making and process optimization.',
    icon: GitFork,
    category: 'AI & Automation',
    pricing: [
      {
        name: 'Starter',
        price: '$399',
        period: '/month',
        description: 'For small businesses',
        features: [
          'Basic workflow automation',
          'Standard templates',
          'Email support',
          'Basic analytics',
          'Up to 10 workflows'
        ],
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        name: 'Professional',
        price: '$999',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced automation',
          'Custom workflows',
          'Priority support',
          'Advanced analytics',
          'API access',
          'Custom integrations',
          'Unlimited workflows'
        ],
        popular: true,
        color: 'from-indigo-600 to-blue-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large organizations',
        features: [
          'Custom AI models',
          'White-label solutions',
          'Dedicated support team',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-blue-700 to-cyan-800'
      }
    ],
    benefits: [
      'Increase productivity by 50%',
      'Reduce manual errors',
      'Streamlined operations',
      'Real-time process insights'
    ],
    useCases: [
      'Business process automation',
      'Customer service operations',
      'Marketing automation',
      'HR process management'
    ],
    href: '/services/ai-workflow-orchestrator',
    color: 'from-indigo-600 to-blue-700',
    featured: true
  },
  {
    id: 'cybersecurity-platform',
    name: 'AI-Powered Cybersecurity Platform',
    description: 'Advanced threat detection and prevention with machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Cybersecurity',
    pricing: [
      {
        name: 'Starter',
        price: '$599',
        period: '/month',
        description: 'For small businesses',
        features: [
          'Basic threat detection',
          'Standard security features',
          'Email support',
          'Basic reporting',
          'Up to 100 users'
        ],
        color: 'from-green-500 to-green-600'
      },
      {
        name: 'Professional',
        price: '$1,299',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced threat detection',
          'Behavioral analysis',
          'Priority support',
          'Advanced analytics',
          'API access',
          'Custom integrations',
          'Up to 1000 users'
        ],
        popular: true,
        color: 'from-green-600 to-teal-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large organizations',
        features: [
          'Custom security models',
          'White-label solutions',
          'Dedicated security team',
          'Custom integrations',
          'Advanced compliance',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-teal-700 to-cyan-800'
      }
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      '24/7 security monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies'
    ],
    href: '/services/cybersecurity',
    color: 'from-green-600 to-teal-700',
    featured: true
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    description: 'Create virtual replicas of physical assets for monitoring, simulation, and predictive maintenance.',
    icon: Globe,
    category: 'IoT & Digital Twins',
    pricing: [
      {
        name: 'Starter',
        price: '$799',
        period: '/month',
        description: 'For small facilities',
        features: [
          'Basic 3D modeling',
          'Standard monitoring',
          'Email support',
          'Basic analytics',
          'Up to 10 assets'
        ],
        color: 'from-teal-500 to-teal-600'
      },
      {
        name: 'Professional',
        price: '$1,999',
        period: '/month',
        description: 'For growing facilities',
        features: [
          'Advanced 3D modeling',
          'Real-time monitoring',
          'Priority support',
          'Advanced analytics',
          'API access',
          'Custom integrations',
          'Up to 100 assets'
        ],
        popular: true,
        color: 'from-teal-600 to-cyan-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large facilities',
        features: [
          'Custom 3D models',
          'White-label solutions',
          'Dedicated support team',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-cyan-700 to-blue-800'
      }
    ],
    benefits: [
      'Reduce downtime by 40%',
      'Optimize asset performance',
      'Predictive maintenance savings',
      'Enhanced operational visibility'
    ],
    useCases: [
      'Manufacturing facilities',
      'Smart cities',
      'Energy infrastructure',
      'Transportation systems'
    ],
    href: '/services/digital-twin',
    color: 'from-teal-600 to-cyan-700',
    featured: true
  },
  {
    id: 'micro-crm',
    name: 'AI-Powered Micro CRM',
    description: 'Intelligent customer relationship management with AI insights and automation.',
    icon: Users,
    category: 'CRM & Sales',
    pricing: [
      {
        name: 'Starter',
        price: '$99',
        period: '/month',
        description: 'For small businesses',
        features: [
          'Basic CRM features',
          'AI customer insights',
          'Email support',
          'Basic reporting',
          'Up to 1000 contacts'
        ],
        color: 'from-blue-500 to-blue-600'
      },
      {
        name: 'Professional',
        price: '$299',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced CRM features',
          'AI automation',
          'Priority support',
          'Advanced analytics',
          'API access',
          'Custom integrations',
          'Up to 10000 contacts'
        ],
        popular: true,
        color: 'from-blue-600 to-purple-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large organizations',
        features: [
          'Custom CRM features',
          'White-label solutions',
          'Dedicated support team',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-purple-700 to-indigo-800'
      }
    ],
    benefits: [
      'Increase sales by 35%',
      'Improve customer retention',
      'Automated lead nurturing',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Sales teams',
      'Marketing agencies',
      'Startups'
    ],
    href: '/services/micro-crm',
    color: 'from-blue-600 to-purple-700',
    featured: true
  },
  {
    id: 'space-tech-platform',
    name: 'Space Technology Platform',
    description: 'Advanced space technology solutions including satellite management and space debris tracking.',
    icon: Rocket,
    category: 'Space Technology',
    pricing: [
      {
        name: 'Starter',
        price: '$1,499',
        period: '/month',
        description: 'For small space companies',
        features: [
          'Basic satellite tracking',
          'Standard space data',
          'Email support',
          'Basic reporting',
          'Up to 5 satellites'
        ],
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        name: 'Professional',
        price: '$3,999',
        period: '/month',
        description: 'For growing space companies',
        features: [
          'Advanced satellite management',
          'Real-time tracking',
          'Priority support',
          'Advanced analytics',
          'API access',
          'Custom integrations',
          'Up to 50 satellites'
        ],
        popular: true,
        color: 'from-indigo-600 to-purple-700'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'For large space organizations',
        features: [
          'Custom space solutions',
          'White-label solutions',
          'Dedicated space team',
          'Custom integrations',
          'Advanced security',
          'SLA guarantees',
          'Training and consulting'
        ],
        color: 'from-purple-700 to-pink-800'
      }
    ],
    benefits: [
      'Optimize satellite operations',
      'Reduce collision risks',
      'Enhanced mission success',
      'Cost-effective space operations'
    ],
    useCases: [
      'Satellite operators',
      'Space agencies',
      'Aerospace companies',
      'Research institutions'
    ],
    href: '/services/space-tech',
    color: 'from-indigo-600 to-purple-700',
    featured: true
  }
];

const categories = [
  { name: 'AI & Machine Learning', count: 6, color: 'from-purple-500 to-pink-500' },
  { name: 'Cybersecurity', count: 2, color: 'from-green-500 to-blue-500' },
  { name: 'Quantum Computing', count: 1, color: 'from-purple-500 to-indigo-500' },
  { name: 'IoT & Digital Twins', count: 2, color: 'from-teal-500 to-cyan-500' },
  { name: 'Space Technology', count: 1, color: 'from-indigo-500 to-purple-500' },
  { name: 'CRM & Sales', count: 1, color: 'from-blue-500 to-purple-500' }
];

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Complete pricing guide for all our innovative AI, cybersecurity, quantum computing, and micro SAAS services. Transparent pricing with detailed features and benefits."
        keywords="pricing guide, AI services pricing, cybersecurity pricing, quantum computing pricing, micro SAAS pricing, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative services. Choose the perfect plan for your business needs 
              with detailed feature comparisons and flexible pricing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Us for Custom Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                All Categories ({services.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {filteredServices.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
              >
                {/* Service Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.name}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.description}</p>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-slate-700 text-purple-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {service.pricing.map((tier, tierIndex) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
                      className={`relative bg-gradient-to-br ${tier.color} rounded-xl p-6 text-white ${
                        tier.popular ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-800' : ''
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                        <div className="mb-2">
                          <span className="text-3xl font-bold">{tier.price}</span>
                          <span className="text-lg opacity-80">{tier.period}</span>
                        </div>
                        <p className="text-sm opacity-80">{tier.description}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="block w-full text-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits and Use Cases */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Zap className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Target className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a custom quote tailored to your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Lock,
  Database,
  Network,
  Globe,
  Users,
  BarChart3,
  FileText,
  Clock,
  Star,
  Award,
  Target,
  Rocket,
  Smartphone,
  Wifi,
  Server,
  Cloud,
  Activity,
  Monitor,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  DollarSign,
  Calendar,
  User,
  Building,
  Code,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Atom,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ComprehensivePricingGuide2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Network className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'edge', name: 'Edge Computing', icon: <Cpu className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics & BI', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> }
  ];

  const allServices = [
    {
      id: 'ai-blockchain-integration',
      title: 'AI Blockchain Integration Platform',
      description: 'Revolutionize blockchain applications with cutting-edge AI integration',
      category: 'blockchain',
      pricing: {
        starter: { price: '$299/month', features: ['AI Smart Contract Generator', 'Basic DeFi Analytics', '2 Blockchain Networks', 'Email Support', '100 API Calls/month'] },
        professional: { price: '$799/month', features: ['Everything in Starter', 'Advanced DeFi Analytics', '5 Blockchain Networks', 'Priority Support', '1000 API Calls/month', 'Custom Integrations'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited API Calls', 'All Blockchain Networks', 'Dedicated Support Team', 'Custom AI Models', 'On-premise Deployment'] }
      },
      benefits: ['70% faster development time', '99.9% security compliance', 'Multi-chain asset management', 'Real-time threat monitoring'],
      useCases: ['DeFi Platforms', 'Supply Chain', 'Digital Identity', 'Asset Tokenization'],
      icon: <Network className="w-8 h-8 text-blue-500" />,
      color: 'blue',
      link: '/services/ai-blockchain-integration-platform',
      featured: true
    },
    {
      id: 'ai-quantum-computing',
      title: 'AI-Powered Quantum Computing Platform',
      description: 'Harness quantum computing power combined with artificial intelligence',
      category: 'quantum',
      pricing: {
        starter: { price: '$499/month', features: ['Quantum ML Algorithms', 'Basic Quantum Simulation', '2 Quantum Processors', 'Email Support', '100 Quantum Jobs/month'] },
        professional: { price: '$1,299/month', features: ['Everything in Starter', 'Advanced Quantum ML', '5 Quantum Processors', 'Priority Support', '1000 Quantum Jobs/month', 'Custom Algorithm Development'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited Quantum Jobs', 'All Available Processors', 'Dedicated Quantum Team', 'Custom Quantum Hardware', 'On-premise Quantum Setup'] }
      },
      benefits: ['1000x faster training', 'Quantum-safe encryption', 'NP-hard problem solving', 'Drug discovery acceleration'],
      useCases: ['Drug Discovery', 'Financial Modeling', 'Climate Research', 'AI Training'],
      icon: <Atom className="w-8 h-8 text-purple-500" />,
      color: 'purple',
      link: '/services/ai-quantum-computing-platform',
      featured: true
    },
    {
      id: 'ai-edge-computing',
      title: 'AI-Powered Edge Computing Platform',
      description: 'Bring AI to the edge of your network for real-time decision making',
      category: 'edge',
      pricing: {
        starter: { price: '$199/month', features: ['Edge AI Processing', '5 Edge Nodes', 'Basic Analytics', 'Email Support', '100GB Data/month'] },
        professional: { price: '$599/month', features: ['Everything in Starter', 'Advanced Edge Orchestration', '25 Edge Nodes', 'Priority Support', '500GB Data/month', 'Custom AI Models'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited Edge Nodes', 'Unlimited Data', 'Dedicated Support Team', 'Custom Edge Hardware', 'On-premise Edge Setup'] }
      },
      benefits: ['Sub-10ms latency', 'Dynamic load balancing', 'Zero-trust architecture', 'Reduced cloud costs'],
      useCases: ['Smart Cities', 'Industrial IoT', 'Autonomous Vehicles', 'Healthcare'],
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      color: 'green',
      link: '/services/ai-edge-computing-platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning',
      category: 'cybersecurity',
      pricing: {
        starter: { price: '$399/month', features: ['AI Threat Detection', 'Basic Behavioral Analysis', 'Email Support', '100 Devices', 'Basic Reporting'] },
        professional: { price: '$999/month', features: ['Everything in Starter', 'Advanced Behavioral Analysis', 'Automated Response', '500 Devices', 'Priority Support', 'Custom AI Models'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited Devices', 'Zero-Day Protection', 'Dedicated Security Team', 'Custom Security Policies', 'On-premise Deployment'] }
      },
      benefits: ['Real-time threat monitoring', '99.9% detection rate', 'Automated incident response', 'Reduced false positives'],
      useCases: ['Enterprise Security', 'Financial Services', 'Healthcare', 'Government'],
      icon: <Shield className="w-8 h-8 text-red-500" />,
      color: 'red',
      link: '/services/ai-cybersecurity-suite',
      featured: false
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      category: 'analytics',
      pricing: {
        starter: { price: '$249/month', features: ['Predictive Analytics', 'Basic Dashboards', 'Email Support', '100GB Data', '5 Users'] },
        professional: { price: '$799/month', features: ['Everything in Starter', 'Natural Language Queries', 'Advanced Dashboards', 'Priority Support', '1TB Data', '25 Users'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited Data', 'Custom AI Models', 'Dedicated Support Team', 'Unlimited Users', 'On-premise Deployment'] }
      },
      benefits: ['Predictive insights', 'Natural language interface', 'Automated report generation', 'Real-time data visualization'],
      useCases: ['Sales Analytics', 'Marketing Intelligence', 'Financial Planning', 'Operations'],
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      color: 'indigo',
      link: '/services/ai-business-intelligence',
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Platform',
      description: 'Automate complex business processes with intelligent workflow orchestration',
      category: 'automation',
      pricing: {
        starter: { price: '$179/month', features: ['Basic Process Mapping', '5 Workflows', 'Email Support', '100 Tasks/month', 'Basic Integrations'] },
        professional: { price: '$599/month', features: ['Everything in Starter', 'Advanced Process Mapping', '25 Workflows', 'Priority Support', '1000 Tasks/month', 'Advanced Integrations'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Unlimited Workflows', 'Custom AI Models', 'Dedicated Support Team', 'Custom Integrations', 'On-premise Deployment'] }
      },
      benefits: ['80% process automation', 'Reduced manual errors', 'Faster execution times', 'Seamless integrations'],
      useCases: ['HR Processes', 'Finance Operations', 'Customer Service', 'Marketing'],
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'yellow',
      link: '/services/ai-workflow-automation',
      featured: false
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio',
      description: 'Create high-quality content at scale with AI-powered tools',
      category: 'ai',
      pricing: {
        starter: { price: '$129/month', features: ['AI Writing Assistant', 'Basic Design Tools', 'Email Support', '1000 Words/month', '5 Templates'] },
        professional: { price: '$399/month', features: ['Everything in Starter', 'Advanced Design Tools', 'Content Optimization', 'Priority Support', '10000 Words/month', 'Unlimited Templates'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Custom AI Models', 'Multi-language Support', 'Dedicated Support Team', 'Unlimited Content', 'Brand Customization'] }
      },
      benefits: ['10x content production', 'SEO optimization', 'Brand consistency', 'Multi-language support'],
      useCases: ['Marketing Content', 'Blog Writing', 'Social Media', 'Product Descriptions'],
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      color: 'pink',
      link: '/services/ai-content-creation',
      featured: false
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience Platform',
      description: 'Deliver personalized customer experiences with AI-powered insights',
      category: 'ai',
      pricing: {
        starter: { price: '$349/month', features: ['Basic Customer Analytics', 'Email Support', '1000 Interactions/month', '5 Customer Segments', 'Basic Personalization'] },
        professional: { price: '$899/month', features: ['Everything in Starter', 'Advanced Analytics', 'Predictive Personalization', 'Priority Support', '10000 Interactions/month', 'Unlimited Segments'] },
        enterprise: { price: 'Custom Pricing', features: ['Everything in Professional', 'Custom AI Models', 'Real-time Personalization', 'Dedicated Support Team', 'Unlimited Interactions', 'Custom Integrations'] }
      },
      benefits: ['Personalized experiences', 'Increased customer satisfaction', 'Reduced support costs', 'Higher conversion rates'],
      useCases: ['E-commerce', 'SaaS Platforms', 'Financial Services', 'Healthcare'],
      icon: <Users className="w-8 h-8 text-teal-500" />,
      color: 'teal',
      link: '/services/ai-customer-experience',
      featured: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-500 hover:border-blue-400 bg-blue-500/10',
      purple: 'border-purple-500 hover:border-purple-400 bg-purple-500/10',
      green: 'border-green-500 hover:border-green-400 bg-green-500/10',
      red: 'border-red-500 hover:border-red-400 bg-red-500/10',
      indigo: 'border-indigo-500 hover:border-indigo-400 bg-indigo-500/10',
      yellow: 'border-yellow-500 hover:border-yellow-400 bg-yellow-500/10',
      pink: 'border-pink-500 hover:border-pink-400 bg-pink-500/10',
      teal: 'border-teal-500 hover:border-teal-400 bg-teal-500/10'
    };
    return colorMap[color] || 'border-gray-500 hover:border-gray-400 bg-gray-500/10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover transparent pricing for all our innovative AI, blockchain, quantum computing, and edge computing services. 
              Choose the perfect plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-slate-700 text-gray-300 hover:border-slate-600'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === 'grid'
                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                    : 'border-slate-700 text-gray-300 hover:border-slate-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === 'list'
                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                    : 'border-slate-700 text-gray-300 hover:border-slate-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                } ${getColorClasses(service.color)}`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                        </div>
                        {service.featured && (
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        {Object.entries(service.pricing).map(([plan, details]) => (
                          <div key={plan} className="text-center">
                            <h4 className="font-semibold text-white mb-2 capitalize">{plan}</h4>
                            <div className="text-2xl font-bold text-white mb-2">{details.price}</div>
                            <ul className="space-y-1 text-xs text-gray-300">
                              {details.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.map((useCase, idx) => (
                              <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      {service.icon}
                      {service.featured && (
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Starting at:</h4>
                      <div className="text-2xl font-bold text-white">{service.pricing.starter.price}</div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.slice(0, 2).map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      View Pricing
                    </button>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for enterprise solutions and custom pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                +1 302 464 0950
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Schedule an in-person meeting</p>
              <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                Middletown, DE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive suite of innovative services and start your digital transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;
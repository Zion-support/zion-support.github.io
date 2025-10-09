import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  BarChart, 
  Shield, 
  ShoppingCart, 
  Smartphone, 
  Headphones, 
  Zap, 
  Database, 
  Globe, 
  FileText, 
  Users, 
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, emails, and marketing materials using advanced AI.',
      icon: FileText,
      price: 79,
      period: 'month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      category: 'Content & Marketing',
      color: 'orange',
      popular: true
    },
    {
      id: 2,
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictions, and automated reporting.',
      icon: BarChart,
      price: 149,
      period: 'month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom dashboards',
        'Automated reports',
        'Data integration',
        'Mobile app access'
      ],
      category: 'Analytics & BI',
      color: 'blue',
      popular: false
    },
    {
      id: 3,
      name: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring with AI-powered anomaly detection and response.',
      icon: Shield,
      price: 199,
      period: 'month',
      features: [
        '24/7 threat monitoring',
        'AI anomaly detection',
        'Automated incident response',
        'Compliance reporting',
        'Multi-cloud support',
        'Real-time alerts'
      ],
      category: 'Security',
      color: 'red',
      popular: false
    },
    {
      id: 4,
      name: 'AI E-commerce Assistant',
      description: 'Intelligent product recommendations, pricing optimization, and customer behavior analysis.',
      icon: ShoppingCart,
      price: 299,
      period: 'month',
      features: [
        'Smart product recommendations',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory management',
        'Sales forecasting',
        'A/B testing tools'
      ],
      category: 'E-commerce',
      color: 'green',
      popular: true
    },
    {
      id: 5,
      name: 'AI Mobile App Builder',
      description: 'Create native mobile apps with AI-powered code generation and automated testing.',
      icon: Smartphone,
      price: 399,
      period: 'month',
      features: [
        'AI code generation',
        'Cross-platform support',
        'Automated testing',
        'App store deployment',
        'Real-time collaboration',
        'Performance monitoring'
      ],
      category: 'Development',
      color: 'purple',
      popular: false
    },
    {
      id: 6,
      name: 'AI Customer Support',
      description: 'Intelligent chatbots and customer service automation with natural language understanding.',
      icon: Headphones,
      price: 149,
      period: 'month',
      features: [
        'Intelligent chatbots',
        'Multi-channel support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Human handoff',
        'Performance analytics'
      ],
      category: 'Customer Service',
      color: 'cyan',
      popular: false
    },
    {
      id: 7,
      name: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation and workflow optimization.',
      icon: Zap,
      price: 199,
      period: 'month',
      features: [
        'Process automation',
        'Workflow optimization',
        'Integration management',
        'Error handling',
        'Performance monitoring',
        'Custom triggers'
      ],
      category: 'Automation',
      color: 'yellow',
      popular: false
    },
    {
      id: 8,
      name: 'AI Database Optimizer',
      description: 'Optimize database performance with AI-powered query optimization and monitoring.',
      icon: Database,
      price: 249,
      period: 'month',
      features: [
        'Query optimization',
        'Performance monitoring',
        'Automated indexing',
        'Capacity planning',
        'Security scanning',
        'Backup automation'
      ],
      category: 'Database',
      color: 'indigo',
      popular: false
    },
    {
      id: 9,
      name: 'AI Website Builder',
      description: 'Create stunning websites with AI-powered design and content generation.',
      icon: Globe,
      price: 179,
      period: 'month',
      features: [
        'AI design generation',
        'Content optimization',
        'SEO tools',
        'Responsive design',
        'E-commerce integration',
        'Analytics dashboard'
      ],
      category: 'Web Development',
      color: 'teal',
      popular: false
    },
    {
      id: 10,
      name: 'AI Team Collaboration',
      description: 'Enhance team productivity with AI-powered collaboration tools and project management.',
      icon: Users,
      price: 129,
      period: 'month',
      features: [
        'Smart task assignment',
        'Progress tracking',
        'Meeting optimization',
        'Document collaboration',
        'Time tracking',
        'Performance insights'
      ],
      category: 'Productivity',
      color: 'pink',
      popular: false
    },
    {
      id: 11,
      name: 'AI System Monitor',
      description: 'Monitor system health and performance with AI-powered insights and automated responses.',
      icon: Settings,
      price: 199,
      period: 'month',
      features: [
        'System health monitoring',
        'Performance optimization',
        'Predictive maintenance',
        'Resource management',
        'Alert management',
        'Capacity planning'
      ],
      category: 'Infrastructure',
      color: 'gray',
      popular: false
    },
    {
      id: 12,
      name: 'AI Sales Assistant',
      description: 'Boost sales performance with AI-powered lead generation and customer insights.',
      icon: DollarSign,
      price: 249,
      period: 'month',
      features: [
        'Lead scoring',
        'Customer insights',
        'Sales forecasting',
        'Email automation',
        'CRM integration',
        'Performance analytics'
      ],
      category: 'Sales',
      color: 'emerald',
      popular: true
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & BI',
    'Security',
    'E-commerce',
    'Development',
    'Customer Service',
    'Automation',
    'Database',
    'Web Development',
    'Productivity',
    'Infrastructure',
    'Sales'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'from-orange-500 to-red-500',
      blue: 'from-blue-500 to-cyan-500',
      red: 'from-red-500 to-pink-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-violet-500',
      cyan: 'from-cyan-500 to-blue-500',
      yellow: 'from-yellow-500 to-orange-500',
      indigo: 'from-indigo-500 to-purple-500',
      teal: 'from-teal-500 to-cyan-500',
      pink: 'from-pink-500 to-rose-500',
      gray: 'from-gray-500 to-slate-500',
      emerald: 'from-emerald-500 to-green-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 50+ ready-to-use AI applications designed to boost productivity, 
            streamline operations, and drive growth for your business.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(service.color)} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white neon-text">
                      ${service.price}
                    </div>
                    <div className="text-sm text-gray-400">/{service.period}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="inline-block bg-slate-700 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                    {service.category}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$99</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• 3 Micro SAAS tools</li>
                  <li>• Basic support</li>
                  <li>• Standard features</li>
                  <li>• Email support</li>
                </ul>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$299</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• 10 Micro SAAS tools</li>
                  <li>• Priority support</li>
                  <li>• Advanced features</li>
                  <li>• Phone & email support</li>
                  <li>• Custom integrations</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Get Started
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$599</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Unlimited tools</li>
                  <li>• 24/7 support</li>
                  <li>• All features</li>
                  <li>• Dedicated manager</li>
                  <li>• Custom development</li>
                </ul>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS solutions 
              to boost productivity and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  MessageSquare,
  Cpu,
  Lock,
  Smartphone,
  Database,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it', name: 'IT Services', icon: Code, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Star, count: 0 },
    { id: 'emerging', name: 'Emerging Tech', icon: Cpu, count: 0 }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'ai',
      price: 1500,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      benefits: ['Increase efficiency by 40%', 'Reduce operational costs', 'Improve decision making', 'Automate complex tasks'],
      marketPrice: 2500,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      icon: Target,
      category: 'ai',
      price: 199,
      features: ['Marketing Automation', 'Ad Optimization', 'Content Generation', 'Customer Segmentation'],
      benefits: ['Increase ROI by 60%', 'Reduce marketing costs', 'Improve targeting', 'Scale campaigns'],
      marketPrice: 400,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      icon: Settings,
      category: 'ai',
      price: 399,
      features: ['Process Automation', 'Decision Making', 'Exception Handling', 'Workflow Optimization'],
      benefits: ['Save 20+ hours/week', 'Reduce errors by 90%', 'Improve consistency', 'Scale operations'],
      marketPrice: 800,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      icon: Users,
      category: 'ai',
      price: 1999,
      features: ['Medical Imaging', 'Drug Discovery', 'Personalized Medicine', 'Diagnostic Assistance'],
      benefits: ['Improve diagnosis accuracy', 'Reduce treatment time', 'Lower healthcare costs', 'Save lives'],
      marketPrice: 3500,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      icon: TrendingUp,
      category: 'ai',
      price: 1499,
      features: ['Algorithmic Trading', 'Fraud Detection', 'Risk Management', 'Credit Scoring'],
      benefits: ['Increase trading profits', 'Reduce fraud losses', 'Improve risk assessment', 'Automate compliance'],
      marketPrice: 2500,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis.',
      icon: Shield,
      category: 'ai',
      price: 499,
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Monitoring'],
      benefits: ['Prevent 99% of attacks', 'Reduce response time', 'Lower security costs', 'Improve compliance'],
      marketPrice: 1000,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI-powered analytics and visualization.',
      icon: BarChart,
      category: 'ai',
      price: 399,
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve forecasting', 'Optimize operations'],
      marketPrice: 800,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials.',
      icon: MessageSquare,
      category: 'ai',
      price: 199,
      features: ['Content Creation', 'SEO Optimization', 'Brand Voice', 'Multi-language Support'],
      benefits: ['Create content 10x faster', 'Improve SEO rankings', 'Maintain consistency', 'Scale content production'],
      marketPrice: 400,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },

    // IT Services
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Comprehensive IT support and infrastructure management for modern businesses.',
      icon: Code,
      category: 'it',
      price: 999,
      features: ['IT Support', 'Infrastructure Management', 'System Administration', 'Technical Consulting'],
      benefits: ['Reduce downtime', 'Improve efficiency', 'Lower IT costs', 'Ensure security'],
      marketPrice: 1800,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 expert support.',
      icon: Cloud,
      category: 'it',
      price: 999,
      features: ['Cloud Infrastructure', 'Server Management', 'Network Security', 'Disaster Recovery'],
      benefits: ['99.9% uptime guarantee', '24/7 support', 'Scalable infrastructure', 'Cost optimization'],
      marketPrice: 2000,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: Shield,
      category: 'it',
      price: 799,
      features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance Management'],
      benefits: ['Protect sensitive data', 'Meet compliance requirements', 'Reduce security risks', 'Peace of mind'],
      marketPrice: 1500,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with migration, optimization, and management services.',
      icon: Cloud,
      category: 'it',
      price: 1299,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
      benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Enhance reliability', 'Simplify management'],
      marketPrice: 2500,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20'
    },

    // Micro SAAS
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.',
      icon: Star,
      category: 'micro-saas',
      price: 79,
      features: ['50+ AI Tools', 'Easy Integration', 'Scalable Pricing', '24/7 Support'],
      benefits: ['Start with $79/month', 'No long-term contracts', 'Instant deployment', 'Regular updates'],
      marketPrice: 150,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },

    // Emerging Technologies
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      icon: Cpu,
      category: 'emerging',
      price: 0,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research Support'],
      benefits: ['Solve complex problems', 'Future-proof technology', 'Competitive advantage', 'Research partnership'],
      marketPrice: 0,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      customPricing: true
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      description: 'Self-managing systems with AI-driven decision making and adaptive behavior.',
      icon: Settings,
      category: 'emerging',
      price: 0,
      features: ['Self-Management', 'Adaptive Behavior', 'Predictive Maintenance', 'Autonomous Operations'],
      benefits: ['Reduce human intervention', 'Improve efficiency', 'Lower operational costs', '24/7 operation'],
      marketPrice: 0,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      customPricing: true
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3',
      description: 'Decentralized solutions including smart contracts, DeFi, and NFT platforms.',
      icon: Shield,
      category: 'emerging',
      price: 0,
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Decentralized Apps'],
      benefits: ['Transparent transactions', 'Reduced intermediaries', 'Enhanced security', 'New business models'],
      marketPrice: 0,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      customPricing: true
    },
    {
      id: 'iot-edge-computing',
      name: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time data processing.',
      icon: Cloud,
      category: 'emerging',
      price: 0,
      features: ['IoT Devices', 'Edge Computing', 'Real-time Processing', 'Data Analytics'],
      benefits: ['Real-time insights', 'Reduced latency', 'Lower bandwidth costs', 'Improved reliability'],
      marketPrice: 0,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      customPricing: true
    },
    {
      id: 'business-intelligence',
      name: 'Business Intelligence',
      description: 'Data-driven insights and analytics to help businesses make informed decisions.',
      icon: BarChart,
      category: 'emerging',
      price: 599,
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reporting'],
      benefits: ['Make informed decisions', 'Identify opportunities', 'Improve performance', 'Gain competitive advantage'],
      marketPrice: 1200,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    }
  ];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = allServices.length;
    } else {
      category.count = allServices.filter(service => service.category === category.id).length;
    }
  });

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, micro SAAS, emerging technologies, and enterprise solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT services, micro saas, quantum computing, blockchain, business intelligence, cybersecurity" />
      </Helmet>

      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business. 
            From micro SAAS tools to enterprise-grade AI platforms, we have everything you need.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border`}>
              <div className="flex items-center justify-between mb-4">
                <service.icon className={`w-8 h-8 ${service.color}`} />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">
                  {categories.find(c => c.id === service.category)?.name}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className={`text-2xl font-bold ${service.color}`}>
                  {service.customPricing ? 'Custom Pricing' : `$${service.price}/month`}
                </div>
                {!service.customPricing && (
                  <div className="text-sm text-gray-400">
                    Market: ${service.marketPrice}/month
                  </div>
                )}
              </div>
              
              <div className="space-y-1 mb-6">
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="text-sm text-gray-400 flex items-center">
                    <TrendingUp className="w-3 h-3 text-blue-400 mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>
              
              <a 
                href="/contact" 
                className={`${service.color} hover:opacity-80 font-medium flex items-center justify-center w-full py-2 px-4 rounded-lg border border-current hover:bg-current hover:text-white transition-all`}
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  3 AI Services
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Basic Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Standard Templates
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center border-2 border-purple-500">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  10 AI Services
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Priority Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Premium Templates
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  API Access
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  All Services
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Custom Development
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Dedicated Account Manager
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our services today and experience the power of AI-driven transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
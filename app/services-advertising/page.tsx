import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Database, Cloud, Smartphone, Globe, Lock, BarChart3, MessageSquare, FileText, Settings, Target, Lightbulb, Mail, Phone, MapPin, Award, Cpu, Network, Bot, Sparkles, DollarSign, Rocket, Gauge } from 'lucide-react';

const ServicesAdvertisingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'text-cyan-400'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Rocket className="w-5 h-5" />,
      color: 'text-pink-400'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: <Settings className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      id: 'specialized',
      name: 'Specialized',
      icon: <Target className="w-5 h-5" />,
      color: 'text-green-400'
    }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, social media posts, and marketing copy in seconds.',
      category: 'ai-services',
      icon: <FileText className="w-8 h-8" />,
      price: '$99/month',
      originalPrice: '$199/month',
      features: ['Unlimited AI-generated content', '50+ content templates', 'Multi-language support', 'SEO optimization'],
      benefits: ['Save 80% content creation time', 'Increase engagement by 300%', 'Generate 1000+ articles monthly'],
      popular: true,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Advanced business intelligence platform with real-time data visualization, predictive analytics, and automated reporting.',
      category: 'ai-services',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integrations'],
      benefits: ['Make data-driven decisions 5x faster', 'Reduce reporting time by 90%', 'Identify trends before competitors'],
      popular: true,
      link: '/ai-data-analytics',
      demo: 'https://demo.ziontechgroup.com/ai-analytics'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer service automation with AI chatbots, ticket routing, and sentiment analysis for 24/7 support.',
      category: 'ai-services',
      icon: <MessageSquare className="w-8 h-8" />,
      price: '$79/month',
      originalPrice: '$159/month',
      features: ['AI-powered chatbots', 'Multi-channel support', 'Sentiment analysis', 'Knowledge base integration'],
      benefits: ['Reduce support costs by 60%', 'Handle 10x more inquiries', 'Improve customer satisfaction'],
      popular: false,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/ai-support'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Complete AI-powered marketing platform with content generation, social media management, and campaign optimization.',
      category: 'ai-services',
      icon: <Target className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['AI content generation', 'Social media automation', 'Email marketing AI', 'Campaign optimization'],
      benefits: ['Increase followers by 400%', 'Save 15 hours weekly', 'Boost engagement by 250%'],
      popular: true,
      link: '/ai-marketing',
      demo: 'https://demo.ziontechgroup.com/ai-marketing'
    },

    // Micro SAAS Services
    {
      id: 'smart-inventory-manager',
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory optimization system that predicts demand, prevents stockouts, and maximizes profitability.',
      category: 'micro-saas',
      icon: <Database className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: ['Demand forecasting AI', 'Automated reorder points', 'Multi-location management', 'Cost optimization'],
      benefits: ['Reduce inventory costs by 30%', 'Eliminate stockouts', 'Increase profit margins'],
      popular: false,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/inventory-manager'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management tool with AI task prioritization, resource allocation, and deadline prediction.',
      category: 'micro-saas',
      icon: <Target className="w-8 h-8" />,
      price: '$119/month',
      originalPrice: '$239/month',
      features: ['AI task prioritization', 'Resource optimization', 'Deadline prediction', 'Team collaboration'],
      benefits: ['Complete projects 40% faster', 'Reduce project overruns by 70%', 'Improve team productivity'],
      popular: false,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/project-manager'
    },
    {
      id: 'smart-crm-system',
      title: 'Smart CRM System',
      description: 'AI-powered customer relationship management with predictive lead scoring and automated follow-ups.',
      category: 'micro-saas',
      icon: <Users className="w-8 h-8" />,
      price: '$159/month',
      originalPrice: '$319/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Pipeline management'],
      benefits: ['Increase sales by 35%', 'Close deals 50% faster', 'Improve lead quality'],
      popular: true,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/smart-crm'
    },
    {
      id: 'ai-website-builder',
      title: 'AI Website Builder',
      description: 'Revolutionary website creation platform with AI design, content generation, and optimization capabilities.',
      category: 'micro-saas',
      icon: <Globe className="w-8 h-8" />,
      price: '$79/month',
      originalPrice: '$159/month',
      features: ['AI-powered design', 'Content generation', 'SEO optimization', 'Mobile responsiveness'],
      benefits: ['Build websites 10x faster', 'Professional designs automatically', 'Optimize for search engines'],
      popular: true,
      link: '/micro-saas',
      demo: 'https://demo.ziontechgroup.com/website-builder'
    },

    // IT Services
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless cloud transformation with zero downtime, cost optimization, and enhanced security.',
      category: 'it-services',
      icon: <Cloud className="w-8 h-8" />,
      price: '$2,999/month',
      originalPrice: '$5,999/month',
      features: ['Zero downtime migration', 'Cost optimization', 'Security enhancement', '24/7 monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security'],
      popular: false,
      link: '/ai-cloud-infrastructure',
      demo: 'https://demo.ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance management.',
      category: 'it-services',
      icon: <Shield className="w-8 h-8" />,
      price: '$2,499/month',
      originalPrice: '$4,999/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security incidents by 80%', 'Ensure compliance'],
      popular: true,
      link: '/cybersecurity',
      demo: 'https://demo.ziontechgroup.com/cybersecurity'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration solutions.',
      category: 'it-services',
      icon: <Settings className="w-8 h-8" />,
      price: '$1,799/month',
      originalPrice: '$3,599/month',
      features: ['CI/CD pipelines', 'Infrastructure automation', 'Monitoring & alerting', 'Testing automation'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors', 'Improve team productivity'],
      popular: false,
      link: '/it-services',
      demo: 'https://demo.ziontechgroup.com/devops'
    },

    // Specialized Services
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      category: 'specialized',
      icon: <Cpu className="w-8 h-8" />,
      price: 'Custom Pricing',
      originalPrice: '',
      features: ['Quantum algorithms', 'Quantum security', 'Optimization', 'Simulation'],
      benefits: ['Solve complex problems', 'Future-proof technology', 'Competitive advantage'],
      popular: false,
      link: '/quantum-computing',
      demo: 'https://demo.ziontechgroup.com/quantum'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 solutions for the future of the internet.',
      category: 'specialized',
      icon: <Network className="w-8 h-8" />,
      price: '$8,000/project',
      originalPrice: '$15,000/project',
      features: ['Smart contracts', 'DeFi protocols', 'NFT marketplaces', 'Web3 applications'],
      benefits: ['Decentralized solutions', 'Enhanced security', 'Future-ready technology'],
      popular: false,
      link: '/blockchain-web3',
      demo: 'https://demo.ziontechgroup.com/blockchain'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations and infrastructure.',
      category: 'specialized',
      icon: <Bot className="w-8 h-8" />,
      price: '$2,500/month',
      originalPrice: '$5,000/month',
      features: ['Self-healing infrastructure', 'Automated operations', 'Intelligent monitoring', 'Adaptive learning'],
      benefits: ['Reduce manual intervention', 'Improve system reliability', 'Optimize performance'],
      popular: false,
      link: '/autonomous-systems',
      demo: 'https://demo.ziontechgroup.com/autonomous'
    }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const stats = [
    { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '99.9%', icon: <Star className="w-6 h-6" /> },
    { label: 'Cost Savings', value: '$2.5B+', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.9%', icon: <Gauge className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
              <span className="text-3xl mr-2">⚡</span>
              Zion Tech Group
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/contact" className="cyber-button">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 neon-text transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive AI, IT, and micro SAAS solutions designed to transform your business. 
            From AI-powered automation to quantum computing, we deliver enterprise-grade technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button cyber-pulse"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card text-center quantum-float">
                <div className="text-cyan-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white cyber-pulse'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                <span className={category.color}>{category.icon}</span>
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card quantum-float relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 text-cyan-400">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {serviceCategories.find(cat => cat.id === service.category)?.name}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  {service.originalPrice && (
                    <p className="text-sm text-green-400 text-center">Save 50% - Limited Time!</p>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
                        <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full cyber-button text-center block"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                  <a
                    href={service.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors text-center block"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with unmatched expertise and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our one-click deployment and intuitive setup process.</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with encryption, compliance, and regular security audits.</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our clients see average ROI of 300% within the first 6 months of implementation.</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and regular feature updates based on your feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button cyber-pulse"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free consultation • ✓ Custom solution design • ✓ 30-day trial • ✓ 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAdvertisingPage;
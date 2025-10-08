import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Database, Cloud, Smartphone, Globe, Lock, BarChart3, MessageSquare, FileText, Settings, Target, Lightbulb, Mail } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, social media posts, and marketing copy in seconds.',
      icon: <FileText className="w-8 h-8" />,
      category: 'Content & Marketing',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'Unlimited AI-generated content',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% content creation time',
        'Increase engagement by 300%',
        'Generate 1000+ articles monthly',
        'Professional-grade content quality'
      ],
      popular: true,
      link: '/contact?service=ai-content-generator',
      demo: 'https://demo.ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'smart-analytics-dashboard',
      title: 'Smart Analytics Dashboard',
      description: 'Advanced business intelligence platform with real-time data visualization, predictive analytics, and automated reporting.',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics & BI',
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom dashboard builder',
        'Automated report generation',
        'Data integration (50+ sources)',
        'Mobile app access',
        'Team collaboration tools',
        'API access'
      ],
      benefits: [
        'Make data-driven decisions 5x faster',
        'Reduce reporting time by 90%',
        'Identify trends before competitors',
        'Increase revenue by 25%'
      ],
      popular: true,
      link: '/contact?service=smart-analytics',
      demo: 'https://demo.ziontechgroup.com/smart-analytics'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer service automation with AI chatbots, ticket routing, and sentiment analysis for 24/7 support.',
      icon: <MessageSquare className="w-8 h-8" />,
      category: 'Customer Service',
      price: '$79/month',
      originalPrice: '$159/month',
      features: [
        'AI-powered chatbots',
        'Multi-channel support',
        'Sentiment analysis',
        'Ticket auto-routing',
        'Knowledge base integration',
        'Live chat handoff',
        'Performance analytics',
        'Custom branding'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Handle 10x more inquiries',
        'Improve customer satisfaction',
        '24/7 automated support'
      ],
      popular: false,
      link: '/contact?service=ai-customer-support',
      demo: 'https://demo.ziontechgroup.com/ai-support'
    },
    {
      id: 'smart-inventory-manager',
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory optimization system that predicts demand, prevents stockouts, and maximizes profitability.',
      icon: <Database className="w-8 h-8" />,
      category: 'E-commerce & Retail',
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Demand forecasting AI',
        'Automated reorder points',
        'Multi-location management',
        'Supplier integration',
        'Cost optimization',
        'Real-time tracking',
        'Mobile app',
        'API integrations'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts',
        'Increase profit margins',
        'Automate 90% of inventory tasks'
      ],
      popular: false,
      link: '/contact?service=smart-inventory',
      demo: 'https://demo.ziontechgroup.com/inventory-manager'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Complete social media automation platform with AI content creation, scheduling, and performance optimization.',
      icon: <Globe className="w-8 h-8" />,
      category: 'Social Media',
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer discovery',
        'ROI measurement'
      ],
      benefits: [
        'Increase followers by 400%',
        'Save 15 hours weekly',
        'Boost engagement by 250%',
        'Generate viral content'
      ],
      popular: true,
      link: '/contact?service=ai-social-media',
      demo: 'https://demo.ziontechgroup.com/social-media-ai'
    },
    {
      id: 'smart-email-marketing',
      title: 'Smart Email Marketing Pro',
      description: 'AI-driven email marketing platform with advanced segmentation, personalization, and automation capabilities.',
      icon: <Mail className="w-8 h-8" />,
      category: 'Email Marketing',
      price: '$89/month',
      originalPrice: '$179/month',
      features: [
        'AI-powered segmentation',
        'Dynamic content personalization',
        'Send time optimization',
        'A/B testing automation',
        'Behavioral triggers',
        'Advanced analytics',
        'Template library',
        'Deliverability optimization'
      ],
      benefits: [
        'Increase open rates by 200%',
        'Boost click-through rates by 150%',
        'Reduce unsubscribe rates',
        'Generate 5x more revenue'
      ],
      popular: false,
      link: '/contact?service=smart-email',
      demo: 'https://demo.ziontechgroup.com/email-marketing'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management tool with AI task prioritization, resource allocation, and deadline prediction.',
      icon: <Target className="w-8 h-8" />,
      category: 'Project Management',
      price: '$119/month',
      originalPrice: '$239/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Deadline prediction',
        'Risk assessment',
        'Team collaboration',
        'Time tracking',
        'Progress visualization',
        'Integration ecosystem'
      ],
      benefits: [
        'Complete projects 40% faster',
        'Reduce project overruns by 70%',
        'Improve team productivity',
        'Predict and prevent delays'
      ],
      popular: false,
      link: '/contact?service=ai-project-manager',
      demo: 'https://demo.ziontechgroup.com/project-manager'
    },
    {
      id: 'smart-crm-system',
      title: 'Smart CRM System',
      description: 'AI-powered customer relationship management with predictive lead scoring and automated follow-ups.',
      icon: <Users className="w-8 h-8" />,
      category: 'CRM & Sales',
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Pipeline management',
        'Contact enrichment',
        'Email tracking',
        'Meeting scheduling',
        'Custom workflows'
      ],
      benefits: [
        'Increase sales by 35%',
        'Close deals 50% faster',
        'Improve lead quality',
        'Automate 80% of sales tasks'
      ],
      popular: true,
      link: '/contact?service=smart-crm',
      demo: 'https://demo.ziontechgroup.com/smart-crm'
    },
    {
      id: 'ai-finance-manager',
      title: 'AI Finance Manager',
      description: 'Intelligent financial management platform with expense tracking, budgeting, and investment insights.',
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Finance & Accounting',
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'Expense categorization AI',
        'Budget optimization',
        'Investment recommendations',
        'Tax preparation',
        'Financial forecasting',
        'Receipt scanning',
        'Multi-currency support',
        'Bank integration'
      ],
      benefits: [
        'Save 10 hours monthly on finances',
        'Reduce expenses by 20%',
        'Optimize investment returns',
        'Automate tax preparation'
      ],
      popular: false,
      link: '/contact?service=ai-finance',
      demo: 'https://demo.ziontechgroup.com/finance-manager'
    },
    {
      id: 'smart-hr-platform',
      title: 'Smart HR Platform',
      description: 'AI-powered human resources management with recruitment automation, performance tracking, and employee insights.',
      icon: <Users className="w-8 h-8" />,
      category: 'Human Resources',
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'AI resume screening',
        'Candidate matching',
        'Performance analytics',
        'Employee engagement',
        'Payroll automation',
        'Benefits management',
        'Compliance tracking',
        'Team insights'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve employee retention',
        'Automate HR processes',
        'Make data-driven HR decisions'
      ],
      popular: false,
      link: '/contact?service=smart-hr',
      demo: 'https://demo.ziontechgroup.com/hr-platform'
    },
    {
      id: 'ai-website-builder',
      title: 'AI Website Builder',
      description: 'Revolutionary website creation platform with AI design, content generation, and optimization capabilities.',
      icon: <Globe className="w-8 h-8" />,
      category: 'Web Development',
      price: '$79/month',
      originalPrice: '$159/month',
      features: [
        'AI-powered design',
        'Content generation',
        'SEO optimization',
        'Mobile responsiveness',
        'E-commerce integration',
        'Analytics dashboard',
        'Custom domains',
        'SSL certificates'
      ],
      benefits: [
        'Build websites 10x faster',
        'Professional designs automatically',
        'Optimize for search engines',
        'Mobile-first approach'
      ],
      popular: true,
      link: '/contact?service=ai-website-builder',
      demo: 'https://demo.ziontechgroup.com/website-builder'
    },
    {
      id: 'smart-security-monitor',
      title: 'Smart Security Monitor',
      description: 'AI-powered cybersecurity monitoring system with threat detection, vulnerability scanning, and incident response.',
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity',
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance monitoring',
        'Security analytics',
        'Threat intelligence',
        'Penetration testing',
        '24/7 monitoring'
      ],
      benefits: [
        'Prevent 99% of cyber attacks',
        'Reduce security incidents by 80%',
        'Ensure compliance',
        'Protect sensitive data'
      ],
      popular: false,
      link: '/contact?service=smart-security',
      demo: 'https://demo.ziontechgroup.com/security-monitor'
    }
  ];

  const categories = [
    'All Services',
    'Content & Marketing',
    'Analytics & BI',
    'Customer Service',
    'E-commerce & Retail',
    'Social Media',
    'Email Marketing',
    'Project Management',
    'CRM & Sales',
    'Finance & Accounting',
    'Human Resources',
    'Web Development',
    'Cybersecurity'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text">
              Zion Tech Group
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 neon-text transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered micro SAAS tools that transform your business operations. 
            Start from $79/month with enterprise-grade features.
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
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
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
                    {service.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-400 text-center">Save 50% - Limited Time!</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
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
                    Get Started Now
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

      {/* Why Choose Our Micro SAAS */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS tools are designed for modern businesses that need powerful, 
              affordable, and easy-to-use solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our one-click deployment and intuitive setup process.</p>
            </div>
            <div className="cyber-card text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with encryption, compliance, and regular security audits.</p>
            </div>
            <div className="cyber-card text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our clients see average ROI of 300% within the first 6 months of implementation.</p>
            </div>
            <div className="cyber-card text-center">
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
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
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
            <p>✓ Free 30-day trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail, MapPin, Award, Brain, Cloud, Lock } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'dev', name: 'Developer Tools', icon: <Zap className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'productivity', name: 'Productivity', icon: <Clock className="w-5 h-5" /> }
  ];

  const microSAASServices = [
    // AI & Machine Learning Services
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for development teams.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code quality metrics', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews'],
      marketPrice: '$150-300/month',
      category: 'ai',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models'],
      popular: true,
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      icon: '📄',
      price: '$149/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'Multi-format support'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'ai',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models'],
      savings: 'Save $1,800+/year'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile responsive'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends before competitors'],
      marketPrice: '$150-300/month',
      category: 'ai',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and context-aware responses.',
      icon: '🤖',
      price: '$199/month',
      features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'CRM integration', 'Analytics dashboard'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 support', 'Improve response time'],
      marketPrice: '$300-600/month',
      category: 'ai',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      savings: 'Save $2,400+/year'
    },
    {
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification and scoring to maximize conversion rates.',
      icon: '🎯',
      price: '$139/month',
      features: ['Behavioral analysis', 'Lead scoring', 'Conversion prediction', 'CRM integration', 'Follow-up automation'],
      benefits: ['Increase conversion by 40%', 'Focus on high-value leads', 'Reduce sales cycle time'],
      marketPrice: '$200-400/month',
      category: 'ai',
      technologies: ['Machine Learning', 'Python', 'Salesforce API', 'HubSpot API', 'Custom AI Models'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Content Generator Pro',
      description: 'High-quality content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$119/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['Create content 5x faster', 'Improve SEO rankings', 'Maintain consistent quality'],
      marketPrice: '$180-350/month',
      category: 'ai',
      technologies: ['OpenAI GPT', 'Claude', 'React', 'Node.js', 'Custom Fine-tuned Models'],
      savings: 'Save $1,200+/year'
    },

    // Developer Tools
    {
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with intelligent test generation and performance monitoring.',
      icon: '🔌',
      price: '$79/month',
      features: ['Automated test generation', 'Performance testing', 'Load testing', 'API documentation', 'Integration testing'],
      benefits: ['Catch bugs 90% faster', 'Improve API reliability', 'Reduce testing time by 80%'],
      marketPrice: '$120-250/month',
      category: 'dev',
      technologies: ['Postman', 'Newman', 'Jest', 'Artillery', 'Custom AI Models'],
      savings: 'Save $1,000+/year'
    },
    {
      title: 'AI Code Quality Monitor',
      description: 'Continuous code quality monitoring with technical debt tracking and improvement suggestions.',
      icon: '💻',
      price: '$89/month',
      features: ['Code quality metrics', 'Technical debt tracking', 'Refactoring suggestions', 'Team performance analytics', 'Git integration'],
      benefits: ['Improve code maintainability', 'Reduce technical debt', 'Enhance team productivity'],
      marketPrice: '$150-300/month',
      category: 'dev',
      technologies: ['SonarQube', 'CodeClimate', 'GitHub Actions', 'Custom AI Models'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'Smart Contract Auditor',
      description: 'AI-powered smart contract analysis and security auditing for blockchain projects.',
      icon: '⛓️',
      price: '$399/month',
      features: ['Smart contract analysis', 'Vulnerability detection', 'Gas optimization', 'Compliance checking', 'Audit reports'],
      benefits: ['Prevent costly exploits', 'Ensure contract security', 'Optimize gas usage'],
      marketPrice: '$600-1200/month',
      category: 'dev',
      technologies: ['Solidity', 'Hardhat', 'Custom AI Models', 'Blockchain APIs'],
      savings: 'Save $2,400+/year'
    },
    {
      title: 'AI Automated Testing Platform',
      description: 'Intelligent test automation with self-healing tests and smart test generation.',
      icon: '🧪',
      price: '$179/month',
      features: ['Self-healing tests', 'Smart test generation', 'Cross-browser testing', 'Mobile testing', 'Performance testing'],
      benefits: ['Reduce testing time by 70%', 'Improve test coverage', 'Catch bugs earlier'],
      marketPrice: '$250-500/month',
      category: 'dev',
      technologies: ['Selenium', 'Playwright', 'Jest', 'Cypress', 'Custom AI Models'],
      savings: 'Save $1,200+/year'
    },

    // Marketing Services
    {
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, A/B testing, and optimal send times.',
      icon: '📧',
      price: '$149/month',
      features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization', 'Performance analytics'],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$129/month',
      features: ['Content generation', 'Optimal posting times', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform management'],
      benefits: ['Increase engagement by 45%', 'Save 20 hours/week', 'Grow followers organically'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['Twitter API', 'Instagram API', 'OpenAI GPT', 'React', 'Node.js'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI-Powered SEO Optimizer',
      description: 'Automated SEO analysis, keyword optimization, and content improvement suggestions.',
      icon: '🔍',
      price: '$99/month',
      features: ['SEO analysis', 'Keyword research', 'Content optimization', 'Competitor analysis', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20 hours/week'],
      marketPrice: '$150-300/month',
      category: 'marketing',
      technologies: ['Google APIs', 'SEMrush API', 'Ahrefs API', 'Custom AI Models'],
      savings: 'Save $1,200+/year'
    },

    // Security Services
    {
      title: 'AI Security Monitoring Suite',
      description: 'Automated threat detection, vulnerability scanning, and security incident response.',
      icon: '🔒',
      price: '$249/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security reporting'],
      benefits: ['Prevent 95% of security breaches', 'Reduce response time by 80%', 'Ensure compliance'],
      marketPrice: '$400-800/month',
      category: 'security',
      technologies: ['SIEM', 'EDR', 'Machine Learning', 'Python', 'Custom AI Models'],
      savings: 'Save $1,800+/year'
    },
    {
      title: 'AI Compliance Monitor',
      description: 'Automated compliance monitoring, regulatory updates, and risk assessment for various industries.',
      icon: '📋',
      price: '$249/month',
      features: ['Compliance monitoring', 'Regulatory updates', 'Risk assessment', 'Audit preparation', 'Reporting'],
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Minimize regulatory risks'],
      marketPrice: '$400-800/month',
      category: 'security',
      technologies: ['Regulatory APIs', 'Machine Learning', 'Python', 'Custom AI Models'],
      savings: 'Save $1,800+/year'
    },

    // Productivity Services
    {
      title: 'AI Project Management Assistant',
      description: 'AI-driven project planning, resource allocation, and deadline optimization.',
      icon: '📋',
      price: '$159/month',
      features: ['Task automation', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project costs', 'Improve team productivity'],
      marketPrice: '$250-450/month',
      category: 'productivity',
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Custom AI Models'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Inventory Optimizer',
      description: 'Predictive inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$299/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      marketPrice: '$400-800/month',
      category: 'productivity',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      savings: 'Save $2,400+/year'
    },
    {
      title: 'AI Financial Planning Assistant',
      description: 'Personalized financial planning, investment recommendations, and budget optimization.',
      icon: '💰',
      price: '$89/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Goal tracking', 'Tax optimization', 'Retirement planning'],
      benefits: ['Optimize investment returns', 'Reduce financial stress', 'Achieve goals faster'],
      marketPrice: '$150-300/month',
      category: 'productivity',
      technologies: ['Python', 'Pandas', 'NumPy', 'React', 'PostgreSQL'],
      savings: 'Save $1,200+/year'
    },
    {
      title: 'AI Workflow Automation Engine',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      icon: '⚙️',
      price: '$199/month',
      features: ['Process automation', 'Decision automation', 'Exception handling', 'Integration management', 'Workflow optimization'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve efficiency'],
      marketPrice: '$300-600/month',
      category: 'productivity',
      technologies: ['Zapier', 'Microsoft Power Automate', 'Custom AI Models', 'Node.js', 'PostgreSQL'],
      savings: 'Save $1,200+/year'
    }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalSavings = microSAASServices.reduce((sum, service) => {
    const savings = parseInt(service.savings.replace(/[^0-9]/g, ''));
    return sum + savings;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Affordable AI-powered micro SAAS solutions for modern businesses. 20+ tools starting from $79/month. Save thousands with our proven AI automation tools." />
        <meta name="keywords" content="micro saas, ai tools, business automation, ai solutions, affordable software, business tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <div className="text-6xl animate-pulse">⚡</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Affordable, powerful AI-driven tools for modern businesses. Transform your operations with our proven micro SAAS solutions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">AI-Powered Tools</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">$79</div>
                <div className="text-gray-300 text-sm">Starting Price</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">${totalSavings.toLocaleString()}+</div>
                <div className="text-gray-300 text-sm">Total Savings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg group"
              >
                <span className="flex items-center">
                  📞 Call Now: +1 302 464 0950
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium group"
              >
                <span className="flex items-center">
                  ✉️ Get Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="cyber-card p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`cyber-card p-6 group hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                    <div className="text-sm text-gray-500 mb-2">Market: {service.marketPrice}</div>
                    <div className="text-sm font-bold text-green-400">{service.savings}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">
                      {categories.find(c => c.id === service.category)?.name}
                    </div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-pink-400 mb-2 uppercase tracking-wider">Benefits</div>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="/contact"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium text-sm group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="cyber-card p-12 text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom solution recommendations. 
                Our experts will help you choose the perfect micro SAAS solutions for your business needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Phone</div>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Email</div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-pink-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Address</div>
                    <div className="text-pink-400">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg group"
                >
                  <span className="flex items-center">
                    📞 Call Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 text-lg border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium group"
                >
                  <span className="flex items-center">
                    ✉️ Email Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;
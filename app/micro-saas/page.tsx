import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Play, Download, ExternalLink } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', count: 50 },
    { id: 'ai', name: 'AI-Powered', count: 20 },
    { id: 'productivity', name: 'Productivity', count: 15 },
    { id: 'marketing', name: 'Marketing', count: 10 },
    { id: 'development', name: 'Development', count: 5 }
  ];

  const microSAASServices = [
    // AI-Powered Services
    {
      id: 1,
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for development teams.',
      icon: '🔍',
      price: '$89/month',
      originalPrice: '$150/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code quality metrics', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews'],
      marketPrice: '$150-300/month',
      category: 'ai',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/code-review',
      documentation: 'https://docs.ziontechgroup.com/code-review',
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 2,
      title: 'AI Document Intelligence',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      icon: '📄',
      price: '$149/month',
      originalPrice: '$200/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'Multi-format support'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'ai',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models'],
      demoUrl: 'https://demo.ziontechgroup.com/document-ai',
      documentation: 'https://docs.ziontechgroup.com/document-ai',
      rating: 4.8,
      reviews: 89,
      popular: true
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$150/month',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile responsive'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends before competitors'],
      marketPrice: '$150-300/month',
      category: 'ai',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      documentation: 'https://docs.ziontechgroup.com/analytics',
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      id: 4,
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with intelligent test generation and performance monitoring.',
      icon: '🔌',
      price: '$79/month',
      originalPrice: '$120/month',
      features: ['Automated test generation', 'Performance testing', 'Load testing', 'API documentation', 'Integration testing'],
      benefits: ['Catch bugs 90% faster', 'Improve API reliability', 'Reduce testing time by 80%'],
      marketPrice: '$120-250/month',
      category: 'development',
      technologies: ['Postman', 'Newman', 'Jest', 'Artillery', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/api-testing',
      documentation: 'https://docs.ziontechgroup.com/api-testing',
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      id: 5,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and context-aware responses.',
      icon: '🤖',
      price: '$199/month',
      originalPrice: '$300/month',
      features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'CRM integration', 'Analytics dashboard'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 support', 'Improve response time'],
      marketPrice: '$300-600/month',
      category: 'ai',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo.ziontechgroup.com/support-bot',
      documentation: 'https://docs.ziontechgroup.com/support-bot',
      rating: 4.9,
      reviews: 203,
      popular: true
    },
    {
      id: 6,
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, A/B testing, and optimal send times.',
      icon: '📧',
      price: '$149/month',
      originalPrice: '$200/month',
      features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization', 'Performance analytics'],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js'],
      demoUrl: 'https://demo.ziontechgroup.com/email-marketing',
      documentation: 'https://docs.ziontechgroup.com/email-marketing',
      rating: 4.8,
      reviews: 167,
      popular: true
    },
    {
      id: 7,
      title: 'AI Inventory Optimizer',
      description: 'Predictive inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$299/month',
      originalPrice: '$400/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      marketPrice: '$400-800/month',
      category: 'productivity',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      demoUrl: 'https://demo.ziontechgroup.com/inventory',
      documentation: 'https://docs.ziontechgroup.com/inventory',
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      id: 8,
      title: 'Smart HR Recruitment Tool',
      description: 'AI-powered resume screening, candidate matching, and interview scheduling automation.',
      icon: '👥',
      price: '$179/month',
      originalPrice: '$250/month',
      features: ['Resume parsing', 'Candidate scoring', 'Interview scheduling', 'Onboarding automation', 'Performance tracking'],
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      marketPrice: '$250-500/month',
      category: 'productivity',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/hr-recruitment',
      documentation: 'https://docs.ziontechgroup.com/hr-recruitment',
      rating: 4.8,
      reviews: 112,
      popular: false
    },
    {
      id: 9,
      title: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$129/month',
      originalPrice: '$200/month',
      features: ['Content generation', 'Optimal posting times', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform management'],
      benefits: ['Increase engagement by 45%', 'Save 20 hours/week', 'Grow followers organically'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['Twitter API', 'Instagram API', 'OpenAI GPT', 'React', 'Node.js'],
      demoUrl: 'https://demo.ziontechgroup.com/social-media',
      documentation: 'https://docs.ziontechgroup.com/social-media',
      rating: 4.6,
      reviews: 145,
      popular: false
    },
    {
      id: 10,
      title: 'AI Financial Planning Assistant',
      description: 'Personalized financial planning, investment recommendations, and budget optimization.',
      icon: '💰',
      price: '$89/month',
      originalPrice: '$150/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Goal tracking', 'Tax optimization', 'Retirement planning'],
      benefits: ['Optimize investment returns', 'Reduce financial stress', 'Achieve goals faster'],
      marketPrice: '$150-300/month',
      category: 'productivity',
      technologies: ['Python', 'Pandas', 'NumPy', 'React', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/financial-planning',
      documentation: 'https://docs.ziontechgroup.com/financial-planning',
      rating: 4.7,
      reviews: 78,
      popular: false
    },
    {
      id: 11,
      title: 'Smart Project Management AI',
      description: 'AI-driven project planning, resource allocation, and deadline optimization.',
      icon: '📋',
      price: '$159/month',
      originalPrice: '$250/month',
      features: ['Task automation', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project costs', 'Improve team productivity'],
      marketPrice: '$250-450/month',
      category: 'productivity',
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/project-management',
      documentation: 'https://docs.ziontechgroup.com/project-management',
      rating: 4.8,
      reviews: 189,
      popular: true
    },
    {
      id: 12,
      title: 'AI Content Generator Pro',
      description: 'High-quality content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$119/month',
      originalPrice: '$180/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['Create content 5x faster', 'Improve SEO rankings', 'Maintain consistent quality'],
      marketPrice: '$180-350/month',
      category: 'marketing',
      technologies: ['OpenAI GPT', 'Claude', 'React', 'Node.js', 'Custom Fine-tuned Models'],
      demoUrl: 'https://demo.ziontechgroup.com/content-generator',
      documentation: 'https://docs.ziontechgroup.com/content-generator',
      rating: 4.9,
      reviews: 234,
      popular: true
    },
    {
      id: 13,
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification and scoring to maximize conversion rates.',
      icon: '🎯',
      price: '$139/month',
      originalPrice: '$200/month',
      features: ['Behavioral analysis', 'Lead scoring', 'Conversion prediction', 'CRM integration', 'Follow-up automation'],
      benefits: ['Increase conversion by 40%', 'Focus on high-value leads', 'Reduce sales cycle time'],
      marketPrice: '$200-400/month',
      category: 'marketing',
      technologies: ['Machine Learning', 'Python', 'Salesforce API', 'HubSpot API', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/lead-scoring',
      documentation: 'https://docs.ziontechgroup.com/lead-scoring',
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      id: 14,
      title: 'AI Security Monitoring Suite',
      description: 'Automated threat detection, vulnerability scanning, and security incident response.',
      icon: '🔒',
      price: '$249/month',
      originalPrice: '$400/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security reporting'],
      benefits: ['Prevent 95% of security breaches', 'Reduce response time by 80%', 'Ensure compliance'],
      marketPrice: '$400-800/month',
      category: 'ai',
      technologies: ['SIEM', 'EDR', 'Machine Learning', 'Python', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/security-monitoring',
      documentation: 'https://docs.ziontechgroup.com/security-monitoring',
      rating: 4.9,
      reviews: 198,
      popular: true
    },
    {
      id: 15,
      title: 'AI Voice Assistant Builder',
      description: 'Create custom voice assistants and chatbots for customer service and internal operations.',
      icon: '🎤',
      price: '$159/month',
      originalPrice: '$250/month',
      features: ['Voice recognition', 'Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      benefits: ['Improve customer service', 'Reduce support costs', '24/7 availability'],
      marketPrice: '$250-500/month',
      category: 'ai',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo.ziontechgroup.com/voice-assistant',
      documentation: 'https://docs.ziontechgroup.com/voice-assistant',
      rating: 4.6,
      reviews: 87,
      popular: false
    },
    {
      id: 16,
      title: 'Predictive Maintenance AI',
      description: 'Machine learning-powered equipment monitoring and predictive maintenance scheduling.',
      icon: '🔧',
      price: '$299/month',
      originalPrice: '$500/month',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Alert system'],
      benefits: ['Reduce downtime by 70%', 'Lower maintenance costs', 'Extend equipment life'],
      marketPrice: '$500-1000/month',
      category: 'ai',
      technologies: ['IoT Sensors', 'Machine Learning', 'Python', 'React', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/predictive-maintenance',
      documentation: 'https://docs.ziontechgroup.com/predictive-maintenance',
      rating: 4.8,
      reviews: 123,
      popular: false
    },
    {
      id: 17,
      title: 'AI-Powered SEO Optimizer',
      description: 'Automated SEO analysis, keyword optimization, and content improvement suggestions.',
      icon: '🔍',
      price: '$99/month',
      originalPrice: '$150/month',
      features: ['SEO analysis', 'Keyword research', 'Content optimization', 'Competitor analysis', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20 hours/week'],
      marketPrice: '$150-300/month',
      category: 'marketing',
      technologies: ['Google Search Console', 'Ahrefs API', 'Machine Learning', 'React', 'Node.js'],
      demoUrl: 'https://demo.ziontechgroup.com/seo-optimizer',
      documentation: 'https://docs.ziontechgroup.com/seo-optimizer',
      rating: 4.7,
      reviews: 167,
      popular: false
    },
    {
      id: 18,
      title: 'Smart Energy Management',
      description: 'AI-driven energy consumption optimization and cost reduction for businesses.',
      icon: '⚡',
      price: '$199/month',
      originalPrice: '$300/month',
      features: ['Energy monitoring', 'Consumption optimization', 'Cost analysis', 'Renewable integration', 'Carbon tracking'],
      benefits: ['Reduce energy costs by 30%', 'Lower carbon footprint', 'Improve sustainability'],
      marketPrice: '$300-600/month',
      category: 'productivity',
      technologies: ['IoT Sensors', 'Machine Learning', 'Python', 'React', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/energy-management',
      documentation: 'https://docs.ziontechgroup.com/energy-management',
      rating: 4.6,
      reviews: 94,
      popular: false
    },
    {
      id: 19,
      title: 'AI Legal Document Analyzer',
      description: 'Automated legal document review, contract analysis, and compliance checking.',
      icon: '⚖️',
      price: '$349/month',
      originalPrice: '$500/month',
      features: ['Document analysis', 'Contract review', 'Compliance checking', 'Risk assessment', 'Legal research'],
      benefits: ['Reduce legal costs by 50%', 'Faster document processing', 'Improved accuracy'],
      marketPrice: '$500-1000/month',
      category: 'productivity',
      technologies: ['NLP', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/legal-analyzer',
      documentation: 'https://docs.ziontechgroup.com/legal-analyzer',
      rating: 4.8,
      reviews: 76,
      popular: false
    },
    {
      id: 20,
      title: 'Smart Supply Chain Optimizer',
      description: 'AI-powered supply chain visibility, demand forecasting, and logistics optimization.',
      icon: '🚚',
      price: '$399/month',
      originalPrice: '$600/month',
      features: ['Supply chain visibility', 'Demand forecasting', 'Route optimization', 'Inventory management', 'Risk assessment'],
      benefits: ['Reduce logistics costs by 25%', 'Improve delivery times', 'Minimize supply disruptions'],
      marketPrice: '$600-1200/month',
      category: 'productivity',
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/supply-chain',
      documentation: 'https://docs.ziontechgroup.com/supply-chain',
      rating: 4.7,
      reviews: 108,
      popular: false
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. Affordable, powerful tools for modern businesses starting from $79/month." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, marketing tools, development tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Matrix background */}
        <div className="absolute inset-0 matrix-bg"></div>
        
        {/* Quantum particles */}
        <div className="quantum-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="quantum-particle" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        <div className="quantum-particle" style={{ top: '40%', left: '80%', animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Micro SAAS</span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive collection of AI-powered micro SAAS solutions. 
            Affordable, powerful tools for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Star className="w-5 h-5" />
              <span className="text-lg font-semibold">50+ Ready-to-Use Tools</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Zap className="w-5 h-5" />
              <span className="text-lg font-semibold">AI-Powered Automation</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="text-lg font-semibold">Enterprise Security</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black/20 backdrop-blur-md border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-black/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`card-futuristic group cursor-pointer ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Service Icon */}
                <div className="text-5xl mb-4 text-center">{service.icon}</div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full btn-neon">
                    Get Started Now
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-black/50 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/10 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Docs</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to automate, optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon text-lg px-8 py-4">
              Start Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg"
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;

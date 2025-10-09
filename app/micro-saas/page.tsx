import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Brain, 
  Code, 
  BarChart, 
  Users, 
  Shield, 
  Globe,
  Smartphone,
  Database,
  Target,
  TrendingUp,
  Lock,
  Cpu,
  Sparkles,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis and review with AI-powered suggestions for security, performance, and best practices.',
      icon: Code,
      category: 'Development Tools',
      price: '$29/month',
      originalPrice: '$49/month',
      features: [
        'Automated Code Analysis',
        'Security Vulnerability Detection',
        'Performance Optimization Suggestions',
        'Best Practices Recommendations',
        'Multi-language Support (15+ languages)',
        'Git Integration',
        'Real-time Feedback',
        'Team Collaboration Tools'
      ],
      benefits: [
        'Reduce bugs by 60%',
        'Improve code quality by 40%',
        'Save 10+ hours per week',
        'Enterprise-grade security'
      ],
      popular: true,
      rating: 4.9,
      users: '2,500+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO optimization tool that analyzes and improves your website ranking with AI-powered insights.',
      icon: Target,
      category: 'Marketing Tools',
      price: '$39/month',
      originalPrice: '$69/month',
      features: [
        'Keyword Research & Analysis',
        'Content Optimization Suggestions',
        'Competitor Analysis',
        'Technical SEO Audits',
        'Backlink Monitoring',
        'Rank Tracking',
        'Content Gap Analysis',
        'AI Content Generation'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Improve search rankings by 80%',
        'Save 15+ hours per week',
        'ROI tracking and reporting'
      ],
      popular: true,
      rating: 4.8,
      users: '3,200+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Business Intelligence Dashboard',
      description: 'Comprehensive analytics platform with AI-powered insights, predictions, and automated reporting.',
      icon: BarChart,
      category: 'Analytics',
      price: '$49/month',
      originalPrice: '$89/month',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Predictions',
        'Custom Dashboard Builder',
        'Automated Report Generation',
        'Data Integration (50+ sources)',
        'Advanced Filtering & Segmentation',
        'Mobile App Access',
        'Team Collaboration'
      ],
      benefits: [
        'Make data-driven decisions 3x faster',
        'Identify trends before competitors',
        'Reduce reporting time by 70%',
        'Increase revenue by 25%'
      ],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      description: 'Complete marketing automation platform with AI-powered campaigns, lead scoring, and customer journey optimization.',
      icon: TrendingUp,
      category: 'Marketing Tools',
      price: '$59/month',
      originalPrice: '$99/month',
      features: [
        'Email Marketing Automation',
        'Social Media Management',
        'Lead Scoring & Nurturing',
        'Customer Journey Mapping',
        'A/B Testing & Optimization',
        'ROI Tracking & Analytics',
        'CRM Integration',
        'Multi-channel Campaigns'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Reduce marketing costs by 40%',
        'Save 20+ hours per week',
        'Generate 3x more qualified leads'
      ],
      rating: 4.6,
      users: '2,100+',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Intelligence',
      description: 'Advanced document processing and analysis tool that extracts, categorizes, and analyzes documents with AI.',
      icon: Database,
      category: 'Productivity',
      price: '$34/month',
      originalPrice: '$59/month',
      features: [
        'Document OCR & Text Extraction',
        'Intelligent Document Classification',
        'Data Extraction & Validation',
        'Document Search & Retrieval',
        'Automated Workflow Creation',
        'Compliance Monitoring',
        'Multi-format Support',
        'API Integration'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual errors by 90%',
        'Save 25+ hours per week',
        'Improve compliance accuracy'
      ],
      rating: 4.8,
      users: '1,500+',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and seamless human handoff.',
      icon: Users,
      category: 'Customer Service',
      price: '$44/month',
      originalPrice: '$79/month',
      features: [
        '24/7 AI Chat Support',
        'Multi-language Support (50+ languages)',
        'Natural Language Processing',
        'Ticket Management & Routing',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'Human Agent Handoff',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 40%',
        'Handle 80% of queries automatically'
      ],
      rating: 4.7,
      users: '2,800+',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Complete social media management platform with AI-powered content creation, scheduling, and analytics.',
      icon: Globe,
      category: 'Social Media',
      price: '$39/month',
      originalPrice: '$69/month',
      features: [
        'AI Content Generation',
        'Multi-platform Scheduling',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Competitor Analysis',
        'Influencer Identification',
        'Trend Monitoring',
        'Performance Reporting'
      ],
      benefits: [
        'Increase engagement by 180%',
        'Save 15+ hours per week',
        'Grow followers by 120%',
        'Improve brand awareness'
      ],
      rating: 4.5,
      users: '1,900+',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ai-email-optimizer',
      title: 'AI Email Marketing Optimizer',
      description: 'Advanced email marketing platform with AI-powered subject line optimization, content personalization, and deliverability.',
      icon: Mail,
      category: 'Email Marketing',
      price: '$29/month',
      originalPrice: '$49/month',
      features: [
        'AI Subject Line Optimization',
        'Content Personalization',
        'Send Time Optimization',
        'Deliverability Monitoring',
        'A/B Testing Automation',
        'List Segmentation',
        'Performance Analytics',
        'Template Library'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 10+ hours per week'
      ],
      rating: 4.6,
      users: '2,200+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Management Assistant',
      description: 'Intelligent project management tool with AI-powered task prioritization, resource allocation, and risk prediction.',
      icon: Rocket,
      category: 'Project Management',
      price: '$49/month',
      originalPrice: '$89/month',
      features: [
        'AI Task Prioritization',
        'Resource Allocation Optimization',
        'Risk Prediction & Mitigation',
        'Progress Tracking & Reporting',
        'Team Collaboration Tools',
        'Time Tracking & Billing',
        'Gantt Chart Generation',
        'Integration with 100+ tools'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project risks by 50%',
        'Improve team productivity by 40%',
        'Increase project success rate'
      ],
      rating: 4.7,
      users: '1,600+',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'ai-data-scraper',
      title: 'AI Web Data Scraper',
      description: 'Intelligent web scraping tool with AI-powered data extraction, cleaning, and analysis capabilities.',
      icon: Database,
      category: 'Data Tools',
      price: '$34/month',
      originalPrice: '$59/month',
      features: [
        'AI-Powered Data Extraction',
        'Dynamic Content Scraping',
        'Data Cleaning & Validation',
        'Scheduled Scraping',
        'Proxy Rotation',
        'CAPTCHA Solving',
        'Data Export (Multiple formats)',
        'API Access'
      ],
      benefits: [
        'Extract data 5x faster',
        'Reduce manual work by 80%',
        'Improve data accuracy by 95%',
        'Scale data collection easily'
      ],
      rating: 4.4,
      users: '1,200+',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization for all content types.',
      icon: Sparkles,
      category: 'Content Creation',
      price: '$39/month',
      originalPrice: '$69/month',
      features: [
        'AI Writing Assistant',
        '50+ Content Templates',
        'SEO Optimization',
        'Tone & Style Customization',
        'Plagiarism Detection',
        'Multi-language Support',
        'Content Calendar',
        'Performance Analytics'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve content quality by 60%',
        'Increase engagement by 80%',
        'Save 20+ hours per week'
      ],
      rating: 4.8,
      users: '3,500+',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'ai-security-monitor',
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring tool with AI-powered threat detection, vulnerability scanning, and incident response.',
      icon: Shield,
      category: 'Security',
      price: '$59/month',
      originalPrice: '$99/month',
      features: [
        'AI Threat Detection',
        'Vulnerability Scanning',
        'Incident Response Automation',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Security Reporting',
        'Integration with Security Tools',
        '24/7 Monitoring'
      ],
      benefits: [
        'Detect threats 3x faster',
        'Reduce security incidents by 70%',
        'Improve compliance by 90%',
        'Save on security costs'
      ],
      rating: 4.9,
      users: '1,400+',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const categories = [
    { name: 'All Tools', count: microSaasServices.length, active: true },
    { name: 'Development Tools', count: microSaasServices.filter(s => s.category === 'Development Tools').length },
    { name: 'Marketing Tools', count: microSaasServices.filter(s => s.category === 'Marketing Tools').length },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length },
    { name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length },
    { name: 'Email Marketing', count: microSaasServices.filter(s => s.category === 'Email Marketing').length },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length },
    { name: 'Data Tools', count: microSaasServices.filter(s => s.category === 'Data Tools').length },
    { name: 'Content Creation', count: microSaasServices.filter(s => s.category === 'Content Creation').length },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Tools' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'Active Users', value: '50,000+', icon: Users },
    { label: 'Tools Available', value: '50+', icon: Code },
    { label: 'Time Saved', value: '1M+ hours', icon: Clock },
    { label: 'Success Rate', value: '99.9%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20 cyber-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow max-w-4xl mx-auto">
              Powerful AI-driven tools for modern businesses. 50+ ready-to-use applications starting at just $29/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Trial
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cyber-input"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="inline-block bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>⭐ {service.rating}/5</span>
                    <span>{service.users} users</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500/10 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI technology and designed for maximum efficiency and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive setup process. No technical expertise required.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Leverage advanced AI technology to automate tasks and improve efficiency.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and 99.9% uptime guarantee.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our tools have helped businesses save over 1 million hours and increase revenue by 200%.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team to help you succeed.</p>
            </div>

            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Scale</h3>
              <p className="text-gray-300">Scale your business globally with our multi-language and multi-currency support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered tools to increase productivity and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-cyan-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST | 24/7 Support Available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved. Empowering businesses with AI innovation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Enterprise Security
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                Global Services
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MicroSAASPage;
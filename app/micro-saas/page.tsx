import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Shield, BarChart, Code, Cloud, Users, Clock, DollarSign, TrendingUp, Target, Globe, Smartphone, Database, Lock, Settings, Mail, Phone, MapPin, Search } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, SEO optimization, and multi-language support.',
      icon: Brain,
      price: '$79/month',
      features: [
        '50+ Content Templates',
        'SEO Optimization',
        'Multi-language Support',
        'Brand Voice Training',
        'Plagiarism Checker',
        'Social Media Integration'
      ],
      benefits: [
        'Save 20+ hours/week on content creation',
        'Increase content engagement by 300%',
        'Generate 1000+ words in under 5 minutes',
        'SEO-optimized content that ranks higher'
      ],
      category: 'Content & Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator',
      demo: 'https://demo.ziontechgroup.com/content-generator'
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence platform with automated reporting, predictive analytics, and custom dashboards.',
      icon: BarChart,
      price: '$149/month',
      features: [
        'Real-time Data Visualization',
        'Automated Reports',
        'Predictive Analytics',
        'Custom Dashboards',
        'API Integrations',
        'Mobile App Access'
      ],
      benefits: [
        'Make data-driven decisions 10x faster',
        'Reduce reporting time by 90%',
        'Identify trends before competitors',
        'Increase revenue by 25% through insights'
      ],
      category: 'Analytics & BI',
      popular: true,
      link: 'https://ziontechgroup.com/smart-analytics',
      demo: 'https://demo.ziontechgroup.com/analytics'
    },
    {
      id: 3,
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing, 24/7 availability, and seamless human handoff.',
      icon: Users,
      price: '$99/month',
      features: [
        'Natural Language Processing',
        '24/7 Availability',
        'Multi-channel Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Sentiment Analysis'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Handle 80% of queries automatically',
        'Improve customer satisfaction by 40%',
        'Available 24/7 without breaks'
      ],
      category: 'Customer Service',
      popular: false,
      link: 'https://ziontechgroup.com/ai-support-bot',
      demo: 'https://demo.ziontechgroup.com/support-bot'
    },
    {
      id: 4,
      name: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      icon: Mail,
      price: '$59/month',
      features: [
        'AI Personalization',
        'A/B Testing',
        'Behavioral Triggers',
        'Email Templates',
        'List Segmentation',
        'Performance Analytics'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Automate entire email campaigns',
        'Personalize at scale'
      ],
      category: 'Marketing',
      popular: false,
      link: 'https://ziontechgroup.com/email-automation',
      demo: 'https://demo.ziontechgroup.com/email-marketing'
    },
    {
      id: 5,
      name: 'Project Management AI',
      description: 'Intelligent project management tool with AI task prioritization, resource optimization, and risk prediction.',
      icon: Target,
      price: '$89/month',
      features: [
        'AI Task Prioritization',
        'Resource Optimization',
        'Risk Prediction',
        'Team Collaboration',
        'Time Tracking',
        'Progress Analytics'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project overruns by 50%',
        'Optimize team productivity',
        'Predict and prevent delays'
      ],
      category: 'Productivity',
      popular: true,
      link: 'https://ziontechgroup.com/project-management-ai',
      demo: 'https://demo.ziontechgroup.com/project-ai'
    },
    {
      id: 6,
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management with content optimization, best time posting, and engagement analytics.',
      icon: Globe,
      price: '$69/month',
      features: [
        'Multi-platform Scheduling',
        'Best Time Optimization',
        'Content Optimization',
        'Engagement Analytics',
        'Hashtag Research',
        'Competitor Analysis'
      ],
      benefits: [
        'Increase social engagement by 200%',
        'Save 15+ hours per week',
        'Post at optimal times automatically',
        'Grow followers organically'
      ],
      category: 'Social Media',
      popular: false,
      link: 'https://ziontechgroup.com/social-scheduler',
      demo: 'https://demo.ziontechgroup.com/social-media'
    },
    {
      id: 7,
      name: 'AI Website Builder',
      description: 'No-code website builder with AI design suggestions, mobile optimization, and SEO features.',
      icon: Code,
      price: '$79/month',
      features: [
        'AI Design Suggestions',
        'Mobile Optimization',
        'SEO Optimization',
        'Drag & Drop Builder',
        'E-commerce Integration',
        'Performance Monitoring'
      ],
      benefits: [
        'Build websites 5x faster',
        'No coding knowledge required',
        'Mobile-first responsive design',
        'Built-in SEO optimization'
      ],
      category: 'Web Development',
      popular: false,
      link: 'https://ziontechgroup.com/ai-website-builder',
      demo: 'https://demo.ziontechgroup.com/website-builder'
    },
    {
      id: 8,
      name: 'Inventory Management AI',
      description: 'Smart inventory management with demand forecasting, automated reordering, and waste reduction.',
      icon: Database,
      price: '$129/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Waste Reduction',
        'Multi-location Support',
        'Barcode Scanning',
        'Supplier Integration'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts and overstock',
        'Automate reordering process',
        'Minimize waste and spoilage'
      ],
      category: 'E-commerce',
      popular: false,
      link: 'https://ziontechgroup.com/inventory-ai',
      demo: 'https://demo.ziontechgroup.com/inventory'
    },
    {
      id: 9,
      name: 'AI Security Monitor',
      description: 'Advanced security monitoring with threat detection, vulnerability scanning, and compliance reporting.',
      icon: Shield,
      price: '$199/month',
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Compliance Reporting',
        'Real-time Alerts',
        'Incident Response',
        'Security Analytics'
      ],
      benefits: [
        'Prevent 99% of security breaches',
        'Reduce security costs by 40%',
        'Automated compliance reporting',
        '24/7 threat monitoring'
      ],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/security-monitor',
      demo: 'https://demo.ziontechgroup.com/security'
    },
    {
      id: 10,
      name: 'AI HR Assistant',
      description: 'Intelligent HR management with resume screening, interview scheduling, and employee analytics.',
      icon: Users,
      price: '$109/month',
      features: [
        'Resume Screening',
        'Interview Scheduling',
        'Employee Analytics',
        'Performance Tracking',
        'Onboarding Automation',
        'Compliance Management'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Automate HR processes',
        'Better employee retention'
      ],
      category: 'Human Resources',
      popular: false,
      link: 'https://ziontechgroup.com/hr-assistant',
      demo: 'https://demo.ziontechgroup.com/hr-ai'
    },
    {
      id: 11,
      name: 'AI Financial Planner',
      description: 'Personal finance management with budgeting, investment advice, and expense categorization.',
      icon: DollarSign,
      price: '$49/month',
      features: [
        'Smart Budgeting',
        'Investment Advice',
        'Expense Categorization',
        'Bill Reminders',
        'Financial Goals',
        'Tax Optimization'
      ],
      benefits: [
        'Save 20% more money',
        'Optimize investments',
        'Automate financial planning',
        'Achieve financial goals faster'
      ],
      category: 'Finance',
      popular: false,
      link: 'https://ziontechgroup.com/financial-planner',
      demo: 'https://demo.ziontechgroup.com/finance'
    },
    {
      id: 12,
      name: 'AI Learning Platform',
      description: 'Personalized learning management system with adaptive content, progress tracking, and skill assessment.',
      icon: Brain,
      price: '$89/month',
      features: [
        'Adaptive Learning',
        'Progress Tracking',
        'Skill Assessment',
        'Content Creation',
        'Gamification',
        'Certification Management'
      ],
      benefits: [
        'Learn 3x faster',
        'Personalized learning paths',
        'Track skill development',
        'Improve employee training'
      ],
      category: 'Education',
      popular: false,
      link: 'https://ziontechgroup.com/learning-platform',
      demo: 'https://demo.ziontechgroup.com/learning'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & BI',
    'Customer Service',
    'Marketing',
    'Productivity',
    'Social Media',
    'Web Development',
    'E-commerce',
    'Security',
    'Human Resources',
    'Finance',
    'Education'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Micro SAAS Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of innovative micro SAAS applications designed to solve specific business challenges. 
              Each tool is built with cutting-edge AI technology and offers immediate value to your organization.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search micro SAAS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Tools</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 transition-all duration-500 hover:scale-105 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
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
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-400 flex items-start">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-3">
                  <a
                    href={service.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-center flex items-center justify-center"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Try Demo
                  </a>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200 text-center flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
            increase productivity, and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300 text-sm">Get started in minutes with our intuitive setup process</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security and compliance for all your data</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock support from our expert team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;

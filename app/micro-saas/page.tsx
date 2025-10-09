import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  Target, 
  BarChart, 
  TrendingUp, 
  FileText, 
  Bot, 
  Mail, 
  Globe, 
  Workflow, 
  Database, 
  Clock, 
  Activity, 
  Lightbulb, 
  Users, 
  ShoppingCart, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap,
  Phone,
  Mail as MailIcon,
  MapPin,
  Award,
  Clock as ClockIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 1,
      name: 'AI Code Review',
      icon: Code,
      description: 'Automated code analysis and optimization suggestions',
      price: '$29/mo',
      features: ['Code quality analysis', 'Security vulnerability detection', 'Performance optimization', 'Best practices suggestions', 'Multi-language support', 'CI/CD integration'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      category: 'development',
      popular: true
    },
    {
      id: 2,
      name: 'AI SEO Optimizer',
      icon: Target,
      description: 'Complete SEO automation and optimization',
      price: '$49/mo',
      features: ['Keyword research', 'Content optimization', 'Technical SEO audit', 'Rank tracking', 'Competitor analysis', 'Local SEO'],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      category: 'marketing',
      popular: true
    },
    {
      id: 3,
      name: 'AI Analytics Dashboard',
      icon: BarChart,
      description: 'Advanced business intelligence and analytics',
      price: '$79/mo',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights', 'Data visualization', 'Report automation', 'API integrations'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      category: 'analytics',
      popular: true
    },
    {
      id: 4,
      name: 'AI Marketing Tools',
      icon: TrendingUp,
      description: 'Complete marketing automation suite',
      price: '$99/mo',
      features: ['Campaign automation', 'A/B testing', 'Lead scoring', 'ROI tracking', 'Email sequences', 'Social media management'],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      category: 'marketing',
      popular: true
    },
    {
      id: 5,
      name: 'AI Document Processing',
      icon: FileText,
      description: 'Intelligent document analysis and processing',
      price: '$39/mo',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Automated workflows', 'Multi-format support', 'Batch processing'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      category: 'productivity',
      popular: false
    },
    {
      id: 6,
      name: 'AI Customer Support',
      icon: Bot,
      description: '24/7 intelligent customer support automation',
      price: '$59/mo',
      features: ['Chatbot integration', 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Multi-language support', 'Escalation management'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      category: 'support',
      popular: true
    },
    {
      id: 7,
      name: 'AI Email Marketing',
      icon: Mail,
      description: 'Advanced email marketing automation',
      price: '$69/mo',
      features: ['Email templates', 'Segmentation', 'Personalization', 'Performance tracking', 'A/B testing', 'Deliverability optimization'],
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      category: 'marketing',
      popular: false
    },
    {
      id: 8,
      name: 'AI Social Media Manager',
      icon: Globe,
      description: 'Complete social media management automation',
      price: '$89/mo',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Competitor analysis', 'Multi-platform posting', 'Analytics dashboard'],
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      category: 'marketing',
      popular: false
    },
    {
      id: 9,
      name: 'AI Project Manager',
      icon: Workflow,
      description: 'Intelligent project management and task automation',
      price: '$79/mo',
      features: ['Task automation', 'Resource planning', 'Progress tracking', 'Risk assessment', 'Team collaboration', 'Timeline optimization'],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      category: 'productivity',
      popular: false
    },
    {
      id: 10,
      name: 'AI Data Scraper',
      icon: Database,
      description: 'Advanced web scraping and data collection',
      price: '$49/mo',
      features: ['Web scraping', 'Data cleaning', 'API integration', 'Real-time monitoring', 'Proxy support', 'Data export'],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      category: 'data',
      popular: false
    },
    {
      id: 11,
      name: 'AI Invoice Generator',
      icon: FileText,
      description: 'Automated invoice generation and management',
      price: '$39/mo',
      features: ['Invoice templates', 'Payment tracking', 'Tax calculations', 'Client management', 'Recurring billing', 'Multi-currency support'],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      category: 'finance',
      popular: false
    },
    {
      id: 12,
      name: 'AI Lead Generator',
      icon: Target,
      description: 'Intelligent lead generation and qualification',
      price: '$99/mo',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Lead nurturing', 'Conversion tracking'],
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      category: 'sales',
      popular: true
    },
    {
      id: 13,
      name: 'AI Content Scheduler',
      icon: Clock,
      description: 'Smart content scheduling and publishing',
      price: '$29/mo',
      features: ['Multi-platform posting', 'Optimal timing', 'Content calendar', 'Performance analytics', 'Bulk scheduling', 'Content recycling'],
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      category: 'marketing',
      popular: false
    },
    {
      id: 14,
      name: 'AI Performance Monitor',
      icon: Activity,
      description: 'Real-time performance monitoring and alerts',
      price: '$59/mo',
      features: ['System monitoring', 'Alert management', 'Performance reports', 'Predictive analysis', 'Custom metrics', 'Integration APIs'],
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      category: 'monitoring',
      popular: false
    },
    {
      id: 15,
      name: 'AI Idea Generator',
      icon: Lightbulb,
      description: 'Creative ideation and brainstorming automation',
      price: '$19/mo',
      features: ['Idea generation', 'Market research', 'Trend analysis', 'Innovation tracking', 'Collaborative brainstorming', 'Idea evaluation'],
      color: 'text-lime-400',
      bgColor: 'bg-lime-500/10',
      borderColor: 'border-lime-500/30',
      category: 'creativity',
      popular: false
    },
    {
      id: 16,
      name: 'AI HR Assistant',
      icon: Users,
      description: 'Human resources automation and management',
      price: '$89/mo',
      features: ['Resume screening', 'Interview scheduling', 'Employee onboarding', 'Performance reviews', 'Payroll integration', 'Compliance tracking'],
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
      category: 'hr',
      popular: false
    },
    {
      id: 17,
      name: 'AI Financial Analyzer',
      icon: TrendingUp,
      description: 'Advanced financial analysis and forecasting',
      price: '$129/mo',
      features: ['Financial modeling', 'Risk assessment', 'Investment analysis', 'Budget planning', 'Cash flow forecasting', 'Portfolio optimization'],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      category: 'finance',
      popular: false
    },
    {
      id: 18,
      name: 'AI Inventory Manager',
      icon: ShoppingCart,
      description: 'Intelligent inventory management and optimization',
      price: '$79/mo',
      features: ['Stock optimization', 'Demand forecasting', 'Supplier management', 'Cost analysis', 'Reorder automation', 'Multi-location support'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      category: 'inventory',
      popular: false
    },
    {
      id: 19,
      name: 'AI Legal Assistant',
      icon: Shield,
      description: 'Legal document analysis and compliance automation',
      price: '$149/mo',
      features: ['Contract analysis', 'Compliance monitoring', 'Legal research', 'Document review', 'Risk assessment', 'Regulatory updates'],
      color: 'text-slate-400',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      category: 'legal',
      popular: false
    },
    {
      id: 20,
      name: 'AI Translation Pro',
      icon: Globe,
      description: 'Advanced translation and localization services',
      price: '$69/mo',
      features: ['Multi-language support', 'Context-aware translation', 'Quality assurance', 'Cultural adaptation', 'Real-time translation', 'Document translation'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      category: 'communication',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasServices.length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'support', name: 'Support', count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'sales', name: 'Sales', count: microSaasServices.filter(s => s.category === 'sales').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'data', name: 'Data', count: microSaasServices.filter(s => s.category === 'data').length },
    { id: 'monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'monitoring').length },
    { id: 'creativity', name: 'Creativity', count: microSaasServices.filter(s => s.category === 'creativity').length },
    { id: 'hr', name: 'HR', count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'legal', name: 'Legal', count: microSaasServices.filter(s => s.category === 'legal').length },
    { id: 'communication', name: 'Communication', count: microSaasServices.filter(s => s.category === 'communication').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const popularServices = microSaasServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            20+ Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS tools. 
            From development to marketing, analytics to productivity - we have everything you need to automate and optimize your operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </section>

        {/* Popular Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Popular Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border relative`}>
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <service.icon className={`w-16 h-16 mx-auto ${service.color} mb-4`} />
                  <h3 className={`text-2xl font-bold text-white mb-2 ${service.color}`}>
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className={`text-3xl font-bold mb-4 ${service.color}`}>
                    {service.price}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <button className={`cyber-button w-full ${service.color} hover:opacity-80`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            All Micro SAAS Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border`}>
                <div className="text-center mb-4">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color} mb-3`} />
                  <h3 className={`text-lg font-bold text-white mb-2 ${service.color}`}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {service.description}
                  </p>
                  <div className={`text-xl font-bold ${service.color}`}>
                    {service.price}
                  </div>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${service.color} hover:opacity-80 border border-current`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="quantum-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get started with our micro SAAS tools today and experience the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;

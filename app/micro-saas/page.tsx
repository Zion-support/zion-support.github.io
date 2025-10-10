'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target,
  DollarSign,
  Star,
  Clock,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  Monitor,
  Package,
  Heart,
  Mic,
  Workflow,
  Code,
  Layers,
  Rocket,
  Award,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    // AI-Powered Micro SAAS
    {
      icon: Brain,
      title: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, scheduling, and analytics. Perfect for small businesses and influencers.',
      category: 'ai',
      features: [
        'AI content generation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag optimization and trending analysis',
        'Engagement rate prediction',
        'Competitor analysis and insights',
        'Automated response to comments and DMs',
        'Visual content creation with AI',
        'Cross-platform posting automation'
      ],
      price: '$49/month',
      marketPrice: '$199-599/month',
      benefits: [
        'Save 15+ hours per week on social media',
        'Increase engagement by 300%',
        'Grow followers organically',
        'Professional content without hiring designers'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-social-manager',
      contact: '+1 302 464 0950'
    },
    {
      icon: BarChart3,
      title: 'AI Expense Tracker & Analyzer',
      description: 'Smart expense tracking with AI-powered categorization, receipt scanning, and financial insights for individuals and small businesses.',
      category: 'ai',
      features: [
        'Receipt scanning with OCR technology',
        'Automatic expense categorization',
        'Tax deduction recommendations',
        'Spending pattern analysis',
        'Budget alerts and recommendations',
        'Multi-currency support',
        'Integration with banking APIs',
        'Tax report generation'
      ],
      price: '$29/month',
      marketPrice: '$99-299/month',
      benefits: [
        'Save 5+ hours monthly on bookkeeping',
        'Never miss tax deductions again',
        'Real-time financial health monitoring',
        'Automated compliance reporting'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-expense-tracker',
      contact: '+1 302 464 0950'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Assistant',
      description: 'Intelligent customer support chatbot that learns from your business and provides 24/7 customer service with human-like responses.',
      category: 'ai',
      features: [
        'Natural language understanding',
        'Multi-channel support (website, email, chat)',
        'Knowledge base integration',
        'Sentiment analysis and escalation',
        'Custom branding and personality',
        'Analytics and performance tracking',
        'Integration with CRM systems',
        'Multi-language support'
      ],
      price: '$79/month',
      marketPrice: '$299-999/month',
      benefits: [
        'Reduce support costs by 70%',
        '24/7 customer availability',
        'Instant response to common queries',
        'Improved customer satisfaction scores'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-support-assistant',
      contact: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'AI Content Writer & SEO Optimizer',
      description: 'Professional content creation tool that generates SEO-optimized articles, blog posts, and marketing copy tailored to your industry.',
      category: 'ai',
      features: [
        'SEO-optimized content generation',
        'Multiple content types (blogs, ads, emails)',
        'Plagiarism detection and originality scoring',
        'Keyword research and optimization',
        'Content calendar and scheduling',
        'Brand voice customization',
        'Multi-language content creation',
        'Performance analytics and insights'
      ],
      price: '$39/month',
      marketPrice: '$149-499/month',
      benefits: [
        'Create 50+ articles per month',
        'Improve SEO rankings by 200%',
        'Consistent brand voice across content',
        'Save 20+ hours weekly on writing'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-writer',
      contact: '+1 302 464 0950'
    },
    {
      icon: Eye,
      title: 'AI Website Analyzer & Optimizer',
      description: 'Comprehensive website analysis tool that identifies performance issues, SEO problems, and provides actionable optimization recommendations.',
      category: 'ai',
      features: [
        'Page speed analysis and optimization',
        'SEO audit and recommendations',
        'Mobile responsiveness testing',
        'Accessibility compliance checking',
        'Security vulnerability scanning',
        'Competitor analysis and benchmarking',
        'Conversion rate optimization suggestions',
        'Automated A/B testing recommendations'
      ],
      price: '$59/month',
      marketPrice: '$199-799/month',
      benefits: [
        'Improve website speed by 50%',
        'Boost SEO rankings significantly',
        'Increase conversion rates by 25%',
        'Ensure accessibility compliance'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/ai-website-analyzer',
      contact: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'AI HR Assistant & Recruiter',
      description: 'Streamlined HR management with AI-powered resume screening, candidate matching, and employee performance analytics.',
      category: 'ai',
      features: [
        'Resume parsing and candidate scoring',
        'Job posting optimization',
        'Interview scheduling automation',
        'Employee performance tracking',
        'Skills gap analysis',
        'Onboarding workflow automation',
        'Compliance monitoring',
        'Employee satisfaction surveys'
      ],
      price: '$89/month',
      marketPrice: '$299-999/month',
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality',
        'Streamline HR processes',
        'Better employee retention'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      contact: '+1 302 464 0950'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant Builder',
      description: 'Create custom voice assistants for your business with natural language processing and multi-platform deployment capabilities.',
      category: 'ai',
      features: [
        'Custom voice model training',
        'Multi-platform deployment (web, mobile, smart speakers)',
        'Natural language understanding',
        'Integration with business systems',
        'Voice analytics and insights',
        'Multi-language support',
        'Custom wake words and commands',
        'Real-time conversation management'
      ],
      price: '$99/month',
      marketPrice: '$399-1499/month',
      benefits: [
        'Enhance customer experience',
        'Reduce support workload',
        '24/7 voice assistance',
        'Competitive advantage in voice commerce'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      contact: '+1 302 464 0950'
    },
    {
      icon: Target,
      title: 'AI Lead Generation & Scoring',
      description: 'Intelligent lead generation system that identifies, qualifies, and scores potential customers using advanced AI algorithms.',
      category: 'ai',
      features: [
        'Automated lead discovery',
        'Lead scoring and qualification',
        'Contact information enrichment',
        'Behavioral tracking and analysis',
        'Email sequence automation',
        'CRM integration',
        'ROI tracking and analytics',
        'Custom lead criteria setup'
      ],
      price: '$69/month',
      marketPrice: '$249-899/month',
      benefits: [
        'Increase qualified leads by 150%',
        'Reduce lead acquisition costs',
        'Improve conversion rates',
        'Automate follow-up processes'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-lead-generation',
      contact: '+1 302 464 0950'
    },

    // IT Micro SAAS Services
    {
      icon: Shield,
      title: 'Cybersecurity Monitor Pro',
      description: 'Real-time security monitoring and threat detection for small to medium businesses with automated incident response.',
      category: 'it',
      features: [
        '24/7 network monitoring',
        'Threat detection and alerting',
        'Vulnerability scanning',
        'Automated incident response',
        'Security compliance reporting',
        'Employee security training',
        'Dark web monitoring',
        'Security policy enforcement'
      ],
      price: '$149/month',
      marketPrice: '$499-1999/month',
      benefits: [
        'Prevent 99% of cyber attacks',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        'Peace of mind with 24/7 monitoring'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-monitor',
      contact: '+1 302 464 0950'
    },
    {
      icon: Cloud,
      title: 'Cloud Backup & Recovery',
      description: 'Automated cloud backup solution with instant recovery capabilities for business data protection and disaster recovery.',
      category: 'it',
      features: [
        'Automated daily backups',
        'Instant file recovery',
        'Cross-platform synchronization',
        'Version history and rollback',
        'Encrypted data storage',
        'Disaster recovery planning',
        'Compliance with data regulations',
        'Real-time backup monitoring'
      ],
      price: '$39/month',
      marketPrice: '$99-399/month',
      benefits: [
        'Never lose important data',
        'Instant recovery from any device',
        'Comply with data protection laws',
        'Reduce IT management overhead'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/cloud-backup',
      contact: '+1 302 464 0950'
    },
    {
      icon: Monitor,
      title: 'IT Infrastructure Monitor',
      description: 'Comprehensive monitoring solution for servers, networks, and applications with predictive maintenance and alerting.',
      category: 'it',
      features: [
        'Server performance monitoring',
        'Network traffic analysis',
        'Application health checks',
        'Predictive maintenance alerts',
        'Custom dashboard creation',
        'Mobile app for monitoring',
        'Integration with popular tools',
        'Automated reporting'
      ],
      price: '$79/month',
      marketPrice: '$199-799/month',
      benefits: [
        'Prevent 90% of IT outages',
        'Reduce downtime by 70%',
        'Optimize infrastructure performance',
        'Proactive issue resolution'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/it-monitor',
      contact: '+1 302 464 0950'
    },
    {
      icon: Wifi,
      title: 'Network Security Scanner',
      description: 'Automated network security assessment tool that identifies vulnerabilities and provides remediation recommendations.',
      category: 'it',
      features: [
        'Network vulnerability scanning',
        'Port and service enumeration',
        'Security configuration analysis',
        'Compliance checking',
        'Penetration testing simulation',
        'Detailed security reports',
        'Remediation guidance',
        'Regular security assessments'
      ],
      price: '$59/month',
      marketPrice: '$199-699/month',
      benefits: [
        'Identify security gaps quickly',
        'Ensure network compliance',
        'Prevent unauthorized access',
        'Regular security assessments'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/network-scanner',
      contact: '+1 302 464 0950'
    },

    // Business Micro SAAS
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered appointment scheduling system with automated reminders, calendar integration, and customer self-service portal.',
      category: 'business',
      features: [
        'Automated appointment scheduling',
        'Calendar synchronization',
        'SMS and email reminders',
        'Customer self-service portal',
        'Payment processing integration',
        'Multi-timezone support',
        'Recurring appointment management',
        'Analytics and reporting'
      ],
      price: '$29/month',
      marketPrice: '$99-299/month',
      benefits: [
        'Reduce no-shows by 40%',
        'Save 10+ hours weekly on scheduling',
        'Improve customer satisfaction',
        'Increase booking conversion rates'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/smart-scheduler',
      contact: '+1 302 464 0950'
    },
    {
      icon: Package,
      title: 'Inventory Management Pro',
      description: 'Advanced inventory tracking with AI-powered demand forecasting, automated reordering, and multi-location management.',
      category: 'business',
      features: [
        'Real-time inventory tracking',
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location management',
        'Barcode scanning support',
        'Supplier management',
        'Cost tracking and analysis',
        'Integration with e-commerce platforms'
      ],
      price: '$49/month',
      marketPrice: '$199-599/month',
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory investment',
        'Automate reordering processes',
        'Improve cash flow management'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/inventory-pro',
      contact: '+1 302 464 0950'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with real-time analytics, custom reports, and predictive insights.',
      category: 'business',
      features: [
        'Real-time business metrics',
        'Custom dashboard creation',
        'Predictive analytics',
        'Automated report generation',
        'Data visualization tools',
        'Multi-source data integration',
        'Mobile app access',
        'Team collaboration features'
      ],
      price: '$69/month',
      marketPrice: '$299-999/month',
      benefits: [
        'Make data-driven decisions',
        'Identify growth opportunities',
        'Monitor business performance',
        'Improve operational efficiency'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/business-analytics',
      contact: '+1 302 464 0950'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization, automation workflows, and detailed analytics.',
      category: 'business',
      features: [
        'AI-powered email personalization',
        'Automated drip campaigns',
        'A/B testing capabilities',
        'Advanced segmentation',
        'Email template builder',
        'Deliverability optimization',
        'Detailed analytics and reporting',
        'Integration with CRM systems'
      ],
      price: '$39/month',
      marketPrice: '$149-499/month',
      benefits: [
        'Increase email open rates by 50%',
        'Automate marketing campaigns',
        'Improve customer engagement',
        'Drive more sales and conversions'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/email-automation',
      contact: '+1 302 464 0950'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'ai', name: 'AI Services', count: microSaasServices.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: microSaasServices.filter(s => s.category === 'it').length },
    { id: 'business', name: 'Business Tools', count: microSaasServices.filter(s => s.category === 'business').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions designed for small businesses and entrepreneurs. AI-powered tools, IT services, and business automation at affordable prices." />
        <meta name="keywords" content="micro saas, small business software, AI tools, business automation, affordable software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, affordable software solutions designed for small businesses and entrepreneurs. 
                Get enterprise-level features at startup-friendly prices.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center text-cyan-400">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-cyan-400">
                <Mail className="w-5 h-5 mr-2" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Middletown, DE 19709</span>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      Save up to 70% vs market price
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                    <a
                      href={`tel:${service.contact}`}
                      className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions today and see the difference AI and automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Search, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  ArrowRight, 
  Phone, 
  Award,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  Eye,
  Bot,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation,
  PieChart,
  Activity,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location
} from 'lucide-react';

const MicroSaasPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project planning, resource allocation, and timeline optimization with AI-powered insights.',
      icon: BarChart,
      category: 'business',
      price: '$99/month',
      features: [
        'AI-powered project planning',
        'Resource optimization',
        'Risk assessment & mitigation',
        'Real-time progress tracking',
        'Team collaboration tools',
        'Automated reporting',
        'Integration with 50+ tools',
        'Mobile app included'
      ],
      benefits: [
        '40% faster project delivery',
        '25% cost reduction',
        '95% accuracy in timeline predictions',
        'Real-time team productivity insights'
      ],
      popular: true,
      rating: 4.9,
      users: '2,500+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization.',
      icon: MessageSquare,
      category: 'marketing',
      price: '$79/month',
      features: [
        'AI content generation',
        'Multi-platform scheduling',
        'Engagement optimization',
        'Hashtag research',
        'Analytics dashboard',
        'Competitor analysis',
        'Influencer outreach',
        'Crisis management alerts'
      ],
      benefits: [
        '300% increase in engagement',
        '50% time savings',
        'Consistent brand voice',
        'Automated customer service'
      ],
      popular: true,
      rating: 4.8,
      users: '5,200+',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      icon: TrendingUp,
      category: 'analytics',
      price: '$149/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Automated insights',
        'Data integration',
        'Export capabilities',
        'Mobile responsive',
        'White-label options'
      ],
      benefits: [
        '60% faster decision making',
        '85% accuracy in predictions',
        'Custom insights for your industry',
        'Reduced data analysis time'
      ],
      popular: true,
      rating: 4.9,
      users: '3,800+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email campaigns with AI-powered personalization and optimization.',
      icon: Mail,
      category: 'marketing',
      price: '$89/month',
      features: [
        'AI content personalization',
        'Send time optimization',
        'Subject line testing',
        'A/B testing automation',
        'Segmentation intelligence',
        'Deliverability optimization',
        'Performance analytics',
        'Template library'
      ],
      benefits: [
        '45% higher open rates',
        '65% increase in click-through rates',
        'Automated personalization',
        'Reduced unsubscribes'
      ],
      popular: true,
      rating: 4.7,
      users: '4,100+',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing and escalation.',
      icon: Bot,
      category: 'support',
      price: '$129/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Ticket routing',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
        'Custom branding'
      ],
      benefits: [
        '80% reduction in response time',
        '24/7 availability',
        '95% customer satisfaction',
        'Reduced support costs'
      ],
      popular: true,
      rating: 4.8,
      users: '6,500+',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'content',
      price: '$69/month',
      features: [
        'Multi-format content creation',
        'SEO optimization',
        'Brand voice consistency',
        'Plagiarism detection',
        'Content calendar',
        'Collaboration tools',
        'Performance tracking',
        'Template library'
      ],
      benefits: [
        '90% faster content creation',
        'SEO-optimized content',
        'Consistent brand voice',
        'Reduced content costs'
      ],
      popular: false,
      rating: 4.6,
      users: '2,800+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization with AI-powered recommendations.',
      icon: Search,
      category: 'seo',
      price: '$119/month',
      features: [
        'Keyword research & analysis',
        'On-page optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Content optimization',
        'Link building suggestions',
        'Ranking tracking',
        'Performance reports'
      ],
      benefits: [
        '150% increase in organic traffic',
        'Automated optimization',
        'Competitive advantage',
        'ROI tracking'
      ],
      popular: false,
      rating: 4.7,
      users: '3,200+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial management.',
      icon: CreditCard,
      category: 'finance',
      price: '$49/month',
      features: [
        'Automated invoice generation',
        'Payment tracking',
        'Tax calculations',
        'Recurring billing',
        'Payment reminders',
        'Financial reporting',
        'Multi-currency support',
        'Integration with accounting software'
      ],
      benefits: [
        '70% faster invoicing',
        'Reduced payment delays',
        'Automated tax compliance',
        'Better cash flow management'
      ],
      popular: false,
      rating: 4.5,
      users: '1,900+',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring System',
      description: 'Intelligent lead qualification and scoring to improve sales conversion rates.',
      icon: Target,
      category: 'sales',
      price: '$99/month',
      features: [
        'Behavioral analysis',
        'Lead scoring algorithms',
        'CRM integration',
        'Automated follow-ups',
        'Conversion prediction',
        'Sales pipeline optimization',
        'Performance analytics',
        'Custom scoring models'
      ],
      benefits: [
        '85% improvement in lead quality',
        '40% increase in conversion rates',
                'Automated lead prioritization',
        'Better sales team efficiency'
      ],
      popular: false,
      rating: 4.6,
      users: '2,100+',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Streamlined HR processes with AI-powered recruitment and employee management.',
      icon: Users,
      category: 'hr',
      price: '$139/month',
      features: [
        'Resume screening',
        'Interview scheduling',
        'Employee onboarding',
        'Performance tracking',
        'Leave management',
        'Payroll integration',
        'Compliance monitoring',
        'Employee engagement analytics'
      ],
      benefits: [
        '60% faster hiring process',
        'Reduced HR administrative tasks',
        'Better candidate matching',
        'Improved employee satisfaction'
      ],
      popular: false,
      rating: 4.4,
      users: '1,600+',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and optimization.',
      icon: Database,
      category: 'inventory',
      price: '$159/month',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Reorder automation',
        'Supplier management',
        'Quality control',
        'Cost analysis',
        'Integration with POS systems',
        'Mobile app access'
      ],
      benefits: [
        '30% reduction in stockouts',
        '25% decrease in carrying costs',
        'Automated reordering',
        'Better supplier relationships'
      ],
      popular: false,
      rating: 4.7,
      users: '2,300+',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      description: 'AI-powered design tools for logos, graphics, and marketing materials.',
      icon: Palette,
      category: 'design',
      price: '$79/month',
      features: [
        'Logo generation',
        'Graphic design automation',
        'Brand kit creation',
        'Template library',
        'Color palette suggestions',
        'Typography recommendations',
        'Export in multiple formats',
        'Collaboration tools'
      ],
      benefits: [
        '80% faster design creation',
        'Consistent brand identity',
        'Professional quality output',
        'Reduced design costs'
      ],
      popular: false,
      rating: 4.5,
      users: '1,400+',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'business', name: 'Business Tools', count: microSaasServices.filter(s => s.category === 'business').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Customer Support', count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'content', name: 'Content Creation', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'seo', name: 'SEO Tools', count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'sales', name: 'Sales', count: microSaasServices.filter(s => s.category === 'sales').length },
    { id: 'hr', name: 'HR Tools', count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'design', name: 'Design', count: microSaasServices.filter(s => s.category === 'design').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone_number',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth. Each tool is powered by cutting-edge AI technology and built for scalability.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white font-medium">Micro SAAS Tools</div>
              <div className="text-gray-400 text-sm">Ready to use</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">25,000+</div>
              <div className="text-white font-medium">Active Users</div>
              <div className="text-gray-400 text-sm">Worldwide</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white font-medium">Uptime</div>
              <div className="text-gray-400 text-sm">Reliability</div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 energy-pulse group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
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
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.users} users)
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
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
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 cyber-button text-center">
                    Start Free Trial
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-center"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="cyber-card p-6">
              <Location className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

MicroSaasPage.displayName = 'MicroSaasPage';
export default MicroSaasPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart, 
  Code, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Globe, 
  Smartphone, 
  Database, 
  Lock, 
  Cloud,
  Brain,
  Target,
  TrendingUp,
  Settings,
  Download,
  Upload,
  Share2,
  MessageSquare,
  Bell,
  Search,
  Filter,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  RefreshCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Heart,
  ThumbsUp,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Copy,
  Save,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, emails, and marketing materials with 50+ templates.',
      icon: Brain,
      price: 29,
      period: 'month',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Checker',
        'Social Media Scheduling',
        'Analytics Dashboard',
        'Team Collaboration'
      ],
      category: 'Content Creation',
      popular: true,
      color: 'purple'
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI insights, custom reports, and automated alerts for data-driven decisions.',
      icon: BarChart,
      price: 49,
      period: 'month',
      features: [
        'Real-time Data Visualization',
        'Custom Report Builder',
        'AI-Powered Insights',
        'Automated Alerts',
        'Multi-platform Integration',
        'Export to PDF/Excel',
        'Scheduled Reports',
        'White-label Options'
      ],
      category: 'Analytics',
      popular: false,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Email Marketing Automation',
      description: 'Complete email marketing solution with AI-driven personalization, A/B testing, and advanced segmentation.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'AI Email Personalization',
        'Advanced Segmentation',
        'A/B Testing Tools',
        'Automated Workflows',
        'Template Library',
        'Deliverability Optimization',
        'Performance Analytics',
        'CRM Integration'
      ],
      category: 'Marketing',
      popular: true,
      color: 'green'
    },
    {
      id: 4,
      name: 'Project Management Hub',
      description: 'Comprehensive project management with AI task prioritization, time tracking, and team collaboration tools.',
      icon: Target,
      price: 59,
      period: 'month',
      features: [
        'AI Task Prioritization',
        'Time Tracking & Reporting',
        'Team Collaboration',
        'Gantt Charts & Kanban',
        'Resource Management',
        'Budget Tracking',
        'Client Portal',
        'Mobile App Access'
      ],
      category: 'Productivity',
      popular: false,
      color: 'orange'
    },
    {
      id: 5,
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management with content scheduling, hashtag optimization, and performance tracking.',
      icon: Share2,
      price: 34,
      period: 'month',
      features: [
        'Multi-platform Posting',
        'AI Hashtag Optimization',
        'Content Calendar',
        'Engagement Analytics',
        'Auto-posting',
        'Team Collaboration',
        'Brand Monitoring',
        'Competitor Analysis'
      ],
      category: 'Social Media',
      popular: false,
      color: 'pink'
    },
    {
      id: 6,
      name: 'Customer Support AI',
      description: 'Intelligent customer support with AI chatbots, ticket management, and automated response system.',
      icon: MessageSquare,
      price: 44,
      period: 'month',
      features: [
        'AI Chatbot Integration',
        'Ticket Management System',
        'Knowledge Base',
        'Multi-channel Support',
        'Automated Responses',
        'Performance Metrics',
        'Customer Satisfaction Tracking',
        'Integration APIs'
      ],
      category: 'Customer Service',
      popular: true,
      color: 'indigo'
    },
    {
      id: 7,
      name: 'Financial Tracker Pro',
      description: 'Advanced financial management with AI insights, expense categorization, and automated bookkeeping.',
      icon: DollarSign,
      price: 39,
      period: 'month',
      features: [
        'AI Expense Categorization',
        'Automated Bookkeeping',
        'Financial Forecasting',
        'Tax Preparation Tools',
        'Multi-currency Support',
        'Bank Integration',
        'Custom Reports',
        'Audit Trail'
      ],
      category: 'Finance',
      popular: false,
      color: 'emerald'
    },
    {
      id: 8,
      name: 'HR Management Suite',
      description: 'Complete HR solution with AI recruitment, employee onboarding, performance tracking, and payroll management.',
      icon: Users,
      price: 69,
      period: 'month',
      features: [
        'AI Resume Screening',
        'Employee Onboarding',
        'Performance Reviews',
        'Payroll Management',
        'Time & Attendance',
        'Benefits Administration',
        'Compliance Tracking',
        'Employee Self-Service'
      ],
      category: 'Human Resources',
      popular: false,
      color: 'teal'
    },
    {
      id: 9,
      name: 'Inventory Management AI',
      description: 'Smart inventory tracking with AI demand forecasting, automated reordering, and supply chain optimization.',
      icon: Database,
      price: 54,
      period: 'month',
      features: [
        'AI Demand Forecasting',
        'Automated Reordering',
        'Barcode Scanning',
        'Multi-location Support',
        'Supplier Management',
        'Cost Tracking',
        'Reporting & Analytics',
        'Mobile App'
      ],
      category: 'Inventory',
      popular: false,
      color: 'cyan'
    },
    {
      id: 10,
      name: 'Website Builder AI',
      description: 'AI-powered website builder with drag-and-drop interface, SEO optimization, and responsive design templates.',
      icon: Globe,
      price: 49,
      period: 'month',
      features: [
        'AI Design Suggestions',
        'Drag-and-Drop Builder',
        'SEO Optimization',
        'Mobile Responsive',
        'E-commerce Integration',
        'Analytics Integration',
        'Custom Domains',
        'SSL Certificates'
      ],
      category: 'Web Development',
      popular: true,
      color: 'violet'
    },
    {
      id: 11,
      name: 'Video Editor Pro',
      description: 'AI-powered video editing with automatic transcription, smart cuts, and professional templates.',
      icon: Video,
      price: 39,
      period: 'month',
      features: [
        'AI Auto-editing',
        'Automatic Transcription',
        'Smart Cut Detection',
        'Professional Templates',
        'Multi-format Export',
        'Cloud Storage',
        'Collaboration Tools',
        'Stock Media Library'
      ],
      category: 'Video Production',
      popular: false,
      color: 'red'
    },
    {
      id: 12,
      name: 'Lead Generation Engine',
      description: 'AI-powered lead generation with automated prospecting, email sequences, and CRM integration.',
      icon: TrendingUp,
      price: 64,
      period: 'month',
      features: [
        'AI Lead Scoring',
        'Automated Prospecting',
        'Email Sequences',
        'CRM Integration',
        'Lead Nurturing',
        'Performance Analytics',
        'A/B Testing',
        'API Integrations'
      ],
      category: 'Sales',
      popular: true,
      color: 'amber'
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'Analytics',
    'Marketing',
    'Productivity',
    'Social Media',
    'Customer Service',
    'Finance',
    'Human Resources',
    'Inventory',
    'Web Development',
    'Video Production',
    'Sales'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredServices(microSAASServices);
    } else {
      setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-purple-700',
      blue: 'from-blue-500 to-blue-700',
      green: 'from-green-500 to-green-700',
      orange: 'from-orange-500 to-orange-700',
      pink: 'from-pink-500 to-pink-700',
      indigo: 'from-indigo-500 to-indigo-700',
      emerald: 'from-emerald-500 to-emerald-700',
      teal: 'from-teal-500 to-teal-700',
      cyan: 'from-cyan-500 to-cyan-700',
      violet: 'from-violet-500 to-violet-700',
      red: 'from-red-500 to-red-700',
      amber: 'from-amber-500 to-amber-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful, Affordable AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Choose from 50+ ready-to-use micro SAAS applications designed to streamline your business operations. 
              Each tool is powered by cutting-edge AI and comes with enterprise-grade security and support.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$29</div>
                <div className="text-xs sm:text-sm text-gray-300">Starting Price</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Support</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-200 bg-gradient-to-r ${getColorClasses(service.color)} text-white hover:shadow-lg hover:scale-105`}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full py-2 px-4 rounded-lg font-medium text-center transition-all duration-200 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Every tool is enhanced with cutting-edge AI to maximize efficiency and accuracy.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team to ensure your success.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">Built-in collaboration features to keep your team connected and productive.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive analytics and reporting to track performance and ROI.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
                <p className="text-gray-300">Seamless integration with your existing tools and workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our micro SAAS solutions. 
              Start your free trial today and experience the power of AI-driven productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                Start Free Trial
              </Link>
              <Link
                to="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call: (302) 464-0950
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 space-y-1">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;

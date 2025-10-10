'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Target, 
  Shield, 
  Cloud, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  DollarSign,
  Search,
  Filter,
  TrendingUp,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Mail,
  Smartphone,
  Globe,
  Database,
  Lock,
  Cpu,
  Bot,
  Eye,
  Mic,
  Award,
  Brain,
  Code,
  PieChart,
  Activity,
  BookOpen,
  Camera,
  Headphones,
  Palette,
  Wrench,
  Briefcase,
  Home,
  Car,
  Heart,
  Gamepad2,
  Music,
  Video,
  Image,
  Download,
  Upload,
  Share2,
  ThumbsUp,
  MessageCircle,
  Bell,
  Flag,
  Bookmark,
  Star as StarIcon,
  Zap as ZapIcon,
  Sparkles,
  Crown,
  Gem,
  Trophy,
  Medal,
  Award as AwardIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  benefits: string[];
  marketPrice: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics and AI-powered insights',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Export to multiple formats',
        'Team collaboration tools',
        'Mobile-responsive design',
        'API integrations',
        'Automated alerts',
        'White-label options'
      ],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      benefits: ['Increase data-driven decisions by 80%', 'Save 10 hours/week on reporting', 'Real-time insights'],
      marketPrice: '$99/month',
      link: '/contact'
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'CRM Master Suite',
      description: 'Complete customer relationship management with AI-powered lead scoring',
      features: [
        'Contact management',
        'Sales pipeline tracking',
        'Email automation',
        'Task scheduling',
        'Performance analytics',
        'Lead scoring AI',
        'Integration with 100+ tools',
        'Custom fields'
      ],
      price: '$19/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'CRM',
      benefits: ['Increase sales by 35%', 'Reduce follow-up time by 60%', 'Better lead qualification'],
      marketPrice: '$49/month',
      link: '/contact'
    },
    {
      id: '3',
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Project Tracker Elite',
      description: 'AI-enhanced project management with intelligent resource allocation',
      features: [
        'Task management',
        'Team collaboration',
        'Time tracking',
        'Progress monitoring',
        'Resource allocation',
        'AI-powered scheduling',
        'Risk assessment',
        'Budget tracking'
      ],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Project Management',
      benefits: ['Complete projects 25% faster', 'Reduce project overruns by 40%', 'Better resource utilization'],
      marketPrice: '$79/month',
      link: '/contact'
    },
    {
      id: '4',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Monitor Pro',
      description: 'Advanced cybersecurity monitoring with AI threat detection',
      features: [
        'Threat detection',
        'Security alerts',
        'Compliance reporting',
        'Access control',
        'Audit trails',
        'AI-powered analysis',
        'Real-time monitoring',
        'Incident response'
      ],
      price: '$49/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Security',
      benefits: ['99.9% threat detection rate', 'Reduce security incidents by 90%', 'Compliance automation'],
      marketPrice: '$199/month',
      link: '/contact'
    },
    {
      id: '5',
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: 'Cloud Storage Plus',
      description: 'Secure cloud storage with advanced file management and collaboration',
      features: [
        'File synchronization',
        'Version control',
        'Collaborative editing',
        'Advanced search',
        'Backup automation',
        'Access controls',
        'API access',
        'Mobile apps'
      ],
      price: '$15/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Storage',
      benefits: ['99.99% uptime guarantee', 'Unlimited storage', 'Enterprise security'],
      marketPrice: '$25/month',
      link: '/contact'
    },
    {
      id: '6',
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: 'Marketing Automation Hub',
      description: 'AI-powered marketing automation with advanced segmentation and personalization',
      features: [
        'Email campaigns',
        'Social media scheduling',
        'Lead scoring',
        'A/B testing',
        'Performance analytics',
        'AI content generation',
        'Customer journey mapping',
        'ROI tracking'
      ],
      price: '$35/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Marketing',
      benefits: ['Increase conversion by 45%', 'Save 15 hours/week', 'Better customer targeting'],
      marketPrice: '$99/month',
      link: '/contact'
    },
    {
      id: '7',
      icon: <MessageSquare className="w-8 h-8 text-cyan-500" />,
      title: 'Customer Support AI',
      description: 'Intelligent chatbot and support ticket management system',
      features: [
        'AI chatbot',
        'Ticket management',
        'Knowledge base',
        'Multi-channel support',
        'Sentiment analysis',
        'Auto-routing',
        'Performance metrics',
        'Integration APIs'
      ],
      price: '$25/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      benefits: ['Reduce support costs by 70%', '24/7 availability', 'Faster response times'],
      marketPrice: '$79/month',
      link: '/contact'
    },
    {
      id: '8',
      icon: <Calendar className="w-8 h-8 text-pink-500" />,
      title: 'Appointment Scheduler Pro',
      description: 'Advanced scheduling system with AI-powered optimization',
      features: [
        'Online booking',
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Multi-timezone support',
        'Resource management',
        'Reporting analytics',
        'Custom branding'
      ],
      price: '$18/month',
      users: 'Up to 12 users',
      popular: false,
      category: 'Scheduling',
      benefits: ['Reduce no-shows by 50%', 'Save 8 hours/week', 'Better time management'],
      marketPrice: '$39/month',
      link: '/contact'
    },
    {
      id: '9',
      icon: <ShoppingCart className="w-8 h-8 text-emerald-500" />,
      title: 'E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization and conversion tracking',
      features: [
        'Conversion tracking',
        'A/B testing',
        'Product recommendations',
        'Inventory management',
        'Price optimization',
        'Customer analytics',
        'Abandoned cart recovery',
        'Multi-store support'
      ],
      price: '$45/month',
      users: 'Up to 3 stores',
      popular: false,
      category: 'E-commerce',
      benefits: ['Increase sales by 30%', 'Reduce cart abandonment by 40%', 'Better inventory management'],
      marketPrice: '$149/month',
      link: '/contact'
    },
    {
      id: '10',
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: 'Expense Tracker AI',
      description: 'Intelligent expense management with receipt scanning and categorization',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense reporting',
        'Budget tracking',
        'Tax preparation',
        'Team management',
        'Mobile app',
        'Integration with accounting'
      ],
      price: '$12/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Finance',
      benefits: ['Save 5 hours/week on expense management', 'Reduce errors by 90%', 'Better budget control'],
      marketPrice: '$29/month',
      link: '/contact'
    },
    {
      id: '11',
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: 'Email Marketing Suite',
      description: 'Advanced email marketing with AI-powered personalization and automation',
      features: [
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'List management',
        'Analytics dashboard',
        'AI personalization',
        'Deliverability optimization',
        'Integration APIs'
      ],
      price: '$22/month',
      users: 'Up to 10,000 subscribers',
      popular: false,
      category: 'Email Marketing',
      benefits: ['Increase open rates by 35%', 'Reduce unsubscribe rates by 50%', 'Better engagement'],
      marketPrice: '$49/month',
      link: '/contact'
    },
    {
      id: '12',
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development with AI-powered features',
      features: [
        'Drag-and-drop builder',
        'AI-powered features',
        'Cross-platform support',
        'Push notifications',
        'Analytics integration',
        'Custom branding',
        'App store publishing',
        'Backend integration'
      ],
      price: '$59/month',
      users: 'Unlimited apps',
      popular: true,
      category: 'Development',
      benefits: ['Build apps 10x faster', 'No coding required', 'Professional results'],
      marketPrice: '$199/month',
      link: '/contact'
    },
    {
      id: '13',
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: 'Website Builder Pro',
      description: 'AI-powered website builder with advanced SEO and performance optimization',
      features: [
        'AI design suggestions',
        'SEO optimization',
        'Performance monitoring',
        'Mobile optimization',
        'E-commerce integration',
        'Analytics dashboard',
        'Custom domains',
        'SSL certificates'
      ],
      price: '$35/month',
      users: 'Unlimited websites',
      popular: false,
      category: 'Web Development',
      benefits: ['Build websites 5x faster', 'Better SEO rankings', 'Professional design'],
      marketPrice: '$99/month',
      link: '/contact'
    },
    {
      id: '14',
      icon: <Database className="w-8 h-8 text-slate-500" />,
      title: 'Database Manager',
      description: 'Advanced database management with AI-powered optimization and monitoring',
      features: [
        'Database design',
        'Performance optimization',
        'Backup automation',
        'Security monitoring',
        'Query optimization',
        'Real-time monitoring',
        'Migration tools',
        'API generation'
      ],
      price: '$42/month',
      users: 'Up to 5 databases',
      popular: false,
      category: 'Database',
      benefits: ['Improve performance by 60%', 'Reduce downtime by 80%', 'Better security'],
      marketPrice: '$149/month',
      link: '/contact'
    },
    {
      id: '15',
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with advanced security features',
      features: [
        'Password generation',
        'Secure storage',
        'Team sharing',
        'Two-factor authentication',
        'Breach monitoring',
        'Password auditing',
        'Mobile apps',
        'API access'
      ],
      price: '$8/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Security',
      benefits: ['Improve security by 95%', 'Reduce password-related issues', 'Better compliance'],
      marketPrice: '$15/month',
      link: '/contact'
    },
    {
      id: '16',
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: 'API Gateway Manager',
      description: 'Comprehensive API management with monitoring, security, and analytics',
      features: [
        'API monitoring',
        'Rate limiting',
        'Authentication',
        'Analytics dashboard',
        'Documentation generator',
        'Testing tools',
        'Version management',
        'Integration support'
      ],
      price: '$38/month',
      users: 'Up to 50 APIs',
      popular: false,
      category: 'API Management',
      benefits: ['Improve API performance by 70%', 'Reduce downtime by 90%', 'Better security'],
      marketPrice: '$199/month',
      link: '/contact'
    },
    {
      id: '17',
      icon: <Bot className="w-8 h-8 text-green-600" />,
      title: 'AI Content Generator',
      description: 'Advanced AI-powered content creation for blogs, social media, and marketing',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar',
        'Performance analytics'
      ],
      price: '$28/month',
      users: 'Unlimited content',
      popular: true,
      category: 'Content Creation',
      benefits: ['Create content 20x faster', 'Improve SEO rankings', 'Consistent brand voice'],
      marketPrice: '$99/month',
      link: '/contact'
    },
    {
      id: '18',
      icon: <Eye className="w-8 h-8 text-amber-500" />,
      title: 'Image Recognition AI',
      description: 'Computer vision solution for image analysis, tagging, and content moderation',
      features: [
        'Object detection',
        'Image classification',
        'Content moderation',
        'Auto-tagging',
        'Search functionality',
        'API integration',
        'Custom models',
        'Batch processing'
      ],
      price: '$55/month',
      users: 'Up to 10,000 images',
      popular: false,
      category: 'Computer Vision',
      benefits: ['99% accuracy', 'Reduce manual work by 80%', 'Better content organization'],
      marketPrice: '$299/month',
      link: '/contact'
    },
    {
      id: '19',
      icon: <Mic className="w-8 h-8 text-violet-500" />,
      title: 'Voice Assistant Builder',
      description: 'Create custom voice assistants and voice-enabled applications',
      features: [
        'Voice recognition',
        'Text-to-speech',
        'Custom commands',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom wake words',
        'Mobile SDK'
      ],
      price: '$65/month',
      users: 'Unlimited interactions',
      popular: false,
      category: 'Voice Technology',
      benefits: ['Build voice apps 10x faster', 'Better user experience', 'Hands-free operation'],
      marketPrice: '$399/month',
      link: '/contact'
    },
    {
      id: '20',
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Employee Recognition Hub',
      description: 'AI-powered employee recognition and performance management system',
      features: [
        'Performance tracking',
        'Recognition programs',
        'Goal setting',
        'Feedback collection',
        'Analytics dashboard',
        'Integration with HR systems',
        'Mobile app',
        'Custom rewards'
      ],
      price: '$32/month',
      users: 'Up to 100 employees',
      popular: false,
      category: 'HR Management',
      benefits: ['Increase employee engagement by 40%', 'Reduce turnover by 25%', 'Better performance tracking'],
      marketPrice: '$99/month',
      link: '/contact'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Project Management', 'Security', 'Storage', 'Marketing', 'Support', 'Scheduling', 'E-commerce', 'Finance', 'Email Marketing', 'Development', 'Web Development', 'Database', 'API Management', 'Content Creation', 'Computer Vision', 'Voice Technology', 'HR Management'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration tools'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with comprehensive analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs at competitive prices." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, affordable software" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Affordable, powerful, and ready to scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for small businesses, designed for success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20 ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-400">{product.users}</p>
                    <div className="text-sm text-gray-500 line-through mt-1">
                      Market Price: {product.marketPrice}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <Link 
                        to={product.link}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 text-sm"
                      >
                        Try Free
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="text-xs text-gray-400">
                      Key Benefits: {product.benefits[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Start your free trial today and discover how our micro SaaS solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;
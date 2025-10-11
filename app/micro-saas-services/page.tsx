import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, Zap, Heart, Camera, FileText, BarChart3, Mail, Calendar, Target, TrendingUp, Settings, Lock, Wifi, Headphones, BookOpen, ShoppingCart, CreditCard, MapPin, Phone, Video, Music, Gamepad2, Palette, Wrench, Lightbulb, Gift, Award, Rocket, Crown, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASServicesPage: React.FC = () => {
  const microSaasServices = [
    // Productivity & Task Management
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      users: '2,500+',
      rating: '4.8'
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered project analysis and productivity optimization.',
      features: [
        'Automatic time tracking',
        'Project analysis',
        'Productivity insights',
        'Team time reports',
        'Client billing integration',
        'Mobile time tracking'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-time-tracker',
      category: 'Productivity',
      users: '1,800+',
      rating: '4.6'
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time zone handling.',
      features: [
        'AI meeting scheduling',
        'Time zone optimization',
        'Meeting insights',
        'Team coordination',
        'Integration with major calendars',
        'Smart notifications'
      ],
      pricing: '$22/month',
      popular: true,
      link: '/ai-smart-calendar',
      category: 'Productivity',
      users: '3,200+',
      rating: '4.7'
    },

    // Finance & Business
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics',
        'Tax preparation tools',
        'Multi-currency support',
        'Export to accounting software'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance',
      users: '4,100+',
      rating: '4.5'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI-powered financial forecasting and spending optimization.',
      features: [
        'AI financial forecasting',
        'Spending optimization',
        'Goal tracking',
        'Investment insights',
        'Bill reminders',
        'Financial reports'
      ],
      pricing: '$20/month',
      popular: false,
      link: '/ai-budget-planner',
      category: 'Finance',
      users: '2,900+',
      rating: '4.4'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI-generated templates',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricing: '$25/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Business',
      users: '3,500+',
      rating: '4.6'
    },

    // Security & Privacy
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      users: '5,200+',
      rating: '4.9'
    },
    {
      icon: <Lock className="w-12 h-12 text-yellow-500" />,
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with AI threat detection and automated response.',
      features: [
        'Threat detection',
        'Automated alerts',
        'Security reports',
        'Compliance monitoring',
        'Incident response',
        'Security recommendations'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/ai-security-monitor',
      category: 'Security',
      users: '1,200+',
      rating: '4.7'
    },

    // Health & Wellness
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor appointment scheduling',
        'Health data export'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health',
      users: '2,800+',
      rating: '4.5'
    },
    {
      icon: <Target className="w-12 h-12 text-cyan-500" />,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance.',
      features: [
        'Personalized workouts',
        'Nutrition tracking',
        'Progress monitoring',
        'Goal setting',
        'Exercise form analysis',
        'Community features'
      ],
      pricing: '$24/month',
      popular: false,
      link: '/ai-fitness-coach',
      category: 'Health',
      users: '3,600+',
      rating: '4.6'
    },

    // Content & Marketing
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: [
        'Blog post generation',
        'Social media content',
        'Product descriptions',
        'SEO optimization',
        'Brand voice customization',
        'Content templates'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-writer',
      category: 'Marketing',
      users: '6,800+',
      rating: '4.7'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics with AI-powered insights and automated reporting.',
      features: [
        'Real-time analytics',
        'AI insights',
        'Custom dashboards',
        'Automated reports',
        'Data visualization',
        'Team collaboration'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-analytics-dashboard',
      category: 'Analytics',
      users: '4,500+',
      rating: '4.6'
    },
    {
      icon: <Mail className="w-12 h-12 text-purple-600" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered drafting, scheduling, and optimization.',
      features: [
        'Smart email drafting',
        'Send time optimization',
        'Subject line testing',
        'Email templates',
        'Performance analytics',
        'CRM integration'
      ],
      pricing: '$27/month',
      popular: false,
      link: '/ai-email-assistant',
      category: 'Communication',
      users: '3,900+',
      rating: '4.5'
    },

    // E-commerce & Sales
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-600" />,
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your online store with AI-powered product recommendations and sales analytics.',
      features: [
        'Product recommendations',
        'Sales analytics',
        'Inventory management',
        'Customer insights',
        'Price optimization',
        'Conversion tracking'
      ],
      pricing: '$45/month',
      popular: false,
      link: '/ai-ecommerce-optimizer',
      category: 'E-commerce',
      users: '2,200+',
      rating: '4.4'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      title: 'AI Sales Predictor',
      description: 'Predict sales trends and optimize your sales strategy with AI-powered forecasting.',
      features: [
        'Sales forecasting',
        'Trend analysis',
        'Lead scoring',
        'Pipeline optimization',
        'Performance tracking',
        'ROI analysis'
      ],
      pricing: '$42/month',
      popular: false,
      link: '/ai-sales-predictor',
      category: 'Sales',
      users: '1,800+',
      rating: '4.3'
    },

    // Creative & Design
    {
      icon: <Palette className="w-12 h-12 text-pink-600" />,
      title: 'AI Design Assistant',
      description: 'Create stunning designs with AI-powered tools for graphics, logos, and marketing materials.',
      features: [
        'Logo generation',
        'Graphic design',
        'Color palette suggestions',
        'Template library',
        'Brand consistency',
        'Export options'
      ],
      pricing: '$32/month',
      popular: false,
      link: '/ai-design-assistant',
      category: 'Design',
      users: '2,600+',
      rating: '4.5'
    },
    {
      icon: <Camera className="w-12 h-12 text-indigo-600" />,
      title: 'AI Photo Editor',
      description: 'Professional photo editing with AI-powered enhancement and automated retouching.',
      features: [
        'Auto enhancement',
        'Background removal',
        'Color correction',
        'Batch processing',
        'Filters and effects',
        'Cloud storage'
      ],
      pricing: '$26/month',
      popular: false,
      link: '/ai-photo-editor',
      category: 'Design',
      users: '3,100+',
      rating: '4.4'
    },

    // Learning & Education
    {
      icon: <BookOpen className="w-12 h-12 text-blue-700" />,
      title: 'AI Learning Platform',
      description: 'Personalized learning experience with AI-powered course recommendations and progress tracking.',
      features: [
        'Personalized courses',
        'Progress tracking',
        'Skill assessments',
        'Certification programs',
        'Interactive content',
        'Mobile learning'
      ],
      pricing: '$38/month',
      popular: false,
      link: '/ai-learning-platform',
      category: 'Education',
      users: '4,200+',
      rating: '4.6'
    },

    // Entertainment & Lifestyle
    {
      icon: <Music className="w-12 h-12 text-purple-700" />,
      title: 'AI Music Generator',
      description: 'Create original music with AI-powered composition tools and royalty-free tracks.',
      features: [
        'AI composition',
        'Multiple genres',
        'Custom instruments',
        'Royalty-free tracks',
        'Export options',
        'Collaboration tools'
      ],
      pricing: '$28/month',
      popular: false,
      link: '/ai-music-generator',
      category: 'Entertainment',
      users: '1,500+',
      rating: '4.2'
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-green-700" />,
      title: 'AI Game Developer',
      description: 'Create simple games with AI-powered development tools and templates.',
      features: [
        'Game templates',
        'AI assistance',
        'Asset generation',
        'Testing tools',
        'Publishing support',
        'Community features'
      ],
      pricing: '$34/month',
      popular: false,
      link: '/ai-game-developer',
      category: 'Entertainment',
      users: '900+',
      rating: '4.1'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Health', 'Marketing', 'Analytics', 'Communication', 'E-commerce', 'Sales', 'Design', 'Education', 'Entertainment', 'Business'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '20+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, business automation, task management, expense tracking" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Affordable tools for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Apps Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Apps</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our collection of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {filteredServices.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {app.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{app.pricing}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {app.rating}
                    <span className="ml-2">({app.users})</span>
                  </div>
                </div>
                <Link 
                  to={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of our AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS tools today and transform how you work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;

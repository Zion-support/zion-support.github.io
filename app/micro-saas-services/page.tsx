import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Globe, Brain, Mail, BarChart, Smartphone, CreditCard, FileText, Calendar, Target, TrendingUp, Lock, Camera, Headphones, Palette, Database, Settings, Video, Music, BookOpen, MapPin, Wifi, Cloud, Monitor, Smartphone as Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice training, and multi-language support.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection', 'Tone adjustment'],
      pricing: '$29/month',
      link: '/ai-content-writer-pro',
      popular: true,
      users: '2,500+',
      rating: '4.9',
      category: 'Content Creation'
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, custom dashboards, and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization', 'KPI tracking'],
      pricing: '$49/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      users: '1,800+',
      rating: '4.8',
      category: 'Analytics'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, priority classification, and template library.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library', 'Sentiment analysis'],
      pricing: '$19/month',
      link: '/ai-email-assistant',
      popular: false,
      users: '1,200+',
      rating: '4.7',
      category: 'Communication'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment', 'Lead scoring'],
      pricing: '$39/month',
      link: '/ai-lead-generation',
      popular: true,
      users: '1,600+',
      rating: '4.8',
      category: 'Sales'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, content optimization, and hashtag research.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics', 'Multi-platform support'],
      pricing: '$25/month',
      link: '/ai-social-media-manager',
      popular: false,
      users: '980+',
      rating: '4.6',
      category: 'Social Media'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, budget alerts, and tax preparation.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports', 'Multi-currency support'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: false,
      users: '1,400+',
      rating: '4.7',
      category: 'Finance'
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, time blocking, and integration sync.',
      features: ['AI scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Conflict resolution', 'Smart reminders'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: true,
      users: '1,100+',
      rating: '4.8',
      category: 'Productivity'
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Multi-currency', 'Recurring billing'],
      pricing: '$18/month',
      link: '/ai-invoice-generator',
      popular: false,
      users: '850+',
      rating: '4.6',
      category: 'Finance'
    },
    {
      icon: <Lock className="w-8 h-8 text-cyan-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations, breach monitoring, and multi-device sync.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', 'Password generation', '2FA integration'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7',
      category: 'Security'
    },
    {
      icon: <Video className="w-8 h-8 text-emerald-500" />,
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered features, auto-captioning, and social media optimization.',
      features: ['Auto-editing', 'AI transitions', 'Auto-captioning', 'Social optimization', 'Background removal', 'Voice enhancement'],
      pricing: '$35/month',
      link: '/ai-video-editor',
      popular: true,
      users: '1,300+',
      rating: '4.9',
      category: 'Media'
    },
    {
      icon: <Headphones className="w-8 h-8 text-rose-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for business with natural language processing and multi-language support.',
      features: ['Voice commands', 'NLP processing', 'Multi-language', 'Custom commands', 'Integration APIs', 'Voice analytics'],
      pricing: '$45/month',
      link: '/ai-voice-assistant',
      popular: false,
      users: '720+',
      rating: '4.5',
      category: 'AI Assistant'
    },
    {
      icon: <Palette className="w-8 h-8 text-violet-500" />,
      title: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials with brand consistency.',
      features: ['Logo generation', 'Graphic design', 'Brand consistency', 'Template library', 'Color matching', 'Export options'],
      pricing: '$32/month',
      link: '/ai-design-studio',
      popular: false,
      users: '890+',
      rating: '4.6',
      category: 'Design'
    },
    {
      icon: <Database className="w-8 h-8 text-amber-500" />,
      title: 'AI Data Processor',
      description: 'Intelligent data processing, cleaning, and transformation with automated insights and reporting.',
      features: ['Data cleaning', 'Auto-transformation', 'Insight generation', 'Error detection', 'Data validation', 'Export tools'],
      pricing: '$28/month',
      link: '/ai-data-processor',
      popular: false,
      users: '560+',
      rating: '4.4',
      category: 'Data'
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-500" />,
      title: 'AI Workflow Automator',
      description: 'Automate business processes with AI-powered workflow creation, task automation, and integration management.',
      features: ['Workflow creation', 'Task automation', 'Integration management', 'Conditional logic', 'Error handling', 'Performance monitoring'],
      pricing: '$55/month',
      link: '/ai-workflow-automator',
      popular: true,
      users: '1,000+',
      rating: '4.7',
      category: 'Automation'
    },
    {
      icon: <Monitor className="w-8 h-8 text-slate-500" />,
      title: 'AI Website Optimizer',
      description: 'Automated website optimization with AI-powered SEO, performance monitoring, and conversion tracking.',
      features: ['SEO optimization', 'Performance monitoring', 'Conversion tracking', 'A/B testing', 'Speed optimization', 'Mobile optimization'],
      pricing: '$42/month',
      link: '/ai-website-optimizer',
      popular: false,
      users: '750+',
      rating: '4.5',
      category: 'Web Development'
    },
    {
      icon: <Phone className="w-8 h-8 text-lime-500" />,
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI assistance, drag-and-drop interface, and instant deployment.',
      features: ['No-code development', 'Drag-and-drop', 'AI assistance', 'Instant deployment', 'Cross-platform', 'App store publishing'],
      pricing: '$65/month',
      link: '/ai-mobile-app-builder',
      popular: true,
      users: '1,500+',
      rating: '4.8',
      category: 'Mobile Development'
    }
  ];

  const categories = ['All', 'Content Creation', 'Analytics', 'Communication', 'Sales', 'Social Media', 'Finance', 'Productivity', 'Security', 'Media', 'AI Assistant', 'Design', 'Data', 'Automation', 'Web Development', 'Mobile Development'];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start from just $12/month with no hidden fees or setup costs',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for enhanced productivity and insights',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Content Writer Pro has revolutionized our content marketing. We\'ve increased our blog traffic by 300% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The AI Analytics Dashboard gives us insights we never had before. Our conversion rates improved by 40% after implementing it.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'AI Lead Generation has been a game-changer for our sales team. We\'re generating 5x more qualified leads than before.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management, productivity tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Affordable tools that deliver immediate value to modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Small applications, big impact on your productivity and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All' 
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI-powered tools designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSAAS.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6 flex justify-between items-center text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied customers who have transformed their businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your 30-day free trial today. No credit card required. Experience the power of AI-driven micro applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
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

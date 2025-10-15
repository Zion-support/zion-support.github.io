import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Users,
  Sparkles,
  Target,
  TrendingUp,
  MessageSquare,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  Bell,
  Settings,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

const ZionAIEmailAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Email Analysis',
      description: 'Advanced machine learning algorithms analyze email content, sentiment, and context to provide intelligent insights.',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Email Categorization',
      description: 'Automatically categorize emails by priority, type, and sender with 99.2% accuracy.',
      icon: <Filter className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intelligent Response Suggestions',
      description: 'Get AI-generated response suggestions based on email content and your communication style.',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Scheduling & Automation',
      description: 'Schedule emails for optimal delivery times and automate follow-ups based on recipient behavior.',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Advanced Search & Filtering',
      description: 'Find any email instantly with AI-powered semantic search and advanced filtering options.',
      icon: <Search className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Email Analytics & Insights',
      description: 'Comprehensive analytics on email performance, response rates, and communication patterns.',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 email accounts',
        'Basic AI analysis',
        'Email categorization',
        'Response suggestions',
        'Basic analytics',
        'Email support'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 email accounts',
        'Advanced AI analysis',
        'Smart email automation',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited email accounts',
        'Enterprise AI features',
        'Custom automation workflows',
        '24/7 dedicated support',
        'Advanced security',
        'Custom reporting',
        'API access',
        'White-label options'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Email Assistant has revolutionized our email management. We save 3+ hours daily and our response time improved by 60%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'The AI-powered categorization and response suggestions are incredibly accurate. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Customer Success Manager',
      content: 'The email analytics and insights help us understand our communication patterns better. Highly recommended!',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Emails Processed Daily', icon: <Mail className="w-6 h-6" /> },
    { number: '99.2%', label: 'Categorization Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '3.2x', label: 'Faster Email Response', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Assistant - Intelligent Email Management | Zion Tech Group</title>
        <meta name="description" content="Transform your email management with Zion AI Email Assistant. AI-powered analysis, smart categorization, response suggestions, and automation for maximum productivity." />
        <meta name="keywords" content="AI email assistant, email management, email automation, email analytics, smart email, email productivity, AI email analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Email Assistant
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your email management with AI-powered analysis, smart categorization, intelligent response suggestions, and advanced automation. 
              Boost productivity and never miss important emails again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>Watch Demo</span>
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leverage cutting-edge artificial intelligence to transform your email management experience. 
                Our advanced algorithms understand context, sentiment, and intent to provide intelligent assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20 hover:border-cyan-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Email Assistant
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who have already revolutionized their email workflow with Zion AI Email Assistant. 
              Start your free trial today and experience the future of email management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>Schedule Demo</span>
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEmailAssistantPage;
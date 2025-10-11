import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration', 'Time tracking', 'Goal setting'],
      pricing: '$29/month',
      link: '/ai-task-manager',
      popular: true,
      users: '2,500+',
      rating: '4.9',
      marketPrice: '$49/month'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker Plus',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports', 'Tax preparation', 'Multi-currency'],
      pricing: '$19/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '1,800+',
      rating: '4.8',
      marketPrice: '$35/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager Enterprise',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Family sharing'],
      pricing: '$15/month',
      link: '/ai-password-manager',
      popular: false,
      users: '1,200+',
      rating: '4.7',
      marketPrice: '$25/month'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing', 'Multi-language'],
      pricing: '$35/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '2,100+',
      rating: '4.9',
      marketPrice: '$59/month'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Health Tracker Premium',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness recommendations', 'Doctor integration', 'Medication reminders'],
      pricing: '$24/month',
      link: '/ai-health-tracker',
      popular: false,
      users: '1,500+',
      rating: '4.6',
      marketPrice: '$39/month'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar Enterprise',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['AI scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Team scheduling', 'Analytics dashboard'],
      pricing: '$32/month',
      link: '/ai-smart-calendar',
      popular: true,
      users: '2,300+',
      rating: '4.8',
      marketPrice: '$49/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered responses, scheduling, and inbox optimization.',
      features: ['AI email responses', 'Smart scheduling', 'Inbox optimization', 'Spam filtering', 'Email templates', 'Sentiment analysis'],
      pricing: '$22/month',
      link: '/ai-email-assistant',
      popular: true,
      users: '1,900+',
      rating: '4.7',
      marketPrice: '$39/month'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Investment Tracker',
      description: 'Intelligent investment portfolio management with AI insights and market analysis.',
      features: ['Portfolio tracking', 'AI market analysis', 'Risk assessment', 'Performance reports', 'Alert system', 'Tax optimization'],
      pricing: '$45/month',
      link: '/ai-investment-tracker',
      popular: false,
      users: '850+',
      rating: '4.8',
      marketPrice: '$79/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: 'AI Document Scanner Pro',
      description: 'Advanced document scanning with AI-powered text recognition and organization.',
      features: ['OCR technology', 'Auto organization', 'Cloud storage', 'Search functionality', 'Batch processing', 'Format conversion'],
      pricing: '$18/month',
      link: '/ai-document-scanner',
      popular: true,
      users: '1,600+',
      rating: '4.6',
      marketPrice: '$29/month'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing.',
      features: ['24/7 support', 'Natural language processing', 'Ticket routing', 'Knowledge base', 'Multi-language', 'Analytics'],
      pricing: '$65/month',
      link: '/ai-customer-support-bot',
      popular: true,
      users: '1,100+',
      rating: '4.9',
      marketPrice: '$99/month'
    },
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      title: 'AI Time Tracker Pro',
      description: 'Advanced time tracking with AI-powered productivity insights and automatic categorization.',
      features: ['Automatic time tracking', 'AI categorization', 'Productivity insights', 'Team monitoring', 'Billing integration', 'Reports'],
      pricing: '$28/month',
      link: '/ai-time-tracker',
      popular: false,
      users: '1,400+',
      rating: '4.7',
      marketPrice: '$45/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-violet-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation and scheduling.',
      features: ['Content creation', 'Auto scheduling', 'Engagement tracking', 'Multi-platform', 'Analytics', 'Trend analysis'],
      pricing: '$42/month',
      link: '/ai-social-media-manager',
      popular: true,
      users: '1,700+',
      rating: '4.8',
      marketPrice: '$69/month'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Pricing',
      description: 'Up to 50% savings compared to market leaders with no hidden fees',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge artificial intelligence for enhanced productivity',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime and 24/7 monitoring',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Task Manager Pro has revolutionized our project management. The AI prioritization saves us 15+ hours per week and our team productivity increased by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      content: 'The AI Invoice Generator Pro is incredible. It automatically creates professional invoices and tracks payments seamlessly. I save 5 hours every week on admin tasks.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'AI Expense Tracker Plus has simplified our financial management completely. The receipt scanning is 99% accurate and the tax preparation features are a lifesaver.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Marketing Director',
      content: 'AI Social Media Manager has transformed our social media presence. The AI content creation is spot-on and engagement has increased by 300%.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'HR Manager',
      content: 'AI Customer Support Bot handles 80% of our customer inquiries automatically. Response time improved from 2 hours to 2 minutes.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Financial Advisor',
      content: 'AI Investment Tracker provides insights I never had before. The AI market analysis is incredibly accurate and helped increase my portfolio returns by 25%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications including AI task management, expense tracking, password management, and more. Affordable solutions for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI applications, task management, expense tracking, password manager, invoice generator, productivity tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-powered micro applications designed to solve specific business problems. Affordable, easy-to-use solutions that deliver immediate value.
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

      {/* Micro SAAS Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our suite of specialized AI-powered applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-2xl font-bold text-white">{app.pricing}</span>
                      {app.marketPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{app.marketPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{app.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{app.users} active users</div>
                  {app.marketPrice && (
                    <div className="text-xs text-green-400 font-semibold">
                      Save ${parseInt(app.marketPrice.replace('$', '').replace('/month', '')) - parseInt(app.pricing.replace('$', '').replace('/month', ''))}/month
                    </div>
                  )}
                </div>
                <Link 
                  to={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Free
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
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro applications.
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
                  View All Apps
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
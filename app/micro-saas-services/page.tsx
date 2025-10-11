import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity insights for teams and individuals.',
      features: ['AI task prioritization', 'Smart scheduling & time blocking', 'Productivity analytics & insights', 'Team collaboration tools', 'Project tracking', 'Deadline management'],
      pricing: '$29/month',
      link: '/ai-task-manager',
      popular: true,
      users: '2,500+',
      rating: '4.9',
      category: 'Productivity',
      freeTrial: '14 days'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker Plus',
      description: 'Advanced expense tracking with receipt scanning, AI categorization, budget management, and comprehensive financial insights.',
      features: ['Receipt scanning & OCR', 'AI-powered categorization', 'Budget tracking & alerts', 'Financial reports & analytics', 'Tax preparation support', 'Multi-currency support'],
      pricing: '$19/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '1,800+',
      rating: '4.8',
      category: 'Finance',
      freeTrial: '7 days'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Vault',
      description: 'Enterprise-grade password management with AI security recommendations, breach monitoring, and advanced encryption.',
      features: ['Secure password storage', 'AI security audit', 'Breach monitoring & alerts', 'Multi-device sync', '2FA integration', 'Password sharing'],
      pricing: '$15/month',
      link: '/ai-password-manager',
      popular: false,
      users: '1,200+',
      rating: '4.7',
      category: 'Security',
      freeTrial: '30 days'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator Pro',
      description: 'Professional invoice generation with AI templates, automated payment tracking, client management, and tax calculations.',
      features: ['AI-powered templates', 'Automated invoice generation', 'Payment tracking & reminders', 'Client management CRM', 'Tax calculations', 'Multi-currency billing'],
      pricing: '$35/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '2,100+',
      rating: '4.9',
      category: 'Business',
      freeTrial: '14 days'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Health Companion',
      description: 'Comprehensive health monitoring with AI insights, goal tracking, wellness recommendations, and medical data integration.',
      features: ['Health metrics tracking', 'AI health insights', 'Goal setting & tracking', 'Wellness recommendations', 'Medical data integration', 'Health reports'],
      pricing: '$24/month',
      link: '/ai-health-tracker',
      popular: false,
      users: '950+',
      rating: '4.6',
      category: 'Health',
      freeTrial: '7 days'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar Pro',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, time blocking, and productivity analytics.',
      features: ['AI scheduling assistant', 'Meeting optimization', 'Time blocking & focus mode', 'Calendar integration', 'Productivity analytics', 'Team scheduling'],
      pricing: '$27/month',
      link: '/ai-smart-calendar',
      popular: true,
      users: '1,600+',
      rating: '4.8',
      category: 'Productivity',
      freeTrial: '14 days'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-teal-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI recommendations, spending analysis, and financial goal tracking for personal and business use.',
      features: ['AI budget recommendations', 'Spending analysis & insights', 'Financial goal tracking', 'Bill reminders & alerts', 'Investment tracking', 'Financial forecasting'],
      pricing: '$22/month',
      link: '/ai-budget-planner',
      popular: false,
      users: '1,300+',
      rating: '4.7',
      category: 'Finance',
      freeTrial: '14 days'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with AI chatbots, ticket management, and customer satisfaction tracking.',
      features: ['AI chatbot builder', 'Ticket management system', 'Customer satisfaction tracking', 'Multi-channel support', 'Knowledge base integration', 'Analytics dashboard'],
      pricing: '$45/month',
      link: '/ai-customer-support-bot',
      popular: true,
      users: '1,400+',
      rating: '4.8',
      category: 'Customer Service',
      freeTrial: '14 days'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, categorization, and productivity optimization.',
      features: ['AI email responses', 'Smart scheduling', 'Email categorization', 'Priority management', 'Template suggestions', 'Follow-up reminders'],
      pricing: '$18/month',
      link: '/ai-email-assistant',
      popular: false,
      users: '1,100+',
      rating: '4.6',
      category: 'Communication',
      freeTrial: '7 days'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Document Manager',
      description: 'Intelligent document management with AI-powered organization, search, and collaboration features for teams.',
      features: ['AI document organization', 'Smart search & tagging', 'Version control', 'Team collaboration', 'Document templates', 'Cloud storage integration'],
      pricing: '$32/month',
      link: '/ai-document-manager',
      popular: false,
      users: '800+',
      rating: '4.5',
      category: 'Document Management',
      freeTrial: '14 days'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: 'AI Social Media Manager',
      description: 'Comprehensive social media management with AI content creation, scheduling, analytics, and engagement optimization.',
      features: ['AI content creation', 'Post scheduling & automation', 'Engagement analytics', 'Hashtag optimization', 'Multi-platform management', 'Performance tracking'],
      pricing: '$39/month',
      link: '/ai-social-media-manager',
      popular: true,
      users: '1,700+',
      rating: '4.8',
      category: 'Marketing',
      freeTrial: '14 days'
    },
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI insights, project billing, productivity analysis, and automated reporting.',
      features: ['Automatic time tracking', 'AI productivity insights', 'Project billing & invoicing', 'Productivity analysis', 'Team time tracking', 'Detailed reporting'],
      pricing: '$21/month',
      link: '/ai-time-tracker',
      popular: false,
      users: '1,000+',
      rating: '4.7',
      category: 'Time Management',
      freeTrial: '7 days'
    }
  ];

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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Task Manager has revolutionized how our team manages projects. The AI prioritization saves us 10+ hours per week.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      content: 'The AI Invoice Generator is a game-changer. It automatically creates professional invoices and tracks payments seamlessly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'AI Expense Tracker has simplified our financial management. The receipt scanning feature is incredibly accurate.',
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
                <div className="mb-6">{app.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                    {app.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {app.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">{app.pricing}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{app.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{app.users} users</span>
                    <span className="text-green-400 font-semibold">{app.freeTrial} free trial</span>
                  </div>
                </div>
                
                <Link 
                  to={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
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
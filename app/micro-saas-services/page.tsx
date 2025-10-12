import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, Mail, BarChart3, FileText, Smartphone, CreditCard, Calendar, Target, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity analytics. Perfect for teams and individuals.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration', 'Time tracking', 'Goal setting'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '2,500+',
      rating: '4.9',
      category: 'Productivity',
      freeTrial: '14 days'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Smart Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, AI categorization, budget alerts, and comprehensive financial reporting.',
      features: ['Receipt scanning', 'AI categorization', 'Budget tracking', 'Tax preparation', 'Multi-currency', 'Expense reports'],
      pricing: '$15/month',
      link: '/smart-expense-tracker',
      popular: true,
      users: '1,800+',
      rating: '4.8',
      category: 'Finance',
      freeTrial: '30 days'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Vault',
      description: 'Secure password management with AI-powered security recommendations, breach monitoring, and multi-device synchronization.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Password generator'],
      pricing: '$12/month',
      link: '/ai-password-vault',
      popular: false,
      users: '950+',
      rating: '4.7',
      category: 'Security',
      freeTrial: '30 days'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, client management, and tax calculations.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing', 'Multi-currency'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '1,200+',
      rating: '4.9',
      category: 'Business',
      freeTrial: '14 days'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Studio',
      description: 'AI-powered content creation for blogs, social media, and marketing materials with SEO optimization and brand voice training.',
      features: ['Content generation', 'SEO optimization', 'Multiple languages', 'Brand voice training', 'Content calendar', 'Plagiarism check'],
      pricing: '$29/month',
      link: '/ai-content-studio',
      popular: true,
      users: '3,200+',
      rating: '4.8',
      category: 'Content',
      freeTrial: '7 days'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Website Builder',
      description: 'Build professional websites with AI assistance, including design suggestions, content generation, and SEO optimization.',
      features: ['AI design suggestions', 'Auto content generation', 'SEO optimization', 'Mobile responsive', 'E-commerce integration', 'Analytics'],
      pricing: '$39/month',
      link: '/ai-website-builder',
      popular: false,
      users: '1,100+',
      rating: '4.6',
      category: 'Web Development',
      freeTrial: '14 days'
    },
    {
      icon: <Mail className="w-8 h-8 text-indigo-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, priority classification, and email analytics.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library', 'Analytics'],
      pricing: '$19/month',
      link: '/ai-email-assistant',
      popular: false,
      users: '800+',
      rating: '4.5',
      category: 'Communication',
      freeTrial: '30 days'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, automated reporting, and custom dashboard creation.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization', 'API integration'],
      pricing: '$49/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      users: '1,400+',
      rating: '4.7',
      category: 'Analytics',
      freeTrial: '14 days'
    },
    {
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: 'AI Lead Generator',
      description: 'Automated lead discovery and qualification with CRM integration, follow-up automation, and contact enrichment.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment', 'Email sequences'],
      pricing: '$39/month',
      link: '/ai-lead-generator',
      popular: true,
      users: '1,600+',
      rating: '4.8',
      category: 'Sales',
      freeTrial: '14 days'
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'AI Meeting Scheduler',
      description: 'Intelligent meeting scheduling with time zone handling, conflict resolution, and automated follow-ups.',
      features: ['Smart scheduling', 'Time zone handling', 'Conflict resolution', 'Auto follow-ups', 'Calendar integration', 'Meeting analytics'],
      pricing: '$17/month',
      link: '/ai-meeting-scheduler',
      popular: false,
      users: '700+',
      rating: '4.6',
      category: 'Scheduling',
      freeTrial: '30 days'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-amber-500" />,
      title: 'AI Payment Processor',
      description: 'Smart payment processing with fraud detection, automated invoicing, and comprehensive financial reporting.',
      features: ['Fraud detection', 'Auto invoicing', 'Multi-currency', 'Payment analytics', 'Subscription management', 'Tax handling'],
      pricing: '$35/month',
      link: '/ai-payment-processor',
      popular: false,
      users: '900+',
      rating: '4.5',
      category: 'Payments',
      freeTrial: '14 days'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, content optimization, and performance analytics.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics', 'Multi-platform'],
      pricing: '$25/month',
      link: '/ai-social-media-manager',
      popular: true,
      users: '2,100+',
      rating: '4.7',
      category: 'Social Media',
      freeTrial: '14 days'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as you grow. No hidden fees or long-term contracts.',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks. Simple onboarding process with guided tutorials.',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results and intelligent automation.',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it. Our support team is always ready to help.',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has revolutionized how I organize my work. I\'m 40% more productive now and never miss deadlines.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The expense tracker saves me hours every week. The AI categorization is incredibly accurate and the reports are comprehensive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'The AI content writer helps me create engaging content faster than ever. The SEO optimization feature is a game-changer.',
      rating: 5
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Integrations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use." />
        <meta name="keywords" content="micro SaaS, AI tools, productivity, business automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Micro SaaS
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Tools</span>
            <br />
            for Modern Professionals
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/micro-saas-services#tools"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-2">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tool.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                    <div className="text-sm text-gray-400">Free trial: {tool.freeTrial}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(tool.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">{tool.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{tool.users} users</div>
                  </div>
                </div>

                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from professionals who use our tools daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of professionals already using our micro SaaS tools to work smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/micro-saas-services#tools"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
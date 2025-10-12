import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba

const MicroSAASServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
=======
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Powerful analytics dashboard with AI-driven insights and real-time data visualization.',
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data export'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      popular: true
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website with no coding required.',
      features: ['Drag & drop builder', 'Multi-language support', 'Analytics tracking', 'Custom integrations'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas-services/ai-chatbot-builder',
      popular: true
    },
    {
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7'
    },
    {
    }
  ];

  const benefits = [
    {
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Scalable',
      description: 'Grow with your business needs and scale effortlessly'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'StartupCo',
      content: 'The AI analytics dashboard gave us insights we never had before. Our decision-making improved dramatically.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'E-commerce Plus',
      content: 'The chatbot builder was incredibly easy to use. We had a working chatbot in under an hour.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Marketing Pro',
      content: 'The AI content generator saves us hours every week. The quality is consistently excellent.',
      rating: 5
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$29/month',
      popular: true,
      link: '/micro-saas-services/ai-content-writer'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      pricing: '$49/month',
      popular: false,
      link: '/micro-saas-services/ai-analytics-dashboard'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library'],
      pricing: '$19/month',
      popular: false,
      link: '/micro-saas-services/ai-email-assistant'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment'],
      pricing: '$39/month',
      popular: true,
      link: '/micro-saas-services/ai-lead-generation'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics'],
      pricing: '$25/month',
      popular: false,
      link: '/micro-saas-services/ai-social-media-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and budget alerts.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports'],
      pricing: '$15/month',
      popular: false,
      link: '/micro-saas-services/ai-expense-tracker'
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 AI tool', 'Basic support', 'Standard features', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['3 AI tools', 'Priority support', 'Advanced features', 'Phone & email support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['All AI tools', '24/7 support', 'Custom features', 'Dedicated account manager'],
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
    }
  ];
=======
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, client management, and payment tracking.',
      features: [
        'AI template suggestions',
        'Client management',
        'Payment tracking',
        'Tax calculations',
        'Multi-language support',
        'PDF generation'
      ],
      pricing: '$18/month',
      popular: true,
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor visit scheduling',
        'Health data export'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking',
        'Meeting optimization',
        'Calendar analytics',
        'Integration with tools',
        'Smart notifications'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

  return (
      <Helmet>
=======
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. AI-powered tools for content creation, analytics, email management, and more." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management" />
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS tools including AI analytics, chatbot builder, content generator, and lead generation. Boost your business with our specialized solutions." />
        <meta name="keywords" content="micro SaaS, AI tools, analytics dashboard, chatbot builder, content generator, lead generation, business automation" />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Tools
            </h1>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
            </p>
          </div>
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our specialized micro SaaS tools designed to solve specific business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver specialized solutions with enterprise-grade quality and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                Don't just take our word for it - hear from businesses using our micro SaaS tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
=======
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
=======
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS applications designed to solve specific business problems with AI-powered solutions." />
        <meta name="keywords" content="micro saas, ai applications, business tools, productivity software, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Specialized AI-powered applications designed to solve specific business problems with precision and efficiency.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each application is designed to solve a specific business challenge with AI-powered intelligence.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
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
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
                      {feature}
                    </li>
                  ))}
                </ul>
=======
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">All our tools leverage cutting-edge AI to provide intelligent automation and insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and data protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows in minutes.</p>
            </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
              ))}
            </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Business with Micro SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses already using our micro SaaS tools to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our micro SaaS solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
            </div>
=======
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start using our AI-powered micro applications today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
          </div>
=======
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    </div>
  );
export default MicroSaasServicesPage;
=======
=======
export default MicroSaasServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
export default MicroSAASServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba

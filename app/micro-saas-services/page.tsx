import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Powerful analytics dashboard with AI-driven insights and real-time data visualization.',
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data export'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      popular: true
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
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      features: ['Multiple content types', 'SEO optimization', 'Brand voice training', 'Bulk generation'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas-services/ai-content-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead generation and qualification using advanced AI algorithms.',
      features: ['Lead scoring', 'Email automation', 'CRM integration', 'Performance tracking'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas-services/ai-lead-generation',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management and automation with AI-powered responses.',
      features: ['Smart replies', 'Email scheduling', 'Priority sorting', 'Template library'],
      pricing: 'Starting at $24/month',
      link: '/micro-saas-services/ai-email-assistant',
      popular: false
    }
  ];

  const features = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS tools including AI analytics, chatbot builder, content generator, and lead generation. Boost your business with our specialized solutions." />
        <meta name="keywords" content="micro SaaS, AI tools, analytics dashboard, chatbot builder, content generator, lead generation, business automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized micro SaaS solutions designed to solve specific business challenges with AI-powered efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
              ))}
            </div>
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASServicesPage;
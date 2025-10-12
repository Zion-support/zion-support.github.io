import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users, Eye, BarChart3, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard', 'Integration APIs', '24/7 availability'],
      price: 'Starting at $99/month',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Automated reporting', 'Business intelligence'],
      price: 'Starting at $199/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management with AI-powered sorting, responses, and scheduling.',
      features: ['Smart email sorting', 'Auto-responses', 'Schedule optimization', 'Spam filtering', 'Priority detection', 'Template suggestions'],
      price: 'Starting at $49/month',
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants for your business with natural language understanding.',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Multi-language support', 'Integration APIs', 'Real-time processing'],
      price: 'Starting at $149/month',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow automation', 'Task scheduling', 'Process optimization', 'Error handling', 'Custom triggers', 'Performance monitoring'],
      price: 'Starting at $299/month',
      link: '/ai-automation'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge machine learning models and natural language processing capabilities.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs and requirements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing systems and workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your AI solutions run smoothly.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI content generator has revolutionized our marketing efforts. We can now produce high-quality content at scale.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Our AI chatbot handles 80% of customer inquiries automatically. Customer satisfaction has increased significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'The AI analytics dashboard provides insights we never had before. It has transformed our decision-making process.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our AI services including content generation, chatbots, analytics, automation, and more. Expert AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From content generation to automation, we help you harness the power of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions to accelerate your business growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
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

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their AI needs. 
              Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore IT Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
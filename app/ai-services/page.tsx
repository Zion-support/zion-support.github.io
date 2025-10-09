import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, BarChart, ArrowRight, CheckCircle, Star } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Marketing Automation',
      description: 'Transform your marketing with AI-powered campaigns that deliver 3x better results.',
      features: ['Automated email campaigns', 'Predictive analytics', 'Customer segmentation', 'ROI optimization'],
      price: 'Starting at $2,500/month',
      url: '/ai-marketing',
      icon: Target
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process optimization', 'Task automation', 'Workflow design', 'Performance monitoring'],
      price: 'Starting at $3,000/month',
      url: '/ai-workflow-automation',
      icon: Zap
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with advanced AI-powered analytics.',
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $4,000/month',
      url: '/ai-data-analytics',
      icon: BarChart
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent AI-powered support systems.',
      features: ['24/7 chatbot support', 'Sentiment analysis', 'Ticket routing', 'Performance metrics'],
      price: 'Starting at $1,500/month',
      url: '/ai-customer-support',
      icon: Brain
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered content generation.',
      features: ['Blog posts & articles', 'Social media content', 'Product descriptions', 'SEO optimization'],
      price: 'Starting at $2,000/month',
      url: '/ai-content-generation',
      icon: Brain
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost your sales performance with AI-driven sales automation tools.',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline management', 'Performance tracking'],
      price: 'Starting at $3,500/month',
      url: '/ai-sales-automation',
      icon: Target
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '300% ROI Increase',
      description: 'Our AI solutions typically deliver 300% return on investment within the first year.'
    },
    {
      icon: Target,
      title: '70% Cost Reduction',
      description: 'Automate repetitive tasks and reduce operational costs by up to 70%.'
    },
    {
      icon: BarChart,
      title: '90% Efficiency Gains',
      description: 'Improve productivity and efficiency across all business operations.'
    },
    {
      icon: Brain,
      title: '24/7 Intelligence',
      description: 'AI systems that work around the clock to optimize your business processes.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our operations with AI. We saw 250% ROI in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      content: 'Their AI automation solutions saved us 60% on operational costs. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'Operations Director',
      content: 'The AI customer support system improved our response time by 80%. Amazing results!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including marketing automation, workflow optimization, data analytics, and customer support. Achieve 300% ROI with our AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, automation, data analytics, AI marketing, workflow automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your business with cutting-edge AI solutions. From marketing automation to data analytics, 
                we deliver AI services that drive real results and measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our AI Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-cyan-400 font-semibold mb-6">{service.price}</div>
                  
                  <Link
                    to={service.url}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-12 text-center backdrop-blur-sm border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using our AI services to achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/case-studies"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
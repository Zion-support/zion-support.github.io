import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered business intelligence solutions.',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $2,999/month',
      href: '/ai-business-intelligence'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Auto-escalation'],
      price: 'Starting at $1,999/month',
      href: '/ai-customer-support'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Product Descriptions', 'SEO Optimization'],
      price: 'Starting at $1,499/month',
      href: '/ai-content-generation'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-driven threat detection and security monitoring.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Real-time Monitoring', 'Incident Response'],
      price: 'Starting at $3,499/month',
      href: '/ai-cybersecurity'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Build intelligent voice assistants for your business applications.',
      icon: Mail,
      features: ['Natural Language Processing', 'Voice Recognition', 'Multi-platform', 'Custom Training'],
      price: 'Starting at $2,499/month',
      href: '/ai-voice-assistant'
    },
    {
      title: 'AI Image Recognition',
      description: 'Implement advanced image recognition and computer vision solutions.',
      icon: Brain,
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Automated Tagging'],
      price: 'Starting at $2,999/month',
      href: '/ai-image-recognition'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s AI solutions transformed our business operations. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Outstanding AI implementation. Their team delivered exactly what we needed and more.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      content: 'The AI customer support system reduced our response time by 80%. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, and more."
        keywords="AI services, artificial intelligence, business intelligence, AI customer support, content generation, AI cybersecurity, machine learning"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From business intelligence to cybersecurity, we provide comprehensive AI services 
              that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Trusted by businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;

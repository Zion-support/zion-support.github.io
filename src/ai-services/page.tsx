import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, BarChart, MessageSquare, Eye, Settings, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting',
      icon: Brain,
      features: ['AI readiness assessment', 'Strategy development', 'Implementation planning', 'ROI analysis'],
      price: 'Starting at $5,000/month',
      benefits: ['Reduce implementation time by 60%', 'Increase AI adoption success rate', 'Optimize AI investments']
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI models and applications built for your specific business needs',
      icon: Zap,
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Deployment & monitoring'],
      price: 'Starting at $8,000/month',
      benefits: ['Achieve 90% accuracy', 'Scale with your business', 'Real-time insights']
    },
    {
      title: 'AI Analytics & Insights',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence',
      icon: BarChart,
      features: ['Predictive analytics', 'Data visualization', 'Automated reporting', 'Trend analysis'],
      price: 'Starting at $3,500/month',
      benefits: ['Make data-driven decisions', 'Identify new opportunities', 'Improve forecasting accuracy']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline operations and reduce manual work',
      icon: Settings,
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      price: 'Starting at $2,500/month',
      benefits: ['Reduce manual work by 80%', 'Improve efficiency', 'Eliminate human errors']
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and customer service solutions powered by AI',
      icon: MessageSquare,
      features: ['Chatbot development', 'Natural language processing', 'Sentiment analysis', '24/7 support'],
      price: 'Starting at $1,800/month',
      benefits: ['Improve customer satisfaction', 'Reduce support costs', 'Handle multiple languages']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for various business applications',
      icon: Eye,
      features: ['Object detection', 'Image classification', 'Video analysis', 'Quality inspection'],
      price: 'Starting at $4,500/month',
      benefits: ['Automate visual inspections', 'Improve quality control', 'Enable real-time monitoring']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current AI readiness to develop a comprehensive strategy.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design custom AI solutions tailored to your specific requirements and goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and rigorously test your AI solutions to ensure optimal performance and reliability.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solutions and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600">Comprehensive AI solutions for every business need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                  
                  <ul className="space-y-1 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                        <Star className="w-3 h-3 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional AI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600">The advantages of working with our AI experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our AI specialists have years of experience in machine learning and deep learning.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver AI solutions quickly without compromising on quality or performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your data and AI models are protected with enterprise-grade security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8">Contact us today for a free AI consultation and discover the possibilities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
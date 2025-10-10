import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cloud, Brain, Users, Shield, Zap, TrendingUp } from 'lucide-react';

const ContentShowcase: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      description: 'Powerful, affordable software-as-a-service solutions for modern businesses',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      link: '/micro-saas',
      features: ['AI Analytics Dashboard', 'Smart Document Processor', 'Customer Sentiment Analyzer'],
      price: 'Starting at $99/month'
    },
    {
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT infrastructure, security, and support services',
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps & CI/CD'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'AI Services & Solutions',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      link: '/ai-services',
      features: ['Custom AI Models', 'NLP Solutions', 'Computer Vision'],
      price: 'Starting at $2,800/month'
    }
  ];

  const stats = [
    { label: 'Active Clients', value: '500+' },
    { label: 'Projects Completed', value: '1,200+' },
    { label: 'Average ROI', value: '300%' },
    { label: 'Uptime Guarantee', value: '99.9%' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to transform your business and drive innovation
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {serviceCategories.map((service, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="mb-4">
              <div className="text-2xl font-bold text-green-600 mb-2">{service.price}</div>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to={service.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-8">Why Choose Zion Tech Group?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-8 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <a 
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;

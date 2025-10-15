import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Server,
  Rocket,
  Settings,
  Shield,
  Globe,
  Database
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      category: 'ai',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions for modern businesses.',
      icon: <Server className="w-8 h-8 text-green-500" />,
      category: 'it',
      features: ['Server Management', 'Cloud Solutions', 'Network Security', 'IT Support']
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      description: 'Specialized software solutions for specific business needs.',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      category: 'saas',
      features: ['Custom Apps', 'API Development', 'Integration', 'Analytics']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      category: 'security',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      category: 'cloud',
      features: ['Cloud Migration', 'Infrastructure', 'Scalability', 'Cost Optimization']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      icon: <Database className="w-8 h-8 text-orange-500" />,
      category: 'data',
      features: ['Data Processing', 'Visualization', 'Predictive Modeling', 'Reporting']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'it', name: 'IT Services' },
    { id: 'saas', name: 'Micro SAAS' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'data', name: 'Data Analytics' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions including AI development, IT services, micro SAAS, cybersecurity, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive digital innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project requirements and discover 
              how our solutions can transform your business.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center text-lg">
              Contact Us
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
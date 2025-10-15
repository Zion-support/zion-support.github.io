import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import {
  CheckCircle,
  Star,
  ArrowRight,
  Server,
  Rocket,
  Settings
} from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const services = {
    'ai-solutions': {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
        'Intelligent Automation'
      ],
      benefits: [
        'Increased Efficiency',
        'Reduced Costs',
        'Better Decision Making',
        'Enhanced Customer Experience',
        'Competitive Advantage',
        'Scalable Solutions'
      ]
    },
    'it-services': {
      title: 'IT Services',
      description: 'Comprehensive IT solutions for modern businesses.',
      icon: <Server className="w-12 h-12 text-green-500" />,
      features: [
        'Server Management',
        'Cloud Solutions',
        'Network Security',
        'System Administration',
        'Database Management',
        'IT Support'
      ],
      benefits: [
        'Reliable Infrastructure',
        'Enhanced Security',
        'Improved Performance',
        'Cost Optimization',
        '24/7 Support',
        'Scalable Solutions'
      ]
    },
    'micro-saas': {
      title: 'Micro SAAS',
      description: 'Specialized software solutions for specific business needs.',
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      features: [
        'Custom Applications',
        'API Development',
        'Integration Services',
        'User Management',
        'Analytics Dashboard',
        'Mobile Support'
      ],
      benefits: [
        'Focused Solutions',
        'Quick Deployment',
        'User-Friendly Interface',
        'Reliable Performance',
        'Cost-Effective',
        'Easy Maintenance'
      ]
    }
  };

  const service = services[serviceId as keyof typeof services] || services['ai-solutions'];

  return (
    <>
      <Helmet>
        <title>{service.title} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Features
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center text-lg">
              Get Started
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
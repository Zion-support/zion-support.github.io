import React from 'react';
import { CheckCircle, ArrowRight, Star, Cpu, Shield, Zap, BarChart3 } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'Automated systems that detect, diagnose, and resolve infrastructure issues without human intervention.',
      features: [
        'Automated Problem Detection',
        'Self-Diagnosis Capabilities',
        'Automatic Resolution',
        'Performance Monitoring'
      ],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Intelligent Operations',
      description: 'AI-powered operational systems that optimize processes, predict failures, and maintain peak performance.',
      features: [
        'Process Optimization',
        'Predictive Maintenance',
        'Resource Allocation',
        'Performance Analytics'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Adaptive Learning Systems',
      description: 'Machine learning systems that continuously improve and adapt to changing business requirements.',
      features: [
        'Continuous Learning',
        'Adaptive Algorithms',
        'Performance Optimization',
        'Behavioral Analysis'
      ],
      price: 'Starting at $2,800/month'
    },
    {
      title: 'Autonomous Monitoring',
      description: 'Comprehensive monitoring systems that provide real-time insights and automated responses.',
      features: [
        'Real-time Monitoring',
        'Automated Alerts',
        'Predictive Analytics',
        'Custom Dashboards'
      ],
      price: 'Starting at $2,200/month'
    }
  ];

  const autonomousCapabilities = [
    {
      title: 'Self-Management',
      description: 'Systems that manage themselves with minimal human oversight, reducing operational costs.',
      icon: '🤖',
      benefits: ['Reduced Manual Intervention', '24/7 Operation', 'Cost Efficiency', 'Error Reduction']
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI-driven maintenance that predicts and prevents failures before they occur.',
      icon: '🔮',
      benefits: ['Preventive Care', 'Reduced Downtime', 'Cost Savings', 'Extended Equipment Life']
    },
    {
      title: 'Dynamic Scaling',
      description: 'Automatic resource scaling based on demand and performance metrics.',
      icon: '📈',
      benefits: ['Optimal Resource Usage', 'Cost Optimization', 'Performance Consistency', 'Automatic Adjustment']
    },
    {
      title: 'Intelligent Decision Making',
      description: 'AI systems that make complex decisions based on data analysis and business rules.',
      icon: '🧠',
      benefits: ['Data-Driven Decisions', 'Faster Response Times', 'Consistent Logic', 'Reduced Human Error']
    },
    {
      title: 'Automated Security',
      description: 'Self-protecting systems that detect and respond to security threats automatically.',
      icon: '🛡️',
      benefits: ['Threat Detection', 'Automatic Response', 'Security Monitoring', 'Compliance Management']
    },
    {
      title: 'Process Optimization',
      description: 'Continuous optimization of business processes for maximum efficiency and effectiveness.',
      icon: '⚡',
      benefits: ['Efficiency Gains', 'Process Improvement', 'Resource Optimization', 'Performance Enhancement']
    }
  ];

  const industryApplications = [
    {
      title: 'Manufacturing',
      description: 'Autonomous production lines with predictive maintenance and quality control.',
      icon: '🏭'
    },
    {
      title: 'Healthcare',
      description: 'AI-powered patient monitoring and automated diagnostic systems.',
      icon: '🏥'
    },
    {
      title: 'Finance',
      description: 'Autonomous trading systems and fraud detection with real-time response.',
      icon: '💼'
    },
    {
      title: 'Retail',
      description: 'Intelligent inventory management and customer service automation.',
      icon: '🛒'
    },
    {
      title: 'Transportation',
      description: 'Autonomous fleet management and route optimization systems.',
      icon: '🚛'
    },
    {
      title: 'Energy',
      description: 'Smart grid management and renewable energy optimization.',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Self-managing, self-optimizing systems that operate independently and continuously improve
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous System Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive autonomous solutions for modern enterprise operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autonomousServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Core capabilities that make autonomous systems powerful and effective
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autonomousCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous systems transforming operations across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Autonomous Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your operations with self-managing, intelligent systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Reduce manual intervention and optimize processes for maximum efficiency
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability & Uptime</h3>
              <p className="text-gray-600">
                Self-healing systems ensure maximum uptime and consistent performance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Systems that learn and adapt to deliver better results over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our autonomous systems experts to discover how self-managing systems can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousSystemsPage;
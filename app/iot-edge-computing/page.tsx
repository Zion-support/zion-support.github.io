import React from 'react';
import { CheckCircle, Zap, Cpu, Shield, Globe, Database } from 'lucide-react';

const IoTEdgeComputingPage: React.FC = () => {
  const iotServices = [
    {
      name: 'IoT Device Management',
      price: '$2,500/month',
      description: 'Comprehensive IoT device lifecycle management and monitoring',
      features: [
        'Device provisioning and onboarding',
        'Remote device management',
        'Firmware updates and maintenance',
        'Real-time device monitoring'
      ],
      icon: Cpu,
      benefits: [
        '50% reduction in maintenance costs',
        '99.9% device uptime',
        'Automated device management',
        'Scalable device deployment'
      ]
    },
    {
      name: 'Edge Computing Platform',
      price: '$4,000/month',
      description: 'Distributed computing platform for real-time data processing',
      features: [
        'Edge data processing',
        'Local analytics and insights',
        'Reduced latency processing',
        'Offline capability'
      ],
      icon: Zap,
      benefits: [
        '90% reduction in latency',
        'Real-time decision making',
        'Bandwidth cost savings',
        'Enhanced data privacy'
      ]
    },
    {
      name: 'IoT Data Analytics',
      price: '$3,000/month',
      description: 'Advanced analytics for IoT data streams and sensor data',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Anomaly detection',
        'Custom dashboards'
      ],
      icon: Database,
      benefits: [
        'Actionable insights from data',
        'Predictive maintenance',
        'Optimized operations',
        'Data-driven decisions'
      ]
    },
    {
      name: 'IoT Security Suite',
      price: '$2,000/month',
      description: 'Comprehensive security solution for IoT devices and networks',
      features: [
        'Device authentication',
        'Encrypted communication',
        'Threat detection',
        'Security monitoring'
      ],
      icon: Shield,
      benefits: [
        'End-to-end security',
        'Threat prevention',
        'Compliance assurance',
        'Secure data transmission'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and optimization of manufacturing processes',
      benefits: ['30% increase in efficiency', 'Predictive maintenance', 'Quality control automation', 'Resource optimization']
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent urban infrastructure management and citizen services',
      benefits: ['Traffic optimization', 'Energy efficiency', 'Public safety', 'Environmental monitoring']
    },
    {
      title: 'Healthcare IoT',
      description: 'Connected medical devices and patient monitoring systems',
      benefits: ['Remote patient monitoring', 'Real-time health insights', 'Emergency response', 'Treatment optimization']
    },
    {
      title: 'Agriculture IoT',
      description: 'Precision farming and crop monitoring systems',
      benefits: ['Crop yield optimization', 'Resource conservation', 'Pest detection', 'Weather monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IoT & Edge Computing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect, process, and analyze data at the edge with our comprehensive IoT and edge computing 
            solutions. Transform your operations with real-time insights and intelligent automation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-300">Connected Devices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Latency Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            IoT & Edge Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iotServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-300">Distributed computing infrastructure for real-time processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">IoT Connectivity</h3>
              <p className="text-gray-300">Multi-protocol connectivity for diverse IoT devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
              <p className="text-gray-300">Real-time analytics and machine learning at the edge</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Connect Everything?
          </h2>
          <p className="text-purple-100 mb-6">
            Start your IoT and edge computing journey with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get IoT Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTEdgeComputingPage;
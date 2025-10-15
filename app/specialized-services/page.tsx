import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced problem-solving',
      features: [
        'Quantum Algorithm Development',
        'Optimization Problems',
        'Cryptography Solutions',
        'Quantum Simulation',
        'Research & Development',
        'Quantum Machine Learning',
        'Consulting Services',
        'Training Programs',
        'Hardware Integration',
        'Performance Analysis'
      ],
      pricing: '$10,000 - $200,000',
      category: 'Advanced Computing',
      icon: '⚛️',
      benefits: [
        'Exponential speedup for complex problems',
        'Advanced optimization capabilities',
        'Enhanced security through quantum cryptography',
        'Competitive advantage in research',
        'Future-proofing your technology stack',
        'Access to cutting-edge quantum hardware'
      ],
      useCases: [
        'Financial modeling and risk analysis',
        'Drug discovery and molecular simulation',
        'Supply chain optimization',
        'Cryptographic security solutions',
        'Machine learning acceleration',
        'Scientific research applications'
      ]
    },
    {
      id: 'ar-vr-solutions',
      title: 'AR/VR Development Solutions',
      description: 'Immersive augmented and virtual reality applications for training, marketing, and entertainment',
      features: [
        'AR Application Development',
        'VR Experience Creation',
        '3D Modeling & Animation',
        'Interactive Design',
        'Cross-platform Development',
        'Performance Optimization',
        'User Experience Design',
        'Hardware Integration',
        'Content Management',
        'Analytics & Tracking'
      ],
      pricing: '$5,000 - $100,000',
      category: 'Immersive Technology',
      icon: '🥽',
      benefits: [
        'Immersive user experiences',
        'Enhanced engagement and retention',
        'Effective training and education',
        'Innovative marketing solutions',
        'Competitive advantage in digital experiences',
        'Future-ready technology implementation'
      ],
      useCases: [
        'Employee training simulations',
        'Marketing and brand experiences',
        'Virtual property tours',
        'Gaming and entertainment',
        'Educational content delivery',
        'Remote collaboration tools'
      ]
    },
    {
      id: 'robotics-automation',
      title: 'Robotics & Automation Solutions',
      description: 'Intelligent robotics systems with AI integration for manufacturing, logistics, and service applications',
      features: [
        'Robotic Process Automation',
        'AI Integration',
        'Computer Vision',
        'Motion Planning',
        'Sensor Integration',
        'Human-Robot Collaboration',
        'Quality Control',
        'Maintenance Systems',
        'Safety Implementation',
        'Performance Monitoring'
      ],
      pricing: '$15,000 - $300,000',
      category: 'Automation',
      icon: '🤖',
      benefits: [
        'Significant operational efficiency gains',
        'Reduced labor costs and human error',
        'Improved product quality and consistency',
        'Enhanced workplace safety',
        'Scalable automation solutions',
        '24/7 operational capabilities'
      ],
      useCases: [
        'Manufacturing process automation',
        'Warehouse and logistics management',
        'Quality inspection and testing',
        'Material handling and assembly',
        'Service robotics applications',
        'Predictive maintenance systems'
      ]
    },
    {
      id: 'blockchain-solutions',
      title: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development including smart contracts, DeFi applications, and NFT platforms',
      features: [
        'Smart Contract Development',
        'DeFi Applications',
        'NFT Platforms',
        'Token Development',
        'Wallet Integration',
        'DApp Development',
        'Blockchain Consulting',
        'Security Audits',
        'Integration Services',
        'Maintenance & Support'
      ],
      pricing: '$5,000 - $100,000',
      category: 'Blockchain',
      icon: '⛓️',
      benefits: [
        'Decentralized and secure solutions',
        'Enhanced transparency and trust',
        'Innovation opportunities in Web3',
        'New revenue streams and business models',
        'Competitive advantage in emerging markets',
        'Future-proof technology adoption'
      ],
      useCases: [
        'Cryptocurrency and token platforms',
        'Supply chain transparency',
        'Digital identity management',
        'Asset tokenization',
        'DeFi protocol development',
        'NFT marketplace creation'
      ]
    },
    {
      id: 'iot-solutions',
      title: 'IoT & Edge Computing Solutions',
      description: 'Internet of Things development with edge computing, sensor integration, and real-time data processing',
      features: [
        'IoT Device Development',
        'Sensor Integration',
        'Edge Computing',
        'Real-time Data Processing',
        'Cloud Connectivity',
        'Device Management',
        'Data Analytics',
        'Security Implementation',
        'Scalable Architecture',
        'Monitoring & Maintenance'
      ],
      pricing: '$3,000 - $75,000',
      category: 'IoT',
      icon: '🌐',
      benefits: [
        'Operational efficiency through automation',
        'Real-time insights and decision making',
        'Reduced operational costs',
        'Improved asset utilization',
        'Predictive maintenance capabilities',
        'Data-driven business optimization'
      ],
      useCases: [
        'Smart manufacturing systems',
        'Environmental monitoring',
        'Asset tracking and management',
        'Predictive maintenance',
        'Smart city infrastructure',
        'Healthcare monitoring systems'
      ]
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software Development',
      description: 'Custom enterprise applications with advanced features, scalability, and integration capabilities',
      features: [
        'Custom Application Development',
        'Enterprise Architecture',
        'Scalable Design',
        'Integration Capabilities',
        'Security Implementation',
        'Performance Optimization',
        'User Management',
        'Reporting & Analytics',
        'Mobile Compatibility',
        'Maintenance & Support'
      ],
      pricing: '$10,000 - $200,000',
      category: 'Enterprise',
      icon: '🏢',
      benefits: [
        'Customized solutions for specific needs',
        'Improved operational efficiency',
        'Better system integration',
        'Enhanced security and compliance',
        'Scalable architecture for growth',
        'Competitive advantage through technology'
      ],
      useCases: [
        'ERP system development',
        'CRM platform creation',
        'Business process management',
        'Workflow automation',
        'Data management systems',
        'Process optimization tools'
      ]
    }
  ];

  const categories = ['All', 'Advanced Computing', 'Immersive Technology', 'Automation', 'Blockchain', 'IoT', 'Enterprise'];

  return (
    <>
      <Helmet>
        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge specialized services including quantum computing, AR/VR, robotics, blockchain, IoT, and enterprise software solutions." />
        <meta name="keywords" content="quantum computing, AR VR development, robotics automation, blockchain solutions, IoT development, enterprise software, specialized technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/specialized-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Cutting-edge technology solutions that push the boundaries of innovation. 
              Our specialized services deliver advanced capabilities for the most demanding business challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-purple-600 hover:text-white shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specializedServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-600">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our Specialized Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Innovation</h3>
                <p className="text-gray-600">Access the latest technologies and methodologies that give you a competitive edge in the market.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Implementation</h3>
                <p className="text-gray-600">Our specialized team ensures proper implementation and integration of complex technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Each solution is backed by extensive research and delivers measurable business impact.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Lead with Innovation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with us to implement cutting-edge solutions that transform your business and set you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Discuss Your Project
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedServicesPage;
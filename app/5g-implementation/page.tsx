import React from 'react';
import { CheckCircle, Zap, Wifi, Smartphone, Cloud, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 100x faster than 4G, enabling real-time data processing and instant connectivity.',
      benefits: ['10+ Gbps download speeds', '1ms latency', 'Massive data throughput', 'Real-time applications']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'Enhanced Connectivity',
      description: 'Superior network coverage and reliability with advanced antenna technology and network optimization.',
      benefits: ['Improved coverage', 'Better signal quality', 'Reduced interference', 'Seamless handoffs']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'IoT Integration',
      description: 'Connect millions of devices simultaneously with 5G\'s massive device capacity and low power consumption.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Edge computing', 'Smart city solutions']
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Edge Computing',
      description: 'Process data closer to the source with 5G-enabled edge computing for faster response times.',
      benefits: ['Reduced latency', 'Local data processing', 'Bandwidth optimization', 'Real-time analytics']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and network slicing for enterprise-grade protection and isolation.',
      benefits: ['Network slicing', 'End-to-end encryption', 'Zero-trust architecture', 'Compliance ready']
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and 5G readiness assessment.',
      details: ['Network audit', 'Coverage analysis', 'Capacity planning', 'ROI evaluation']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Custom 5G network design tailored to your specific business requirements.',
      details: ['Network topology', 'Hardware selection', 'Security architecture', 'Integration planning']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional installation and configuration of 5G infrastructure and equipment.',
      details: ['Hardware installation', 'Network configuration', 'Security setup', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and optimization to ensure peak performance and reliability.',
      details: ['Performance testing', 'Security validation', 'Load testing', 'Optimization']
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Go-live deployment with ongoing monitoring, maintenance, and support services.',
      details: ['Production deployment', '24/7 monitoring', 'Maintenance', 'Continuous optimization']
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Smart factories with real-time monitoring, predictive maintenance, and automated quality control.',
      benefits: ['Predictive maintenance', 'Real-time monitoring', 'Automated quality control', 'Supply chain optimization']
    },
    {
      title: 'Healthcare',
      description: 'Telemedicine, remote surgery, and real-time patient monitoring with ultra-low latency.',
      benefits: ['Remote surgery', 'Telemedicine', 'Real-time monitoring', 'Medical IoT']
    },
    {
      title: 'Transportation',
      description: 'Autonomous vehicles, smart traffic management, and connected transportation systems.',
      benefits: ['Autonomous vehicles', 'Smart traffic', 'Fleet management', 'Safety systems']
    },
    {
      title: 'Retail',
      description: 'Augmented reality shopping, smart inventory management, and personalized customer experiences.',
      benefits: ['AR shopping', 'Smart inventory', 'Personalization', 'Customer analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services. Ultra-fast speeds, IoT integration, and edge computing solutions." />
        <meta name="keywords" content="5G implementation, 5G services, IoT, edge computing, network infrastructure, wireless technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with next-generation 5G technology. Experience ultra-fast speeds, massive IoT connectivity, and edge computing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5G Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock the full potential of 5G technology with our comprehensive implementation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful 5G deployment
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how 5G can transform your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready for 5G Transformation?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how 5G can revolutionize your business operations and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your 5G Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGImplementationPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Leverage artificial intelligence for intelligent network management and optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Auto-scaling', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Precision Coverage',
      description: 'Deliver targeted coverage with beamforming and advanced antenna technology.',
      benefits: ['Beamforming technology', 'Precise targeting', 'Reduced interference', 'Enhanced coverage']
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description: 'Build future-ready networks that can scale with your business needs.',
      benefits: ['Modular design', 'Easy expansion', 'Cost-effective scaling', 'Future-proof architecture']
    },
    {
      icon: FileText,
      title: 'Comprehensive Documentation',
      description: 'Complete implementation guides and technical documentation for seamless deployment.',
      benefits: ['Step-by-step guides', 'API documentation', 'Best practices', 'Troubleshooting guides']
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of your current infrastructure and requirements.',
      details: ['Site survey', 'Capacity planning', 'Coverage analysis', 'Performance baseline']
    },
    {
      step: '02',
      title: 'Infrastructure Design',
      description: 'Custom 5G network architecture tailored to your specific needs.',
      details: ['Network topology', 'Equipment selection', 'Coverage mapping', 'Security design']
    },
    {
      step: '03',
      title: 'Equipment Installation',
      description: 'Professional installation and configuration of 5G equipment.',
      details: ['Hardware installation', 'Software configuration', 'Testing and validation', 'Documentation']
    },
    {
      step: '04',
      title: 'Network Optimization',
      description: 'Fine-tuning and optimization for maximum performance and efficiency.',
      details: ['Performance tuning', 'Coverage optimization', 'Interference mitigation', 'Quality assurance']
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure all systems meet performance requirements.',
      details: ['Load testing', 'Coverage testing', 'Performance validation', 'User acceptance testing']
    },
    {
      step: '06',
      title: 'Go-Live & Support',
      description: 'Launch your 5G network with ongoing support and maintenance.',
      details: ['Network activation', 'User training', '24/7 monitoring', 'Ongoing support']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Speeds',
      description: 'Experience speeds up to 100x faster than 4G networks'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols for maximum protection'
    },
    {
      icon: PieChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive monitoring and analytics for optimal performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services with ultra-low latency, high-speed connectivity, and AI-powered optimization. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G implementation, 5G network, ultra-low latency, high-speed connectivity, AI optimization, network infrastructure" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                5G Implementation
              </span>
              <br />
              <span className="text-gray-700">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Our expert team delivers 
              ultra-low latency, high-speed connectivity, and AI-powered optimization for 
              next-generation applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our 5G Implementation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive 5G solutions that combine cutting-edge technology 
              with proven implementation expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering world-class 5G networks that exceed expectations.
            </p>
          </div>
          
          <div className="space-y-12">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="lg:w-2/3 lg:pl-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of 5G technology with our comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 5G revolution with our expert implementation services. 
            Get started today and experience the future of connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;
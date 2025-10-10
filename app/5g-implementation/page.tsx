'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.'
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast download and upload speeds up to 10 Gbps.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure 5G communications.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide 5G network coverage with seamless roaming capabilities.'
    }
  ];

  const benefits = [
    'Up to 100x faster than 4G networks',
    'Ultra-low latency for real-time applications',
    'Support for massive IoT device connectivity',
    'Enhanced mobile broadband experience',
    'Reliable network performance',
    'Future-proof technology infrastructure'
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and 5G readiness.'
    },
    {
      step: 2,
      title: 'Design & Planning',
      description: 'Custom 5G network design tailored to your specific requirements.'
    },
    {
      step: 3,
      title: 'Infrastructure Setup',
      description: 'Installation and configuration of 5G equipment and systems.'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization for optimal results.'
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Full deployment with ongoing support and maintenance services.'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Enable smart city infrastructure with 5G connectivity for IoT devices, traffic management, and public services.',
      icon: Globe
    },
    {
      title: 'Industrial IoT',
      description: 'Connect thousands of industrial devices for real-time monitoring and automation.',
      icon: BarChart
    },
    {
      title: 'Healthcare',
      description: 'Support telemedicine, remote surgery, and real-time patient monitoring.',
      icon: Users
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable vehicle-to-vehicle and vehicle-to-infrastructure communications.',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G technology implementation. Ultra-fast speeds, low latency, and massive connectivity." />
        <meta name="keywords" content="5G implementation, 5G network, ultra-fast internet, IoT connectivity, smart cities" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">5G Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your business with the power of 5G technology. Experience ultra-fast speeds, 
              ultra-low latency, and massive connectivity for the next generation of applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful capabilities that make 5G the future of connectivity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose 5G?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  5G technology represents a quantum leap in wireless connectivity, offering unprecedented 
                  speed, reliability, and capacity for modern applications.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Speed</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-slate-700 rounded mr-2">
                        <div className="w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></div>
                      </div>
                      <span className="text-cyan-400 font-bold">10 Gbps</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Latency</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-slate-700 rounded mr-2">
                        <div className="w-3/4 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></div>
                      </div>
                      <span className="text-cyan-400 font-bold">1ms</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Capacity</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-slate-700 rounded mr-2">
                        <div className="w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></div>
                      </div>
                      <span className="text-cyan-400 font-bold">1M devices/km²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven 5-step process ensures successful 5G implementation for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the diverse applications and industries that benefit from 5G technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Implement 5G?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our 5G experts to discuss your implementation needs and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Get a Quote
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

FiveGImplementationPage.displayName = 'FiveGImplementationPage';

export default FiveGImplementationPage;
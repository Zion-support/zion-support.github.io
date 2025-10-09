'use client';
import React from 'react';
import { Cpu, Target, Settings, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const IoTEdgeComputingPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="IoT & Edge Computing Solutions - Smart IoT Development | Zion Tech Group"
        description="Advanced IoT and edge computing solutions for smart devices and real-time processing. Build intelligent IoT systems with our cutting-edge technology."
        keywords={['iot', 'edge computing', 'smart devices', 'iot development', 'edge processing', 'iot solutions']}
        canonicalUrl="https://ziontechgroup.com/iot-edge-computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IoT & Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced IoT and edge computing solutions for smart devices and real-time processing. 
              Build intelligent IoT systems with our cutting-edge technology.
            </p>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Edge Processing</h3>
                <p className="text-gray-300">Real-time data processing at the edge</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Devices</h3>
                <p className="text-gray-300">Intelligent IoT device development and management</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-300">Advanced analytics and monitoring solutions</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">IoT & Edge Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">IoT Development</h3>
                <p className="text-gray-300 mb-4">
                  Complete IoT solution development from device to cloud.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Device development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Sensor integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data collection
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Edge Computing</h3>
                <p className="text-gray-300 mb-4">
                  Deploy edge computing solutions for real-time processing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Edge deployment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time processing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Edge analytics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing</h2>
            <div className="cyber-card p-8 max-w-2xl mx-auto text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">$1,600/month</div>
              <p className="text-gray-300 mb-6">IoT & Edge Computing Solutions</p>
              <ul className="space-y-3 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  IoT device development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Edge computing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Data analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Security implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
              </ul>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 mt-6 inline-block"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Smart IoT Solutions?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let our IoT and edge computing experts help you build intelligent connected systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;
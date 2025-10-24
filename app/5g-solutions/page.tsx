import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Globe, Smartphone, Wifi, Cpu, Shield, CheckCircle } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization services',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-500',
      features: ['Network Planning', 'Site Survey', 'Equipment Installation', 'Performance Optimization']
    },
    {
      title: '5G Mobile Applications',
      description: 'High-performance mobile apps leveraging 5G capabilities',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      features: ['Ultra-low Latency', 'High Bandwidth', 'Real-time Processing', 'Edge Computing']
    },
    {
      title: '5G IoT Solutions',
      description: 'Internet of Things solutions powered by 5G connectivity',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      features: ['Massive IoT', 'Sensor Networks', 'Data Analytics', 'Remote Monitoring']
    },
    {
      title: '5G Edge Computing',
      description: 'Edge computing infrastructure for ultra-low latency applications',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      features: ['Edge Servers', 'Data Processing', 'Real-time Analytics', 'Local AI']
    }
  ];

  const benefits = [
    'Ultra-fast connectivity up to 10 Gbps',
    'Ultra-low latency under 1ms',
    'Massive device connectivity',
    'Enhanced mobile broadband',
    'Reliable mission-critical communications',
    'Future-proof technology infrastructure'
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, mobile applications, IoT, and edge computing services." />
        <meta name="keywords" content="5G solutions, 5G network, mobile applications, IoT, edge computing, telecommunications" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with next-generation 5G technology and infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services to power your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <solution.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 text-sm text-center mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of next-generation connectivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss your 5G implementation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
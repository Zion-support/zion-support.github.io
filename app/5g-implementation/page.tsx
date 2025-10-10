import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Activity,
  Settings,
  Monitor,
  Database,
  Network,
  Cpu,
  Cloud,
  Radio
} from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Deploy 5G networks with speeds up to 10 Gbps for lightning-fast data transmission and real-time applications.',
      benefits: ['10 Gbps peak speeds', 'Low latency', 'High bandwidth', 'Real-time processing']
    },
    {
      icon: Globe,
      title: 'Massive Connectivity',
      description: 'Support millions of connected devices per square kilometer with advanced 5G infrastructure.',
      benefits: ['IoT device support', 'Dense urban coverage', 'Smart city enablement', 'Industrial automation']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Built-in 5G security features including network slicing and advanced encryption protocols.',
      benefits: ['Network slicing', 'End-to-end encryption', 'Identity management', 'Threat protection']
    },
    {
      icon: Wifi,
      title: 'Network Slicing',
      description: 'Create virtual networks tailored for specific applications and use cases with guaranteed performance.',
      benefits: ['Customized networks', 'QoS guarantees', 'Resource optimization', 'Service isolation']
    }
  ];

  const applications = [
    'Smart Cities and Infrastructure',
    'Autonomous Vehicles',
    'Industrial IoT and Manufacturing',
    'Telemedicine and Healthcare',
    'Augmented and Virtual Reality',
    'Smart Agriculture',
    'Remote Work Solutions',
    'Gaming and Entertainment',
    'Financial Services',
    'Emergency Services',
    'Education and Training',
    'Retail and E-commerce'
  ];

  const benefits = [
    'Up to 100x faster than 4G',
    'Ultra-low latency (< 1ms)',
    'Massive device connectivity',
    'Enhanced mobile broadband',
    'Mission-critical communications',
    'Network slicing capabilities',
    'Edge computing integration',
    'Improved energy efficiency'
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services for ultra-fast, low-latency connectivity. Transform your business with next-generation wireless technology." />
        <meta name="keywords" content="5G implementation, 5G networks, wireless technology, IoT connectivity, smart cities, network slicing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <Wifi className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 text-sm font-medium">5G Implementation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Next-Generation
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5G Networks
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Deploy ultra-fast 5G networks with speeds up to 10 Gbps, ultra-low latency, 
                and massive connectivity for the future of wireless communication.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 inline-flex items-center">
                  Start 5G Implementation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-indigo-400 text-indigo-300 hover:bg-indigo-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View 5G Applications
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">10 Gbps</div>
                <div className="text-gray-300">Peak Speeds</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices per km²</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100x</div>
                <div className="text-gray-300">Faster than 4G</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                5G Network Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G implementation services deliver next-generation wireless technology 
                with unprecedented speed, capacity, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                5G Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology can transform your industry with ultra-fast, 
                low-latency connectivity and massive device support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Radio className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-white font-medium">{application}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                5G technology offers revolutionary improvements over previous generations, 
                enabling new applications and transforming industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with next-generation 5G wireless technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 hover:bg-indigo-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;
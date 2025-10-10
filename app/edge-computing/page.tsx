import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Server,
  Wifi,
  Activity,
  Settings,
  Monitor,
  Database,
  Network,
  Smartphone,
  Cloud
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Process data at the edge with sub-millisecond latency for real-time applications and IoT devices.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Local data processing', 'Instant response']
    },
    {
      icon: Globe,
      title: 'Distributed Architecture',
      description: 'Deploy computing resources closer to data sources for improved performance and reduced bandwidth usage.',
      benefits: ['Geographic distribution', 'Bandwidth optimization', 'Offline capability', 'Scalable deployment']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep sensitive data local with edge security measures and reduced attack surface.',
      benefits: ['Data locality', 'Reduced attack surface', 'Local encryption', 'Compliance support']
    },
    {
      icon: Cpu,
      title: 'AI at the Edge',
      description: 'Run machine learning models directly on edge devices for intelligent, autonomous operations.',
      benefits: ['Local AI inference', 'Autonomous operation', 'Reduced cloud dependency', 'Real-time decisions']
    }
  ];

  const useCases = [
    'Industrial IoT and Manufacturing',
    'Autonomous Vehicles',
    'Smart Cities Infrastructure',
    'Retail and Customer Analytics',
    'Healthcare Monitoring',
    'Financial Trading Systems',
    'Gaming and AR/VR',
    'Video Surveillance',
    'Agricultural Monitoring',
    'Energy Grid Management',
    'Telecommunications',
    'Supply Chain Optimization'
  ];

  const benefits = [
    'Reduced latency and improved performance',
    'Lower bandwidth costs and usage',
    'Enhanced data privacy and security',
    'Improved reliability and availability',
    'Real-time decision making',
    'Reduced cloud dependency',
    'Better user experience',
    'Cost-effective scaling'
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Ultra-low latency edge computing solutions for IoT, AI, and real-time applications. Deploy computing power closer to your data sources." />
        <meta name="keywords" content="edge computing, IoT, low latency, distributed computing, real-time processing, edge AI, 5G" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">Edge Computing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Ultra-Low Latency
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Edge Computing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Deploy computing power at the edge for real-time processing, reduced latency, 
                and intelligent decision-making closer to your data sources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 inline-flex items-center">
                  Start Edge Computing Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-orange-400 text-orange-300 hover:bg-orange-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Use Cases
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">&lt;1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300">Bandwidth Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Edge Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Edge Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our edge computing solutions bring processing power closer to your data sources 
                for improved performance, security, and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing can transform your industry with real-time processing 
                and intelligent decision-making capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Server className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-white font-medium">{useCase}</span>
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
                Why Choose Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Edge computing offers significant advantages over traditional cloud computing 
                for latency-sensitive and data-intensive applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-red-400" />
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
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your applications with ultra-low latency edge computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-orange-400 text-orange-300 hover:bg-orange-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingPage;
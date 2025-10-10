import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Cpu, 
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
  Zap,
  Cloud,
  Radio
} from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Device Management',
      description: 'Comprehensive IoT device management platform that handles millions of connected devices with ease.',
      benefits: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics']
    },
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data at the edge for real-time insights and reduced latency in IoT applications.',
      benefits: ['Local data processing', 'Real-time analytics', 'Reduced latency', 'Offline capability']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security for IoT devices and data with industry-standard encryption and protocols.',
      benefits: ['Device authentication', 'Data encryption', 'Secure communication', 'Compliance support']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced analytics and machine learning capabilities to extract insights from IoT data streams.',
      benefits: ['Real-time analytics', 'Predictive maintenance', 'Pattern recognition', 'Business intelligence']
    }
  ];

  const solutions = [
    'Smart Manufacturing',
    'Connected Vehicles',
    'Smart Buildings',
    'Agricultural Monitoring',
    'Healthcare Devices',
    'Energy Management',
    'Supply Chain Tracking',
    'Environmental Monitoring',
    'Retail Analytics',
    'Smart Cities',
    'Asset Tracking',
    'Predictive Maintenance'
  ];

  const capabilities = [
    'Device connectivity and management',
    'Real-time data processing',
    'Edge computing integration',
    'Cloud platform integration',
    'API and SDK development',
    'Custom dashboard creation',
    'Alert and notification systems',
    'Data visualization tools'
  ];

  return (
    <>
      <Helmet>
        <title>IoT Platform Development - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT platform development services for connected devices, edge computing, and smart solutions. Scale your IoT infrastructure." />
        <meta name="keywords" content="IoT platform, connected devices, edge computing, smart solutions, device management, IoT analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
                <Wifi className="w-5 h-5 text-teal-400" />
                <span className="text-teal-300 text-sm font-medium">IoT Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  IoT Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build, deploy, and scale IoT solutions with our comprehensive platform that handles 
                device management, data processing, and analytics at enterprise scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center">
                  Start IoT Platform Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-teal-400 text-teal-300 hover:bg-teal-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View IoT Solutions
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Protocols Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                IoT Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IoT platform provides everything you need to build, deploy, 
                and manage connected device solutions at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
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

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                IoT Solutions & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform powers a wide range of connected device solutions across 
                industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <Radio className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-white font-medium">{solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Platform Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform provides comprehensive capabilities for building and managing 
                connected device solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{capability}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your IoT Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with comprehensive IoT solutions and connected device management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-teal-400 text-teal-300 hover:bg-teal-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTPlatformPage;
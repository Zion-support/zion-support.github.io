import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  CloudIcon, 
  SignalIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function FiveGSolutionsPage() {
  const features = [
    {
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond response times for real-time applications',
      icon: CpuChipIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Massive Connectivity',
      description: 'Support for millions of devices per square kilometer',
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enhanced Mobile Broadband',
      description: 'Gigabit speeds for mobile and fixed wireless access',
      icon: SignalIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Network Slicing',
      description: 'Dedicated virtual networks for different use cases',
      icon: RocketLaunchIcon,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    'Autonomous Vehicles',
    'Smart Cities',
    'Industrial IoT',
    'Remote Surgery',
    'Virtual Reality',
    'Edge Computing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions from Zion Tech Group." />
        <meta name="keywords" content="5G, 5G solutions, network infrastructure, IoT, edge computing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              5G Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with the power of 5G technology. Ultra-fast speeds, 
              ultra-low latency, and massive connectivity for the next generation of applications.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">5G Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full potential of 5G with our comprehensive solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">5G Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G can revolutionize your industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white text-sm font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how 5G can transform your business operations and create new opportunities.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
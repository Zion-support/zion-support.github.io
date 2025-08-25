import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  const features = [
    {
      icon: Network,
      title: 'Ultra-Fast Connectivity',
      description: 'Lightning-fast 5G networks with ultra-low latency for enterprise applications'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced security protocols and encryption for mission-critical operations'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide 5G infrastructure with seamless roaming capabilities'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed edge computing for real-time data processing'
    }
  ];

  const solutions = [
    {
      title: '5G Private Networks',
      description: 'Dedicated 5G networks for enterprise campuses and facilities',
      features: ['Custom coverage', 'Enhanced security', 'Low latency', 'High bandwidth']
    },
    {
      title: '5G IoT Platforms',
      description: 'Comprehensive IoT solutions powered by 5G connectivity',
      features: ['Device management', 'Real-time analytics', 'Scalable infrastructure', 'Smart automation']
    },
    {
      title: '5G Edge Computing',
      description: 'Edge computing solutions for distributed applications',
      features: ['Local processing', 'Reduced latency', 'Bandwidth optimization', 'Cost efficiency']
    },
    {
      title: '5G Network Slicing',
      description: 'Virtualized network segments for different use cases',
      features: ['Custom QoS', 'Isolated traffic', 'Flexible allocation', 'Service guarantees']
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      applications: ['Smart factories', 'Predictive maintenance', 'Quality control', 'Supply chain optimization']
    },
    {
      industry: 'Healthcare',
      applications: ['Telemedicine', 'Remote monitoring', 'Medical imaging', 'Emergency response']
    },
    {
      industry: 'Transportation',
      applications: ['Connected vehicles', 'Traffic management', 'Logistics optimization', 'Public safety']
    },
    {
      industry: 'Retail',
      applications: ['Smart stores', 'Inventory management', 'Customer analytics', 'Omnichannel experiences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with next-generation 5G technology. 
              Ultra-fast connectivity, enterprise-grade security, and seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade 5G technology designed for reliability, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive 5G Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored 5G solutions for every enterprise need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 5G revolution and unlock new possibilities for your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Cloud, Zap, Shield, ArrowRight, Server, Globe, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      title: 'Scalable Computing',
      description: 'AI-powered auto-scaling cloud infrastructure that adapts to your workload demands.',
      icon: Server,
      benefits: [
        'Auto-scaling capabilities',
        'Load balancing',
        'Resource optimization',
        'Cost efficiency'
      ]
    },
    {
      title: 'Global Distribution',
      description: 'Worldwide cloud infrastructure with intelligent content delivery and edge computing.',
      icon: Globe,
      benefits: [
        'Global CDN',
        'Edge computing',
        'Low latency',
        'High availability'
      ]
    },
    {
      title: 'Data Management',
      description: 'Intelligent data storage, processing, and analytics in the cloud.',
      icon: Database,
      benefits: [
        'Smart data storage',
        'Real-time processing',
        'Advanced analytics',
        'Data security'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with AI-powered threat detection and compliance monitoring.',
      icon: Shield,
      benefits: [
        'AI threat detection',
        'Compliance monitoring',
        'Data encryption',
        'Access control'
      ]
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 50%',
    'Scale automatically with demand',
    'Global reach and performance',
    'Enterprise-grade security',
    '24/7 monitoring and support',
    'Easy migration and deployment'
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Intelligent cloud infrastructure solutions powered by AI. Scalable, secure, and efficient cloud computing for modern businesses." />
        <meta name="keywords" content="AI cloud infrastructure, cloud computing, scalable infrastructure, cloud security, edge computing" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cloud
              <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Intelligent cloud infrastructure that scales with your business. 
              AI-powered optimization, security, and performance for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-sky-400 text-sky-300 px-8 py-4 rounded-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cloud infrastructure provides comprehensive solutions for modern applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-sky-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-sky-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered cloud infrastructure that transforms your operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-sky-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the cloud revolution with our AI-powered infrastructure solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICloudInfrastructurePage;
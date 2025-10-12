import React from 'react';
import { CheckCircle, ArrowRight, Shield, Lock, Cpu, Globe, Zap } from 'lucide-react';;
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGPrivateNetworksPage: React.FC = () => {
  const privateNetworkServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Private 5G Core',
      description: 'Dedicated 5G core network infrastructure for enterprise environments with enhanced security.',
      features: ['Dedicated core network', 'Enhanced security', 'Custom policies', 'Network isolation', 'Performance optimization'],
      pricing: 'Starting at $20,000/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Dedicated Spectrum',
      description: 'Exclusive spectrum allocation for private 5G networks with guaranteed performance.',
      features: ['Spectrum allocation', 'Interference management', 'Performance guarantees', 'Regulatory compliance', 'Network planning'],
      pricing: 'Starting at $15,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise Integration',
      description: 'Seamless integration with existing enterprise systems and applications.',
      features: ['System integration', 'API development', 'Legacy compatibility', 'Custom solutions', 'Training & support'],
      pricing: 'Starting at $10,000'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Network Monitoring',
      description: '24/7 monitoring and management of private 5G networks with proactive maintenance.',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance analytics', 'Incident response', 'Regular reporting'],
      pricing: 'Starting at $5,000/month'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Complete network isolation and advanced security controls',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Dedicated Resources',
      description: 'Guaranteed bandwidth and performance for your applications',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Custom Control',
      description: 'Full control over network policies and configurations',
      icon: <Lock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry-specific compliance requirements',
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Dedicated 5G private networks for enterprises with enhanced security, dedicated spectrum, and custom control. Secure and reliable private 5G solutions." />
        <meta name="keywords" content="5G private networks, private 5G core, dedicated spectrum, enterprise 5G, network security, private wireless" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Private Networks
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dedicated 5G private networks for enterprises, campuses, and industrial facilities with enhanced 
              security, dedicated spectrum, and complete control over your wireless infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Private Network Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete private 5G network solutions for enterprise environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {privateNetworkServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Private Network Benefits</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Why choose a private 5G network for your enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Private Network?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free private network assessment and discover how we can secure your enterprise connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGPrivateNetworksPage;
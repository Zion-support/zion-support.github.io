'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Network, Shield, Zap, Globe, Wifi, Server, Router, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NetworkingPage() {
  const networkingServices = [
    {
      icon: Network,
      title: 'Network Design & Architecture',
      description: 'Design and implement robust, scalable network infrastructure tailored to your business needs.',
      features: ['Network topology design', 'Scalability planning', 'Performance optimization', 'Future-proofing']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Protect your network with advanced security solutions and monitoring systems.',
      features: ['Firewall configuration', 'Intrusion detection', 'VPN setup', 'Security auditing']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximize network performance and reliability through advanced optimization techniques.',
      features: ['Bandwidth management', 'QoS implementation', 'Traffic analysis', 'Performance monitoring']
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate your on-premises network with cloud services and hybrid solutions.',
      features: ['Cloud connectivity', 'Hybrid cloud setup', 'SD-WAN implementation', 'Multi-cloud networking']
    }
  ];

  const networkTypes = [
    {
      title: 'Local Area Network (LAN)',
      description: 'High-speed internal networks for office environments',
      icon: Wifi
    },
    {
      title: 'Wide Area Network (WAN)',
      description: 'Connect multiple locations across different geographic areas',
      icon: Globe
    },
    {
      title: 'Data Center Networks',
      description: 'High-performance networks for data center operations',
      icon: Server
    },
    {
      title: 'Wireless Networks',
      description: 'Secure and reliable wireless connectivity solutions',
      icon: Router
    }
  ];

  const benefits = [
    'Improved network performance and reliability',
    'Enhanced security and threat protection',
    'Reduced downtime and maintenance costs',
    'Scalable infrastructure for business growth',
    '24/7 network monitoring and support',
    'Compliance with industry standards'
  ];

  return (
    <>
      <Helmet>
        <title>Networking Solutions - Zion Tech Group | Professional Network Services</title>
        <meta name="description" content="Expert networking solutions including network design, security, optimization, and cloud integration. Reliable, secure, and scalable network infrastructure." />
        <meta name="keywords" content="networking, network design, network security, LAN, WAN, cloud networking, network optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Networking
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, secure, and optimize your network infrastructure with our expert networking solutions. From design to implementation and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Network Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Networking Services</h2>
              <p className="text-xl text-gray-300">Comprehensive networking solutions for businesses of all sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {networkingServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Types */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Network Types We Support</h2>
              <p className="text-xl text-gray-300">Expert solutions for every type of network infrastructure</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {networkTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Networking Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your network infrastructure with our expert services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your Network?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Get a comprehensive network assessment and discover how we can improve your network performance, security, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
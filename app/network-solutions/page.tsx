'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Wifi, Router, Server, Lock, Cloud, Activity } from 'lucide-react';

const NetworkSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Network Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive network solutions including design, implementation, security, and management for businesses of all sizes." />
        <meta name="keywords" content="network solutions, network design, network security, network management, IT infrastructure, networking" />
        <meta property="og:title" content="Network Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive network solutions including design, implementation, security, and management for businesses of all sizes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/network-solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Network Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive network solutions including design, implementation, security, and management for businesses of all sizes." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Network Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive network solutions including design, implementation, security, and management for businesses of all sizes. Build a robust, secure, and scalable network infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Solutions
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Network Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Router className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Network Design</h3>
                  <p className="text-gray-300 mb-4">Custom network architecture designed for your business needs and growth.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Network topology design</li>
                    <li>• Capacity planning</li>
                    <li>• Redundancy planning</li>
                    <li>• Scalability design</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Wifi className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Wireless Solutions</h3>
                  <p className="text-gray-300 mb-4">Enterprise-grade wireless networks with seamless connectivity.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• WiFi 6/6E implementation</li>
                    <li>• Access point deployment</li>
                    <li>• Coverage optimization</li>
                    <li>• Guest network setup</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Network Security</h3>
                  <p className="text-gray-300 mb-4">Comprehensive security measures to protect your network infrastructure.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Firewall configuration</li>
                    <li>• Intrusion detection</li>
                    <li>• VPN implementation</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Server className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Infrastructure Setup</h3>
                  <p className="text-gray-300 mb-4">Complete network infrastructure implementation and configuration.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Switch configuration</li>
                    <li>• Router setup</li>
                    <li>• Server integration</li>
                    <li>• Network testing</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Network Monitoring</h3>
                  <p className="text-gray-300 mb-4">24/7 monitoring and management of your network infrastructure.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Performance monitoring</li>
                    <li>• Traffic analysis</li>
                    <li>• Alert management</li>
                    <li>• Capacity planning</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cloud Integration</h3>
                  <p className="text-gray-300 mb-4">Seamless integration with cloud services and hybrid environments.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Cloud connectivity</li>
                    <li>• Hybrid network setup</li>
                    <li>• SD-WAN implementation</li>
                    <li>• Cloud migration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔷</div>
                    <h3 className="text-lg font-bold text-white">Cisco</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔶</div>
                    <h3 className="text-lg font-bold text-white">Juniper</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟢</div>
                    <h3 className="text-lg font-bold text-white">Aruba</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔴</div>
                    <h3 className="text-lg font-bold text-white">Fortinet</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟡</div>
                    <h3 className="text-lg font-bold text-white">Palo Alto</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟣</div>
                    <h3 className="text-lg font-bold text-white">Ubiquiti</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">⚫</div>
                    <h3 className="text-lg font-bold text-white">Meraki</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔵</div>
                    <h3 className="text-lg font-bold text-white">VMware</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Network Solutions Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Up to 50 devices
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Basic monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Standard security
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-6">$1,299<span className="text-lg text-cyan-200">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 500 devices
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced monitoring
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Enterprise security
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom solutions
                    </li>
                  </ul>
                  <button className="w-full bg-white text-cyan-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Large Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400"> pricing</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Unlimited devices
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Advanced security
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      24/7 support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Dedicated team
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                  <div className="text-gray-300">Networks Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Network?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts design and implement a network solution that meets your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NetworkSolutionsPage;
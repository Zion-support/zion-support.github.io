"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Wifi, Zap, Shield, Globe, Smartphone } from "lucide-react";

const FiveGSolutionsPage: React.FC = () => {
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G solutions for businesses. High-speed connectivity, IoT integration, and next-generation network infrastructure." />
        <meta property="og:title" content="5G Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 5G solutions for businesses. High-speed connectivity, IoT integration, and next-generation network infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                {" "}5G Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              real-time data processing, and seamless IoT integration.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Wifi className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Fast Speed</h3>
              <p className="text-gray-300">Up to 10x faster than 4G with ultra-low latency for real-time applications.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Massive IoT</h3>
              <p className="text-gray-300">Connect millions of devices with advanced IoT integration capabilities.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-300">Advanced encryption and security protocols for enterprise-grade protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our 5G Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G implementation services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Network Infrastructure</h3>
              <p className="text-gray-300 mb-4">Complete 5G network design, deployment, and optimization services.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Network planning and design
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Tower and antenna installation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Performance optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <Smartphone className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Applications</h3>
              <p className="text-gray-300 mb-4">5G-enabled mobile apps with real-time capabilities and enhanced performance.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AR/VR applications
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time streaming
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Edge computing integration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <Zap className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">IoT Integration</h3>
              <p className="text-gray-300 mb-4">Connect and manage IoT devices with 5G's massive device capacity.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Device connectivity
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Data analytics
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Remote monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your 5G implementation needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;
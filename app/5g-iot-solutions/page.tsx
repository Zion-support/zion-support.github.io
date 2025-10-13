import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Cpu, Shield, Globe, Zap, Database } from 'lucide-react';

export default function FiveGIoTSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G IoT solutions by Zion Tech Group. Connect, manage, and optimize IoT devices with ultra-reliable 5G networks." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G IoT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect and manage millions of IoT devices with our advanced 5G IoT solutions. 
            Ultra-reliable connectivity, real-time monitoring, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Wifi className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Ultra-Reliable Connectivity</h3>
            <p className="text-gray-300">
              Connect millions of IoT devices with 99.999% reliability and ultra-low latency.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Cpu className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Edge Processing</h3>
            <p className="text-gray-300">
              Process IoT data at the edge for real-time decision making and reduced latency.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Shield className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">End-to-End Security</h3>
            <p className="text-gray-300">
              Secure your IoT ecosystem with advanced encryption and authentication protocols.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Globe className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Global Scale</h3>
            <p className="text-gray-300">
              Deploy IoT solutions across multiple regions with consistent performance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
            <p className="text-gray-300">
              Monitor and analyze IoT data streams in real-time for instant insights.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Database className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Data Management</h3>
            <p className="text-gray-300">
              Efficiently store, process, and manage massive volumes of IoT data.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect Your IoT Devices?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to learn how our 5G IoT solutions can transform your connected ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

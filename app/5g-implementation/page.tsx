'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

export default function FiveGImplementation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services for enterprise networks" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Implementation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive 5G network implementation services for enterprise-grade connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Wifi className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Network Planning</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Strategic 5G network planning and design for optimal coverage and performance
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Coverage optimization</li>
              <li>• Performance tuning</li>
              <li>• Capacity planning</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Ultra-Low Latency</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Ultra-low latency 5G networks for real-time applications and mission-critical operations
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• &lt; 1 ms latency</li>
              <li>• Real-time apps</li>
              <li>• Mission critical</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">24/7 Monitoring</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Continuous monitoring of 5G network performance with real-time analytics and alerts
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Network monitoring</li>
              <li>• Performance analytics</li>
              <li>• Proactive maintenance</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-8">Ready to implement 5G for your organization?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

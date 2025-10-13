import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, CheckCircle, Clock, Users, Shield, Zap } from 'lucide-react';

export default function FiveGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G implementation services by Zion Tech Group. End-to-end 5G network deployment, optimization, and management solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Implementation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete 5G network implementation services from planning to deployment. 
            Expert guidance, proven methodologies, and comprehensive support.
          </p>
        </div>

        {/* Implementation Process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Settings className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Planning & Design</h3>
            <p className="text-gray-300">
              Comprehensive network planning and architecture design for optimal 5G deployment.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Deployment</h3>
            <p className="text-gray-300">
              Professional installation and configuration of 5G infrastructure and equipment.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Clock className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Testing & Optimization</h3>
            <p className="text-gray-300">
              Rigorous testing and performance optimization to ensure optimal 5G performance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Training & Support</h3>
            <p className="text-gray-300">
              Comprehensive training and ongoing support for your 5G network operations team.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Shield className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Enterprise-Grade Security</h3>
            <p className="text-gray-300">
              Implement robust security measures and compliance standards for your 5G network infrastructure.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Zap className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Performance Optimization</h3>
            <p className="text-gray-300">
              Optimize your 5G network for maximum performance, reliability, and efficiency.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement 5G?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our implementation experts to start your 5G transformation journey.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
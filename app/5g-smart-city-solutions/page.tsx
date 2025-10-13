import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Wifi, Shield, Globe, Zap, Users } from 'lucide-react';

export default function FiveGSmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G smart city solutions by Zion Tech Group. Transform urban infrastructure with intelligent 5G-powered smart city technologies." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">5G Smart City Solutions</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform urban infrastructure with intelligent 5G-powered smart city technologies. 
            Create sustainable, efficient, and connected cities of the future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Building className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Smart Infrastructure</h3>
            <p className="text-gray-300">
              Deploy intelligent infrastructure systems powered by 5G connectivity.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Wifi className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Connected Services</h3>
            <p className="text-gray-300">
              Enable seamless connectivity for all smart city services and applications.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Urban Security</h3>
            <p className="text-gray-300">
              Implement comprehensive security systems for smart city environments.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Globe className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Environmental Monitoring</h3>
            <p className="text-gray-300">
              Monitor and manage environmental factors with real-time 5G sensors.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Energy Management</h3>
            <p className="text-gray-300">
              Optimize energy consumption and distribution across smart city infrastructure.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Citizen Services</h3>
            <p className="text-gray-300">
              Deliver enhanced digital services to citizens through 5G connectivity.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Smart Cities?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our smart city experts to transform your urban infrastructure with 5G technology.
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
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight, Settings, CheckCircle, Clock, Users, Shield, Zap } from 'lucide-react';

export default function FiveGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Complete 5 G implementation services by Zion Tech Group. End-to-end 5 G network deployment, optimization, and management solutions."container mx-auto px-4 py-16"text-center mb-16"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"/contact"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/demo"
              className="mb-16">
          <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-white mb-3">Planning & Assessment</h3>
              <p className="text-center">
              <div className="text-2 xl font-bold text-white">2</span>
              </div>
              <h3 className="text-gray-300">
                Custom 5 G network design tailored to your specific needs and use cases.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-white mb-3">Deployment & Testing</h3>
              <p className="text-center">
              <div className="text-2 xl font-bold text-white">4</span>
              </div>
              <h3 className="text-gray-300">
                Ongoing optimization and 24/7 support to ensure peak performance.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Settings className="text-xl font-semibold text-white mb-3">End-to-End Solutions</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="text-xl font-semibold text-white mb-3">Proven Methodologies</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Clock className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Users className="text-xl font-semibold text-white mb-3">Expert Team</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Shield className="text-xl font-semibold text-white mb-3">Security First</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-12 border border-white/20">
          <h2 className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your 5 G implementation needs and get a customized solution.
          </p>
          <Link
            to="
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105" />
          </Link>

        </div>
      </div>
    </div>
  );


import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Eye, Users, Globe } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Our commitment to web accessibility and inclusive design" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Accessibility First
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures our solutions work for all users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">WCAG 2.1 AA Compliant</h3>
              <p className="text-gray-300">All our interfaces meet the highest accessibility standards</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Screen Reader Compatible</h3>
              <p className="text-gray-300">Optimized for assistive technologies</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visual Accessibility</h3>
              <p className="text-gray-300">High contrast and customizable interfaces</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Learn More About Our Commitment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

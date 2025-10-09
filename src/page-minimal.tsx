import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight } from 'lucide-react';

const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'
};

export default function MinimalHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent text-cyan-400 px-8 py-3 rounded-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors flex items-center justify-center"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
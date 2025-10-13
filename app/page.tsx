import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services."container mx-auto px-4 py-16"text-center mb-16"text-6 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"/contact"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/services"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
            <p className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-gray-300">
              Comprehensive security solutions to protect your digital assets.
            </p>
          </div>
          <div className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
            <p className=">
              Scalable cloud solutions for enterprise needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

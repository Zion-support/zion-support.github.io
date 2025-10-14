import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Users } from 'lucide-react';
import { Server } from 'lucide-react';
import { Cloud } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions and IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-blue-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leading provider of AI-powered enterprise solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Our Solutions
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions for your business needs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your data.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Computing</h3>
              <p className="text-gray-300">
                Scalable cloud infrastructure and migration services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;

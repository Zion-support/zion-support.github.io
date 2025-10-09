import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Brain, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">50+ skilled professionals</p>
          </div>
          <div className="text-center">
            <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions</h3>
            <p className="text-gray-300">Tailored to your needs</p>
          </div>
          <div className="text-center">
            <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-300">Enterprise-grade security</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
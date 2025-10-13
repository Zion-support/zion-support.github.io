import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Database, ArrowRight, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const SoftwareDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Software Development - Zion Tech Group"
        description="Professional software development services including web applications, mobile apps, and custom software solutions."
        keywords="software development, web development, mobile development, custom software, application development"
        canonical="https://ziontechgroup.com/software-development"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Software Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Custom software solutions tailored to your business needs. From web applications to mobile apps, 
            we deliver high-quality software that drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
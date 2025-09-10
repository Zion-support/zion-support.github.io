import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Real-world success stories and case studies showcasing our technology solutions"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our technology solutions have transformed businesses across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">AI</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">AI Healthcare Platform</h3>
            <p className="text-gray-300 mb-6">
              Implemented AI-powered diagnostic tools that improved patient outcomes by 40% and reduced diagnosis time by 60%.
            </p>
            <div className="flex items-center text-blue-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">IoT</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Smart Manufacturing</h3>
            <p className="text-gray-300 mb-6">
              Deployed IoT sensors and analytics to optimize production lines, resulting in 25% efficiency improvement.
            </p>
            <div className="flex items-center text-green-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">Cloud</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Cloud Migration</h3>
            <p className="text-gray-300 mb-6">
              Migrated legacy systems to cloud infrastructure, reducing costs by 35% and improving scalability.
            </p>
            <div className="flex items-center text-purple-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">Data</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-6">
              Implemented advanced analytics platform that provided real-time insights and improved decision making.
            </p>
            <div className="flex items-center text-orange-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">ML</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Developed ML models for predictive maintenance, reducing downtime by 50% and maintenance costs by 30%.
            </p>
            <div className="flex items-center text-pink-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">AR</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Augmented Reality</h3>
            <p className="text-gray-300 mb-6">
              Created AR training solutions that improved employee onboarding and reduced training time by 45%.
            </p>
            <div className="flex items-center text-teal-400 font-semibold">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with our proven technology solutions
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, technology, and digital transformation." />
        <meta name="keywords" content="case studies, projects, success stories, AI, technology, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">E-commerce AI Platform</h3>
              <p className="text-gray-300 mb-6">
                Built an AI-powered recommendation engine that increased sales by 40% for a major e-commerce retailer.
              </p>
              <div className="space-y-2 text-gray-300 mb-6">
                <div>• 40% increase in sales</div>
                <div>• 60% improvement in user engagement</div>
                <div>• 3-month implementation timeline</div>
              </div>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read Full Case Study →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Healthcare Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Developed a comprehensive data analytics platform for a healthcare provider to improve patient outcomes.
              </p>
              <div className="space-y-2 text-gray-300 mb-6">
                <div>• 25% reduction in readmission rates</div>
                <div>• 50% faster diagnosis times</div>
                <div>• HIPAA compliant solution</div>
              </div>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read Full Case Study →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Financial Services Automation</h3>
              <p className="text-gray-300 mb-6">
                Implemented AI-driven automation for a financial services company, reducing processing time by 70%.
              </p>
              <div className="space-y-2 text-gray-300 mb-6">
                <div>• 70% reduction in processing time</div>
                <div>• 90% accuracy in fraud detection</div>
                <div>• $2M annual cost savings</div>
              </div>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read Full Case Study →
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;

'use client';
import React from 'react';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Tutorials</span> & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how to leverage AI and IT solutions with our comprehensive 
            tutorials and step-by-step guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">AI Basics</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Getting Started with AI
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn the fundamentals of artificial intelligence and how to 
                implement AI solutions in your business.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">15 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Cybersecurity</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Security Best Practices
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Essential cybersecurity practices to protect your business 
                from common threats and vulnerabilities.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">20 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Cloud Computing</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Cloud Migration Guide
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Step-by-step guide to migrating your infrastructure to the cloud 
                with minimal downtime.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">25 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Data Analytics</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Data Visualization
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn how to create compelling data visualizations and 
                interactive dashboards for better insights.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">18 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Web Development</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Modern Web Apps
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build responsive and performant web applications using 
                modern frameworks and best practices.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">30 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">DevOps</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                CI/CD Pipeline Setup
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Set up automated deployment pipelines for faster and 
                more reliable software delivery.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">22 min read</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read tutorial →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Need More Help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our experts are here to help 
            you with personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;

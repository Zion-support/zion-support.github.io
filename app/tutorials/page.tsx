<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tutorials & Learning Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900-via-purple-900to-slate-900">
        <div className="container mx-autopx-4-py-16">
          <div className="text-centermb-16">
            <h1 className="text-4 xl md:text-6 xl font-boldtext-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent"  />Tutorials & Learning Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Tutorials */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">AI Tutorials</h3>
              <p className="text-gray-300 mb-4">
                Learn artificial intelligence from basics to advanced implementations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Machine Learning Fundamentals</li>
                <li>• Deep Learning with TensorFlow</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Applications</li>
=======
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
            {/* AI Tutorials */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >AI Tutorials</h3>
              <p className="text-gray-300-mb-4" />
                Learn artificial intelligence from basics to advanced implementations.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• Machine Learning Fundamentals</li>
                <li  >• Deep Learning with TensorFlow</li>
                <li  >• Natural Language Processing</li>
                <li  >• Computer Vision Applications</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>

            {/* IT Infrastructure */}
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Master cloud computing, DevOps, and system administration.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Architecture Design</li>
                <li>• Container Orchestration</li>
                <li>• CI/CD Pipeline Setup</li>
                <li>• Security Best Practices</li>
=======
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >IT Infrastructure</h3>
              <p className="text-gray-300-mb-4" />
                Master cloud computing, DevOps, and system administration.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• Cloud Architecture Design</li>
                <li  >• Container Orchestration</li>
                <li  >• CI/CD Pipeline Setup</li>
                <li  >• Security Best Practices</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>

            {/* Web Development */}
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 mb-4">
                Build modern, scalable web applications with cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React & Next.js Mastery</li>
                <li>• Full-Stack Development</li>
                <li>• API Design & Integration</li>
                <li>• Performance Optimization</li>
=======
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >Web Development</h3>
              <p className="text-gray-300-mb-4" />
                Build modern, scalable web applications with cutting-edge technologies.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• React & Next.js Mastery</li>
                <li  >• Full-Stack Development</li>
                <li  >• API Design & Integration</li>
                <li  >• Performance Optimization</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>

            {/* Data Science */}
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Data Science</h3>
              <p className="text-gray-300 mb-4">
                Extract insights from data using advanced analytics and visualization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Data Analysis with Python</li>
                <li>• Statistical Modeling</li>
                <li>• Data Visualization</li>
                <li>• Big Data Processing</li>
=======
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >Data Science</h3>
              <p className="text-gray-300-mb-4" />
                Extract insights from data using advanced analytics and visualization.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• Data Analysis with Python</li>
                <li  >• Statistical Modeling</li>
                <li  >• Data Visualization</li>
                <li  >• Big Data Processing</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>

            {/* Cybersecurity */}
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Protect systems and data with comprehensive security strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Threat Detection & Response</li>
                <li>• Penetration Testing</li>
                <li>• Security Architecture</li>
                <li>• Compliance & Governance</li>
=======
            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >Cybersecurity</h3>
              <p className="text-gray-300-mb-4" />
                Protect systems and data with comprehensive security strategies.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• Threat Detection & Response</li>
                <li  >• Penetration Testing</li>
                <li  >• Security Architecture</li>
                <li  >• Compliance & Governance</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>

            {/* Mobile Development */}
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300 mb-4">
                Create cross-platform mobile applications with modern frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React Native Development</li>
                <li>• Flutter Applications</li>
                <li>• Native iOS & Android</li>
                <li>• Mobile UI/UX Design</li>
=======
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40-transition-all duration-300">
              <h3 className="text-2 xl font-boldtext-white mb-4"  >Mobile Development</h3>
              <p className="text-gray-300-mb-4" />
                Create cross-platform mobile applications with modern frameworks.
              </p>
              <ul className="space-y-2-text-smtext-gray-400" />
                <li  >• React Native Development</li>
                <li  >• Flutter Applications</li>
                <li  >• Native iOS & Android</li>
                <li  >• Mobile UI/UX Design</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </ul>
            </div>
          </div>

<<<<<<< HEAD
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Browse All Tutorials
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Get Personalized Recommendations
=======
          <div className="text-centermt-16">
            <h2 className="text-3 xl font-boldtext-white mb-6"  >Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 max-w-2-xlmx-auto" />
              Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4-justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-600-transition-all duration-300"  />Browse All Tutorials
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10-transition-all duration-300"  />Get Personalized Recommendations
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;
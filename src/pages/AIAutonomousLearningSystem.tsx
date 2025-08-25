import React from 'react';
import { SEOHead } from '../components/SEOHead';

const AIAutonomousLearningSystem: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Learning System | Zion Tech Group"
        description="Revolutionary AI autonomous learning system. Intelligent education, personalized learning paths, and continuous improvement powered by artificial intelligence."
        keywords="AI autonomous learning system, autonomous learning, AI education, personalized learning, intelligent learning, continuous learning"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-learning-system"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Learning System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform education with our AI Autonomous Learning System. 
              Intelligent learning paths, personalized education, and continuous improvement without limits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Intelligent Learning Revolution
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Learning System represents the future of education, 
                combining advanced AI with personalized learning to deliver exceptional educational outcomes.
              </p>
              <p className="text-gray-300 text-lg">
                From curriculum adaptation to student progress tracking, our system operates autonomously, 
                ensuring every learner receives personalized attention and optimal learning experiences.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Learning Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Personalized Learning Paths
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Adaptive Curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Progress Tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              System Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Adaptive Learning</h3>
                <p className="text-gray-400">Personalized learning paths</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Progress Tracking</h3>
                <p className="text-gray-400">Real-time learning analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
                <p className="text-gray-400">Continuous system improvement</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutonomousLearningSystem;
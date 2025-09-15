import React from 'react';
import Link from 'next/link';

const AITutorialsMastery2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 py-12 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-cyan-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-teal-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
            <span className="text-blue-300 font-semibold">NEW: AI Mastery Program</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Tutorials Mastery
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Master artificial intelligence from beginner to expert level. 
            Comprehensive courses covering machine learningdeep learningNLPcomputer visionand more.
          </p>
        </div>

        {/* Course highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Machine Learning</h3>
            </div>
            <p className="text-blue-200 text-sm">
              From fundamentals to advanced algorithms and model optimization
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Deep Learning</h3>
            </div>
            <p className="text-purple-200 text-sm">
              Master neural networksCNNsRNNsand Transformers
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">NLP & Computer Vision</h3>
            </div>
            <p className="text-green-200 text-sm">
              Build advanced AI applications with BERTGPTand CV models
            </p>
          </div>
        </div>

        {/* Learning stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100,000+</div>
            <div className="text-sm text-gray-300">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">95%</div>
            <div className="text-sm text-gray-300">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Link href="/ai-tutorials-mastery-2025">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
              Start Learning AI Today
            </button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Join the AI revolution with expert-guided tutorials and hands-on projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITutorialsMastery2025PromotionBanner;
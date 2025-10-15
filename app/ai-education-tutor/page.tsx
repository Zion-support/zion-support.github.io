import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIEducationTutorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Education Tutor - Zion Tech Group</title>
        <meta name="description" content="Personalized AI Education Tutor for adaptive learning. AI-powered tutoring system that adapts to individual learning styles and pace." />
        <meta name="keywords" content="AI education tutor, personalized learning, adaptive education, AI tutoring, educational AI, learning management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-education-tutor" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Education Tutor
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Personalized AI-powered tutoring system that adapts to individual learning styles and pace
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Adaptive Learning</h2>
                <p className="text-gray-300 mb-4">
                  AI-powered adaptive learning that adjusts to each student's pace, learning style, and comprehension level.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Personalized lesson plans</li>
                  <li>• Learning style assessment</li>
                  <li>• Progress tracking</li>
                  <li>• Difficulty adjustment</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Interactive Tutoring</h2>
                <p className="text-gray-300 mb-4">
                  Engaging interactive tutoring sessions with AI that provides real-time feedback and guidance.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time Q&A</li>
                  <li>• Step-by-step guidance</li>
                  <li>• Concept explanations</li>
                  <li>• Practice exercises</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Curriculum Design</h3>
                  <p className="text-gray-300 text-sm">AI-generated personalized curriculum and learning paths</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Assessment</h3>
                  <p className="text-gray-300 text-sm">Intelligent assessment and evaluation of student progress</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Collaborative Learning</h3>
                  <p className="text-gray-300 text-sm">AI-facilitated group learning and peer interaction</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Education Tutor
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
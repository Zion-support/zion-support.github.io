import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default function AITutorialsMastery2025() {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI Tutorials Mastery 2025 - Complete Learning Path"
        description="Master AI implementation with our comprehensive tutorials. From beginner to expert level, learn quantum computing, neural networks, and autonomous systems with hands-on projects."
        keywords={[
          'AI tutorials 2025',
          'AI learning path',
          'quantum computing tutorial',
          'neural networks tutorial',
          'AI implementation guide',
          'machine learning mastery',
          'AI certification',
          'AI training program',
          'artificial intelligence course'
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Tutorials
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Mastery 2025
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master artificial intelligence from fundamentals to advanced implementations. 
                Complete learning path with hands-on projects and real-world applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/ai-tutorials-mastery-2025#tutorials"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Start Learning
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get Certified
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <section id="tutorials" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete AI Learning Path
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Structured curriculum designed to take you from beginner to AI expert
              </p>
            </div>

            <div className="space-y-8">
              {/* Level 1 - Fundamentals */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Fundamentals</h3>
                    <p className="text-gray-300">Beginner Level - 4 weeks</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Introduction to AI</h4>
                    <p className="text-sm text-gray-300 mb-3">Understanding artificial intelligence concepts and history</p>
                    <div className="text-xs text-green-400">Duration: 2 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Machine Learning Basics</h4>
                    <p className="text-sm text-gray-300 mb-3">Supervised, unsupervised, and reinforcement learning</p>
                    <div className="text-xs text-green-400">Duration: 3 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Python for AI</h4>
                    <p className="text-sm text-gray-300 mb-3">Essential Python libraries and tools</p>
                    <div className="text-xs text-green-400">Duration: 4 hours</div>
                  </div>
                </div>
              </div>

              {/* Level 2 - Intermediate */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Neural Networks & Deep Learning</h3>
                    <p className="text-gray-300">Intermediate Level - 6 weeks</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Neural Network Architecture</h4>
                    <p className="text-sm text-gray-300 mb-3">Building and training neural networks from scratch</p>
                    <div className="text-xs text-blue-400">Duration: 5 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">CNN & RNN</h4>
                    <p className="text-sm text-gray-300 mb-3">Convolutional and Recurrent Neural Networks</p>
                    <div className="text-xs text-blue-400">Duration: 6 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Transfer Learning</h4>
                    <p className="text-sm text-gray-300 mb-3">Leveraging pre-trained models for your projects</p>
                    <div className="text-xs text-blue-400">Duration: 4 hours</div>
                  </div>
                </div>
              </div>

              {/* Level 3 - Advanced */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Advanced AI & Quantum Computing</h3>
                    <p className="text-gray-300">Advanced Level - 8 weeks</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Quantum Machine Learning</h4>
                    <p className="text-sm text-gray-300 mb-3">Quantum algorithms for machine learning problems</p>
                    <div className="text-xs text-purple-400">Duration: 8 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Autonomous Systems</h4>
                    <p className="text-sm text-gray-300 mb-3">Building self-managing AI systems</p>
                    <div className="text-xs text-purple-400">Duration: 10 hours</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">AI Ethics & Safety</h4>
                    <p className="text-sm text-gray-300 mb-3">Responsible AI development and deployment</p>
                    <div className="text-xs text-purple-400">Duration: 6 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hands-on Projects Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hands-on Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Apply your knowledge with real-world projects and build your AI portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Build a comprehensive dashboard that predicts business metrics with 95% accuracy using machine learning.
                </p>
                <div className="text-sm text-green-400 font-semibold">Difficulty: Intermediate</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Neural Interface Simulator</h3>
                <p className="text-gray-300 mb-4">
                  Create a brain-computer interface simulation that processes neural signals in real-time.
                </p>
                <div className="text-sm text-blue-400 font-semibold">Difficulty: Advanced</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quantum AI Optimizer</h3>
                <p className="text-gray-300 mb-4">
                  Develop a quantum-inspired optimization algorithm that solves complex business problems.
                </p>
                <div className="text-sm text-purple-400 font-semibold">Difficulty: Expert</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Certified in AI Mastery
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Earn industry-recognized certifications that validate your AI expertise
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">AI Fundamentals Certificate</h3>
                <p className="text-gray-300 mb-4">Complete Level 1 curriculum</p>
                <div className="text-green-400 font-semibold">Free</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">AI Professional Certificate</h3>
                <p className="text-gray-300 mb-4">Complete Levels 1-2 + 2 projects</p>
                <div className="text-blue-400 font-semibold">$299</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">AI Expert Certificate</h3>
                <p className="text-gray-300 mb-4">Complete all levels + 5 projects</p>
                <div className="text-purple-400 font-semibold">$599</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/ai-tutorials-mastery-2025#tutorials"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
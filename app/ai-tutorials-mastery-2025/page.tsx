import React from 'react';
import SEO from '../../components/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tutorials Mastery 2025 - Master Artificial Intelligence & Machine Learning',
  description: 'Comprehensive AI tutorials and learning resources for 2025. Master machine learning, deep learning, neural networks, and cutting-edge AI technologies with expert guidance.',
  keywords: 'AI tutorials, machine learning course, deep learning, neural networks, AI education, artificial intelligence training, AI mastery',
  openGraph: {
    title: 'AI Tutorials Mastery 2025 - Master AI Technologies',
    description: 'Comprehensive AI tutorials and learning resources for mastering artificial intelligence in 2025.',
    type: 'website',
    images: ['/images/ai-tutorials-mastery-2025.jpg'],
  },
};

export default function AITutorialsMastery2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Tutorials Mastery 2025 - Master AI Technologies"
        description="Comprehensive AI tutorials and learning resources for mastering artificial intelligence in 2025."
        keywords="AI tutorials, machine learning course, deep learning, neural networks, AI education"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Tutorials Mastery
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Master the most advanced AI technologies with our comprehensive tutorials. 
            From beginner to expert level, transform your understanding of artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Start Learning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Master AI Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning Fundamentals */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning Fundamentals</h3>
              <p className="text-gray-300 mb-6">
                Learn the core concepts of machine learning, from supervised and unsupervised learning to advanced algorithms and model optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold">Beginner</span>
                <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>

            {/* Deep Learning & Neural Networks */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Learning & Neural Networks</h3>
              <p className="text-gray-300 mb-6">
                Master deep learning architectures, CNNs, RNNs, Transformers, and advanced neural network techniques for complex problem solving.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">Intermediate</span>
                <button className="text-pink-400 hover:text-pink-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">
                Build advanced NLP systems with Transformers, BERT, GPT models, and learn to create conversational AI applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">Advanced</span>
                <button className="text-teal-400 hover:text-teal-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300 mb-6">
                Master image recognition, object detection, segmentation, and advanced computer vision techniques using state-of-the-art models.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-400 font-semibold">Intermediate</span>
                <button className="text-orange-400 hover:text-orange-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>

            {/* Reinforcement Learning */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reinforcement Learning</h3>
              <p className="text-gray-300 mb-6">
                Learn to build intelligent agents that learn through interaction, mastering Q-learning, policy gradients, and multi-agent systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">Advanced</span>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>

            {/* AI Ethics & Responsible AI */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Ethics & Responsible AI</h3>
              <p className="text-gray-300 mb-6">
                Understand the ethical implications of AI, bias mitigation, fairness, transparency, and building responsible AI systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-semibold">All Levels</span>
                <button className="text-orange-400 hover:text-orange-300 transition-colors">
                  Start Course →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Your Learning Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Foundation</h3>
              <p className="text-gray-300">Build strong fundamentals in mathematics, programming, and AI concepts</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Core Skills</h3>
              <p className="text-gray-300">Master machine learning, deep learning, and neural networks</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Specialization</h3>
              <p className="text-gray-300">Choose your focus area: NLP, Computer Vision, or Reinforcement Learning</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mastery</h3>
              <p className="text-gray-300">Build real-world projects and become an AI expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Start Your AI Mastery Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join over 100,000 students who have transformed their careers with our comprehensive AI education program.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Preview Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIEducationTutorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Education Tutor - Zion Tech Group</title>
        <meta name="description" content="Personalized AI-powered education tutor for students and educators. Adaptive learning, intelligent tutoring, and personalized educational content delivery." />
        <meta name="keywords" content="AI education tutor, personalized learning, adaptive education, intelligent tutoring, educational AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-education-tutor" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Education Tutor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform education with our intelligent AI tutor. Provide personalized learning experiences, 
              adaptive content delivery, and intelligent assessment for students of all ages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalized Learning</h3>
              <p className="text-gray-300">
                Adapt to each student's learning style, pace, and preferences for optimal educational outcomes.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-4">Content Generation</h3>
              <p className="text-gray-300">
                Create customized educational content, quizzes, and learning materials for any subject.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-300">
                Monitor student progress and provide detailed analytics for educators and parents.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">❓</div>
              <h3 className="text-xl font-semibold text-white mb-4">Intelligent Q&A</h3>
              <p className="text-gray-300">
                Answer student questions instantly with detailed explanations and examples.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Adaptive Assessment</h3>
              <p className="text-gray-300">
                Create dynamic assessments that adjust difficulty based on student performance.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Collaborative Learning</h3>
              <p className="text-gray-300">
                Facilitate group learning and peer collaboration with AI-powered tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Revolutionize Education?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
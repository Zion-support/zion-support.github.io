import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AIEducationTutorPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="AI Education Tutor - Zion Tech Group"
        description="Personalized AI-powered education tutor providing adaptive learning, instant feedback, and customized study plans for students of all ages."
        keywords="AI education tutor, personalized learning, adaptive education, online tutoring, educational technology, e-learning"
        canonicalUrl="https://ziontechgroup.com/ai-education-tutor"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI Education Tutor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalized learning experience with AI-powered tutoring, adaptive curriculum, and instant feedback for students of all ages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Personalized Learning</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Adaptive curriculum based on learning style
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Individual progress tracking
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Customized study plans
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Difficulty level adjustment
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Learning pace optimization
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Interactive Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Real-time Q&A sessions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Instant feedback and explanations
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Interactive exercises and quizzes
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Visual learning aids
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Gamified learning experience
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Subjects Covered</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Mathematics</h3>
                <p className="text-gray-300">Algebra, Calculus, Geometry, Statistics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Science</h3>
                <p className="text-gray-300">Physics, Chemistry, Biology, Earth Science</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">Languages</h3>
                <p className="text-gray-300">English, Spanish, French, German</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Programming</h3>
                <p className="text-gray-300">Python, JavaScript, Java, C++</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-education-tutor"
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300"
            >
              Start Learning
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
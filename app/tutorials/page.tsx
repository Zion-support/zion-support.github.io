import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn with our comprehensive tutorials on AI, web development, cloud computing, and more. Step-by-step guides to master modern technology." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, web development, cloud computing, programming guides" />
        <link rel="canonical" href="https://ziontechgroup.com/tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Tutorials & Learning
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master modern technology with our comprehensive tutorials. 
              Learn AI, web development, cloud computing, and more with step-by-step guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Learn the fundamentals of AI, machine learning, and deep learning. 
                Build intelligent applications from scratch.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Introduction to AI Concepts</p>
                <p>• Machine Learning Basics</p>
                <p>• Deep Learning with TensorFlow</p>
                <p>• Natural Language Processing</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 mb-6">
                Master modern web development with React, Next.js, and the latest frameworks. 
                Build responsive, fast applications.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• React Fundamentals</p>
                <p>• Next.js Full-Stack Development</p>
                <p>• TypeScript for Web Apps</p>
                <p>• API Development</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-300 mb-6">
                Learn cloud platforms, deployment strategies, and infrastructure management. 
                Scale your applications globally.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• AWS Fundamentals</p>
                <p>• Azure Cloud Services</p>
                <p>• Docker & Kubernetes</p>
                <p>• Serverless Architecture</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300 mb-6">
                Build cross-platform mobile apps with React Native and Flutter. 
                Create native experiences for iOS and Android.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• React Native Basics</p>
                <p>• Flutter Development</p>
                <p>• Mobile UI/UX Design</p>
                <p>• App Store Deployment</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Master data analysis, visualization, and business intelligence. 
                Turn data into actionable insights.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Python for Data Science</p>
                <p>• SQL & Database Design</p>
                <p>• Data Visualization</p>
                <p>• Business Intelligence</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Learn security best practices, threat detection, and secure coding. 
                Protect your applications and data.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Security Fundamentals</p>
                <p>• Secure Coding Practices</p>
                <p>• Threat Detection</p>
                <p>• Compliance & Auditing</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Beginner Path</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-300">Introduction to Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Web Development Basics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-300">Database Fundamentals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span className="text-gray-300">Deployment & Hosting</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Advanced Path</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-300">AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Cloud Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-300">Microservices & DevOps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span className="text-gray-300">Enterprise Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are advancing their careers with our 
              comprehensive tutorials and hands-on projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/blog" 
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;
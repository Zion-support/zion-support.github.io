import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, Users, TrendingUp, BookOpen, Video, Code, Database } from 'lucide-react';

export const metadata = {
  title: 'AI Interactive Learning Hub 2025 - Master AI Technologies',
  description: 'Interactive learning platform for AI mastery. Hands-on tutorials, real-world projects, and cutting-edge AI technologies. Transform your skills with our comprehensive AI learning ecosystem.',
  keywords: ['AI Learning', 'Interactive Tutorials', 'AI Mastery', 'Hands-on Projects', 'AI Education', 'Machine Learning', 'Deep Learning', 'AI Skills']
};

export default function AIInteractiveLearningHub2025() {
  const learningModules = [
    {
      title: 'AI Fundamentals Mastery',
      description: 'Master the core concepts of artificial intelligence with interactive modules',
      icon: Brain,
      duration: '4 weeks',
      level: 'Beginner',
      features: ['Interactive coding challenges', 'Real-time feedback', 'Progress tracking', 'Expert mentorship']
    },
    {
      title: 'Machine Learning Deep Dive',
      description: 'Advanced machine learning algorithms and implementation strategies',
      icon: Zap,
      duration: '6 weeks',
      level: 'Intermediate',
      features: ['Hands-on projects', 'Industry case studies', 'Model optimization', 'Deployment strategies']
    },
    {
      title: 'Neural Networks & Deep Learning',
      description: 'Build and deploy sophisticated neural network architectures',
      icon: Target,
      duration: '8 weeks',
      level: 'Advanced',
      features: ['CNN architectures', 'RNN implementations', 'Transfer learning', 'Model interpretability']
    },
    {
      title: 'AI in Production',
      description: 'Deploy AI models at scale with enterprise-grade infrastructure',
      icon: Database,
      duration: '5 weeks',
      level: 'Expert',
      features: ['MLOps pipeline', 'Model monitoring', 'A/B testing', 'Performance optimization']
    }
  ];

  const interactiveFeatures = [
    {
      title: 'Live Coding Environment',
      description: 'Code directly in your browser with real-time AI assistance',
      icon: Code
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides from industry experts',
      icon: Video
    },
    {
      title: 'Community Learning',
      description: 'Collaborate with peers and learn from the global AI community',
      icon: Users
    },
    {
      title: 'Progress Analytics',
      description: 'Track your learning journey with detailed analytics and insights',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AI Interactive Learning Hub 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Master AI technologies through hands-on, interactive learning experiences. 
              Transform from beginner to AI expert with our comprehensive learning ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#learning-modules"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#interactive-features"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section id="learning-modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Learning Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning paths designed by AI experts to take you from beginner to advanced practitioner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningModules.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6">
                  <module.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {module.duration}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {module.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="interactive-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Interactive Learning Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and technologies that make learning AI engaging and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of learners who have transformed their careers with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
                  <p className="text-gray-600">Active Learners</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">300%</h3>
                  <p className="text-gray-600">Average Salary Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Master AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the AI revolution and transform your career with our interactive learning platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-innovation-hub-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore More AI Content
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Zap } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorialCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Learn the fundamentals of AI and machine learning',
      icon: <Zap className="w-6 h-6" />,
      tutorials: [
        {
          title: 'Introduction to Machine Learning',
          duration: '45 min',
          level: 'Beginner',
          description: 'Get started with machine learning concepts and applications'
        },
        {
          title: 'Building Your First AI Model',
          duration: '2 hours',
          level: 'Intermediate',
          description: 'Step-by-step guide to creating your first AI model'
        },
        {
          title: 'Advanced Deep Learning',
          duration: '3 hours',
          level: 'Advanced',
          description: 'Deep dive into neural networks and advanced techniques'
        }
      ]
    },
    {
      title: 'Web Development',
      description: 'Master modern web development technologies',
      icon: <Code className="w-6 h-6" />,
      tutorials: [
        {
          title: 'React Fundamentals',
          duration: '1.5 hours',
          level: 'Beginner',
          description: 'Learn the basics of React development'
        },
        {
          title: 'TypeScript for React',
          duration: '2 hours',
          level: 'Intermediate',
          description: 'Add type safety to your React applications'
        },
        {
          title: 'Full-Stack Development',
          duration: '4 hours',
          level: 'Advanced',
          description: 'Build complete full-stack applications'
        }
      ]
    },
    {
      title: 'Cloud Computing',
      description: 'Explore cloud platforms and services',
      icon: <BookOpen className="w-6 h-6" />,
      tutorials: [
        {
          title: 'AWS Basics',
          duration: '1 hour',
          level: 'Beginner',
          description: 'Introduction to Amazon Web Services'
        },
        {
          title: 'Docker & Kubernetes',
          duration: '2.5 hours',
          level: 'Intermediate',
          description: 'Containerization and orchestration'
        },
        {
          title: 'Serverless Architecture',
          duration: '3 hours',
          level: 'Advanced',
          description: 'Build scalable serverless applications'
        }
      ]
    }
  ];

  const benefits = [
    'Learn from industry experts',
    'Hands-on practical exercises',
    'Self-paced learning',
    'Certificate of completion',
    'Community support',
    'Regular updates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI, web development, and cloud computing with our comprehensive tutorials. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, learning, AI, web development, cloud computing, courses, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Tutorials & Learning
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master the latest technologies with our comprehensive tutorials. 
            From AI to web development, we've got you covered.
          </p>
        </div>

        {/* Tutorial Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            {tutorialCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <div key={tutorialIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.level}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        {tutorial.description}
                      </p>

                      <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                        Start Tutorial
                        <Play className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Learn With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of our learning platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are advancing their skills with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Browse All Tutorials
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Get Started Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TutorialsPage;
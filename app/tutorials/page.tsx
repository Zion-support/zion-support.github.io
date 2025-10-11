'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, BookOpen, Play } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Introduction to AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI Basics'
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced ML algorithms and neural networks.',
      level: 'Advanced',
      duration: '4 hours',
      category: 'Machine Learning'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Master cloud computing and infrastructure management.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and best practices.',
      level: 'Beginner',
      duration: '2.5 hours',
      category: 'Security'
    },
    {
      title: 'Data Analytics with Python',
      description: 'Learn data analysis and visualization using Python.',
      level: 'Intermediate',
      duration: '3.5 hours',
      category: 'Data Science'
    },
    {
      title: 'DevOps Best Practices',
      description: 'Modern DevOps practices and CI/CD implementation.',
      level: 'Advanced',
      duration: '4.5 hours',
      category: 'DevOps'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | AI & IT Learning Resources</title>
        <meta name="description" content="Comprehensive tutorials and learning resources for AI, machine learning, cloud computing, and IT solutions. Learn from industry experts." />
        <meta name="keywords" content="tutorials, learning resources, AI education, machine learning, cloud computing, IT training, online courses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learning <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive tutorials and learning resources for AI, machine learning, cloud computing, and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Learn?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your learning journey with our comprehensive tutorials and expert guidance.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;
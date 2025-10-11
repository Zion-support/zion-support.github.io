import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI & ML'
    },
    {
      title: 'Building Your First AI Chatbot',
      description: 'Step-by-step guide to creating an intelligent chatbot using modern AI tools.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'AI Development'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS, Azure, and GCP.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures to protect your applications and data.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Security'
    },
    {
      title: 'Data Analytics with Python',
      description: 'Learn data analysis and visualization using Python and popular libraries.',
      level: 'Beginner',
      duration: '5 hours',
      category: 'Data Science'
    },
    {
      title: 'DevOps and CI/CD Pipelines',
      description: 'Master the art of DevOps and continuous integration/deployment.',
      level: 'Advanced',
      duration: '8 hours',
      category: 'DevOps'
    }
  ];

  const stats = [
    { icon: BookOpen, label: 'Tutorials', value: '50+' },
    { icon: Users, label: 'Students', value: '10K+' },
    { icon: Clock, label: 'Hours', value: '200+' },
    { icon: Star, label: 'Rating', value: '4.9' }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT</title>
        <meta name="description" content="Master AI and IT skills with our comprehensive tutorials and hands-on learning experiences." />
        <meta name="keywords" content="tutorials, AI learning, IT training, machine learning, cloud computing, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master AI and IT skills with our comprehensive tutorials and hands-on learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300">
                Start your learning journey with our expert-curated content
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
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
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                    <span className="text-cyan-400 text-sm font-medium">{tutorial.category}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
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
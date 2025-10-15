import React from 'react';
import { Helmet } from "react-helmet-async";
import { Play, BookOpen, Code, Video, ArrowRight, Clock, Users, Award } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorialCategories = [
    {
      title: 'AI Services',
      description: 'Learn how to implement and use our AI-powered solutions',
      icon: <Code className="w-8 h-8" />,
      tutorials: [
        { title: 'Getting Started with AI Analytics', duration: '15 min', level: 'Beginner' },
        { title: 'Advanced AI Content Generation', duration: '30 min', level: 'Intermediate' },
        { title: 'AI Customer Support Setup', duration: '25 min', level: 'Intermediate' },
        { title: 'AI Cybersecurity Implementation', duration: '45 min', level: 'Advanced' }
      ]
    },
    {
      title: 'IT Services',
      description: 'Master our IT solutions and cloud infrastructure',
      icon: <BookOpen className="w-8 h-8" />,
      tutorials: [
        { title: 'Cloud Migration Guide', duration: '60 min', level: 'Advanced' },
        { title: 'DevOps Best Practices', duration: '40 min', level: 'Intermediate' },
        { title: 'Network Security Setup', duration: '35 min', level: 'Intermediate' },
        { title: 'Web Development Fundamentals', duration: '50 min', level: 'Beginner' }
      ]
    },
    {
      title: 'Micro SAAS',
      description: 'Quick start guides for our micro SAAS solutions',
      icon: <Play className="w-8 h-8" />,
      tutorials: [
        { title: 'Zion AI Video Generator Tutorial', duration: '20 min', level: 'Beginner' },
        { title: 'AI CRM Pro Setup', duration: '25 min', level: 'Intermediate' },
        { title: 'Marketing Automation Guide', duration: '30 min', level: 'Intermediate' },
        { title: 'Financial Analytics Dashboard', duration: '35 min', level: 'Advanced' }
      ]
    },
    {
      title: '5G Solutions',
      description: 'Understanding and implementing 5G technology',
      icon: <Video className="w-8 h-8" />,
      tutorials: [
        { title: '5G Network Planning', duration: '45 min', level: 'Advanced' },
        { title: 'IoT Solutions with 5G', duration: '30 min', level: 'Intermediate' },
        { title: 'Edge Computing Basics', duration: '25 min', level: 'Beginner' },
        { title: 'Smart City Implementation', duration: '50 min', level: 'Advanced' }
      ]
    }
  ];

  const featuredTutorials = [
    {
      title: 'Complete AI Implementation Guide',
      description: 'Step-by-step guide to implementing AI solutions in your business',
      duration: '2 hours',
      level: 'Intermediate',
      views: '12.5k',
      rating: 4.9,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration Masterclass',
      description: 'Everything you need to know about migrating to the cloud',
      duration: '3 hours',
      level: 'Advanced',
      views: '8.2k',
      rating: 4.8,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: '5G Technology Fundamentals',
      description: 'Understanding 5G technology and its applications',
      duration: '1.5 hours',
      level: 'Beginner',
      views: '15.3k',
      rating: 4.9,
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const stats = [
    { number: '150+', label: 'Tutorials Available', icon: <BookOpen className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Instructors', icon: <Users className="w-6 h-6" /> },
    { number: '25k+', label: 'Students Enrolled', icon: <Award className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learning Resources & Guides</title>
        <meta name="description" content="Comprehensive tutorials and learning resources for AI services, IT solutions, micro SAAS, and 5G technology. Master our platform with expert guidance." />
        <meta name="keywords" content="tutorials, learning, guides, AI tutorials, IT tutorials, micro SAAS guides, 5G tutorials, training" />
        <meta property="og:title" content="Tutorials - Zion Tech Group" />
        <meta property="og:description" content="Learn with our comprehensive tutorials and guides" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tutorials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Master our platform with comprehensive tutorials, step-by-step guides, and expert-led training sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#featured"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Learning
                </a>
                <a
                  href="#categories"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section id="featured" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Tutorials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these popular tutorials to get the most out of our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <span>{tutorial.views} views</span>
                        <span className="mx-2">•</span>
                        <span>⭐ {tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <a
                      href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Watch Tutorial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section id="categories" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Tutorial Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore tutorials organized by service category
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutorialCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-6">
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <a
                        key={tutorialIndex}
                        href={`/tutorials/${category.title.toLowerCase().replace(/\s+/g, '-')}/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {tutorial.title}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {tutorial.duration}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {tutorial.level}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who are already mastering our platform with our comprehensive tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
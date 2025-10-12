import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Code, ArrowRight, Clock, Users } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Integration',
      description: 'Learn how to integrate AI solutions into your existing business processes.',
      duration: '45 min',
      level: 'Beginner',
      category: 'AI & Machine Learning',
      video: true,
      thumbnail: '/images/tutorials/ai-integration.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      duration: '60 min',
      level: 'Intermediate',
      category: 'Security',
      video: true,
      thumbnail: '/images/tutorials/cybersecurity.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud.',
      duration: '90 min',
      level: 'Advanced',
      category: 'Cloud Computing',
      video: true,
      thumbnail: '/images/tutorials/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'API Development with Node.js',
      description: 'Build robust APIs using Node.js and modern development practices.',
      duration: '120 min',
      level: 'Intermediate',
      category: 'Development',
      video: false,
      thumbnail: '/images/tutorials/api-development.jpg'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Security', 'Cloud Computing', 'Development', 'DevOps'];

  return (
    <>
      <Helmet>
        <title>Tutorials & Learning Center - Zion Tech Group</title>
        <meta name="description" content="Master AI, IT solutions, and modern technologies with our comprehensive tutorials and learning resources." />
        <meta name="keywords" content="tutorials, learning, AI training, IT education, cloud computing, cybersecurity, programming" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Master</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials, guides, and hands-on learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800/50 text-gray-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/40"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <div className="text-6xl text-cyan-400/50">
                      {tutorial.video ? '🎥' : '📚'}
                    </div>
                    {tutorial.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category}
                      </span>
                      <span className="text-gray-400 text-sm">{tutorial.level}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        1.2k students
                      </span>
                    </div>
                    
                    <Link
                      to={`/tutorials/${tutorial.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group-hover:translate-x-1"
                    >
                      {tutorial.video ? 'Watch Now' : 'Read Guide'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are advancing their skills with our expert-led tutorials.
            </p>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
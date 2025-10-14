import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon, ClockIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI: A Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.',
      duration: '45 minutes',
      difficulty: 'Beginner',
      category: 'AI Solutions',
      instructor: 'Kleber Santos',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'Cloud Migration Step-by-Step',
      description: 'Complete walkthrough of migrating your infrastructure to the cloud with best practices and tips.',
      duration: '1 hour 30 minutes',
      difficulty: 'Intermediate',
      category: 'Cloud Infrastructure',
      instructor: 'Sarah Johnson',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business from threats and vulnerabilities.',
      duration: '1 hour',
      difficulty: 'Beginner',
      category: 'Cybersecurity',
      instructor: 'Michael Chen',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Building Micro SAAS Applications',
      description: 'Learn how to create and deploy micro SAAS solutions that solve specific business problems.',
      duration: '2 hours',
      difficulty: 'Advanced',
      category: 'Micro SAAS',
      instructor: 'Emily Rodriguez',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Master data analysis techniques using Python and popular libraries for business intelligence.',
      duration: '1 hour 45 minutes',
      difficulty: 'Intermediate',
      category: 'Data Analytics',
      instructor: 'David Kim',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 6,
      title: 'DevOps Best Practices',
      description: 'Implement DevOps practices to streamline your development and deployment processes.',
      duration: '1 hour 15 minutes',
      difficulty: 'Intermediate',
      category: 'DevOps',
      instructor: 'Lisa Wang',
      videoUrl: '#',
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  const categories = ['All', 'AI Solutions', 'Cloud Infrastructure', 'Cybersecurity', 'Micro SAAS', 'Data Analytics', 'DevOps'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI, IT & Technology</title>
        <meta name="description" content="Comprehensive tutorials on AI solutions, IT services, cloud infrastructure, cybersecurity, and technology. Learn from industry experts with step-by-step guides." />
        <meta name="keywords" content="AI tutorials, IT tutorials, cloud computing tutorials, cybersecurity tutorials, technology learning, online courses" />
        <meta property="og:title" content="Tutorials - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive tutorials on AI solutions, IT services, cloud infrastructure, cybersecurity, and technology." />
        <meta property="og:url" content="https://ziontechgroup.com/tutorials" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Tutorials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn from industry experts with comprehensive tutorials on AI solutions, IT services, 
            cloud infrastructure, cybersecurity, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Request Custom Training
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Try Interactive Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <h3 className="text-white font-semibold mr-4">Categories:</h3>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <h3 className="text-white font-semibold mr-4">Difficulty:</h3>
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-slate-700 relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{tutorial.instructor}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <PlayIcon className="w-5 h-5" />
                    Start Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Paths</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning paths designed to take you from beginner to expert in your chosen field
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions Path</h3>
              <p className="text-gray-300 mb-6">
                Master artificial intelligence from basics to advanced implementation in business environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">• AI Fundamentals</li>
                <li className="text-gray-300">• Machine Learning</li>
                <li className="text-gray-300">• Deep Learning</li>
                <li className="text-gray-300">• Business Implementation</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Path
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure Path</h3>
              <p className="text-gray-300 mb-6">
                Learn cloud computing from basic concepts to advanced architecture and management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">• Cloud Basics</li>
                <li className="text-gray-300">• AWS/Azure/GCP</li>
                <li className="text-gray-300">• Architecture Design</li>
                <li className="text-gray-300">• Security & Compliance</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Path
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Path</h3>
              <p className="text-gray-300 mb-6">
                Develop expertise in cybersecurity from threat identification to incident response.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">• Security Fundamentals</li>
                <li className="text-gray-300">• Threat Analysis</li>
                <li className="text-gray-300">• Incident Response</li>
                <li className="text-gray-300">• Compliance & Auditing</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Path
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have enhanced their skills with our comprehensive tutorials and learning paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Custom Training
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Try Interactive Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorialsPage;
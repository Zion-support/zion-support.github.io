import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon,
  ClockIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'dev', name: 'Development' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Solutions',
      description: 'Learn the fundamentals of implementing AI solutions in your business.',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure.',
      category: 'cloud',
      duration: '60 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 980,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your business.',
      category: 'security',
      duration: '30 min',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced machine learning techniques and applications.',
      category: 'ai',
      duration: '90 min',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 650,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 5,
      title: 'DevOps with Cloud Platforms',
      description: 'Implementing DevOps practices across different cloud platforms.',
      category: 'dev',
      duration: '75 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 6,
      title: 'Data Security and Compliance',
      description: 'Understanding data security regulations and compliance requirements.',
      category: 'security',
      duration: '50 min',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 1100,
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, cybersecurity, development, training" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tutorials</span> & Learning
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and learning resources. 
              From beginner to advanced, we've got you covered.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <PlayIcon className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {tutorial.difficulty}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{tutorial.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(tutorial.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">
                        {tutorial.rating} ({tutorial.students} students)
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    <PlayIcon className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Fundamentals</h3>
                <p className="text-gray-300 mb-6">
                  Start your AI journey with our comprehensive learning path covering the basics to advanced concepts.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Machine Learning Basics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Deep Learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Natural Language Processing
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Path
                </button>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Mastery</h3>
                <p className="text-gray-300 mb-6">
                  Master cloud computing with our step-by-step learning path for all skill levels.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Cloud Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    DevOps Practices
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Path
                </button>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security Expert</h3>
                <p className="text-gray-300 mb-6">
                  Become a cybersecurity expert with our comprehensive security learning path.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Security Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Threat Detection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                    Compliance & Governance
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Path
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Browse All Tutorials
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Get Learning Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;
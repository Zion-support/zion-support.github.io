import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const TutorialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'cloud', name: 'Cloud Solutions', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'data', name: 'Data Analytics', icon: '📊' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy intelligent chatbots using our AI platform',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '🤖',
      completed: false
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      category: 'cloud',
      duration: '1h 30min',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 890,
      thumbnail: '☁️',
      completed: true
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security concepts and implementation strategies',
      category: 'security',
      duration: '2h 15min',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '🔒',
      completed: false
    },
    {
      id: 4,
      title: 'Data Visualization with Python',
      description: 'Create stunning visualizations and dashboards from your data',
      category: 'data',
      duration: '1h 45min',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 1560,
      thumbnail: '📊',
      completed: false
    },
    {
      id: 5,
      title: 'Mobile App Development Basics',
      description: 'Build your first mobile application using modern frameworks',
      category: 'mobile',
      duration: '3h 20min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 980,
      thumbnail: '📱',
      completed: true
    },
    {
      id: 6,
      title: 'Advanced AI Model Training',
      description: 'Deep dive into training custom AI models for specific use cases',
      category: 'ai',
      duration: '2h 45min',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 420,
      thumbnail: '🧠',
      completed: false
    }
  ];

  const featuredTutorial = {
    title: 'Complete AI Implementation Guide',
    description: 'Master the entire process of implementing AI solutions in your business',
    duration: '4h 30min',
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 3200,
    thumbnail: '🚀',
    features: [
      'Step-by-step implementation',
      'Real-world case studies',
      'Code examples and templates',
      'Best practices and tips',
      'Troubleshooting guide'
    ]
  };

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Learn AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, cybersecurity, and more. Learn from industry experts with hands-on projects and real-world examples." />
        <meta name="keywords" content="tutorials, AI tutorials, cloud computing tutorials, cybersecurity training, data analytics courses, mobile development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Learn with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Expert Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI and IT technologies with our comprehensive tutorial library. 
              From beginner to advanced, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
              >
                Start Learning
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Tutorial */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured Tutorial
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and comprehensive tutorial
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-6xl mb-4">{featuredTutorial.thumbnail}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredTutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredTutorial.description}</p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{featuredTutorial.duration}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(featuredTutorial.difficulty)}`}>
                      {featuredTutorial.difficulty}
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-300">{featuredTutorial.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <UserGroupIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{featuredTutorial.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {featuredTutorial.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Start Tutorial
                  </button>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎥</div>
                    <p className="text-gray-400">Video Tutorial</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duration: {featuredTutorial.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find tutorials that match your interests and skill level
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Tutorials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{tutorial.thumbnail}</div>
                    {tutorial.completed && (
                      <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-1" />
                      {tutorial.students.toLocaleString()} students
                    </span>
                  </div>
                  
                  <button className="w-full py-2 px-4 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center">
                    <PlayIcon className="w-4 h-4 mr-2" />
                    {tutorial.completed ? 'Review' : 'Start Tutorial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already learning with our tutorials. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <BookOpenIcon className="w-5 h-5 mr-2" />
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
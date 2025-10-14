import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ClockIcon,
  UserIcon,
  StarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: AcademicCapIcon },
    { id: 'ai', name: 'AI & Machine Learning', icon: CodeBracketIcon },
    { id: 'cloud', name: 'Cloud Computing', icon: CloudIcon },
    { id: 'security', name: 'Cybersecurity', icon: ShieldCheckIcon },
    { id: 'development', name: 'Development', icon: CogIcon }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      duration: '2 hours',
      level: 'beginner',
      category: 'ai',
      rating: 4.8,
      students: 1250,
      instructor: 'Kleber Santos',
      thumbnail: '/images/tutorials/ai-basics.jpg',
      videoUrl: '/videos/ai-basics.mp4',
      tags: ['AI', 'Machine Learning', 'Python', 'Beginners']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup with AWS',
      description: 'Master AWS cloud services and learn to build scalable infrastructure solutions.',
      duration: '3 hours',
      level: 'intermediate',
      category: 'cloud',
      rating: 4.9,
      students: 980,
      instructor: 'Sarah Johnson',
      thumbnail: '/images/tutorials/aws-setup.jpg',
      videoUrl: '/videos/aws-setup.mp4',
      tags: ['AWS', 'Cloud', 'Infrastructure', 'DevOps']
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals: Protecting Your Business',
      description: 'Essential cybersecurity practices and tools to secure your organization.',
      duration: '2.5 hours',
      level: 'beginner',
      category: 'security',
      rating: 4.7,
      students: 1100,
      instructor: 'Michael Chen',
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      videoUrl: '/videos/cybersecurity.mp4',
      tags: ['Security', 'Protection', 'Best Practices', 'Compliance']
    },
    {
      id: 4,
      title: 'Advanced Machine Learning with Python',
      description: 'Deep dive into advanced machine learning techniques and algorithms.',
      duration: '4 hours',
      level: 'advanced',
      category: 'ai',
      rating: 4.9,
      students: 750,
      instructor: 'Emily Rodriguez',
      thumbnail: '/images/tutorials/ml-advanced.jpg',
      videoUrl: '/videos/ml-advanced.mp4',
      tags: ['Machine Learning', 'Python', 'Deep Learning', 'Advanced']
    },
    {
      id: 5,
      title: 'Micro SaaS Development: From Idea to Launch',
      description: 'Build and launch your own micro SaaS application from scratch.',
      duration: '5 hours',
      level: 'intermediate',
      category: 'development',
      rating: 4.8,
      students: 890,
      instructor: 'David Kim',
      thumbnail: '/images/tutorials/micro-saas.jpg',
      videoUrl: '/videos/micro-saas.mp4',
      tags: ['SaaS', 'Development', 'Business', 'Startup']
    },
    {
      id: 6,
      title: '5G Technology Implementation Guide',
      description: 'Understanding and implementing 5G solutions for modern applications.',
      duration: '3.5 hours',
      level: 'intermediate',
      category: 'development',
      rating: 4.6,
      students: 650,
      instructor: 'Lisa Wang',
      thumbnail: '/images/tutorials/5g-implementation.jpg',
      videoUrl: '/videos/5g-implementation.mp4',
      tags: ['5G', 'Technology', 'Implementation', 'IoT']
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredTutorial = tutorials[0];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from expert tutorials on AI, cloud computing, cybersecurity, and digital transformation. Comprehensive courses for all skill levels." />
        <meta name="keywords" content="tutorials, courses, learning, AI tutorials, cloud computing, cybersecurity, digital transformation, online learning" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Learn from the Experts
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and courses. 
              From beginner to advanced, we have something for everyone.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Hours of Content</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <FunnelIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Category:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Level Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Level:</span>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLevel === level.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Tutorial */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Tutorial</h2>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredTutorial.category.toUpperCase()}
                      </span>
                      <span className="text-blue-100">{featuredTutorial.duration}</span>
                      <span className="text-blue-100">{featuredTutorial.level}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{featuredTutorial.title}</h3>
                    <p className="text-xl text-blue-100 mb-6">{featuredTutorial.description}</p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <StarIcon className="w-5 h-5 text-yellow-400" />
                        <span>{featuredTutorial.rating}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-5 h-5" />
                        <span>{featuredTutorial.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-5 h-5" />
                        <span>{featuredTutorial.duration}</span>
                      </div>
                    </div>
                    <Link
                      to={`/tutorials/${featuredTutorial.id}`}
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Start Learning
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                      <PlayIcon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              )})}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tutorials found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of students who are already learning with our expert tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )}

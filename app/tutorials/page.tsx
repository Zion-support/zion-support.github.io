'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, BookOpen, Clock, Star, Users, Filter, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      category: 'ai',
      level: 'Beginner',
      duration: '2 hours',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications',
      description: 'Master modern web development techniques for creating robust, scalable applications.',
      category: 'web',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.7,
      students: 980,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure with AWS',
      description: 'Complete guide to setting up and managing cloud infrastructure on Amazon Web Services.',
      category: 'cloud',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.9,
      students: 1100,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices and techniques to protect your digital assets.',
      category: 'security',
      level: 'Beginner',
      duration: '2.5 hours',
      rating: 4.6,
      students: 850,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis, visualization, and machine learning using Python and popular libraries.',
      category: 'data',
      level: 'Intermediate',
      duration: '5 hours',
      rating: 4.8,
      students: 1400,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and modern development tools.',
      category: 'mobile',
      level: 'Advanced',
      duration: '6 hours',
      rating: 4.7,
      students: 750,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'DevOps and CI/CD',
      description: 'Master DevOps practices, continuous integration, and deployment strategies.',
      category: 'devops',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.9,
      students: 920,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Blockchain Development',
      description: 'Introduction to blockchain technology and smart contract development.',
      category: 'blockchain',
      level: 'Advanced',
      duration: '3.5 hours',
      rating: 4.5,
      students: 680,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 9,
      title: 'API Design and Development',
      description: 'Learn to design, build, and document RESTful APIs and GraphQL endpoints.',
      category: 'api',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.8,
      students: 1050,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 10,
      title: 'Database Design and Optimization',
      description: 'Master database design principles and performance optimization techniques.',
      category: 'database',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.7,
      students: 890,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 11,
      title: 'UI/UX Design Principles',
      description: 'Learn user interface and user experience design best practices and tools.',
      category: 'design',
      level: 'Beginner',
      duration: '2.5 hours',
      rating: 4.6,
      students: 1200,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 12,
      title: 'Machine Learning in Production',
      description: 'Deploy and manage machine learning models in production environments.',
      category: 'ai',
      level: 'Advanced',
      duration: '5 hours',
      rating: 4.9,
      students: 650,
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'Artificial Intelligence', icon: BookOpen },
    { id: 'web', name: 'Web Development', icon: BookOpen },
    { id: 'cloud', name: 'Cloud Computing', icon: BookOpen },
    { id: 'security', name: 'Cybersecurity', icon: BookOpen },
    { id: 'data', name: 'Data Science', icon: BookOpen },
    { id: 'mobile', name: 'Mobile Development', icon: BookOpen },
    { id: 'devops', name: 'DevOps', icon: BookOpen },
    { id: 'blockchain', name: 'Blockchain', icon: BookOpen },
    { id: 'api', name: 'API Development', icon: BookOpen },
    { id: 'database', name: 'Database', icon: BookOpen },
    { id: 'design', name: 'UI/UX Design', icon: BookOpen }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learning Resources</title>
        <meta name="description" content="Comprehensive tutorials and learning resources for AI, web development, cloud computing, and more. Learn from industry experts." />
        <meta name="keywords" content="tutorials, learning, AI, web development, cloud computing, cybersecurity, programming" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials. Learn from industry experts and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Browse All
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-300 text-sm">{tutorial.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {tutorial.students} students
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Tutorial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of students who are already advancing their careers with our tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View All Tutorials
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;
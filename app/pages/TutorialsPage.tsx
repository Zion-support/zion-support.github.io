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
  AcademicCapIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence, machine learning concepts, and how to implement your first AI solution.',
      duration: '45 min',
      difficulty: 'Beginner',
      category: 'AI',
      rating: 4.8,
      students: 1250,
      instructor: 'Dr. Sarah Johnson',
      thumbnail: '/api/placeholder/400/300',
      tags: ['AI', 'Machine Learning', 'Beginner', 'Fundamentals']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup with AWS',
      description: 'Step-by-step guide to setting up scalable cloud infrastructure using Amazon Web Services.',
      duration: '60 min',
      difficulty: 'Intermediate',
      category: 'Cloud',
      rating: 4.9,
      students: 980,
      instructor: 'Michael Chen',
      thumbnail: '/api/placeholder/400/300',
      tags: ['AWS', 'Cloud', 'Infrastructure', 'DevOps']
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small Businesses',
      description: 'Essential security measures every small business should implement to protect against cyber threats.',
      duration: '30 min',
      difficulty: 'Beginner',
      category: 'Security',
      rating: 4.7,
      students: 750,
      instructor: 'David Kim',
      thumbnail: '/api/placeholder/400/300',
      tags: ['Cybersecurity', 'Small Business', 'Security', 'Best Practices']
    },
    {
      id: 4,
      title: 'Building Microservices with Node.js',
      description: 'Learn how to design and implement microservices architecture using Node.js and Docker.',
      duration: '90 min',
      difficulty: 'Advanced',
      category: 'Development',
      rating: 4.9,
      students: 650,
      instructor: 'Emily Rodriguez',
      thumbnail: '/api/placeholder/400/300',
      tags: ['Node.js', 'Microservices', 'Docker', 'Architecture']
    },
    {
      id: 5,
      title: 'Data Analytics with Python and Pandas',
      description: 'Master data analysis using Python, Pandas, and visualization libraries for business insights.',
      duration: '75 min',
      difficulty: 'Intermediate',
      category: 'Data Science',
      rating: 4.8,
      students: 1100,
      instructor: 'Dr. Sarah Johnson',
      thumbnail: '/api/placeholder/400/300',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization']
    },
    {
      id: 6,
      title: 'Digital Transformation Strategy',
      description: 'A comprehensive guide to planning and executing digital transformation initiatives.',
      duration: '50 min',
      difficulty: 'Intermediate',
      category: 'Strategy',
      rating: 4.6,
      students: 890,
      instructor: 'Michael Chen',
      thumbnail: '/api/placeholder/400/300',
      tags: ['Digital Transformation', 'Strategy', 'Business', 'Planning']
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'Data Science', 'Strategy'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return CpuChipIcon;
      case 'Cloud': return CloudIcon;
      case 'Security': return ShieldCheckIcon;
      case 'Development': return CodeBracketIcon;
      case 'Data Science': return ChartBarIcon;
      case 'Strategy': return AcademicCapIcon;
      default: return AcademicCapIcon;
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and digital transformation. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, courses, AI tutorials, cloud tutorials, cybersecurity tutorials, learning, education" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tutorials & Courses
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn from industry experts with our comprehensive tutorials on AI, cloud computing, 
                cybersecurity, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredTutorials.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-white mb-4">No tutorials found</h3>
                  <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTutorials.map((tutorial) => {
                    const CategoryIcon = getCategoryIcon(tutorial.category);
                    return (
                      <div key={tutorial.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                          <div className="w-full h-48 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center">
                            <CategoryIcon className="w-16 h-16 text-white/50" />
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                              {tutorial.difficulty}
                            </span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                              {tutorial.category}
                            </span>
                          </div>
                          
                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {tutorial.title}
                          </h2>
                          
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                            {tutorial.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                {tutorial.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <UserIcon className="w-4 h-4" />
                                {tutorial.students}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <StarIcon className="w-4 h-4 text-yellow-400" />
                              {tutorial.rating}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tutorial.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-400">
                              by {tutorial.instructor}
                            </div>
                            <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all">
                              Start Learning
                              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
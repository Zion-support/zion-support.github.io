import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, User, Star, Circle, Clock, Filter } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Web Development' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      duration: '2 hours',
      level: 'beginner',
      category: 'ai',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 1250,
      thumbnail: '🤖',
      tags: ['AI', 'Machine Learning', 'Python']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up cloud infrastructure on AWS and Azure.',
      duration: '3 hours',
      level: 'intermediate',
      category: 'cloud',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 980,
      thumbnail: '☁️',
      tags: ['AWS', 'Azure', 'DevOps']
    },
    {
      id: 3,
      title: 'Web Security Fundamentals',
      description: 'Essential security practices for web applications and APIs.',
      duration: '1.5 hours',
      level: 'beginner',
      category: 'security',
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 2100,
      thumbnail: '🔒',
      tags: ['Security', 'Web', 'APIs']
    },
    {
      id: 4,
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns and performance optimization techniques.',
      duration: '4 hours',
      level: 'advanced',
      category: 'development',
      instructor: 'Emily Rodriguez',
      rating: 4.9,
      students: 750,
      thumbnail: '⚛️',
      tags: ['React', 'JavaScript', 'Performance']
    },
    {
      id: 5,
      title: 'Machine Learning with TensorFlow',
      description: 'Build and deploy machine learning models using TensorFlow.',
      duration: '5 hours',
      level: 'intermediate',
      category: 'ai',
      instructor: 'Dr. Lisa Wang',
      rating: 4.8,
      students: 1100,
      thumbnail: '🧠',
      tags: ['TensorFlow', 'ML', 'Python']
    },
    {
      id: 6,
      title: 'Docker and Kubernetes',
      description: 'Containerization and orchestration with Docker and Kubernetes.',
      duration: '3.5 hours',
      level: 'intermediate',
      category: 'cloud',
      instructor: 'David Kim',
      rating: 4.6,
      students: 890,
      thumbnail: '🐳',
      tags: ['Docker', 'Kubernetes', 'Containers']
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const levelMatch = selectedLevel === 'all' || tutorial.level === selectedLevel;
    const categoryMatch = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <>
      <Helmet>
        <title>Tutorials - Learn AI & IT Skills | Zion Tech Group</title>
        <meta name="description" content="Master AI, cloud computing, cybersecurity, and web development with our comprehensive tutorials and courses." />
        <meta name="keywords" content="tutorials, courses, AI learning, cloud computing, cybersecurity, web development, online training" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Learn
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and hands-on courses.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedLevel === level.id
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl">{tutorial.thumbnail}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                        {tutorial.category.charAt(0).toUpperCase() + tutorial.category.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.instructor}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-medium">{tutorial.rating}</span>
                        <span className="text-gray-400 ml-1">({tutorial.students} students)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tutorial.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students already learning with our comprehensive tutorials.
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">
              Browse All Tutorials
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
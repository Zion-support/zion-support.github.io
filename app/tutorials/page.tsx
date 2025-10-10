'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Play, Clock, User, ArrowRight, BookOpen, Code, Brain, Cloud, Shield, Zap, Database, Globe, Smartphone, Settings } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy intelligent chatbots using our AI platform.',
      category: 'AI',
      duration: '45 min',
      difficulty: 'Beginner',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/ai-chatbot.jpg',
      icon: Brain,
      tags: ['AI', 'Chatbots', 'NLP', 'Automation']
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud safely and efficiently.',
      category: 'Cloud',
      duration: '1h 30m',
      difficulty: 'Intermediate',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/cloud-migration.jpg',
      icon: Cloud,
      tags: ['Cloud', 'AWS', 'Azure', 'Migration']
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      category: 'Security',
      duration: '1h 15m',
      difficulty: 'Beginner',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      icon: Shield,
      tags: ['Security', 'Cybersecurity', 'Best Practices', 'Protection']
    },
    {
      id: 4,
      title: 'Building Micro SaaS Applications',
      description: 'Complete guide to creating and launching successful micro SaaS products.',
      category: 'Development',
      duration: '2h 45m',
      difficulty: 'Advanced',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/micro-saas.jpg',
      icon: Zap,
      tags: ['SaaS', 'Development', 'Business', 'Startup']
    },
    {
      id: 5,
      title: 'Database Optimization Techniques',
      description: 'Learn advanced techniques to optimize database performance and scalability.',
      category: 'Database',
      duration: '1h 20m',
      difficulty: 'Intermediate',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/database.jpg',
      icon: Database,
      tags: ['Database', 'Performance', 'Optimization', 'SQL']
    },
    {
      id: 6,
      title: 'Web Development with React',
      description: 'Modern web development using React, Next.js, and best practices.',
      category: 'Development',
      duration: '3h 30m',
      difficulty: 'Intermediate',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/react.jpg',
      icon: Globe,
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend']
    },
    {
      id: 7,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications for iOS and Android.',
      category: 'Mobile',
      duration: '4h 15m',
      difficulty: 'Advanced',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/mobile.jpg',
      icon: Smartphone,
      tags: ['Mobile', 'iOS', 'Android', 'Cross-platform']
    },
    {
      id: 8,
      title: 'DevOps and CI/CD Pipeline',
      description: 'Set up automated deployment pipelines and DevOps practices.',
      category: 'DevOps',
      duration: '2h 30m',
      difficulty: 'Intermediate',
      author: 'Zion Tech Team',
      thumbnail: '/images/tutorials/devops.jpg',
      icon: Settings,
      tags: ['DevOps', 'CI/CD', 'Automation', 'Deployment']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', count: tutorials.length },
    { id: 'AI', name: 'AI & Machine Learning', count: tutorials.filter(t => t.category === 'AI').length },
    { id: 'Cloud', name: 'Cloud Computing', count: tutorials.filter(t => t.category === 'Cloud').length },
    { id: 'Security', name: 'Cybersecurity', count: tutorials.filter(t => t.category === 'Security').length },
    { id: 'Development', name: 'Development', count: tutorials.filter(t => t.category === 'Development').length },
    { id: 'Database', name: 'Database', count: tutorials.filter(t => t.category === 'Database').length },
    { id: 'Mobile', name: 'Mobile Development', count: tutorials.filter(t => t.category === 'Mobile').length },
    { id: 'DevOps', name: 'DevOps', count: tutorials.filter(t => t.category === 'DevOps').length }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
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

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, cybersecurity, and development. Learn from industry experts and advance your technical skills." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud computing, cybersecurity, development, programming, tech skills" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials. 
                From AI and cloud computing to cybersecurity and development.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <tutorial.icon className="w-16 h-16 text-cyan-400 opacity-80" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                        <Play className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {tutorial.author}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No tutorials found matching your search.</p>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Want to Create Your Own Tutorial?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Share your knowledge with our community and help others learn. Contact us to become a tutorial contributor.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Become a Contributor
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
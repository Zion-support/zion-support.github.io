'use client';
import React, { useState } from 'react';
import { BookOpen, Search, Filter, Clock, User, Star, ArrowRight, CheckCircle, ExternalLink, Download, Play, Code, Zap, Shield, Target, Users, BarChart, Settings, Brain, Globe, Database, Cloud, Lock, Smartphone, Monitor, Wrench, Lightbulb, TrendingUp, Award, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'business', name: 'Business', icon: BarChart },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'design', name: 'Design & UX', icon: Monitor },
    { id: 'marketing', name: 'Marketing', icon: Target }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const guides = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence, machine learning, and how to implement AI solutions in your business.',
      category: 'ai',
      level: 'beginner',
      duration: '45 min',
      author: 'Dr. Sarah Chen',
      rating: 4.9,
      views: 12500,
      published: '2024-01-15',
      tags: ['AI', 'Machine Learning', 'Beginner', 'Business'],
      content: [
        'Introduction to AI and its applications',
        'Understanding machine learning concepts',
        'Choosing the right AI tools for your business',
        'Implementing your first AI solution',
        'Best practices and common pitfalls'
      ],
      featured: true,
      type: 'guide'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with React and Node.js',
      description: 'A comprehensive guide to building modern, scalable web applications using React frontend and Node.js backend.',
      category: 'development',
      level: 'intermediate',
      duration: '2 hours',
      author: 'Michael Rodriguez',
      rating: 4.8,
      views: 8900,
      published: '2024-01-10',
      tags: ['React', 'Node.js', 'Web Development', 'Scalability'],
      content: [
        'Setting up your development environment',
        'Building the frontend with React',
        'Creating a robust backend with Node.js',
        'Database integration and optimization',
        'Deployment and scaling strategies'
      ],
      featured: true,
      type: 'tutorial'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small Businesses',
      description: 'Essential cybersecurity measures every small business should implement to protect their data and systems.',
      category: 'security',
      level: 'beginner',
      duration: '30 min',
      author: 'Robert Chen',
      rating: 4.7,
      views: 15600,
      published: '2024-01-08',
      tags: ['Cybersecurity', 'Small Business', 'Data Protection', 'Security'],
      content: [
        'Understanding common cyber threats',
        'Implementing strong password policies',
        'Setting up multi-factor authentication',
        'Regular security audits and updates',
        'Employee training and awareness'
      ],
      featured: false,
      type: 'guide'
    },
    {
      id: 4,
      title: 'Advanced Machine Learning: Deep Learning with TensorFlow',
      description: 'Master deep learning concepts and build sophisticated neural networks using TensorFlow and Keras.',
      category: 'ai',
      level: 'advanced',
      duration: '3 hours',
      author: 'Dr. Alex Kim',
      rating: 4.9,
      views: 6700,
      published: '2024-01-05',
      tags: ['Deep Learning', 'TensorFlow', 'Neural Networks', 'Advanced'],
      content: [
        'Introduction to deep learning',
        'Building neural networks with TensorFlow',
        'Convolutional Neural Networks (CNNs)',
        'Recurrent Neural Networks (RNNs)',
        'Advanced techniques and optimization'
      ],
      featured: true,
      type: 'tutorial'
    },
    {
      id: 5,
      title: 'Cloud Migration Strategy: Moving to AWS',
      description: 'A step-by-step guide to migrating your applications and infrastructure to Amazon Web Services.',
      category: 'cloud',
      level: 'intermediate',
      duration: '1.5 hours',
      author: 'Jennifer Liu',
      rating: 4.6,
      views: 9800,
      published: '2024-01-03',
      tags: ['AWS', 'Cloud Migration', 'DevOps', 'Infrastructure'],
      content: [
        'Planning your cloud migration',
        'Choosing the right AWS services',
        'Data migration strategies',
        'Security and compliance considerations',
        'Cost optimization techniques'
      ],
      featured: false,
      type: 'guide'
    },
    {
      id: 6,
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile applications using React Native for iOS and Android.',
      category: 'mobile',
      level: 'intermediate',
      duration: '2.5 hours',
      author: 'Emma Thompson',
      rating: 4.8,
      views: 11200,
      published: '2024-01-01',
      tags: ['React Native', 'Mobile Development', 'Cross-platform', 'iOS', 'Android'],
      content: [
        'Setting up React Native development environment',
        'Building your first mobile app',
        'Navigation and state management',
        'Platform-specific features',
        'Testing and deployment'
      ],
      featured: false,
      type: 'tutorial'
    },
    {
      id: 7,
      title: 'Data Analytics with Python and Pandas',
      description: 'Learn data analysis and visualization using Python, Pandas, and Matplotlib.',
      category: 'data',
      level: 'beginner',
      duration: '1 hour',
      author: 'Dr. Maria Garcia',
      rating: 4.7,
      views: 13400,
      published: '2023-12-28',
      tags: ['Python', 'Data Analysis', 'Pandas', 'Visualization'],
      content: [
        'Introduction to data analysis with Python',
        'Working with Pandas DataFrames',
        'Data cleaning and preprocessing',
        'Data visualization with Matplotlib',
        'Statistical analysis and insights'
      ],
      featured: false,
      type: 'tutorial'
    },
    {
      id: 8,
      title: 'UX Design Principles for Developers',
      description: 'Essential UX design principles that every developer should know to create better user experiences.',
      category: 'design',
      level: 'beginner',
      duration: '40 min',
      author: 'Tom Anderson',
      rating: 4.5,
      views: 8900,
      published: '2023-12-25',
      tags: ['UX Design', 'User Experience', 'Design Principles', 'Frontend'],
      content: [
        'Understanding user needs and goals',
        'Design thinking methodology',
        'Creating intuitive user interfaces',
        'Accessibility and inclusive design',
        'Testing and iteration'
      ],
      featured: false,
      type: 'guide'
    },
    {
      id: 9,
      title: 'Digital Marketing Automation with AI',
      description: 'How to leverage AI tools for marketing automation, lead generation, and customer engagement.',
      category: 'marketing',
      level: 'intermediate',
      duration: '1.5 hours',
      author: 'Rachel Green',
      rating: 4.6,
      views: 7600,
      published: '2023-12-22',
      tags: ['Marketing', 'AI', 'Automation', 'Lead Generation'],
      content: [
        'Introduction to marketing automation',
        'AI tools for content creation',
        'Email marketing automation',
        'Social media management',
        'Analytics and optimization'
      ],
      featured: false,
      type: 'guide'
    },
    {
      id: 10,
      title: 'Building Microservices Architecture',
      description: 'Design and implement microservices architecture for scalable and maintainable applications.',
      category: 'development',
      level: 'advanced',
      duration: '2.5 hours',
      author: 'Carlos Mendez',
      rating: 4.8,
      views: 5400,
      published: '2023-12-20',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Backend'],
      content: [
        'Microservices vs monolithic architecture',
        'Service design and communication',
        'API gateway and service discovery',
        'Data management in microservices',
        'Monitoring and debugging'
      ],
      featured: false,
      type: 'tutorial'
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || guide.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredGuides = guides.filter(guide => guide.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Knowledge <span className="text-cyan-400">Hub</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive guides, tutorials, and resources to help you master AI, development, and technology.
          </p>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="cyber-card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides, tutorials, and resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Level Filter */}
                <div className="relative">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 appearance-none"
                  >
                    {levels.map(level => (
                      <option key={level.id} value={level.id} className="bg-slate-800">
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        {searchTerm === '' && selectedCategory === 'all' && selectedLevel === 'all' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text flex items-center">
              <Star className="w-8 h-8 mr-3 text-yellow-400" />
              Featured Guides
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGuides.map((guide) => {
                const CategoryIcon = getCategoryIcon(guide.category);
                return (
                  <article key={guide.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-gray-400 capitalize">{guide.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{guide.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {guide.author}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(guide.level)}`}>
                        {guide.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{guide.views.toLocaleString()} views</span>
                      </div>
                      <a
                        href={`/guides/${guide.id}`}
                        className="flex items-center text-cyan-400 hover:text-white transition-colors group"
                      >
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* All Guides */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            {searchTerm || selectedCategory !== 'all' || selectedLevel !== 'all' ? 'Search Results' : 'All Guides'}
            <span className="text-gray-400 text-lg ml-4">({filteredGuides.length} guides)</span>
          </h2>
          
          {filteredGuides.length === 0 ? (
            <div className="cyber-card p-12 text-center">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No guides found</h3>
              <p className="text-gray-300">Try adjusting your search terms or filters to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => {
                const CategoryIcon = getCategoryIcon(guide.category);
                return (
                  <article key={guide.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-gray-400 capitalize">{guide.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{guide.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {guide.content.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                        {guide.content.length > 3 && (
                          <li className="text-sm text-gray-400 ml-5">
                            +{guide.content.length - 3} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {guide.author}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(guide.level)}`}>
                        {guide.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{guide.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={`/guides/${guide.id}`}
                          className="flex items-center text-cyan-400 hover:text-white transition-colors group"
                        >
                          <span className="mr-2">Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Request a custom guide or tutorial on any topic you'd like to learn about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Request a Guide
              </a>
              <a
                href="/blog"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Browse Our Blog
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesPage;
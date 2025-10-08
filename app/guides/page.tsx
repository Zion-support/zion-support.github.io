import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User, Download, Star, CheckCircle } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: 'AI Implementation Guide for Enterprise',
      description: 'A comprehensive step-by-step guide to implementing AI solutions in enterprise environments, including planning, deployment, and optimization strategies.',
      author: 'Dr. Sarah Johnson',
      duration: '45 min read',
      difficulty: 'Intermediate',
      category: 'AI & Machine Learning',
      rating: 4.9,
      downloads: 1250,
      image: '🤖',
      featured: true,
      tags: ['AI', 'Enterprise', 'Implementation', 'Strategy']
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      description: 'Learn the basics of quantum computing, quantum algorithms, and how to get started with quantum programming using popular frameworks.',
      author: 'Michael Chen',
      duration: '60 min read',
      difficulty: 'Advanced',
      category: 'Quantum Computing',
      rating: 4.8,
      downloads: 890,
      image: '⚛️',
      featured: false,
      tags: ['Quantum', 'Algorithms', 'Programming', 'Fundamentals']
    },
    {
      id: 3,
      title: 'Building Autonomous Systems',
      description: 'Complete guide to designing and implementing self-managing systems for IT infrastructure, including monitoring, healing, and optimization.',
      author: 'Dr. Emily Rodriguez',
      duration: '50 min read',
      difficulty: 'Advanced',
      category: 'Autonomous Systems',
      rating: 4.7,
      downloads: 1100,
      image: '🔄',
      featured: false,
      tags: ['Autonomous', 'Infrastructure', 'Monitoring', 'Automation']
    },
    {
      id: 4,
      title: 'Digital Transformation Playbook',
      description: 'Strategic guide for enterprise digital transformation, covering technology selection, change management, and implementation best practices.',
      author: 'David Kim',
      duration: '40 min read',
      difficulty: 'Intermediate',
      category: 'Digital Transformation',
      rating: 4.6,
      downloads: 2100,
      image: '💻',
      featured: false,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Best Practices']
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices 2024',
      description: 'Comprehensive cybersecurity guide covering threat detection, incident response, and security architecture for modern enterprises.',
      author: 'Dr. Sarah Johnson',
      duration: '35 min read',
      difficulty: 'Intermediate',
      category: 'Cybersecurity',
      rating: 4.8,
      downloads: 1800,
      image: '🛡️',
      featured: false,
      tags: ['Cybersecurity', 'Threat Detection', 'Incident Response', 'Security']
    },
    {
      id: 6,
      title: 'Blockchain Development Guide',
      description: 'Learn blockchain development from basics to advanced concepts, including smart contracts, DeFi protocols, and Web3 applications.',
      author: 'Michael Chen',
      duration: '55 min read',
      difficulty: 'Advanced',
      category: 'Blockchain & Web3',
      rating: 4.5,
      downloads: 950,
      image: '🔗',
      featured: false,
      tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'Web3']
    },
    {
      id: 7,
      title: 'Cloud Migration Strategy',
      description: 'Step-by-step guide for migrating enterprise applications to the cloud, including planning, execution, and optimization strategies.',
      author: 'David Kim',
      duration: '30 min read',
      difficulty: 'Intermediate',
      category: 'Cloud Computing',
      rating: 4.7,
      downloads: 1600,
      image: '☁️',
      featured: false,
      tags: ['Cloud', 'Migration', 'Strategy', 'Optimization']
    },
    {
      id: 8,
      title: 'Data Analytics and BI Implementation',
      description: 'Complete guide to implementing business intelligence and data analytics solutions for enterprise decision-making and insights.',
      author: 'Dr. Emily Rodriguez',
      duration: '42 min read',
      difficulty: 'Intermediate',
      category: 'Business Intelligence',
      rating: 4.6,
      downloads: 1400,
      image: '📊',
      featured: false,
      tags: ['Analytics', 'BI', 'Data', 'Insights']
    }
  ];

  const categories = [
    'All Guides',
    'AI & Machine Learning',
    'Quantum Computing',
    'Autonomous Systems',
    'Digital Transformation',
    'Cybersecurity',
    'Blockchain & Web3',
    'Cloud Computing',
    'Business Intelligence'
  ];

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  return (
    <>
      <Helmet>
        <title>Technical Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical guides and documentation for AI, quantum computing, autonomous systems, and enterprise technology implementation." />
        <meta name="keywords" content="technical guides, AI implementation, quantum computing guide, autonomous systems, digital transformation, enterprise technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Expert guides and documentation for cutting-edge technology implementation
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
                Access comprehensive technical guides, best practices, and implementation strategies 
                from our team of technology experts and industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Guides'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Guide
              </h2>
            </div>
            {guides
              .filter(guide => guide.featured)
              .map((guide) => (
                <div key={guide.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-6xl mr-4">{guide.image}</span>
                        <div>
                          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                            {guide.category}
                          </span>
                          <div className="flex items-center">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
                              {guide.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {guide.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-6">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{guide.author}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="mr-4">{guide.duration}</span>
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        <span className="mr-4">{guide.rating}</span>
                        <Download className="w-4 h-4 mr-2" />
                        <span>{guide.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {guide.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="text-8xl text-center mb-4">{guide.image}</div>
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Guide Statistics</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-blue-600">{guide.downloads.toLocaleString()}</div>
                            <div className="text-gray-500">Downloads</div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-600">{guide.rating}/5</div>
                            <div className="text-gray-500">Rating</div>
                          </div>
                          <div>
                            <div className="font-semibold text-purple-600">{guide.duration}</div>
                            <div className="text-gray-500">Duration</div>
                          </div>
                          <div>
                            <div className="font-semibold text-orange-600">{guide.difficulty}</div>
                            <div className="text-gray-500">Level</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Technical Guides
              </h2>
              <p className="text-xl text-gray-600">
                Browse our comprehensive collection of technical guides and documentation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides
                .filter(guide => !guide.featured)
                .map((guide) => (
                  <article key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-3">{guide.image}</span>
                        <div className="flex-1">
                          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                            {guide.category}
                          </span>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
                              {guide.difficulty}
                            </span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm text-gray-600">{guide.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{guide.author}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{guide.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {guide.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mr-2">
                          <Download className="w-4 h-4 inline mr-2" />
                          Download
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                          <BookOpen className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Technical Guidance?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts can create custom guides and provide personalized technical consultation for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Get Custom Consultation
              </Link>
              <Link 
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesPage;
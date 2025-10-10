import React from 'react';
import { BookOpen, Clock, User, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const featuredGuides = [
    {
      id: 1,
      title: 'Getting Started with AI',
      description: 'A comprehensive guide to understanding and implementing AI in your business',
      author: 'Zion Tech Team',
      readTime: '15 min read',
      difficulty: 'Beginner',
      category: 'AI & Machine Learning',
      image: '/images/ai-guide.jpg',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      author: 'Cloud Experts',
      readTime: '25 min read',
      difficulty: 'Intermediate',
      category: 'Cloud Computing',
      image: '/images/cloud-guide.jpg',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your business from threats',
      author: 'Security Team',
      readTime: '20 min read',
      difficulty: 'Beginner',
      category: 'Security',
      image: '/images/security-guide.jpg',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Data Analytics Implementation',
      description: 'How to set up and use data analytics for business insights',
      author: 'Data Team',
      readTime: '30 min read',
      difficulty: 'Advanced',
      category: 'Data & Analytics',
      image: '/images/data-guide.jpg',
      rating: 4.6
    }
  ];

  const categories = [
    'All Guides',
    'AI & Machine Learning',
    'Cloud Computing',
    'Security',
    'Data & Analytics',
    'Development',
    'DevOps'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Tech Guides & Resources
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and resources to help you master modern technology 
              and implement solutions that drive business success.
            </p>
          </section>

          {/* Categories Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    index === 0
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Guides */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGuides.map((guide) => (
                <div key={guide.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4"></div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-400 font-semibold">{guide.category}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{guide.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-300 mb-4">{guide.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {guide.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      guide.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-400'
                        : guide.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Guidance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert team can provide personalized guidance and implementation support 
              for your specific technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Expert Consultation
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline px-8 py-4 text-lg"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuidesPage;
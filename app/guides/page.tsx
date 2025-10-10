'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, Clock, Users, Star, CheckCircle, Brain, Code, Shield, Zap, Globe, Database, Smartphone, Settings, BarChart, Lock } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guideCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Comprehensive guides on AI implementation, machine learning models, and intelligent automation.',
      guides: [
        {
          title: 'Getting Started with AI in Business',
          description: 'A complete beginner\'s guide to implementing AI solutions in your business.',
          readTime: '15 min read',
          difficulty: 'Beginner',
          rating: 4.8,
          views: '12.5K'
        },
        {
          title: 'Building Your First Machine Learning Model',
          description: 'Step-by-step tutorial on creating and deploying ML models.',
          readTime: '25 min read',
          difficulty: 'Intermediate',
          rating: 4.9,
          views: '8.2K'
        },
        {
          title: 'AI Ethics and Responsible AI Development',
          description: 'Best practices for ethical AI development and deployment.',
          readTime: '20 min read',
          difficulty: 'Advanced',
          rating: 4.7,
          views: '5.1K'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Guides on cloud migration, infrastructure optimization, and scalable architecture.',
      guides: [
        {
          title: 'Cloud Migration Best Practices',
          description: 'Complete guide to migrating your infrastructure to the cloud.',
          readTime: '30 min read',
          difficulty: 'Intermediate',
          rating: 4.6,
          views: '9.8K'
        },
        {
          title: 'Microservices Architecture Design',
          description: 'How to design and implement microservices for scalable applications.',
          readTime: '35 min read',
          difficulty: 'Advanced',
          rating: 4.8,
          views: '7.3K'
        },
        {
          title: 'DevOps Implementation Guide',
          description: 'Setting up CI/CD pipelines and DevOps practices for your team.',
          readTime: '40 min read',
          difficulty: 'Intermediate',
          rating: 4.7,
          views: '6.5K'
        }
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: Shield,
      description: 'Learn about blockchain development, smart contracts, and decentralized applications.',
      guides: [
        {
          title: 'Introduction to Blockchain Technology',
          description: 'Understanding the fundamentals of blockchain and distributed ledgers.',
          readTime: '20 min read',
          difficulty: 'Beginner',
          rating: 4.5,
          views: '15.2K'
        },
        {
          title: 'Smart Contract Development with Solidity',
          description: 'Complete guide to developing secure smart contracts.',
          readTime: '45 min read',
          difficulty: 'Advanced',
          rating: 4.9,
          views: '11.7K'
        },
        {
          title: 'Building Your First DApp',
          description: 'Step-by-step guide to creating decentralized applications.',
          readTime: '50 min read',
          difficulty: 'Intermediate',
          rating: 4.8,
          views: '8.9K'
        }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Lock,
      description: 'Security best practices, threat protection, and compliance guidelines.',
      guides: [
        {
          title: 'Cybersecurity Fundamentals for Businesses',
          description: 'Essential security practices every business should implement.',
          readTime: '25 min read',
          difficulty: 'Beginner',
          rating: 4.6,
          views: '13.1K'
        },
        {
          title: 'Zero Trust Security Architecture',
          description: 'Implementing zero trust principles in your organization.',
          readTime: '35 min read',
          difficulty: 'Advanced',
          rating: 4.8,
          views: '7.8K'
        },
        {
          title: 'GDPR Compliance Guide',
          description: 'Complete guide to GDPR compliance for data protection.',
          readTime: '30 min read',
          difficulty: 'Intermediate',
          rating: 4.7,
          views: '9.4K'
        }
      ]
    },
    {
      title: 'Data Analytics',
      icon: BarChart,
      description: 'Data analysis, visualization, and business intelligence guides.',
      guides: [
        {
          title: 'Data Analytics for Business Intelligence',
          description: 'Turning data into actionable business insights.',
          readTime: '20 min read',
          difficulty: 'Beginner',
          rating: 4.5,
          views: '10.6K'
        },
        {
          title: 'Advanced Data Visualization Techniques',
          description: 'Creating compelling data visualizations and dashboards.',
          readTime: '30 min read',
          difficulty: 'Intermediate',
          rating: 4.8,
          views: '6.7K'
        },
        {
          title: 'Predictive Analytics Implementation',
          description: 'Building predictive models for business forecasting.',
          readTime: '40 min read',
          difficulty: 'Advanced',
          rating: 4.9,
          views: '5.2K'
        }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Mobile app development, cross-platform solutions, and mobile optimization.',
      guides: [
        {
          title: 'Cross-Platform Mobile Development',
          description: 'Building apps that work on both iOS and Android.',
          readTime: '35 min read',
          difficulty: 'Intermediate',
          rating: 4.7,
          views: '8.3K'
        },
        {
          title: 'Mobile App Performance Optimization',
          description: 'Techniques for improving mobile app speed and efficiency.',
          readTime: '25 min read',
          difficulty: 'Advanced',
          rating: 4.8,
          views: '6.1K'
        },
        {
          title: 'Mobile Security Best Practices',
          description: 'Securing mobile applications and user data.',
          readTime: '30 min read',
          difficulty: 'Intermediate',
          rating: 4.6,
          views: '7.9K'
        }
      ]
    }
  ];

  const featuredGuides = [
    {
      title: 'Complete AI Implementation Roadmap',
      description: 'A comprehensive guide to implementing AI in your organization from strategy to deployment.',
      category: 'AI & Machine Learning',
      readTime: '60 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      views: '25.3K',
      featured: true
    },
    {
      title: 'Enterprise Cloud Migration Checklist',
      description: 'Step-by-step checklist for migrating enterprise systems to the cloud.',
      category: 'Cloud & Infrastructure',
      readTime: '45 min read',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: '18.7K',
      featured: true
    },
    {
      title: 'Blockchain Security Audit Guide',
      description: 'Complete guide to auditing smart contracts and blockchain applications.',
      category: 'Blockchain & Web3',
      readTime: '50 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      views: '12.4K',
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technology Guides - Zion Tech Group | Expert Tutorials & Resources</title>
        <meta name="description" content="Comprehensive technology guides covering AI, cloud computing, blockchain, cybersecurity, and more. Expert tutorials and best practices from industry leaders." />
        <meta name="keywords" content="technology guides, AI tutorials, cloud computing guides, blockchain tutorials, cybersecurity guides, programming tutorials" />
        <link rel="canonical" href="https://ziontechgroup.com/guides" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Guides</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert tutorials, best practices, and comprehensive guides covering the latest technologies. 
                Learn from industry leaders and implement cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-300">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50K+</div>
                  <div className="text-gray-300">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">4.8</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-300">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Guides */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Guides</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive guides that have helped thousands of developers and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {guide.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{guide.category}</span>
                  <span>{guide.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400">{guide.views} views</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Categories */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of guides organized by technology and skill level.
              </p>
            </div>

            <div className="space-y-12">
              {guideCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.guides.map((guide, guideIndex) => (
                      <div key={guideIndex} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-400/40 transition-all duration-300 group">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {guide.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span>{guide.readTime}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {guide.rating}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{guide.views} views</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {guide.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center mx-auto">
                      View All {category.title} Guides
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our expert team can create custom guides and tutorials tailored to your specific needs. 
              Get personalized guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Custom Guide
              </a>
              <a
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Browse Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidesPage;
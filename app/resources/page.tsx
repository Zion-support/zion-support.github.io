import React from 'react';
import { Download, ExternalLink, FileText, Video, BookOpen, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: 'AI Implementation Guide 2024',
      type: 'Whitepaper',
      description: 'Comprehensive guide to implementing AI solutions in your business. Covers strategy, technology selection, and best practices.',
      category: 'AI Services',
      downloadCount: '2,500+',
      publishDate: '2024-01-15',
      size: '2.5 MB',
      icon: <FileText className="w-6 h-6" />,
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Checklist',
      type: 'Checklist',
      description: 'Step-by-step checklist for successful cloud migration. Includes pre-migration, migration, and post-migration phases.',
      category: 'Cloud Services',
      downloadCount: '1,800+',
      publishDate: '2024-01-10',
      size: '1.2 MB',
      icon: <Download className="w-6 h-6" />,
      featured: false
    },
    {
      id: 3,
      title: 'Digital Transformation Webinar',
      type: 'Webinar',
      description: 'Recorded webinar on digital transformation strategies. Features industry experts and real-world case studies.',
      category: 'Digital Transformation',
      downloadCount: '3,200+',
      publishDate: '2024-01-08',
      size: '45 min',
      icon: <Video className="w-6 h-6" />,
      featured: true
    },
    {
      id: 4,
      title: '5G Technology Overview',
      type: 'E-book',
      description: 'Complete overview of 5G technology, its applications, and implementation considerations for businesses.',
      category: '5G Implementation',
      downloadCount: '1,500+',
      publishDate: '2024-01-05',
      size: '3.8 MB',
      icon: <BookOpen className="w-6 h-6" />,
      featured: false
    },
    {
      id: 5,
      title: 'Micro SAAS Development Guide',
      type: 'Guide',
      description: 'Practical guide for building and scaling micro SAAS applications. Includes architecture patterns and best practices.',
      category: 'Micro SAAS',
      downloadCount: '2,100+',
      publishDate: '2024-01-03',
      size: '2.1 MB',
      icon: <FileText className="w-6 h-6" />,
      featured: false
    },
    {
      id: 6,
      title: 'IT Security Best Practices',
      type: 'Whitepaper',
      description: 'Essential security practices for modern IT infrastructure. Covers threat detection, prevention, and response.',
      category: 'IT Services',
      downloadCount: '2,800+',
      publishDate: '2024-01-01',
      size: '1.9 MB',
      icon: <FileText className="w-6 h-6" />,
      featured: true
    },
    {
      id: 7,
      title: 'ROI Calculator for AI Projects',
      type: 'Tool',
      description: 'Interactive calculator to estimate ROI for AI implementation projects. Includes cost-benefit analysis templates.',
      category: 'AI Services',
      downloadCount: '1,200+',
      publishDate: '2023-12-28',
      size: 'Interactive',
      icon: <ExternalLink className="w-6 h-6" />,
      featured: false
    },
    {
      id: 8,
      title: 'Cloud Cost Optimization Strategies',
      type: 'Case Study',
      description: 'Real-world case study showing how to optimize cloud costs while maintaining performance and security.',
      category: 'Cloud Services',
      downloadCount: '1,600+',
      publishDate: '2023-12-25',
      size: '1.5 MB',
      icon: <FileText className="w-6 h-6" />,
      featured: false
    }
  ];

  const categories = ['All', 'AI Services', 'Cloud Services', 'Digital Transformation', '5G Implementation', 'Micro SAAS', 'IT Services'];
  const types = ['All', 'Whitepaper', 'Guide', 'Webinar', 'E-book', 'Checklist', 'Tool', 'Case Study'];

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive library of resources including whitepapers, guides, webinars, and tools for AI, cloud, and digital transformation." />
        <meta name="keywords" content="resources, whitepapers, guides, webinars, AI guides, cloud migration, digital transformation resources" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive library of whitepapers, guides, webinars, and tools to help you succeed with technology transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and valuable resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloadCount}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(resource.publishDate).toLocaleDateString()}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Download Now
                  <Download className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Filter Resources</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
              <select className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2">
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete library of resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{resource.size}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    {resource.downloadCount}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(resource.publishDate).toLocaleDateString()}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm">
                  {resource.type === 'Tool' ? 'Access Tool' : 'Download'}
                  {resource.type === 'Tool' ? <ExternalLink className="w-4 h-4 ml-2" /> : <Download className="w-4 h-4 ml-2" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest resources, insights, and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import NewContentPromotion2025 from '../../src/components/NewContentPromotion2025';

const ContentShowcase2025Page = () => {
  const allContent = [
    // Blog Posts
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough 2025: The Next Frontier in Business Intelligence',
      excerpt: 'Discover how quantum AI is revolutionizing business intelligence in 2025, delivering unprecedented computational power and insights.',
      category: 'Quantum Computing',
      type: 'Article',
      readTime: '12 min read',
      featured: true,
      new: true,
      path: '/blog/quantum-ai-breakthrough-2025',
      icon: '⚛️',
      gradient: 'from-purple-50 to-blue-50',
      borderColor: 'border-purple-200',
      tags: ['Quantum AI', 'Business Intelligence', '2025', 'Breakthrough Technology']
    },
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Complete Transformation Guide',
      excerpt: 'Master enterprise automation in 2025 with our comprehensive guide to AI-powered business transformation, featuring real-world strategies.',
      category: 'Enterprise AI',
      type: 'Article',
      readTime: '18 min read',
      featured: true,
      new: true,
      path: '/blog/ai-2025-enterprise-automation-mastery',
      icon: '🏢',
      gradient: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200',
      tags: ['Enterprise Automation', 'AI Transformation', '2025', 'Business Process Automation']
    },
    {
      id: 'ai-2025-autonomous-business',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      excerpt: 'Discover how AI-powered autonomous business operations are transforming enterprises in 2025, delivering unprecedented efficiency and ROI.',
      category: 'AI Innovation',
      type: 'Article',
      readTime: '15 min read',
      featured: true,
      path: '/blog/ai-2025-autonomous-business-operations',
      icon: '🤖',
      gradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      tags: ['AI', 'Automation', 'Business Operations', '2025', 'Autonomous Systems']
    },

    // Case Studies
    {
      id: 'quantum-financial-transformation',
      title: 'Quantum AI Financial Services Transformation: A $2.3 Billion Success Story',
      excerpt: 'A leading global investment bank achieved unprecedented results by implementing quantum AI solutions, delivering $2.3B in additional revenue.',
      category: 'Case Study',
      type: 'Case Study',
      readTime: '15 min read',
      featured: true,
      new: true,
      path: '/case-studies/quantum-ai-financial-services-transformation',
      icon: '💰',
      gradient: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200',
      tags: ['Quantum AI', 'Financial Services', 'Case Study', 'ROI', 'Success Story']
    },
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation Success Story',
      excerpt: 'Learn how a Fortune 500 company achieved complete digital transformation through strategic AI implementation.',
      category: 'Case Study',
      type: 'Case Study',
      readTime: '12 min read',
      featured: true,
      path: '/case-studies/enterprise-ai-transformation-success-story',
      icon: '🏆',
      gradient: 'from-emerald-50 to-cyan-50',
      borderColor: 'border-emerald-200',
      tags: ['Enterprise AI', 'Digital Transformation', 'Success Story', 'Fortune 500']
    },

    // Resources
    {
      id: 'ai-implementation-checklist',
      title: 'AI Automation Implementation Checklist 2025: Your Complete Guide to Success',
      excerpt: 'Your comprehensive guide to successful AI implementation with proven frameworks, strategies, and step-by-step execution plans.',
      category: 'Implementation Guide',
      type: 'Resource',
      readTime: '20 min read',
      featured: true,
      new: true,
      path: '/resources/ai-automation-implementation-checklist-2025',
      icon: '📋',
      gradient: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      tags: ['AI Implementation', 'Checklist', 'Guide', 'Best Practices', '2025']
    },
    {
      id: 'business-transformation-playbook',
      title: 'AI 2025 Business Transformation Playbook: Your Strategic Guide to Success',
      excerpt: 'Strategic guide to successfully transforming your business with artificial intelligence, featuring proven methodologies and frameworks.',
      category: 'Strategic Guide',
      type: 'Resource',
      readTime: '25 min read',
      featured: true,
      new: true,
      path: '/resources/ai-2025-business-transformation-playbook',
      icon: '📖',
      gradient: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      tags: ['Business Transformation', 'Strategic Guide', 'AI Strategy', '2025']
    },
    {
      id: 'complete-ai-implementation-guide',
      title: 'Complete AI Implementation Guide 2025: Transform Your Business',
      excerpt: 'Comprehensive resource guide covering everything from AI readiness assessment to full implementation and optimization.',
      category: 'Implementation Guide',
      type: 'Resource',
      readTime: '30 min read',
      featured: true,
      path: '/resources/complete-ai-implementation-guide-2025',
      icon: '📚',
      gradient: 'from-teal-50 to-blue-50',
      borderColor: 'border-teal-200',
      tags: ['AI Implementation', 'Complete Guide', 'Business Transformation', '2025']
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Quantum Computing': 'bg-purple-100 text-purple-800',
      'Enterprise AI': 'bg-green-100 text-green-800',
      'AI Innovation': 'bg-blue-100 text-blue-800',
      'Case Study': 'bg-yellow-100 text-yellow-800',
      'Implementation Guide': 'bg-indigo-100 text-indigo-800',
      'Strategic Guide': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const featuredContent = allContent.filter(content => content.featured);
  const newContent = allContent.filter(content => content.new);
  const blogPosts = allContent.filter(content => content.type === 'Article');
  const caseStudies = allContent.filter(content => content.type === 'Case Study');
  const resources = allContent.filter(content => content.type === 'Resource');

  return (
    <>
      <SEO
        title="AI 2025 Content Showcase - Revolutionary AI Content & Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI 2025 content including breakthrough articles, success stories, implementation guides, and strategic resources."
        keywords="AI 2025 content, quantum AI, enterprise automation, AI implementation guide, business transformation, AI resources"
        url="/content-showcase-2025"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 REVOLUTIONARY AI CONTENT 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI 2025 Content
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Discover our comprehensive collection of breakthrough AI content, featuring quantum computing insights, 
                enterprise automation mastery, proven implementation strategies, and real-world success stories.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{allContent.length}</div>
                  <div className="text-sm text-gray-600">Total Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{newContent.length}</div>
                  <div className="text-sm text-gray-600">New Releases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{featuredContent.length}</div>
                  <div className="text-sm text-gray-600">Featured Content</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2025</div>
                  <div className="text-sm text-gray-600">Latest Updates</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🌟 Featured Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most impactful and revolutionary AI content, handpicked for maximum business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.slice(0, 6).map((content) => (
                <Link 
                  key={content.id} 
                  to={content.path} 
                  className="group block"
                >
                  <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border ${content.borderColor} hover:scale-105`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {content.icon}
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {content.new && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      </div>
                    </div>

                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(content.category)}`}>
                      {content.category}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {content.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {content.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-600">
                        {content.readTime}
                      </span>
                      <span className="text-blue-600 font-medium text-sm group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content by Category */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                📚 Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our content organized by type and topic for easy discovery.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">{blogPosts.length} articles</p>
                </div>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link 
                      key={post.id} 
                      to={post.path} 
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{post.readTime}</span>
                        {post.new && <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">NEW</span>}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/blog" 
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View All Articles →
                  </Link>
                </div>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">{caseStudies.length} success stories</p>
                </div>
                <div className="space-y-4">
                  {caseStudies.slice(0, 3).map((study) => (
                    <Link 
                      key={study.id} 
                      to={study.path} 
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {study.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{study.readTime}</span>
                        {study.new && <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">NEW</span>}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/case-studies" 
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View All Case Studies →
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Resources</h3>
                  <p className="text-gray-600">{resources.length} guides & tools</p>
                </div>
                <div className="space-y-4">
                  {resources.slice(0, 3).map((resource) => (
                    <Link 
                      key={resource.id} 
                      to={resource.path} 
                      className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {resource.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{resource.readTime}</span>
                        {resource.new && <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">NEW</span>}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to="/resources" 
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View All Resources →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of forward-thinking companies already using our proven AI solutions 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentShowcase2025Page;
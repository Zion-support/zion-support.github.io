import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User, Calendar, Tag } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap: Complete Guide to Enterprise AI Transformation',
      description: 'Master the art of AI implementation with our comprehensive 2026 roadmap. From strategy development to full-scale deployment, learn how to successfully transform your enterprise.',
      slug: 'ai-2026-implementation-roadmap',
      author: 'Zion Tech Group',
      readTime: '25 min read',
      publishDate: 'January 22, 2026',
      tags: ['AI Implementation', 'Enterprise AI', 'Digital Transformation', 'AI Strategy', '2026 Roadmap'],
      featured: true
    },
    {
      title: 'Quantum Computing for Business: A Practical Implementation Guide',
      description: 'Learn how to leverage quantum computing capabilities for complex problem solving and optimization in your business operations.',
      slug: 'quantum-computing-business-guide',
      author: 'Zion Tech Group',
      readTime: '18 min read',
      publishDate: 'January 15, 2026',
      tags: ['Quantum Computing', 'Business Strategy', 'Optimization', 'Technology Implementation'],
      featured: false
    },
    {
      title: 'Autonomous Systems Architecture: Building Self-Managing Infrastructure',
      description: 'Comprehensive guide to designing and implementing autonomous systems for enterprise operations and infrastructure management.',
      slug: 'autonomous-systems-architecture',
      author: 'Zion Tech Group',
      readTime: '22 min read',
      publishDate: 'January 10, 2026',
      tags: ['Autonomous Systems', 'Infrastructure', 'Architecture', 'Automation'],
      featured: false
    },
    {
      title: 'Cybersecurity Best Practices: Enterprise Security Implementation',
      description: 'Essential cybersecurity strategies and implementation practices for protecting enterprise data and infrastructure.',
      slug: 'cybersecurity-best-practices',
      author: 'Zion Tech Group',
      readTime: '20 min read',
      publishDate: 'January 5, 2026',
      tags: ['Cybersecurity', 'Security', 'Best Practices', 'Enterprise'],
      featured: false
    },
    {
      title: 'Blockchain & Web3 Integration: Complete Business Guide',
      description: 'Step-by-step guide to integrating blockchain and Web3 technologies into your business operations and digital strategy.',
      slug: 'blockchain-web3-integration',
      author: 'Zion Tech Group',
      readTime: '16 min read',
      publishDate: 'December 28, 2025',
      tags: ['Blockchain', 'Web3', 'Integration', 'Digital Strategy'],
      featured: false
    },
    {
      title: 'IoT & Edge Computing: Implementation Roadmap for Enterprises',
      description: 'Comprehensive guide to implementing IoT and edge computing solutions for enterprise environments and smart infrastructure.',
      slug: 'iot-edge-computing-implementation',
      author: 'Zion Tech Group',
      readTime: '19 min read',
      publishDate: 'December 20, 2025',
      tags: ['IoT', 'Edge Computing', 'Smart Infrastructure', 'Implementation'],
      featured: false
    }
  ];

  const featuredGuide = guides.find(guide => guide.featured);
  const otherGuides = guides.filter(guide => !guide.featured);

  return (
    <>
      <Helmet>
        <title>Technical Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical guides and implementation roadmaps for AI, quantum computing, autonomous systems, cybersecurity, and emerging technologies." />
        <meta name="keywords" content="technical guides, AI implementation, quantum computing, autonomous systems, cybersecurity, blockchain, IoT, edge computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive implementation guides and roadmaps for cutting-edge technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Browse All Guides
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Request Custom Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        {featuredGuide && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Guide
                </h2>
                <p className="text-xl text-gray-600">
                  Our most comprehensive and popular technical guide
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredGuide.publishDate}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{featuredGuide.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredGuide.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {featuredGuide.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {featuredGuide.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredGuide.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/guides/${featuredGuide.slug}`}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Full Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Guide</h4>
                      <p className="text-gray-600">
                        Step-by-step implementation roadmap with practical examples and best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Guides */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Technical Guides
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive guides covering all aspects of modern technology implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherGuides.map((guide, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{guide.publishDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Technical Guide?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts can create tailored implementation guides for your specific technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesPage;

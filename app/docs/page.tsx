import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn how to get started with our AI solutions',
      content: 'Comprehensive guide to implementing AI in your business',
      icon: <Zap className="w-6 h-6" />,
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min' },
        { title: 'Account Setup', description: 'Create and configure your account', readTime: '3 min' },
        { title: 'First Project', description: 'Create your first AI project', readTime: '10 min' },
        { title: 'API Keys', description: 'Generate and manage your API keys', readTime: '2 min' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Code className="w-6 h-6" />,
      description: 'Comprehensive guides for our AI services',
      articles: [
        { title: 'Machine Learning API', description: 'Complete ML API reference', readTime: '15 min' },
        { title: 'Computer Vision', description: 'Image and video processing guides', readTime: '12 min' },
        { title: 'Natural Language Processing', description: 'Text analysis and generation', readTime: '8 min' },
        { title: 'Predictive Analytics', description: 'Building predictive models', readTime: '20 min' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Shield className="w-6 h-6" />,
      description: 'Documentation for our IT solutions',
      articles: [
        { title: 'Cloud Infrastructure', description: 'Setting up cloud environments', readTime: '25 min' },
        { title: 'Cybersecurity Setup', description: 'Security best practices', readTime: '18 min' },
        { title: 'Web Development', description: 'Building modern web applications', readTime: '30 min' },
        { title: 'Mobile Development', description: 'iOS and Android app development', readTime: '35 min' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Book className="w-6 h-6" />,
      description: 'Complete API documentation and examples',
      content: 'Detailed API reference with examples and best practices',
      articles: [
        { title: 'Authentication', description: 'API authentication methods', readTime: '5 min' },
        { title: 'Endpoints', description: 'Complete endpoint reference', readTime: '45 min' },
        { title: 'SDKs', description: 'Software development kits', readTime: '10 min' },
        { title: 'Webhooks', description: 'Real-time event notifications', readTime: '8 min' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Quick Start Guide', category: 'Getting Started', readTime: '5 min', views: '12.5k' },
    { title: 'Machine Learning API', category: 'AI Services', readTime: '15 min', views: '8.2k' },
    { title: 'Authentication Guide', category: 'API Reference', readTime: '5 min', views: '6.8k' },
    { title: 'Cloud Infrastructure Setup', category: 'IT Services', readTime: '25 min', views: '5.1k' },
    { title: 'Computer Vision Tutorial', category: 'AI Services', readTime: '12 min', views: '4.7k' }
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    articles: section.articles?.filter((article: { title: string; description: string }) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  })).filter(section => section.articles?.length > 0);

  return (
    <>
      <Helmet></></Helmet>
        <title>Docs - Zion Tech Group</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="py-20"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center max-w-4xl mx-auto"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                <Book className="w-16 h-16 inline-block mr-4 text-cyan-400" /></Book>
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
                Complete guides, tutorials, and API references to help you build amazing solutions with our platform.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto"></div>
                <div className="relative"></div>
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Popular Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Most viewed and helpful documentation articles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full"></span>
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"></h3>
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400"></div>
                    <span>{article.views} views</span>
                    <ExternalLink className="w-4 h-4" /></ExternalLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Documentation Sections</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Browse our comprehensive documentation organized by topic
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-6"></div>
              {filteredSections.map((section) => (
                <div key={section.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"></div>
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center"></div>
                      <div className="text-cyan-400 mr-4"></div>
                        {section.icon || <Book className="w-6 h-6" />}
                      </div>
                      <div></div>
                        <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                        <p className="text-gray-300">{section.description}</p>
                      </div>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-6 h-6 text-cyan-400" /></ChevronDown>
                    ) : (
                      <ChevronRight className="w-6 h-6 text-cyan-400" /></ChevronRight>
                    )}
                  </button>
                  
                  {expandedSection === section.id && (
                    <div className="px-8 pb-6"></div>
                      <div className="grid md:grid-cols-2 gap-4"></div>
                        {section.articles?.map((article: { title: string; readTime: string; description: string }, articleIndex: number) => (
                          <div key={articleIndex} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer group"></div>
                            <div className="flex items-center justify-between mb-2"></div>
                              <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"></h4>
                                {article.title}
                              </h4>
                              <span className="text-gray-400 text-sm">{article.readTime}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{article.description}</p>
                            <div className="flex items-center text-cyan-400 text-sm"></div>
                              <span>Read more</span>
                              <ExternalLink className="w-3 h-3 ml-1" /></ExternalLink>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-4xl mx-auto"></div>
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center"></div>
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8"></p>
                  Follow our quick start guide to begin building with our platform in just a few minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"></button>
                    Start Building
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"></button>
                    View Examples
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-6xl mx-auto"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-6">Additional Resources</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                  More tools and resources to help you succeed
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"></div>
                  <Code className="w-12 h-12 text-cyan-400 mx-auto mb-6" /></Code>
                  <h3 className="text-xl font-bold text-white mb-4">Code Examples</h3>
                  <p className="text-gray-300 mb-6">Real-world code examples and snippets for common use cases</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold"></button>
                    Browse Examples
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"></div>
                  <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" /></Zap>
                  <h3 className="text-xl font-bold text-white mb-4">Tutorials</h3>
                  <p className="text-gray-300 mb-6">Step-by-step tutorials for building complete solutions</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold"></button>
                    View Tutorials
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"></div>
                  <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-6" /></Shield>
                  <h3 className="text-xl font-bold text-white mb-4">Best Practices</h3>
                  <p className="text-gray-300 mb-6">Security, performance, and architecture best practices</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold"></button>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;
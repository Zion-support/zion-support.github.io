'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, FileText, Code, Database, Shield, BookOpen, Search, ArrowRight, Footer } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
  

const categories = ['All', 'Getting Started', 'API Documentation', 'AI Services', 'Cloud Services', 'Security', 'Tutorials'];
  return (
    <>
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Docs page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Documentation</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete guides, API references, and tutorials to help you get the most out of our platform.
              </p>
              
        <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  
        <div className="flex items-center mb-6">
                    
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{section.icon}</div>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    </h2>
                  </div>
                  
          <p className="text-gray-300 mb-6">{section.description}</p>
                  
        <div className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <a
                        key={articleIndex}
                        href={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        
        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            </h3>
                            
          <p className="text-gray-400 text-sm">{article.description}</p>
                          </div>
                          
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span>{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
              
          <p className="text-xl text-gray-300">Most viewed documentation articles</p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href={`/docs/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  
        <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  </h3>
                  
        <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.views} views</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">API Reference</h2>
              
          <p className="text-xl text-gray-300">Quick access to our API documentation</p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">REST API</h3>
                
          <p className="text-gray-300 mb-6">Complete REST API reference with examples and interactive testing</p>
                <a
                  href="/docs/api/rest"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View REST API Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SDKs</h3>
                
          <p className="text-gray-300 mb-6">Official SDKs for Python, JavaScript, Java, and more</p>
                <a
                  href="/docs/sdks"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View SDKs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Postman Collection</h3>
                
          <p className="text-gray-300 mb-6">Import our Postman collection for easy API testing</p>
                <a
                  href="/docs/postman"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Download Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            
          <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DocsPage;
</section>
</section>
</section>
</section>
</section>
</section>
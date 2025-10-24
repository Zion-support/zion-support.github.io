'use client';

<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
=======
const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },
    {id: 'getting-started', name: 'Getting Started', icon: Zap },
    {id: 'ai-services', name: 'AI Services', icon: Brain },
    {id: 'it-services', name: 'IT Services', icon: Cloud },
    {id: 'api', name: 'API Reference', icon: Code },
    {id: 'security', name: 'Security', icon: Shield }];
  const documentation = [
    {id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our services',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      sections: [,
        'Account Setup',
        'First API Call',
        'Authentication',
        'Basic Configuration'
      ]},
    {id: 2},
    {
      id: 2,
      title: 'AI Services Documentation',
      description: 'Comprehensive guide to our AI-powered services',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-14',
      sections: [,
        'AI Chat API',
        'Content Generation',
        'Data Analytics',
        'Computer Vision'
      ]},
    {id: 3,
      title: 'IT Services Guide',
      description: 'Complete documentation for our IT infrastructure services',
      category: 'it-services',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2024-01-13',
      sections: [,
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Cybersecurity',
        'Database Management'
      ]},
    {id: 4,
      title: 'API Reference',
      description: 'Complete API reference with examples and endpoints',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      sections: [,
        'Authentication',
        'Endpoints',
        'Error Handling',
        'Rate Limits'
      ]},
    {id: 5,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for our services',
      category: 'security',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2024-01-11',
      sections: [,
        'Data Protection',
        'Access Control',
        'Encryption',
        'Compliance'
      ]},
    {id: 6,
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-10',
      sections: [,
        'Common Errors',
        'Debugging Tips',
        'Performance Issues',
        'Support Resources'
      ]}];
  const quickLinks = [
    {title: 'API Reference', url: '/api', icon: Code },
    {title: 'Tutorials', url: '/tutorials', icon: BookOpen },
    {title: 'Community', url: '/community', icon: Users },
    {title: 'Support', url: '/support', icon: Shield }]

  const filteredDocs = selectedCategory === 'all' 
    ? documentation;
    ? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
    ? documentation.filter(doc =>)
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs;

  return(<>)
      <Helmet><title>Documentation - Zion Tech Group</title>
    ? documentation 
    : documentation.filter(doc => doc.category === selectedCategory)
  const searchResults = searchQuery 
    ? documentation.filter()
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
  return (
    <>

<<<<<<< HEAD
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PagePage;
=======
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flexitems-centerjustify-centermb-6">
              <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-8h-8text-white" />
              </div>
              <h1 className="text-4xlmd:text-5xlfont-bold text-white neon-text-enhanced">,</h1>
                Documentation;
              </h1>
            </div>
            <p className="text-xltext-gray-300max-w-3xlmx-auto mb-8">Complete documentation for all our AI, IT, and Micro SaaS services.</p>
              Find guides, API references, and best practices to help you build amazing applications.
            </p>
          </div>

          {/* Search Bar */} <div className="cyber-card-enhancedp-6mb-12">
            <div className="relativemax-w-2xlmx-auto">
              <Search className="absoluteleft-4top-1/2transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}className="w-fullpl-12pr-4py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              />
            </div>
          </div>

          {/* Quick Links */} <div className="gridgrid-cols-1md:grid-cols-4 gap-6 mb-12">,</div>
            {quickLinks.map((link, index) => (
              <a;
                key={index}href={link.url}className="cyber-card-enhancedp-6text-centergroup hover: scale-105 transition-all duration-300",
              >
                <link.icon className="w-12h-12text-cyan-400mx-auto mb-4 group-hover: text-cyan-300" />,
                <h3 className="text-lgfont-semiboldtext-whitegroup-hover: text-cyan-300">{link.title}</h3>
              </a>
            ))}
          </div>

          {/* Category Filter */} <div className="mb-8">
            <h2 className="text-2xlfont-boldtext-whitemb-6">Browse by Category</h2>
            <div className="flexflex-wrapgap-4">{categories.map((category) => (</div>
                <button;
                  key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700'}`}
                >
                  <category.icon className="w-5h-5" />
                  <span>{category.name</span>}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Documentation List */} <div className="space-y-6">{searchResults.map((doc) => (</div>
              <div key={doc.id}className="cyber-card-enhancedp-8grouphover: scale-105 transition-all duration-300">,</div>
                <div className="flexitems-startjustify-betweenmb-4">
                  <div className="flex-1">
                    <h3 className="text-2xlfont-boldtext-whitemb-3 group-hover: text-cyan-400 transition-colors">,
                      {doc.title} </h3>
                    <p className="text-gray-300mb-4leading-relaxed">{doc.description</p>} </p>
                    <div className="flexitems-centerspace-x-6text-sm text-gray-400 mb-4">
                      <span className="flexitems-center">
                        <FileText className="w-4h-4mr-1" />
                        {doc.readTime}read;
                      </span>
                      <span className="flexitems-center">
                        <Settings className="w-4h-4mr-1" />
                        {doc.difficulty} </span>
                      <span className="flexitems-center">
                        <Database className="w-4h-4mr-1" />
                        Updated {doc.lastUpdated}} </span>
                    </div>
                  </div>
                  <div className="ml-6">
                    </div>< className={`px-3 py-1 rounded text-xs font-semibold ${$2 />
                      doc.difficulty === 'Beginner' 
                        ? 'bg-green-600 text-white' 
                        : doc.difficulty === 'Intermediate'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white'}`}>{doc.difficulty</span>} </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Sections: </h4>,
                  <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-2">,</div>
                    {doc.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}className="flexitems-centertext-gray-300text-sm">
                        <CheckCircle className="w-4h-4text-green-400mr-2 flex-shrink-0" />
                        {section} </div>
                    ))}
                  </div>
                </div>

                <div className="flexitems-centerjustify-between">
                  <div className="flexspace-x-4">
                    <a;
                      href={`/docs/${doc.id}`}
                      className="bg-gradient-to-rfrom-cyan-500to-blue-600hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center",
                    >
                      Read Guide;
                      <ArrowRight className="w-4h-4ml-2" />
                    </a>
                    <a;
                      href={`/docs/${doc.id}/download`}
                      className="border-2border-cyan-400text-cyan-400px-6 py-2 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center",
                    >
                      <Download className="w-4h-4mr-2" />
                      Download PDF;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}{searchResults.length === 0 && searchQuery && (
          {/* No Results */}
          {searchResults.length === 0 && searchQuery && (
            <div className="cyber-card-enhancedp-8text-center">
              </div><Search className="w-16h-16text-gray-400mx-auto mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-2">No results found</h3>
              <p className="text-gray-300mb-6">Try adjusting your search terms or browse our documentation categories.</p>
              <button;
                onClick={() =>setSearchQuery('')</button>}className="bg-gradient-to-rfrom-cyan-500to-blue-600hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Clear Search;
              </button>
            </div>
          )}

          {/* Additional Resources */} <div className="cyber-card-enhancedp-8mt-16">
            <h2 className="text-2xlfont-boldtext-whitemb-6">Additional Resources</h2>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-6">,</div>
              <a;
          )}

          {/* Additional Resources */}
          <div className="cyber-card-enhancedp-8mt-16">
            </div><h2 className="text-2xlfont-boldtext-whitemb-6">Additional Resources</h2>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-6">
              </div><$2 />
                href="/tutorials"
                className="flexitems-centerspace-x-3p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
              >
                </a><BookOpen className="w-8h-8text-cyan-400" />
                <div>
                  <div className="text-whitefont-semibold">Tutorials</div>
                  <div className="text-gray-300text-sm">Step-by-step guides</div>
                </div>
                <ArrowRight className="w-5h-5text-gray-400ml-auto" / /></ArrowRight>
              </a>
              <a;
                href="/api"
                className="flexitems-centerspace-x-3p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
              >
                </a><Code className="w-8h-8text-green-400" />
                <div>
                  <div className="text-whitefont-semibold">API Reference</div>
                  <div className="text-gray-300text-sm">Complete API documentation</div>
                </div>
                <ArrowRight className="w-5h-5text-gray-400ml-auto" / /></ArrowRight>
              </a>
              <a;
                href="/community"
                className="flexitems-centerspace-x-3p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
              >
                </a><Users className="w-8h-8text-purple-400" />
                <div>
                  <div className="text-whitefont-semibold">Community</div>
                  <div className="text-gray-300text-sm">Developer community</div>
                </div>
                <ArrowRight className="w-5h-5text-gray-400ml-auto" / /></ArrowRight>
              </a>
              <a;
                href="/support"
                className="flexitems-centerspace-x-3p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
              >
                </a><Shield className="w-8h-8text-orange-400" />
                <div>
                  <div className="text-whitefont-semibold">Support</div>
                  <div className="text-gray-300text-sm">Get help and support</div>
                </div>
                <ArrowRight className="w-5h-5text-gray-400ml-auto" / /></ArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DocsPage
'use client'
import React, { useState } from 'react'
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const docCategories = [
    {
      title: 'Getting Started',
      icon: 'rocket',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: 'code',
      description: 'Complete API documentation and endpoints',
      docs: [}
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: 'brain',
      description: 'AI and machine learning documentation',
      docs: [}
        { title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' },
        { title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' },
        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: 'cloud',
      description: 'Cloud infrastructure and services',
      docs: [}
        { title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' },
        { title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' },
        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }
      ]
    }
  ]
  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started in minutes', category: 'Getting Started', link: '/docs/quick-start' },
    { title: 'API Authentication', description: 'Learn how to authenticate', category: 'API Reference', link: '/docs/api/auth' },
    { title: 'AI Model Training', description: 'Train your own models', category: 'AI Solutions', link: '/docs/ai/training' },
    { title: 'Cloud Security', description: 'Secure your cloud infrastructure', category: 'Cloud Services', link: '/docs/cloud/security' }
  ]
  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0)
  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Documentation - Zion Tech Group"
        description="Complete documentation for Zion Tech Group's AI and IT solutions. Find guides, tutorials, API references, and best practices."
        keywords="documentation, API docs, guides, tutorials, AI solutions, cloud services, technical documentation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relativepy-20px-4overflow-hidden">
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relativemax-w-7xl mx-autotext-center">
          <h1 className="text-5xlmd:text-7xlfont-boldtext-white mb-6 leading-tight">
            Documentation
            <span className="blockbg-gradient-to-rfrom-purple-400via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our AI and IT solutions. 
            Comprehensive guides, API references, and best practices.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xlmx-automb-8">
            <div className="relative">
              <Search className="absoluteleft-4top-1/2transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-fullpl-12pr-4py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
      
            </div>
          ))
        </div>
      </section>

      {/* Popular Docs */}
      <section$1>
        <div$2>
          <h2 className="text-3xlfont-boldtext-whitemb-8 text-center">Popular Documentation
          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (}
              <div key={index} className="bg-white/5backdrop-blur-smrounded-xlp-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flexitems-centergap-3mb-4">
                  <div className="w-10h-10bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5h-5text-white" />
                  <span className="text-purple-400text-smfont-medium">{doc.category}
                <h3 className="text-lgfont-semiboldtext-whitemb-2 group-hover:text-purple-400 transition-colors">
                  {doc.title}
                <p className="text-gray-300text-smmb-4">{doc.description}
                <$2 />
                  href={doc.link}
                  className="inline-flexitems-centergap-2text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm">
                  Read More
                  <ArrowRight className="w-4h-4" />
            ))}
      {/* Documentation Categories */}
      <section$1>
        <div$2>
          <h2 className="text-3xlfont-boldtext-whitemb-12 text-center">Browse by Category
          <div className="gridgrid-cols-1lg:grid-cols-2gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-white/5backdrop-blur-smrounded-2xlp-8 border border-white/10">
                <div className="flexitems-centergap-4mb-6">
                  <div className="w-12h-12bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6h-6text-white" />
                  <div>
                    <h3 className="text-2xlfont-boldtext-whitemb-2">{category.title}
                    <p className="text-gray-300">{category.description}
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <$2 />
                      key={docIndex}
                      href={doc.link}
                      className="blockp-4bg-white/5rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                      <div className="flexitems-centerjustify-between">
                        <div>
                          <h4 className="text-lgfont-semiboldtext-whitemb-1 group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          <p className="text-gray-300text-sm">{doc.description}
                        <ChevronRight className="w-5h-5text-gray-400group-hover:text-purple-400 transition-colors" />
                  ))}
                ))
              </div>
            ))}
      {/* CTA Section */}
      <section$1>
        <div$2>
          <h2 className="text-4xlmd:text-5xlfont-boldtext-white mb-6">
            Need Help?
          <p className="text-xltext-purple-100mb-8">
            Can't find what you're looking for? Our support team is here to help.
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-whitetext-purple-600px-8py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Contact Support
            <button className="border-2border-whitetext-whitepx-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">Join Community
      <Footer />
  )
}</div></div></div></div></div></div></div></div></div></span></button></button></p></p></p></p></h2></h2></h2></h3></h3></h4></section></section></section>
</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5

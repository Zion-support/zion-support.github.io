'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Services',
      icon: '🤖',
      description: 'AI and machine learning service documentation',
      docs: [
        { title: 'AI Content Generation', description: 'Generate content with AI', link: '/docs/ai/content' },
        { title: 'AI Analytics', description: 'AI-powered analytics tools', link: '/docs/ai/analytics' },
        { title: 'AI Automation', description: 'Automate workflows with AI', link: '/docs/ai/automation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: '💻',
      description: 'Micro SAAS solutions and tools',
      docs: [
        { title: 'Available Tools', description: 'List of all micro SAAS tools', link: '/docs/micro-saas/tools' },
        { title: 'Integration Guide', description: 'Integrate with your existing systems', link: '/docs/micro-saas/integration' },
        { title: 'Pricing & Plans', description: 'Pricing information and plans', link: '/docs/micro-saas/pricing' }
      ]
    },
    {
      title: 'Security',
      icon: '🔒',
      description: 'Security best practices and compliance',
      docs: [
        { title: 'Security Overview', description: 'Our security measures', link: '/docs/security/overview' },
        { title: 'Compliance', description: 'Compliance and certifications', link: '/docs/security/compliance' },
        { title: 'Data Protection', description: 'How we protect your data', link: '/docs/security/data-protection' }
      ]
    },
    {
      title: 'Support',
      icon: '🆘',
      description: 'Help and support resources',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/support/faq' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/support/troubleshooting' },
        { title: 'Contact Support', description: 'Get help from our team', link: '/docs/support/contact' }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>)
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system"></div>
      <Navigation /></Navigatio>

      <main className="relative z-10 pt-20">{/* Hero Section */}</mai>
        <section className="py-20 px-4 text-center"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating"></h1></<<<h1>Documentation</h1></h1><p className="text-xl md:text-2 xl text-cyan-400 mb-8 font-medium cyber-glow"></p></<<<p>Everything</p></<<p>You</p> Need to Get Started<p className="text-base sm:text-lg text-gray-300 max-w-4 xl mx-auto mb-12 leading-relaxed">Comprehensive documentation for all our services, APIs, and tools.</p></<<<p>Find</p></<<p>guides</p>, tutorials, and reference materials to help you succeed.</p>
            </p>

            {/* Search Bar */}
            <div className="max-w-2 xl mx-auto mb-12"></div>
              <div className="relative"></div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Searc>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) =>setSearchQuery(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"</input>
                /></input>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4"></sectio>
          <div className="max-w-7 xl mx-auto"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Documentation</h2></<<h2>Categories</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredDocs.map((category, index) => (</div>
                <div key={index} className="cyber-card-enhanced p-6 data-stream"></div>
                  <div className="flex items-center mb-4"></div>
                    <span className="text-3 xl mr-3"></spa>{category.icon}<h3 className="text-xl font-bold text-white"></h>{category.title}<p className="text-gray-300 mb-6"></p>{category.description}<div className="space-y-3">{category.docs.map((doc, docIndex) => (</div>
                      <Link
                        key={docIndex}
                        to={doc.link}
                        className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                      ></Lin>
                        <div className="flex items-center justify-between"></div>
                          <div></div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{doc.title}</h4><p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" /></ChevronRigh>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredDocs.length === 0 && searchQuery && (
              <div className="text-center py-16"></div>
                <div className="text-6 xl mb-4"></div>🔍<h3 className="text-2 xl font-bold text-white mb-4">No results found</h>
                <p className="text-gray-300 mb-8"></p></<<<p>Try</p></<<p>adjusting</p> your search terms<button
                  onClick={() =>setSearchQuery('')}</button></<<<butto>className</butto></butto>="cyber-button px-6 py-3"
                ></<<<button>Clear</button></<<button>Search</button></button>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 bg-slate-800/30"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-12 text-center neon-text">Quick Links</h>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              <Link
                to="/api-docs"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              ></Lin>
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Cod>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors"></h3></<<<h3>API</h3></<<h3>Reference</h3><p className="text-sm text-gray-400">Complete API documentation</p>
              </Link>

              <Link
                to="/micro-saas"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              ></Lin>
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></BookOpe>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors"></h3></<<<h3>Micro</h3></<<h3>SAAS</h3><p className="text-sm text-gray-400">Micro SAAS solutions guide</p>
              </Link>

              <Link
                to="/compliance"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              ></Lin>
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></FileTex>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors"></h3></<<<h3>Compliance</h3></h3><p className="text-sm text-gray-400">Security and compliance info</p>
              </Link>

              <Link
                to="/contact"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              ></Lin>
                <Download className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Downloa>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors"></h3></<<<h3>Get</h3></<<h3>Help</h3><p className="text-sm text-gray-400">Contact our support team</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></sectio>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Can</h2></h2>'t Find What You're Looking For?<p className="text-lg text-gray-300 mb-8">Our support team is here to help you with any questions or issues you might have.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4"
              >Contact Support</a>
                <ArrowRight className="w-4 h-4 ml-2" /></ArrowRigh>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call: (302) 464-0950</a>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default DocsPage;

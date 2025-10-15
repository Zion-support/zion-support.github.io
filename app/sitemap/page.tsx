import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Search, Map } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
  const features = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Company information and team' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Portfolio', url: '/portfolio', description: 'Our work and projects' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' },]
        { name: 'Demo', url: '/demo', description: 'Schedule a product demo' }]
      ]
    },
    {
      title: 'AI Services',
      pages: [
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered business analytics' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analysis' },
        { name: 'AI Marketing Automation', url: '/ai-marketing-automation', description: 'Automated marketing campaigns' },
        { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Voice-enabled AI solutions' },]
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Business process automation' }]
      ]
    },
    {
      title: 'IT Services',
      pages: [
        { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud infrastructure migration' },
        { name: 'DevOps Services', url: '/devops-services', description: 'Development and operations' },
        { name: 'IT Consulting', url: '/it-consulting', description: 'Technology consulting services' },
        { name: 'Network Security', url: '/network-security', description: 'Cybersecurity solutions' },
        { name: 'Software Development', url: '/software-development', description: 'Custom software solutions' },
        { name: 'System Integration', url: '/system-integration', description: 'System integration services' },]
        { name: 'Web Development', url: '/web-development', description: 'Modern web applications' }]
      ]
    },
    {
      title: 'Micro SAAS',
      pages: [
        { name: 'Zion AI Video Generator', url: '/zion-ai-video-generator', description: 'AI-powered video creation' },
        { name: 'Zion AI Invoice Generator', url: '/zion-ai-invoice-generator', description: 'Automated invoice generation' },
        { name: 'Zion AI CRM Pro', url: '/zion-ai-crm-pro', description: 'Intelligent CRM system' },
        { name: 'Zion AI Marketing Automation', url: '/zion-ai-marketing-automation', description: 'Marketing automation platform' },
        { name: 'Zion AI Content Studio', url: '/zion-ai-content-studio', description: 'Content creation suite' },
        { name: 'Zion AI Financial Analytics', url: '/zion-ai-financial-analytics', description: 'Financial data analysis' },
        { name: 'Zion AI Inventory Smart', url: '/zion-inventory-smart', description: 'Smart inventory management' },]
        { name: 'Zion AI Data Cleaner', url: '/zion-ai-data-cleaner', description: 'Data cleaning and validation' }]
      ]
    },
    {
      title: '5G Solutions',
      pages: [
        { name: '5G Implementation', url: '/5g-implementation', description: '5G network deployment' },
        { name: '5G Network Infrastructure', url: '/5g-network-infrastructure', description: '5G infrastructure solutions' },
        { name: '5G IoT Solutions', url: '/5g-iot-solutions', description: 'IoT connectivity solutions' },
        { name: '5G Edge Computing', url: '/5g-edge-computing', description: 'Edge computing services' },
        { name: '5G Private Networks', url: '/5g-private-networks', description: 'Private 5G networks' },]
        { name: '5G Smart City Solutions', url: '/5g-smart-city-solutions', description: 'Smart city implementations' }]
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Support', url: '/support', description: 'Technical support and help' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/api-docs', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and guides' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' },
        { name: 'News', url: '/news', description: 'Company news and updates' },]
        { name: 'Status Page', url: '/status', description: 'System status and uptime' }]
      ]
    },
    {
      title: 'Company',
      pages: [
        { name: 'Our Team', url: '/team', description: 'Meet our team members' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities' },]
        { name: 'Partners', url: '/partners', description: 'Partnership information' }]
      ]
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },]
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' }]
      ]
    }
  ];

const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'View Services', url: '/services', icon: <ExternalLink className="w-4 h-4" /> },
    { name: 'Schedule Demo', url: '/demo', icon: <ExternalLink className="w-4 h-4" /> },
    { name: 'Contact Support', url: '/support', icon: <ExternalLink className="w-4 h-4" /> }
  ];
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Website Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category for easy navigation." />
        <meta name="keywords" content="sitemap, navigation, website map, pages, services, resources" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete website sitemap and navigation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Sitemap</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete navigation guide to all pages and services on our website. Find what you're looking for quickly and easily.
              </p>
              {/* Search Bar */}
              
        <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
    type="text"
                  placeholder="Search pages..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Quick Links */}
        <section className="py-8 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
    key={index} href={link.url}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-6 py-3 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300"
                >
                  <span>{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* Sitemap Sections */}
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  
        <div className="flex items-center mb-6">
                    
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Map className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  
        <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <a
    key={pageIndex} href={page.url}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        
        <div className="flex items-center justify-between">
                          
        <div className="flex-1">
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {page.name}
                            </h3>
                            
          <p className="text-gray-400 text-sm">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Additional Resources */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              
          <p className="text-xl text-gray-300">Quick access to important resources and tools</p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">XML Sitemap</h3>
                
          <p className="text-gray-300 text-sm mb-4">Machine-readable sitemap for search engines</p>
                <a
    href="/sitemap.xml"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  View XML Sitemap
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Search</h3>
                
          <p className="text-gray-300 text-sm mb-4">Search across all pages and content</p>
                <a
    href="/search"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Search Website
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">RSS Feed</h3>
                
          <p className="text-gray-300 text-sm mb-4">Subscribe to our content updates</p>
                <a
    href="/rss.xml"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Subscribe to RSS
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Help Center</h3>
                
          <p className="text-gray-300 text-sm mb-4">Get help and support</p>
                <a
    href="/support"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Visit Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
            
          <p className="text-xl text-gray-300 mb-8">
              If you can't find the page or information you need, our team is here to help.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
    href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
    href="/support"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SitemapPage;
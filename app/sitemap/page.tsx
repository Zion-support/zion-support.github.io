import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'About Us', path: '/about', description: 'Learn about our company and team' },
    { name: 'Services', path: '#', description: 'Our service offerings' },
    { name: 'Portfolio', path: '/portfolio', description: 'View our work and case studies' },
    { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
    { name: 'News', path: '/news', description: 'Latest news and updates' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
  ];

  const servicePages = [
    { name: 'Micro SAAS Solutions', path: '/micro-saas', description: 'AI-powered micro SAAS tools' },
    { name: 'AI Services', path: '/ai-services', description: 'Artificial intelligence solutions' },
    { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' }
  ];

  const supportPages = [
    { name: 'Help Center', path: '/help', description: 'Get help and support' },
    { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', path: '/api-docs', description: 'API documentation and examples' },
    { name: 'System Status', path: '/status', description: 'Service status and uptime' },
    { name: 'Support', path: '/support', description: 'Contact support team' }
  ];

  const companyPages = [
    { name: 'About Us', path: '/about', description: 'Company information' },
    { name: 'Careers', path: '/careers', description: 'Job opportunities' },
    { name: 'News', path: '/news', description: 'Company news and updates' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data protection and privacy' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'Service Level Agreement', path: '/sla', description: 'SLA and support guarantees' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' },
    { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' }
  ];

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...supportPages,
    ...companyPages,
    ...legalPages
  ].filter((page, index, self) => 
    index === self.findIndex(p => p.path === page.path)
  );

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | All Pages & Navigation</title>
        <meta name="description" content="Complete sitemap of all pages on Zion Tech Group&apos;s website. Find any page quickly and easily." />
        <meta name="keywords" content="sitemap, navigation, pages, website structure, links" />
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
                <ExternalLink className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete overview of all pages on our website. Find what you&apos;re looking for quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Main Pages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <Link 
                      to={page.path} 
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{page.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                        <span className="text-sm font-semibold">Visit Page</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Pages */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicePages.map((page, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <Link 
                      to={page.path} 
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{page.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Support & Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportPages.map((page, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <Link 
                      to={page.path} 
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{page.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                        <span className="text-sm font-semibold">Access Resource</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Pages */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Company</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyPages.map((page, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <Link 
                      to={page.path} 
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{page.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                        <span className="text-sm font-semibold">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Legal & Policies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalPages.map((page, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <Link 
                      to={page.path} 
                      className="block group"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{page.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300">
                        <span className="text-sm font-semibold">Read Policy</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Pages List */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Page List</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid md:grid-cols-2 gap-4">
                  {allPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                      <div>
                        <Link 
                          to={page.path} 
                          className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          {page.name}
                        </Link>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Need Help Finding Something?</h2>
              <p className="text-xl text-white/90 mb-8">
                Can&apos;t find what you&apos;re looking for? Contact our support team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/help" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;
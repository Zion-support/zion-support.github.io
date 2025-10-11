'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link, ExternalLink, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'About', path: '/about', description: 'Learn about our company' },
    { name: 'Services', path: '/services', description: 'Our AI and IT services' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { name: 'Pricing', path: '/pricing', description: 'View our pricing plans' },
    { name: 'Blog', path: '/blog', description: 'Latest news and insights' }
  ];

  const servicePages = [
    { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
    { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
    { name: 'Micro SAAS', path: '/micro-saas', description: 'Micro Software as a Service solutions' },
    { name: 'Consultation', path: '/consultation', description: 'Free consultation booking' },
    { name: 'Demo', path: '/demo', description: 'Interactive product demos' }
  ];

  const resourcePages = [
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Tutorials', path: '/tutorials', description: 'Learning resources and tutorials' },
    { name: 'Support', path: '/support', description: 'Customer support and help' },
    { name: 'Careers', path: '/careers', description: 'Job opportunities and careers' }
  ];

  const legalPages = [
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage and management' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through all the pages and sections of our website to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Main Pages</h2>
              <div className="space-y-4">
                {mainPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                      <p className="text-gray-300 text-sm">{page.description}</p>
                    </div>
                    <a
                      href={page.path}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Services</h2>
              <div className="space-y-4">
                {servicePages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                      <p className="text-gray-300 text-sm">{page.description}</p>
                    </div>
                    <a
                      href={page.path}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Resource Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
              <div className="space-y-4">
                {resourcePages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                      <p className="text-gray-300 text-sm">{page.description}</p>
                    </div>
                    <a
                      href={page.path}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Legal</h2>
              <div className="space-y-4">
                {legalPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                      <p className="text-gray-300 text-sm">{page.description}</p>
                    </div>
                    <a
                      href={page.path}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">External Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-300 text-sm">Follow us for updates</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">GitHub</h3>
                  <p className="text-gray-300 text-sm">View our open source projects</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Twitter</h3>
                  <p className="text-gray-300 text-sm">Latest news and announcements</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">YouTube</h3>
                  <p className="text-gray-300 text-sm">Tutorials and demos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
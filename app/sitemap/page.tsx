import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

const SitemapPage: React.FC = () => {
  const sitemapData = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Services', url: '/services' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Blog', url: '/blog' },
        { name: 'Team', url: '/team' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      category: 'AI Services',
      pages: [
        { name: 'AI Services Overview', url: '/ai-services' },
        { name: 'AI Marketing', url: '/ai-marketing' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare' },
        { name: 'AI Fintech', url: '/ai-fintech' },
        { name: 'AI Content Generation', url: '/ai-content-generation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' }
      ]
    },
    {
      category: 'IT Services',
      pages: [
        { name: 'IT Services Overview', url: '/it-services' },
        { name: 'IT Infrastructure', url: '/it-infrastructure' },
        { name: 'IT Support', url: '/it-support' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
        { name: 'Cybersecurity', url: '/cybersecurity' }
      ]
    },
    {
      category: 'Emerging Technologies',
      pages: [
        { name: 'Blockchain', url: '/blockchain' },
        { name: 'Quantum Computing', url: '/quantum-computing' },
        { name: 'IoT Edge Computing', url: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', url: '/ar-vr-solutions' },
        { name: 'Autonomous Systems', url: '/autonomous-systems' }
      ]
    },
    {
      category: 'Support & Resources',
      pages: [
        { name: 'Documentation', url: '/docs' },
        { name: 'API Documentation', url: '/api-docs' },
        { name: 'Support Center', url: '/support' },
        { name: 'System Status', url: '/status' },
        { name: 'Consultation', url: '/consultation' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
                Navigate our website easily. Find all our pages, services, and resources organized by category.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sitemapData.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                  <ul className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.url}
                          className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          {page.name}
                          <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our search function or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Search Site
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;
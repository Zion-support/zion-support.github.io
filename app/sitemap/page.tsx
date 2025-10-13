import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, FileText, Users, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Globe className="w-6 h-6" />,
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Team', url: '/team' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'Services',
      icon: <Settings className="w-6 h-6" />,
      links: [
        { name: 'AI Services', url: '/ai-services' },
        { name: 'IT Services', url: '/services' },
        { name: 'Micro SAAS', url: '/micro-saas' },
        { name: '5G Solutions', url: '/5g-solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: <FileText className="w-6 h-6" />,
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'News', url: '/news' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'White Papers', url: '/whitepapers' },
        { name: 'Webinars', url: '/webinars' },
        { name: 'Documentation', url: '/docs' }
      ]
    },
    {
      title: 'Company',
      icon: <Users className="w-6 h-6" />,
      links: [
        { name: 'Press', url: '/press' },
        { name: 'Partners', url: '/partners' },
        { name: 'Accessibility', url: '/accessibility' },
        { name: 'Security', url: '/security' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Sitemap - Zion Tech Group | Site Navigation"
        description="Complete sitemap of Zion Tech Group website. Find all pages and sections organized by category for easy navigation."
        keywords="sitemap, site navigation, website structure, pages, links"
        canonical="https://ziontechgroup.com/sitemap"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Sitemap
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete overview of all pages and sections on our website. Find what you're looking for quickly and easily.
          </p>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStructure.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.url}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you can't find the information you need, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              Help Center
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
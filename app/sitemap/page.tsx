import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';

const SitemapPage = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Services', url: '/services' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Demo', url: '/demo' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'AI Content Generation', url: '/ai-content-generation' },
        { name: 'AI Customer Support', url: '/ai-customer-support' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'View All AI Services', url: '/ai-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', url: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', url: '/zion-cloud-vault' },
        { name: 'Zion AI CRM Pro', url: '/zion-ai-crm-pro' },
        { name: 'View All Micro SAAS', url: '/micro-saas' }
      ]
    },
    {
      title: '5G Solutions',
      links: [
        { name: '5G Data Analytics', url: '/5g-data-analytics' },
        { name: '5G Edge Computing', url: '/5g-edge-computing' },
        { name: '5G Implementation', url: '/5g-implementation' },
        { name: '5G Mobile Applications', url: '/5g-mobile-applications' },
        { name: 'View All 5G Solutions', url: '/5g-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Team', url: '/team' },
        { name: 'Careers', url: '/careers' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'News', url: '/news' },
        { name: 'Press', url: '/press' },
        { name: 'Partners', url: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', url: '/docs' },
        { name: 'API Reference', url: '/api' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Webinars', url: '/webinars' },
        { name: 'White Papers', url: '/whitepapers' },
        { name: 'Support', url: '/support' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group | Website Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all our AI services, micro SAAS solutions, and resources." />
        <meta name="keywords" content="sitemap, navigation, website map, AI services, micro SAAS" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Sitemap
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Navigate our website easily with our comprehensive sitemap. Find all our AI services, micro SAAS solutions, and resources.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Map className="w-6 h-6 text-cyan-400 mr-3" />
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
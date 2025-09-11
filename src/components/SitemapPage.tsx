import React from 'react';
import { SEO } from '@/components/SEO';

export function SitemapPage() {
  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', url: '/services/ai' },
        { name: 'IT Services', url: '/services/it' },
        { name: 'Cloud Solutions', url: '/services/cloud' },
        { name: 'Cybersecurity', url: '/services/cybersecurity' },
        { name: 'Digital Transformation', url: '/services/digital-transformation' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', url: '/solutions/enterprise' },
        { name: 'Healthcare', url: '/solutions/healthcare' },
        { name: 'Financial Services', url: '/solutions/financial' },
        { name: 'Manufacturing', url: '/solutions/manufacturing' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'White Papers', url: '/white-papers' },
        { name: 'Webinars', url: '/webinars' },
        { name: 'Documentation', url: '/docs' },
        { name: 'API Reference', url: '/api' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact us
            </a>{' '}
            for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Sitemap() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const pages = [
    { href: '/', title: 'Home', description: 'Main landing page' },
    { href: '/about', title: 'About Us', description: 'Learn about our company and mission' },
    { href: '/services', title: 'Services', description: 'Explore our comprehensive service offerings' },
    { href: '/contact', title: 'Contact', description: 'Get in touch with our team' },
    { href: '/team', title: 'Team', description: 'Meet our expert team members' },
    { href: '/docs', title: 'Documentation', description: 'Technical documentation and guides' },
    { href: '/blog', title: 'Blog', description: 'Latest news and insights' },
    { href: '/careers', title: 'Careers', description: 'Join our growing team' }
  ];

  const servicePages = [
    { href: '/services/ai-services', title: 'AI Services', description: 'Artificial intelligence solutions' },
    { href: '/services/micro-saas', title: 'Micro SaaS', description: 'Focused software solutions' },
    { href: '/services/it-services', title: 'IT Services', description: 'Comprehensive IT solutions' },
    { href: '/services/blockchain', title: 'Blockchain', description: 'Decentralized solutions' },
    { href: '/services/ai-analytics', title: 'AI Analytics', description: 'Data analytics and insights' }
  ];

  const docPages = [
    { href: '/docs/getting-started', title: 'Getting Started', description: 'Quick start guide' },
    { href: '/docs/api-reference', title: 'API Reference', description: 'Complete API documentation' },
    { href: '/docs/integration-examples', title: 'Integration Examples', description: 'Real-world integration examples' },
    { href: '/docs/authentication', title: 'Authentication', description: 'API authentication guide' },
    { href: '/docs/first-steps', title: 'First Steps', description: 'Initial setup and configuration' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, documentation, and company information." />
        <link rel="canonical" href={`${contact.site}/sitemap`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services on our website
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Main Pages</h2>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.href} className="border-b border-white/10 pb-3 last:border-b-0">
                    <Link href={page.href} className="text-white hover:text-blue-400 transition-colors">
                      {page.title}
                    </Link>
                    <p className="text-slate-400 text-sm mt-1">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Pages */}
            <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Services</h2>
              <div className="space-y-4">
                {servicePages.map((page) => (
                  <div key={page.href} className="border-b border-white/10 pb-3 last:border-b-0">
                    <Link href={page.href} className="text-white hover:text-blue-400 transition-colors">
                      {page.title}
                    </Link>
                    <p className="text-slate-400 text-sm mt-1">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation Pages */}
            <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Documentation</h2>
              <div className="space-y-4">
                {docPages.map((page) => (
                  <div key={page.href} className="border-b border-white/10 pb-3 last:border-b-0">
                    <Link href={page.href} className="text-white hover:text-blue-400 transition-colors">
                      {page.title}
                    </Link>
                    <p className="text-slate-400 text-sm mt-1">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
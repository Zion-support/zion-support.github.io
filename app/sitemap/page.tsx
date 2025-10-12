import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function SitemapPage() {
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Services', url: '/services' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Demo', url: '/demo' },
    { name: 'Support', url: '/support' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ]

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages and services easily." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
          <p className="text-xl text-gray-300 mb-12">
            Find all our pages and services organized for easy navigation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.url}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                  {page.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{page.url}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
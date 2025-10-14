'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

const SitemapPage: React.FC  = () => {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Find all the pages and resources available on our website.
            </p>
                </div>
        </div>
                </section>
                {/* Sitemap Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-8">All Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                ></Link
>
                {page.name}
                </Link>
              ))}
                </div>
                </div>
        </div>
                </section>

      <Footer />
    </div>
  )
}

export default SitemapPage;
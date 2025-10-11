'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Find all pages and sections of our website in our comprehensive sitemap." />
        <meta name="keywords" content="sitemap, website map, navigation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Sitemap</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find all pages and sections of our website in our comprehensive sitemap.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Main Pages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                  <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/ai-services" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
                  <li><a href="/it-services" className="hover:text-cyan-400 transition-colors">IT Services</a></li>
                  <li><a href="/micro-saas" className="hover:text-cyan-400 transition-colors">Micro SaaS</a></li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                  <li><a href="/tutorials" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
                  <li><a href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default SitemapPage

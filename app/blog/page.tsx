'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Read our latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT solutions, technology trends, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, IT solutions, and technology trends.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">The Future of AI in Business</h3>
                <p className="text-gray-300 mb-4">
                  Explore how artificial intelligence is transforming modern business operations and driving innovation.
                </p>
                <div className="text-sm text-cyan-400">Read More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Computing Best Practices</h3>
                <p className="text-gray-300 mb-4">
                  Learn essential strategies for implementing and managing cloud infrastructure effectively.
                </p>
                <div className="text-sm text-cyan-400">Read More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Trends 2024</h3>
                <p className="text-gray-300 mb-4">
                  Discover the latest cybersecurity threats and protection strategies for your organization.
                </p>
                <div className="text-sm text-cyan-400">Read More →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage

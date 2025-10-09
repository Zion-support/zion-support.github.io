'use client';
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'AI Trends 2026: Future Enterprise Transformation',
      excerpt: 'Discover the latest AI trends that will shape enterprise transformation in 2026.',
      date: '2026-01-15',
      author: 'Zion Tech Group',
      slug: '/blog/ai-trends-2026-future-enterprise-transformation'
    },
    {
      title: 'Autonomous Enterprise Operations Revolution',
      excerpt: 'How autonomous systems are revolutionizing enterprise operations.',
      date: '2025-12-20',
      author: 'Zion Tech Group',
      slug: '/blog/ai-2025-march-autonomous-enterprise-operations-revolution'
    },
    {
      title: 'AI-Powered Autonomous Business Processes 2026',
      excerpt: 'Exploring the future of AI-powered autonomous business processes.',
      date: '2025-11-10',
      author: 'Zion Tech Group',
      slug: '/blog/ai-powered-autonomous-business-processes-2026'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, and digital transformation from Zion Tech Group experts."
        keywords={['blog', 'AI insights', 'technology trends', 'digital transformation', 'enterprise AI']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, technology trends, and digital transformation.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  
                  <a
                    href={post.slug}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
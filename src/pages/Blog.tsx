import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 'ai-2025-oct-02-agent-safety-scorecards',
      title: 'AI Agent Safety Scorecards: Building Trust in Autonomous Systems',
      excerpt: 'Learn how to implement comprehensive safety scorecards for AI agents to ensure reliable and trustworthy autonomous operations.',
      date: 'October 2, 2025',
      category: 'AI Safety',
      readTime: '8 min read',
      image: '/images/ai-safety.jpg'
    },
    {
      id: 'ai-2025-sept-30-breaking-enterprise-ai-breakthroughs',
      title: 'Breaking Enterprise AI Breakthroughs: 2025 Innovation Trends',
      excerpt: 'Discover the latest enterprise AI breakthroughs that are transforming how businesses operate and compete in the digital age.',
      date: 'September 30, 2025',
      category: 'Enterprise AI',
      readTime: '12 min read',
      image: '/images/enterprise-ai.jpg'
    },
    {
      id: 'ai-2025-sept-30-customer-agent-blueprints',
      title: 'Customer Agent Blueprints: Designing AI for Exceptional CX',
      excerpt: 'Comprehensive guide to designing AI-powered customer agents that deliver exceptional customer experiences and drive business growth.',
      date: 'September 30, 2025',
      category: 'Customer Experience',
      readTime: '10 min read',
      image: '/images/customer-agents.jpg'
    },
    {
      id: 'ai-executive-playbook-2027',
      title: 'AI Executive Playbook 2027: Strategic Implementation Guide',
      excerpt: 'Essential strategies and frameworks for C-level executives to successfully implement AI initiatives and drive digital transformation.',
      date: 'September 30, 2025',
      category: 'Strategy',
      readTime: '15 min read',
      image: '/images/ai-strategy.jpg'
    },
    {
      id: 'edge-2025-oct-01-consentless-feature-flags-v4',
      title: 'Consentless Feature Flags v4: Privacy-First Development',
      excerpt: 'Advanced techniques for implementing feature flags without compromising user privacy or requiring explicit consent.',
      date: 'October 1, 2025',
      category: 'Privacy',
      readTime: '6 min read',
      image: '/images/feature-flags.jpg'
    },
    {
      id: 'edge-2025-oct-02-private-experiments-v4',
      title: 'Private Experiments v4: Secure A/B Testing Framework',
      excerpt: 'Build robust A/B testing frameworks that protect user privacy while delivering actionable insights for product optimization.',
      date: 'October 2, 2025',
      category: 'Experimentation',
      readTime: '9 min read',
      image: '/images/experiments.jpg'
    },
    {
      id: 'genai-2025-oct-01-e2e-eval-pipelines',
      title: 'End-to-End Evaluation Pipelines for Generative AI',
      excerpt: 'Complete guide to building comprehensive evaluation pipelines that ensure quality and reliability in generative AI systems.',
      date: 'October 1, 2025',
      category: 'Generative AI',
      readTime: '11 min read',
      image: '/images/eval-pipelines.jpg'
    },
    {
      id: 'genai-2025-oct-02-cache-playbook-v2',
      title: 'Generative AI Cache Playbook v2: Performance Optimization',
      excerpt: 'Advanced caching strategies to optimize performance and reduce costs in large-scale generative AI deployments.',
      date: 'October 2, 2025',
      category: 'Performance',
      readTime: '7 min read',
      image: '/images/caching.jpg'
    },
    {
      id: 'quantum-edge-ai-revolution-october-2025',
      title: 'Quantum Edge AI Revolution: The Future of Computing',
      excerpt: 'Exploring the convergence of quantum computing and edge AI to create unprecedented processing capabilities.',
      date: 'October 1, 2025',
      category: 'Quantum Computing',
      readTime: '14 min read',
      image: '/images/quantum-ai.jpg'
    }
  ];

  const categories = ['All', 'AI Safety', 'Enterprise AI', 'Customer Experience', 'Strategy', 'Privacy', 'Experimentation', 'Generative AI', 'Performance', 'Quantum Computing'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, and enterprise solutions from Zion Tech Group's expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Technology Insights & AI Trends
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, technology trends, and enterprise solutions 
              from our team of industry experts.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-4xl">📄</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI and technology insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
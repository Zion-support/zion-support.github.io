import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Advanced Technology</h3>
            <p className="text-gray-300 mb-4">
              Cutting-edge solutions that push the boundaries of what's possible
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AI-powered automation</li>
              <li>• Quantum computing breakthroughs</li>
              <li>• Neural interface technology</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Innovation Hub</h3>
            <p className="text-gray-300 mb-4">
              Discover the latest developments in technology and innovation
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Research and development</li>
              <li>• Industry partnerships</li>
              <li>• Future technology trends</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Solutions</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive technology solutions for modern challenges
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Enterprise solutions</li>
              <li>• Custom development</li>
              <li>• Technology consulting</li>
            </ul>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

interface SimplePost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const POSTS: SimplePost[] = [
  { id: 'agentic-product-playbooks', title: 'Agentic Product Playbooks', excerpt: 'Blueprints for shipping agent workflows.', category: 'AI & ML', readTime: '6 min' },
  { id: 'evals-and-guardrails', title: 'Evals, Guardrails, and Safety', excerpt: 'Build trustworthy AI systems.', category: 'AI Safety', readTime: '7 min' },
  { id: 'cloud-cost-optimization-2025', title: 'Cloud Cost Optimization 2025', excerpt: 'Modern FinOps for resilient platforms.', category: 'Cloud', readTime: '8 min' },
];

export default function Blog() {
  const [query, setQuery] = useState('');
  const filtered = POSTS.filter(p => (
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO title="Blog - Zion Tech Group" description="Insights on AI, cloud, and modern engineering." />

      <section className="py-20 px-6 text-center">
        <p className="text-gray-300 max-w-2xl mx-auto">New guides and updates from the team.</p>
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-600/60 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
              <div className="text-xs text-cyan-300 mb-2">{post.category} • {post.readTime}</div>
              <h2 className="text-white text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                Read →
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </divarticle>
          ))}
        </div>
      </section>
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-79ca
    </div>
  );
};

export default Blog;
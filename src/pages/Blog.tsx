import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="text-5xl font-bold text-white mb-4">Blog</motion.h1>
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
            <motion.article key={post.id} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.3}} className="bg-slate-800/40 border border-slate-600/50 rounded-xl p-6">
              <div className="text-xs text-cyan-300 mb-2">{post.category} • {post.readTime}</div>
              <h2 className="text-white text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                Read →
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}


import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams() as { slug: string };

  // Mock blog post data - in a real app, this would come from an API
  const post = {
    id: 1,
    title: 'The Future of AI: Autonomous Business Operations in 2025',
    excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
    content: `
      <p>Artificial Intelligence is transforming the way businesses operate, from customer service to supply chain management. 
      As we approach 2025, autonomous AI systems are becoming increasingly sophisticated and capable of handling complex business processes.</p>
      
      <p>These systems can analyze vast amounts of data, identify patterns, and make decisions in real-time, often outperforming human capabilities 
      in certain areas. However, this doesn't mean humans will be replaced entirely. Instead, AI will augment human capabilities, 
      allowing teams to focus on strategic thinking and creative problem-solving.</p>
      
      <p>The key to successful AI implementation lies in understanding how to integrate these systems effectively with existing business processes 
      and ensuring proper oversight and governance.</p>
    `,
    category: 'AI',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['AI', 'Automation', 'Business', 'Future']
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back to blog button */}
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
        
        {/* Article header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            {post.excerpt}
          </p>
          
          {/* Author and metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-slate-700 rounded-full mr-3 flex items-center justify-center">
                <span className="text-lg font-semibold">{post.author.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-slate-400">AI Researcher</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <Link 
            to="/blog"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

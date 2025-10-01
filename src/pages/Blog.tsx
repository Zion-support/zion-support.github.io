import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../content/blog-posts';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-xs uppercase tracking-wider text-zion-cyan mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-zion-slate-light mb-4">{post.description}</p>
              <div className="text-sm text-zion-slate flex items-center justify-between mb-4">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="text-zion-cyan hover:underline">Read more</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

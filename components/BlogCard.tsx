import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  readTime?: string;
  category?: string;
}

export default function BlogCard({ 
  title, 
  description, 
  icon, 
  link, 
  readTime = '5 min read',
  category
}: BlogCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        {category && (
          <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-lg text-sm font-semibold border border-purple-400/30">
            {category}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">{readTime}</span>
        <Link 
          href={link} 
          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/services', title: 'Services' },
    { path: '/solutions', title: 'Solutions' },
    { path: '/blog', title: 'Blog' },
    { path: '/news', title: 'News' },
    { path: '/contact', title: 'Contact' },
    { path: '/help', title: 'Help' }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Navigate through all pages on our website.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors text-center"
              >
                <span className="text-white font-semibold">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
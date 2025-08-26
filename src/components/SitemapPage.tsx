
import React from 'react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
    { path: '/careers', label: 'Careers' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/green-it', label: 'Green IT' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Site Map</h1>
          <p className="text-xl text-slate-300">
            Complete navigation guide for Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.path} className="bg-slate-800 p-6 rounded-lg">
              <Link 
                to={route.path} 
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                {route.label}
              </Link>
              <p className="text-slate-400 mt-2">{route.path}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

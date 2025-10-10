import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';

const popularPages = [
  {
    title: 'AI Services',
    description: 'Explore our AI-powered solutions',
    href: '/services',
    icon: '🤖'
  },
  {
    title: 'About Us',
    description: 'Learn about our company',
    href: '/about',
    icon: '🏢'
  },
  {
    title: 'Contact',
    description: 'Get in touch with us',
    href: '/contact',
    icon: '📞'
  }
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        
        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-300">
            The page you're looking for doesn't exist or has been moved.
            Don't worry, let's get you back on track!
          </p>
        </div>
        
        {/* Popular Pages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {popularPages.map((page, index) => (
            <Link
              key={index}
              to={page.href}
              className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-left"
            >
              <div className="text-3xl mb-3">{page.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {page.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {page.description}
              </p>
            </a>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
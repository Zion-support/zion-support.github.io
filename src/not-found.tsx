import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';

const NotFound: React.FC = () => {
  const popularPages = [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: '🏠'
    },
    {
      title: 'AI Services',
      description: 'Explore our AI solutions',
      href: '/ai-services',
      icon: '🤖'
    },
    {
      title: 'IT Services',
      description: 'Discover our IT services',
      href: '/it-services',
      icon: '💻'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/contact',
      icon: '📞'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
            </Link>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, BookOpen, Users, Phone } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    {
      title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖'
    },
    {
      title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Fortune 500 AI transformation solutions',
      href: '/enterprise',
      icon: '🏢'
    },
    {
      title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Popular Pages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{page.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {page.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Support
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-300 mb-6">
            Try searching for what you need or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Our Site
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

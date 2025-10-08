import { ArrowLeft, Home, Search, BookOpen, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      title: 'About Us',
      description: 'Learn about our mission and team',
      href: '/about',
      icon: '👥'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>

          {/* Popular Pages */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 text-left"
                >
                  <div className="text-3xl mb-2">{page.icon}</div>
                  <h4 className="text-white font-bold mb-1">{page.title}</h4>
                  <p className="text-gray-300 text-sm">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
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
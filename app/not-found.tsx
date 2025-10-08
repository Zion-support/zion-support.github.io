import Link from 'next/link';
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
      title: 'About Us',
      description: 'Learn more about Zion Tech Group',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
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
          <p className="text-xl text-gray-300 mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Don&apos;t worry, let&apos;s get you back on track!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Popular Pages
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-3xl">{page.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {page.title}
                    </h4>
                    <p className="text-sm text-gray-300">{page.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-gray-300 mb-6">
            Try searching for what you need or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Our Site
            </Link>
            <Link
              href="/contact"
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
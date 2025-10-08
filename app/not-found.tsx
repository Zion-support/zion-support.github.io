import Link from 'next/link';
import { ArrowLeft, Home, Search, Phone } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: '🏠'
    },
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
      description: 'Learn about Zion Tech Group and our mission',
      href: '/about',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white/20 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Don&apos;t worry, let&apos;s get you back on track!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                <div className="text-3xl mb-3">{page.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {page.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
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
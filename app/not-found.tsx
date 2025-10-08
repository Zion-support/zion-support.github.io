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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The page you are looking for does not exist or has been moved. 
            Let us get you back on track!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {popularPages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{page.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {page.title}
              </h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Cannot find what you are looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            Try searching or contact our support team for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import ArrowRight from 'next/link';

export default function NotFound() {
  const popularPages = [
    {
      title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖',
    },
    {
      title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚',
    },
    {
      title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, our AI can help you find what you need!
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for AI services, articles, or case studies..."
              className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 text-lg"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const searchTerm = (e.target as HTMLInputElement).value;
                  if (searchTerm) {
                    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
                  }
                }
              }}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Pages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page) => (
              <ArrowRight
                key={page.href}
                href={page.href}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group"
              >
                <div className="text-4xl mb-4">{page.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {page.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {page.description}
                </p>
              </ArrowRight>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <ArrowRight
            href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            ← Back to Home
          </ArrowRight>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call Support: +1 302 464 0950
          </a>
        </div>

        {/* Help Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              📧 Email: kleber@ziontechgroup.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              📞 Phone: +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Error Code: 404 | Page Not Found</p>
          <p className="mt-2">
            If you believe this is an error, please{' '}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
'use client';

import ArrowRight from 'next/link';

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
    <div>
      <div>
        {/* Error Code */}
        <div>
          <h1>
            404
          </h1>
          <div>🔍</div>
        </div>

        {/* Error Message */}
        <div>
          <h2>
            Oops! Page Not Found
          </h2>
          <p>
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, our AI can help you find what you need!
          </p>
        </div>

        {/* Search Bar */}
        <div>
          <div>
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
            <button>
              Search
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div>
          <h3>
            Popular Pages
          </h3>
          <div>
            {popularPages.map((page) => (
              <ArrowRight
                key={page.href}
                href={page.href}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group"
              >
                <div>{page.icon}</div>
                <h4>
                  {page.title}
                </h4>
                <p>
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
        <div>
          <h3>
            Still need help?
          </h3>
          <p>
            Our AI support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              📧 Email: kleber@ziontechgroup.com
            </a>
            <span>|</span>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              📞 Phone: +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div>
          <p>Error Code: 404 | Page Not Found</p>
          <p>
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
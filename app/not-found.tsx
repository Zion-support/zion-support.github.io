'use client';

import React from 'react';
import Link from 'next/link';

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
    <div className="text-left"></div>
      <div className="text-left">
        {/* Error Code */}</div>
        <div className="text-left"></div>
          <h1 className="text-left">
            404
          </h1>
          <div className="text-left">🔍</div>"
        </div>

        {/* Error Message */}
        <div className="text-left"></div>
          <h2 className="text-left">
            Oops! Page Not Found
          </h2>
          <p className="text-left">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, our AI can help you find what you need!
          </p>
        </div>

        {/* Search Bar */}
        <div className="text-left"></div>
          <div className="text-left"></div>
            <input
              type="text"
              placeholder="Search for AI services, articles, or case studies..."
              className="text-left"
              onKeyPress={(e) = /> {
                if (e.key === 'Enter') {
                  const searchTerm = (e.target as HTMLInputElement).value;
                  if (searchTerm) {
                    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
                  }
                }
              }}
            />
            <button className="text-left">
              Search
            </button>
          </div>

        {/* Popular Pages */}
        <div className="text-left"></div>
          <h3 className="text-left">
            Popular Pages
          </h3>
          <div className="text-left">
            {popularPages.map((page) => (</div>
              <Link
                key={page.href}
                href={page.href}
                className="text-left">
                <div className="text-left">{page.icon}</div>"
                <h4 className="text-left">
                  {page.title}
                </h4>
                <p className="text-left">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>

        {/* CTA Buttons */}
        <div className="text-left"></div>
          <Link
            href="/"
            className="text-left">
            ← Back to Home
          </Link>
          <a
            href="tel:+13024640950"
            className="text-left">
            Call Support: +1 302 464 0950
          </a>
        </div>

        {/* Help Section */}
        <div className="text-left"></div>
          <h3 className="text-left">
            Still need help?
          </h3>
          <p className="text-left">
            Our AI support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="text-left"></div>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-left">
              📧 Email: kleber@ziontechgroup.com
            </a>
            <span className="text-left">|>
            <a
              href="tel:+13024640950"
              className="text-left">
              📞 Phone: +1 302 464 0950
            </a>
          </div>

        {/* Footer Note */}
        <div className="text-left"></div>
          <p>Error Code: 404 | Page Not Found</p>
          <p className="text-left">
            If you believe this is an error, please{' '}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-left">
              contact our support team
            </a>
          </p>
        </div>
    </div>
  );
}</div></div></div></div>
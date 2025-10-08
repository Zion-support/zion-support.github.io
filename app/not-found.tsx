'use client';

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
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
    },
  ];

  return (
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
              </Link>
            ))}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
import { Phone } from 'lucide-react'
import { Home } from 'lucide-react';export default function NotFound
NotFound.displayName = "NotFound"() {constpopularPages= [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: '🏠'
   },
    {title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖'
   },
    {title: 'Micro SAAS Solutions',
      description: 'Affordable AI-powered tools for modern businesses',
      href: '/micro-saas',
      icon: '⚡'
   },
    {title: 'AI Project Manager',
      description: 'Intelligent project planning and management',
      href: '/ai-project-manager',
      icon: '📊'
   },
    {title: 'AI Analytics Dashboard',
      description: 'Transform data into actionable insights',
      href: '/ai-analytics-dashboard',
      icon: '📈'
   },
    {title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚'
   },
    {title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊'
   },
    {title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission',
      href: '/about',
      icon: '🏢'
   },
    {title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
    },
  ]
  return (
    <div className=&quot;min-h-screen bg-gray-50 flex items-center justify-center px-4&quot;></div>
      <div className=&quot;max-w-2xl w-full text-center&quot;></div>
        {/* Error Code */}
        <div className=&quot;mb-8&quot;></div>
          <h1 className=&quot;text-9xl font-bold text-white/20 mb-4&quot;>
            404
          </h1>
          <div className=&quot;text-6xl mb-4&quot;>🔍</div>
        </div>
        {/* Error Message */}
        <div className=&quot;mb-12&quot;></div>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>
            Page Not Found
          </h2>
          <p className=&quot;text-lg text-gray-600&quot;>
            The page you're looking for doesn't exist or has been moved.
            Don't worry, let's get you back on track!
        </p></di>{/* PopularPages */}
      <divclassName=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-4mb-8&quot;>{popularPages.map((pageindex) => (
         <akey={index}
              href={page.href}
              className=&quot;block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>{page.icon}</div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>
                {page.title}
              </h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                {page.description}
              </p>
            </a>
          ))}
        </div>
        {/* Action Buttons */}
        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
          <a href=&quot;/&quot;
            className=&quot;inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300&quot;
          >
            <Home className=&quot;w-4 h-4 mr-2&quot; />
            Go Home
          </a>
          <a href=&quot;/contact&quot;
            className=&quot;inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300&quot;
          >
            <Phone className=&quot;w-4 h-4 mr-2&quot; />
            Contact Support
          </a>
        </div>
=======
import React from "react";

interface NotFoundProps {
  // Add props here
}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go Home
        </a>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default NotFound;
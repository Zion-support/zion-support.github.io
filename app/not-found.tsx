<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page Not Found | Zion Tech Group</title>
        <meta
          name="description"
          content="The page you are looking for could not be found"
        />
      </Helmet>

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Page Not Found
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The page you are looking for could not be found
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
=======
import Link from 'next/link';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';
export default function NotFound() {return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>)
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center"></div>
        <div className="flex justify-center mb-6"></div>
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center"></div>
            <span className="text-4xl">404</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, BookOpen, Users, Phone } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white/20 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Popular Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {popularPages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="text-3xl mb-3">{page.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {page.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

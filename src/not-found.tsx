'use client';

import { Phone, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: Home
    },
    {
      title: 'AI Solutions',
      description: 'Explore our AI offerings',
      href: '/ai-solutions',
      icon: Phone
    },
    {
      title: 'IT Services',
      description: 'Discover our IT services',
      href: '/it-services',
      icon: Phone
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/contact',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-emerald-400 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
          </p>
        </div>

        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back Home
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors duration-200 group"
              >
                <page.icon className="h-8 w-8 text-emerald-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-1">{page.title}</h4>
                <p className="text-gray-300 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-400 mb-4">Still can't find what you're looking for?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';

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
<<<<<<< HEAD
      title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊'
=======
      title: 'Enterprise Solutions',
      description: 'Fortune 500 AI transformation solutions',
      href: '/enterprise',
      icon: '🏢'
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-white mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track with our AI-powered solutions.
          </p>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Popular Pages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            404
          </div>
          <div className="text-6xl mb-4">🚀</div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The page you're looking for seems to have launched into the digital stratosphere. 
          Don't worry, our AI-powered navigation can help you find what you need.
        </p>

        {/* Popular Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
<<<<<<< HEAD
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{page.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {page.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
=======
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{page.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-300 text-sm">
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Action Buttons */}
=======
        {/* CTA Buttons */}
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
<<<<<<< HEAD
            <span>Go Home</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Get Help</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
=======
            <span className="text-xl">🏠</span>
            <span>Go Home</span>
          </Link>
          
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            <span>Get Help</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Fun Message */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            Even our AI got lost in the quantum realm! 🤖✨
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
        </div>
      </div>
    </div>
  );
}
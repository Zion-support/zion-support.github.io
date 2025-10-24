"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SAAS", href: "/micro-saas" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our AI services, IT solutions, and micro SAAS offerings." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-red-400 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Home className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                    <span className="text-white group-hover:text-red-300">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4">Can't find what you're looking for?</h4>
            <p className="text-gray-300 mb-4">
              Try searching for specific services or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
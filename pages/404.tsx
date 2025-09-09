import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, Phone, Mail, FileText, Shield, Users, Briefcase, MessageSquare } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: MessageSquare },
    { name: 'Help Center', url: '/help', icon: FileText },
    { name: 'Privacy Policy', url: '/privacy', icon: Shield }
  ];

  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta 
          name="description"
          content="The page you are looking for doesn't exist. Find what you need with our helpful navigation and search options."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved.
              Let&apos;s help you find what you need.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              <Link 
                href="/search"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url}
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 group"
                >
                  <link.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
                  <span className="text-white text-sm font-medium group-hover:text-blue-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <Link 
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
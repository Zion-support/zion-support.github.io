import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SitemapPage: React.FC = () => {
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'Services', url: '/services' },
    { title: 'AI Services', url: '/services/ai-services' },
    { title: 'Micro SaaS', url: '/services/micro-saas' },
    { title: 'IT Services', url: '/services/it-services' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Case Studies', url: '/case-studies' },
    { title: 'Careers', url: '/careers' },
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages and services easily." />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600">
              Find all pages and services on our website
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Pages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((page, index) => (
                <Link key={index} href={page.url}>
                  <span className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                    {page.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
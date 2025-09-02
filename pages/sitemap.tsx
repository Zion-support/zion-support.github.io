import React from 'react';
import Head from 'next/head';

export default function Sitemap() {
  const pages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/services', title: 'Services' },
    { path: '/services/ai-services', title: 'AI Services' },
    { path: '/services/micro-saas', title: 'Micro SAAS' },
    { path: '/services/it-services', title: 'IT Services' },
    { path: '/solutions', title: 'Solutions' },
    { path: '/solutions/enterprise', title: 'Enterprise Solutions' },
    { path: '/solutions/small-business', title: 'Small Business Solutions' },
    { path: '/solutions/startups', title: 'Startup Solutions' },
    { path: '/solutions/custom-development', title: 'Custom Development' },
    { path: '/solutions/digital-transformation', title: 'Digital Transformation' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/team', title: 'Our Team' },
    { path: '/careers', title: 'Careers' },
    { path: '/contact', title: 'Contact' },
    { path: '/blog', title: 'Blog' },
    { path: '/white-papers', title: 'White Papers' },
    { path: '/webinars', title: 'Webinars' },
    { path: '/documentation', title: 'Documentation' },
    { path: '/faq', title: 'FAQ' },
    { path: '/help', title: 'Help Center' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/pricing-guide', title: 'Pricing Guide' },
    { path: '/partners', title: 'Partners' },
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
    { path: '/cookies', title: 'Cookie Policy' },
    { path: '/request-quote', title: 'Request Quote' },
    { path: '/demo', title: 'Book Demo' },
    { path: '/brochure', title: 'Download Brochure' },
    { path: '/login', title: 'Sign In' },
    { path: '/register', title: 'Register' },
    { path: '/dashboard', title: 'Dashboard' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-lg text-gray-600">
              Find all pages and services on our website
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((page, index) => (
                <a
                  key={index}
                  href={page.path}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{page.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{page.path}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
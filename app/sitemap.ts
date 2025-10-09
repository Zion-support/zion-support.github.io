<<<<<<< HEAD
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-enterprise-transformation-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-2025-2026-mega-trends-breakthrough`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-2026-autonomous-enterprise-architecture`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-2026-autonomous-agent-factories`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-cost-optimization-breakthrough-2026`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const pages = [
    { url: '/', title: 'Home', priority: '1.0', changeFreq: 'daily' },
    { url: '/about', title: 'About Us', priority: '0.8', changeFreq: 'monthly' },
    { url: '/services', title: 'All Services', priority: '0.9', changeFreq: 'weekly' },
    { url: '/ai-services', title: 'AI Services', priority: '0.9', changeFreq: 'weekly' },
    { url: '/ai-marketing', title: 'AI Marketing', priority: '0.8', changeFreq: 'weekly' },
    { url: '/ai-automation', title: 'AI Automation', priority: '0.8', changeFreq: 'weekly' },
    { url: '/ai-healthcare', title: 'AI Healthcare', priority: '0.8', changeFreq: 'weekly' },
    { url: '/ai-fintech', title: 'AI Fintech', priority: '0.8', changeFreq: 'weekly' },
    { url: '/it-services', title: 'IT Services', priority: '0.8', changeFreq: 'weekly' },
    { url: '/micro-saas', title: 'Micro SAAS', priority: '0.8', changeFreq: 'weekly' },
    { url: '/quantum-computing', title: 'Quantum Computing', priority: '0.7', changeFreq: 'monthly' },
    { url: '/autonomous-systems', title: 'Autonomous Systems', priority: '0.7', changeFreq: 'monthly' },
    { url: '/blockchain-web3', title: 'Blockchain & Web3', priority: '0.7', changeFreq: 'monthly' },
    { url: '/cybersecurity', title: 'Cybersecurity', priority: '0.8', changeFreq: 'weekly' },
    { url: '/business-intelligence', title: 'Business Intelligence', priority: '0.7', changeFreq: 'monthly' },
    { url: '/iot-edge-computing', title: 'IoT & Edge Computing', priority: '0.7', changeFreq: 'monthly' },
    { url: '/services-advertising', title: 'Advertising Services', priority: '0.7', changeFreq: 'monthly' },
    { url: '/case-studies', title: 'Case Studies', priority: '0.6', changeFreq: 'weekly' },
    { url: '/enterprise', title: 'Enterprise Solutions', priority: '0.8', changeFreq: 'weekly' },
    { url: '/team', title: 'Our Team', priority: '0.5', changeFreq: 'monthly' },
    { url: '/contact', title: 'Contact Us', priority: '0.8', changeFreq: 'monthly' },
    { url: '/blog', title: 'Blog & Insights', priority: '0.7', changeFreq: 'daily' },
    { url: '/guides', title: 'Technical Guides', priority: '0.6', changeFreq: 'monthly' },
    { url: '/privacy', title: 'Privacy Policy', priority: '0.3', changeFreq: 'yearly' },
    { url: '/terms', title: 'Terms of Service', priority: '0.3', changeFreq: 'yearly' },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website with all pages and services." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sitemap
              </h1>
              <p className="text-xl text-gray-600">
                Complete directory of all pages and services on our website
              </p>
            </header>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((page, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={page.url} 
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg block mb-2"
                    >
                      {page.title}
                    </Link>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div>Priority: {page.priority}</div>
                      <div>Updated: {page.changeFreq}</div>
                      <div className="text-xs text-gray-400">
                        {baseUrl}{page.url}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                to="/" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
>>>>>>> origin/main

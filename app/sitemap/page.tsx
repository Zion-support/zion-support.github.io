import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const pages = [
    { url: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { url: '/about', title: 'About', description: 'Learn about Zion Tech Group and our mission' },
    { url: '/services', title: 'Services', description: 'Comprehensive AI, IT, and micro SAAS solutions' },
    { url: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
    { url: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing automation and optimization' },
    { url: '/ai-automation', title: 'AI Automation', description: 'Intelligent business process automation' },
    { url: '/ai-healthcare', title: 'AI Healthcare', description: 'AI solutions for healthcare and medical applications' },
    { url: '/ai-fintech', title: 'AI Fintech', description: 'AI-powered financial services and solutions' },
    { url: '/it-services', title: 'IT Services', description: 'Comprehensive IT solutions and support' },
    { url: '/quantum-computing', title: 'Quantum Computing', description: 'Quantum computing services and solutions' },
    { url: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { url: '/business-intelligence', title: 'Business Intelligence', description: 'Advanced analytics and data insights' },
    { url: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized applications and Web3 solutions' },
    { url: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge computing solutions' },
    { url: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security solutions and protection' },
    { url: '/micro-saas', title: 'Micro SAAS', description: 'Affordable AI-driven tools for modern businesses' },
    { url: '/case-studies', title: 'Case Studies', description: 'Success stories and client case studies' },
    { url: '/enterprise', title: 'Enterprise', description: 'Enterprise solutions and services' },
    { url: '/team', title: 'Team', description: 'Meet our team of experts' },
    { url: '/contact', title: 'Contact', description: 'Get in touch with our team' },
    { url: '/privacy', title: 'Privacy Policy', description: 'Privacy policy and data protection' },
    { url: '/terms', title: 'Terms of Service', description: 'Terms of service and usage agreement' },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website with all pages and services." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Sitemap
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pages.map((page, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={page.url} 
                      className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {page.title}
                    </Link>
                    <p className="text-gray-600 mt-2 text-sm">
                      {page.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        {page.url}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you can't find what you're looking for, feel free to contact us.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const SitemapPagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap Page - Zion Tech Group</title>
        <meta name="description" content="Professional sitemap page services by Zion Tech Group." />
        <meta name="keywords" content="sitemap, page, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sitemap Page
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional sitemap page services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPagePage;
=======
import React from 'react';
import Link from 'next/link';
const SitemapPage: React.FC = () => {
  const pages = [
    { url: '/', title: 'Home', priority: '1.0' },
    { url: '/about', title: 'About Us', priority: '0.8' },
    { url: '/services', title: 'All Services', priority: '0.9' },
    { url: '/ai-services', title: 'AI Services', priority: '0.9' },
    { url: '/ai-marketing', title: 'AI Marketing', priority: '0.8' },
    { url: '/ai-automation', title: 'AI Automation', priority: '0.8' },
    { url: '/ai-healthcare', title: 'AI Healthcare', priority: '0.8' },
    { url: '/ai-fintech', title: 'AI Fintech', priority: '0.8' },
    { url: '/ai-data-analytics', title: 'AI Data Analytics', priority: '0.8' },
    { url: '/ai-cybersecurity', title: 'AI Cybersecurity', priority: '0.8' },
    { url: '/ai-workflow-automation', title: 'AI Workflow Automation', priority: '0.8' },
    { url: '/ai-cloud-infrastructure', title: 'AI Cloud Infrastructure', priority: '0.8' },
    { url: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions', priority: '0.8' },
    { url: '/ai-mobile-app-development', title: 'AI Mobile App Development', priority: '0.8' },
    { url: '/it-services', title: 'IT Services', priority: '0.8' },
    { url: '/micro-saas', title: 'Micro SAAS', priority: '0.8' },
    { url: '/cybersecurity', title: 'Cybersecurity', priority: '0.8' },
    { url: '/quantum-computing', title: 'Quantum Computing', priority: '0.7' },
    { url: '/autonomous-systems', title: 'Autonomous Systems', priority: '0.7' },
    { url: '/business-intelligence', title: 'Business Intelligence', priority: '0.7' },
    { url: '/blockchain-web3', title: 'Blockchain & Web3', priority: '0.7' },
    { url: '/iot-edge-computing', title: 'IoT & Edge Computing', priority: '0.7' },
    { url: '/enterprise', title: 'Enterprise Solutions', priority: '0.8' },
    { url: '/case-studies', title: 'Case Studies', priority: '0.6' },
    { url: '/team', title: 'Our Team', priority: '0.5' },
    { url: '/contact', title: 'Contact Us', priority: '0.8' },
    { url: '/blog', title: 'Blog', priority: '0.7' },
    { url: '/guides', title: 'Technical Guides', priority: '0.6' },
    { url: '/privacy', title: 'Privacy Policy', priority: '0.3' },
    { url: '/terms', title: 'Terms of Service', priority: '0.3' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-gray-300">
              Complete directory of all pages on our website
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">All Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <Link
                      to={page.url}
                      className="text-blue-400 hover:text-blue-300 font-medium block mb-2"
                    >
                      {page.title}
                    </Link>
                    <div className="text-sm text-gray-400">
                      Priority: {page.priority}
                    </div>
                    <div className="text-sm text-gray-500">
                      {page.url}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SitemapPage;
>>>>>>> origin/cursor/resolve-all-prs-and-merge

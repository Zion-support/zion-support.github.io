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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sitemap page - Zion Tech Group</title>
        <meta name="description" content="Professional sitemap page services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
Sitemap page
          </h1>458
          <p className="text-xl text-gray-600 mb-8">
            Professional sitemap page solutions tailored to your business needs.
          </p>553
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>861
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge sitemap page solutions.
              </p>987
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1233
              <p className="text-green-700">
                Tailored sitemap page implementations for your specific requirements.
              </p>1365
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1618
              <p className="text-purple-700">
                Round-the-clock support for all your sitemap page needs.
              </p>1742
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1949
          </div>
        </div>
      </div>
  );
}


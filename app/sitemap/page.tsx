import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';

const SitemapPage: React.FC = () => {
  const pages = [
    {
      category: 'Main Pages',
      links: [
        { title: 'Home', url: '/', description: 'Zion Tech Group homepage' },
        { title: 'About Us', url: '/about', description: 'Learn about our company and mission' },
        { title: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { title: 'Team', url: '/team', description: 'Meet our expert team' },
      ]
    },
    {
      category: 'Services',
      links: [
        { title: 'All Services', url: '/services', description: 'Overview of all our services' },
        { title: 'AI Services', url: '/ai-services', description: 'Artificial Intelligence solutions' },
        { title: 'IT Services', url: '/it-services', description: 'Information Technology services' },
        { title: 'Micro SaaS Solutions', url: '/micro-saas', description: 'Micro Software as a Service solutions' },
        { title: 'Cybersecurity', url: '/cybersecurity', description: 'Cybersecurity and protection services' },
        { title: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum computing solutions' },
        { title: 'Autonomous Systems', url: '/autonomous-systems', description: 'Autonomous system development' },
        { title: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Blockchain and Web3 solutions' },
        { title: 'Business Intelligence', url: '/business-intelligence', description: 'Business intelligence solutions' },
        { title: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Internet of Things and edge computing' },
      ]
    },
    {
      category: 'Solutions',
      links: [
        { title: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-level solutions and services' },
        { title: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { title: 'Services Advertising', url: '/services-advertising', description: 'Advertising and marketing services' },
      ]
    },
    {
      category: 'Resources',
      links: [
        { title: 'Blog & Insights', url: '/blog', description: 'Latest AI trends and insights' },
        { title: 'Technical Guides', url: '/guides', description: 'Implementation guides and roadmaps' },
        { title: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy and data protection' },
        { title: 'Terms of Service', url: '/terms', description: 'Terms and conditions of service' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete overview of all pages and resources available on our website. 
              Find what you're looking for quickly and easily.
            </p>
          </div>

          {/* Sitemap Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pages.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    {section.category}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.url}
                          className="block text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                        >
                          <div className="font-medium">{link.title}</div>
                          <div className="text-sm text-gray-500 mt-1">{link.description}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-indigo-600 hover:text-indigo-700">
                      ← Back to Homepage
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-indigo-600 hover:text-indigo-700">
                      About Zion Tech Group
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> <a href="tel:+13026009898" className="text-indigo-600">+1 302 600 9898</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-600">kleber@ziontechgroup.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Information */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Last updated: {new Date().toLocaleDateString()} | 
              Total pages: {pages.reduce((total, section) => total + section.links.length, 0)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
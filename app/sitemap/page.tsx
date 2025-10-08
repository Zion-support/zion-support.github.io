import React from 'react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  const pages = [
    // Main Pages
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { path: '/about', title: 'About Us', description: 'Learn about our mission, vision, and team' },
    { path: '/contact', title: 'Contact', description: 'Get in touch with our expert team' },
    { path: '/team', title: 'Our Team', description: 'Meet our talented professionals' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Enterprise-grade AI and IT solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client testimonials' },
    
    // Services
    { path: '/services', title: 'All Services', description: 'Comprehensive overview of our services' },
    { path: '/ai-services', title: 'AI Services', description: 'Artificial Intelligence solutions and consulting' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing automation and optimization' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent business process automation' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'AI solutions for healthcare industry' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'AI-powered financial services and solutions' },
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT support and solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Custom software-as-a-service solutions' },
    { path: '/services-advertising', title: 'Advertising Services', description: 'AI-powered advertising and marketing services' },
    
    // Specialized Services
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing solutions' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and autonomous business systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Advanced analytics and business intelligence solutions' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Blockchain technology and Web3 solutions' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge computing solutions' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced cybersecurity solutions and consulting' },
    
    // Content
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights on AI, technology, and business transformation' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive technical guides and implementation roadmaps' },
    
    // Legal
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for using our services' },
    { path: '/offline', title: 'Offline Page', description: 'Offline functionality and PWA features' }
  ];

  const categories = {
    'Main Pages': pages.slice(0, 6),
    'Core Services': pages.slice(6, 15),
    'Specialized Services': pages.slice(15, 21),
    'Content & Resources': pages.slice(21, 23),
    'Legal & Policies': pages.slice(23, 26)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Site Map</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete overview of all pages and sections on the Zion Tech Group website
          </p>
        </header>

        {/* Sitemap Content */}
        <div className="max-w-6xl mx-auto">
          {Object.entries(categories).map(([category, categoryPages]) => (
            <section key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-600 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPages.map((page) => (
                  <div key={page.path} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link 
                        to={page.path} 
                        className="text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        {page.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                    <Link 
                      to={page.path}
                      className="inline-block text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      Visit Page →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Sitemap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Navigation</h3>
              <p className="text-gray-600 mb-4">
                Use this sitemap to quickly find any page or section on our website. 
                All links are organized by category for easy browsing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Main pages for general information</li>
                <li>• Service pages for our offerings</li>
                <li>• Content pages for resources and guides</li>
                <li>• Legal pages for policies and terms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Search & Discovery</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Try our search functionality or 
                contact our team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/contact"
                  className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/"
                  className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
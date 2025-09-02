import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Sitemap: NextPage = () => {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", href: "/services" },
        { name: "Micro SaaS", href: "/services/micro-saas" },
        { name: "IT Services", href: "/services/it-services" },
        { name: "AI Services", href: "/services/ai-services" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "All Products", href: "/products" },
        { name: "AI Content Generator Pro", href: "/products/ai-content-generator" },
        { name: "Cloud Security Suite", href: "/products/cloud-security" },
        { name: "Business Intelligence Platform", href: "/products/business-intelligence" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "All Solutions", href: "/solutions" },
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Financial Solutions", href: "/solutions/financial-solutions" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/documentation" },
        { name: "Help Center", href: "/help" },
        { name: "System Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Sitemap", href: "/sitemap" }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages and sections organized by category."
      keywords="sitemap, site map, navigation, pages, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Map</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Navigate through all pages and sections of our website. Find what you're looking for quickly and easily.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapData.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    {section.title}
                  </h2>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">XML Sitemap</h3>
                <p className="text-gray-600 mb-4">For search engines and crawlers</p>
                <a
                  href="/sitemap.xml"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View XML Sitemap
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">RSS Feed</h3>
                <p className="text-gray-600 mb-4">Stay updated with our latest content</p>
                <a
                  href="/rss.xml"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe to RSS
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots.txt</h3>
                <p className="text-gray-600 mb-4">Crawler instructions</p>
                <a
                  href="/robots.txt"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Robots.txt
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Search</h3>
                <p className="text-gray-600 mb-4">Search our website</p>
                <Link
                  href="/search"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Search Site
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              If you can't find the information you need, our team is here to help. Contact us for assistance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Sitemap;
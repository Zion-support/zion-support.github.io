import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Team", url: "/team", description: "Meet our technology experts" },
        { name: "Careers", url: "/careers", description: "Join our growing team" }
      ]
    },
    {
      category: "Services",
      pages: [
        { name: "Services Overview", url: "/services", description: "Comprehensive technology services" },
        { name: "AI Services", url: "/services/ai-services", description: "Artificial Intelligence solutions" },
        { name: "IT Services", url: "/services/it-services", description: "Information Technology services" },
        { name: "Micro SaaS", url: "/services/micro-saas", description: "Small-scale software solutions" }
      ]
    },
    {
      category: "Solutions",
      pages: [
        { name: "Solutions Overview", url: "/solutions", description: "Industry-specific solutions" },
        { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Large-scale business solutions" }
      ]
    },
    {
      category: "Resources",
      pages: [
        { name: "Blog", url: "/blog", description: "Technology insights and industry news" },
        { name: "Case Studies", url: "/case-studies", description: "Success stories and client results" },
        { name: "White Papers", url: "/white-papers", description: "Research reports and insights" },
        { name: "Webinars", url: "/webinars", description: "Educational webinars and training" }
      ]
    },
    {
      category: "Legal & Policies",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage information" },
        { name: "Sitemap", url: "/sitemap", description: "Complete site navigation" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", url: "/contact", icon: "🚀" },
    { name: "View Services", url: "/services", icon: "⚙️" },
    { name: "Read Blog", url: "/blog", icon: "📝" },
    { name: "Join Team", url: "/careers", icon: "👥" },
    { name: "Case Studies", url: "/case-studies", icon: "📊" },
    { name: "White Papers", url: "/white-papers", icon: "📄" }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Navigate Zion Tech Group's website easily with our comprehensive sitemap. Find all pages, services, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, website structure, pages, services, resources" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Navigation
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Find everything you need on our website with our comprehensive sitemap and organized navigation structure.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
                >
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Site Structure */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Site Structure</h2>
            <div className="space-y-12">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Map className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.url}
                        className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                              {page.name}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {page.description}
                            </p>
                            <div className="text-xs text-blue-600 font-medium">
                              {page.url}
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-2 flex-shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              If you can't find what you're looking for, our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
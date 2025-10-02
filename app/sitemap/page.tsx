import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Zion Tech Group - All Pages & Services',
  description: 'Complete sitemap of Zion Tech Group website. Find all our AI services, micro SaaS solutions, IT services, and resources.',
  keywords: 'sitemap, AI services, micro SaaS, IT services, Zion Tech Group, website navigation',
};

export default function SitemapPage() {
  const mainPages = [
    { title: 'Home', href: '/', description: 'Main homepage with service overview' },
    { title: 'About Us', href: '/about', description: 'Company information and team' },
    { title: 'Contact', href: '/contact', description: 'Contact information and inquiry form' },
    { title: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { title: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { title: 'Security', href: '/security', description: 'Security information and practices' }
  ];

  const serviceCategories = [
    {
      title: 'Comprehensive AI Services',
      href: '/services/ai-services-comprehensive',
      description: 'Full-spectrum AI solutions including ML, NLP, computer vision',
      services: [
        { name: 'Machine Learning Model Development', href: '/services/machine-learning-development' },
        { name: 'Natural Language Processing Suite', href: '/services/nlp-suite' },
        { name: 'Computer Vision & Image Recognition', href: '/services/computer-vision' },
        { name: 'Autonomous Systems Development', href: '/services/autonomous-systems' },
        { name: 'AI-Powered Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Consulting & Strategy', href: '/services/ai-consulting' }
      ]
    },
    {
      title: 'Advanced Micro SaaS Solutions',
      href: '/services/advanced-micro-saas-solutions',
      description: 'Cutting-edge micro SaaS platforms for specific business challenges',
      services: [
        { name: 'AI-Powered Content Creation Suite', href: '/services/ai-content-creation-suite' },
        { name: 'Smart Inventory Management Platform', href: '/services/smart-inventory-management' },
        { name: 'Automated Customer Support AI', href: '/services/automated-customer-support' },
        { name: 'Financial Analytics Dashboard', href: '/services/financial-analytics-dashboard' },
        { name: 'HR Automation Suite', href: '/services/hr-automation-suite' },
        { name: 'Project Management Intelligence', href: '/services/project-management-intelligence' }
      ]
    },
    {
      title: 'Complete IT Services',
      href: '/services/it-services-comprehensive',
      description: 'Comprehensive IT services including cloud, DevOps, and cybersecurity',
      services: [
        { name: 'Cloud Migration & Management', href: '/services/cloud-migration' },
        { name: 'DevOps & CI/CD Implementation', href: '/services/devops-implementation' },
        { name: 'Cybersecurity Solutions', href: '/services/cybersecurity-solutions' },
        { name: 'Infrastructure Management', href: '/services/infrastructure-management' },
        { name: 'Digital Transformation Consulting', href: '/services/digital-transformation' },
        { name: 'Database Management & Optimization', href: '/services/database-management' }
      ]
    }
  ];

  const additionalServices = [
    { name: 'AI-Powered Email Marketing Suite', href: '/services/ai-email-marketing' },
    { name: 'Healthcare Appointment AI Scheduler', href: '/services/healthcare-scheduler' },
    { name: 'Autonomous Business Process Orchestrator', href: '/services/autonomous-orchestrator' },
    { name: 'Smart Inventory Management System', href: '/services/smart-inventory' },
    { name: 'AI Content Moderation Platform', href: '/services/content-moderation' },
    { name: 'Quantum-Enhanced Business Intelligence', href: '/services/quantum-bi' },
    { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
    { name: 'IoT Solutions', href: '/services/iot-solutions' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Manufacturing AI Platform', href: '/services/manufacturing-ai-platform' },
    { name: 'Supply Chain Intelligence', href: '/services/supply-chain-intelligence' }
  ];

  const resources = [
    { title: 'Services Advertising & Pricing', href: '/services-advertising', description: 'Comprehensive pricing and service information' },
    { title: 'Case Studies', href: '/case-studies', description: 'Client success stories and implementations' },
    { title: 'Blog', href: '/blog', description: 'Latest insights and technology trends' },
    { title: 'Content Hub', href: '/content-hub', description: 'Educational resources and guides' },
    { title: 'Enterprise Solutions', href: '/enterprise', description: 'Enterprise-grade solutions and consulting' },
    { title: 'AI 2026 Implementation Roadmap', href: '/guides/ai-2026-implementation-roadmap', description: 'Strategic AI implementation guide' },
    { title: 'AI 2027 Implementation Roadmap', href: '/guides/ai-2027-implementation-roadmap', description: 'Advanced AI implementation guide' },
    { title: 'Autonomous Business Processes Guide', href: '/guides/autonomous-business-processes-implementation-guide-2026', description: 'Business process automation guide' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services on the Zion Tech Group website. 
              Find exactly what you're looking for with our organized sitemap.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page, index) => (
              <Link 
                key={index}
                href={page.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{page.title}</h3>
                <p className="text-gray-600 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Categories</h2>
          <div className="space-y-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <Link 
                    href={category.href}
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {category.title}
                  </Link>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex}
                      href={service.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm py-1"
                    >
                      • {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalServices.map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm py-1"
                >
                  • {service.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <Link 
                key={index}
                href={resource.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Contact us directly for personalized assistance and custom solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <div className="text-blue-100">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI services, micro SaaS solutions, and IT consulting.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="/services/ai-services-comprehensive" className="block text-gray-300 hover:text-blue-400">AI Services</Link>
                <Link href="/services/advanced-micro-saas-solutions" className="block text-gray-300 hover:text-green-400">Micro SaaS</Link>
                <Link href="/services/it-services-comprehensive" className="block text-gray-300 hover:text-purple-400">IT Services</Link>
                <Link href="/services" className="block text-gray-300 hover:text-blue-400">All Services</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-blue-400">About Us</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-blue-400">Contact</Link>
                <Link href="/case-studies" className="block text-gray-300 hover:text-blue-400">Case Studies</Link>
                <Link href="/blog" className="block text-gray-300 hover:text-blue-400">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
            <Link href="https://ziontechgroup.com" className="hover:text-white ml-1">ziontechgroup.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
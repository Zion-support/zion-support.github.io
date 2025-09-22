import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { generateSEOMetadata } from "../../components/SEOEnhancer";

export const metadata: Metadata = generateSEOMetadata({
  title: "AI & Technology Services - Zion Tech Group",
  description: "Comprehensive AI solutions, automation services, and technology consulting. From AI chatbots to enterprise automation platforms, we deliver cutting-edge solutions for modern businesses.",
  keywords: ['AI services', 'automation solutions', 'technology consulting', 'AI chatbots', 'enterprise AI', 'business automation', 'machine learning', 'cloud services', 'cybersecurity'],
  canonicalUrl: '/services',
  ogImage: '/images/og-services.jpg'
});

const serviceCategories = [
  {
    title: "AI Solutions",
    description: "Advanced artificial intelligence platforms and tools",
    services: [
      { name: "AI Analytics Dashboard", href: "/services/ai-analytics-dashboard" },
      { name: "AI Chatbot Builder", href: "/services/ai-chatbot-builder" },
      { name: "AI Code Assistant", href: "/services/ai-code-assistant" },
      { name: "AI Content Generation", href: "/services/ai-content-generation" },
      { name: "AI Customer Support", href: "/services/ai-customer-support" },
      { name: "AI Data Analytics", href: "/services/ai-data-analytics" },
    ]
  },
  {
    title: "Automation Services",
    description: "Streamline operations with intelligent automation",
    services: [
      { name: "Business Automation", href: "/services/business-automation" },
      { name: "Email Automation", href: "/services/email-automation" },
      { name: "Workflow Automation", href: "/services/automated-workflow-builder" },
      { name: "Social Media Automation", href: "/services/social-media-automation" },
      { name: "Marketing Automation", href: "/services/ai-marketing-automation" },
      { name: "Invoice Automation", href: "/services/invoice-automation" },
    ]
  },
  {
    title: "Development Services",
    description: "Custom software and application development",
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "API Development", href: "/services/api-development" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "Blockchain Solutions", href: "/services/blockchain-solutions" },
      { name: "E-commerce Solutions", href: "/services/e-commerce-solutions" },
    ]
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive business technology solutions",
    services: [
      { name: "CRM Platform", href: "/services/crm-platform" },
      { name: "Project Management", href: "/services/project-management" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "Cloud Services", href: "/services/cloud-services" },
      { name: "DevOps Automation", href: "/services/devops-automation" },
      { name: "Data Analytics", href: "/services/data-analytics" },
    ]
  }
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI & Technology Services
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90">
            Transform your business with our comprehensive suite of AI solutions, automation services, 
            and cutting-edge technology consulting. From AI chatbots to enterprise automation platforms, 
            we deliver results that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{category.title}</h2>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>
              
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    href={service.href}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Rapid deployment and integration with minimal disruption to your operations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable ROI and business transformation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Comprehensive support and maintenance to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our AI solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/research" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Implementation Master Guide 2025",
      description: "Complete 150+ page resource with checklists, templates, and best practices for successful AI implementation.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Implementation Guide",
      type: "Free Download",
      pages: "150+ pages"
    },
    {
      title: "AI Implementation Checklist 2025",
      description: "150+ actionable items for successful AI implementation across all phases of your AI journey.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Checklist",
      type: "Free Download",
      pages: "Checklist"
    },
    {
      title: "AI ROI Calculator 2025",
      description: "Calculate potential return on investment for AI projects with our comprehensive calculator tool.",
      href: "/resources/ai-roi-calculator-2025",
      icon: "💰",
      category: "Calculator",
      type: "Free Tool",
      pages: "Interactive"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Free AI Resources & Tools - Implementation Guides & Templates | Zion Tech Group"
        description="Download free AI resources including implementation guides, checklists, templates, and tools to accelerate your AI transformation journey."
        keywords="AI resources, free AI guides, AI implementation tools, AI templates, AI checklists, AI ROI calculator, AI resources download"
        url="/resources"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">📚 FREE RESOURCES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free AI Resources & Tools
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Download our comprehensive collection of AI implementation guides, checklists, 
                templates, and tools to accelerate your AI transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
                >
                  Get Expert Consultation
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
                >
                  Read Latest Articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎯 Featured Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and comprehensive AI implementation resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="group">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-6xl">{resource.icon}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {resource.category}
                        </span>
                        <span className="text-gray-500 text-sm">{resource.pages}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-medium text-sm">{resource.type}</span>
                        <span className="text-purple-600 font-medium group-hover:underline">
                          Download →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help with Your AI Implementation?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Our expert team can help you implement AI solutions that deliver real business value. 
              Get personalized guidance and support for your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
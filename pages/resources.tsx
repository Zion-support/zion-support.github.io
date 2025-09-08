import React from 'react';
import { FileText, BarChart3, MessageSquare, Settings, BookOpen, Video, Download } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    color: "from-blue-500 to-blue-600",
    items: ["API Documentation", "Integration Guides", "Best Practices", "Troubleshooting"]
  },
  {
    title: "Case Studies",
    description: "Real-world examples of successful implementations",
    icon: BarChart3,
    href: "/case-studies",
    color: "from-green-500 to-green-600",
    items: ["Success Stories", "Implementation Examples", "ROI Analysis", "Lessons Learned"]
  },
  {
    title: "Blog",
    description: "Latest insights and industry trends",
    icon: BookOpen,
    href: "/blog",
    color: "from-purple-500 to-purple-600",
    items: ["Technology Trends", "Industry Insights", "Expert Opinions", "Tutorials"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Settings,
    href: "/api",
    color: "from-orange-500 to-orange-600",
    items: ["API Endpoints", "Authentication", "Rate Limits", "SDKs"]
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides and demos",
    icon: Video,
    href: "/tutorials",
    color: "from-red-500 to-red-600",
    items: ["Getting Started", "Advanced Topics", "Live Demos", "Q&A Sessions"]
  },
  {
    title: "Downloads",
    description: "Tools, templates, and resources for download",
    icon: Download,
    href: "/downloads",
    color: "from-indigo-500 to-indigo-600",
    items: ["SDKs", "Templates", "White Papers", "Tools"]
  }
];

const quickLinks = [
  { title: "Getting Started", href: "/getting-started", icon: BookOpen },
  { title: "API Documentation", href: "/api-docs", icon: FileText },
  { title: "Support Center", href: "/support", icon: MessageSquare }
];

export default function ResourcesPage() {
  return (
    <MainLayout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, and API references for developers and businesses."
      keywords="documentation, case studies, blog, API reference, resources, tutorials, guides"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Resources & <span className="text-blue-600">Documentation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to get started and succeed with our solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse Resources</h2>
                <p className="text-xl text-gray-600">
                  Find the information and tools you need to succeed
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <ul className="space-y-2 mb-6">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {item}</li>
                      ))}
                    </ul>
                    <a
                      href={resource.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Explore {resource.title}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Links</h2>
                <p className="text-xl text-gray-600">
                  Popular resources to get you started quickly
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <link.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Something?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our support team is here to help you find the resources you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Support Center
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
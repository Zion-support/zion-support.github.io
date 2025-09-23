import { FileText, BarChart3, MessageSquare, Settings, BookOpen, Video, Download, ExternalLink } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

import React from 'react';
import { FileText, BarChart3, MessageSquare, Settings, BookOpen, Video, Download } from 'lucide-react';
import Layout from '../components/Layout';

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
    description: "Real-world success stories and implementations",
    icon: BarChart3,
    href: "/case-studies",
    color: "from-green-500 to-green-600",
    items: ["Client Success Stories", "Implementation Examples", "ROI Analysis", "Lessons Learned"]
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and technical articles",
    icon: MessageSquare,
    href: "/blog",
    color: "from-purple-500 to-purple-600",
    items: ["Technology Trends", "Industry Insights", "Technical Tutorials", "Company News"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Settings,
    href: "/api-docs",
    color: "from-orange-500 to-orange-600",
    items: ["REST API", "GraphQL", "SDKs", "Code Examples"]
  }
];

const quickLinks = [
  { title: "Getting Started", href: "/docs/getting-started", icon: BookOpen },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download SDKs", href: "/downloads", icon: Download },
  { title: "Support Center", href: "/support", icon: MessageSquare }
];

export default function ResourcesPage() {
  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, and API references for developers and businesses."
      keywords="documentation, case studies, blog, API reference, resources, tutorials, guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;

          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Resources &{' '}',
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">";
                  Documentation;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Everything you need to succeed with our technology solutions. 
                Documentation, guides, case studies, and more.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/docs" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                  Browse Documentation;
                </Link>;
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                  Get Support;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
    items: ["REST API", "GraphQL", "Webhooks", "SDKs"]
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides and hands-on tutorials",
    icon: BookOpen,
    href: "/tutorials",
    color: "from-indigo-500 to-indigo-600",
    items: ["Getting Started", "Advanced Topics", "Code Examples", "Video Tutorials"]
  },
  {
    title: "Webinars",
    description: "Live and recorded educational sessions",
    icon: Video,
    href: "/webinars",
    color: "from-pink-500 to-pink-600",
    items: ["Live Sessions", "Recorded Videos", "Q&A Sessions", "Expert Talks"]
  }
];

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive resources including documentation, case studies, tutorials, and more." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Resources
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive collection of documentation, tutorials, case studies, and more to help you succeed with our solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${resource.color} mb-6`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {resource.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={resource.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Explore
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you make the most of our resources and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300"
              >
                Contact Support
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-colors duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
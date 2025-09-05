<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
>>>>>>> origin/main

<<<<<<< HEAD
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
<<<<<<< HEAD
  },
  {}
    title: "Case Studies","
    description: "Real-world success stories and implementations","
    icon: BarChart3,
    href: "/case-studies","
    color: "from-green-500 to-green-600","
    items: ["Client Success Stories", "Implementation Examples", "ROI Analysis", "Lessons Learned"]"
  },
  {}
    title: "Blog","
    description: "Latest insights, trends, and technical articles","
    icon: MessageSquare,
    href: "/blog","
    color: "from-purple-500 to-purple-600","
    items: ["Technology Trends", "Industry Insights", "Technical Tutorials", "Company News"]"
  },
  {}
    title: "API Reference","
    description: "Complete API documentation and examples","
    icon: Settings,
    href: "/api-docs","
    color: "from-orange-500 to-orange-600","
    items: ["REST API", "GraphQL", "SDKs", "Code Examples"]"
=======
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
=======
const resources = [
  {
    title: 'AI Implementation Guide',
    description: 'Complete guide to implementing AI solutions in your business, from strategy to deployment.',
    type: 'Guide',
    category: 'AI',
    format: 'PDF',
    size: '2.5 MB',
    duration: '45 min read',
    downloads: '1,250',
    rating: 4.8,
    link: 'https://ziontechgroup.com/resources/ai-implementation-guide.pdf',
    popular: true
  },
  {
    title: 'Cloud Migration Checklist',
    description: 'Step-by-step checklist for migrating your infrastructure to the cloud successfully.',
    type: 'Checklist',
    category: 'Cloud',
    format: 'PDF',
    size: '1.2 MB',
    duration: '20 min read',
    downloads: '890',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/cloud-migration-checklist.pdf'
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential security practices to protect your business from cyber threats.',
    type: 'Guide',
    category: 'Security',
    format: 'PDF',
    size: '3.1 MB',
    duration: '60 min read',
    downloads: '2,100',
    rating: 4.9,
    link: 'https://ziontechgroup.com/resources/cybersecurity-best-practices.pdf',
    popular: true
  },
  {
    title: 'Webinar: Future of AI in Business',
    description: 'Join our experts as they discuss the latest AI trends and their impact on business.',
    type: 'Webinar',
    category: 'AI',
    format: 'Video',
    size: '450 MB',
    duration: '1 hour',
    downloads: '3,200',
    rating: 4.7,
    link: 'https://ziontechgroup.com/webinars/future-of-ai-in-business',
    upcoming: true
  },
  {
    title: 'API Integration Tutorial',
    description: 'Learn how to integrate our APIs into your applications with practical examples.',
    type: 'Tutorial',
    category: 'Development',
    format: 'Video',
    size: '280 MB',
    duration: '35 min',
    downloads: '1,800',
    rating: 4.5,
    link: 'https://ziontechgroup.com/tutorials/api-integration'
  },
  {
    title: 'White Paper: Digital Transformation',
    description: 'Comprehensive analysis of digital transformation strategies for modern businesses.',
    type: 'White Paper',
    category: 'Strategy',
    format: 'PDF',
    size: '4.2 MB',
    duration: '90 min read',
    downloads: '1,500',
    rating: 4.8,
    link: 'https://ziontechgroup.com/whitepapers/digital-transformation.pdf'
>>>>>>> origin/main
  }
;];

<<<<<<< HEAD
const quickLinks = [;
  { title: "Getting Started", href: "/docs/getting-started", icon: BookOpen },"
  { title: "Video Tutorials", href: "/tutorials", icon: Video },"
  { title: "Download SDKs", href: "/downloads", icon: Download },"
  { title: "Support Center", href: "/support", icon: MessageSquare }"
;];

export default function ResourcesPage() {
  return (;
    <Layout);
      title="Resources - Zion Tech Group"";
      description="Comprehensive resources including documentation, case studies, blog posts, and API references for developers and businesses.""
      keywords="documentation, case studies, blog, API reference, resources, tutorials, guides""
    >;
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

        {/* Resources Grid */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Resource Center;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Comprehensive resources to help you succeed;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {resources.map((resource, index) => {}
                const IconComponent = resource.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >,
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>,
                      <IconComponent className="w-8 h-8 text-white" />";
                    </div>;
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">";
                      {resource.title}
                    </h3>,
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">";
                      {resource.description}
                    </p>,

                    <div className="space-y-2 mb-6">";
                      {resource.items.map((item, itemIndex) => (,
                        <div key={itemIndex} className="flex items-center space-x-2">"
                          <CheckCircle className="w-4 h-4 text-indigo-500" />";
                          <span className="text-sm text-gray-600">{item}</span>"
                        </div>;
                      ))}
                    </div>,

                    <Link;
                      href={resource.href}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${resource.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                    >,
                      <span>Explore {resource.title}</span>,
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;

        {/* Quick Links Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Quick Links;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Popular resources and quick access to important information;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
              {quickLinks.map((link, index) => {}
                const IconComponent = link.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >,
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">";
                      <IconComponent className="w-6 h-6 text-white" />";
                    </div>;
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">";
                      {link.title}
                    </h3>,
                    
                    <Link;
                      href={link.href}
                      className="text-indigo-600 hover:text-indigo-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center""
                    >;
                      <span>Access Now</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center max-w-4xl mx-auto"";
=======
const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Strategy'];
const types = ['All', 'Guide', 'Checklist', 'Webinar', 'Tutorial', 'White Paper'];

export default function Resources() {
  return (
    <Layout title="Resources - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Resources & Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Access our comprehensive library of guides, tutorials, and best practices to accelerate your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {resource.type === 'Webinar' ? (
                        <Video className="w-5 h-5 text-red-500" />
                      ) : resource.type === 'Tutorial' ? (
                        <Video className="w-5 h-5 text-blue-500" />
                      ) : (
                        <FileText className="w-5 h-5 text-green-500" />
                      )}
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    {resource.popular && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                    {resource.upcoming && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        Upcoming
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.duration}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloads}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      {resource.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {resource.format} • {resource.size}
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      {resource.type === 'Webinar' ? 'Register' : 'Download'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
>>>>>>> origin/main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Need More Help?;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">";
                Can't find what you're looking for? Our support team is here to help';
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                  Contact Support;
                </Link>;
                <Link href="/docs" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Browse Documentation;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team is here to help you with custom solutions and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> origin/main
  );
}
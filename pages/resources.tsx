<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Phone,
  Mail,
  MapPin,
  Search,
  Filter
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> pr-11914
=======
  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
    </>
=======
>>>>>>> pr-11935

const resources = [
  {,
    icon: FileText,
    href: "/docs",
    color: "from-blue-500 to-blue-600",
    items: ["API Documentation", "Integration Guides", "Best Practices", "Troubleshooting"]
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
<<<<<<< HEAD
  {}
    title: "API Reference","
    description: "Complete API documentation and examples","
    icon: Settings,
    href: "/api-docs","
    color: "from-orange-500 to-orange-600","
    items: ["REST API", "GraphQL", "SDKs", "Code Examples"]"
=======
  {
    title: 'Micro SaaS Development Video Series',
    description: '10-part video series covering everything from ideation to deployment of micro SaaS products.',
    type: 'Video Series',
    category: 'Development',
    format: 'Video',
    size: '2.5 GB',
    duration: '4 hours',
    downloads: '650',
    rating: 4.7,
    link: 'https://ziontechgroup.com/resources/micro-saas-development-series',
    popular: false
  },
  {
    title: 'API Design Standards',
    description: 'Comprehensive standards and best practices for designing robust and scalable APIs.',
    type: 'Standards',
    category: 'Development',
    format: 'PDF',
    size: '1.8 MB',
    duration: '35 min read',
    downloads: '720',
    rating: 4.5,
    link: 'https://ziontechgroup.com/resources/api-design-standards.pdf',
    popular: false
  },
  {
    title: 'Data Analytics Implementation',
    description: 'Guide to implementing data analytics solutions for business intelligence and insights.',
    type: 'Guide',
    category: 'Analytics',
    format: 'PDF',
    size: '2.2 MB',
    duration: '50 min read',
    downloads: '980',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/data-analytics-implementation.pdf',
    popular: true
  },
  {
    title: 'DevOps Transformation Webinar',
    description: 'Recorded webinar on transforming your development and operations processes.',
    type: 'Webinar',
    category: 'DevOps',
    format: 'Video',
    size: '1.8 GB',
    duration: '90 min',
    downloads: '420',
    rating: 4.4,
    link: 'https://ziontechgroup.com/resources/devops-transformation-webinar',
    popular: false
  },
  {
    title: 'IoT Security Framework',
    description: 'Comprehensive framework for securing IoT devices and networks in enterprise environments.',
    type: 'Framework',
    category: 'IoT',
    format: 'PDF',
    size: '2.8 MB',
    duration: '55 min read',
    downloads: '340',
    rating: 4.7,
    link: 'https://ziontechgroup.com/resources/iot-security-framework.pdf',
    popular: false
  },
  {
    title: 'Digital Transformation Roadmap',
    description: 'Strategic roadmap for digital transformation initiatives across different industries.',
    type: 'Roadmap',
    category: 'Strategy',
    format: 'PDF',
    size: '1.5 MB',
    duration: '30 min read',
    downloads: '1,100',
    rating: 4.8,
    link: 'https://ziontechgroup.com/resources/digital-transformation-roadmap.pdf',
    popular: true
  },
  {
    title: 'Machine Learning Model Deployment',
    description: 'Best practices for deploying and monitoring machine learning models in production.',
    type: 'Best Practices',
    category: 'AI',
    format: 'PDF',
    size: '2.0 MB',
    duration: '40 min read',
    downloads: '560',
    rating: 4.5,
    link: 'https://ziontechgroup.com/resources/ml-model-deployment.pdf',
    popular: false
>>>>>>> pr-11914
  }
;];

<<<<<<< HEAD
const quickLinks = [;
  { title: "Getting Started", href: "/docs/getting-started", icon: BookOpen },"
  { title: "Video Tutorials", href: "/tutorials", icon: Video },"
  { title: "Download SDKs", href: "/downloads", icon: Download },"
  { title: "Support Center", href: "/support", icon: MessageSquare }"
;];
=======
const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'DevOps', 'IoT', 'Strategy'];
const types = ['All', 'Guide', 'Whitepaper', 'Video Series', 'Webinar', 'Checklist', 'Standards', 'Framework', 'Roadmap', 'Best Practices'];
>>>>>>> pr-11914

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> pr-11935
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
=======
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const popularResources = resources.filter(resource => resource.popular);

  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Access our comprehensive collection of guides, whitepapers, videos, and tools to help you succeed with technology implementation and digital transformation."
      keywords="resources, guides, whitepapers, videos, tools, AI implementation, cloud migration, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Resources & Tools
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of guides, whitepapers, videos, and tools to help you succeed with technology implementation and digital transformation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        {selectedCategory === 'All' && selectedType === 'All' && !searchTerm && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Popular Resources
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our most downloaded and highly-rated resources to get you started.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500"
>>>>>>> pr-11914
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
<<<<<<< HEAD
=======
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        {resource.type === 'Guide' && <BookOpen className="w-8 h-8 text-blue-500 mr-3" />}
                        {resource.type === 'Whitepaper' && <FileText className="w-8 h-8 text-blue-500 mr-3" />}
                        {resource.type === 'Video Series' && <Video className="w-8 h-8 text-blue-500 mr-3" />}
                        {resource.type === 'Checklist' && <CheckCircle className="w-8 h-8 text-blue-500 mr-3" />}
                        <div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                            {resource.type}
                          </span>
                          <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                            {resource.category}
                          </span>
                        </div>
                      </div>
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloads} downloads
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({resource.rating})</span>
                      </div>
                      <a
                        href={resource.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        <span>Download</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {filteredResources.length} resources found
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedType !== 'All' && ` of type ${selectedType}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {resource.type === 'Guide' && <BookOpen className="w-8 h-8 text-blue-500 mr-3" />}
                      {resource.type === 'Whitepaper' && <FileText className="w-8 h-8 text-blue-500 mr-3" />}
                      {resource.type === 'Video Series' && <Video className="w-8 h-8 text-blue-500 mr-3" />}
                      {resource.type === 'Webinar' && <Video className="w-8 h-8 text-purple-500 mr-3" />}
                      {resource.type === 'Checklist' && <CheckCircle className="w-8 h-8 text-green-500 mr-3" />}
                      {resource.type === 'Standards' && <Award className="w-8 h-8 text-orange-500 mr-3" />}
                      {resource.type === 'Framework' && <Users className="w-8 h-8 text-red-500 mr-3" />}
                      {resource.type === 'Roadmap' && <Calendar className="w-8 h-8 text-indigo-500 mr-3" />}
                      {resource.type === 'Best Practices' && <CheckCircle className="w-8 h-8 text-teal-500 mr-3" />}
                      <div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {resource.type}
                        </span>
                        <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    {resource.popular && <Award className="w-5 h-5 text-yellow-500" />}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.duration}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads} downloads
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.format} • {resource.size}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({resource.rating})</span>
                    </div>
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      <span>Download</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedType('All');
                    setSearchTerm('');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Custom Resources?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Can't find what you're looking for? Our experts can create custom guides, documentation, and training materials tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Custom Resource
              </Link>
              <Link href="/consulting" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Consulting Services
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> pr-11914
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935
  );
}
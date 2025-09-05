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
    link: 'https://ziontechgroup.com/resources/cloud-migration-checklist.pdf',
    popular: true
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your business from threats and attacks.',
    type: 'Whitepaper',
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
  }
];

const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'DevOps', 'IoT', 'Strategy'];
const types = ['All', 'Guide', 'Whitepaper', 'Video Series', 'Webinar', 'Checklist', 'Standards', 'Framework', 'Roadmap', 'Best Practices'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

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
  );
}
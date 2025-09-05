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
    downloads: '580',
    rating: 4.5,
    link: 'https://ziontechgroup.com/resources/ml-model-deployment.pdf',
    popular: false
  },
  {
    title: 'Cloud Cost Optimization Strategies',
    description: 'Proven strategies for optimizing cloud costs and improving resource utilization.',
    type: 'Strategies',
    category: 'Cloud',
    format: 'PDF',
    size: '1.3 MB',
    duration: '25 min read',
    downloads: '750',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/cloud-cost-optimization.pdf',
    popular: false
  },
  {
    title: 'API Security Workshop',
    description: 'Interactive workshop materials for implementing comprehensive API security measures.',
    type: 'Workshop',
    category: 'Security',
    format: 'ZIP',
    size: '15 MB',
    duration: '2 hours',
    downloads: '290',
    rating: 4.9,
    link: 'https://ziontechgroup.com/resources/api-security-workshop.zip',
    popular: false
  }
];

const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'DevOps', 'IoT', 'Strategy'];
const types = ['All', 'Guide', 'Checklist', 'Whitepaper', 'Video Series', 'Standards', 'Webinar', 'Framework', 'Roadmap', 'Best Practices', 'Strategies', 'Workshop'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const stats = [
    { number: '50+', label: 'Resources Available' },
    { number: '10,000+', label: 'Total Downloads' },
    { number: '4.7', label: 'Average Rating' },
    { number: '24/7', label: 'Access Available' }
  ];

  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Free resources, guides, whitepapers, and tools to help you succeed with technology. Download our comprehensive guides and best practices." />
        <meta name="keywords" content="technology resources, guides, whitepapers, best practices, tutorials, downloads" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Resources & Guides
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive library of free resources, guides, and best practices to accelerate your technology journey.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Custom Resource
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Resources Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our resources are created by industry experts and based on real-world experience and proven methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the perfect resource for your needs with our comprehensive library.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 font-medium">Filter by Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Type:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {resource.format === 'PDF' && <FileText className="w-5 h-5 text-red-500" />}
                    {resource.format === 'Video' && <Video className="w-5 h-5 text-blue-500" />}
                    {resource.format === 'ZIP' && <Download className="w-5 h-5 text-green-500" />}
                    <span className="text-sm font-medium text-gray-600">{resource.type}</span>
                  </div>
                  {resource.popular && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{resource.category}</span>
                  <span>{resource.size}</span>
                  <span>{resource.duration}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Award
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{resource.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                </div>
                
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Custom Resources?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? We can create custom resources tailored to your specific needs and industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Custom Resource</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Can Create</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Industry-Specific Guides
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Custom Checklists & Templates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Video Tutorials & Webinars
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Technical Documentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
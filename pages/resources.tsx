import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import Layout from '../components/Layout',
import {,
  BookOpen,;
  FileText,;
  Video,;
  Download,;
  ExternalLink,;
  Calendar,;
  Users,;
  Award,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Search,;
  Filter,
} from 'lucide-react',
,
const resources = [,
  {,
    title: 'AI Implementation Guide',;
    description: 'Complete guide to implementing AI solutions in your business, from strategy to deployment.',;
    type: 'Guide',;
    category: 'AI',;
    format: 'PDF',;
    size: '2.5 MB',;
    duration: '45 min read',;
    downloads: '1,250',;
    rating: 4.8,;
    link: 'https://ziontechgroup.com/resources/ai-implementation-guide.pdf',;
    popular: true,
  ,},;
  {,
    title: 'Cloud Migration Checklist',;
    description: 'Step-by-step checklist for migrating your infrastructure to the cloud successfully.',;
    type: 'Checklist',;
    category: 'Cloud',;
    format: 'PDF',;
    size: '1.2 MB',;
    duration: '20 min read',;
    downloads: '890',;
    rating: 4.6,;
    link: 'https://ziontechgroup.com/resources/cloud-migration-checklist.pdf',
  ,},;
  {,
    title: 'Cybersecurity Best Practices',;
    description: 'Essential security practices to protect your business from cyber threats.',;
    type: 'Guide',;
    category: 'Security',;
    format: 'PDF',;
    size: '3.1 MB',;
    duration: '60 min read',;
    downloads: '2,100',;
    rating: 4.9,;
    link: 'https://ziontechgroup.com/resources/cybersecurity-best-practices.pdf',;
    popular: true,
  ,},;
  {,
    title: 'Webinar: Future of AI in Business',;
    description: 'Join our experts as they discuss the latest AI trends and their impact on business.',;
    type: 'Webinar',;
    category: 'AI',;
    format: 'Video',;
    size: '450 MB',;
    duration: '1 hour',;
    downloads: '3,200',;
    rating: 4.7,;
    link: 'https://ziontechgroup.com/webinars/future-of-ai-in-business',;
    upcoming: true,
  ,},;
  {,
    title: 'API Integration Tutorial',;
    description: 'Learn how to integrate our APIs into your applications with practical examples.',;
    type: 'Tutorial',;
    category: 'Development',;
    format: 'Video',;
    size: '280 MB',;
    duration: '35 min',;
    downloads: '1,800',;
    rating: 4.5,;
    link: 'https://ziontechgroup.com/tutorials/api-integration',
  ,},;
  {,
    title: 'White Paper: Digital Transformation',;
    description: 'Comprehensive analysis of digital transformation strategies for modern businesses.',;
    type: 'White Paper',;
    category: 'Strategy',;
    format: 'PDF',;
    size: '4.2 MB',;
    duration: '90 min read',;
    downloads: '1,500',;
    rating: 4.8,;
    link: 'https://ziontechgroup.com/whitepapers/digital-transformation.pdf',
  ,};
],
,
const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Strategy'],
const types = ['All', 'Guide', 'Checklist', 'Webinar', 'Tutorial', 'White Paper'],
,
export default function Resources() {,
  return (,
    <Layout title="Resources - Zion Tech Group">,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center text-white",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                Resources & Documentation,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">,
                Access our comprehensive library of guides, tutorials, and best practices to accelerate your success.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Search and Filter Section */};
        <section className="py-12 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="max-w-4xl mx-auto">,
              <div className="flex flex-col md: flex-row gap-4 mb-8">,
                <div className="flex-1 relative">,
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />,
                  <input,
                    type="text",
                    placeholder="Search resources...",
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  />,
                </div>,
                <div className="flex gap-2">,
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">,
                    {categories.map((category) => (,
                      <option key={category,} value={category}>,
                        {category};
                      </option>,
                    ))};
                  </select>,
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent">,
                    {types.map((type) => (,
                      <option key={type,} value={type}>,
                        {type};
                      </option>,
                    ))};
                  </select>,
                </div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Resources Grid */};
        <section className="py-20 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {resources.map((resource, index) => (,
                <motion.div,
                  key={index};
                  initial={{ opacity: 0, y: 30 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  className="bg-white rounded-lg shadow-lg hover: shadow-xl transition-shadow p-6",
                >,
                  <div className="flex items-center justify-between mb-4">,
                    <div className="flex items-center space-x-2">,
                      {resource.type === 'Webinar' ? (,
                        <Video className="w-5 h-5 text-red-500" />,
                      ) : resource.type === 'Tutorial' ? (,
                        <Video className="w-5 h-5 text-blue-500" />,
                      ) : (,
                        <FileText className="w-5 h-5 text-green-500" />,
                      ),};
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">,
                        {resource.type};
                      </span>,
                    </div>,
                    {resource.popular && (,
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">,
                        Popular,
                      </span>,
                    )};
                    {resource.upcoming && (,
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">,
                        Upcoming,
                      </span>,
                    )};
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-2">,
                    {resource.title};
                  </h3>,
                  <p className="text-gray-600 mb-4">,
                    {resource.description};
                  </p>,
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">,
                    <div className="flex items-center space-x-4">,
                      <span className="flex items-center">,
                        <Clock className="w-4 h-4 mr-1" />,
                        {resource.duration};
                      </span>,
                      <span className="flex items-center">,
                        <Download className="w-4 h-4 mr-1" />,
                        {resource.downloads};
                      </span>,
                    </div>,
                    <div className="flex items-center">,
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />,
                      {resource.rating};
                    </div>,
                  </div>,
                  <div className="flex items-center justify-between">,
                    <div className="text-sm text-gray-500">,
                      {resource.format} • {resource.size};
                    </div>,
                    <a,
                      href={resource.link};
                      target="_blank",
                      rel="noopener noreferrer",
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors text-sm font-medium",
                    >,
                      {resource.type === 'Webinar' ? 'Register' : 'Download',};
                      <ExternalLink className="w-4 h-4 ml-2" />,
                    </a>,
                  </div>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              viewport={{ once: true ,}};
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-6">,
                Need More Resources?,
              </h2>,
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
                Can't find what you're looking for? Our team is here to help you with custom solutions and personalized guidance.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link,
                  href="/contact",
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold",
                >,
                  Contact Us,
                  <ArrowRight className="ml-2 w-5 h-5" />,
                </Link>,
                <Link,
                  href="/docs",
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold",
                >,
                  View Documentation,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};
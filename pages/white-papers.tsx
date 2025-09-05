import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
import Link from 'next/link';
=======
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Download,
  Calendar,
  User,
  Eye,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Star,
  Clock,
  Tag
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink 
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business.",
    downloadCount: 1250
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: Best Practices and Pitfalls",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cloud Computing",
    description: "Learn the essential strategies for successful cloud migration and avoid common mistakes.",
    downloadCount: 980
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age: Protecting Your Assets",
    author: "Emily Johnson",
    date: "2024-01-05",
    category: "Cybersecurity",
    description: "Comprehensive guide to modern cybersecurity threats and how to protect your organization.",
    downloadCount: 1500
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Insights",
    author: "David Kim",
    date: "2023-12-20",
    category: "Data Analytics",
    description: "Discover how to leverage data analytics to drive business decisions and growth.",
    downloadCount: 750
  }
];
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

export default function WhitePapersPage() {
  return (
<<<<<<< HEAD
    <Layout title="White Papers - Zion Tech Group" description="Access our comprehensive collection of technical white papers and research documents">
=======
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud solutions, cybersecurity, and more. Download free technical resources and insights."
      keywords="white papers, technical papers, AI research, cloud solutions, cybersecurity, business strategy, free downloads"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
      </Head>

>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
=======
                Download our comprehensive white papers on technology trends and best practices.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
=======

        {/* White Papers List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our latest research and insights on technology trends.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500">{paper.category}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloadCount}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {paper.date}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find white papers by technology area.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Tag className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">{category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-yellow-500" />
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our comprehensive white papers on technology trends and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI in Enterprise: A Complete Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement AI solutions in enterprise environments with real-world case studies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: Feb 2024</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us for custom research and analysis tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View All Research
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
    </MainLayout>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  );
}
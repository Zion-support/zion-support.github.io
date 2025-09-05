import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Play,
  Download,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    description: "Join our experts as they discuss the latest AI trends, emerging technologies, and how businesses can prepare for the future of artificial intelligence.",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    presenter: "Dr. Sarah Johnson, AI Strategy Director",
    category: "AI & Technology",
    status: "upcoming",
    registrationUrl: "/register-webinar",
    topics: [
      "AI Market Trends 2025",
      "Emerging AI Technologies",
      "Business Implementation Strategies",
      "ROI Measurement",
      "Q&A Session"
    ]
  },
  {
    id: 2,
    title: "Building Scalable Micro SaaS Products",
    description: "Learn how to build and scale micro SaaS products from idea to profitable business. Includes real case studies and actionable insights.",
    date: "2024-02-08",
    time: "3:00 PM EST",
    duration: "45 minutes",
    presenter: "Mike Chen, Product Director",
    category: "SaaS Development",
    status: "recorded",
    recordingUrl: "/webinar-recordings/micro-saas",
    topics: [
      "Market Research & Validation",
      "MVP Development",
      "Scaling Strategies",
      "Monetization Models",
      "Case Studies"
    ]
  },
  {
    id: 3,
    title: "Cloud Migration Best Practices",
    description: "Essential strategies for successful cloud migration. Learn from real-world examples and avoid common pitfalls.",
    date: "2024-01-25",
    time: "1:00 PM EST",
    duration: "50 minutes",
    presenter: "Alex Rodriguez, Cloud Architect",
    category: "Cloud Infrastructure",
    status: "recorded",
    recordingUrl: "/webinar-recordings/cloud-migration",
    topics: [
      "Migration Planning",
      "Security Considerations",
      "Cost Optimization",
      "Performance Monitoring",
      "Best Practices"
    ]
  }
];

const categories = [
  "All Categories",
  "AI & Technology",
  "SaaS Development", 
  "Cloud Infrastructure",
  "Digital Transformation"
];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredWebinars = webinars.filter(webinar => 
    selectedCategory === "All Categories" || webinar.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars on AI, technology, and business transformation. Learn from industry leaders and get actionable insights." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-purple-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn from experts, get insights, and stay ahead of technology trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expert-Led Sessions
              </h2>
              <p className="text-lg text-gray-600">
                Join our webinars to learn from industry experts and get actionable insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        {webinar.category}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        webinar.status === 'upcoming' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(webinar.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {webinar.presenter}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {webinar.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {topic}
                          </li>
                        ))}
                        {webinar.topics.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{webinar.topics.length - 3} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      {webinar.status === 'upcoming' ? (
                        <Link
                          href={webinar.registrationUrl}
                          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center inline-flex items-center justify-center"
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      ) : (
                        <>
                          <Link
                            href={webinar.recordingUrl}
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Watch
                          </Link>
                          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Never Miss a Session
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Subscribe to get notified about upcoming webinars and exclusive content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Webinar
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
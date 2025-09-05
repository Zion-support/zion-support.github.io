import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, Play, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

const webinars = [
  {
    id: 1,
    title: 'AI in Business: Future Trends and Opportunities',
    description: 'Explore the latest AI trends and how they can transform your business operations.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Chen',
    speakerTitle: 'Chief AI Officer',
    attendees: 150,
    category: 'AI & Technology',
    status: 'upcoming',
    featured: true
  },
  {
    id: 2,
    title: 'Micro SaaS Development: From Idea to Launch',
    description: 'Learn how to build and launch successful micro SaaS products.',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Rodriguez',
    speakerTitle: 'VP of Product Development',
    attendees: 89,
    category: 'Micro SaaS',
    status: 'upcoming',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for 2024',
    description: 'Essential cybersecurity measures every business should implement.',
    date: '2024-01-25',
    time: '1:00 PM EST',
    duration: '50 minutes',
    speaker: 'Alex Thompson',
    speakerTitle: 'Chief Security Officer',
    attendees: 203,
    category: 'Security',
    status: 'recorded',
    featured: true
  }
];

const categories = [
  'All Webinars',
  'AI & Technology',
  'Micro SaaS',
  'Security',
  'Cloud Computing',
  'Development'
];

export default function WebinarsPage() {
  return (
    <Layout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on AI, technology, and business innovation"
      keywords="webinars, online events, technology education, AI training, business insights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Join our expert-led webinars on AI, technology, and business innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {webinar.category}
                      </span>
                      {webinar.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900">{webinar.speaker}</p>
                      <p className="text-sm text-gray-500">{webinar.speakerTitle}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      {webinar.status === 'upcoming' ? (
                        <Link
                          href={`/contact?webinar=${webinar.id}`}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      ) : (
                        <Link
                          href={`/contact?webinar=${webinar.id}`}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                        >
                          Watch Recording
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      )}
                    </div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Share your expertise with our community. Contact us to discuss hosting a webinar.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
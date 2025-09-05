import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Users, ExternalLink, Search } from 'lucide-react';

export default function Webinars() {
  const [searchTerm, setSearchTerm] = useState('');

  const webinars = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Learn how to implement AI solutions to automate your business processes and increase efficiency.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      attendees: 150,
      speaker: "Dr. Sarah Johnson",
      category: "AI Services",
      thumbnail: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cloud Migration Strategies",
      description: "Best practices for migrating your infrastructure to the cloud with minimal downtime.",
      date: "2024-02-20",
      time: "3:30 PM EST",
      duration: "45 minutes",
      attendees: 89,
      speaker: "Mike Chen",
      category: "IT Services",
      thumbnail: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Micro SaaS Development",
      description: "Building and scaling micro SaaS applications for maximum impact and profitability.",
      date: "2024-02-25",
      time: "1:00 PM EST",
      duration: "90 minutes",
      attendees: 203,
      speaker: "Alex Rodriguez",
      category: "Micro SaaS",
      thumbnail: "/api/placeholder/400/250"
    }
  ];

  const filteredWebinars = webinars.filter(webinar =>
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars on AI, IT, and Micro SaaS solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Webinars
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                Learn from industry experts about AI, IT, and Micro SaaS solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Play className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-2" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Speaker: {webinar.speaker}
                      </span>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2">
                        Register
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Don't Miss Our Next Webinar
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Stay updated with the latest trends and technologies in AI, IT, and Micro SaaS.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe to Notifications
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
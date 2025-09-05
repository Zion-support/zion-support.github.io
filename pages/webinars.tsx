import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, ArrowRight, CheckCircle, Star } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'Introduction to AI for Business',
    description: 'Learn how artificial intelligence can transform your business operations and drive growth.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Johnson',
    speakerTitle: 'AI Research Director',
    attendees: 150,
    category: 'AI & Machine Learning',
    level: 'Beginner',
    price: 'Free',
    image: '/images/webinar-ai.jpg',
    topics: [
      'AI fundamentals for business',
      'Common AI use cases',
      'ROI of AI implementation',
      'Getting started with AI'
    ]
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Expert insights on migrating your infrastructure to the cloud safely and efficiently.',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '90 minutes',
    speaker: 'Michael Chen',
    speakerTitle: 'Cloud Solutions Architect',
    attendees: 200,
    category: 'Cloud Computing',
    level: 'Intermediate',
    price: 'Free',
    image: '/images/webinar-cloud.jpg',
    topics: [
      'Cloud migration strategies',
      'Security considerations',
      'Cost optimization',
      'Performance monitoring'
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity in the Digital Age',
    description: 'Protect your business from evolving cyber threats with modern security practices.',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '75 minutes',
    speaker: 'Emily Rodriguez',
    speakerTitle: 'Cybersecurity Expert',
    attendees: 180,
    category: 'Security',
    level: 'All Levels',
    price: 'Free',
    image: '/images/webinar-security.jpg',
    topics: [
      'Current threat landscape',
      'Security best practices',
      'Incident response',
      'Compliance requirements'
    ]
  },
  {
    id: 4,
    title: 'Building Scalable Microservices',
    description: 'Learn how to design and implement microservices architecture for modern applications.',
    date: '2024-03-08',
    time: '2:30 PM EST',
    duration: '120 minutes',
    speaker: 'David Kim',
    speakerTitle: 'Senior Software Architect',
    attendees: 120,
    category: 'Software Development',
    level: 'Advanced',
    price: '$99',
    image: '/images/webinar-microservices.jpg',
    topics: [
      'Microservices design patterns',
      'Service communication',
      'Data management',
      'Deployment strategies'
    ]
  }
];

const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Security', 'Software Development'];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="Webinars - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {webinar.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(webinar.date).toLocaleDateString()} at {webinar.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {webinar.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {webinar.speaker}
                        </div>
                        <div className="text-sm text-gray-600">
                          {webinar.speakerTitle}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {webinar.price}
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredWebinars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No webinars found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Want to Host Your Own Webinar?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Partner with us to share your expertise with our community.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Become a Speaker
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
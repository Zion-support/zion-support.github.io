import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Download 
} from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'AI in Enterprise: Best Practices',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    attendees: 150,
    description: 'Learn how to implement AI solutions in your enterprise environment.'
  },
  {
    title: 'Cloud Migration Strategies',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    attendees: 200,
    description: 'Discover the best practices for migrating to the cloud.'
  },
  {
    title: 'Cybersecurity Trends 2024',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '90 minutes',
    attendees: 300,
    description: 'Stay ahead of the latest cybersecurity threats and solutions.'
  }
];

export default function WebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  return (
    <Layout
      title="Webinars - Zion Tech Group | Educational Resources"
      description="Join our educational webinars and learn from industry experts about AI, cloud technology, and digital transformation."
      keywords="webinars, education, learning, AI, cloud, technology, training"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & Events
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Join our expert-led webinars and learn about the latest trends in AI, cloud technology, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Webinars List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI in Business: Practical Applications',
                  date: '2024-02-15',
                  time: '2:00 PM EST',
                  attendees: 150,
                  description: 'Learn how to implement AI solutions in your business',
                  speaker: 'Dr. Sarah Johnson',
                  category: 'AI & Machine Learning'
                },
                {
                  title: 'Cloud Migration Best Practices',
                  date: '2024-02-22',
                  time: '3:00 PM EST',
                  attendees: 200,
                  description: 'Step-by-step guide to successful cloud migration',
                  speaker: 'Mike Chen',
                  category: 'Cloud Computing'
                },
                {
                  title: 'Cybersecurity for Small Businesses',
                  date: '2024-03-01',
                  time: '1:00 PM EST',
                  attendees: 100,
                  description: 'Essential security measures for small businesses',
                  speaker: 'Emily Davis',
                  category: 'Cybersecurity'
                }
              ].map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{webinar.title}</h3>
                      <p className="text-sm text-gray-600">{webinar.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.attendees} attendees
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

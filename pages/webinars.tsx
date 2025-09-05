import { motion } from 'framer-motion';
import Head from 'next/head';
import { Calendar, Clock, Users, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'AI in Enterprise: Future Trends and Implementation',
    description: 'Learn about the latest AI trends and how to implement them in your enterprise.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Chen',
    category: 'AI',
    attendees: 150,
    maxAttendees: 200
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for Large Enterprises',
    description: 'Best practices for migrating your infrastructure to the cloud.',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '90 minutes',
    speaker: 'Michael Rodriguez',
    category: 'Cloud',
    attendees: 120,
    maxAttendees: 150
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for 2024',
    description: 'Essential cybersecurity measures to protect your business.',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '45 minutes',
    speaker: 'Jennifer Kim',
    category: 'Security',
    attendees: 200,
    maxAttendees: 250
  }
];

const categories = [
  'All',
  'AI',
  'Cloud',
  'Security',
  'Development'
];

export default function Webinars() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars and learn about the latest technology trends" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Webinars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert-led webinars and learn about the latest technology trends and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {webinar.category}
                </span>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {webinar.attendees}/{webinar.maxAttendees}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {webinar.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {webinar.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Date:</span>
                  <span className="ml-2">{webinar.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Time:</span>
                  <span className="ml-2">{webinar.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Speaker:</span>
                  <span className="ml-2">{webinar.speaker}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
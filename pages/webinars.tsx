import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Video } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const upcomingWebinars = [
  {
    title: 'AI in Business: Getting Started',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    attendees: 150,
    description: 'Learn how to implement AI solutions in your business operations.',
    presenter: 'Dr. Sarah Johnson, AI Specialist',
    registrationLink: '/register-webinar'
  },
  {
    title: 'Cloud Migration Best Practices',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    attendees: 200,
    description: 'Comprehensive guide to successful cloud migration strategies.',
    presenter: 'Mike Chen, Cloud Architect',
    registrationLink: '/register-webinar'
  }
];

export default function Webinars() {
  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on AI, cloud computing, and digital transformation."
      keywords="webinars, AI training, cloud computing, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Webinars
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Learn from industry experts about the latest in AI, cloud computing, and digital transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Register for our upcoming expert-led sessions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Video className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{webinar.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {webinar.time} ({webinar.duration})
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Presenter:</strong> {webinar.presenter}
                    </p>
                    <Link
                      href={webinar.registrationLink}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Register Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Want to Host a Custom Webinar?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us to arrange a private webinar for your team
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
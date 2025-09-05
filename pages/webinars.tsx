import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
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
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Webinars List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Introduction to AI and Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of AI and ML, including key concepts, applications, and implementation strategies for your business.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Date: January 15, 2024</p>
                  <p>Time: 2:00 PM EST</p>
                  <p>Duration: 60 minutes</p>
                  <p>Speaker: Dr. Sarah Johnson</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
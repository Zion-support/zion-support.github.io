import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Play,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Filter,
  Search,
  Star,
  BookOpen,
  Video,
  Download
} from 'lucide-react';

export default function WebinarsPage() {
  return (
    <>
      <Head>
        <title>Webinars & Events - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts. Discover the latest trends in technology and business." />
        <meta name="keywords" content="webinars, events, education, technology, learning, training" />
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
                Webinars & <span className="text-yellow-400">Events</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
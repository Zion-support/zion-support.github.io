import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'hello@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: 'Mon-Fri: 9AM-6PM EST'
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for all your technology needs. We're here to help you succeed." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Get in touch with our team to discuss your project and how we can help you succeed.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

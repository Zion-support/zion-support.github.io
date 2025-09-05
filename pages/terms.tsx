import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service for Zion Tech Group's AI, IT, and Micro SaaS solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Terms of Service
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Please read these terms carefully before using our services.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Zion Tech Group services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only.
              </p>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of 
                the use or inability to use the materials on Zion Tech Group's website.
              </p>

              <h2>5. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul>
                <li>Email: legal@ziontechgroup.com</li>
                <li>Phone: +1 302 464 0950</li>
                <li>Address: 123 Innovation Drive, Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
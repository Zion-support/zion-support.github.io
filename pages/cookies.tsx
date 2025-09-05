import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how we use cookies on our website and your privacy rights." />
      </Head>
      
      <Layout>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
                </p>
                <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                </p>
                <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to analyze website traffic, improve user experience, and provide personalized content. We do not use cookies to collect personal information without your consent.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-6">
                  You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
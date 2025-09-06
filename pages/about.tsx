import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Zion Tech Group
        </motion.h1>
        <motion.div 
          className="prose max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg mb-6">
            Zion Tech Group is a leading technology company focused on innovation and excellence.
          </p>
          <p className="text-lg mb-6">
            We specialize in cutting-edge solutions that drive business growth and digital transformation.
          </p>
        </motion.div>
      </div>
    </>
  );
}
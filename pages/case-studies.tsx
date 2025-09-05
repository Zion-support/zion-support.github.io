import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
    description: "Implemented AI-driven diagnostic tools that improved patient outcomes by 40%",
    results: ["40% improvement in diagnostics", "60% reduction in wait times", "95% patient satisfaction"]
  },
  {
    id: 2,
    title: "Cloud Migration for E-commerce",
    client: "TechStart Inc",
    industry: "E-commerce",
    description: "Migrated legacy systems to cloud infrastructure, reducing costs by 50%",
    results: ["50% cost reduction", "99.9% uptime", "3x faster performance"]
  }
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with technology solutions." />
      </Head>
      
      <Layout>
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Success stories from our clients
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-2">{study.client} • {study.industry}</p>
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <ul className="mb-4">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, 
  Users, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Brain,
  Search
} from 'lucide-react';

const caseStudies = [
  {
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
  }
];

const industries = [
  "Healthcare",
  "Financial Services",
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
          </div>
        </section>

        {/* Case Studies Grid */}
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
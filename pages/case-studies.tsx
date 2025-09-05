import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Calendar,
  Tag,
  Eye
} from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform with our technology solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Explore our success stories and see how we've helped businesses transform
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
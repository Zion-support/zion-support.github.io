import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search,
  Filter,
  MessageCircle,
  BookOpen,
  Lightbulb
} from 'lucide-react';

export default function FAQPage() {
  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, products, and solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                FAQ
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to frequently asked questions
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
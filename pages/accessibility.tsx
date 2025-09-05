import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Users,
  Shield,
  Zap,
  FileText,
  Settings
} from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Committed to making technology accessible to everyone
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
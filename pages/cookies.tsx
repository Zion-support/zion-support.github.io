import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Shield, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Info,
  Cookie,
  Lock,
  Eye
} from 'lucide-react';

export default function CookiesPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn about how we use cookies and similar technologies
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
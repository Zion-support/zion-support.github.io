import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Shield,
  Code,
  Briefcase
} from 'lucide-react';

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team and help shape the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Careers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Join our team and help shape the future of technology
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
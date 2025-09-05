import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Users, 
  GraduationCap, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
  }
];

const values = [
  {
  }
];

export default function CareersPage() {
  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join our team of innovators and help shape the future of technology
            </p>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
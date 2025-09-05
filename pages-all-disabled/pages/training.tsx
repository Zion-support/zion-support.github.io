import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';

export default function TrainingPage() {
  return (
    <>
      <Head>
        <title>Training & Education - Zion Tech Group</title>
        <meta name="description" content="Professional training and educational resources for technology skills development." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Training & Education
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Advance your skills with our comprehensive training programs and educational resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Training Programs Coming Soon
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're developing comprehensive training programs to help you master the latest technologies. 
                Stay tuned for updates!
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
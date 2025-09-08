import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Shield, 
  Cloud, 
  Brain 
} from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    description: 'Revolutionary healthcare solutions with AI-powered diagnostics, telemedicine, and patient management systems.',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'Finance',
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Manufacturing',
    description: 'Smart manufacturing solutions with IoT integration, predictive maintenance, and automated quality control.',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Retail',
    description: 'Next-generation retail experiences with e-commerce platforms, inventory management, and customer analytics.',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Solutions'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    name: 'Education',
    description: 'Transformative educational technology with online learning platforms, student management, and AI tutoring.',
    icon: BookOpen,
    href: '/industries/education',
    features: ['Online Learning', 'Student Management', 'AI Tutoring', 'Assessment Tools'],
    color: 'from-orange-500 to-amber-500'
  },
  {
    name: 'Real Estate',
    description: 'Innovative real estate solutions with virtual tours, property management, and market analytics.',
    icon: Building,
    href: '/industries/real-estate',
    features: ['Virtual Tours', 'Property Management', 'Market Analytics', 'Transaction Management'],
    color: 'from-indigo-500 to-blue-500'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tailored technology solutions for every industry. We understand the unique challenges 
            and opportunities in each sector and deliver customized solutions that drive growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">6+ Industries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Cloud className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Cloud Native</span>
            </div>
          </div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {industry.name}
              </h3>

              <p className="text-gray-300 mb-6 line-clamp-3">
                {industry.description}
              </p>

              <div className="space-y-3 mb-8">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={industry.href}>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Solutions
                </motion.button>
              </Link>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss how we can 
              create a custom solution for your specific industry needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
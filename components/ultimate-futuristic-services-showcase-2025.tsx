import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Users, Award, Clock, Heart;
  Brain, Atom, Shield, Rocket, Zap, Globe;
  CheckCircle, ArrowRight, Search, Filter;
  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
  Brain as BrainIcon, Play as PlayIcon
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';
const contactInfo = null;
                  setSelectedCategory('all')
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Experience the Future?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Transform your business with our revolutionary futuristic
              services. Get in touch with our experts to discuss your specific
              needs and implementation strategy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'              >              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services. 
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
);
}

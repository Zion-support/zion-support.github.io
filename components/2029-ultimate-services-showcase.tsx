
import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;

  Target, Crown, Star, TrendingUp, ArrowRight;
  CheckCircle, DollarSign, Users, Clock, Award, Zap as ZapIcon;
  Search, Phone, Mail, MapPin, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2, Eye;
  Globe2, Satellite, Dna, Battery, Gamepad, Cpu as CpuIcon

 } from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import { cuttingEdge2028MicroSaas  } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028  } from '../data/2028-practical-business-solutions';
import { advancedAIAutonomousServices2028  } from '../data/2028-advanced-ai-autonomous-services';

import { quantumSpaceInnovations2028 } from '../data/2028-quantum-space-innovations';
export default function UltimateServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = null;
                  setSelectedPriceRange('all')

                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-t border-cyan-500/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the future of technology with our revolutionary services.
              Contact us today to discuss how we can help you achieve your
              goals.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg'
              >
                Get Started Today
              </Link>
              <div className='flex items-center space-x-4 text-gray-300'>
                <div className='flex items-center space-x-2'>
                  <Phone className='h-5 w-5 text-cyan-400' />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-5 w-5 text-cyan-400' />                  <span>{contactInfo.email}</span>              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg"
              >
                Get Started Today
              </Link>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </>
);  )
}

import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe;
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud;
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin
 } from 'lucide-react';
import { cuttingEdge2027Innovations  } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027  } from '../data/2027-practical-micro-saas';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
export default function ServicesShowcase2027() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  // Sort options
  const sortOptions = null;
                  setSelectedPriceRange('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-cyan-300 mb-8 text-lg'>
              Contact our team to discuss how our 2027 services can
              revolutionize your operations and drive unprecedented growth.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='flex items-center justify-center space-x-3'>
                <Phone className='w-5 h-5 text-cyan-400' />
                <span className='text-white'>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <Mail className='w-5 h-5 text-purple-400' />
                <span className='text-white'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <MapPin className='w-5 h-5 text-pink-400' />
                <span className='text-white'>{contactInfo.address}</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25'              >
                Get Started Today
              </Link>
              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'              >              Ready to Transform Your Business?
            </h2>
            <p className="text-cyan-300 mb-8 text-lg">
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50'>
              Z
            </div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
              Zion Tech Group
            </h3>
            <p className='text-cyan-300'>2027 Innovation Hub</p>
          </div>

          <div className='text-cyan-300 text-sm'>
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>
            <p className='mt-2'>
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              {' • '}
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Terms of Service
              </Link>
              {' • '}
              <Link
                href='/contact'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Contact Us
              </Link>            </p>              Z
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Zion Tech Group
            </h3>
            <p className="text-cyan-300">2027 Innovation Hub</p>
          </div>
          
          <div className="text-cyan-300 text-sm">
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
              {' • '}
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
              {' • '}
              <Link href="/contact" className="hover: text-cyan-400 transition-colors duration-300">Contact Us</Link>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticMatrixBackground2027>
);  )
}

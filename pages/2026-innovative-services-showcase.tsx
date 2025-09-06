
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail  } from 'lucide-react';
import { innovative2026MicroSaasServicesV4  } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4  } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4  } from '../data/enterprise-it-2026-services-v4';
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
export default function Innovative2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  const allServices = null;
                    setSelectedPriceRange('all')

                  }}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300'                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Contact our team to learn more about our innovative 2026
                services and how they can revolutionize your operations.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6'>
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                  <h3 className='text-white font-semibold mb-2'>Call Us</h3>
                  <p className='text-blue-300'>+1 302 464 0950</p>
                </div>
                <div className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6'>
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-4' />
                  <h3 className='text-white font-semibold mb-2'>Email Us</h3>
                  <p className='text-purple-300'>kleber@ziontechgroup.com</p>
                </div>
                <div className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6'>
                  <Globe className='w-8 h-8 text-green-400 mx-auto mb-4' />
                  <h3 className='text-white font-semibold mb-2'>Visit Us</h3>
                  <p className='text-green-300'>ziontechgroup.com</p>
                </div>
              </div>

              <Link href='/contact'>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started Today
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
);

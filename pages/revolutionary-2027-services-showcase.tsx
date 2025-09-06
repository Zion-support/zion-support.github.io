
import React, { useState, useMemo } from 'react',
import Head from 'next/head';
import { motion, AnimatePresence  } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe  } from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices  } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices  } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  const allServices = null;
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters

                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the future of technology with our revolutionary 2027
              services. Each solution is designed to deliver measurable ROI and
              competitive advantage.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-6 mb-8'>
              <div className='flex items-center gap-2 text-cyan-400'>
                <Phone className='w-5 h-5' />
                <span className='font-semibold'>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center gap-2 text-purple-400'>
                <Mail className='w-5 h-5' />
                <span className='font-semibold'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center gap-2 text-green-400'>
                <MapPin className='w-5 h-5' />
                <span className='text-sm font-semibold'>
                  {contactInfo.address}
                </span>
              </div>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
              >
                <Rocket className='w-5 h-5 mr-2' />
                Start Your Transformation
              </a>
              <a
                href='/services'
                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'
              >
                <Globe className='w-5 h-5 mr-2' />                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
);

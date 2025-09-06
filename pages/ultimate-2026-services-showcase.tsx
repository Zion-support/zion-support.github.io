
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Star, DollarSign, CheckCircle;
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List;
  ChevronDown, Sparkles
 } from 'lucide-react';
import { ultimate2026Services  } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';

export default function Ultimate2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const contactInfo = null;
              and emerging technology solutions to gain competitive advantages and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500%+</div>
                <div className="text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build the Future Together
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Our team of experts is ready to help you implement these revolutionary 2026 innovations
                and transform your business operations with cutting-edge technology.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">First-to-Market Innovations</h5>
                    <p className="text-gray-400">Access cutting-edge technology before your competitors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Proven ROI</h5>
                    <p className="text-gray-400">Average customers see 300-500% return on investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Expert Implementation</h5>
                    <p className="text-gray-400">Full-service deployment and ongoing support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Future-Proof Technology</h5>
                    <p className="text-gray-400">Built for the challenges and opportunities of tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Users, TrendingUp;
  DollarSign, Clock, CheckCircle, ArrowRight;
  Brain, Rocket, Dna, Globe, Shield, Wifi;
  Package, Bot, Car, Building2, Monitor, Cpu;
  Zap, Atom, Database, Cloud, Lock, Code;
  Phone, Mail, MapPin, ExternalLink, ChevronDown;
  Award, Target, Zap as ZapIcon, Globe as GlobeIcon
 } from 'lucide-react';
// Import the new revolutionary services
import { revolutionary2025Services  } from '../data/revolutionary-2025-innovative-services';
import { revolutionary2025ITServices } from '../data/revolutionary-2025-it-infrastructure';
const allServices = null;
                    setSelectedCategory('all')
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary services to achieve unprecedented growth and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-3">{contactInfo.mobile}</p>
                  <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="text-purple-400 hover:text-purple-300">
                    Call Now →
                  </a>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-3">{contactInfo.email}</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                    Send Email →
                  </a>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-3 text-sm">{contactInfo.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    Get Directions →
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Start Your Transformation
                  </button>
                </Link>
                <Link href={contactInfo.website}>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover: border-purple-500 hover:text-purple-400 transition-all duration-300 text-lg">
                    Visit Website
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

import React, { useState, useEffect } from 'react',
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedInnovativeServices  } from '../data/2025-advanced-innovative-services-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';
export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]),

  // Combine all services
  const allServices = null;
                  setPriceRange([0, 10000])
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
};
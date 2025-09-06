import React, { useState } from 'react',
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond  } from 'lucide-react';
import Button from '../components/ui/Button',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories  } from '../data/revolutionary-micro-saas-services';
import { enhancedMicroSaasServices  } from '../data/enhanced-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';
export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const allServices = null;
                     setPriceRange('All')
                   }}
                 >
                   Clear Filters
                 </Button>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20'>
          <div className='container mx-auto px-4 text-center'>
            <motion.div
              className='max-w-4xl mx-auto'              initial={{ opacity: 0, y: 20 }}        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Ready to Get Started?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Contact our sales team to discuss pricing, custom plans, and
                implementation options.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>
                    window.open('https://ziontechgroup.com/contact', '_blank')
                  }
                >
                  Contact Sales
                  <Mail className='ml-2 w-5 h-5' />
                </Button>
                <Button
                  variant='futuristic'
                  size='lg'
                  onClick={() =>
                    window.open('https://ziontechgroup.com/contact', '_blank')
                  }
                >
                  Schedule Demo
                  <Calendar className='ml-2 w-5 h-5' />
                </Button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                <div>
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.mobile}
                  </div>
                  <div className='text-gray-400 text-sm'>Call us anytime</div>
                </div>
                <div>
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.email}
                  </div>
                  <div className='text-gray-400 text-sm'>Email us 24/7</div>
                </div>
                <div>
                  <MapPin className='w-8 h-8 text-green-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.address}
                  </div>
                  <div className='text-gray-400 text-sm'>Visit our office</div>                </div>                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                >
                  Contact Sales
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                >
                  Schedule Demo
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
);  )
}

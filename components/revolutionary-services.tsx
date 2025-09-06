import React, { useState } from 'react';
import Head from 'next/head';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  Eye,
  Trophy,
  FlaskConical as FlaskIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,;
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  revolutionaryMicroSaasServices,
  revolutionaryServiceCategories,
  getRevolutionaryServicesByCategory,
  getPopularRevolutionaryServices,
  getRevolutionaryServicesByPriceRange,;
} from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Calendar } from 'lucide-react';
export default function RevolutionaryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const [selectedService, setSelectedService] = useState<any>(null),

  const priceRanges = null;

                             setPriceRange('All')
                           }}
                         >
                           Clear Filters
                         </Button>
            )}
          </div>
        </section>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'              initial={{ opacity: 0 }}              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className='bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <div className='p-8'>
                  <div className='flex justify-between items-start mb-6'>
                    <div className='flex items-center gap-4'>
                      <div className='text-5xl'>{selectedService.icon}</div>
                      <div>
                        <h2 className='text-3xl font-bold text-white mb-2'>
                          {selectedService.name}
                        </h2>
                        <p className='text-xl text-gray-300'>
                          {selectedService.tagline}
                        </p>                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className='text-gray-400 hover:text-white text-2xl'                    >                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{selectedService.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                        <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className='text-gray-400 hover:text-white text-2xl'                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                      <h3 className='text-xl font-semibold text-cyan-400 mb-4'>
                        Service Details
                      </h3>
                      <p className='text-gray-300 mb-6'>
                        {selectedService.description}
                      </p>

                      <div className='space-y-4'>
                        <div>
                          <h4 className='text-sm font-semibold text-purple-400 mb-2'>
                            Pricing
                          </h4>
                          <div className='text-2xl font-bold text-white'>
                            {selectedService.price}
                            {selectedService.period}
                          </div>
                          <div className='text-sm text-gray-400'>
                            {selectedService.marketPrice}
                          </div>
                        </div>

                        <div>
                          <h4 className='text-sm font-semibold text-green-400 mb-2'>
                            ROI & Market
                          </h4>
                          <div className='text-sm text-gray-300 space-y-1'>
                            <div>
                              <span className='text-gray-400'>ROI:</span>{' '}
                              {selectedService.roi}
                            </div>
                            <div>
                              <span className='text-gray-400'>
                                Market Size:
                              </span>{' '}
                              {selectedService.marketSize}
                            </div>
                            <div>
                              <span className='text-gray-400'>
                                Growth Rate:
                              </span>{' '}
                              {selectedService.growthRate}
                            </div>                          </div>                          <h4 className="text-sm font-semibold text-green-400 mb-2">ROI & Market</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div><span className="text-gray-400">ROI:</span> {selectedService.roi}</div>
                            <div><span className="text-gray-400">Market Size:</span> {selectedService.marketSize}</div>
                            <div><span className="text-gray-400">Growth Rate:</span> {selectedService.growthRate}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-cyan-400 mb-4'>
                        Features & Capabilities
                      </h3>

                      <div className='space-y-4'>
                        <div>
                          <h4 className='text-sm font-semibold text-purple-400 mb-2'>
                            Key Features
                          </h4>
                          <div className='space-y-2'>
                            {selectedService.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className='flex items-center gap-2 text-sm'
                              >
                                <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
                                <span className='text-gray-300'>{feature}</span>                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                          <div className="space-y-2">
                            {selectedService.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className='text-sm font-semibold text-green-400 mb-2'>
                            Benefits
                          </h4>
                          <div className='space-y-2'>
                            {selectedService.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className='flex items-center gap-2 text-sm'
                              >
                                <Star className='w-3 h-3 text-yellow-400 flex-shrink-0' />
                                <span className='text-gray-300'>{benefit}</span>                              </div>
                            ))}
                          </div>
                        </div>                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits</h4>
                          <div className="space-y-2">
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                            Capabilities
                          </h4>
                          <div className='space-y-2'>
                            {selectedService.capabilities.map(
                              (capability, idx) => (
                                <div
                                  key={idx}
                                  className='flex items-center gap-2 text-sm'
                                >
                                  <Zap className='w-3 h-3 text-cyan-400 flex-shrink-0' />
                                  <span className='text-gray-300'>
                                    {capability}
                                  </span>
                                </div>
                              )
                            )}                          </div>                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>
                          <div className="space-y-2">
                            {selectedService.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{capability}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-8 pt-6 border-t border-gray-700'>
                    <div className='flex flex-col sm:flex-row gap-4 justify-between items-center'>
                      <div className='text-sm text-gray-400'>
                        <div>Setup Time: {selectedService.setupTime}</div>
                        <div>Trial: {selectedService.trialDays} days</div>
                      </div>

                      <div className='flex gap-4'>
                        <Button
                          variant='primary'
                          onClick={() =>
                            window.open(selectedService.link, '_blank')
                          }
                        >
                          Visit Service
                          <ExternalLink className='ml-2 w-4 h-4' />
                        </Button>
                        <Button
                          variant='futuristic'
                          onClick={() =>
                            window.open(
                              'https://ziontechgroup.com/contact',
                              '_blank'
                            )
                          }
                        >
                          Contact Sales
                          <Mail className='ml-2 w-4 h-4' />
                        </Button>                      </div>                      
                      <div className="flex gap-4">
                                                 <Button 
                           variant="primary"
                           onClick={() => window.open(selectedService.link, '_blank')}
                         >
                           Visit Service
                           <ExternalLink className="ml-2 w-4 h-4" />
                         </Button>
                         <Button 
                           variant="futuristic"
                           onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                         >
                           Contact Sales
                           <Mail className="ml-2 w-4 h-4" />
                         </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                Ready to Experience the Future?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Join thousands of companies already transforming their business
                with our revolutionary micro SaaS services.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>
                    window.open('https://ziontechgroup.com/contact', '_blank')
                  }
                >
                  Start Free Trial
                  <Rocket className='ml-2 w-5 h-5' />
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
                  <div className='text-gray-400 text-sm'>Visit our office</div>                </div>                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                 <Button 
                   variant="primary" 
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                 >
                   Start Free Trial
                   <Rocket className="ml-2 w-5 h-5" />
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

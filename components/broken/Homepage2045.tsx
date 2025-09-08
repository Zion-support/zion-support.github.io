

import React, { useState, useEffect } from 'react';


import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles;
} from 'lucide-react';
import Link from 'next/link';

  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Rocket,
  Loader2,
  ChevronDown,
  Zap,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Palette,
  Heart,
  Phone,
  Mail,
  MapPin,
  Search,
  Grid,
  List,
  Atom,
  Target,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
// Loading fallback component
const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>    <motion.div
    return colors[index % colors && colors.length];
  };
  if (isLoading) {;
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>;
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>        </div>      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500';
    ];
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>;
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>      <div className="min-h-screen bg-black flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>;
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>;
      </div>;
    );
  }
  return (
    <Layout>;
      <div className='min-h-screen bg-black text-white relative overflow-x-hidden'>;
        {/* Hero Section */}
        <section
          id='hero'
          className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
          {/* Animated Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>;
            <motion&& motion.div
              className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
              animate={{
              }}
              transition={{
                duration: 8
                repeat: Infinity
                ease: 'easeInOut',              }}
              className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full'
              animate={{
              }}
              transition={{
                duration: 6
                repeat: Infinity
                ease: 'easeInOut'
              }}
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles;
} from 'lucide-react';
import Link from 'next / link';
import { innovative2040FuturisticServices } from '../data / innovative - 2040 - futuristic - services';
import { innovative2040ITServices } from '../data / innovative - 2040 - it - services';
import { revolutionary2043AdvancedServices } from '../data / revolutionary - 2043 - advanced - services';
import { revolutionary2044FuturisticServices } from '../data / revolutionary - 2044 - futuristic - services';
// Loading fallback component;
const LoadingFallback = () =>: any (
  <div className='min - h-screen flex items - center justify - center bg - gray - 900'>    <motion.div;
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
 } from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';

import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';


            </motion && motion.div>;







            {/* CTA Buttons */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

            {/* Stats */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}


            >
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                  500+
                </div>
                <div className='text-gray-400'>Innovative Services</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                  4.9/5
                </div>
                <div className='text-gray-400'>Customer Rating</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>
                  1000+
                </div>
                <div className='text-gray-400'>Happy Clients</div>              </div>            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>
                <div className="text-gray-400">Happy Clients</div>
                Explore Services;
              </Link>;
            </motion && motion.div>;transition={ duration: 0.8, delay: 0.6 }
className='flex flex-col sm:flex-row gap-4 justify-center items-center';
            >;
              <Link;
                href=/contact;
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105';
              >;
                Get Started;
              </Link>;
              <Link;
href=/services;
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105';
              >;
                Explore Services;
              </Link>;
            </motion.div>;
              animate={ opacity: 1, y: 0 }
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105">;
                Explore Services;
              </Link>;
            </motion && motion.div>;


            {/* Featured New Services */}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6'    />;
                <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'    />;
                  Latest Innovations;
                </span>;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Explore our newest revolutionary services that are setting new standards in technology innovation.;
              </p>;
            </motion && motion.div>;
            {/* Featured New Services */}
                    key={service.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group'><Link href={service.link}>
                      <div className='relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='text-3xl'>{service.icon}</div>
                          {service.popular && (
                            <span className='px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full'>
                              New
                            </span>
                          )}
                        </div>;
                        <h3 className='text - xl font - bold text - white mb - 2'>;
                          {service.name}
                        </h3>;
                        <p className='text - gray - 400 text - sm mb - 4'>;
                          {service.description}
                        </p>;
                        <div className='flex items - center justify - between'>;
                          <div className='text - cyan - 400 font - semibold'>;
                            {service.price}
                            {service.period}
                          </div>;
                          <div className='flex items - center text - cyan - 400 group - hover:text - cyan - 300 transition - colors'>;
                            <span className='mr - 2 text - sm'>Learn More</span>;
                            <ArrowRight className='w - 4 h - 4 group - hover:translate - x-1 transition - transform' />;

                          </div>;
                        </div>;
                      </div>;
                    </Link>;
              <Link
                href="/services"



              </Link>



            </motion.div>
          </div>
        </section>

                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105">;
                View All Services;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Contact CTA Section */}

  animate: {;
  transition: {;
  staggerChildren: 0 && 0.1, delayChildren: 0 && 0.2 ;

};
  /* CTA Buttons */ ;
}<motion && motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion && motion.div> {;
  /* Stats */ ;
}<motion && motion.div > <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" >500+</div> <div className="text-gray-400" >Innovative Services</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" >4 && 4.9/5</div> <div className="text-gray-400" >Customer Rating</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" >1000+</div> <div className="text-gray-400" >Happy Clients</div> </div> </motion && motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Revolutionary Services </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology. </p> </motion && motion.div> </div> </div> </a> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Latest Innovations </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our newest revolutionary services that are setting new standards in technology innovation. </p> </motion && motion.div> New </span>) ;
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion && motion.div>) ) ;
}</div> {;
  /* View All Services CTA */ ;
}<motion && motion.div > <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > View All Services <ArrowRight className="ml-2 w-5 h-5" /> </a> </motion && motion.div> </div> </section> <motion&& motion.div initial= {

      </div>;
    </Layout>;
  );
              <h2 className="text-4xl md: text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can drive your business into the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <a
                  href="tel:+1 302 464 0950"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"

export default Homepage2045;

export default Homepage2045;

  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;export default Homepage2045;

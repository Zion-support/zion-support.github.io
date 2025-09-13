import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 

import {


  
  
  componentDidCatch(error, errorInfo) {
  
    
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';

import { innovative2046AIServices  } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices  } from '../data/innovative-2046-it-services';

import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';


import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';
// Enhanced loading component with quantum effects;

import {


import Link from 'next/link';import {



  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';

// Enhanced loading component with quantum effects
const QuantumLoadingFallback = () => (
    {/* Quantum particle effects */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          animate={{
            x: [0, Math.random() * 1200],
            y: [0, Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    





    {/* Quantum loading animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}





      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(6, 182, 212, 0.5)"
            ]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent"



      <p className="text-xl text-gray-300 mb-3">Quantum AI • Neural Interfaces • Space Technology</p>
      <p className="text-lg text-gray-400">Preparing your revolutionary digital transformation journey</p>
      
      {/* Quantum progress bar */}
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">
        <motion.div

          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  </div>
);

const Homepage2046: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {



            <Brain className='w - 16 h - 16 text - white' />;
            <Brain className="w - 16 h - 16 text - white" />;





    return <QuantumLoadingFallback />;







    return <QuantumLoadingFallback />;

    <Layout>;



    <Layout>;














    return <QuantumLoadingFallback />;
    <Layout>;
    <Layout>;




















                <Link href='/services'>                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12";
                <Link href='/services'>;



    return <QuantumLoadingFallback />



          
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3 }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  if (isLoading) {
    return <QuantumLoadingFallback />;
  }

  const allServices = [
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


    <Layout>
          
    <Layout>

          {/* Floating orbs */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}

              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,

          ))}
        </div>

        {/* Hero Section */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
              
              
                <Link href='/services'>                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Link href="/services">
                <Link href='/services'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Explore Services <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    Get Started <Rocket className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

                  <Phone className='w-6 h-6 text-cyan-400 mb-2' />;
                  <Mail className='w-6 h-6 text-purple-400 mb-2' />;
                  <MapPin className='w-6 h-6 text-cyan-400 mb-2' />;
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />;



        {/* Services Showcase Section */}
        <section id="services" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div





              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
              </p>
            </motion.div>






            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}


                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />

              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;


                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                






                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>






            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}





                >
                  <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (


                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                        </div>
                      </div>
                    </div>

                        <DollarSign className='w-4 h-4' />                        <span>{service.price}</span>


                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>


                        <DollarSign className='w-4 h-4' />                        <span>{service && service.price}</span>;
                        <DollarSign className="w-4 h-4" />;
                            <CheckCircle className='w-3 h-3 text-cyan-400 mt-0 && 0.5 flex-shrink-0' />                            <span>{feature}</span>                    <div className="space-y-2 mb-6">;
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0 && 0.5 flex-shrink-0" />;


                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>

                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                        >
                          Learn More <ArrowUpRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                      
                      <div className="text-right text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{service.customers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{service.launchDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>


                    <div className='flex items-center justify-between'>                      <Link href={service && service.link}>;
                      <Link href={service && service.link}>;
                          Learn More <ArrowUpRight className='w-4 h-4' />;
                      </Link>;
                          <Users className='w-3 h-3' />;
                          <Clock className='w-3 h-3' />                          <span>{service && service.launchDate}</span>                        >;
                          Learn More <ArrowUpRight className="w-4 h-4" />;
                      </Link>;
                          <Users className="w-3 h-3" />;
                          <Clock className="w-3 h-3" />;
                <Link href='/services'>                className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 12";
                <Link href='/services'>;
                    Explore Services <ArrowRight className='w - 5 h - 5' />;
                </Link>;
                <Link href='/contact'>;
                    Get Started <Rocket className='w - 5 h - 5' />                  </motion.button>                  <motion.button;
                    Explore Services <ArrowRight className="w - 5 h - 5" />;
                </Link>;
                <Link href="/contact">;
                    Get Started <Rocket className="w - 5 h - 5" />;
                </Link>;
                  <Phone className='w - 6 h - 6 text - cyan - 400 mb - 2' />;
                  <Mail className='w - 6 h - 6 text - purple - 400 mb - 2' />;
                  <MapPin className='w - 6 h - 6 text - cyan - 400 mb - 2' />;
                  <MapPin className="w - 6 h - 6 text - cyan - 400 mb - 2" />;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                        <Brain className='w - 6 h - 6 text - white' />;
                        <Brain className="w - 6 h - 6 text - white" />;
                            <Star;
                        <DollarSign className='w - 4 h - 4' />                        <span>{service.price}</span>;
                        <DollarSign className="w - 4 h - 4" />;
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 mt - 0.5 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="space - y-2 mb - 6">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 mt - 0.5 flex - shrink - 0" />;
                    <div className='flex items - center justify - between'>                      <Link href={service.link}>;
                      <Link href={service.link}>;
                          Learn More <ArrowUpRight className='w - 4 h - 4' />;
                      </Link>;
                          <Users className='w - 3 h - 3' />;
                          <Clock className='w - 3 h - 3' />                          <span>{service.launch_date}</span>                        >;
                          Learn More <ArrowUpRight className="w - 4 h - 4" />;
                      </Link>;
                          <Users className="w - 3 h - 3" />;
                          <Clock className="w - 3 h - 3" />;






            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                  </Link>
                  <Link href="/services">
                  </Link>
    </Layout>

export default Homepage2046;


                  </Link>;
                  <Link href='/services'>            >;
                  <Link href="/contact">;
                  </Link>;
                  <Link href='/services'>;


                  </Link>;
    </Layout>;


export default Homepage2046;  );
export default Homepage2046;


                  <Link href='/contact'>;
                  </Link>;
                  <Link href='/services'>            >;
                  <Link href="/contact">;
                  </Link>;
                  <Link href='/services'>;
                  </Link>;
    </Layout>);
export default Homepage2046);
export default Homepage2046;




import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;
  Microscope, DollarSign, Home, Users, Briefcase;
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;
  Laptop, Watch, Headphones, Speaker, Mic;
  Keyboard, Mouse, CpuIcon, DatabaseIcon;
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon
 } from 'lucide-react';
const contactInfo = null;
  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 text-white py-2 px-4 text-sm'>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <Phone className='w-4 h-4 text-cyan-400' />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='w-4 h-4 text-purple-400' />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <MapPin className='w-4 h-4 text-pink-400' />
            <span className='text-xs'>{contactInfo.address}</span>          </div>              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-xs">{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>            {/* Logo */}      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex items-center space-x-3'
            >
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center'>
                <Rocket className='w-6 h-6 text-white' />
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h1>
                <p className='text-xs text-gray-400'>2031 Future Technology</p>              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>              {mainNavigation.map((item, index) => (            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">2031 Future Technology</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'
                >
                  <Link
                    href={item.href}
                    className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'
                  >
                    <item.icon className='w-4 h-4' />
                    <span>{item.name}</span>
                  </Link>

                  {/* Hover effect */}
                  <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>                </motion.div>                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Hover effect */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'              >            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'              >                className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>              <motion.button            <div className="lg:hidden">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}              </motion.button>                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Service Categories Bar */}
        <div className='hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center space-x-8 py-3'>              {serviceCategories.map((category, index) => (        <div className="hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'>
                    <category.icon className='w-4 h-4' />
                    <span className='text-sm font-medium'>
                      {category.title.split(' ')[0]}
                    </span>
                    <ChevronDown className='w-3 h-3 transition-transform duration-200 group-hover:rotate-180' />                  </button>                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.title.split(' ')[0]}</span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeCategory === category.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden'
                      >
                        <div className='p-4'>
                          <div className='mb-3'>
                            <h3 className='text-lg font-semibold text-white mb-1'>
                              {category.title}
                            </h3>
                            <p className='text-sm text-gray-400'>
                              {category.description}
                            </p>
                          </div>
                          <div className='space-y-3'>                            {category.services.map((service, serviceIndex) => (                      >
                        <div className="p-4">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                          <div className="space-y-3">
                            {category.services.map((service, serviceIndex) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: serviceIndex * 0.05,
                                }}
                                className='group cursor-pointer'
                              >
                                <Link
                                  href={service.href}
                                  className='block p-3 rounded-xl bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-200'
                                >
                                  <div className='flex items-start justify-between'>
                                    <div className='flex-1'>
                                      <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-200'>
                                        {service.name}
                                      </h4>
                                      <p className='text-sm text-gray-400 mt-1'>
                                        {service.description}
                                      </p>
                                    </div>
                                    <div className='text-right'>
                                      <span className='text-sm font-semibold text-cyan-400'>
                                        {service.price}
                                      </span>                                    </div>                              >
                                <Link
                                  href={service.href}
                                  className="block p-3 rounded-xl bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-200"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                        {service.name}
                                      </h4>
                                      <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                    </div>
                                    <div className="text-right">
                                      <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 z-50 lg:hidden'
          >
            <div className='p-6'>
              <div className='flex justify-between items-center mb-8'>
                <h2 className='text-xl font-bold text-white'>Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  <X className='w-6 h-6' />
                </button>
              </div>

              <div className='space-y-6'>
                {mainNavigation.map(item => (                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400'          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400'
                  >
                    <item.icon className='w-5 h-5' />
                    <span className='text-lg'>{item.name}</span>
                  </Link>
                ))}

                <div className='pt-6 border-t border-gray-800'>
                  <div className='space-y-4'>
                    <button className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200'>
                      Get Started
                    </button>
                    <button className='w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200'>                      Contact Us                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                ))}

                <div className="pt-6 border-t border-gray-800">
                  <div className="space-y-4">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                      Get Started
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className='h-32 lg:h-40'></div>
    </>
);      <div className="h-32 lg: h-40"></div>
    </>
  ),
}

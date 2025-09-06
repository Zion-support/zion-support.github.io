
import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Rocket, Brain, Atom;
  Cpu, Target, Microscope, Shield, Zap, Sparkles;
  Menu, X, Search, ChevronDown, Home, Briefcase;
  DollarSign, BookOpen, Users, MessageCircle
 } from 'lucide-react';
const contactInfo = null;

  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-black via-purple-900/30 to-black border-b border-purple-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-10 text-xs text-purple-300'>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-3 h-3 text-purple-400' />
                <span>{contactInfo.mobile}</span>
              </div>                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='w-3 h-3 text-purple-400' />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-3 h-3 text-purple-400' />
                <span>{contactInfo.address}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Globe className='w-3 h-3 text-purple-400' />                <span>{contactInfo.website}</span>              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 text-purple-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='bg-gradient-to-r from-black via-gray-900/95 to-black border-b border-purple-500/20 backdrop-blur-xl sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <motion.div
              className='flex items-center space-x-3'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link href='/' className='flex items-center space-x-3'>
                <div className='relative'>
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl'>
                    <Rocket className='w-7 h-7 text-white' />
                  </div>
                  <div className='absolute -inset-1 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse'></div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                    Zion Tech Group
                  </span>
                  <span className='text-xs text-purple-300 font-medium'>                    Future Technology Solutions            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-purple-300 font-medium">
                    Future Technology Solutions
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
              {/* Services Mega Menu */}
              <div className='relative group'>
                <button
                  onMouseEnter={() => setActiveCategory('services')}
                  onMouseLeave={() => setActiveCategory(null)}
                  className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50'
                >
                  <span>Services</span>
                  <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />                </button>              {/* Services Mega Menu */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveCategory('services')}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Mega Menu */}
                <AnimatePresence>
                  {activeCategory === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveCategory('services')}
                      onMouseLeave={() => setActiveCategory(null)}
                      className='absolute top-full left-0 w-screen max-w-6xl bg-gray-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl p-8 -ml-4'
                    >
                      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {serviceCategories.map(category => (
                          <div key={category.title} className='space-y-4'>
                            <div className='flex items-center space-x-3'>
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                              >
                                <category.icon className='w-5 h-5 text-white' />
                              </div>
                              <h3 className='text-lg font-semibold text-white'>
                                {category.title}
                              </h3>
                            </div>
                            <div className='space-y-3'>
                              {category.services.map(service => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className='block group'
                                >
                                  <div className='p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200'>
                                    <div className='flex items-center justify-between mb-2'>
                                      <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors'>
                                        {service.name}
                                      </h4>
                                      <span className='text-sm text-purple-400 font-medium'>
                                        {service.price}
                                      </span>
                                    </div>
                                    <p className='text-sm text-gray-400'>
                                      {service.description}
                                    </p>                                  </div>                    >
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="space-y-3">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block group"
                                >
                                  <div className="p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h4>
                                      <span className="text-sm text-purple-400 font-medium">
                                        {service.price}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-400">{service.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Links */}
              {quickLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50'                >              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  {link.name}
                </Link>
              ))}

              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/contact'
                  className='px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg'                >                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <button
                onClick={toggleMenu}
                className='text-gray-300 hover:text-white transition-colors duration-200 p-2'
              >
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}              </button>              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/20'
              <div className='px-4 py-6 space-y-6'>
                {/* Mobile Services */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white'>Services</h3>
                  {serviceCategories.map(category => (
                    <div key={category.title} className='ml-4 space-y-2'>
                      <h4 className='font-medium text-purple-300'>
                        {category.title}
                      </h4>
                      <div className='ml-4 space-y-1'>
                        {category.services.map(service => (                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMenu}
                            className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors'                          >                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Services</h3>
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="ml-4 space-y-2">
                      <h4 className="font-medium text-purple-300">{category.title}</h4>
                      <div className="ml-4 space-y-1">
                        {category.services.map((service) => (
                            key={service.name}
                            href={service.href}
                            onClick={closeMenu}
                            className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors'                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Quick Links */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white'>
                    Quick Links
                  </h3>
                  <div className='grid grid-cols-2 gap-2'>
                    {quickLinks.map(link => (                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className='text-sm text-gray-400 hover:text-cyan-400 transition-colors'                      >                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className='text-sm text-gray-400 hover:text-cyan-400 transition-colors'                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Button */}
                <div className='pt-4'>
                  <Link
                    href='/contact'
                    onClick={closeMenu}
                    className='block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-200'                  >                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
);

}whileTap= {
  {
  scale: 0.95 

}> <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg" > Get Started </a> </motion.div> </div> </button> </div> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence>) ) 
}</div> </div>) ) 
}</div>) ) 
}</div> </div> > Get Started </a> </div> </div> </motion.div>) 
}</AnimatePresence> </nav> </>) }

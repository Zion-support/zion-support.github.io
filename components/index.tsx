
import React, { useState, useEffect } from 'react',
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
import EnhancedContactForm from '../components/EnhancedContactForm',

import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';
export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto-rotate features
    const interval = null;
              and digital transformation solutions that drive innovation and growth.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60'
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60'
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60'          />          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
              Revolutionary Technology Solutions
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Discover our cutting-edge services that are transforming
              industries and driving the future of technology
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {services.map((service, index) => (          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our cutting-edge services that are transforming industries and driving the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                <div className='absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
                <div className='relative z-10'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold mb-4 text-white'>
                    {service.title}
                  </h3>
                  <p className='text-white/70 leading-relaxed'>
                    {service.description}
                  </p>
                  <div className='mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>
                    <span className='text-sm font-medium'>Learn More</span>
                    <ChevronRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />                  </div>                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-white/5 to-white/10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center'>
                  <stat.icon className='w-8 h-8 text-white' />
                </div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>              </motion.div>              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <div id='services'>        <EnhancedServicesShowcase />      <div id="services">
        <EnhancedServicesShowcase />
      </div>

      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />

      {/* Latest Updates Section */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
              Latest Autonomous Updates
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Stay updated with our latest innovations and autonomous system
              developments
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <a
              href='/reports/updates/update-2025-08-15-0508'
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105'
            >
              <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
              <h3 className='text-lg font-semibold text-white'>
                Autonomous Update — 2025: 08: 15: 0508
              </h3>
              <p className='mt-1 text-sm text-white/75'>
                Freshly published by autonomous agents.
              </p>
              <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300'>
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a
              href='/reports/updates/update-2025-08-15-0507'
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105'
            >
              <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
              <h3 className='text-lg font-semibold text-white'>
                Autonomous Update — 2025: 08: 15: 0507
              </h3>
              <p className='mt-1 text-sm text-white/75'>
                Freshly published by autonomous agents.
              </p>
              <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300'>
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a
              href='/reports/updates/update-2025-08-15-0457'
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105'
            >
              <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
              <h3 className='text-lg font-semibold text-white'>
                Autonomous Update — 2025: 08: 15: 0457
              </h3>
              <p className='mt-1 text-sm text-white/75'>
                Freshly published by autonomous agents.
              </p>
              <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300'>                Open <span aria-hidden>→</span>            <a href="/reports/updates/update-2025-08-15-0457" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0457</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-white/5 to-white/10'>
        <div className='max-w-7xl mx-auto'>          <motion.div      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
              Ready to Get Started?
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Let's discuss your project and explore how our cutting-edge
              technology solutions can transform your business            </p>          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can transform your business
            </p>
          </motion.div>

          <EnhancedContactForm />
        </div>
      </section>

      <EnhancedFooter />
    </div>
);

and digital transformation solutions that drive innovation and growth. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2" > Explore Services <ArrowRight className="w-5 h-5" /> </a> <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Schedule Consultation </a> </div> </motion.div> </div> /> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Revolutionary Technology Solutions </h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Discover our cutting-edge services that are transforming industries and driving the future of technology </p> </motion.div> </div> </div> </motion.div>) ) 
}</div> </div> </section> > <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center" > <stat.icon className="w-8 h-8 text-white" /> </div> </motion.div>) ) 
}</div> </div> </section> <EnhancedServicesShowcase /> </div> {
  /* Enhanced Testimonials Section */ 
}<EnhancedTestimonialsSection /> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Latest Autonomous Updates </h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Stay updated with our latest innovations and autonomous system developments </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > <a href="/reports/updates/update-2025-08-15-0508" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <h3 className="text-lg font-semibold text-white" >Autonomous Update — 2025: 08: 15: 0508</h3> <p className="mt-1 text-sm text-white/75" >Freshly published by autonomous agents.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300" > Open <span aria-hidden>→</span> </div> </a> <a href="/reports/updates/update-2025-08-15-0507" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <h3 className="text-lg font-semibold text-white" >Autonomous Update — 2025: 08: 15: 0507</h3> <p className="mt-1 text-sm text-white/75" >Freshly published by autonomous agents.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300" > Open <span aria-hidden>→</span> </div> </a> <a href="/reports/updates/update-2025-08-15-0457" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <h3 className="text-lg font-semibold text-white" >Autonomous Update — 2025: 08: 15: 0457</h3> <p className="mt-1 text-sm text-white/75" >Freshly published by autonomous agents.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300" > Open <span aria-hidden>→</span> </div> </a> </div> </div> </section> > Ready to Get Started? </h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Let's discuss your project and explore how our cutting-edge technology solutions can transform your business </p> </motion.div> <EnhancedContactForm /> </div> </section> <EnhancedFooter /> </div>) }

<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function EnhancedServicesShowcase() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="EnhancedServicesShowcase - Zion Tech Group" description="Professional EnhancedServicesShowcase services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">EnhancedServicesShowcase</h1>
        <p className="text-gray-300 text-lg">
          Professional EnhancedServicesShowcase services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { useState } from &apos;react&apos;';
import { Link } from &apos;react-router-dom&apos;';
import { motion } from &apos;framer-motion&apos;';
import { enhancedServices2025 } from &apos;../data/enhanced-services-2025';&apos;&apos;
const EnhancedServicesShowcase = () => {}
';&apos;&apos;
  const [selectedCategory, setSelectedCategory] = useState(&apos;all&apos;)';&apos;&apos;
  const [searchTerm, setSearchTerm] = useState(&apos;&apos;)';&apos;&apos;
  const categories = [&apos;&apos;
    { id: &apos;all&apos;, name: &apos;All Services&apos;, icon: &apos;🌟&apos; },&apos;{ id: &apos;micro-saas&apos;, name: &apos;Micro SAAS&apos;, icon: &apos;💻&apos; },&apos;{ id: &apos;it-services&apos;, name: &apos;IT Services&apos;, icon: &apos;🖥️&apos; },&apos;{ id: &apos;ai-services&apos;, name: &apos;AI Services&apos;, icon: &apos;🤖&apos; },&apos;{ id: &apos;emerging-tech&apos;, name: &apos;Emerging Tech&apos;, icon: &apos;🚀&apos; }
  ];&apos;&apos;
=======
<<<<<<< HEAD
import React, { useState } from 'react'';'
import { Link } from 'react-router-dom'';'
import { motion } from 'framer-motion'';'
<<<<<<< HEAD
""
=======
import { enhancedServices2025 } from '../data/enhanced-services-2025';
const EnhancedServicesShowcase = () => {}
';'
  const [selectedCategory, setSelectedCategory] = useState('all')';'
  const [searchTerm, setSearchTerm] = useState('')';'
  const categories = [''
    { id: 'all', name: 'All Services', icon: '🌟' }, '{ id: 'micro-saas', name: 'Micro SAAS', icon: '💻' },'{ id: 'it-services', name: 'IT Services', icon: '🖥️' }, '{ id: 'ai-services', name: 'AI Services', icon: '🤖' },'{ id: 'emerging-tech', name: 'Emerging Tech', icon: '🚀' }
  ];
>>>>>>> main
  const filteredServices = enhancedServices2025.filter(service => {}
    const;const;const matchesSearch =;
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch})
  const containerVariants = {}
<<<<<<< HEAD
    hidden: { opacit,y: 0 },
    visible: {}
=======
    hidden: { opacity: 0 }, visible: {}
>>>>>>> main
      opacity: 1,
      transition: {}
        staggerChildren: 0.1, delayChildren: 0.2}}}
  const itemVariants = {}
<<<<<<< HEAD
    hidden: { opacit,y: 0, y: 20 },
    visible: {}
      opacity: 1,
      y: 0,
      transition: { duratio,n: 0.5 }}}
  return()
    <;<div className=&apos;min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white&apos;>'&apos;&apos;{/* Hero Section */}&apos;&apos;'&apos;&apos;'
      <section className=&apos;py-20 px-4 sm:px-6 lg:px-8&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;max-w-7xl mx-auto text-center&apos;>'&apos;&apos;''
          <;<motion.h1&apos;&apos;'';
            className=&apos;text-4xl md:text-6xl font-bold mb-6&apos;&apos;';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >&apos;&apos;';
            Comprehensive&apos;&apos;'&apos;&apos;'
            <span className=&apos;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400&apos;>&apos;{&apos; &apos;}
              Technology Solutions&apos;&apos;
            </span>
          </motion.h1>&apos;&apos;'&apos;&apos;
          <motion.p&apos;&apos;'&apos;
            className=&apos;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&apos;&apos;';
=======
    hidden: { opacity: 0, y: 20 }, visible: {}
      opacity: 1,
      y: 0, transition: { duration: 0.5 }}}
  return()
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>'''{/* Hero Section */}'''''
      <section className='py-20 px-4 sm: px-6 lg:px-8'>''''
        <div className='max-w-7xl mx-auto text-center'>''''
          <motion.h1'''';
            className='text-4xl md: text-6xl font-bold mb-6''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >''';'
            Comprehensive''''
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>'{' '}'
              Technology Solutions
            </span>
          </motion.h1>''''
          <motion.p''''
            className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto''';
>>>>>>> main
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our extensive portfolio of innovative micro SAAS services,
            enterprise IT solutions, cutting-edge AI services, and emerging
<<<<<<< HEAD
            technology solutions designed to transform your business.&apos;&apos;</motion.p>
          {/* Contact Information */}&apos;&apos;'&apos;&apos;
          <motion.div&apos;&apos;'';
            className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto&apos;&apos;';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
            <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;text-blue-400 font-semibold&apos;>📱 Contact&apos;</div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-gray-300&apos;>+1 302 464 0950&apos;</div>&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;text-blue-400 font-semibold&apos;>✉️ Email&apos;</div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-gray-300&apos;>kleber@ziontechgroup.com&apos;</div>&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;text-blue-400 font-semibold&apos;>🌐 Website&apos;</div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-gray-300&apos;>ziontechgroup.com&apos;</div>
              </div>
            </div>
          </motion.div>
          {/* Search and Filter */}&apos;&apos;'&apos;&apos;
          <motion.div&apos;&apos;'';
            className=&apos;flex flex-col md:flex-row gap-4 justify-center items-center mb-12&apos;&apos;';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >&apos;&apos;'&apos;&apos;
            <input&apos;&apos;'';
              type=&apos;text&apos;&apos;'';
              placeholder=&apos;Search services...&apos;&apos;';
              value={searchTerm}&apos;&apos;';
              onChange={e => setSearchTerm(e.target.value)}&apos;&apos;'';
              className=&apos;px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 w-full m,d:w-80&apos;&apos;'&apos;/>&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex flex-wrap gap-2&apos;>
              {categories.map(category => (&apos;}
=======
            technology solutions designed to transform your business.</motion.p>
          {/* Contact Information */}''''
          <motion.div'''';
            className='bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}'''>'''''
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>''''
              <div className='text-center'>''''
                <div className='text-blue-400 font-semibold'>📱 Contact</div>''''
                <div className='text-gray-300'>+1 302 464 0950</div>''''
              </div>''''
              <div className='text-center'>''''
                <div className='text-blue-400 font-semibold'>✉️ Email</div>''''
                <div className='text-gray-300'>kleber@ziontechgroup.com</div>''''
              </div>''''
              <div className='text-center'>''''
                <div className='text-blue-400 font-semibold'>🌐 Website</div>''''
                <div className='text-gray-300'>ziontechgroup.com</div>
              </div>
            </div>
          </motion.div>
          {/* Search and Filter */}''''
          <motion.div'''';
            className='flex flex-col md: flex-row gap-4 justify-center items-center mb-12''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >''''
            <input'''';
              type='text'''';'
              placeholder='Search services...''';
              value={searchTerm}''';'
              onChange={e => setSearchTerm(e.target.value)}'''';
              className='px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 w-full md:w-80''''/>'''''
            <div className='flex flex-wrap gap-2'>
              {categories.map(category => (
>>>>>>> main
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${}
<<<<<<< HEAD
';
                    selectedCategory === category.id&apos;';
                      ? &apos;bg-blue-600 border-blue-400 text-white&apos;&apos;'`;
                      : &apos;bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hove,r:border-white/40&apos;``}`}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
                  <span className=&apos;mr-2&apos;>{category.icon}&apos;</span>
=======
';'
                    selectedCategory === category.id'';
                      ? 'bg-blue-600 border-blue-400 text-white'''`;
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'``}`}'''>'''''
                  <span className='mr-2'>{category.icon}</span>
>>>>>>> main
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
&apos;&apos;'{/* Services Grid */}&apos;&apos;'&apos;&apos;'
      <section className=&apos;py-20 px-4 sm:px-6 lg:px-8&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;max-w-7xl mx-auto&apos;>'&apos;&apos;''
          <motion.div&apos;&apos;'&apos;
            className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&apos;&apos;'';
            variants={containerVariants}&apos;&apos;'';
            initial=&apos;hidden&apos;&apos;'';
            whileInView=&apos;visible&apos;&apos;';
=======
'''{/* Services Grid */}'''''
      <section className='py-20 px-4 sm: px-6 lg:px-8'>''''
        <div className='max-w-7xl mx-auto'>''''
          <motion.div''''
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'''';'
            variants={containerVariants}'''';
            initial='hidden'''';'
            whileInView='visible''';
>>>>>>> main
            viewport={{ once: true }}
          >{filteredServices.map((service, index) => (&apos;}&apos;
              <motion.div;
<<<<<<< HEAD
                key={service.id}&apos;&apos;';
                variants={itemVariants}&apos;&apos;'';
                className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hove,r:scale-105 group &apos;>'&apos;&apos;{/* Service Header */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-center mb-6&apos;>`&apos;
                  <div``
                    className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >{service.icon}&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <h3 className=&apos;text-xl font-semibold text-white mb-2&apos;>
                    {service.name}&apos;&apos;'&apos;&apos;
                  </h3>&apos;&apos;'&apos;&apos;'
                  <p className=&apos;text-sm text-blue-400 font-medium&apos;>&apos;{service.category.replace(&apos;-&apos;,).toUpperCase()}&apos;&apos;
                  </p>
                </div>
&apos;&apos;'{/* Tagline */}&apos;&apos;'&apos;&apos;'
                <p className=&apos;text-gray-300 text-sm mb-4 text-center&apos;>
                  {service.tagline}&apos;
                </p>
&apos;&apos;'{/* Pricing */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;bg-white/5 rounded-lg p-4 mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;text-sm font-semibold text-green-400 mb-2&apos;>
                    Pricing&apos;&apos;'&apos;&apos;
                  </h4>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;space-y-1 text-xs text-gray-300&apos;>&apos;'
=======
                key={service.id}''';'
                variants={itemVariants}'''';
                className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover: border-white/40 transition-all duration-300 hover:transform hover:scale-105 group '>'''{/* Service Header */}'''''
                <div className='text-center mb-6'>`
                  <div``
                    className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >{service.icon}''''
                  </div>''''
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    {service.name}''''
                  </h3>''''
                  <p className='text-sm text-blue-400 font-medium'>'{service.category.replace('-',).toUpperCase()}'
                  </p>
                </div>
'''{/* Tagline */}'''''
                <p className='text-gray-300 text-sm mb-4 text-center'>
                  {service.tagline}
                </p>
'''{/* Pricing */}'''''
                <div className='bg-white/5 rounded-lg p-4 mb-4'>''''
                  <h4 className='text-sm font-semibold text-green-400 mb-2'>
                    Pricing''''
                  </h4>''''
                  <div className='space-y-1 text-xs text-gray-300'>
>>>>>>> main
                    <div>Monthly: {service.pricing.monthly}</div>
                    <div>Yearly: {service.pricing.yearly}</div>
                    <div>Setup: {service.pricing.setup}</div>
                  </div>
                </div>
<<<<<<< HEAD
&apos;&apos;'{/* Key Features */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;text-sm font-semibold text-blue-400 mb-2&apos;>
                    Key Features&apos;&apos;'&apos;&apos;
                  </h4>&apos;&apos;'&apos;&apos;'
                  <ul className=&apos;space-y-1&apos;>
                    {service.features.slice(0, 4).map((feature, idx) => (&apos;}
                      <li&apos;&apos;';
                        key={idx}&apos;&apos;'';
                        className=&apos;text-xs text-gray-300 flex items-center&apos;&apos;'&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;w-1.5 h-1.5 bg-blue-400 rounded-full mr-2&apos;>&apos;'</span>
=======
'''{/* Key Features */}'''''
                <div className='mb-4'>''''
                  <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                    Key Features''''
                  </h4>''''
                  <ul className='space-y-1'>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li''';'
                        key={idx}'''';
                        className='text-xs text-gray-300 flex items-center''''>'''''
                        <span className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2'></span>
>>>>>>> main
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
&apos;&apos;'{/* Benefits */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;text-sm font-semibold text-yellow-400 mb-2&apos;>
                    Key Benefits&apos;&apos;'&apos;&apos;
                  </h4>&apos;&apos;'&apos;&apos;'
                  <ul className=&apos;space-y-1&apos;>
                    {service.benefits.slice(0, 3).map((benefit, idx) => (&apos;}
                      <li&apos;&apos;';
                        key={idx}&apos;&apos;'';
                        className=&apos;text-xs text-gray-300 flex items-center&apos;&apos;'&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2&apos;>&apos;'</span>
=======
'''{/* Benefits */}'''''
                <div className='mb-4'>''''
                  <h4 className='text-sm font-semibold text-yellow-400 mb-2'>
                    Key Benefits''''
                  </h4>''''
                  <ul className='space-y-1'>
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li''';'
                        key={idx}'''';
                        className='text-xs text-gray-300 flex items-center''''>'''''
                        <span className='w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2'></span>
>>>>>>> main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
&apos;&apos;'{/* ROI and Setup */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;bg-white/5 rounded-lg p-3 mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;text-xs text-gray-300&apos;>'&apos;&apos;'&apos;&apos;'
                    <div className=&apos;mb-1&apos;>'&apos;&apos;'&apos;&apos;''
                      <span className=&apos;text-green-400 font-medium&apos;>ROI:&apos;</span>{&apos; &apos;}
                      {service.roi}&apos;&apos;
                    </div>&apos;&apos;'&apos;&apos;'
                    <div>&apos;&apos;'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-blue-400 font-medium&apos;>Setup:&apos;</span>{&apos; &apos;}
                      {service.setupTime}&apos;&apos;
                    </div>
                  </div>
                </div>
&apos;&apos;'{/* CTA */}&apos;&apos;'&apos;&apos;'
                <div className=&apos;text-center&apos;>&apos;'
                  <Link&apos;&apos;'
                    to={service.link}&apos;&apos;'';
                    className=&apos;inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm &apos;>
                    Learn More&apos;&apos;'&apos;&apos;
                    <svg&apos;&apos;'';
                      className=&apos;ml-2 h-4 w-4&apos;&apos;'';
                      fill=&apos;none&apos;&apos;'';
                      stroke=&apos;currentColor&apos;&apos;'';
                      viewBox=&apos;0 0 24 24&apos;&apos;'>&apos;&apos;'&apos;&apos;
                      <path&apos;&apos;'&apos;
                        strokeLinecap=&apos;round&apos;&apos;'';
                        strokeLinejoin=&apos;round&apos;&apos;'';
                        strokeWidth={2}&apos;&apos;'';
                        d=&apos;M9 5l7 7-7 7&apos;&apos;'/>&apos;&apos;
=======
'''{/* ROI and Setup */}'''''
                <div className='bg-white/5 rounded-lg p-3 mb-4'>''''
                  <div className='text-xs text-gray-300'>''''''
                    <div className='mb-1'>''''''
                      <span className='text-green-400 font-medium'>ROI: </span>{' '}
                      {service.roi}
                    </div>''''
                    <div>''''''
                      <span className='text-blue-400 font-medium'>Setup:</span>{' '}
                      {service.setupTime}
                    </div>
                  </div>
                </div>
'''{/* CTA */}'''''
                <div className='text-center'>
                  <Link''''
                    to={service.link}'''';
                    className='inline-flex items-center text-blue-400 hover: text-blue-300 transition-colors duration-300 text-sm '>
                    Learn More''''
                    <svg'''';
                      className='ml-2 h-4 w-4'''';'
                      fill='none'''';'
                      stroke='currentColor'''';'
                      viewBox='0 0 24 24'''>''''
                      <path''''
                        strokeLinecap='round'''';'
                        strokeLinejoin='round'''';'
                        strokeWidth={2}'''';
                        d='M9 5l7 7-7 7'''/>
>>>>>>> main
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* No Results Message */}
<<<<<<< HEAD
          {filteredServices.length === 0 && (&apos;&apos;'&apos;}&apos;
            <motion.div&apos;&apos;'';
              className=&apos;text-center py-12&apos;&apos;';
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
              <p className=&apos;text-gray-400 text-lg&apos;>
                No services found matching your criteria.&apos;</p>
              <button;
                onClick={() => {}
';
                  setSelectedCategory(&apos;all&apos;)';
                  setSearchTerm(&apos;&apos;)';&apos;}}&apos;&apos;'';
                className=&apos;mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 &apos;>
                View All Services&apos;&apos;
=======
          {filteredServices.length === 0 && (''''
            <motion.div'''';
              className='text-center py-12''';
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}'''>'''''
              <p className='text-gray-400 text-lg'>
                No services found matching your criteria.</p>
              <button;
                onClick={() => {}
';'
                  setSelectedCategory('all')';'
                  setSearchTerm('')';'}}'''';
                className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors duration-300 '>
                View All Services
>>>>>>> main
              </button>
            </motion.div>
          )}
        </div>
      </section>
<<<<<<< HEAD
&apos;&apos;'{/* Enhanced CTA Section */}&apos;&apos;'&apos;&apos;'
      <section className=&apos;py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;max-w-4xl mx-auto text-center&apos;>'&apos;&apos;''
          <motion.h2&apos;&apos;'&apos;
            className=&apos;text-3xl md:text-4xl font-bold text-white mb-6&apos;&apos;';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?&apos;&apos;
          </motion.h2>&apos;&apos;'&apos;&apos;
          <motion.p&apos;&apos;'';
            className=&apos;text-xl text-gray-300 mb-8&apos;&apos;';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >';
            Let&apos;s discuss how our innovative services can help drive your;
            success and competitive advantage&apos;&apos;
          </motion.p>
&apos;&apos;'&apos;&apos;
          <motion.div&apos;&apos;'';
            className=&apos;flex flex-col sm:flex-row gap-4 justify-center mb-8&apos;&apos;';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >&apos;&apos;'&apos;&apos;
            <Link&apos;&apos;'&apos;
              to=&apos;/contact&apos;&apos;'';
              className=&apos;inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 &apos;>
              Contact Us Today&apos;&apos;
            </Link>&apos;&apos;'&apos;&apos;
            <a&apos;&apos;'&apos;
              href=&apos;tel:+13024640950&apos;&apos;'';
              className=&apos;inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 &apos;>
              Call: +1 302 464 0950&apos;&apos;
            </a>
          </motion.div>
&apos;&apos;'&apos;&apos;
          <motion.div&apos;&apos;'';
            className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto&apos;&apos;';
            initial={{ opacit,y: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
            <h3 className=&apos;text-lg font-semibold text-white mb-4&apos;>
              Why Choose Zion Tech Group?&apos;&apos;'&apos;&apos;
            </h3>&apos;&apos;'&apos;&apos;'
            <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center&apos;>'&apos;&apos;'&apos;&apos;
                <span className=&apos;text-green-400 mr-2&apos;>✓&apos;</span>
                Expert AI & Technology Specialists&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center&apos;>'&apos;&apos;'&apos;&apos;
                <span className=&apos;text-green-400 mr-2&apos;>✓&apos;</span>
                Proven ROI & Performance Metrics&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center&apos;>'&apos;&apos;'&apos;&apos;
                <span className=&apos;text-green-400 mr-2&apos;>✓&apos;</span>
                24/7 Support & Maintenance&apos;&apos;'&apos;&apos;
              </div>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center&apos;>'&apos;&apos;'&apos;&apos;
                <span className=&apos;text-green-400 mr-2&apos;>✓&apos;</span>
=======
'''{/* Enhanced CTA Section */}'''''
      <section className='py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50'>''''
        <div className='max-w-4xl mx-auto text-center'>''''
          <motion.h2''''
            className='text-3xl md: text-4xl font-bold text-white mb-6''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>''''
          <motion.p'''';
            className='text-xl text-gray-300 mb-8''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >';'
            Let&apos;s discuss how our innovative services can help drive your;'
            success and competitive advantage
          </motion.p>
''''
          <motion.div'''';
            className='flex flex-col sm: flex-row gap-4 justify-center mb-8''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >''''
            <Link''''
              to='/contact'''';'
              className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-cyan-700 transition-all duration-300 '>
              Contact Us Today
            </Link>''''
            <a''''
              href='tel:+13024640950'''';'
              className='inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover: bg-gray-800 transition-all duration-300 '>
              Call: +1 302 464 0950
            </a>
          </motion.div>
''''
          <motion.div'''';
            className='bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto''';
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}'''>'''''
            <h3 className='text-lg font-semibold text-white mb-4'>
              Why Choose Zion Tech Group?''''
            </h3>''''
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>''''
              <div className='flex items-center'>''''
                <span className='text-green-400 mr-2'>✓</span>
                Expert AI & Technology Specialists''''
              </div>''''
              <div className='flex items-center'>''''
                <span className='text-green-400 mr-2'>✓</span>
                Proven ROI & Performance Metrics''''
              </div>''''
              <div className='flex items-center'>''''
                <span className='text-green-400 mr-2'>✓</span>
                24/7 Support & Maintenance''''
              </div>''''
              <div className='flex items-center'>''''
                <span className='text-green-400 mr-2'>✓</span>
>>>>>>> main
                Custom Solutions & Integration
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD
&apos;&apos;'&apos;&apos;
          <motion.div&apos;&apos;'&apos;
            className=&apos;mt-8 text-sm text-gray-400&apos;&apos;';
            initial={{ opacit,y: 0 }}
=======
''''
          <motion.div''''
            className='mt-8 text-sm text-gray-400''';
            initial={{ opacity: 0 }}
>>>>>>> main
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >&apos;&apos;
            <p>Email: kleber@ziontechgroup.com</p>
<<<<<<< HEAD
            <p>Addres,s: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>';
              Website:{&apos; &apos;}&apos;&apos;'&apos;&apos;
              <a&apos;&apos;'&apos;
                href=&apos;https://ziontechgroup.com&apos;&apos;'';
                className=&apos;text-blue-400 hover:text-blue-300 &apos;>
                http,s://ziontechgroup.com&apos;&apos;
=======
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>';'
              Website: {' '}''''
              <a''''
                href='https://ziontechgroup.com'''';'
                className='text-blue-400 hover: text-blue-300 '>
                https://ziontechgroup.com
>>>>>>> main
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>)}
export default EnhancedServicesShowcase;
export { EnhancedServicesShowcase }
;
export { EnhancedServicesShowcase }
;
export { EnhancedServicesShowcase }
;
export { EnhancedServicesShowcase }

export { EnhancedServicesShowcase }
=======
import React, { useState }  from 'react;'
import { Link }  from 'react-router-dom;'
import { motion }  from 'framer-motion;'
"
>>>>>>> main
>>>>>>> main
>>>>>>> main

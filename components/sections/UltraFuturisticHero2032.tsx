import React from 'react';
import { motion  } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;
  Microscope, Star, ArrowRight, Play, CheckCircle;
  Phone, Mail, MapPin
 } from 'lucide-react';
const contactInfo = null;
          space technology, and emerging tech solutions. Transform your business with 
          technologies that were once science fiction.

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
        >
          <Link
            href='/services'
            className='group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25'
          >
            <span>Explore All Services</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>

          <Link
            href={`tel:${contactInfo.mobile}`}
            className='group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300'
          >
            <Phone className='w-5 h-5' />            <span>Call {contactInfo.mobile}</span>        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href={`tel:${contactInfo.mobile}`}
            className="group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call {contactInfo.mobile}</span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'        >          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className='text-center group'
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:shadow-lg`}
              >
                <stat.icon className='w-8 h-8 text-white' />
              </div>
              <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>            </motion.div>            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-8'>
            Featured Revolutionary Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>            {featuredServices.map((service, index) => (        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Featured Revolutionary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className='group'
              >
                <Link
                  href={service.href}
                  className='block relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50'
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300'>                    {service.name}
                  </h3>

                  <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                    {service.description}
                  </p>

                  <div className='flex items-center justify-between'>
                    <div className='text-2xl font-bold text-cyan-400'>
                      {service.price}
                    </div>
                    <div className='text-purple-400 group-hover:text-cyan-400 transition-colors'>
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>

                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                </Link>                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className='bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto'
        >
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            Ready to Transform Your Business?
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='flex items-center space-x-3 text-gray-300'>
              <Phone className='w-5 h-5 text-cyan-400' />
              <a
                href={`tel:${contactInfo.mobile}`}
                className='hover:text-cyan-400 transition-colors'
              >
                {contactInfo.mobile}
              </a>
            </div>
            <div className='flex items-center space-x-3 text-gray-300'>
              <Mail className='w-5 h-5 text-purple-400' />
              <a
                href={`mailto:${contactInfo.email}`}
                className='hover:text-purple-400 transition-colors'
              >
                {contactInfo.email}
              </a>
            </div>
            <div className='flex items-center space-x-3 text-gray-300'>
              <MapPin className='w-5 h-5 text-green-400' />
              <span>{contactInfo.address}</span>
            </div>
          </div>

          <div className='text-center'>
            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25'
            >
              <span>Get Started Today</span>
              <ArrowRight className='w-5 h-5' />            </Link>        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Ready to Transform Your Business?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className='fixed bottom-8 right-8 z-50'
      >
        <Link
          href={`tel:${contactInfo.mobile}`}
          className='group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40'
        >
          <Phone className='w-7 h-7 text-white group-hover:rotate-12 transition-transform' />
        </Link>
      </motion.div>
    </section>
  );      >
        <Link
          href={`tel:${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover: shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40"
        >
          <Phone className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}

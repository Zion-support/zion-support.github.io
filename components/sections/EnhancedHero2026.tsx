import React from 'react';

import { motion  } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Rocket, CheckCircle  } from 'lucide-react';
import Button from '../ui/Button';

interface EnhancedHero2026Props {
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string
  },

  serviceStats: {
    totalServices: number;
    aiServices: number;
    emergingTech: number;
    itSolutions: number;
    microSaas: number;

    revolutionaryServices: number
  }
}

export default function EnhancedHero2026({ contactInfo, serviceStats }: EnhancedHero2026Props) {
  const containerVariants = null;

              { label: 'Revolutionary', value: serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
              <motion.div
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
                <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                  {stat.value.toLocaleString()}+
                </div>
                <div className='text-xs text-gray-400 leading-tight'>                  {stat.label}              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                href='/services'
                variant='primary'
                size='xl'
                className='text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/30 border-0 group'
              >              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 transition-transform" />
                  Explore All Services
                </span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                href="/contact" 
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl"
              >
                <span className='flex items-center'>
                  <Rocket className='mr-3 w-7 h-7 group-hover:rotate-12 transition-transform' />
                  Explore All Services
                </span>
                <ArrowRight className='ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform' />
              </Button>

              <Button
                href='/contact'
                variant='secondary'
                size='xl'
                className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'
              >
                <span className='flex items-center'>
                  <Shield className='mr-3 w-7 h-7' />                  Get Expert Consultation                <span className="flex items-center">
                  <Shield className="mr-3 w-7 h-7" />
                  Get Expert Consultation
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>5000+ Happy Customers</span>
              </div>                <span>5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>24/7 Expert Support</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'
          >
            <div className='text-center mb-4'>
              <h3 className='text-lg font-semibold text-white mb-2'>
                Ready to Get Started?
              </h3>
              <p className='text-gray-300 text-sm'>
                Contact our team of experts today
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm'>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Phone</div>
                <div className='text-white'>{contactInfo.mobile}</div>
              </div>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Email</div>
                <div className='text-white'>{contactInfo.email}</div>
              </div>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Website</div>
                <div className='text-white'>{contactInfo.website}</div>              </div>            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-gray-300 text-sm">Contact our team of experts today</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Phone</div>
                <div className="text-white">{contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Email</div>
                <div className="text-white">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Website</div>
                <div className="text-white">{contactInfo.website}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
);  )
}

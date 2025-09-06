
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap;

  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2

 } from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028',
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
const contactInfo = null;

                with clear value for every dollar.
              </p>
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-blue-300">Transparent Pricing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'
            >
              <Award className='w-16 h-16 text-pink-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Premium Quality
              </h3>
              <p className='text-pink-300 mb-6'>
                Enterprise-grade technology with premium support and features
                that justify every penny of investment.
              </p>
              <div className='text-3xl font-bold text-pink-400'>5x</div>
              <div className='text-pink-300'>ROI Guarantee</div>            </motion.div>            >
              <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-pink-300 mb-6">
                Enterprise-grade technology with premium support and features 
                that justify every penny of investment.
              </p>
              <div className="text-3xl font-bold text-pink-400">5x</div>
              <div className="text-pink-300">ROI Guarantee</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Get Started
              </span>
              ?
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Join hundreds of companies already leveraging our futuristic
              services to gain competitive advantages and drive innovation.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'
              >
                <span>Start Free Trial</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'
              >
                <span>Schedule Demo</span>
                <Clock className='w-5 h-5' />
              </Link>
            </div>

            <div className='flex items-center justify-center space-x-8 text-purple-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>No Credit Card Required</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
);
}

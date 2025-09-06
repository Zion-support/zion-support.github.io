import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap;
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2
 } from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028',
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
const contactInfo = null;
                with some sectors growing at 300-800% annually.
              </p>
              <div className="text-3xl font-bold text-green-400">500%+</div>
              <div className="text-purple-300">Average Annual Growth</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl"
            >
              <DollarSign className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Market Size</h3>
              <p className="text-blue-300 mb-6">
                Combined market size of our service categories exceeds 
                $500 billion with rapid expansion expected.
              </p>
              <div className="text-3xl font-bold text-blue-400">$500B+</div>
              <div className="text-blue-300">Total Addressable Market</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl"
            >
              <Shield className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Edge</h3>
              <p className="text-pink-300 mb-6">
                First-to-market solutions with proprietary technology 
                and AI algorithms that competitors cannot replicate.
              </p>
              <div className="text-3xl font-bold text-pink-400">90%</div>
              <div className="text-pink-300">Market Share in Niche</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Studies</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  )
};
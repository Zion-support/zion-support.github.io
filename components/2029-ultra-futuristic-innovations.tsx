import React from 'react',
import Head from 'next/head';
import { motion  } from 'framer-motion';
import { Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, Star, TrendingUp, Eye, Timer  } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029',
import UltraFuturistic2029ServiceShowcase from '../components/sections/UltraFuturistic2029ServiceShowcase';
import { cuttingEdge2029Services  } from '../data/2029-cutting-edge-innovations';
import { ultimateMicroSaasServices } from '../data/ultimate-micro-saas-services';
export default function UltraFuturistic2029InnovationsPage() {
  const contactInfo = null;
                { label: 'Average Rating', value: (all2029Services.reduce((sum, s) => sum + s.rating, 0) / all2029Services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience 2029?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary 2029 innovations. 
                Contact us today to discover how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <UltraFuturisticFooter2029 />
    </>
  )
}

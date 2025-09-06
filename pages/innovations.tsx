import React from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Cpu, Globe, Eye;
  ChevronRight, Star, TrendingUp, Zap, Shield;
  ArrowRight, Search, Filter, Grid, List;
  Phone, Mail, MapPin, ExternalLink, Sparkles
 } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029V2 from '../components/layout/UltraFuturisticNavigation2029V2',
import UltraFuturisticFooter2029V2 from '../components/layout/UltraFuturisticFooter2029V2';
import ComprehensiveServicesShowcase2029 from '../components/sections/ComprehensiveServicesShowcase2029';
const contactInfo = null;
                  stats: '2029+ Future-ready'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-cyan-400 font-bold text-lg">
                    {item.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Lead the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Partner with Zion Tech Group to access the most advanced innovations of 2029. 
                  Transform your business and lead your industry into the future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Innovation Partnership Inquiry`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start Innovation Partnership
                  </a>
                  
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <UltraFuturisticFooter2029V2 />
      </div>
    </UltraFuturisticBackground2029>
  )
};
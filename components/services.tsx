import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Search, Filter, Star, Users, TrendingUp;
  DollarSign, Clock, CheckCircle, ArrowRight;
  Brain, Rocket, Dna, Globe, Shield, Wifi;
  Package, Bot, Car, Building2, Monitor, Cpu;
  Zap, Atom, Database, Cloud, Lock, Code
 } from 'lucide-react';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground',
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices  } from '../data/additional-real-services';
import { newRealServices  } from '../data/new-real-services';
import { industryRealServices  } from '../data/industry-real-services';
import { professionalServices  } from '../data/professional-services';
import { nextGenerationAIServices  } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices  } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services  } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices  } from '../data/market-validated-services';
import { emergingTechnologyServices  } from '../data/emerging-technology-services';
import { comprehensiveITSolutions  } from '../data/comprehensive-it-solutions';
import { curatedMarketServices  } from '../data/curated-market-services';
import { realMarketServices  } from '../data/real-market-services';
import { new2025Services  } from '../data/new-2025-services';
import { newRealInnovations  } from '../data/new-real-innovations';
import { serviceExpansions2025  } from '../data/service-expansions-2025';
import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Grid, List;
  Brain, Atom, Shield, Target, Rocket;
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap;
  Users, DollarSign, Settings, TrendingUp, BarChart3, ChevronDown
 } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
// Import all the new 2025 service data
import { realMicroSaasServices2025  } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025  } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025  } from '../data/2025-innovative-it-services';
import { emergingTechServices2025  } from '../data/2025-emerging-tech-services';
import { additionalRealServices2025  } from '../data/2025-additional-real-services';
import { innovativeAIServices2025 as newInnovativeAIServices  } from '../data/2025-innovative-ai-it-services';
// Import new innovative services
import { innovativeFinancialServices2025  } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025  } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025  } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025  } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025  } from '../data/2025-innovative-logistics-services';
// Import existing services for comprehensive coverage
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices  } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices  } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
const allServices = null;
                    setSelectedCategory('All')
                  }}
                  className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

                      {/* Enhanced Price */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">
                          <div className="text-3xl font-bold text-white mb-1">${service.price.monthly}</div>
                          <div className="text-sm text-gray-300">/month</div>
                          <div className="text-xs text-cyan-400 font-medium mt-1">{service.price.trialDays}-day free trial</div>
                        </div>
                      </div>

                      {/* Enhanced Features */}
                      <div className="mb-6 relative z-10">
                        <div className="text-sm text-cyan-400 font-medium mb-3">✨ Key Features</div>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-center group-hover:text-white transition-colors duration-300">
                              <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6 text-center relative z-10">
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                          <div className="text-cyan-400 font-bold text-lg">{service.rating}/5</div>
                          <div className="text-gray-300 text-xs">Rating</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
                          <div className="text-purple-400 font-bold text-lg">{service.customers}+</div>
                          <div className="text-gray-300 text-xs">Customers</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-300">
                          <div className="text-green-400 font-bold text-lg">{service.price.setupTime}</div>
                          <div className="text-gray-300 text-xs">Setup</div>
                        </div>
                      </div>

                      {/* Enhanced CTA */}
                      <div className="relative z-10">
                        <a
                          href={service.link}
                          className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-2xl text-center font-semibold text-base hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/40"
                        >
                          Explore Service
                          <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Pricing & Stats */}
                        <div className="lg:w-48 space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">${service.price.monthly}</div>
                            <div className="text-sm text-gray-400">/month</div>
                            <div className="text-xs text-green-400">{service.price.trialDays}-day trial</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-cyan-400 font-semibold">{service.rating}/5</div>
                              <div className="text-gray-400">Rating</div>
                            </div>
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-purple-400 font-semibold">{service.customers}+</div>
                              <div className="text-gray-400">Customers</div>
                            </div>
                          </div>
                          
                          <a
                            href={service.link}
                            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 inline ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-24"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16 shadow-2xl shadow-cyan-500/10">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                      Transform Your Business Today
                    </div>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Get Started?
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Choose from our comprehensive suite of revolutionary services and start transforming your business today with cutting-edge AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      🚀 Get Started Today
                    </motion.a>
                    <motion.a
                      href="/pricing"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover: border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>
                  
                  <div className="mt-10 text-sm text-gray-400">
                    <p>Need help choosing? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our experts</a> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  ),
}
;
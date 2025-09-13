


import {Brain, Atom, Shield, Target, Rocket;
  ArrowRight, Check, Star, TrendingUp, Users;
import React from 'react',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
import {;
  Brain, Atom, Shield, Target, Rocket,;
  ArrowRight, Check, Star, TrendingUp, Users,;
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin;
} from 'lucide-react',;
// Import our new 2025 V2 innovative services;
                        <div className="flex items-center text-sm text-green-400">;
                          <Star className="w-4 h-4 mr-2" />;
                          {service.growthRate}
                        </div>;
                      </div>;
                      <div className="mb-6">;
                        <div className="text-2xl font-bold text-white mb-2">;
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>;
                        <div className="text-sm text-gray-400">;
                          {(service as any).pricing?.professional ?;
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :;
                            `${service.price} ${service.period}`;
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
          <motion.div 
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-cyan-400">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {service.marketSize}
                        </div>
                        <div className="flex items-center text-sm text-green-400">
                          <Star className="w-4 h-4 mr-2" />
                          {service.growthRate}
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          {(service as any).pricing?.professional ? 
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :
                            `${service.price} ${service.period}`
                          }
                        </div>;
                      </div>;
                      <a;
                        href={`/services/${service.slug}`}

                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200";

                      >;
                        Learn More <ArrowRight className="w - 4 h - 4 ml - 2" />;
                      </a>;

                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </motion.div>

                  ))}
                    </motion.div>))}
                </div>;
              </motion.div>))}
          </motion.div>;
        </div>;
      </section>;
      {/* Market Statistics */}


            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
      <section className="py - 20 px - 4 bg - black / 20">;
        <div className="max - w-7xl mx - auto">;
          <motion.h2;
            className="text - 4xl md:text - 5xl font - bold text - white text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

          >
            Market Impact & Growth
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}


            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text - 4xl md:text - 5xl font - bold text - white mb - 6";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text - xl text - gray - 300 mb - 8";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}


            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex - col sm:flex - row gap - 4 justify - center";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}



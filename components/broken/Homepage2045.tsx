import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />












    <Layout>

      className='text-center'// Loading fallback component





            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future of Technology
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              >
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.
              </motion.p>
            </motion.div>






            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              <Link
              </Link>
              <Link
              </Link>








              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Featured Services Section */}
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div




              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology.
              </p>
            </motion.div>

            {/* Service Categories Grid */}



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI & Consciousness",
                  description: "Revolutionary AI platforms with emotional intelligence and autonomous operations",
                  color: "from-cyan-400 to-blue-500",
                  href: "/ai-services"
                },
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Technology",
                  description: "Breakthrough quantum computing solutions for next-generation applications",
                  color: "from-purple-400 to-pink-500",
                  href: "/quantum-services"
                },
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Space Technology",
                  description: "Advanced space exploration and resource management platforms",
                  color: "from-emerald-400 to-teal-500",
                  href: "/space-technology"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Solutions",
                  description: "Advanced infrastructure and security solutions for modern enterprises",
                  color: "from-orange-400 to-red-500",
                  href: "/enterprise-solutions"
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Micro SAAS",
                  description: "Innovative business solutions that drive growth and efficiency",
                  color: "from-indigo-400 to-purple-500",
                  href: "/micro-saas"
                },
                {
                  icon: <Sparkles className="w-12 h-12" />,
                  title: "Emerging Tech",
                  description: "Cutting-edge technologies that define the future of innovation",
                  color: "from-yellow-400 to-orange-500",
                  href: "/emerging-tech"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Innovations Section */}






              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our newest revolutionary services that are setting new standards in technology innovation.
              </p>
            </motion.div>


                  <Link href={service.href}>;
                        <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />                      </div>                      <h3 className="text - 2xl font - bold text - white mb - 4">{service.title}</h3>;
                        <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
                  </Link>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {revolutionary2043AdvancedServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.link}>
                    <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold">
                          {service.price}{service.period}
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="mr-2 text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>


            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>



            </motion.div>
          </div>
        </section>

                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;



}<motion && motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion && motion.div> {;
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion && motion.div>) ) ;
}<motion && motion.div > <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > View All Services <ArrowRight className="ml-2 w-5 h-5" /> </a> </motion && motion.div> </div> </section> <motion&& motion.div initial= {


}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion && motion.div> </div> </section> </div> </Layout>) ;
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion && motion.div> </div> </section> </div> </Layout>) ;

};export default Homepage2045;export default Homepage2045;



              </Link>

        {/* Contact CTA Section */}
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div




              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can drive your business into the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <a
                  href="tel:+1 302 464 0950"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage2045;
export default Homepage2045;
                  </Link>;
              <Link;
                <ArrowRight className='ml - 2 w - 5 h - 5' />              </Link>            >;
                <ArrowRight className='ml - 2 w - 5 h - 5' />              </Link>            >;
              <Link;
                <ArrowRight className="ml - 2 w - 5 h - 5" />;
              </Link>;
                <Link;
                </Link>;
                <Link;
                </Link>;
    </Layout>);





}<motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion.div> {
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion.div>) )
}<motion.div > <Link href="/services" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105" > View All Services <ArrowRight className="ml - 2 w - 5 h - 5" /> </a> </motion.div> </div> </section> <motion.div initial= {


}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;

export default Homepage2045;


}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 

};export default Homepage2045;

export default Homepage2045;



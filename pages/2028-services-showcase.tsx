import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles,
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    description: 'Intelligent urban solutions',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, 4)
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 4)
  },
  {
    title: '🤖 AI & Machine Learning',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 4)
  },
  {
    title: '⛓️ Blockchain & Web3',
    description: 'Decentralized solutions',
    icon: Globe,
    color: 'from-orange-600 to-red-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Blockchain')).slice(0, 4)
  },
  {
    title: '🚗 Autonomous & Mobility',
    description: 'Self-driving and mobility solutions',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    services: futuristic2028Services.filter(s => s.category.includes('Autonomous')).slice(0, 4)
  }
];

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Futuristic Services Showcase - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations. Transform your business with next-generation technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2028 technology, AI services, quantum computing, autonomous systems, futuristic innovations, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2028 Futuristic Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2028-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2028-services-showcase&quot; />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>
        </div>

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;space-y-8&quot;
          >
            <div className=&quot;inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm&quot;>
              <Sparkles className=&quot;w-4 h-4&quot; />
              <span>2028 Future Technology</span>
            </div>

            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent&quot;>
                Futuristic
              </span>
              <br />
              <span className=&quot;text-white&quot;>Services</span>
            </h1>

            <p className=&quot;text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed&quot;>
              Experience the future of technology with our cutting-edge 2028 services. 
              From AI consciousness to quantum internet, we're building tomorrow's solutions today.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Get Started</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <Link
                href=&quot;/revolutionary-2028-pricing&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>View Pricing</span>
                <DollarSign className=&quot;w-5 h-5&quot; />
              </Link>
            </div>

            {/* Stats */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 pt-16&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400&quot;>50+</div>
                <div className=&quot;text-purple-300&quot;>Innovative Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-blue-400&quot;>99.9%</div>
                <div className=&quot;text-blue-300&quot;>Accuracy Rate</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-pink-400&quot;>500+</div>
                <div className=&quot;text-pink-300&quot;>Happy Clients</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400&quot;>24/7</div>
                <div className=&quot;text-cyan-300&quot;>Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className=&quot;py-20 bg-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Explore Our <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Service Categories</span>
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Discover our comprehensive range of futuristic services designed to transform your business 
              and propel you into the future of technology.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group relative&quot;
              >
                <div className=&quot;relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105&quot;>
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                  
                  <div className=&quot;relative z-10&quot;>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>

                    <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{category.title}</h3>
                    <p className=&quot;text-purple-300 mb-6&quot;>{category.description}</p>

                    <div className=&quot;space-y-3 mb-6&quot;>
                      {category.services.slice(0, 3).map((service) => (
                        <div key={service.id} className=&quot;flex items-center space-x-3&quot;>
                          <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-purple-200 text-sm&quot;>{service.name}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className=&quot;inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group&quot;
                    >
                      <span>Explore More</span>
                      <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform duration-300&quot; />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className=&quot;py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Featured <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Services</span>
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Our most innovative and in-demand services that are revolutionizing industries worldwide.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {futuristic2028Services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group relative&quot;
              >
                <div className=&quot;relative p-8 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105&quot;>
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                  
                  <div className=&quot;relative z-10&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-2xl font-bold text-purple-400&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-purple-300&quot;>{service.period}</div>
                      </div>
                    </div>

                    <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{service.name}</h3>
                    <p className=&quot;text-purple-300 mb-4&quot;>{service.description}</p>

                    <div className=&quot;mb-6&quot;>
                      <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.rating}</span>
                        <span className=&quot;text-purple-300&quot;>({service.reviews} reviews)</span>
                      </div>
                      <div className=&quot;text-sm text-purple-300&quot;>
                        <span className=&quot;font-medium&quot;>Market Size:</span> {service.marketSize}
                      </div>
                      <div className=&quot;text-sm text-purple-300&quot;>
                        <span className=&quot;font-medium&quot;>Growth Rate:</span> {service.growthRate}
                      </div>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Link
                        href={service.link}
                        className=&quot;px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
                      >
                        Learn More
                      </Link>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-sm text-purple-300&quot;>Setup Time</div>
                        <div className=&quot;text-white font-medium&quot;>{service.setupTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className=&quot;py-20 bg-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Market <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Insights</span>
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Understand the market dynamics and growth potential of our futuristic services.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl&quot;
            >
              <TrendingUp className=&quot;w-16 h-16 text-green-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Market Growth</h3>
              <p className=&quot;text-purple-300 mb-6&quot;>
                Our services target markets with exponential growth potential, 
                with some sectors growing at 300-800% annually.
              </p>
              <div className=&quot;text-3xl font-bold text-green-400&quot;>500%+</div>
              <div className=&quot;text-purple-300&quot;>Average Annual Growth</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl&quot;
            >
              <DollarSign className=&quot;w-16 h-16 text-blue-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Market Size</h3>
              <p className=&quot;text-blue-300 mb-6&quot;>
                Combined market size of our service categories exceeds 
                $500 billion with rapid expansion expected.
              </p>
              <div className=&quot;text-3xl font-bold text-blue-400&quot;>$500B+</div>
              <div className=&quot;text-blue-300&quot;>Total Addressable Market</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl&quot;
            >
              <Shield className=&quot;w-16 h-16 text-pink-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Competitive Edge</h3>
              <p className=&quot;text-pink-300 mb-6&quot;>
                First-to-market solutions with proprietary technology 
                and AI algorithms that competitors cannot replicate.
              </p>
              <div className=&quot;text-3xl font-bold text-pink-400&quot;>90%</div>
              <div className=&quot;text-pink-300&quot;>Market Share in Niche</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Transform</span> Your Business?
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Join hundreds of forward-thinking companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Start Your Journey</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <Link
                href=&quot;/case-studies&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>View Case Studies</span>
                <TrendingUp className=&quot;w-5 h-5&quot; />
              </Link>
            </div>

            <div className=&quot;flex items-center justify-center space-x-8 text-purple-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>30-Day Free Trial</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>24/7 Expert Support</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
}
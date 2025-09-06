import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3,
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite,
  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight
} from 'lucide-react',
import Link from 'next/link',
// Import our new innovative services,
import { innovative2046AIServices } from '../data/innovative-2046-ai-services',
import { innovative2046ITServices } from '../data/innovative-2046-it-services',
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services',
// Enhanced loading component with quantum effects,
const QuantumLoadingFallback = () => (
  <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden&quot;>
    {/* Quantum particle effects */}
    <div className=&quot;absolute inset-0&quot;>
      {[...Array(100)].map((_, i) => (
        <motion.div,
key={i}
          className=&quot;absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full&quot;
          animate={{
            x: [0, Math.random() * 1200],
            y: [0, Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]}}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'}}        />
      ))}
    </div>
    
    {_/* Quantum loading animation */}
    <motion.div,
initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className=&quot;text-center relative z-10&quot;    >
      <div className=&quot;relative&quot;>
        <motion.div,
animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            boxShadow: [
              &quot;0 0 20px rgba(6, 182, 212, 0.5)&quot;,
              &quot;0 0 40px rgba(168, 85, 247, 0.8)&quot;,
              &quot;0 0 20px rgba(6, 182, 212, 0.5)&quot
            ]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: &quot;linear&quot },
            scale: { duration: 2, repeat: Infinity, ease: &quot;easeInOut&quot },
            boxShadow: { duration: 2, repeat: Infinity, ease: &quot;easeInOut&quot }          }}
          className=&quot;w-32 h-32 mx-auto mb-8&quot;
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse&quot;></div>
          <div className=&quot;absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center&quot;>
            <Brain className=&quot;w-16 h-16 text-white&quot; />
          </div>
        </motion.div>
      </div>
      <motion.h1,
className=&quot;text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent&quot;
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}      >
        Zion Tech Group 2046
      </motion.h1>
      <p className=&quot;text-xl text-gray-300 mb-3&quot;>Quantum AI • Neural Interfaces • Space Technology</p>
      <p className=&quot;text-lg text-gray-400&quot;>Preparing your revolutionary digital transformation journey</p>
      
      {/* Quantum progress bar */}
      <div className=&quot;mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2&quot;>
        <motion.div,
className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full&quot;
          initial={{ width: 0 }}
          animate={{ width: &quot;100%&quot }}
          transition={{ duration: 3, ease: &quot;easeInOut&quot }}        />
      </div>
    </motion.div>
  </div>
),

const Homepage2046: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeSection, setActiveSection] = useState('hero'),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchQuery, setSearchQuery] = useState(''),

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false),
      setIsVisible(true)
    }, 2000),
    return () => clearTimeout(timer)
  }, []),

  // Intersection Observer for better performance,
useEffect_(() => {if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(_(entries: unknown[]) => {
          entries.forEach(_(entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.3 }
      ),

      const sections = document.querySelectorAll('section[id]'),
      sections.forEach((section) => observer.observe(section)),
      return () => observer.disconnect()
    }
  }, []),

  if (isLoading) {
    return <QuantumLoadingFallback />
  }
  const allServices = [
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices
  ],

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()),
    return matchesCategory && matchesSearch
  }),

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))],

  return (
    <Layout>
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden&quot;>
        {/* Enhanced animated background */}
        <div className=&quot;absolute inset-0&quot;>
          {/* Quantum grid effect */}
          <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)1px,transparent1px),linear-gradient(90deg,rgba(6,182,212,0.1)1px,transparent1px)] bg-[size:50px50px] animate-pulse&quot;></div>          
          {_/* Floating orbs */}
          {_[...Array(20)].map(_(_, i) => (
            <motion.div,
key={i}
              className=&quot;absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30&quot;
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: &quot;easeInOut&quot
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'}}            />
          ))}
        </div>;
;
        {/* Hero Section */}
        <section id=&quot;hero&quot; className=&quot;relative z-10 min-h-screen flex items-center justify-center px-4&quot;>
          <div className=&quot;text-center max-w-6xl mx-auto&quot;>            <motion.div,
initial={_{ opacity: 0, y: 50}}
              animate={_{ opacity: 1, y: 0}}
              transition={_{ duration: 1}}
            >
              <motion.h1,
className=&quot;text-6xl md:text-8xl font-bold text-white mb-8&quot;
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p,
className=&quot;text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}              >
                Revolutionary <span className=&quot;text-cyan-400 font-semibold&quot;>Quantum AI</span>, 
                <span className=&quot;text-purple-400 font-semibold&quot;> Neural Interfaces</span>, and 
                <span className=&quot;text-cyan-400 font-semibold&quot;> Space Technology</span> Solutions
              </motion.p>
              
              <motion.div,
className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-12&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}              >
                <Link href=&quot;/services&quot;>
                  <motion.button,
whileHover={{ scale: 1.05, boxShadow: &quot;0 0 30px rgba(6, 182, 212, 0.5)&quot }}
                    whileTap={{ scale: 0.95 }}
                    className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;                  >
                    Explore Services <ArrowRight className=&quot;w-5 h-5&quot; />
                  </motion.button>
                </a>
                
                <Link href=&quot;/contact&quot;>
                  <motion.button,
whileHover={{ scale: 1.05, boxShadow: &quot;0 0 30px rgba(168, 85, 247, 0.5)&quot }}
                    whileTap={{ scale: 0.95 }}
                    className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300&quot;                  >
                    Get Started <Rocket className=&quot;w-5 h-5&quot; />
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {_/* Contact Information */}
            <motion.div,
className=&quot;bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}            >
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-center&quot;>
                <div className=&quot;flex flex-col items-center&quot;>
                  <Phone className=&quot;w-6 h-6 text-cyan-400 mb-2&quot; />
                  <p className=&quot;text-sm text-gray-300&quot;>Phone</p>
                  <p className=&quot;text-white font-semibold&quot;>+1 302 464 0950</p>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <Mail className=&quot;w-6 h-6 text-purple-400 mb-2&quot; />
                  <p className=&quot;text-sm text-gray-300&quot;>Email</p>
                  <p className=&quot;text-white font-semibold&quot;>kleber@ziontechgroup.com</p>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <MapPin className=&quot;w-6 h-6 text-cyan-400 mb-2&quot; />
                  <p className=&quot;text-sm text-gray-300&quot;>Address</p>
                  <p className=&quot;text-white font-semibold text-sm&quot;>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section id=&quot;services&quot; className=&quot;relative z-10 py-20 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div,
initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Revolutionary Services
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
              </p>
            </motion.div>

            {_/* Search and Filter */}
            <motion.div,
initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;mb-12&quot;            >
              <div className=&quot;flex flex-col md:flex-row gap-4 justify-center items-center&quot;>
                <div className=&quot;relative flex-1 max-w-md&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <input,
type=&quot;text&quot;
                    placeholder=&quot;Search services...&quot;
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg&quot;
                  />
                </div>
                
                <div className=&quot;flex gap-2&quot;>
                  {categories.map((category) => (
                    <button                      key={category}
                      onClick={_() => setSelectedCategory(category)}
                      className={_`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'}`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {_/* Services Grid */}
            <motion.div,
initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;            >
              {filteredServices.map(_(service, index) => (
                <motion.div,
key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className=&quot;group&quot;                >
                  <div className=&quot;bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                        <Brain className=&quot;w-6 h-6 text-white&quot; />
                      </div>
                      <div className=&quot;text-right&quot;>
                        <span className=&quot;inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full&quot;>
                          {service.category}
                        </span>
                        <div className=&quot;flex items-center gap-1 mt-1&quot;>
                          {[...Array(5)].map((_, i) => (                            <Star,
key={i}
                              className={_`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'}`}
                            />
                          ))}
                          <span className=&quot;text-gray-400 text-sm ml-1&quot;>({service.reviews})</span>                        </div>
                      </div>
                    </div>

                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {service.name}
                    </h3>
                    
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                      {service.description}
                    </p>

                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;flex items-center gap-2 text-cyan-400 font-semibold&quot;>
                        <DollarSign className=&quot;w-4 h-4&quot; />
                        <span>{service.price}</span>
                      </div>
                    </div>

                    <div className=&quot;space-y-2 mb-6&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white&quot;>Key Features:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className=&quot;flex items-start gap-2 text-xs text-gray-300&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0&quot; />
                            <span>{feature}</span>                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Link href={service.link}>
                        <motion.button,
whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2&quot;                        >
                          Learn More <ArrowUpRight className=&quot;w-4 h-4&quot; />
                        </motion.button>
                      </a>
                      
                      <div className=&quot;text-right text-xs text-gray-400&quot;>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Users className=&quot;w-3 h-3&quot; />
                          <span>{service.customers}</span>
                        </div>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-3 h-3&quot; />
                          <span>{service.launchDate}</span>                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {_/* Call to Action */}
            <motion.div,
initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center mt-20&quot;            >
              <div className=&quot;bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30&quot;>
                <h3 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                  Ready to Transform Your Business?
                </h3>
                <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <Link href=&quot;/contact&quot;>
                    <motion.button,
whileHover={{ scale: 1.05, boxShadow: &quot;0 0 30px rgba(6, 182, 212, 0.5)&quot }}
                      whileTap={{ scale: 0.95 }}
                      className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;                    >
                      Get Started Today
                    </motion.button>
                  </a>
                  <Link href=&quot;/services&quot;>
                    <motion.button,
whileHover={{ scale: 1.05, boxShadow: &quot;0 0 30px rgba(168, 85, 247, 0.5)&quot }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover: bg-cyan-400 hover:text-gray-900 transition-all duration-300"                      whileHover={_{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"}}
                      whileTap={_{ scale: 0.95}}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      View All Services
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
},

export default Homepage2046,
import React from 'react',
import { motion } from 'framer-motion',
import Link from 'next/link',
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, Star, ArrowRight, Play, CheckCircle,
  Phone, Mail, MapPin
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const heroStats = [
  { number: '1000+', label: 'Innovative Services', icon: Sparkles, color: 'from-cyan-400 to-blue-400' },
  { number: '24/7', label: 'Expert Support', icon: Shield, color: 'from-purple-400 to-pink-400' },
  { number: '1000%', label: 'Average ROI', icon: Star, color: 'from-yellow-400 to-orange-400' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle, color: 'from-green-400 to-emerald-400' }
],

const featuredServices = [  {
  y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] 
}
}transition= {
  {
    name: 'Space Mining Automation',
    description: 'Automated asteroid mining',
    price: '$45,999/month',
    icon: Rocket,
    color: 'from-teal-600 to-emerald-600',
    href: '/space-mining-automation-platform'
  },
  {
    name: 'Quantum Internet Security',
    description: 'Unbreakable encryption',
    price: '$15,999/month',
    icon: Shield,
    color: 'from-indigo-600 to-blue-600',
    href: '/quantum-internet-security-gateway'
  }
],

export default function UltraFuturisticHero2032() {
  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Floating Particles */}
        <div className=&quot;absolute inset-0&quot;>
          {[...Array(50)].map((_, i) => (
            <motion.div,
key={i}
              className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30&quot;
              style={{                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={_{
                y: [0, _-20, 0], opacity: [0.3, 0.8, 0.3]}}
              transition={_{
                duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2}}
            />
          ))}
        </div>;
;
        {/* Gradient Orbs */}
        <div className=&quot;absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow&quot; />
      </div>

      {/* Main Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        {/* Hero Badge */}
        <motion.div,
initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm&quot;        >
          <Sparkles className=&quot;w-5 h-5 text-purple-400&quot; />
          <span className=&quot;text-purple-300 font-medium&quot;> 2032 Revolutionary Technology</span>
          <Sparkles className=&quot;w-5 h-5 text-cyan-400&quot; />
        </motion.div>

        {_/* Main Heading */}
        <motion.h1,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=&quot;text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight&quot;        >
          <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
            The Future of
          </span>
          <br />
          <span className=&quot;text-white&quot;>Technology is Here</span>
        </motion.h1>

        {_/* Subheading */}
        <motion.p,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed&quot;        >
          Experience the revolution with our cutting-edge AI consciousness, quantum computing,
          space technology, and emerging tech solutions. Transform your business with,
technologies that were once science fiction.
        </motion.p>

        {_/* CTA Buttons */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-16&quot;        >
          <Link,
href=&quot;/services&quot;
            className=&quot;group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25&quot;
          >
            <span>Explore All Services</span>
            <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
          </a>
          
          <Link,
href={`tel:${contactInfo.mobile}`}
            className=&quot;group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300&quot;
          >
            <Phone className=&quot;w-5 h-5&quot; />
            <span>Call {contactInfo.mobile}</span>
          </a>        </motion.div>

        {_/* Stats Grid */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;        >
          {heroStats.map(_(stat, index) => (
            <motion.div,
key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className=&quot;text-center group&quot;
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:shadow-lg`}>
                <stat.icon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <div className=&quot;text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2&quot;>
                {stat.number}
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>            </motion.div>
          ))}
        </motion.div>

        {_/* Featured Services */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className=&quot;mb-16&quot;        >
          <h2 className=&quot;text-2xl md:text-3xl font-bold text-white mb-8&quot;>
            Featured Revolutionary Services
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {featuredServices.map((service, index) => (
              <motion.div,
key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className=&quot;group&quot;
              >
                <Link,
href={service.href}
                  className=&quot;block relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50&quot;
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                    <service.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300&quot;>
                    {service.name}
                  </h3>
                  
                  <p className=&quot;text-gray-400 text-sm mb-4 leading-relaxed&quot;>
                    {service.description}
                  </p>
                  
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                    <div className=&quot;text-purple-400 group-hover:text-cyan-400 transition-colors&quot;>
                      <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />                    </div>
                  </div>
                  
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {_/* Contact Information */}
        <motion.div,
initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className=&quot;bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto&quot;        >
          <h3 className=&quot;text-2xl font-bold text-white mb-6 text-center&quot;>
            Ready to Transform Your Business?
          </h3>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-6&quot;>
            <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
              <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
              <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors&quot;>
                {contactInfo.mobile}
              </a>
            </div>
            <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
              <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
              <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                {contactInfo.email}
              </a>
            </div>
            <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
              <MapPin className=&quot;w-5 h-5 text-green-400&quot; />
              <span>{contactInfo.address}</span>            </div>
          </div>
          
          <div className=&quot;text-center&quot;>
            <Link,
href=&quot;/contact&quot;
              className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25&quot;
            >
              <span>Get Started Today</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </a>
          </div>
        </motion.div>
      </div>

      {_/* Floating Action Button */}
      <motion.div,
initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className=&quot;fixed bottom-8 right-8 z-50&quot;
      >
        <Link,
href={`tel:${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover: shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40"        initial={_{ opacity: 0, scale: 0}}
        animate={_{ opacity: 1, scale: 1}}
        transition={_{ duration: 0.8, delay: 2}}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link,
href={_`tel:${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40"
        >
          <Phone className=&quot;w-7 h-7 text-white group-hover:rotate-12 transition-transform&quot; />
        </a>
      </motion.div>
    </section>
  )}
import { motion } from 'framer-motion';
import {
import {
  ArrowRight
  Star
  TrendingUp
  Zap
  Brain
  Atom
  Rocket
  Target
  Shield
  Cpu
  Globe
  Sparkles;
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Rocket,
  Target,
  Shield,
  Cpu,
=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import { motion } from 'framer-motion';


} from 'lucide-react';
export default /**
 * UltraFuturisticHero2029 - Function description
 */
function UltraFuturisticHero2029() {
  const features = [;
    {

      icon: Cpu,
      text: 'Autonomous IT Operations',
      color: 'from-cyan-500 to-teal-600',;
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },


    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }


import {;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Zap,;
  Brain,;
  Atom,;
  Rocket,;
  Target,;
  Shield,;
  Cpu,;
  Globe,;
  Sparkles,;
} from 'lucide-react';
export default function UltraFuturisticHero2029() {;
  const features = [;
    {;
      icon: Brain,;
      text: 'AI Consciousness Evolution',;
      color: 'from-violet-500 to-purple-600',;
    },;
    {;
      icon: Atom,;
      text: 'Quantum Computing Solutions',;
      color: 'from-blue-500 to-cyan-600',;
    },;
    {;
      icon: Rocket,;
      text: 'Space Technology Innovation',;
      color: 'from-emerald-500 to-teal-600',;
    },;
    {;
      icon: Target,;
      text: 'Micro SAAS Excellence',;
      color: 'from-orange-500 to-red-600',;
    },;
    {;
      icon: Shield,;
      text: 'Enterprise Security',;
      color: 'from-indigo-500 to-blue-600',;
    },;
    {;
      icon: Cpu,;
      text: 'Autonomous IT Operations',;
      color: 'from-cyan-500 to-teal-600',;
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },;
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },;
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },;
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },;
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },;
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [;
    { number: '500+', label: 'Innovative Services', icon: Sparkles },;
    { number: '$2 && 2.5B+', label: 'Market Opportunity', icon: TrendingUp },;
    { number: '99 && 99.9%', label: 'Success Rate', icon: Star },;
    { number: '24/7', label: 'AI Operations', icon: Zap },;
  ];


=======
=======
  ];
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>;
        {/* Floating Particles */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(50)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20'
              animate={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',


              }}
              style={{
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
<<<<<<< HEAD
            <span className="text-white">Technology Services</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Experience the future of technology with our revolutionary 2029 services. 
            From AI consciousness simulation to Mars colonization automation, 
            we're building tomorrow's solutions today.
          </motion.p>

          {/* Floating Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-8"
          >
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className={`text-4xl ${element.color}`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  delay: element.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <element.icon />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              href="/2029-ultra-futuristic-innovations"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
            >
              <span>Explore 2029 Innovations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50"
            >
              <span>Call Now</span>
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Featured Services Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                title: 'AI Consciousness Evolution',
                description: 'Develop truly conscious AI systems with ethical frameworks',
                icon: Brain,
                color: 'from-purple-500 to-pink-500',
                price: '$24,999/month'
              },
              {
                title: 'Quantum Time Manipulation',
                description: 'Quantum computing for temporal data processing and analysis',
                icon: Atom,
                color: 'from-indigo-500 to-blue-500',
                price: '$45,999/month'
              },
              {
                title: 'Autonomous Space Mining',
                description: 'Asteroid resource extraction and space resource management',
                icon: Rocket,
                color: 'from-red-500 to-orange-500',
                price: '$45,999/month'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75`} />
                
                {/* Service Card */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`text-3xl ${service.color.includes('purple') ? 'text-purple-400' : service.color.includes('indigo') ? 'text-indigo-400' : 'text-red-400'}`}>
                        <service.icon />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-white">
                      {service.price}
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }} />
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </motion.div>
=======
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>
          </p>
>>>>>>> main
        </motion.div>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
              2029;
            </span>;
            <br />;
            <span className='text-white'>Future Technology</span>;
            <br />;
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>;
              Revolution;
            </span>;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, we're building tomorrow's solutions today.          </p>          ;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. ;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion && motion.div>;


=======
=======

=======




        >
=======
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
=======

        >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Link
            href='/services'

            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'>;
            <span>Explore Services</span>;
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
          </Link>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'>;
            <span>Get Started</span>;
            <Zap className='w-5 h-5' />          </Link>        >;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >

          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
=======          <Link
            href="/services"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Link
            href="/services"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2">;
            <span>Explore Services</span>;
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
          </Link>;
          <Link
            href="/contact"


=======
=======
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>

=======




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        >
          {features.map((feature, index) => (
            <motion.div
                coordinate_x: [0, Math.random () * 1000];
                coordinate_y: [0, Math.random () * 1000];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: "linear";
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%'}}
            />))}
        </div>;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 opacity - 10'>;
          <div;
            className='absolute inset - 0';
            style={{
              background_image: `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,
              background_size: '50px 50px',
            }}
          />;
        </div>;
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000' />;
      </div>;
      {/* Content */}
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>        {/* Main Heading */}        </div>;
        {/* Gradient Orbs */}
        <div className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse" />;
        <div className="absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000" />;
      </div>;
      {/* Content */}
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb - 8';
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
              2029;
            </span>;
            <br />;
            <span className='text - white'>Future Technology</span>;
            <br />;
            <span className='bg - gradient - to - r from - emerald - 400 via - teal - 500 to - cyan - 500 bg - clip - text text - transparent'>;
              Revolution;
            </span>;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, we're building tomorrow's solutions today.          </p>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion.div>;
        {/* CTA Buttons */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex - col sm:flex - row gap - 4 justify - center mb - 16';
        >;
          <Link;
            href='/services';
            className='group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - lg font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl hover:shadow - cyan - 500 / 25 flex items - center justify - center space - x-2';
          >;
            <span > Explore Services</span>;
            <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
          </Link>;
          <Link;
            href='/contact';
            className='px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 text - lg font - semibold rounded - xl hover:bg - cyan - 500 / 10 hover:border - cyan - 400 transition - all duration - 300 flex items - center justify - center space - x-2';
          >;
            <span > Get Started</span>;
            <Zap className='w - 5 h - 5' />          </Link>        >;
          <Link;
            href="/services";
            className="group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - lg font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl hover:shadow - cyan - 500 / 25 flex items - center justify - center space - x-2";
          >;
            <span > Explore Services</span>;
            <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
          </Link>;
          <Link;
            href="/contact";
            className="px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 text - lg font - semibold rounded - xl hover:bg - cyan - 500 / 10 hover:border - cyan - 400 transition - all duration - 300 flex items - center justify - center space - x-2";
          >;
            <span > Get Started</span>;
            <Zap className="w - 5 h - 5" />;
          </Link>;
        </motion.div>;
        {/* Features Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 mb - 16'        >          className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 mb - 16";
        >;
          {features.map ((feature, index) => (
            <motion.div;
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute inset-0&quot; style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot; />
      </div>

      {/* Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'

        >
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-16'

        >
          <Link
            href='/services'
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'
          >
            <span>Explore Services</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'
          >
            <span>Get Started</span>
            <Zap className='w-5 h-5' />          </Link>        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div

              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}




        </motion && motion.div>;



=======
=======

        {/* Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          {stats.map((stat, index) => (
            <motion.div
              className='group p - 4 rounded - xl bg - gray - 800 / 30 backdrop - blur - sm border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:bg - gray - 800 / 50';
            >;
              <div;
                className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}
              >;
                <feature.icon className='w - 6 h - 6 text - white' />;
              </div>;
              <p className='text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight'>                {feature.text}            >;
              <div className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}>;
                <feature.icon className="w - 6 h - 6 text - white" />;
              </div>;
              <p className="text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight">;
                {feature.text}
              </p>;
            </motion.div>))}
        </motion.div>;
        {/* Stats */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'        >          className="grid grid - cols - 2 md:grid - cols - 4 gap - 8";
        >;
          {stats.map ((stat, index) => (
            <motion.div;
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}

              className='text - center group';
        {/* Scroll Indicator */}
        <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />

=======

=======
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}

            />;




=======
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

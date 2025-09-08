import React from 'react';
import Layout from './layout/Layout';


import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star;
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin;}
  Users, Building, Rocket, CheckCircle, Phone, Mail}
 } from 'lucide-react';

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
import Layout from './layout / Layout';
import Link from 'next / link';
import { motion } from 'framer-motion';


  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin;
  Users, Building, Rocket, CheckCircle, Phone, Mail;
import { motion } from 'framer-motion;
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin,
  Users, Building, Rocket, CheckCircle, Phone, Mail
} from lucide-react',

  return (
    <Layout>
      {/* Main Content */}

      <main className='relative z-10'>

        {/* Hero Section */}
        <section className='min - h-screen flex items - center justify - center px - 4 relative overflow - hidden'>;
          {/* Background Elements */}
          <div className='absolute inset - 0 pointer - events - none'>;
            <div className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg animate - pulse'></div>;
            <div className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full animate - pulse delay - 1000'></div>;
            <div className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45 animate - pulse delay - 2000'></div>;
          </div>;
          <div className='text - center max - w-4xl mx - auto relative z - 10'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='space - y-6'            >        {/* Hero Section */}
        <section className="min - h-screen flex items - center justify - center px-4 relative overflow-hidden">;
          {/* Background Elements */}
          <div className="absolute inset - 0 pointer-events-none">;
            <div className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded-lg animate-pulse"></div>;
            <div className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full animate-pulse delay-1000"></div>;
            <div className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45 animate-pulse delay-2000"></div>;
          </div>;
          <div className="text - center max - w-4xl mx-auto relative z-10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              {/* Company Badge */}
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}


              >
                <Star className='w-4 h-4' />
                <span>Innovation Leader 2026</span>
              </motion.div>
              <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Zion Tech Group
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Pioneering the future of technology with innovative micro SAAS
                services, cutting-edge IT infrastructure, and advanced AI
                solutions
              </p>
              {/* Enhanced CTA Section */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>
                    <span className='flex items-center gap-2'>
                      Explore Services
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </button>
                </Link>
                <Link href='/services'>
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
                    All Services
                  </button>
                </Link>
                <a href='mailto:kleber@ziontechgroup.com'>
                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                    Get Started
                  </button>
                </a>
              </div>              >
                animate={{ opacity: 1, scale: 1 }}
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2026</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative micro SAAS services, cutting-edge IT infrastructure, and advanced AI solutions
              </p>
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Explore Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    All Services
                  </button>
                </Link>
                <a href="mailto:kleber@ziontechgroup.com">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                <a href='"mailto":kleber@ziontechgroup.com'>'

                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg "hover":bg-purple-400 "hover":text-black transition-all duration-300 transform "hover":scale-105'>'
                    Get Started

              {/* Trust Indicators */}
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'        <section className="py-20 px-4 bg-black/30 relative">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>;
          <div className="max-w-6xl mx-auto relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}


        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
            >

              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver innovative solutions that drive real business transformation
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}


              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS Solutions</h3>
                <p className="text-gray-300 text-sm">

                  Starting at $69/month for specialized business solutions

                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}


              >
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>
                <p className="text-gray-300 text-sm">

                  Starting at $499/month for robust infrastructure solutions

                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}



              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
                <p className="text-gray-300 text-sm">

                  Starting at $199/month for intelligent automation

                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-300 text-sm">
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-300 text-sm">
                </p>
              </motion.div>
            </div>
          </div>
        </section>

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold text-white mb-4'>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                We deliver innovative solutions that drive real business;
                transformation;
              </p>;
            </motion && motion.div>;

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}>;
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We deliver innovative solutions that drive real business transformation;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
                className='text-center'>;
                <div className='text-4xl mb-4'>🚀</div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Micro SAAS Solutions;
                </h3>;
                <p className='text-gray-300 text-sm'>                  Starting at $69/month for specialized business solutions                className="text-center";
              >;
                <div className="text-4xl mb-4">🚀</div>;
                <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS Solutions</h3>;
                <p className="text-gray-300 text-sm">;
                </p>;
              </motion && motion.div>;

              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className='text-center'>;
                <div className='text-4xl mb-4'>🏗️</div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  IT Infrastructure;
                </h3>;
                <p className='text-gray-300 text-sm'>                  Starting at $499/month for robust infrastructure solutions                className="text-center";
              >;
                <div className="text-4xl mb-4">🏗️</div>;
                <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>;
                <p className="text-gray-300 text-sm">;
                </p>;
              </motion && motion.div>;

              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
                className='text-center'>;
                <div className='text-4xl mb-4'>🤖</div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  AI Automation;
                </h3>;
                <p className='text-gray-300 text-sm'>                  Starting at $199/month for intelligent automation                className="text-center";
              >;
                <div className="text-4xl mb-4">🤖</div>;
                <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>;
                <p className="text-gray-300 text-sm">;
                </p>;
              </motion && motion.div>;

              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
                className='text-center'>;
                <div className='text-4xl mb-4'>🧠</div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Cutting-Edge AI;
                </h3>;
                <p className='text-gray-300 text-sm'>                  Starting at $179/month for next-generation AI                className="text-center";
              >;
                <div className="text-4xl mb-4">🧠</div>;
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>;
                <p className="text-gray-300 text-sm">;
                </p>;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;


        {/* Service Categories */}
        <section className='py-20 px-4'>;
          <div className='max-w-6xl mx-auto'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}


        {/* Service Categories */}
        <section className="py-20 px-4">
        {/* Service Categories */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'        <section className="py-20 px-4">

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold text-white mb-6'>;
                Our Service Portfolio;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Comprehensive solutions covering every aspect of modern business;
                technology needs;
              </p>;
            </motion && motion.div>;

            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>              {/* AI Automation Services */}            >;
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Comprehensive solutions covering every aspect of modern business technology needs;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">;

              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Our Service Portfolio
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Comprehensive solutions covering every aspect of modern business
                technology needs
              </p>
            </motion.div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>              {/* AI Automation Services */}            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions covering every aspect of modern business technology needs
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* AI Automation Services */}
              <motion&& motion.div

              {/* AI Automation Services */}


              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}


              {/* AI Automation Services */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300'


              >
                <div className='text-5xl mb-6'>🤖</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  AI Automation Services
                </h3>
                <p className='text-gray-300 mb-6'>
                  Intelligent automation solutions that streamline operations
                  and boost productivity. From content creation to customer
                  service, our AI solutions save time and improve efficiency.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>                    Learn More              >
              <motion&& motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Automation Services</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent automation solutions that streamline operations and boost productivity.

        {/* Service Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions covering every aspect of modern business technology needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* AI Automation Services */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Automation Services</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent automation solutions that streamline operations and boost productivity. 
                  From content creation to customer service, our AI solutions save time and improve efficiency.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>

              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }
}"
              className='text - center mb - 16'        <section className=\"py - 20 px - 4 bg - black / 30 relative\"    />;"
          <div className=\"absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 to - purple - 500 / 5\"    /></div>;"
          <div className=\"max - w-6xl mx - auto relative z - 10\"    />;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }
}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }
}
              className='text - center mb - 16'    />

              <h2 className='text - 4xl font - bold text - white mb - 4'    />;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'    />;








              {/* Micro SAAS Solutions */}
              <motion&& motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}


              >
                <div className='text-5xl mb-6'>🚀</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Micro SAAS Solutions
                </h3>
                <p className='text-gray-300 mb-6'>
                  Specialized software solutions for specific business needs.
                  Affordable, focused solutions that solve real problems and
                  drive growth.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Smart Appointment Scheduler - $69/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors'>                    Learn More              >
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Specialized software solutions for specific business needs. 
                  Affordable, focused solutions that solve real problems and drive growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />


                initial={{ opacity: 0, x: 20 }
}

                whileInView={{ opacity: 1, x: 0 }
}

                transition={{ duration: 0.6, delay: 0.4 }
}
className='bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300'
                  />
                <div className='text-5xl mb-6'    />🧠</div>
                <h3 className='text-2xl font-semibold text-white mb-4'    />
                  Cutting-Edge AI Services;
                </h3>
                <p className='text-gray-300 mb-6'    />
                  Next-generation AI solutions for competitive advantage. Video;
generation, code assistance, and data analysis powered by;
advanced AI.
                </p>
                <div className='space-y-3 mb-6'    />
                  <div className='flex items-center space-x-2 text-sm text-gray-300'    />
                    <CheckCircle className='w-4 h-4 text-green-400'    />
                    <span    />AI Video Generation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'    />
                    <CheckCircle className='w-4 h-4 text-green-400'    />
                    <span    />AI Code Generation - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>'
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Data Analysis - $399/month</span>
                  </div>
                </div>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>


                transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
                className='bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300'>;
                <div className='text-5xl mb-6'>🧠</div>;
                <h3 className='text-2xl font-semibold text-white mb-4'>;
                  Cutting-Edge AI Services;
                </h3>;
                <p className='text-gray-300 mb-6'>;
                  Next-generation AI solutions for competitive advantage. Video;
                  generation, code assistance, and data analysis powered by;
                  advanced AI.;
                </p>;
                <div className='space-y-3 mb-6'>;
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>;
                    <CheckCircle className='w-4 h-4 text-green-400' />;
                    <span>AI Video Generation - $199/month</span>;
                  </div>;
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>;
                    <CheckCircle className='w-4 h-4 text-green-400' />;
                    <span>AI Code Generation - $299/month</span>;
                  </div>;
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>;
                    <CheckCircle className='w-4 h-4 text-green-400' />;
                    <span>AI Data Analysis - $399/month</span>;
                  </div>;
                </div>;
                <Link href='/comprehensive-2025-services-showcase'>;
                  <button className='w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors'>                    Learn More              >;
                <div className="text-5xl mb-6">🧠</div>;
                <h3 className="text-2xl font-semibold text-white mb-4">Cutting-Edge AI Services</h3>;
                <p className="text-gray-300 mb-6">;
                  Next-generation AI solutions for competitive advantage. ;
                  Video generation, code assistance, and data analysis powered by advanced AI.;
                </p>;
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center space-x-2 text-sm text-gray-300">;
                    <CheckCircle className="w-4 h-4 text-green-400" />;
                    <span>AI Video Generation - $199/month</span>;
                  </div>;
                  <div className="flex items-center space-x-2 text-sm text-gray-300">;
                    <CheckCircle className="w-4 h-4 text-green-400" />;
                    <span>AI Code Generation - $299/month</span>;
                  </div>;
                  <div className="flex items-center space-x-2 text-sm text-gray-300">;
                    <CheckCircle className="w-4 h-4 text-green-400" />;
                    <span>AI Data Analysis - $399/month</span>;
                  </div>;
                </div>;
                <Link href="/comprehensive-2025-services-showcase">;
                  <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">;
                    Learn More;
                  </button>;
                </Link>;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className='py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
        {/* Contact Section */}
        <section className='py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='space-y-6'        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              className='space-y-6'>;
              <h2 className='text-4xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Get in touch with our team to discuss how our innovative;
                services can drive your success;
              </p>;


              {/* Contact Information */}
              <div className='bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8'>;
                <h3 className='text-2xl font-semibold text-cyan-400 mb-6'>;
                  Contact Information;
                </h3>;
                <div className='grid md:grid-cols-2 gap-6 text-left'>;
                  <div className='flex items-center space-x-3'>;
                    <Globe className='w-5 h-5 text-blue-400' />;
                    <div>;
                      <div className='text-sm text-gray-400'>Website</div>;
                      <a


        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >

              <h2 className="text-4xl font-bold text-white mb-6">
        {/* Contact Section *
}
<section className='py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'>'
          <div className='max-w-4xl mx-auto text-center'>'
            <motion.div,
initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8 }}
className='space-y-6''
            >
              <h2 className='text-4xl font-bold text-white mb-6'>'
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss how our innovative services can drive your success
              </p>
                        href='https://ziontechgroup && ziontechgroup.com'
                        className='text-cyan-400 hover:underline font-medium'>                        ziontechgroup && ziontechgroup.com;
                      </a>;
                    </div>;
                  </div>            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Get in touch with our team to discuss how our innovative services can drive your success;
              </p>;
              {/* Contact Information */}

              <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
                <div className="grid md: grid-cols-2 gap-6 text-left">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Website</div>
                      <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline font-medium">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:underline font-medium">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>


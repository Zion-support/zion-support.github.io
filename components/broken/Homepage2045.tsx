import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Rocket,
  Loader2,
  ChevronDown,
  Zap,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Palette,
  Heart,
  Phone,
  Mail,
  MapPin,
  Search,
  Grid,
  List,
  Atom,
  Target,
  Sparkles,;
} from 'lucide-react';
import Link from 'next/link';

=======
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
// Import our new innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
<<<<<<< HEAD
<<<<<<< HEAD

// Loading fallback component
const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>
=======
// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
<<<<<<< HEAD
<<<<<<< HEAD
      className='text-center'
=======
      className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
<<<<<<< HEAD
      <p className='text-xl text-gray-300 mb-2'>
        Loading Zion Tech Group 2045...
      </p>
      <p className='text-sm text-gray-500'>
        Preparing your futuristic digital transformation journey
      </p>
=======
      className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2045...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2045...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    </motion.div>
  </div>
);

const Homepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false);
<<<<<<< HEAD
<<<<<<< HEAD
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
=======
      setIsVisible(true)
    }, 800);

    return () => clearTimeout(timer)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsVisible(true)
    }, 800);

    return () => clearTimeout(timer)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
<<<<<<< HEAD
<<<<<<< HEAD
          entries.forEach(entry => {
=======
          entries.forEach((entry) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
<<<<<<< HEAD
          });
        },
=======
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          })
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        { threshold: 0.3, rootMargin: '-100px' }
      );

      const sections = document.querySelectorAll('section[id]');
<<<<<<< HEAD
<<<<<<< HEAD
      sections.forEach(section => observer.observe(section));

      return () => observer.disconnect();
=======
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
<<<<<<< HEAD
<<<<<<< HEAD
    transition: { duration: 0.6, ease: 'easeOut' },
=======
    transition: { duration: 0.6, ease: "easeOut" }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    transition: { duration: 0.6, ease: "easeOut" }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
<<<<<<< HEAD
<<<<<<< HEAD
        delayChildren: 0.2,
      },
    },
=======
        delayChildren: 0.2
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        delayChildren: 0.2
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
<<<<<<< HEAD
<<<<<<< HEAD
    transition: { duration: 1.2, ease: 'easeOut' },
=======
    transition: { duration: 1.2, ease: "easeOut" }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    transition: { duration: 1.2, ease: "easeOut" }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const getColorClasses = (index: number) => {
    const colors = [
<<<<<<< HEAD
<<<<<<< HEAD
      'from-cyan-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-emerald-400 to-teal-500',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-purple-500',
      'from-yellow-400 to-orange-500',
    ];
    return colors[index % colors.length];
=======
      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  if (isLoading) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <Layout>
      <div className='min-h-screen bg-black text-white relative overflow-x-hidden'>
=======
  return(<Layout>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
              animate={{
                rotate: [0, 360];
                scale: [1, 1.1, 1];
                opacity: [0.3, 0.6, 0.3]}}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
              animate={{
                rotate: [360, 0];
                scale: [1, 1.2, 1];
                opacity: [0.3, 0.7, 0.3]}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
              animate={{
                rotate: [45, 405];
                scale: [1, 1.15, 1];
                opacity: [0.3, 0.5, 0.3]}}
              transition={{
                duration: 10,
                repeat: Infinity,
<<<<<<< HEAD
                ease: 'easeInOut',
=======
  return(<Layout>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
              animate={{
                rotate: [0, 360];
                scale: [1, 1.1, 1];
                opacity: [0.3, 0.6, 0.3]}}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
              animate={{
                rotate: [360, 0];
                scale: [1, 1.2, 1];
                opacity: [0.3, 0.7, 0.3]}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
              animate={{
                rotate: [45, 405];
                scale: [1, 1.15, 1];
                opacity: [0.3, 0.5, 0.3]}}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
            />
          </div>

          {/* Hero Content */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-8'
=======
              className="mb-8"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="mb-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-5xl md:text-7xl font-bold mb-6'
              >
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
=======
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Future of Technology
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'
              >
                Transform your business with Zion Tech Group's revolutionary AI
                services, quantum computing, and cutting-edge emerging
                technologies. Leading the future of technology innovation.
=======
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              >
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              >
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'
=======
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Get Started
              </Link>
              <Link
<<<<<<< HEAD
<<<<<<< HEAD
                href='/services'
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'
=======
                href="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                href="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'
=======
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Customer Rating</div>
              </div>
<<<<<<< HEAD
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>
                  1000+
                </div>
                <div className='text-gray-400'>Happy Clients</div>
=======
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>
                <div className="text-gray-400">Happy Clients</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section id='featured-services' className='py-20 relative'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our cutting-edge solutions that are transforming
                industries and pushing the boundaries of what's possible with
                technology.
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </motion.div>

            {/* Service Categories Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI & Consciousness",
                  description: "Revolutionary AI platforms with emotional intelligence and autonomous operations",
                  color: "from-cyan-400 to-blue-500",
                  href: "/ai-services"
                };
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Technology",
                  description: "Breakthrough quantum computing solutions for next-generation applications",
                  color: "from-purple-400 to-pink-500",
                  href: "/quantum-services"
                };
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Space Technology",
                  description: "Advanced space exploration and resource management platforms",
                  color: "from-emerald-400 to-teal-500",
                  href: "/space-technology"
                };
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Solutions",
                  description: "Advanced infrastructure and security solutions for modern enterprises",
                  color: "from-orange-400 to-red-500",
                  href: "/enterprise-solutions"
                };
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Micro SAAS",
                  description: "Innovative business solutions that drive growth and efficiency",
                  color: "from-indigo-400 to-purple-500",
                  href: "/micro-saas"
                };
                {
<<<<<<< HEAD
                  icon: <Sparkles className='w-12 h-12' />,
                  title: 'Emerging Tech',
                  description:
                    'Cutting-edge technologies that define the future of innovation',
                  color: 'from-yellow-400 to-orange-500',
                  href: '/emerging-tech',
                },
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI & Consciousness",
                  description: "Revolutionary AI platforms with emotional intelligence and autonomous operations",
                  color: "from-cyan-400 to-blue-500",
                  href: "/ai-services"
                };
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Technology",
                  description: "Breakthrough quantum computing solutions for next-generation applications",
                  color: "from-purple-400 to-pink-500",
                  href: "/quantum-services"
                };
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Space Technology",
                  description: "Advanced space exploration and resource management platforms",
                  color: "from-emerald-400 to-teal-500",
                  href: "/space-technology"
                };
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Solutions",
                  description: "Advanced infrastructure and security solutions for modern enterprises",
                  color: "from-orange-400 to-red-500",
                  href: "/enterprise-solutions"
                };
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Micro SAAS",
                  description: "Innovative business solutions that drive growth and efficiency",
                  color: "from-indigo-400 to-purple-500",
                  href: "/micro-saas"
                };
                {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  icon: <Sparkles className="w-12 h-12" />,
                  title: "Emerging Tech",
                  description: "Cutting-edge technologies that define the future of innovation",
                  color: "from-yellow-400 to-orange-500",
                  href: "/emerging-tech"
                }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='group'
=======
                  className="group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <Link href={service.href}>
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
<<<<<<< HEAD
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        {service.title}
                      </h3>
                      <p className='text-gray-400 mb-6'>
                        {service.description}
                      </p>
                      <div className='flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors'>
                        <span className='mr-2'>Learn More</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
=======
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Innovations Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section
          id='latest-innovations'
          className='py-20 relative bg-gray-900/30'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
        <section id="latest-innovations" className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section id="latest-innovations" className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Innovations
                </span>
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Explore our newest revolutionary services that are setting new
                standards in technology innovation.
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our newest revolutionary services that are setting new standards in technology innovation.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our newest revolutionary services that are setting new standards in technology innovation.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </motion.div>

            {/* Featured New Services */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {revolutionary2043AdvancedServices
                .slice(0, 4)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group'
                  >
                    <Link href={service.link}>
                      <div className='relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='text-3xl'>{service.icon}</div>
                          {service.popular && (
                            <span className='px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full'>
                              New
                            </span>
                          )}
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="mr-2 text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
<<<<<<< HEAD
                    </Link>
                  </motion.div>
                ))}
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
                  </Link>
                </motion.div>
              ))}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>

            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mt-12'
=======
              className="text-center mt-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
<<<<<<< HEAD
                <ArrowRight className='ml-2 w-5 h-5' />
=======
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section id='contact-cta' className='py-20 relative'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
=======
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
=======
              <h2 className="text-4xl md: text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Ready to Transform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can drive your business into the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
<<<<<<< HEAD
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'
=======
              <h2 className="text-4xl md: text-5xl font-bold mb-6">
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Get Started
                </Link>
                <a
<<<<<<< HEAD
<<<<<<< HEAD
                  href='tel:+1 302 464 0950'
                  className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'
=======
                  href="tel:+1 302 464 0950"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="tel:+1 302 464 0950"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  );
  animate: {
  transition: {
  staggerChildren: 0.1, delayChildren: 0.2 


=======
  )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

<<<<<<< HEAD
}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};
=======
  )
};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default Homepage2045;

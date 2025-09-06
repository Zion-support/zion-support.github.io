import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  Sparkles,
  Target,
  BarChart3,
  Lightbulb,
  Code,
  Server,
  Network,
  ShieldCheck,
  BrainCircuit,
  Atom,
  Satellite,
  Eye,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowUpRight,;
} from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
=======

=======
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite;
  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite;
  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
// Import our new innovative services
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
// Enhanced loading component with quantum effects
const QuantumLoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>
    {/* Quantum particle effects */}
    <div className='absolute inset-0'>
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full'
          animate={{
            x: [0, Math.random() * 1200],
            y: [0, Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: Math.random() * 100 + '%',
<<<<<<< HEAD
            top: Math.random() * 100 + '%',
=======
            top: Math.random() * 100 + '%'}}
        />
      ))}
    </div>
<<<<<<< HEAD

=======
// Enhanced loading component with quantum effects
const QuantumLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">
    {/* Quantum particle effects */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          animate={{
            x: [0, Math.random() * 1200];
            y: [0, Math.random() * 800];
            opacity: [0, 1, 0];
            scale: [0, 1, 0]}}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut"
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />
      ))}
    </div>
<<<<<<< HEAD
=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {/* Quantum loading animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
<<<<<<< HEAD
      className='text-center relative z-10'
=======
<<<<<<< HEAD
<<<<<<< HEAD
      className='text-center relative z-10'
=======
      className="text-center relative z-10"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    >
      <div className='relative'>
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.5)',
              '0 0 40px rgba(168, 85, 247, 0.8)',
              '0 0 20px rgba(6, 182, 212, 0.5)',
            ],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className='w-32 h-32 mx-auto mb-8'
        >
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse'></div>
          <div className='absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center'>
            <Brain className='w-16 h-16 text-white' />
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD
      <motion.h1
        className='text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'        animate={{ opacity: [0.5, 1, 0.5] }}
=======
<<<<<<< HEAD
      <motion.h1
        className='text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'
=======
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1];
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.5)";
              "0 0 40px rgba(168, 85, 247, 0.8)";
              "0 0 20px rgba(6, 182, 212, 0.5)"
            ]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        animate={{ opacity: [0.5, 1, 0.5] }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        transition={{ duration: 3, repeat: Infinity }}
      >
        Zion Tech Group 2046
      </motion.h1>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <p className='text-xl text-gray-300 mb-3'>
        Quantum AI • Neural Interfaces • Space Technology
      </p>
      <p className='text-lg text-gray-400'>
        Preparing your revolutionary digital transformation journey
      </p>

<<<<<<< HEAD
=======
=======
      <p className="text-xl text-gray-300 mb-3">Quantum AI • Neural Interfaces • Space Technology</p>
      <p className="text-lg text-gray-400">Preparing your revolutionary digital transformation journey</p>
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Quantum progress bar */}
      <div className='mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2'>
        <motion.div
          className='bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full'
          initial={{ width: 0 }}
<<<<<<< HEAD
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}        />
=======
<<<<<<< HEAD
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
=======
      <p className="text-xl text-gray-300 mb-3">Quantum AI • Neural Interfaces • Space Technology</p>
      <p className="text-lg text-gray-400">Preparing your revolutionary digital transformation journey</p>
      
      {/* Quantum progress bar */}
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>
    </motion.div>
  </div>
);

const Homepage2046: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
<<<<<<< HEAD
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);  }, []);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
=======
      setIsVisible(true)
    }, 2000);

    return () => clearTimeout(timer)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsVisible(true)
    }, 2000);

    return () => clearTimeout(timer)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
<<<<<<< HEAD
          entries.forEach(entry => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
          entries.forEach(entry => {
=======
          entries.forEach((entry) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
<<<<<<< HEAD
          });
        },        { threshold: 0.3 }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));

      return () => observer.disconnect();    }
=======
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
        { threshold: 0.3 }
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, []);

  if (isLoading) {
    return <QuantumLoadingFallback />;
  }

  const allServices = [
<<<<<<< HEAD
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices,
=======
<<<<<<< HEAD
<<<<<<< HEAD
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices,
=======
    ...innovative2046AIServices;
    ...innovative2046ITServices;
    ...innovative2046MicroSAASServices
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    'all',
    ...Array.from(new Set(allServices.map(s => s.category))),
  ];

  return (
    <Layout>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>
        {/* Enhanced animated background */}
        <div className='absolute inset-0'>
          {/* Quantum grid effect */}
<<<<<<< HEAD
          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>
=======
<<<<<<< HEAD
          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>

=======
    ...innovative2046AIServices;
    ...innovative2046ITServices;
    ...innovative2046MicroSAASServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch
  });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          {/* Quantum grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {/* Floating orbs */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
<<<<<<< HEAD
              className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30'
=======
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: Math.random() * 100 + '%',
<<<<<<< HEAD
                top: Math.random() * 100 + '%',
              }}            />
=======
<<<<<<< HEAD
                top: Math.random() * 100 + '%',
              }}
=======
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50];
                y: [0, Math.random() * 100 - 50];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                top: Math.random() * 100 + '%'}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ))}
        </div>

        {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <section
          id='hero'
          className='relative z-10 min-h-screen flex items-center justify-center px-4'
        >
<<<<<<< HEAD
          <div className='text-center max-w-6xl mx-auto'>            <motion.div
=======
          <div className='text-center max-w-6xl mx-auto'>
=======
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
<<<<<<< HEAD
              <motion.h1
                className='text-6xl md:text-8xl font-bold text-white mb-8'                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <motion.h1
                className='text-6xl md:text-8xl font-bold text-white mb-8'
=======
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-8"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'>
                  Zion Tech Group
                </span>
              </motion.h1>

              <motion.p
<<<<<<< HEAD
                className='text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
=======
                className='text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto'
=======
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Revolutionary{' '}
                <span className='text-cyan-400 font-semibold'>Quantum AI</span>,
                <span className='text-purple-400 font-semibold'>
                  {' '}
                  Neural Interfaces
                </span>
                , and
                <span className='text-cyan-400 font-semibold'>
                  {' '}
                  Space Technology
                </span>{' '}
                Solutions
<<<<<<< HEAD
=======
=======
                Revolutionary <span className="text-cyan-400 font-semibold">Quantum AI</span>,
                <span className="text-purple-400 font-semibold"> Neural Interfaces</span>, and 
                <span className="text-cyan-400 font-semibold"> Space Technology</span> Solutions
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </motion.p>

              <motion.div
<<<<<<< HEAD
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Link href='/services'>
=======
<<<<<<< HEAD
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
=======
                Revolutionary <span className="text-cyan-400 font-semibold">Quantum AI</span>,
                <span className="text-purple-400 font-semibold"> Neural Interfaces</span>, and 
                <span className="text-cyan-400 font-semibold"> Space Technology</span> Solutions
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
<<<<<<< HEAD
<<<<<<< HEAD
                <Link href='/services'>
=======
                <Link href="/services">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
                  >
                    Explore Services <ArrowRight className='w-5 h-5' />
                  </motion.button>
                </Link>

                <Link href='/contact'>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'
                  >
<<<<<<< HEAD
                    Get Started <Rocket className='w-5 h-5' />                  </motion.button>
=======
<<<<<<< HEAD
                    Get Started <Rocket className='w-5 h-5' />
=======
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Explore Services <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    Get Started <Rocket className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    Get Started <Rocket className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </motion.button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
<<<<<<< HEAD
              className='bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30'              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30'
=======
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                <div className='flex flex-col items-center'>
                  <Phone className='w-6 h-6 text-cyan-400 mb-2' />
                  <p className='text-sm text-gray-300'>Phone</p>
                  <p className='text-white font-semibold'>+1 302 464 0950</p>
<<<<<<< HEAD
=======
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
                <div className='flex flex-col items-center'>
                  <Mail className='w-6 h-6 text-purple-400 mb-2' />
                  <p className='text-sm text-gray-300'>Email</p>
                  <p className='text-white font-semibold'>
                    kleber@ziontechgroup.com
                  </p>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='flex flex-col items-center'>
                  <MapPin className='w-6 h-6 text-cyan-400 mb-2' />
                  <p className='text-sm text-gray-300'>Address</p>
                  <p className='text-white font-semibold text-sm'>
                    364 E Main St STE 1008
                    <br />
                    Middletown DE 19709
<<<<<<< HEAD
                  </p>                </div>
=======
                  </p>
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase Section */}
<<<<<<< HEAD
        <section id='services' className='relative z-10 py-20 px-4'>
          <div className='max-w-7xl mx-auto'>            <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section id='services' className='relative z-10 py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
=======
        <section id="services" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section id="services" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Revolutionary Services
                </span>
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our cutting-edge quantum AI, neural interface, and
                space technology solutions that are transforming industries
                worldwide.              </p>
=======
<<<<<<< HEAD
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our cutting-edge quantum AI, neural interface, and
                space technology solutions that are transforming industries
                worldwide.
=======
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='mb-12'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-12'
=======
              className="mb-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='relative flex-1 max-w-md'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <input
                    type='text'
                    placeholder='Search services...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg'
                  />
                </div>
<<<<<<< HEAD

                <div className='flex gap-2'>
                  {categories.map(category => (                    <button
=======
<<<<<<< HEAD

                <div className='flex gap-2'>
                  {categories.map(category => (
=======
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg"
                  />
                </div>
                
                <div className="flex gap-2">
                  {categories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                
                <div className="flex gap-2">
                  {categories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'            >
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
=======
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
<<<<<<< HEAD
                  className='group'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='group'
=======
                  className="group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                        <Brain className='w-6 h-6 text-white' />
                      </div>
                      <div className='text-right'>
                        <span className='inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full'>
                          {service.category}
                        </span>
<<<<<<< HEAD
                        <div className='flex items-center gap-1 mt-1'>                          {[...Array(5)].map((_, i) => (
=======
<<<<<<< HEAD
                        <div className='flex items-center gap-1 mt-1'>
=======
                  className="group"
                >
                  <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1 mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="flex items-center gap-1 mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          {[...Array(5)].map((_, i) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
<<<<<<< HEAD
                          <span className='text-gray-400 text-sm ml-1'>
                            ({service.reviews})
                          </span>                        </div>
                      </div>
                    </div>

                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                          <span className='text-gray-400 text-sm ml-1'>
                            ({service.reviews})
                          </span>
=======
                          <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
=======
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {service.name}
                    </h3>

                    <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                      {service.description}
                    </p>

<<<<<<< HEAD
                    <div className='mb-4'>
                      <div className='flex items-center gap-2 text-cyan-400 font-semibold'>
                        <DollarSign className='w-4 h-4' />                        <span>{service.price}</span>
                      </div>
                    </div>

=======
<<<<<<< HEAD
                    <div className='mb-4'>
                      <div className='flex items-center gap-2 text-cyan-400 font-semibold'>
                        <DollarSign className='w-4 h-4' />
=======
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <DollarSign className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <DollarSign className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        <span>{service.price}</span>
                      </div>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='space-y-2 mb-6'>
                      <h4 className='text-sm font-semibold text-white'>
                        Key Features:
                      </h4>
                      <ul className='space-y-1'>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className='flex items-start gap-2 text-xs text-gray-300'
                          >
<<<<<<< HEAD
                            <CheckCircle className='w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0' />                            <span>{feature}</span>
=======
                            <CheckCircle className='w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0' />
=======
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            <span>{feature}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          </li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    <div className='flex items-center justify-between'>                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='flex items-center justify-between'>
=======
                    <div className="flex items-center justify-between">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'
=======
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        >
                          Learn More <ArrowUpRight className='w-4 h-4' />
                        </motion.button>
                      </Link>
<<<<<<< HEAD

                      <div className='text-right text-xs text-gray-400'>
=======
                      
                      <div className="text-right text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{service.customers}</span>
                        </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        <div className='flex items-center gap-1'>
                          <Users className='w-3 h-3' />
                          <span>{service.customers}</span>
                        </div>
<<<<<<< HEAD
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3' />                          <span>{service.launchDate}</span>
=======
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          <span>{service.launchDate}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mt-20'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mt-20'
=======
              className="text-center mt-20"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <div className='bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30'>
                <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Ready to Transform Your Business?
                </h3>
                <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                  Join the future with our revolutionary quantum AI, neural
                  interface, and space technology solutions.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link href='/contact'>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                      className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                    >
                      Get Started Today
                    </motion.button>
                  </Link>
                  <Link href='/services'>
=======
<<<<<<< HEAD
                      className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
=======
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
                      Get Started Today
                    </motion.button>
                  </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link href='/services'>
=======
                  <Link href="/services">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                      className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'                    >
=======
<<<<<<< HEAD
                      className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'
=======
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover: bg-cyan-400 hover:text-gray-900 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover: bg-cyan-400 hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      View All Services
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
  );
};

export default Homepage2046;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default Homepage2046;
=======
  )
};

export default Homepage2046;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default Homepage2046;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

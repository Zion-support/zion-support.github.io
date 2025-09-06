<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2038 from './ui/UltraFuturisticServiceCard2038';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
import UltraFuturisticServiceCard2038 from './ui / UltraFuturisticServiceCard2038';
import Link from 'next / link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Cpu, Cloud, Lock, Users, Award;
  CheckCircle, Sparkles, Infinity, Zap as Lightning
} from 'lucide-react';
// Import new services;
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices.filter(s => s.popular).slice(0, 3);
  const featuredIT = innovative2038ITServices.filter(s => s.popular).slice(0, 3);
  const featuredAI = innovative2038AIServices.filter(s => s.popular).slice(0, 3);
  return (
    <Layout>;
      {/* Main Content */}
          <div className='absolute inset-0 pointer-events-none'>;
            <div className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse'></div>;
            <div className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000'></div>;
            <div className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000'></div>;
            <div className='absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500'></div>;
            <div className='absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500'></div>;
          </div>;
          <div className='text-center max-w-5xl mx-auto relative z-10'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='space-y-8'>        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">;
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">;
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>;
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>;
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>;
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500"></div>;
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500"></div>;
          </div>;
          <div className="text-center max-w-5xl mx-auto relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Company Badge */}
              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
import {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import Layout from './layout/Layout',
import UltraFuturisticServiceCard2038 from './ui/UltraFuturisticServiceCard2038',
import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2038 from './ui/UltraFuturisticServiceCard2038';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
import Layout from './layout / Layout';
import UltraFuturisticServiceCard2038 from './ui / UltraFuturisticServiceCard2038';
import Link from 'next / link';
import { motion } from 'framer-motion';

  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Cpu, Cloud, Lock, Users, Award;
  CheckCircle, Sparkles, Infinity, Zap as Lightning;

=======
import { 
  ArrowRight, Star, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Cpu, Cloud, Lock, Users, Award;
  CheckCircle, Sparkles, Infinity, Zap as Lightning
} from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


// Import new services;
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';

import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

<<<<<<< HEAD
const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices
    .filter(s => s.popular)
    .slice(0, 3);
  const featuredIT = innovative2038ITServices
    .filter(s => s.popular)
    .slice(0, 3);
  const featuredAI = innovative2038AIServices
    .filter(s => s.popular)
    .slice(0, 3);
  return (
    <Layout>
      {/* Main Content */}
      <main className='relative z-10'>const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices.filter(s => s.popular).slice(0, 3);
  const featuredIT = innovative2038ITServices.filter(s => s.popular).slice(0, 3);
  const featuredAI = innovative2038AIServices.filter(s => s.popular).slice(0, 3);
  return (
    <Layout>
      {/* Main Content */}

=======

          {/* Background Elements */}

          <div className="absolute inset-0 pointer-events-none">;
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>;
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>;
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>;
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500"></div>;
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500"></div>;
          </div>;

          <div className="text-center max-w-5xl mx-auto relative z-10">;
            <motion&& motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

=======
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              {/* Company Badge */}
              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight
  Star
  Brain
  Atom
  Shield
  Zap
  TrendingUp
  Globe
  Rocket
  Target
  Cpu
  Cloud
  Lock
  Users
  Award
  CheckCircle
  Sparkles
  Infinity
  Zap as Lightning;} from 'lucide-react';import {
  ArrowRight, Star
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Rocket,
  Target,
  Cpu,
  Cloud,
  Lock,
  Users,
  Award,
  CheckCircle,
  Sparkles,
<<<<<<< HEAD

  Infinity,;
  Zap as Lightning,;} from 'lucide-react';import {
  ArrowRight, Star, ;


=======
<<<<<<< HEAD
  Infinity,
  Zap as Lightning,} from 'lucide-react';import {
  ArrowRight, Star,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Cpu, Cloud, Lock, Users, Award;
  CheckCircle, Sparkles, Infinity, Zap as Lightning;
// Import new services;
import { innovative2038MicroSaasServices } from '../data / innovative - 2038 - micro - saas - services';
import { innovative2038ITServices } from '../data / innovative - 2038 - it - services';
import { innovative2038AIServices } from '../data / innovative - 2038 - ai - services';
const Homepage2038: React.FC = () => {
  // Get featured services from each category;
  const featuredMicroSaas = innovative2038MicroSaasServices;
    .filter (string => s.popular);
    .slice (0, 3);
  const featuredIT = innovative2038ITServices;
    .filter (string => s.popular);
    .slice (0, 3);
  const featuredAI = innovative2038AIServices;
    .filter (string => s.popular);
    .slice (0, 3);
  return (
    <Layout>;
      {/* Main Content */}
      <main className='relative z - 10'>const Homepage2038: React.FC = () => {
  // Get featured services from each category;
  const featuredMicroSaas = innovative2038MicroSaasServices.filter (string => s.popular).slice (0, 3);
  const featuredIT = innovative2038ITServices.filter (string => s.popular).slice (0, 3);
  const featuredAI = innovative2038AIServices.filter (string => s.popular).slice (0, 3);
  return (
    <Layout>;
      {/* Main Content */}
<<<<<<< HEAD





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'              className="space-y-8"
            >

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <main className='relative z - 10'>;
        {/* Hero Section */}
        <section className='min - h-screen flex items - center justify - center px - 4 relative overflow - hidden'>;
          {/* Background Elements */}
          <div className='absolute inset - 0 pointer - events - none'>;
            <div className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg animate - pulse'></div>;
            <div className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full animate - pulse delay - 1000'></div>;
            <div className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45 animate - pulse delay - 2000'></div>;
            <div className='absolute top - 1/2 left - 1/4 w - 16 h - 16 border border - blue - 400 / 20 rounded - full animate - pulse delay - 1500'></div>;
            <div className='absolute top - 1/3 right - 1/4 w - 20 h - 20 border border - green - 400 / 20 transform rotate - 12 animate - pulse delay - 500'></div>;
          </div>;
          <div className='text - center max - w-5xl mx - auto relative z - 10'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='space - y-8'            >        {/* Hero Section */}
        <section className="min - h-screen flex items - center justify - center px - 4 relative overflow - hidden">;
          {/* Background Elements */}
          <div className="absolute inset - 0 pointer - events - none">;
            <div className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg animate - pulse"></div>;
            <div className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full animate - pulse delay - 1000"></div>;
            <div className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45 animate - pulse delay - 2000"></div>;
            <div className="absolute top - 1/2 left - 1/4 w - 16 h - 16 border border - blue - 400 / 20 rounded - full animate - pulse delay - 1500"></div>;
            <div className="absolute top - 1/3 right - 1/4 w - 20 h - 20 border border - green - 400 / 20 transform rotate - 12 animate - pulse delay - 500"></div>;
          </div>;
          <div className="text - center max - w-5xl mx - auto relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='space - y-8'              className="space - y-8";
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Company Badge */}
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <Star className='w-4 h-4' />
                <span>Innovation Leader 2038</span>
                <Sparkles className='w-4 h-4' />
              </motion.div>
              <h1 className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight'>
                Zion Tech Group
              </h1>
              <p className='text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed'>
                Pioneering the future of technology with revolutionary AI
                quantum computing, and consciousness evolution solutions
              </p>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm'>;
                <Star className='w-4 h-4' />;
                <span>Innovation Leader 2038</span>;
                <Sparkles className='w-4 h-4' />;
              </motion && motion.div>;
              <h1 className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight'>;
                Zion Tech Group;
              </h1>;
              <p className='text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed'>;
                Pioneering the future of technology with revolutionary AI,;
                quantum computing, and consciousness evolution solutions;
              </p>;
              {/* Enhanced CTA Section */}
              <div className='flex flex-col sm:flex-row gap-6 justify-center mb-10'>;
                <Link href='/get-started'>;
                  <motion&& motion.button
                    className='group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg'
<<<<<<< HEAD

                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >

=======
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2038</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions
              </p>
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/get-started">
                  <motion.button
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm"
<<<<<<< HEAD
=======

  return (_<Layout>
      {/* Main Content */}
      <main className=&quot;relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;min-h-screen flex items-center justify-center px-4 relative overflow-hidden&quot;>
          {/* Background Elements */}
          <div className=&quot;absolute inset-0 pointer-events-none&quot;>
            <div className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse&quot;></div>
            <div className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000&quot;></div>
            <div className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000&quot;></div>
            <div className=&quot;absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500&quot;></div>
            <div className=&quot;absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500&quot;></div>
          </div>
          
          <div className=&quot;text-center max-w-5xl mx-auto relative z-10&quot;>
=======
  Infinity,;
  Zap as Lightning,;} from 'lucide-react';import {
  ArrowRight, Star, ;
  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Cpu, Cloud, Lock, Users, Award;
  CheckCircle, Sparkles, Infinity, Zap as Lightning

// Import new services
import { innovative2038MicroSaasServices  } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices  } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices
    .filter(s => s.popular)
    .slice(0, 3);
  const featuredIT = innovative2038ITServices
    .filter(s => s.popular)
    .slice(0, 3);
  const featuredAI = innovative2038AIServices
    .filter(s => s.popular)
    .slice(0, 3);
  return (
    <Layout>
      {/* Main Content */}
      <main className='relative z-10'>const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices.filter(s => s.popular).slice(0, 3);
  const featuredIT = innovative2038ITServices.filter(s => s.popular).slice(0, 3);
  const featuredAI = innovative2038AIServices.filter(s => s.popular).slice(0, 3);
  return (
    <Layout>
      {/* Main Content */}
      <main className='relative z-10'>
        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse'></div>
            <div className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000'></div>
            <div className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000'></div>
            <div className='absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500'></div>
            <div className='absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500'></div>
          </div>
          <div className='text-center max-w-5xl mx-auto relative z-10'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'            >        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500"></div>
          </div>
          <div className="text-center max-w-5xl mx-auto relative z-10">

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className=&quot;space-y-8&quot;
            >
              {_/* Company Badge */}
=======
              className='space-y-8'              className="space-y-8"
            >

              {/* Company Badge */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
                className=&quot;inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm&quot;
              >
                <Star className=&quot;w-4 h-4&quot; />
                <span>Innovation Leader 2038</span>
                <Sparkles className=&quot;w-4 h-4&quot; />
              </motion.div>
              
              <h1 className=&quot;text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight&quot;>
                Zion Tech Group
              </h1>
              <p className=&quot;text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed&quot;>
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions
              </p>
              
              {/* Enhanced CTA Section */}
              <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center mb-10&quot;>
                <Link href=&quot;/get-started&quot;>
                  <motion.button 
                    className=&quot;group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className=&quot;flex items-center gap-3&quot;>
                      Get Started
                      <ArrowRight className=&quot;w-6 h-6 group-hover:translate-x-1 transition-transform&quot; />
                    </span>
                  </motion.button>
                </a>
                <Link href=&quot;/services&quot;>
                  <motion.button 
                    className=&quot;px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm&quot;

=======
                className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm'

              >
                <Star className='w-4 h-4' />
                <span>Innovation Leader 2038</span>
                <Sparkles className='w-4 h-4' />
              </motion.div>
              <h1 className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight'>
                Zion Tech Group
              </h1>
              <p className='text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed'>
                Pioneering the future of technology with revolutionary AI
                quantum computing, and consciousness evolution solutions
              </p>
              {/* Enhanced CTA Section */}
              <div className='flex flex-col sm:flex-row gap-6 justify-center mb-10'>
                <Link href='/get-started'>
                  <motion.button
                    className='group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className='flex items-center gap-3'>
                      Get Started
                      <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </motion.button>
                </Link>
                <Link href='/services'>
                  <motion.button
                    className='px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm'                    whileHover={{ scale: 1.05 }}              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2038</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions
              </p>
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/get-started">
                  <motion.button
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
<<<<<<< HEAD
                </Link>
              </div>
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
</Link>
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    <span className='flex items-center gap-3'>;
                      Get Started;
                      <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />;
                    </span>;
                  </motion && motion.button>;
                </Link>;
                <Link href='/services'>;
                  <motion&& motion.button
                    className='px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm'                    whileHover={{ scale: 1 && 1.05 }}>;
                <Star className="w-4 h-4" />;
                <span>Innovation Leader 2038</span>;
                <Sparkles className="w-4 h-4" />;
              </motion && motion.div>;
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">;
                Zion Tech Group;
              </h1>;
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">;
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions;
              </p>;
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">;
                <Link href="/get-started">;
                  <motion&& motion.button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    <span className="flex items-center gap-3">;
                      Get Started;
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />;
                    </span>;
                  </motion && motion.button>;
                </Link>;
                <Link href="/services">;
                  <motion&& motion.button 
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    Explore Services;
                  </motion && motion.button>;
                </Link>;
              </div>;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Trust Indicators */}
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


=======
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
              >
=======
                </Link>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400'
              >              >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
                className='flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400'>              >;
                <div className="flex items-center space-x-2">;
                  <Shield className="w-5 h-5 text-green-400" />;
                  <span>Enterprise Security</span>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Globe className="w-5 h-5 text-blue-400" />;
                  <span>Global Reach</span>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <TrendingUp className="w-5 h-5 text-purple-400" />;
                  <span>Proven Results</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Shield className='w-5 h-5 text-green-400' />;
                  <span>Enterprise Security</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Globe className='w-5 h-5 text-blue-400' />;
                  <span>Global Reach</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <TrendingUp className='w-5 h-5 text-purple-400' />;
                  <span>Proven Results</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Award className='w-5 h-5 text-yellow-400' />                  <span>Industry Leader</span>                <div className="flex items-center space-x-2">;
                  <Award className="w-5 h-5 text-yellow-400" />;
                  <span>Industry Leader</span>;
                </div>;
              </motion && motion.div>;
            </motion && motion.div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Company Stats */}
        <section className='py-24 px-4 bg-black/30 relative'>;
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5'></div>;
          <div className='max-w-7xl mx-auto relative z-10'>            <motion && motion.div        <section className="py-24 px-4 bg-black/30 relative">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>;
          <div className="max-w-7xl mx-auto relative z-10">;
            <motion&& motion.div

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Company Stats */}
        <section className="py-24 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            >
              <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 
=======
              className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'

            >
              <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors'>
                  100+
                </div>
                <div className='text-gray-300 text-lg'>AI Services</div>
                <div className='text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  Cutting-edge solutions
                </div>
              </motion.div>
              <motion.div
                className='p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors'>
                  200+
                </div>
                <div className='text-gray-300 text-lg'>Quantum Solutions</div>
                <div className='text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  Next-gen computing
                </div>
              </motion.div>
              <motion.div
                className='p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors'>
                  24/7
                </div>
                <div className='text-gray-300 text-lg'>
                  Autonomous Operations
                </div>
                <div className='text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  Always available
                </div>
              </motion.div>
              <motion.div
                className='p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'
<<<<<<< HEAD

              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 

=======
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors'>
                  ∞
                </div>
                <div className='text-gray-300 text-lg'>
                  Future Possibilities
                </div>
                <div className='text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  Unlimited potential
                </div>              </motion.div>            >
              <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">100+</div>
                <div className="text-gray-300 text-lg">AI Services</div>
                <div className="text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">200+</div>
                <div className="text-gray-300 text-lg">Quantum Solutions</div>
                <div className="text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operations</div>
                <div className="text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-lg">Future Possibilities</div>
                <div className="text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

                whileHover={{ scale: 1 && 1.05 }}>;
=======
<<<<<<< HEAD
whileHover={{ scale: 1 && 1.05 }}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className='text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors'>;
                  ∞;
                </div>;
                <div className='text-gray-300 text-lg'>;
                  Future Possibilities;
                </div>;
                <div className='text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>;
                  Unlimited potential;
                </div>              </motion && motion.div>            >;
              <motion&& motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1 && 1.05 }}>;
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">100+</div>;
                <div className="text-gray-300 text-lg">AI Services</div>;
                <div className="text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>;
              </motion && motion.div>;
              <motion&& motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1 && 1.05 }}>;
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">200+</div>;
                <div className="text-gray-300 text-lg">Quantum Solutions</div>;
                <div className="text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>;
              </motion && motion.div>;
              <motion&& motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1 && 1.05 }}>;
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>;
                <div className="text-gray-300 text-lg">Autonomous Operations</div>;
                <div className="text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>;
              </motion && motion.div>;
              <motion&& motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1 && 1.05 }}>;
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>;
                <div className="text-gray-300 text-lg">Future Possibilities</div>;
                <div className="text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>;
              </motion && motion.div>;
            </motion && motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Featured AI Services */}
        <section className='py-24 px-4'>;
          <div className='max-w-7xl mx-auto'>            <motion && motion.div        <section className="py-24 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Featured AI Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-20'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="text-center mb-20"
            >
=======
              className='text-center mb-20'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
                Revolutionary AI Services
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                Experience the next evolution of artificial intelligence with
                our consciousness evolution and quantum AI platforms
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredAI.map((service, index) => (            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experience the next evolution of artificial intelligence with our consciousness evolution and quantum AI platforms
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredAI.map((service, index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center mb-20'>;
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>;
                Revolutionary AI Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>;
                Experience the next evolution of artificial intelligence with;
                our consciousness evolution and quantum AI platforms;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredAI && featuredAI.map((service, index) => (            >;
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">;
                Revolutionary AI Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">;
                Experience the next evolution of artificial intelligence with our consciousness evolution and quantum AI platforms;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
              {featuredAI && featuredAI.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <UltraFuturisticServiceCard2038
                    service={service}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              ))}

                    variant="consciousness"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  />
                </motion.div>

              ))}
            </div>

            <div className="text-center">
=======
<<<<<<< HEAD
                    variant="consciousness"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    variant='consciousness'                  />                    variant="consciousness"
                    variant='consciousness'                  />

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  />
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
<div className="text-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link href="/ai-services">
                <motion.button
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
            <div className='text-center'>
              <Link href='/ai-services'>
                <motion.button
                  className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1.05 }}            <div className="text-center">
              <Link href="/ai-services">
                <motion.button
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  whileTap={{ scale: 0.95 }}
                >
                  View All AI Services
                </motion.button>
<<<<<<< HEAD
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Featured Micro SAAS Services */}
        <section className='py-24 px-4 bg-black/20'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-20'

=======

            </div>;

=======
<<<<<<< HEAD
</Link>
            </div>
          </div>
        </section>
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className='text-center'>;
              <Link href='/ai-services'>;
                <motion&& motion.button
                  className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1 && 1.05 }}            <div className="text-center">;
              <Link href="/ai-services">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileTap={{ scale: 0 && 0.95 }}>;
                  View All AI Services;
                </motion && motion.button>;
                className='inline - flex items - center space - x-2 px - 6 py - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 400 / 30 rounded - full text - cyan - 400 text - sm font - medium backdrop - blur - sm';
              >;
                <Star className='w - 4 h - 4' />;
                <span > Innovation Leader 2038</span>;
                <Sparkles className='w - 4 h - 4' />;
              </motion.div>;
              <h1 className='text - 6xl md:text - 8xl font - bold mb - 8 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent leading - tight'>;
                Zion Tech Group;
              </h1>;
              <p className='text - 2xl md:text - 3xl text - gray - 300 mb - 10 max - w-4xl mx - auto leading - relaxed'>;
                Pioneering the future of technology with revolutionary AI,
                quantum computing, and consciousness evolution solutions;
              </p>;
              {/* Enhanced CTA Section */}
              <div className='flex flex - col sm:flex - row gap - 6 justify - center mb - 10'>;
                <Link href='/get - started'>;
                  <motion.button;
                    className='group px - 10 py - 5 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25 text - lg';
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <span className='flex items - center gap - 3'>;
                      Get Started;
                      <ArrowRight className='w - 6 h - 6 group - hover:translate - x-1 transition - transform' />;
                    </span>;
                  </motion.button>;
                </Link>;
                <Link href='/services'>;
                  <motion.button;
                    className='px - 10 py - 5 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg backdrop - blur - sm'                    while_hover={{ scale: 1.05 }}              >;
                <Star className="w - 4 h - 4" />;
                <span > Innovation Leader 2038</span>;
                <Sparkles className="w - 4 h - 4" />;
              </motion.div>;
              <h1 className="text - 6xl md:text - 8xl font - bold mb - 8 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent leading - tight">;
                Zion Tech Group;
              </h1>;
              <p className="text - 2xl md:text - 3xl text - gray - 300 mb - 10 max - w-4xl mx - auto leading - relaxed">;
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions;
              </p>;
              {/* Enhanced CTA Section */}
              <div className="flex flex - col sm:flex - row gap - 6 justify - center mb - 10">;
                <Link href="/get - started">;
                  <motion.button;
                    className="group px - 10 py - 5 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25 text - lg";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <span className="flex items - center gap - 3">;
                      Get Started;
                      <ArrowRight className="w - 6 h - 6 group - hover:translate - x-1 transition - transform" />;
                    </span>;
                  </motion.button>;
                </Link>;
                <Link href="/services">;
                  <motion.button;
                    className="px - 10 py - 5 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg backdrop - blur - sm";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    Explore Services;
                  </motion.button>;
                </Link>;
              </div>;
              {/* Trust Indicators */}
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex - wrap items - center justify - center gap - 8 text - sm text - gray - 400';
              >              >;
                <div className="flex items - center space - x-2">;
                  <Shield className="w - 5 h - 5 text - green - 400" />;
                  <span > Enterprise Security</span>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Globe className="w - 5 h - 5 text - blue - 400" />;
                  <span > Global Reach</span>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <TrendingUp className="w - 5 h - 5 text - purple - 400" />;
                  <span > Proven Results</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Shield className='w - 5 h - 5 text - green - 400' />;
                  <span > Enterprise Security</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Globe className='w - 5 h - 5 text - blue - 400' />;
                  <span > Global Reach</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <TrendingUp className='w - 5 h - 5 text - purple - 400' />;
                  <span > Proven Results</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Award className='w - 5 h - 5 text - yellow - 400' />                  <span > Industry Leader</span>                <div className="flex items - center space - x-2">;
                  <Award className="w - 5 h - 5 text - yellow - 400" />;
                  <span > Industry Leader</span>;
                </div>;
              </motion.div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Company Stats */}
        <section className='py - 24 px - 4 bg - black / 30 relative'>;
          <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 to - purple - 500 / 5'></div>;
          <div className='max - w-7xl mx - auto relative z - 10'>            <motion.div        <section className="py - 24 px - 4 bg - black / 30 relative">;
          <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 to - purple - 500 / 5"></div>;
          <div className="max - w-7xl mx - auto relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='grid grid - cols - 2 md:grid - cols - 4 gap - 8 text - center';
            >;
              <motion.div;
                className='p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300';
                while_hover={{ scale: 1.05 }}
              >;
                <div className='text - 5xl font - bold text - cyan - 400 mb - 3 group - hover:text - cyan - 300 transition - colors'>;
                  100+;
                </div>;
                <div className='text - gray - 300 text - lg'>AI Services</div>;
                <div className='text - sm text - cyan - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity'>;
                  Cutting - edge solutions;
                </div>;
              </motion.div>;
              <motion.div;
                className='p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300';
                while_hover={{ scale: 1.05 }}
              >;
                <div className='text - 5xl font - bold text - blue - 400 mb - 3 group - hover:text - blue - 300 transition - colors'>;
                  200+;
                </div>;
                <div className='text - gray - 300 text - lg'>Quantum Solutions</div>;
                <div className='text - sm text - blue - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity'>;
                  Next - gen computing;
                </div>;
              </motion.div>;
              <motion.div;
                className='p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300';
                while_hover={{ scale: 1.05 }}
              >;
                <div className='text - 5xl font - bold text - purple - 400 mb - 3 group - hover:text - purple - 300 transition - colors'>;
                  24 / 7;
                </div>;
                <div className='text - gray - 300 text - lg'>;
                  Autonomous Operations;
                </div>;
                <div className='text - sm text - purple - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity'>;
                  Always available;
                </div>;
              </motion.div>;
              <motion.div;
                className='p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300';
                while_hover={{ scale: 1.05 }}
              >;
                <div className='text - 5xl font - bold text - green - 400 mb - 3 group - hover:text - green - 300 transition - colors'>;
                  ∞;
                </div>;
                <div className='text - gray - 300 text - lg'>;
                  Future Possibilities;
                </div>;
                <div className='text - sm text - green - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity'>;
                  Unlimited potential;
                </div>              </motion.div>            >;
              <motion.div;
                className="p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300";
                while_hover={{ scale: 1.05 }}
              >;
                <div className="text - 5xl font - bold text - cyan - 400 mb - 3 group - hover:text - cyan - 300 transition - colors">100+</div>;
                <div className="text - gray - 300 text - lg">AI Services</div>;
                <div className="text - sm text - cyan - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity">Cutting - edge solutions</div>;
              </motion.div>;
              <motion.div;
                className="p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300";
                while_hover={{ scale: 1.05 }}
              >;
                <div className="text - 5xl font - bold text - blue - 400 mb - 3 group - hover:text - blue - 300 transition - colors">200+</div>;
                <div className="text - gray - 300 text - lg">Quantum Solutions</div>;
                <div className="text - sm text - blue - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity">Next - gen computing</div>;
              </motion.div>;
              <motion.div;
                className="p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300";
                while_hover={{ scale: 1.05 }}
              >;
                <div className="text - 5xl font - bold text - purple - 400 mb - 3 group - hover:text - purple - 300 transition - colors">24 / 7</div>;
                <div className="text - gray - 300 text - lg">Autonomous Operations</div>;
                <div className="text - sm text - purple - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity">Always available</div>;
              </motion.div>;
              <motion.div;
                className="p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300";
                while_hover={{ scale: 1.05 }}
              >;
                <div className="text - 5xl font - bold text - green - 400 mb - 3 group - hover:text - green - 300 transition - colors">∞</div>;
                <div className="text - gray - 300 text - lg">Future Possibilities</div>;
                <div className="text - sm text - green - 400 mt - 3 opacity - 0 group - hover:opacity - 100 transition - opacity">Unlimited potential</div>;
              </motion.div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured AI Services */}
        <section className='py - 24 px - 4'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 24 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 20';
            >;
              <h2 className='text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent'>;
                Revolutionary AI Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-4xl mx - auto'>;
                Experience the next evolution of artificial intelligence with;
                our consciousness evolution and quantum AI platforms;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>              {featuredAI.map ((service, index) => (            >;
              <h2 className="text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent">;
                Revolutionary AI Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-4xl mx - auto">;
                Experience the next evolution of artificial intelligence with our consciousness evolution and quantum AI platforms;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16">;
              {featuredAI.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticServiceCard2038;
                    service={service}
                    variant='consciousness'                  />                    variant="consciousness";
                  />;
                </motion.div>))}
            </div>;
            <div className='text - center'>;
              <Link href='/ai - services'>;
                <motion.button;
                  className='px - 8 py - 4 border - 2 border - purple - 400 text - purple - 400 font - semibold rounded - xl hover:bg - purple - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg'                  while_hover={{ scale: 1.05 }}            <div className="text - center">;
              <Link href="/ai - services">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - purple - 400 text - purple - 400 font - semibold rounded - xl hover:bg - purple - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg";
                  while_tap={{ scale: 0.95 }}
                >;
                  View All AI Services;
                </motion.button>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Link>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Featured Micro SAAS Services */}
        <section className="py-24 px-4 bg-black/20">
=======
              </Link>
            </div>
          </div>
        </section>
        {/* Featured Micro SAAS Services */}
        <section className='py-24 px-4 bg-black/20'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4 bg-black/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              className="text-center mb-20"
            >
=======
              className='text-center mb-20'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent'>
                Innovative Micro SAAS
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                Transform your business with our cutting-edge micro SAAS
                solutions designed for the future
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredMicroSaas.map((service, index) => (            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your business with our cutting-edge micro SAAS solutions designed for the future
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredMicroSaas.map((service, index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center mb-20'>;
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent'>;
                Innovative Micro SAAS;
              </h2>;
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>;
                Transform your business with our cutting-edge micro SAAS;
                solutions designed for the future;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredMicroSaas && featuredMicroSaas.map((service, index) => (            >;
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">;
                Innovative Micro SAAS;
              </h2>;
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">;
                Transform your business with our cutting-edge micro SAAS solutions designed for the future;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
              {featuredMicroSaas && featuredMicroSaas.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <UltraFuturisticServiceCard2038
                    service={service}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              ))}

                    variant="automation"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  />
                </motion.div>

              ))}
            </div>

            <div className="text-center">
=======
<<<<<<< HEAD
                    variant="automation"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    variant='automation'                  />                    variant="automation"
                    variant='automation'                  />

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  />
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
<div className="text-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
            <div className='text-center'>
              <Link href='/services'>
                <motion.button
                  className='px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1.05 }}            <div className="text-center">
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Services
                </motion.button>
<<<<<<< HEAD
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Featured IT Services */}
        <section className='py-24 px-4'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-20'

=======

            </div>;

=======
<<<<<<< HEAD
</Link>
            </div>
          </div>
        </section>
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className='text-center'>;
              <Link href='/services'>;
                <motion&& motion.button
                  className='px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1 && 1.05 }}            <div className="text-center">;
              <Link href="/services">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Explore All Services;
                </motion && motion.button>;
        {/* Featured Micro SAAS Services */}
        <section className='py - 24 px - 4 bg - black / 20'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 24 px - 4 bg - black / 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 20';
            >;
              <h2 className='text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - emerald - 400 to - cyan - 500 bg - clip - text text - transparent'>;
                Innovative Micro SAAS;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-4xl mx - auto'>;
                Transform your business with our cutting - edge micro SAAS;
                solutions designed for the future;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>              {featuredMicroSaas.map ((service, index) => (            >;
              <h2 className="text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - emerald - 400 to - cyan - 500 bg - clip - text text - transparent">;
                Innovative Micro SAAS;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-4xl mx - auto">;
                Transform your business with our cutting - edge micro SAAS solutions designed for the future;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16">;
              {featuredMicroSaas.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticServiceCard2038;
                    service={service}
                    variant='automation'                  />                    variant="automation";
                  />;
                </motion.div>))}
            </div>;
            <div className='text - center'>;
              <Link href='/services'>;
                <motion.button;
                  className='px - 8 py - 4 border - 2 border - emerald - 400 text - emerald - 400 font - semibold rounded - xl hover:bg - emerald - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg'                  while_hover={{ scale: 1.05 }}            <div className="text - center">;
              <Link href="/services">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - emerald - 400 text - emerald - 400 font - semibold rounded - xl hover:bg - emerald - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg";
                  while_tap={{ scale: 0.95 }}
                >;
                  Explore All Services;
                </motion.button>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Link>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Featured IT Services */}
        <section className="py-24 px-4">
=======
              </Link>
            </div>
          </div>
        </section>
        {/* Featured IT Services */}
        <section className='py-24 px-4'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              className="text-center mb-20"
            >
=======
              className='text-center mb-20'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
                Advanced IT Infrastructure
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                Build the future with our quantum cloud infrastructure and
                AI-powered DevOps automation
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredIT.map((service, index) => (            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Advanced IT Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Build the future with our quantum cloud infrastructure and AI-powered DevOps automation
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredIT.map((service, index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center mb-20'>;
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>;
                Advanced IT Infrastructure;
              </h2>;
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>;
                Build the future with our quantum cloud infrastructure and;
                AI-powered DevOps automation;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {featuredIT && featuredIT.map((service, index) => (            >;
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">;
                Advanced IT Infrastructure;
              </h2>;
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">;
                Build the future with our quantum cloud infrastructure and AI-powered DevOps automation;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
              {featuredIT && featuredIT.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <UltraFuturisticServiceCard2038
                    service={service}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              ))}

                    variant="quantum"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  />
                </motion.div>

              ))}
            </div>

            <div className="text-center">
=======
<<<<<<< HEAD
                    variant="quantum"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    variant='quantum'                  />                    variant="quantum"
                    variant='quantum'                  />

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  />
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
<div className="text-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link href="/it-services">
                <motion.button
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
            <div className='text-center'>
              <Link href='/it-services'>
                <motion.button
                  className='px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1.05 }}            <div className="text-center">
              <Link href="/it-services">
                <motion.button
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  whileTap={{ scale: 0.95 }}
                >
                  View All IT Services
                </motion.button>
<<<<<<< HEAD
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Why Choose Us */}
        <section className='py-24 px-4 bg-black/30'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-20'

=======

            </div>;

=======
<<<<<<< HEAD
</Link>
            </div>
          </div>
        </section>
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className='text-center'>;
              <Link href='/it-services'>;
                <motion&& motion.button
                  className='px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                  whileHover={{ scale: 1 && 1.05 }}            <div className="text-center">;
              <Link href="/it-services">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileTap={{ scale: 0 && 0.95 }}>;
                  View All IT Services;
                </motion && motion.button>;
        {/* Featured IT Services */}
        <section className='py - 24 px - 4'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 24 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 20';
            >;
              <h2 className='text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - blue - 400 to - indigo - 500 bg - clip - text text - transparent'>;
                Advanced IT Infrastructure;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-4xl mx - auto'>;
                Build the future with our quantum cloud infrastructure and;
                AI - powered DevOps automation;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>              {featuredIT.map ((service, index) => (            >;
              <h2 className="text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - blue - 400 to - indigo - 500 bg - clip - text text - transparent">;
                Advanced IT Infrastructure;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-4xl mx - auto">;
                Build the future with our quantum cloud infrastructure and AI - powered DevOps automation;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16">;
              {featuredIT.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticServiceCard2038;
                    service={service}
                    variant='quantum'                  />                    variant="quantum";
                  />;
                </motion.div>))}
            </div>;
            <div className='text - center'>;
              <Link href='/it - services'>;
                <motion.button;
                  className='px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - xl hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg'                  while_hover={{ scale: 1.05 }}            <div className="text - center">;
              <Link href="/it - services">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - xl hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg";
                  while_tap={{ scale: 0.95 }}
                >;
                  View All IT Services;
                </motion.button>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Link>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Why Choose Us */}
        <section className="py-24 px-4 bg-black/30">
=======
              </Link>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className='py-24 px-4 bg-black/30'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-24 px-4 bg-black/30">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                We're not just building technology - we're shaping the future of
                human consciousness and computing
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Brain className='w-12 h-12' />
                  title: 'AI Consciousness Evolution'
                  description:

<<<<<<< HEAD
=======

                    'Leading the development of artificial consciousness and emotional intelligence',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: <Atom className='w-12 h-12' />,
                  title: 'Quantum Computing Power',
                  description:
                    'Access to the most advanced quantum computing capabilities available',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: <Shield className='w-12 h-12' />,
                  title: 'Future-Proof Security',
                  description:
                    'Quantum-resistant encryption and zero-trust security frameworks',
                  color: 'from-red-500 to-orange-500',
                },
                {
                  icon: <Rocket className='w-12 h-12' />,
                  title: 'Innovation First',
                  description:
                    "Constantly pushing the boundaries of what's possible in technology",
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: <Users className='w-12 h-12' />,
                  title: 'Global Expertise',
                  description:
                    'World-class team with experience across cutting-edge technologies',
                  color: 'from-indigo-500 to-purple-500',
                },
                {
                  icon: <Award className='w-12 h-12' />,
                  title: 'Proven Results',


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  description:
                    'Access to the most advanced quantum computing capabilities available'
                  color: 'from-blue-500 to-cyan-500'
                }
                {
                  icon: <Shield className='w-12 h-12' />
                  title: 'Future-Proof Security'
                  description:
                    'Quantum-resistant encryption and zero-trust security frameworks'
                  color: 'from-red-500 to-orange-500'
                }
                {
                  icon: <Rocket className='w-12 h-12' />
                  title: 'Innovation First'
                  description:
                    "Constantly pushing the boundaries of what's possible in technology"
                  color: 'from-green-500 to-emerald-500'
                }
                {
                  icon: <Users className='w-12 h-12' />
                  title: 'Global Expertise'
                  description:
                    'World-class team with experience across cutting-edge technologies'
                  color: 'from-indigo-500 to-purple-500'
                }
                {
                  icon: <Award className='w-12 h-12' />
                  title: 'Proven Results'
                  description:
                    'Track record of delivering transformative solutions to leading organizations'
                  color: 'from-yellow-500 to-orange-500'
                },              ].map((feature, index) => (                  icon: <Award className="w-12 h-12" />
                  title: "Proven Results"
                  description: "Track record of delivering transformative solutions to leading organizations"
                  color: "from-yellow-500 to-orange-500"
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>;
                We're not just building technology - we're shaping the future of;
                human consciousness and computing;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {[;
                {;
                  icon: <Brain className='w-12 h-12' />,;
                  title: 'AI Consciousness Evolution',;
                  description:;
                    'Leading the development of artificial consciousness and emotional intelligence',;
                  color: 'from-purple-500 to-pink-500',;
                },;
                {;
                  icon: <Atom className='w-12 h-12' />,;
                  title: 'Quantum Computing Power',;
                  description:;
                    'Access to the most advanced quantum computing capabilities available',;
                  color: 'from-blue-500 to-cyan-500',;
                },;
                {;
                  icon: <Shield className='w-12 h-12' />,;
                  title: 'Future-Proof Security',;
                  description:;
                    'Quantum-resistant encryption and zero-trust security frameworks',;
                  color: 'from-red-500 to-orange-500',;
                },;
                {;
                  icon: <Rocket className='w-12 h-12' />,;
                  title: 'Innovation First',;
                  description:;
                    "Constantly pushing the boundaries of what's possible in technology",;
                  color: 'from-green-500 to-emerald-500',;
                },;
                {;
                  icon: <Users className='w-12 h-12' />,;
                  title: 'Global Expertise',;
                  description:;
                    'World-class team with experience across cutting-edge technologies',;
                  color: 'from-indigo-500 to-purple-500',;
                },;
                {;
                  icon: <Award className='w-12 h-12' />,;
                  title: 'Proven Results',;
                  description:;
                    'Track record of delivering transformative solutions to leading organizations',;
                  color: 'from-yellow-500 to-orange-500',;
                },              ].map((feature, index) => (                  icon: <Award className="w-12 h-12" />,;
                  title: "Proven Results",;
                  description: "Track record of delivering transformative solutions to leading organizations",;
                  color: "from-yellow-500 to-orange-500";
                }
<<<<<<< HEAD
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'

=======
                <motion&& motion.div
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're not just building technology - we're shaping the future of human consciousness and computing
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Consciousness Evolution",
                  description: "Leading the development of artificial consciousness and emotional intelligence",
                  color: "from-purple-500 to-pink-500"
                };
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Computing Power",
                  description: "Access to the most advanced quantum computing capabilities available",
                  color: "from-blue-500 to-cyan-500"
                };
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Future-Proof Security",
                  description: "Quantum-resistant encryption and zero-trust security frameworks",
                  color: "from-red-500 to-orange-500"
                };
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Innovation First",
                  description: "Constantly pushing the boundaries of what's possible in technology",
                  color: "from-green-500 to-emerald-500"
                };
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Global Expertise",
                  description: "World-class team with experience across cutting-edge technologies",
                  color: "from-indigo-500 to-purple-500"
                };
                {
                  icon: <Award className="w-12 h-12" />,
        {/* Why Choose Us */}
        <section className='py - 24 px - 4 bg - black / 30'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 24 px - 4 bg - black / 30">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 20';
              <h2 className='text - 5xl md:text - 6xl font - bold mb - 8 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-4xl mx - auto'>;
                We're not just building technology - we're shaping the future of;
                human consciousness and computing;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              {[;
                {
                  icon: <Brain className='w - 12 h - 12' />,
                  title: 'AI Consciousness Evolution',
                  description:;
                    'Leading the development of artificial consciousness and emotional intelligence',
                  color: 'from - purple - 500 to - pink - 500',
                },
                {
                  icon: <Atom className='w - 12 h - 12' />,
                  title: 'Quantum Computing Power',
                  description:;
                    'Access to the most advanced quantum computing capabilities available',
                  color: 'from - blue - 500 to - cyan - 500',
                },
                {
                  icon: <Shield className='w - 12 h - 12' />,
                  title: 'Future - Proof Security',
                  description:;
                    'Quantum - resistant encryption and zero - trust security frameworks',
                  color: 'from - red - 500 to - orange - 500',
                },
                {
                  icon: <Rocket className='w - 12 h - 12' />,
                  title: 'Innovation First',
                  description:;
                    "Constantly pushing the boundaries of what's possible in technology",
                  color: 'from - green - 500 to - emerald - 500',
                },
                {
                  icon: <Users className='w - 12 h - 12' />,
                  title: 'Global Expertise',
                  description:;
                    'World - class team with experience across cutting - edge technologies',
                  color: 'from - indigo - 500 to - purple - 500',
                },
                {
                  icon: <Award className='w - 12 h - 12' />,
                  title: 'Proven Results',
                  description:;
                    'Track record of delivering transformative solutions to leading organizations',
                  color: 'from - yellow - 500 to - orange - 500',
                },              ].map ((feature, index) => (                  icon: <Award className="w - 12 h - 12" />,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  title: "Proven Results",
                  description: "Track record of delivering transformative solutions to leading organizations",
                  color: "from - yellow - 500 to - orange - 500";
                }
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  whileHover={{ scale: 1.05 }}
                >
=======
                  className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
=======
              className='text-center mb-20'

            >
              <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                We're not just building technology - we're shaping the future of
                human consciousness and computing
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Brain className='w-12 h-12' />
                  title: 'AI Consciousness Evolution'
                  description:
                    'Leading the development of artificial consciousness and emotional intelligence'
                  color: 'from-purple-500 to-pink-500'
                }
                {
                  icon: <Atom className='w-12 h-12' />
                  title: 'Quantum Computing Power'
                    'Leading the development of artificial consciousness and emotional intelligence',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: <Atom className='w-12 h-12' />,
                  title: 'Quantum Computing Power',
                  description:
                    'Access to the most advanced quantum computing capabilities available',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: <Shield className='w-12 h-12' />,
                  title: 'Future-Proof Security',
                  description:
                    'Quantum-resistant encryption and zero-trust security frameworks',
                  color: 'from-red-500 to-orange-500',
                },
                {
                  icon: <Rocket className='w-12 h-12' />,
                  title: 'Innovation First',
                  description:
                    "Constantly pushing the boundaries of what's possible in technology",
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: <Users className='w-12 h-12' />,
                  title: 'Global Expertise',
                  description:
                    'World-class team with experience across cutting-edge technologies',
                  color: 'from-indigo-500 to-purple-500',
                },
                {
                  icon: <Award className='w-12 h-12' />,
                  title: 'Proven Results',
                  description:
                    'Access to the most advanced quantum computing capabilities available'
                  color: 'from-blue-500 to-cyan-500'
                }
                {
                  icon: <Shield className='w-12 h-12' />
                  title: 'Future-Proof Security'
                  description:
                    'Quantum-resistant encryption and zero-trust security frameworks'
                  color: 'from-red-500 to-orange-500'
                }
                {
                  icon: <Rocket className='w-12 h-12' />
                  title: 'Innovation First'
                  description:
                    "Constantly pushing the boundaries of what's possible in technology"
                  color: 'from-green-500 to-emerald-500'
                }
                {
                  icon: <Users className='w-12 h-12' />
                  title: 'Global Expertise'
                  description:
                    'World-class team with experience across cutting-edge technologies'
                  color: 'from-indigo-500 to-purple-500'
                }
                {
                  icon: <Award className='w-12 h-12' />
                  title: 'Proven Results'
                  description:
                    'Track record of delivering transformative solutions to leading organizations'
                  color: 'from-yellow-500 to-orange-500'
                },              ].map((feature, index) => (                  icon: <Award className="w-12 h-12" />
                  title: "Proven Results"
                  description: "Track record of delivering transformative solutions to leading organizations"
                  color: "from-yellow-500 to-orange-500"
                }
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300'

                  whileHover={{ scale: 1.05 }}
                >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className='text-white'>{feature.icon}</div>
<<<<<<< HEAD
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    {feature.description}
<<<<<<< HEAD

              ))}
            </div>
          </div>
        </section>

=======

                  </p>                </motion.div>

                </motion.div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}

            </div>;
          </div>;
        </section>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    {feature.description}
                  </p>                </motion.div>                  whileHover={{ scale: 1.05 }}
                >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
                  </p>                </motion.div>

                </motion.div>

              ))}
<<<<<<< HEAD
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* CTA Section */}
        <section className='py-24 px-4'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion && motion.div        <section className="py-24 px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div

=======
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='space-y-8'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="space-y-8"
            >
=======
              className='space-y-8'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Ready to Shape the Future?
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Join the revolution in AI consciousness, quantum computing, and
                next-generation technology. Let's build the future together.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                <Link href='/contact'>
                  <motion.button
                    className='px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className='flex items-center gap-3'>
                      Get Started Today
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                </Link>
                <Link href='/services'>
                  <motion.button
                    className='px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                    whileHover={{ scale: 1.05 }}            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the revolution in AI consciousness, quantum computing, and next-generation technology.
                Let's build the future together.
              </p>
              <div className="flex flex-col sm: flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.button
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='space-y-8'>;
              <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
                Ready to Shape the Future?;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Join the revolution in AI consciousness, quantum computing, and;
                next-generation technology. Let's build the future together.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
                <Link href='/contact'>;
                  <motion&& motion.button
                    className='px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg'
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    <span className='flex items-center gap-3'>;
                      Get Started Today;
                      <ArrowRight className='w-6 h-6' />;
                    </span>;
                  </motion && motion.button>;
                </Link>;
                <Link href='/services'>;
                  <motion&& motion.button
                    className='px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg'                    whileHover={{ scale: 1 && 1.05 }}>;
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Ready to Shape the Future?;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Join the revolution in AI consciousness, quantum computing, and next-generation technology. ;
                Let's build the future together.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-6 justify-center">;
                <Link href="/contact">;
                  <motion&& motion.button
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    <span className="flex items-center gap-3">;
                      Get Started Today;
                      <ArrowRight className="w-6 h-6" />;
                    </span>;
                  </motion && motion.button>;
                </Link>;
                <Link href="/services">;
                  <motion&& motion.button
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    Explore Our Services;
                  </motion && motion.button>;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

export default Homepage2038;  )
}
export default Homepage2038;

}
}
}

export default Homepage2038;

=======


=======
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started Today
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                  </motion.button>
<<<<<<< HEAD
</Link>
=======
                </Link>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default Homepage2038;  );
};
export default Homepage2038;
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text - center p - 8 group hover:bg - white / 5 rounded - 2xl transition - all duration - 300';
                  while_hover={{ scale: 1.05 }}
                >;
                  <div;
                    className={`inline - flex items - center justify - center w - 20 h - 20 rounded - 2xl bg - gradient - to - r ${feature.color} mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                  >;
                    <div className='text - white'>{feature.icon}</div>;
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 300 leading - relaxed'>;
                    {feature.description}
                  </p>                </motion.div>                  while_hover={{ scale: 1.05 }}
                >;
                  <div className={`inline - flex items - center justify - center w - 20 h - 20 rounded - 2xl bg - gradient - to - r ${feature.color} mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>;
                    <div className="text - white">;
                      {feature.icon}
                    </div>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 4">{feature.title}</h3>;
                  <p className="text - gray - 300 leading - relaxed">{feature.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 24 px - 4'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div        <section className="py - 24 px - 4">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space - y-8';
            >;
              <h2 className='text - 5xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent'>;
                Ready to Shape the Future?;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Join the revolution in AI consciousness, quantum computing, and;
                next - generation technology. Let's build the future together.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
                <Link href='/contact'>;
                  <motion.button;
                    className='px - 10 py - 5 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25 text - lg';
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <span className='flex items - center gap - 3'>;
                      Get Started Today;
                      <ArrowRight className='w - 6 h - 6' />;
                    </span>;
                  </motion.button>;
                </Link>;
                <Link href='/services'>;
                  <motion.button;
                    className='px - 10 py - 5 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg'                    while_hover={{ scale: 1.05 }}            >;
              <h2 className="text - 5xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent">;
                Ready to Shape the Future?;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Join the revolution in AI consciousness, quantum computing, and next - generation technology.;
                Let's build the future together.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 6 justify - center">;
                <Link href="/contact">;
                  <motion.button;
                    className="px - 10 py - 5 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25 text - lg";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <span className="flex items - center gap - 3">;
                      Get Started Today;
                      <ArrowRight className="w - 6 h - 6" />;
                    </span>;
                  </motion.button>;
                </Link>;
                <Link href="/services">;
                  <motion.button;
                    className="px - 10 py - 5 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 text - lg";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    Explore Our Services;
                  </motion.button>;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>);
}
;
export default Homepage2038);
}
;
export default Homepage2038;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  );
}
};

export default Homepage2038;  )
}
export default Homepage2038;

export default Homepage2038;

}
}
}
export default Homepage2038;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

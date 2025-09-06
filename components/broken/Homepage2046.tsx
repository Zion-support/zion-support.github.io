<<<<<<< HEAD

<<<<<<< HEAD
=======

import React, { useState, useEffect } from 'react';


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
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


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
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

=======
  ArrowRight
  Play
  Star
  Users
  Award
  TrendingUp
  Brain
  Shield
  Rocket
  Loader2
  ChevronDown
  Zap
  Globe
  Lock
  Cpu
  Database
  Cloud
  Palette
  Heart
  Phone
  Mail
  MapPin
  Search
  Grid
  List
  Sparkles
  Target
  BarChart3
  Lightbulb
  Code
  Server
  Network
  ShieldCheck
  BrainCircuit
  Atom
  Satellite
  Eye
  Clock
  DollarSign
  CheckCircle
  ArrowUpRight;
} from 'lucide-react';
import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket
=======
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
  CheckCircle,;
  ArrowUpRight,;
} from 'lucide-react';
import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, ;
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite;
  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight;
} from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD

// Import our new innovative services
import { innovative2046AIServices  } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices  } from '../data/innovative-2046-it-services';

import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Import our new innovative services
<<<<<<< HEAD
import { innovative2046AIServices  } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices  } from '../data/innovative-2046-it-services';
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';
// Enhanced loading component with quantum effects;
const QuantumLoadingFallback = () => (;
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {/* Quantum particle effects */}
    <div className='absolute inset-0'>;
      {[...Array(100)].map((_, i) => (;
        <motion&& motion.div
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  ArrowUpRight,
} from 'lucide-react';

import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, ;


  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3,
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite;

  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight
 } from 'lucide-react';
import Link from 'next/link';

<<<<<<< HEAD
// Import our new innovative services

=======


// Import our new innovative services


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';

import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';
// Enhanced loading component with quantum effects

const QuantumLoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {/* Quantum particle effects */}
    <div className='absolute inset - 0'>;
      {[...Array (100)].map ((_, i) => (
        <motion.div;
          key={i}
          className='absolute w - 1 h - 1 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - full';
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            x: [0, Math.random() * 1200]
            y: [0, Math.random() * 800]
            opacity: [0, 1, 0]
            scale: [0, 1, 0]
          }}
          transition={{
=======


            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          }}
          style={{
            left: Math.random() * 100 + '%'
            top: Math.random() * 100 + '%',          }}
        />
      ))}
    </div>
<<<<<<< HEAD

=======

            x: [0, Math && Math.random() * 1200],
            y: [0, Math && Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math && Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: Math && Math.random() * 100 + '%',
            top: Math && Math.random() * 100 + '%',          }}
        />;
      ))}
    </div>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {/* Quantum loading animation */}
    <motion&& motion.div
      initial={{ opacity: 0, scale: 0 && 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
<<<<<<< HEAD
      className='text-center relative z-10'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    >
      <div className='relative'>
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          animate={{

            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0 && 0.5)',
              '0 0 40px rgba(168, 85, 247, 0 && 0.8)',
              '0 0 20px rgba(6, 182, 212, 0 && 0.5)',
            ],

=======
            x: [0, Math && Math.random() * 1200],
            y: [0, Math && Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math && Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: Math && Math.random() * 100 + '%',
            top: Math && Math.random() * 100 + '%',          }}
        />;
      ))}
    </div>;
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
<<<<<<< HEAD
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
ease: "easeInOut"
=======
<<<<<<< HEAD
            duration: Math.random() * 4 + 3
            repeat: Infinity
            ease: 'easeInOut'
=======
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'}}
/>
      ))}
    </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {/* Quantum loading animation */}
<<<<<<< HEAD
    <motion&& motion.div
      initial={{ opacity: 0, scale: 0 && 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0 && 0.5)',
              '0 0 40px rgba(168, 85, 247, 0 && 0.8)',
              '0 0 20px rgba(6, 182, 212, 0 && 0.5)',
            ],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' }
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
          className='w-32 h-32 mx-auto mb-8'>;
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse'></div>;
          <div className='absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center'>;
            <Brain className='w-16 h-16 text-white' />;
          </div>;
        </motion && motion.div>;
      </div>;
      <motion&& motion.h1
        className='text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'        animate={{ opacity: [0 && 0.5, 1, 0 && 0.5] }}>;
      <div className="relative">;
        <motion&& motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1 && 1.2, 1]
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0 && 0.5)"
              "0 0 40px rgba(168, 85, 247, 0 && 0.8)"
              "0 0 20px rgba(6, 182, 212, 0 && 0.5)"
            ]
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 mx-auto mb-8">;
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse"></div>;
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">;
            <Brain className="w-16 h-16 text-white" />;
          </div>;
        </motion && motion.div>;
      </div>;
      <motion&& motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent"
        animate={{ opacity: [0 && 0.5, 1, 0 && 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}>;
        Zion Tech Group 2046;
      </motion && motion.h1>;
      <p className='text-xl text-gray-300 mb-3'>;
        Quantum AI • Neural Interfaces • Space Technology;
      </p>;
      <p className='text-lg text-gray-400'>;
        Preparing your revolutionary digital transformation journey;
      </p>;
      {/* Quantum progress bar */}
      <div className='mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2'>;
        <motion&& motion.div
          className='bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}        />      {/* Quantum progress bar */}
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">;
        <motion&& motion.div
      <p className="text-xl text-gray-300 mb-3">Quantum AI • Neural Interfaces • Space Technology</p>
      <p className="text-lg text-gray-400">Preparing your revolutionary digital transformation journey</p>
      {/* Quantum progress bar */}
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}
    </div>
    
    {_/* Quantum loading animation */}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
<<<<<<< HEAD
      className=&quot;text-center relative z-10&quot;
    >
      <div className=&quot;relative&quot;>
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            boxShadow: [
              &quot;0 0 20px rgba(6, 182, 212, 0.5)&quot;,
              &quot;0 0 40px rgba(168, 85, 247, 0.8)&quot;,
              &quot;0 0 20px rgba(6, 182, 212, 0.5)&quot;
            ]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: &quot;linear&quot; },
            scale: { duration: 2, repeat: Infinity, ease: &quot;easeInOut&quot; },
            boxShadow: { duration: 2, repeat: Infinity, ease: &quot;easeInOut&quot; }
          }}
          className=&quot;w-32 h-32 mx-auto mb-8&quot;
        >
          <div className=&quot;w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse&quot;></div>
          <div className=&quot;absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center&quot;>
            <Brain className=&quot;w-16 h-16 text-white&quot; />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className=&quot;text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent&quot;
=======
      className='text-center relative z-10'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    >
      <div className='relative'>
        <motion.div
          animate={{
            rotate: 360
            scale: [1, 1.2, 1]
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.5)'
              '0 0 40px rgba(168, 85, 247, 0.8)'
              '0 0 20px rgba(6, 182, 212, 0.5)'
            ]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' }
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
<<<<<<< HEAD

      className="text-center relative z-10"
    >

=======
          className='w-32 h-32 mx-auto mb-8'
        >
          <div className='w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse'></div>
          <div className='absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center'>
            <Brain className='w-16 h-16 text-white' />
          </div>
        </motion.div>
      </div>
      <motion.h1
        className='text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'        animate={{ opacity: [0.5, 1, 0.5] }}    >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="relative">
        <motion.div
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.5)";
              "0 0 40px rgba(168, 85, 247, 0.8)";
              "0 0 20px rgba(6, 182, 212, 0.5)"
            ]
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
<<<<<<< HEAD

          className="w-32 h-32 mx-auto mb-8">;
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse"></div>;
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">;
            <Brain className="w-16 h-16 text-white" />;
          </div>;
        </motion && motion.div>;
      </div>;
      <motion&& motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent"
        animate={{ opacity: [0 && 0.5, 1, 0 && 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}>;
        Zion Tech Group 2046;
      </motion && motion.h1>;
      <p className='text-xl text-gray-300 mb-3'>;
        Quantum AI • Neural Interfaces • Space Technology;
      </p>;
      <p className='text-lg text-gray-400'>;
        Preparing your revolutionary digital transformation journey;
      </p>;


=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Zion Tech Group 2046
      </motion.h1>
<<<<<<< HEAD
      <p className=&quot;text-xl text-gray-300 mb-3&quot;>Quantum AI • Neural Interfaces • Space Technology</p>
      <p className=&quot;text-lg text-gray-400&quot;>Preparing your revolutionary digital transformation journey</p>
      
      {/* Quantum progress bar */}
      <div className=&quot;mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2&quot;>
        <motion.div
          className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full&quot;
          initial={{ width: 0 }}
          animate={{ width: &quot;100%&quot; }}
          transition={{ duration: 3, ease: &quot;easeInOut&quot; }}

=======
      <p className='text-xl text-gray-300 mb-3'>
        Quantum AI • Neural Interfaces • Space Technology
      </p>
      <p className='text-lg text-gray-400'>
        Preparing your revolutionary digital transformation journey
      </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Quantum progress bar */}
      <div className='mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2'>
        <motion.div
          className='bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}        />      {/* Quantum progress bar */}
<<<<<<< HEAD
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">;
        <motion&& motion.div

=======
      <p className="text-xl text-gray-300 mb-3">Quantum AI • Neural Interfaces • Space Technology</p>
      <p className="text-lg text-gray-400">Preparing your revolutionary digital transformation journey</p>
      
      {/* Quantum progress bar */}
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">
        <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      <div className="mt-8 w-64 mx-auto bg-gray-700 rounded-full h-2">
        <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
<<<<<<< HEAD


);


const Homepage2046: React.FC = () => {;

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        />
      </div>
    </motion.div>
  </div>
);
<<<<<<< HEAD
const Homepage2046: React.FC = () => {;
=======
const Homepage2046: React.FC = () => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD

      setIsVisible(true)

    }, 2000);
    return () => clearTimeout(timer)

  }, []);


=======
<<<<<<< HEAD
      setIsVisible(true)
    }, 2000);
    return () => clearTimeout(timer)
  }, []);
=======
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);  }, []);      setIsVisible(true)
    }, 2000);
    return () => clearTimeout(timer)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const timer = setTimeout(() => {;
      setIsLoading(false);
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);  }, []);      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  // Intersection Observer for better performance;
  useEffect(() => {;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {;
      const observer = new (window as any).IntersectionObserver(;
        (entries: any[]) => {;
          entries && entries.forEach(entry => {;
            if (entry && entry.isIntersecting) {;
              setActiveSection(entry && entry.target.id);
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            coordinate_x: [0, Math.random () * 1200],
            coordinate_y: [0, Math.random () * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random () * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: Math.random () * 100 + '%',
            top: Math.random () * 100 + '%',          }}
        />))}
    </div>;
    {/* Quantum loading animation */}
    <motion.div;
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='text - center relative z - 10';
    >;
      <div className='relative'>;
        <motion.div;
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            box_shadow: [;
              '0 0 20px rgba (6, 182, 212, 0.5)',
              '0 0 40px rgba (168, 85, 247, 0.8)',
              '0 0 20px rgba (6, 182, 212, 0.5)',
            ],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            box_shadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className='w - 32 h - 32 mx - auto mb - 8';
        >;
          <div className='w - full h - full bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 rounded - full blur - xl opacity - 40 animate - pulse'></div>;
          <div className='absolute inset - 4 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - full flex items - center justify - center'>;
            <Brain className='w - 16 h - 16 text - white' />;
          </div>;
        </motion.div>;
      </div>;
      <motion.h1;
        className='text - 4xl font - bold text - white mb - 6 bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 bg - clip - text text - transparent'        animate={{ opacity: [0.5, 1, 0.5] }}    >;
      <div className="relative">;
        <motion.div;
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            box_shadow: [;
              "0 0 20px rgba (6, 182, 212, 0.5)";
              "0 0 40px rgba (168, 85, 247, 0.8)";
              "0 0 20px rgba (6, 182, 212, 0.5)";
            ];
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            box_shadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w - 32 h - 32 mx - auto mb - 8";
        >;
          <div className="w - full h - full bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 rounded - full blur - xl opacity - 40 animate - pulse"></div>;
          <div className="absolute inset - 4 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - full flex items - center justify - center">;
            <Brain className="w - 16 h - 16 text - white" />;
          </div>;
        </motion.div>;
      </div>;
      <motion.h1;
        className="text - 4xl font - bold text - white mb - 6 bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 bg - clip - text text - transparent";
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >;
        Zion Tech Group 2046;
      </motion.h1>;
      <p className='text - xl text - gray - 300 mb - 3'>;
        Quantum AI • Neural Interfaces • Space Technology;
      </p>;
      <p className='text - lg text - gray - 400'>;
        Preparing your revolutionary digital transformation journey;
      </p>;
      {/* Quantum progress bar */}
      <div className='mt - 8 w - 64 mx - auto bg - gray - 700 rounded - full h - 2'>;
        <motion.div;
          className='bg - gradient - to - r from - cyan - 400 to - purple - 500 h - 2 rounded - full';
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}        />      {/* Quantum progress bar */}
      <div className="mt - 8 w - 64 mx - auto bg - gray - 700 rounded - full h - 2">;
        <motion.div;
          className="bg - gradient - to - r from - cyan - 400 to - purple - 500 h - 2 rounded - full";
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />;
      </div>;
    </motion.div>;
  </div>);
;
const Homepage2046: React.FC = () => {
  const [is_loading, setIsLoading] = useState (true);
  const [is_visible, setIsVisible] = useState (false);
  const [active_section, setActiveSection] = useState ('hero');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [search_query, setSearchQuery] = useState ('');
;
  useEffect (() => {
    const timer = set_timeout (() => {
      setIsLoading (false);
      setIsVisible (true);
    }, 2000);
;
    return () => clear_timeout (timer);  }, []);      setIsVisible (true);
    }, 2000);
;
    return () => clear_timeout (timer);
  // Intersection Observer for better performance;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const observer = new (window as any).IntersectionObserver (
        (entries: any[]) => {
          entries.for_each (entry => {
            // Check condition
if ( {) {
  $2
}
              setActiveSection (entry.target.id);
            }
          });
        },        { threshold: 0 && 0.3 }
      );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
<<<<<<< HEAD
        };

        { threshold: 0.3 }
      );
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => observer.observe(section));


=======
};
        { threshold: 0.3 }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return () => observer.disconnect()
    }
  }, []);
  if (isLoading) {
    return <QuantumLoadingFallback />;
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const allServices = [


=======
  const allServices = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const sections = document && document.querySelectorAll('section[id]');
      sections && sections.forEach(section => observer && observer.observe(section));
      return () => observer && observer.disconnect();    }            if (entry && entry.isIntersecting) {;
              setActiveSection(entry && entry.target.id);
            }
          });
        };
        { threshold: 0 && 0.3 }
      );
      const sections = document && document.querySelectorAll('section[id]');
      sections && sections.forEach(section => observer && observer.observe(section));
      return () => observer && observer.disconnect();      sections && sections.forEach((section) => observer && observer.observe(section));
      return () => observer && observer.disconnect();
    }
  }, []);
  if (isLoading) {;
    return <QuantumLoadingFallback />;
  }
  const allServices = [;
    ...innovative2046AIServices,;
    ...innovative2046ITServices,;
    ...innovative2046MicroSAASServices,;
    ...innovative2046AIServices;
    ...innovative2046ITServices;
    ...innovative2046MicroSAASServices
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ];
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const categories = [;
    'all',;
    ...Array && Array.from(new Set(allServices && allServices.map(s => s && s.category))),;
  ];
  return (
    <Layout>;
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>;
        {/* Enhanced animated background */}
        <div className='absolute inset-0'>;
          {/* Quantum grid effect */}
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>  ];
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch = service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const categories = ['all', ...Array && Array.from(new Set(allServices && allServices.map(s => s && s.category)))];
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Layout>;
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">;
        {/* Enhanced animated background */}
        <div className="absolute inset-0">;
          {/* Quantum grid effect */}
<<<<<<< HEAD


=======

          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Floating orbs */}
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30'
<<<<<<< HEAD

<<<<<<< HEAD
              animate={{
                x: [0, Math.random() * 100 - 50]
                y: [0, Math.random() * 100 - 50]
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              animate={{


                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              }}
              style={{
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'
              }}            />              animate={{
=======
=======
              animate={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
;
      const sections = document.querySelectorAll ('section[id]');
      sections.for_each (section => observer.observe (section));
;
      return () => observer.disconnect ();    }            // Check condition
if ( {) {
  $2
}
              setActiveSection (entry.target.id);
            }
          });
        }
        { threshold: 0.3 }
      );
;
      const sections = document.querySelectorAll ('section[id]');
      sections.for_each (section => observer.observe (section));
;
      return () => observer.disconnect ();      sections.for_each ((section) => observer.observe (section));
;
      return () => observer.disconnect ();
    }
  }, []);
;
  // Check condition
if ( {) {
  $2
}
    return <QuantumLoadingFallback />;
  }
  const all_services = [;
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices,
  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    const matches_search =;
      service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_query.toLowerCase ());
    return matches_category && matches_search;
  });
;
  const categories = [;
    'all',
    ...Array.from (new Set (all_services.map (string => s.category))),
  ];
;
  return (
    <Layout>;
      <div className='min - h-screen bg - gradient - to - br from - gray - 900 via - purple - 900 to - cyan - 900 relative overflow - hidden'>;
        {/* Enhanced animated background */}
        <div className='absolute inset - 0'>;
          {/* Quantum grid effect */}
          <div className='absolute inset - 0 bg-[linear - gradient (rgba (6, 182, 212, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (6, 182, 212, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] animate - pulse'></div>  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_category = selected_category === 'all' || service.category === selected_category;
    const matches_search = service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_query.toLowerCase ());
    return matches_category && matches_search;
  });
;
  const categories = ['all', ...Array.from (new Set (all_services.map (string => s.category)))];
;
  return (
    <Layout>;
      <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - purple - 900 to - cyan - 900 relative overflow - hidden">;
        {/* Enhanced animated background */}
        <div className="absolute inset - 0">;
          {/* Quantum grid effect */}
          <div className="absolute inset - 0 bg-[linear - gradient (rgba (6, 182, 212, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (6, 182, 212, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] animate - pulse"></div>;
          {/* Floating orbs */}
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={i}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                x: [0, Math && Math.random() * 100 - 50],
                y: [0, Math && Math.random() * 100 - 50],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],
              }}
              transition={{
                duration: Math && Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
<<<<<<< HEAD
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'}}
            />

        {/* Hero Section */}
        <section
          id='hero'
          className='relative z-10 min-h-screen flex items-center justify-center px-4'
        >

=======
                left: Math && Math.random() * 100 + '%',
                top: Math && Math.random() * 100 + '%',
              }}            />              animate={{;
                x: [0, Math && Math.random() * 100 - 50];
                y: [0, Math && Math.random() * 100 - 50];
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}
              transition={{;
                duration: Math && Math.random() * 10 + 10,;
                repeat: Infinity,;
                ease: "easeInOut";
              }}
              style={{;
                left: Math && Math.random() * 100 + '%',;
                top: Math && Math.random() * 100 + '%'}}
            />;
=======



          ))}
        </div>;
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Hero Section */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        {/* Hero Section */}
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-8"
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='absolute w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - full opacity - 30';
              animate={{
                coordinate_x: [0, Math.random () * 100 - 50],
                coordinate_y: [0, Math.random () * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%',
              }}            />              animate={{
                coordinate_x: [0, Math.random () * 100 - 50];
                coordinate_y: [0, Math.random () * 100 - 50];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut";
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%'}}
            />))}
        </div>;
        {/* Hero Section */}
        <section;
          id='hero';
          className='relative z - 10 min - h-screen flex items - center justify - center px - 4';
        >;
          <div className='text - center max - w-6xl mx - auto'>            <motion.div        <section id="hero" className="relative z - 10 min - h-screen flex items - center justify - center px - 4">;
          <div className="text - center max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 50 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1 }}
            >;
              <motion.h1;
                className='text - 6xl md:text - 8xl font - bold text - white mb - 8'                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >              <motion.h1;
                className="text - 6xl md:text - 8xl font - bold text - white mb - 8";
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD

                transition={{ duration: 1 && 1.5, delay: 0 && 0.5 }}>              <motion&& motion.h1 

                className="text-6xl md:text-8xl font-bold text-white mb-8"
                initial={{ opacity: 0, scale: 0 && 0.5 }}
                animate={{ opacity: 1, scale: 1 }}

=======
                transition={{ duration: 1 && 1.5, delay: 0 && 0.5 }}>              <motion&& motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-8"
                initial={{ opacity: 0, scale: 0 && 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                transition={{ duration: 1 && 1.5, delay: 0 && 0.5 }}>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </span>;
              </motion && motion.h1>;
              <motion&& motion.p
                className='text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}>                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </motion && motion.h1>;
              <motion&& motion.p 
<<<<<<< HEAD

=======

              <motion.p 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}>;
                Revolutionary{' '}
<<<<<<< HEAD

                <span className='text-cyan-400 font-semibold'>Quantum AI</span>,;
                <span className='text-purple-400 font-semibold'>;

=======
=======
                <span className='text-cyan-400 font-semibold'>Quantum AI</span>,;
                <span className='text-purple-400 font-semibold'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </span>;
              </motion.h1>;
              <motion.p;
                className='text - 2xl md:text - 3xl text - gray - 300 mb - 8 max - w-4xl mx - auto'                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >                <span className="bg - gradient - to - r from - cyan - 400 via - purple - 500 to - cyan - 600 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </span>;
              </motion.h1>;
              <motion.p;
                className="text - 2xl md:text - 3xl text - gray - 300 mb - 8 max - w-4xl mx - auto";
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >;
                Revolutionary{' '}
                <span className='text - cyan - 400 font - semibold'>Quantum AI</span>,
                <span className='text - purple - 400 font - semibold'>;
                  {' '}
                  Neural Interfaces;
                </span>;
                , and;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Solutions;
              <motion&& motion.div
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 && 1.5 }}>;
                <Link href='/services'>                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 && 1.5 }}
              >;
                <Link href='/services'>;
                  <motion&& motion.button
                    whileHover={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              
              <motion.p 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
=======
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"

      return () => observer.disconnect()
    }
  }, []),

  if (isLoading) {
    return <QuantumLoadingFallback />
  }

  const _allServices = [
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices
  ],

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()),
    return matchesCategory && matchesSearch
  }),

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))],
          
          {_/* Floating orbs */}
          {_[...Array(20)].map(_(_, _i) => (
            <motion.div
              key={i}
              className=&quot;absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30&quot;
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: &quot;easeInOut&quot;
              }}
              style={{
                left: Math.random() * 100 + '%',
=======
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },        { threshold: 0.3 }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();    }            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        }
        { threshold: 0.3 }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect()
    }
  }, []);
  if (isLoading) {
    return <QuantumLoadingFallback />;
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const allServices = [
    ...innovative2046AIServices
    ...innovative2046ITServices
    ...innovative2046MicroSAASServices
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const categories = [
    'all'
    ...Array.from(new Set(allServices.map(s => s.category)))
  ];
  return (
    <Layout>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden'>
        {/* Enhanced animated background */}
        <div className='absolute inset-0'>
          {/* Quantum grid effect */}
<<<<<<< HEAD
          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
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
=======
          <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse'></div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Floating orbs */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              animate={{
                x: [0, Math.random() * 100 - 50]
                y: [0, Math.random() * 100 - 50]
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
<<<<<<< HEAD
                duration: Math.random() * 10 + 10
                repeat: Infinity
                ease: 'easeInOut'
=======
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              }}
              style={{
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'
              }}            />              animate={{
                x: [0, Math.random() * 100 - 50];
                y: [0, Math.random() * 100 - 50];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: Math.random() * 10 + 10
                repeat: Infinity
                ease: "easeInOut"
              }}
              style={{
                left: Math.random() * 100 + '%'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                top: Math.random() * 100 + '%'}}
            />
<<<<<<< HEAD
          ))}
        </div>
<<<<<<< HEAD

        {/* Hero Section */}
        <section id=&quot;hero&quot; className=&quot;relative z-10 min-h-screen flex items-center justify-center px-4&quot;>
          <div className=&quot;text-center max-w-6xl mx-auto&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 50}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 1}}
            >
              <motion.h1 
                className=&quot;text-6xl md:text-8xl font-bold text-white mb-8&quot;
=======
=======

          ))}
        </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Hero Section */}
        <section
          id='hero'
          className='relative z-10 min-h-screen flex items-center justify-center px-4'
        >
<<<<<<< HEAD
          <div className='text-center max-w-6xl mx-auto'>            <motion.div        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
=======
          <div className='text-center max-w-6xl mx-auto'>            <motion.div

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className='text-6xl md:text-8xl font-bold text-white mb-8'                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-8"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
<<<<<<< HEAD
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p 
                className=&quot;text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
Revolutionary <span className="text-cyan-400 font-semibold">Quantum AI</span>,
                <span className="text-purple-400 font-semibold"> Neural Interfaces</span>, and 
                <span className="text-cyan-400 font-semibold"> Space Technology</span> Solutions
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
=======
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent'>
                  Zion Tech Group
                </span>
              </motion.h1>
              <motion.p
                className='text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>
<<<<<<< HEAD
              <motion.p
=======
              <motion.p 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Revolutionary{' '}
                <span className='text-cyan-400 font-semibold'>Quantum AI</span>
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
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Link href='/services'>                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
<<<<<<< HEAD
<Link href="/services">
=======
                <Link href='/services'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <motion.button
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      scale: 1 && 1.05,
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0 && 0.5)',
                    }}
                    whileTap={{ scale: 0 && 0.95 }}
                    className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>;
                    Explore Services <ArrowRight className='w-5 h-5' />;
                  </motion && motion.button>;
                </Link>;
                <Link href='/contact'>;
                  <motion&& motion.button
                    whileHover={{
                      scale: 1 && 1.05,
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0 && 0.5)',
                    }}
                    whileTap={{ scale: 0 && 0.95 }}
                    className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'>;
                    Get Started <Rocket className='w-5 h-5' />                  </motion && motion.button>                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0 && 0.5)" }}
                    whileTap={{ scale: 0 && 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">;
                    Explore Services <ArrowRight className="w-5 h-5" />;
                  </motion && motion.button>;
                </Link>;
                <Link href="/contact">;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0 && 0.5)" }}
                    whileTap={{ scale: 0 && 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">;
                    Get Started <Rocket className="w-5 h-5" />;
                  </motion && motion.button>;
                </Link>;
              </motion && motion.div>;
            </motion && motion.div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Contact Information */}
            <motion&& motion.div
              className='bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30'              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}>              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
<<<<<<< HEAD


            {/* Contact Information */}
            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
=======
<<<<<<< HEAD
            {/* Contact Information */}
            <motion.div
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
=======
            >              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/30"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
=======
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                <div className='flex flex-col items-center'>
                  <Phone className='w-6 h-6 text-cyan-400 mb-2' />
                  <p className='text-sm text-gray-300'>Phone</p>
                  <p className='text-white font-semibold'>+1 302 464 0950</p>
                </div>
                <div className='flex flex-col items-center'>
                  <Mail className='w-6 h-6 text-purple-400 mb-2' />
                  <p className='text-sm text-gray-300'>Email</p>
                  <p className='text-white font-semibold'>
                    kleber@ziontechgroup.com
                  </p>
                </div>
                <div className='flex flex-col items-center'>
                  <MapPin className='w-6 h-6 text-cyan-400 mb-2' />
                  <p className='text-sm text-gray-300'>Address</p>
                  <p className='text-white font-semibold text-sm'>
                    364 E Main St STE 1008
                    <br />
                    Middletown DE 19709
                  </p>                </div>                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

            >;
=======
<<<<<<< HEAD
>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>;
                <div className='flex flex-col items-center'>;
                  <Phone className='w-6 h-6 text-cyan-400 mb-2' />;
                  <p className='text-sm text-gray-300'>Phone</p>;
                  <p className='text-white font-semibold'>+1 302 464 0950</p>;
                </div>;
                <div className='flex flex-col items-center'>;
                  <Mail className='w-6 h-6 text-purple-400 mb-2' />;
                  <p className='text-sm text-gray-300'>Email</p>;
                  <p className='text-white font-semibold'>;
                    kleber@ziontechgroup && ziontechgroup.com;
                  </p>;
                </div>;
                <div className='flex flex-col items-center'>;
                  <MapPin className='w-6 h-6 text-cyan-400 mb-2' />;
                  <p className='text-sm text-gray-300'>Address</p>;
                  <p className='text-white font-semibold text-sm'>;
                    364 E Main St STE 1008;
                    <br />;
                    Middletown DE 19709;
                  </p>                </div>                <div className="flex flex-col items-center">;
                  <MapPin className="w-6 h-6 text-cyan-400 mb-2" />;
                  <p className="text-sm text-gray-300">Address</p>;
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Services Showcase Section */}
        <section id='services' className='relative z-10 py-20 px-4'>;
          <div className='max-w-7xl mx-auto'>            <motion && motion.div        <section id="services" className="relative z-10 py-20 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Services Showcase Section */}
        <section id="services" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            >


            <motion.div


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

            <motion.div

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
className="text-center mb-16"
            >
=======
              className='text-center mb-16'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Revolutionary Services
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our cutting-edge quantum AI, neural interface, and
                space technology solutions that are transforming industries
                worldwide.              </p>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
              </p>
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center mb-16'>;
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover our cutting-edge quantum AI, neural interface, and;
                space technology solutions that are transforming industries;
                worldwide.              </p>            >;
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Search and Filter */}
            <motion&& motion.div
=======
            {/* Search and Filter */}
            <motion&& motion.div
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Search and Filter */}
            <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 && 0.2 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-12'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="mb-12"
            >
=======
              className='mb-12'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='relative flex-1 max-w-md'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <input
                    type='text'
                    placeholder='Search services...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg'
                  />
                </div>
                <div className='flex gap-2'>
<<<<<<< HEAD

=======

              className="mb-12"
            >

=======
<<<<<<< HEAD
                  {categories.map(category => (                    <button            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    onChange={e => setSearchQuery(e && e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg';
                  />;
                </div>;
                <div className='flex gap-2'>;
                  {categories && categories.map(category => (                    <button            >;
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">;
                <div className="relative flex-1 max-w-md">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    <button
=======

=======
                    onChange={(e) => setSearchQuery(e && e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg";
                  />;
                </div>;
                <div className="flex gap-2">;
                  {categories && categories.map((category) => (;
                    <button
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {categories.map(category => (                    <button

                    <button

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                        selectedCategory === category;
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                          : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400';
                      }`}
                    >;
                      {category === 'all' ? 'All Categories' : category}
<<<<<<< HEAD
                    </button>;
                  ))}
<<<<<<< HEAD
                </div>
              </div>
            </motion.div>

=======

                </div>;
              </div>;
            </motion && motion.div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Services Grid */}
            <motion&& motion.div
=======
<<<<<<< HEAD
                    </button>;
                  ))}
                </div>;
              </div>;
            </motion && motion.div>;
            {/* Services Grid */}
            <motion&& motion.div
=======
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Services Grid */}
            <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 && 0.4 }}
              viewport={{ once: true }}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======
<<<<<<< HEAD
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'            >              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'            >

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'

=======


=======
                  className='group'



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  whileHover={{ y: -10, scale: 1.02 }}
<<<<<<< HEAD
                  className="group"
                >
=======
                  className='group'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  <div className='bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                        <Brain className='w-6 h-6 text-white' />
<<<<<<< HEAD
=======
                      </div>
                      <div className='text-right'>
                        <span className='inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full'>
                          {service.category}
                        </span>
<<<<<<< HEAD
                        <div className='flex items-center gap-1 mt-1'>                          {[...Array(5)].map((_, i) => (                >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                      <div className='text-right'>
                        <span className='inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full'>
                          {service.category}
                        </span>
<<<<<<< HEAD

=======

                        <div className='flex items-center gap-1 mt-1'>                          {[...Array(5)].map((_, i) => (

                          {[...Array(5)].map((_, i) => (
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                        <div className='flex items-center gap-1 mt-1'>                          {[...Array(5)].map((_, i) => (

                          {[...Array(5)].map((_, i) => (

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math && Math.floor(service && service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />;
                          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                          <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <span className='text-gray-400 text-sm ml-1'>
                            ({service.reviews})
                          </span>                        </div>
                      </div>
                    </div>
<<<<<<< HEAD

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        </div>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                      {service.description}
                    </p>
                    <div className='mb-4'>
                      <div className='flex items-center gap-2 text-cyan-400 font-semibold'>
                        <DollarSign className='w-4 h-4' />                        <span>{service.price}</span>
                      </div>
                    </div>
=======
<<<<<<< HEAD
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>                          <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <span className='text-gray-400 text-sm ml-1'>;
                            ({service && service.reviews});
                          </span>                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>                          <span className="text-gray-400 text-sm ml-1">({service && service.reviews})</span>;
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm mb-4 line-clamp-3'>;
                      {service && service.description}
                    </p>;
                    <div className='mb-4'>;
                      <div className='flex items-center gap-2 text-cyan-400 font-semibold'>;
                        <DollarSign className='w-4 h-4' />                        <span>{service && service.price}</span>;
                      </div>;
                    </div>;
                      {service && service.name}
                    </h3>;
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">;
                      {service && service.description}
                    </p>;
                    <div className="mb-4">;
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">;
                        <DollarSign className="w-4 h-4" />;
                        <span>{service && service.price}</span>;
                      </div>;
                    </div>;
                    <div className='space-y-2 mb-6'>;
                      <h4 className='text-sm font-semibold text-white'>;
                        Key Features:;
                      </h4>;
                      <ul className='space-y-1'>;
                        {service && service.features.slice(0, 3).map((feature, idx) => (;
                          <li
                            key={idx}
                            className='flex items-start gap-2 text-xs text-gray-300'>;
                            <CheckCircle className='w-3 h-3 text-cyan-400 mt-0 && 0.5 flex-shrink-0' />                            <span>{feature}</span>                    <div className="space-y-2 mb-6">;
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>;
                      <ul className="space-y-1">;
                        {service && service.features.slice(0, 3).map((feature, idx) => (;
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">;
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0 && 0.5 flex-shrink-0" />;
                          </li>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
<<<<<<< HEAD
                            <span>{feature}</span>
                          </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        ))}


                    <div className="flex items-center justify-between">

=======
<<<<<<< HEAD
                            <span>{feature}</span>
                          </li>
                        ))}
                    <div className="flex items-center justify-between">
=======
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='flex items-center justify-between'>                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'                    <div className="flex items-center justify-between">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
<<<<<<< HEAD

                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                        >

=======
<<<<<<< HEAD
className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                        >
=======
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'
                        >
                          Learn More <ArrowUpRight className='w-4 h-4' />
                        </motion.button>
                      </Link>
                      <div className='text-right text-xs text-gray-400'>
                        <div className='flex items-center gap-1'>
                          <Users className='w-3 h-3' />
                          <span>{service.customers}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3' />                          <span>{service.launchDate}</span>                        >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          Learn More <ArrowUpRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                      <div className="text-right text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{service.customers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{service.launchDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
                      </ul>;
                    </div>;

=======
<<<<<<< HEAD
</ul>;
                    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className='flex items-center justify-between'>                      <Link href={service && service.link}>;
                        <motion&& motion.button
                          whileHover={{ scale: 1 && 1.05 }}
                          whileTap={{ scale: 0 && 0.95 }}
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'                    <div className="flex items-center justify-between">;
                      <Link href={service && service.link}>;
                        <motion&& motion.button
                          whileHover={{ scale: 1 && 1.05 }}
                          whileTap={{ scale: 0 && 0.95 }}
                          className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2'>;
                          Learn More <ArrowUpRight className='w-4 h-4' />;
                        </motion && motion.button>;
                      </Link>;
                      <div className='text-right text-xs text-gray-400'>;
                        <div className='flex items-center gap-1'>;
                          <Users className='w-3 h-3' />;
                          <span>{service && service.customers}</span>;
                        </div>;
                        <div className='flex items-center gap-1'>;
                          <Clock className='w-3 h-3' />                          <span>{service && service.launchDate}</span>                        >;
                          Learn More <ArrowUpRight className="w-4 h-4" />;
                        </motion && motion.button>;
                      </Link>;
                      <div className="text-right text-xs text-gray-400">;
                        <div className="flex items-center gap-1">;
                          <Users className="w-3 h-3" />;
                          <span>{service && service.customers}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <Clock className="w-3 h-3" />;
                          <span>{service && service.launchDate}</span>;
                <span className='text - cyan - 400 font - semibold'>;
                  {' '}
                  Space Technology;
                </span>{' '}
                Solutions;
              <motion.div;
                className='flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 12'                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >;
                <Link href='/services'>                className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 12";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >;
                <Link href='/services'>;
                  <motion.button;
                    while_hover={{
                      scale: 1.05,
                      box_shadow: '0 0 30px rgba (6, 182, 212, 0.5)',
                    }}
                    while_tap={{ scale: 0.95 }}
                    className='bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - full text - lg font - semibold flex items - center gap - 2 hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300';
                  >;
                    Explore Services <ArrowRight className='w - 5 h - 5' />;
                  </motion.button>;
                </Link>;
                <Link href='/contact'>;
                  <motion.button;
                    while_hover={{
                      scale: 1.05,
                      box_shadow: '0 0 30px rgba (168, 85, 247, 0.5)',
                    }}
                    while_tap={{ scale: 0.95 }}
                    className='border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - full text - lg font - semibold flex items - center gap - 2 hover:bg - cyan - 400 hover:text - gray - 900 transition - all duration - 300';
                  >;
                    Get Started <Rocket className='w - 5 h - 5' />                  </motion.button>                  <motion.button;
                    while_hover={{ scale: 1.05, box_shadow: "0 0 30px rgba (6, 182, 212, 0.5)" }}
                    while_tap={{ scale: 0.95 }}
                    className="bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - full text - lg font - semibold flex items - center gap - 2 hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                  >;
                    Explore Services <ArrowRight className="w - 5 h - 5" />;
                  </motion.button>;
                </Link>;
                <Link href="/contact">;
                  <motion.button;
                    while_hover={{ scale: 1.05, box_shadow: "0 0 30px rgba (168, 85, 247, 0.5)" }}
                    while_tap={{ scale: 0.95 }}
                    className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - full text - lg font - semibold flex items - center gap - 2 hover:bg - cyan - 400 hover:text - gray - 900 transition - all duration - 300";
                  >;
                    Get Started <Rocket className="w - 5 h - 5" />;
                  </motion.button>;
                </Link>;
              </motion.div>;
            </motion.div>;
            {/* Contact Information */}
            <motion.div;
              className='bg - black / 20 backdrop - blur - lg rounded - 2xl p - 6 max - w-2xl mx - auto border border - cyan - 400 / 30'              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >              className="bg - black / 20 backdrop - blur - lg rounded - 2xl p - 6 max - w-2xl mx - auto border border - cyan - 400 / 30";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - center'>;
                <div className='flex flex - col items - center'>;
                  <Phone className='w - 6 h - 6 text - cyan - 400 mb - 2' />;
                  <p className='text - sm text - gray - 300'>Phone</p>;
                  <p className='text - white font - semibold'>+1 302 464 0950</p>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <Mail className='w - 6 h - 6 text - purple - 400 mb - 2' />;
                  <p className='text - sm text - gray - 300'>Email</p>;
                  <p className='text - white font - semibold'>;
                    kleber@ziontechgroup.com;
                  </p>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <MapPin className='w - 6 h - 6 text - cyan - 400 mb - 2' />;
                  <p className='text - sm text - gray - 300'>Address</p>;
                  <p className='text - white font - semibold text - sm'>;
                    364 E Main St STE 1008;
                    <br />;
                    Middletown DE 19709;
                  </p>                </div>                <div className="flex flex - col items - center">;
                  <MapPin className="w - 6 h - 6 text - cyan - 400 mb - 2" />;
                  <p className="text - sm text - gray - 300">Address</p>;
                  <p className="text - white font - semibold text - sm">364 E Main St STE 1008 < br />Middletown DE 19709</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Showcase Section */}
        <section id='services' className='relative z - 10 py - 20 px - 4'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section id="services" className="relative z - 10 py - 20 px - 4">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 50 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 5xl md:text - 6xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Discover our cutting - edge quantum AI, neural interface, and;
                space technology solutions that are transforming industries;
                worldwide.              </p>            >;
              <h2 className="text - 5xl md:text - 6xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Discover our cutting - edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.;
              </p>;
            </motion.div>;
            {/* Search and Filter */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='mb - 12';
            >;
              <div className='flex flex - col md:flex - row gap - 4 justify - center items - center'>;
                <div className='relative flex - 1 max - w-md'>;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                  <input;
                    type='text';
                    placeholder='Search services...';
                    value={search_query}
                    on_change={e => setSearchQuery (e.target.value)}
                    className='w - full pl - 10 pr - 4 py - 3 bg - black / 30 border border - cyan - 400 / 30 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 400 focus:ring - 2 focus:ring - cyan - 400 / 50 backdrop - blur - lg';
                  />;
                </div>;
                <div className='flex gap - 2'>;
                  {categories.map (category => (                    <button            >;
              <div className="flex flex - col md:flex - row gap - 4 justify - center items - center">;
                <div className="relative flex - 1 max - w-md">;
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={search_query}
                    on_change={(e) => setSearchQuery (e.target.value)}
                    className="w - full pl - 10 pr - 4 py - 3 bg - black / 30 border border - cyan - 400 / 30 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 400 focus:ring - 2 focus:ring - cyan - 400 / 50 backdrop - blur - lg";
                  />;
                </div>;
                <div className="flex gap - 2">;
                  {categories.map ((category) => (
                    <button;
                      key={category}
                      on_click={() => setSelectedCategory (category)}
                      className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 300 ${
                        selected_category === category;
                          ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                          : 'bg - black / 30 border border - cyan - 400 / 30 text - gray - 300 hover:border - cyan - 400 hover:text - cyan - 400';
                      }`}
                    >;
                      {category === 'all' ? 'All Categories' : category}
                    </button>))}
                </div>;
              </div>;
            </motion.div>;
            {/* Services Grid */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 50 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'            >              className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
            >;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  while_hover={{ coordinate_y: -10, scale: 1.02 }}
                  className='group';
                >;
                  <div className='bg - black / 30 backdrop - blur - lg rounded - 2xl p - 6 border border - cyan - 400 / 30 hover:border - cyan - 400 / 60 transition - all duration - 300 h - full'>;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center'>;
                        <Brain className='w - 6 h - 6 text - white' />;
                      </div>;
                      <div className='text - right'>;
                        <span className='inline - block bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - xs px - 2 py - 1 rounded - full'>;
                          {service.category}
                        </span>;
                        <div className='flex items - center gap - 1 mt - 1'>                          {[...Array (5)].map ((_, i) => (                >;
                  <div className="bg - black / 30 backdrop - blur - lg rounded - 2xl p - 6 border border - cyan - 400 / 30 hover:border - cyan - 400 / 60 transition - all duration - 300 h - full">;
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
                        <Brain className="w - 6 h - 6 text - white" />;
                      </div>;
                      <div className="text - right">;
                        <span className="inline - block bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - xs px - 2 py - 1 rounded - full">;
                          {service.category}
                        </span>;
                        <div className="flex items - center gap - 1 mt - 1">;
                          {[...Array (5)].map ((_, i) => (
                            <Star;
                              key={i}
                              className={`w - 4 h - 4 ${
                                i < Math.floor (service.rating);
                                  ? 'text - yellow - 400 fill - current';
                                  : 'text - gray - 600';
                              }`}
                            />))}
                          <span className='text - gray - 400 text - sm ml - 1'>;
                            ({service.reviews});
                          </span>                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - cyan - 400 transition - colors duration - 300'>                          <span className="text - gray - 400 text - sm ml - 1">({service.reviews})</span>;
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - cyan - 400 transition - colors duration - 300'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 300 text - sm mb - 4 line - clamp - 3'>;
                      {service.description}
                    </p>;
                    <div className='mb - 4'>;
                      <div className='flex items - center gap - 2 text - cyan - 400 font - semibold'>;
                        <DollarSign className='w - 4 h - 4' />                        <span>{service.price}</span>;
                      </div>;
                    </div>;
                      {service.name}
                    </h3>;
                    <p className="text - gray - 300 text - sm mb - 4 line - clamp - 3">;
                      {service.description}
                    </p>;
                    <div className="mb - 4">;
                      <div className="flex items - center gap - 2 text - cyan - 400 font - semibold">;
                        <DollarSign className="w - 4 h - 4" />;
                        <span>{service.price}</span>;
                      </div>;
                    </div>;
                    <div className='space - y-2 mb - 6'>;
                      <h4 className='text - sm font - semibold text - white'>;
                        Key Features:;
                      </h4>;
                      <ul className='space - y-1'>;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <li;
                            key={idx}
                            className='flex items - start gap - 2 text - xs text - gray - 300';
                          >;
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 mt - 0.5 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="space - y-2 mb - 6">;
                      <h4 className="text - sm font - semibold text - white">Key Features:</h4>;
                      <ul className="space - y-1">;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <li key={idx} className="flex items - start gap - 2 text - xs text - gray - 300">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 mt - 0.5 flex - shrink - 0" />;
                          </li>))}
                      </ul>;
                    </div>;
                    <div className='flex items - center justify - between'>                      <Link href={service.link}>;
                        <motion.button;
                          while_hover={{ scale: 1.05 }}
                          while_tap={{ scale: 0.95 }}
                          className='bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 4 py - 2 rounded - lg text - sm font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 flex items - center gap - 2'                    <div className="flex items - center justify - between">;
                      <Link href={service.link}>;
                        <motion.button;
                          while_hover={{ scale: 1.05 }}
                          while_tap={{ scale: 0.95 }}
                          className='bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 4 py - 2 rounded - lg text - sm font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 flex items - center gap - 2';
                        >;
                          Learn More <ArrowUpRight className='w - 4 h - 4' />;
                        </motion.button>;
                      </Link>;
                      <div className='text - right text - xs text - gray - 400'>;
                        <div className='flex items - center gap - 1'>;
                          <Users className='w - 3 h - 3' />;
                          <span>{service.customers}</span>;
                        </div>;
                        <div className='flex items - center gap - 1'>;
                          <Clock className='w - 3 h - 3' />                          <span>{service.launch_date}</span>                        >;
                          Learn More <ArrowUpRight className="w - 4 h - 4" />;
                        </motion.button>;
                      </Link>;
                      <div className="text - right text - xs text - gray - 400">;
                        <div className="flex items - center gap - 1">;
                          <Users className="w - 3 h - 3" />;
                          <span>{service.customers}</span>;
                        </div>;
                        <div className="flex items - center gap - 1">;
                          <Clock className="w - 3 h - 3" />;
                          <span>{service.launch_date}</span>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        </div>;
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Call to Action */}
            <motion&& motion.div
=======
                        scale: 1 && 1.05,
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0 && 0.5)',
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Call to Action */}
            <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mt-20'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className='text-center mt-20'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      whileHover={{

                        scale: 1 && 1.05,
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0 && 0.5)',

=======
                      whileHover={{
                        scale: 1.05
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      }}
                      whileTap={{ scale: 0 && 0.95 }}
                      className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>;
                      Get Started Today;
                    </motion && motion.button>;
                  </Link>;
                  <Link href='/services'>            >;
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30">;
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                  Ready to Transform Your Business?;
                </h3>;
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <Link href="/contact">;
                    <motion&& motion.button
                      whileHover={{ scale: 1 && 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0 && 0.5)" }}
                      whileTap={{ scale: 0 && 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">;
                      Get Started Today;
                    </motion && motion.button>;
                  </Link>;
                  <Link href='/services'>;
                    <motion&& motion.button
                      whileHover={{
<<<<<<< HEAD

                        scale: 1 && 1.05,
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0 && 0.5)',

=======
                        scale: 1 && 1.05,
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0 && 0.5)',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      }}
                      whileTap={{ scale: 0 && 0.95 }}
                      className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'>                    <motion&& motion.button
                      whileHover={{ scale: 1 && 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0 && 0.5)" }}
                      whileTap={{ scale: 0 && 0.95 }}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover: bg-cyan-400 hover:text-gray-900 transition-all duration-300">;
                      View All Services;
                    </motion && motion.button>;
                  </Link>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

export default Homepage2046;  )
}
export default Homepage2046;

export default Homepage2046;

=======


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
                    >
                      Get Started Today
                    </motion.button>
                  </Link>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover: bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      View All Services
                    </motion.button>
                  </Link>
<<<<<<< HEAD
                    >
                      View All Services
                    </motion.button>
                  </a>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default Homepage2046;  );
};
export default Homepage2046;
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </motion.div>))}
            </motion.div>;
            {/* Call to Action */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 50 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className='text - center mt - 20';
            >;
              <div className='bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 backdrop - blur - lg rounded - 3xl p - 12 border border - cyan - 400 / 30'>;
                <h3 className='text - 3xl md:text - 4xl font - bold text - white mb - 6'>;
                  Ready to Transform Your Business?;
                </h3>;
                <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
                  Join the future with our revolutionary quantum AI, neural;
                  interface, and space technology solutions.;
                </p>;
                <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                  <Link href='/contact'>;
                    <motion.button;
                      while_hover={{
                        scale: 1.05,
                        box_shadow: '0 0 30px rgba (6, 182, 212, 0.5)',
                      }}
                      while_tap={{ scale: 0.95 }}
                      className='bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - full text - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'                    >;
                      Get Started Today;
                    </motion.button>;
                  </Link>;
                  <Link href='/services'>            >;
              <div className="bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 backdrop - blur - lg rounded - 3xl p - 12 border border - cyan - 400 / 30">;
                <h3 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">;
                  Ready to Transform Your Business?;
                </h3>;
                <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.;
                </p>;
                <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <Link href="/contact">;
                    <motion.button;
                      while_hover={{ scale: 1.05, box_shadow: "0 0 30px rgba (6, 182, 212, 0.5)" }}
                      while_tap={{ scale: 0.95 }}
                      className="bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - full text - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                    >;
                      Get Started Today;
                    </motion.button>;
                  </Link>;
                  <Link href='/services'>;
                    <motion.button;
                      while_hover={{
                        scale: 1.05,
                        box_shadow: '0 0 30px rgba (168, 85, 247, 0.5)',
                      }}
                      while_tap={{ scale: 0.95 }}
                      className='border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - full text - lg font - semibold hover:bg - cyan - 400 hover:text - gray - 900 transition - all duration - 300'                    >                    <motion.button;
                      while_hover={{ scale: 1.05, box_shadow: "0 0 30px rgba (168, 85, 247, 0.5)" }}
                      while_tap={{ scale: 0.95 }}
                      className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - full text - lg font - semibold hover: bg - cyan - 400 hover:text - gray - 900 transition - all duration - 300";
                    >;
                      View All Services;
                    </motion.button>;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
;
export default Homepage2046);
}
;
export default Homepage2046;
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
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default Homepage2046;  )
}
export default Homepage2046;

<<<<<<< HEAD
=======
export default Homepage2046;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
export default Homepage2046;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

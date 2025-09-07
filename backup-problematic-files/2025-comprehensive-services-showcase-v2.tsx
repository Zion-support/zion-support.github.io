<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import SEO from '../components / SEO';
import { motion } from 'framer-motion';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  Brain,
  Atom,
  Shield,
  Target,
  Rocket,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Lock,
  Cloud,
  Smartphone,
  Building,
  Phone,
<<<<<<< HEAD

=======
  Mail,;
  MapPin,;} from 'lucide-react';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  Brain, Atom, Shield, Target, Rocket;
  ArrowRight, Check, Star, TrendingUp, Users;
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin;
} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';
import { industrySpecificSolutions2025V2 } from '../data/2025-industry-specific-solutions-v2';
import { emergingTechBreakthroughs2025V2 } from '../data/2025-emerging-tech-breakthroughs-v2';
<<<<<<< HEAD
<<<<<<< HEAD


const fadeInUp = {;
  initial: { opacity: 0, y: 20 },;
  animate: { opacity: 1, y: 0 },;
  transition: { duration: 0 && 0.6 },};import { Zap, Star } from 'lucide-react';
const fadeInUp = {;
  initial: { opacity: 0, y: 20 },;
  animate: { opacity: 1, y: 0 },;
  transition: { duration: 0 && 0.6 }
const staggerContainer = {;
  animate: {;
    transition: {;
      staggerChildren: 0 && 0.1,;
    },;
  },};
export default function ComprehensiveServicesShowcase2025V2() {;
  const allNewServices = [      staggerChildren: 0 && 0.1;
    }
  }
};
export default function ComprehensiveServicesShowcase2025V2() {;
  const allNewServices = [;
    ...innovativeMicroSaas2025ExpansionV2,;
    ...innovativeITServices2025ExpansionV2,;
    ...innovativeAIServices2025ExpansionV2,;
    ...industrySpecificSolutions2025V2,;

=======
  }
=======
;
// Import our new 2025 V2 innovative services;
import { innovativeMicroSaas2025ExpansionV2 } from '../data / 2025 - innovative - micro - saas - expansion - v2';
import { innovativeITServices2025ExpansionV2 } from '../data / 2025 - innovative - it - services - expansion - v2';
import { innovativeAIServices2025ExpansionV2 } from '../data / 2025 - innovative - ai - services - expansion - v2';
import { industrySpecificSolutions2025V2 } from '../data / 2025 - industry - specific - solutions - v2';
import { emergingTechBreakthroughs2025V2 } from '../data / 2025 - emerging - tech - breakthroughs - v2';
;
const fadeInUp = {
  initial: { opacity: 0, coordinate_y: 20 },
  animate: { opacity: 1, coordinate_y: 0 },
  transition: { duration: 0.6 }, }import { Zap, Star } from 'lucide-react';
const fadeInUp = {
  initial: { opacity: 0, coordinate_y: 20 },
  animate: { opacity: 1, coordinate_y: 0 },
  transition: { duration: 0.6 }
const stagger_container = {
  animate: {
    transition: {
      stagger_children: 0.1,
    },
  }, }
;
export default /**
 * ComprehensiveServicesShowcase2025V2 - Function description
 */
function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [      stagger_children: 0.1;
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
export default /**
 * ComprehensiveServicesShowcase2025V2 - Function description
 */
function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [;
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServices2025ExpansionV2,
    ...industrySpecificSolutions2025V2,
<<<<<<< HEAD
...emergingTechBreakthroughs2025V2,  ];    ...innovativeMicroSaas2025ExpansionV2;
    ...innovativeITServices2025ExpansionV2;
    ...innovativeAIServices2025ExpansionV2;
    ...industrySpecificSolutions2025V2;

    ...emergingTechBreakthroughs2025V2;

  const serviceCategories = [;
    {;
      id: 'micro-saas',;
      name: 'Innovative Micro SAAS',;
      icon: <Smartphone className='w-8 h-8' />,;
      color: 'from-blue-500 to-cyan-500',;
      services: innovativeMicroSaas2025ExpansionV2,;
      description: 'Cutting-edge micro SAAS solutions for modern businesses',      color: 'from-blue-500 to-cyan-500',;
      services: innovativeMicroSaas2025ExpansionV2,;
      description: 'Cutting-edge micro SAAS solutions for modern businesses';
    };
    {;
      id: 'it-infrastructure',;
      name: 'IT Infrastructure Services',;
      icon: <Cloud className="w-8 h-8" />,;
      color: 'from-purple-500 to-pink-500',;
      services: innovativeITServices2025ExpansionV2,;
      description: 'Advanced IT infrastructure and security solutions';
    };
    {;
      id: 'ai-services',;
      name: 'AI & Machine Learning',;
      icon: <Brain className="w-8 h-8" />,;
      color: 'from-green-500 to-emerald-500',;
      services: innovativeAIServices2025ExpansionV2,;
      description: 'Intelligent AI solutions for business transformation';
    };
    {;
      id: 'industry-solutions',;
      name: 'Industry Solutions',;
      icon: <Building className="w-8 h-8" />,;
      color: 'from-orange-500 to-red-500',;
      services: industrySpecificSolutions2025V2,;
      description: 'Specialized solutions for specific industries';
    };
    {;
      id: 'emerging-tech',;
      name: 'Emerging Technology',;
      icon: <Atom className="w-8 h-8" />,;
      color: 'from-indigo-500 to-purple-500',;
      services: emergingTechBreakthroughs2025V2,;
      description: 'Breakthrough technologies of the future',;
    },;
    {;
      id: 'it-infrastructure',;
      name: 'IT Infrastructure Services',;
      icon: <Cloud className='w-8 h-8' />,;
      color: 'from-purple-500 to-pink-500',;
      services: innovativeITServices2025ExpansionV2,;
      description: 'Advanced IT infrastructure and security solutions',;
    },;
    {;
      id: 'ai-services',;
      name: 'AI & Machine Learning',;
      icon: <Brain className='w-8 h-8' />,;
      color: 'from-green-500 to-emerald-500',;
      services: innovativeAIServices2025ExpansionV2,;
      description: 'Intelligent AI solutions for business transformation',;
    },;
    {;
      id: 'industry-solutions',;
      name: 'Industry Solutions',;
      icon: <Building className='w-8 h-8' />,;
      color: 'from-orange-500 to-red-500',;
      services: industrySpecificSolutions2025V2,;
      description: 'Specialized solutions for specific industries',;
    },;
    {;
      id: 'emerging-tech',;
      name: 'Emerging Technology',;
      icon: <Atom className='w-8 h-8' />,;
      color: 'from-indigo-500 to-purple-500',;
      services: emergingTechBreakthroughs2025V2,;
      description: 'Breakthrough technologies of the future',;
    },  ];      description: 'Breakthrough technologies of the future';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  ];

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;

<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>;
      <SEO
        title='2025 Comprehensive Services Showcase V2 | Zion Tech Group'
        description='Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs. Transform your business with cutting-edge solutions.'
        keywords={[
          'micro SAAS'
          'IT infrastructure'
          'AI services'
          'industry solutions'
          'emerging technology'
          'Zion Tech Group'
        ]}
<<<<<<< HEAD
      />;
      {/* Hero Section */}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },};import { Zap, Star } from 'lucide-react';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }

const staggerContainer = {
  animate: {
const _staggerContainer = {_animate: {
=======
import React from 'react'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    transition: {
      staggerChildren: 0.1}
  }
},

export default function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [

  const _serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    },
<<<<<<< HEAD
  },};

=======

export default function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServices2025ExpansionV2,
    ...industrySpecificSolutions2025V2,;
    ...emergingTechBreakthroughs2025V2,  ];    ...innovativeMicroSaas2025ExpansionV2;
    ...innovativeITServices2025ExpansionV2;
    ...innovativeAIServices2025ExpansionV2;
    ...industrySpecificSolutions2025V2;
    ...emergingTechBreakthroughs2025V2

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className='w-8 h-8' />,
      color: 'from-blue-500 to-cyan-500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses',      color: 'from-blue-500 to-cyan-500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: innovativeITServices2025ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      services: innovativeAIServices2025ExpansionV2,
      description: 'Intelligent AI solutions for business transformation'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: <Building className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      services: industrySpecificSolutions2025V2,
      description: 'Specialized solutions for specific industries'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      services: emergingTechBreakthroughs2025V2,

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',

<<<<<<< HEAD
  };

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="2025 Comprehensive Services Showcase V2 | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, _IT infrastructure, _AI services, _industry solutions, _and emerging technology breakthroughs. Transform your business with cutting-edge solutions."
        keywords={_["micro SAAS", _"IT infrastructure", _"AI services", _"industry solutions", _"emerging technology", _"Zion Tech Group"]}
      />

      {_/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"

        <div className="max-w-7xl mx-auto text-center">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            2025 V2 Comprehensive
            <br />
            Services Showcase
          </motion.h1>
<<<<<<< HEAD

          >

          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
          >
            Experience the future of technology with our revolutionary portfolio of innovative micro SAAS, _IT infrastructure, _AI services, _industry solutions, _and emerging technology breakthroughs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
          >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <a
              href='#services'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'>;
              Explore Services;
            </a>;
            <a
              href='#contact'
<<<<<<< HEAD
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'            >            <a
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
      {/* Contact Information */}
      <section id='contact' className='py-16 px-4 bg-black/20'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-white mb-8'            initial={{ opacity: 0, y: 20 }}      <section id="contact" className="py-16 px-4 bg-black/20">

      {_/* Contact Information */}
      <section id="contact" className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div
            className='grid md:grid-cols-3 gap-8'            initial={{ opacity: 0, y: 20 }}          <motion.div
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            </div>
            <div className='text-center'>
              <MapPin className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Visit Us
              </h3>
              <p className='text-cyan-400 text-lg'>{contactInfo.address}</p>            </div>            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'>            <a
              href="#services" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">;
              Explore Services;
            </a>;
            <a
              href="#contact" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              Get Started
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            whileInView={{ opacity: 1, y: 0 }}
    ...emergingTechBreakthroughs2025V2;
  const service_categories = [;
    {
      id: 'micro - saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className='w - 8 h - 8' />,
      color: 'from - blue - 500 to - cyan - 500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting - edge micro SAAS solutions for modern businesses',      color: 'from - blue - 500 to - cyan - 500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting - edge micro SAAS solutions for modern businesses';
    }
    {
      id: 'it - infrastructure',
      name: 'IT Infrastructure Services',
<<<<<<< HEAD
      icon: <Cloud className="w - 8 h - 8" />,
=======
      icon: <Cloud className="w-8 h-8" />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      color: 'from - purple - 500 to - pink - 500',
      services: innovativeITServices2025ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions';
    }
    {
      id: 'ai - services',
      name: 'AI & Machine Learning',
<<<<<<< HEAD
      icon: <Brain className="w - 8 h - 8" />,
=======
      icon: <Brain className="w-8 h-8" />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      color: 'from - green - 500 to - emerald - 500',
      services: innovativeAIServices2025ExpansionV2,
      description: 'Intelligent AI solutions for business transformation';
    }
    {
      id: 'industry - solutions',
      name: 'Industry Solutions',
<<<<<<< HEAD
      icon: <Building className="w - 8 h - 8" />,
=======
      icon: <Building className="w-8 h-8" />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      color: 'from - orange - 500 to - red - 500',
      services: industrySpecificSolutions2025V2,
      description: 'Specialized solutions for specific industries';
    }
    {
      id: 'emerging - tech',
      name: 'Emerging Technology',
<<<<<<< HEAD
      icon: <Atom className="w - 8 h - 8" />,
=======
      icon: <Atom className="w-8 h-8" />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      color: 'from - indigo - 500 to - purple - 500',
      services: emergingTechBreakthroughs2025V2,
      description: 'Breakthrough technologies of the future',
    },
    {
      id: 'it - infrastructure',
      name: 'IT Infrastructure Services',
      icon: <Cloud className='w - 8 h - 8' />,
      color: 'from - purple - 500 to - pink - 500',
      services: innovativeITServices2025ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions',
    },
    {
      id: 'ai - services',
      name: 'AI & Machine Learning',
      icon: <Brain className='w - 8 h - 8' />,
      color: 'from - green - 500 to - emerald - 500',
      services: innovativeAIServices2025ExpansionV2,
      description: 'Intelligent AI solutions for business transformation',
    },
    {
      id: 'industry - solutions',
      name: 'Industry Solutions',
      icon: <Building className='w - 8 h - 8' />,
      color: 'from - orange - 500 to - red - 500',
      services: industrySpecificSolutions2025V2,
      description: 'Specialized solutions for specific industries',
    },
    {
      id: 'emerging - tech',
      name: 'Emerging Technology',
      icon: <Atom className='w - 8 h - 8' />,
      color: 'from - indigo - 500 to - purple - 500',
      services: emergingTechBreakthroughs2025V2,
      description: 'Breakthrough technologies of the future',
<<<<<<< HEAD
    },  ];      description: 'Breakthrough technologies of the future';
=======
    },  ],
  description: 'Breakthrough technologies of the future';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  ];
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  return (
    <div className='min - h-screen bg - gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900'>;
      <SEO;
        title='2025 Comprehensive Services Showcase V2 | Zion Tech Group';
        description='Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs. Transform your business with cutting - edge solutions.';
        keywords={[;
          'micro SAAS',
          'IT infrastructure',
          'AI services',
          'industry solutions',
          'emerging technology',
          'Zion Tech Group',
        ]}
      />;
      {/* Hero Section */}
      <section className='relative py - 20 px - 4 overflow - hidden'>;
        <div className='max - w-7xl mx - auto text - center'>;
          <motion.h1;
<<<<<<< HEAD
            className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6'            initial={{ opacity: 0, coordinate_y: 30 }}      <section className="relative py - 20 px - 4 overflow - hidden">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.h1;
            className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6";
=======
            className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6'            initial={{ opacity: 0, coordinate_y: 30 }}      <section className="relative py - 20 px-4 overflow-hidden">;
        <div className="max - w-7xl mx-auto text-center">;
          <motion.h1;
            className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text-transparent mb-6";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            2025 V2 Comprehensive;
            <br />;
            Services Showcase;
          </motion.h1>;
          <motion.p;
            className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >          <motion.p;
<<<<<<< HEAD
            className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto";
=======
            className="text - xl md:text - 2xl text - gray - 300 mb - 8 max-w-4xl mx-auto";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Experience the future of technology with our revolutionary portfolio;
            of innovative micro SAAS, IT infrastructure, AI services, industry;
            solutions, and emerging technology breakthroughs.;
          </motion.p>;
          <motion.div;
            className='flex flex - col sm:flex - row gap - 4 justify - center'            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >            Experience the future of technology with our revolutionary portfolio of innovative micro SAAS,
            IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs.;
          </motion.p>;
          <motion.div;
<<<<<<< HEAD
            className="flex flex - col sm:flex - row gap - 4 justify - center";
=======
            className="flex flex - col sm:flex - row gap-4 justify-center";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            animate={{ opacity: 1, coordinate_y: 0 }}
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <a;
            className="flex flex - col sm:flex - row gap - 4 justify - center";"
pr-12325
              href='#services';
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105 shadow - lg';
              href='#contact';
              className='px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 200'            >            <a;
              href="#services";
<<<<<<< HEAD
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105 shadow - lg";
=======
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale-105 shadow-lg";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            >;
              Explore Services;
            </a>;
            <a;
              href="#contact";
<<<<<<< HEAD
              className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 200";
=======
              className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition-all duration-200";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              href="#contact";""
              className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 200";"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Get Started;
          </motion.div>;
        </div>;
      </section>;"
      <section id='contact' className='py - 16 px - 4 bg - black / 20'>;
        <div className='max - w-4xl mx - auto text - center'>;
          <motion.h2;
<<<<<<< HEAD
            className='text - 3xl md:text - 4xl font - bold text - white mb - 8'            initial={{ opacity: 0, coordinate_y: 20 }}      <section id="contact" className="py - 16 px - 4 bg - black / 20">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.h2;
            className="text - 3xl md:text - 4xl font - bold text - white mb - 8";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >;
            Ready to Transform Your Business?;
          </motion.h2>;
          <motion.div;
            className='grid md:grid - cols - 3 gap - 8'            initial={{ opacity: 0, coordinate_y: 20 }}          <motion.div;
            className="grid md:grid - cols - 3 gap - 8";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            className='text - 3xl md:text - 4xl font - bold text - white mb - 8'            initial={{ opacity: 0, coordinate_y: 20 }}      <section id="contact" className="py - 16 px-4 bg-black / 20">;
        <div className="max - w-4xl mx-auto text-center">;
          <motion.h2;
            className="text - 3xl md:text - 4xl font - bold text-white mb-8";
            className='text - 3xl md:text - 4xl font - bold text - white mb - 8'            initial={{ opacity: 0, coordinate_y: 20 }}      <section id="contact" className="py - 16 px - 4 bg - black / 20">;"
        <div className="max - w-4xl mx - auto text - center">;"
          <motion.h2;"
            className="text - 3xl md:text - 4xl font - bold text - white mb - 8";"
pr-12325
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            <div className='text-center'>
              <MapPin className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
<<<<<<< HEAD
              <h3 className='text-xl font-semibold text-white mb-2'>
                Visit Us
              </h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

              <h3 className='text-xl font-semibold text-white mb-2'>
</h3>
      <section id="contact" className="py-16 px-4 bg-black/20">"
</section>"
        <div className="max-w-4xl mx-auto text-center">"
            className="text-3xl md:text-4xl font-bold text-white mb-8""
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
            transition={_{ duration: 0.6, _delay: 0.2}}
<<<<<<< HEAD
          >
            <div className="text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg">{_contactInfo.mobile}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 text-lg">{_contactInfo.email}</p>
            </div>
            <div className='text-center'>
              <MapPin className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Visit Us
              </h3>
              <p className='text-cyan-400 text-lg'>{contactInfo.address}</p>            </div>            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
<<<<<<< HEAD

            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}>;
            <div className='text-center'>;
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />;
              <h3 className='text-xl font-semibold text-white mb-2'>Call Us</h3>;
              <p className='text-cyan-400 text-lg'>{contactInfo && contactInfo.mobile}</p>;
            <div className='text-center'>;
              <Mail className='w-12 h-12 text-cyan-400 mx-auto mb-4' />;
              <h3 className='text-xl font-semibold text-white mb-2'>;
                Email Us;
              </h3>;
              <p className='text-cyan-400 text-lg'>{contactInfo && contactInfo.email}</p>;
            </div>;
            <div className='text-center'>;
              <MapPin className='w-12 h-12 text-cyan-400 mx-auto mb-4' />;
              <h3 className='text-xl font-semibold text-white mb-2'>;
                Visit Us;
              </h3>;
              <p className='text-cyan-400 text-lg'>{contactInfo && contactInfo.address}</p>            </div>            <div className="text-center">;
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />;
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>;
              <p className="text-cyan-400 text-lg">{contactInfo && contactInfo.address}</p>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Services by Category */}
      <section id='services' className='py-20 px-4'>;
        <div className='max-w-7xl mx-auto'>;
          <motion&& motion.h2
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'            initial={{ opacity: 0, y: 20 }}      <section id="services" className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion&& motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0 && 0.6 }}>;
            Our Comprehensive Service Portfolio;
          </motion && motion.h2>;
          <motion&& motion.div

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            className='space-y-20'
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
          <motion.div
            className='space-y-20'
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}


        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"

=======
              <p className="text-cyan-400 text-lg">{_contactInfo.address}</p>
            </div>

          </motion.div>
        </div>
      </section>

      {_/* Services by Category */}
      <section id="services" className="py-20 px-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
<<<<<<< HEAD

          <motion.div
=======
          
          <motion.div 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            className="space-y-20"
            variants={_staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={_{ once: true}}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
=======
            <div className="text-center">"
</div>"
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>""
              <p className="text-cyan-400 text-lg">{_contactInfo.mobile}</p>"
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>""
              <p className="text-cyan-400 text-lg">{_contactInfo.email}</p>"

              <p className='text-cyan-400 text-lg'>{contactInfo.address}</p>            </div>            <div className="text-center">""
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>""
              <p className="text-cyan-400 text-lg">{_contactInfo.address}</p>"

          </motion.div>
      <section id="services" className="py-20 px-4">"
            className="space-y-20""
            variants={_staggerContainer}"
            initial="initial"""
            whileInView="animate""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {_serviceCategories.map((category) => (_<motion.div key={category.id} variants={_fadeInUp}>
                <div className="text-center mb-12">"
                  <div className={_`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
<<<<<<< HEAD
                    {_category.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {_category.name}
                  </h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {_category.description}
                  </p>
                </div>
<<<<<<< HEAD

                    <motion.div

                      key={service.id}

=======
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {_category.services.map((service) => (
                    <motion.div
=======
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">"
                  </h3>"
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </p>;
                </div>;"
                <div className='grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
                      key={service.id}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
=======
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      whileHover={_{ y: -5}}
                      <h4 className="text-xl font-semibold text-white mb-3">"
</h4>
                      </h4>"
                      <p className="text-gray-300 mb-4">"
                      </p>"
                      <div className='space-y-3 mb-6'>
                        <div className='flex items-center text-sm text-cyan-400'>
                          <TrendingUp className='w-4 h-4 mr-2' />
<<<<<<< HEAD
                          {service.marketSize}
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-cyan-400">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {_service.marketSize}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        </div>
=======

                      <div className="space-y-3 mb-6">"
                        <div className="flex items-center text-sm text-cyan-400">"
                          <TrendingUp className="w-4 h-4 mr-2" />"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        <div className='flex items-center text-sm text-green-400'>
                          <Star className='w-4 h-4 mr-2' />

                      <div className='mb-6'>
                        <div className='text-2xl font-bold text-white mb-2'>
<<<<<<< HEAD
                          Starting at{' '}
<<<<<<< HEAD
                          {(service as any).pricing?.starter |service.price}
                          {(service as any).pricing?.starter || service.price}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {_(service as any).pricing?.starter || service.price}
                        </div>
<<<<<<< HEAD
                        <div className='text-sm text-gray-400'>
                          {(service as any).pricing?.professional
                            ? `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}`
                            : `${service.price} ${service.period}`}
                        </div>
                      </div>
                      key={service.id}
                      className="bg - black / 30 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:scale - 105";
                      while_hover={{ coordinate_y: -5 }}
                    >;
                      <h4 className="text - xl font - semibold text - white mb - 3">;
                        {service.title}
                      </h4>;
                      <p className="text - gray - 300 mb - 4">;
=======
                      <a
                        href={`/services/${service && service.slug}`}
=======
                      <div className="mb-6">"
                        <div className="text-2xl font-bold text-white mb-2">"
                      <a;`;
                        href={`/services/${service && service.slug}`}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200'>;
                        Learn More <ArrowRight className='w-4 h-4 ml-2' />                      </a>            variants={staggerContainer}

                        Learn More <ArrowRight className='w - 4 h - 4 ml - 2' />                      </a>            variants={stagger_container}

              <motion.div key={category.id} variants={fadeInUp}>;
                <div className="text-center mb-12">;
                <div className="text - center mb - 12">;"
</div>`;
pr-12325
                  <div className={`inline - flex p - 4 rounded - 2xl bg - gradient - to - r ${category.color} mb - 6`}>;
                  <h3 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;"
                  </h3>;"
                  <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;"
                <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;"

                    {category.icon}
                  </div>;
                  <h3 className="text - 3xl md:text - 4xl font - bold text-white mb-4">;
                    {category.name}
                  </h3>;
                  <p className="text - xl text - gray - 300 max-w-3xl mx-auto">;
                    {category.description}

                  </p>;
                </div>;
                <div className="grid md:grid - cols - 2 lg:grid - cols-3 gap-8">;
                  {category.services.map ((service) => (
                    <motion.div;

                      key={service.id}
                      className="bg - black / 30 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 500 / 50 transition - all duration-300 hover:scale-105";
                      while_hover={{ coordinate_y: -5 }}
                    >;
                      <h4 className="text - xl font - semibold text-white mb-3">;
                        {service.title}
                      </h4>;
                      <p className="text - gray-300 mb-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        {service.description}

          >;
            {serviceCategories && serviceCategories.map((category) => (;
                      key={service.id}"
                      className="bg - black / 30 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:scale - 105";"
                      while_hover={{ coordinate_y: -5 }}
                      <h4 className="text - xl font - semibold text - white mb - 3">;"
                      </h4>;"
                      <p className="text - gray - 300 mb - 4">;"
pr-12325
              <motion && motion.div key={category && category.id} variants={fadeInUp}>;
                <div className="text-center mb-12">;"
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category && category.color} mb-6`}>;
<<<<<<< HEAD
                    {category && category.icon}
                  </div>;
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                    {category && category.name}
                  </h3>;
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                    {category && category.description}
                  </p>;
                </div>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
                  {category && category.services.map((service) => (;
                    <motion&& motion.div
                      key={service && service.id}
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                        </div>
                        <div className="flex items-center text-sm text-green-400">
                          <Star className="w-4 h-4 mr-2" />
                          {_service.growthRate}
                        </div>
                      </div>

                        </div>
                        <div className="text-sm text-gray-400">
                          {_(service as any).pricing?.professional ?
=======
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {_(service as any).pricing?.starter || service.price}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                        </div>
                        <div className="text-sm text-gray-400">
                          {_(service as any).pricing?.professional ? 
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${_(service as any).pricing.enterprise}` :
                            `${_service.price} ${_service.period}`
                          }
                        </div>
                      </div>
                      <a
                        href={_`/services/${service.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        Learn More <ArrowRight className='w-4 h-4 ml-2' />                      </a>            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-cyan-400">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {service.marketSize}
                        </div>
                        <div className="flex items-center text-sm text-green-400">
                          <Star className="w-4 h-4 mr-2" />
                          {service.growthRate}
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {(service as any).pricing?.starter |service.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          {(service as any).pricing?.professional ?
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :
                            `${service.price} ${service.period}`

                          }
=======
=======
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">;"
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                    <motion&& motion.div;
                      key={service && service.id}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      whileHover={{ y: -5 }}>;
                      <h4 className="text-xl font-semibold text-white mb-3">;"
                      <p className="text-gray-300 mb-4">;"
                      </p>;"
                      <div className="space-y-3 mb-6">;"
                        <div className="flex items-center text-sm text-cyan-400">;"
                          <TrendingUp className="w-4 h-4 mr-2" />;"

                        <div className="flex items-center text-sm text-green-400">;"
                          <Star className="w-4 h-4 mr-2" />;"

                      <div className="mb-6">;"
                        <div className="text-2xl font-bold text-white mb-2">;"
                        <div className="text-sm text-gray-400">;"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">;"
</a>"
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />;"

                      <a
                        href={`/services/${service && service.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">;
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />;
                      </a>;
                    </motion && motion.div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    </motion && motion.div>;)
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  ))}
              </motion && motion.div>;
            ))}

<<<<<<< HEAD
=======
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"

            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Market Impact & Growth
          </motion.h2>
          <motion.div
        <div className="max-w-7xl mx-auto">"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16""
pr-12325
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'            initial={{ opacity: 0, y: 20 }}
      <section className='py-20 px-4 bg-black/20'>
        <div className='max-w-7xl mx-auto'>
<<<<<<< HEAD
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4 bg-black/20">

      {_/* Market Statistics */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Market Impact & Growth
          </motion.h2>
          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'            initial={{ opacity: 0, y: 20 }}
          <motion.div
<<<<<<< HEAD
=======
          </motion && motion.div>;
        </div>;
      </section>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4 bg-black/20">"
      <section className="py-20 px-4 bg-black/20">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Market Statistics */}
      <section className='py-20 px-4 bg-black/20'>;
        <div className='max-w-7xl mx-auto'>;
          <motion&& motion.h2;
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4 bg-black/20">;"
        <div className="max-w-7xl mx-auto">;"
          <motion&& motion.h2;"
            transition={{ duration: 0 && 0.6 }}>;
            Market Impact & Growth;
          </motion && motion.h2>;
<<<<<<< HEAD
          <motion&& motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'            initial={{ opacity: 0, y: 20 }}          
          <motion && motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            whileInView={{ opacity: 1, y: 0 }}
                      </p>;
                      <div className="space - y-3 mb - 6">;
                        <div className="flex items - center text - sm text - cyan - 400">;
                          <TrendingUp className="w - 4 h - 4 mr - 2" />;
                          {service.market_size}
                        </div>;
                        <div className="flex items - center text - sm text - green - 400">;
                          <Star className="w - 4 h - 4 mr - 2" />;
                          {service.growth_rate}
                        </div>;
                      </div>;
                      <div className="mb - 6">;
                        <div className="text - 2xl font - bold text - white mb - 2">;
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>;
                        <div className="text - sm text - gray - 400">;
=======
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                      </p>;
                      <div className="space-y-3 mb-6">;
                        <div className="flex items - center text - sm text-cyan-400">;
                          <TrendingUp className="w - 4 h-4 mr-2" />;
                          {service.market_size}
                        </div>;
                        <div className="flex items - center text - sm text-green-400">;
                          <Star className="w - 4 h-4 mr-2" />;
                          {service.growth_rate}
                        </div>;
                      </div>;
                      <div className="mb-6">;
                        <div className="text - 2xl font - bold text-white mb-2">;
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>;
                        <div className="text - sm text-gray-400">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          {(service as any).pricing?.professional ?;
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :;
                            `${service.price} ${service.period}`;
                          }
                        </div>;
                      </div>;
                      <a;
                        href={`/services/${service.slug}`}
<<<<<<< HEAD
                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200";
                      >;
                        Learn More <ArrowRight className="w - 4 h - 4 ml - 2" />;
=======
                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition-colors duration-200";
                      >;
                        Learn More <ArrowRight className="w - 4 h-4 ml-2" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      </a>;
          </motion && motion.h2>;"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8""
                      <div className="space - y-3 mb - 6">;"
                        <div className="flex items - center text - sm text - cyan - 400">;"
                          <TrendingUp className="w - 4 h - 4 mr - 2" />;"

                        <div className="flex items - center text - sm text - green - 400">;"
                          <Star className="w - 4 h - 4 mr - 2" />;"

                      <div className="mb - 6">;"
                        <div className="text - 2xl font - bold text - white mb - 2">;"
                        <div className="text - sm text - gray - 400">;"
                        href={`/services/${service.slug}`}"
                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200";"
                        Learn More <ArrowRight className="w - 4 h - 4 ml - 2" />;"

pr-12325
                    </motion.div>))}
      <section className='py - 20 px - 4 bg - black / 20'>;
        <div className='max - w-7xl mx - auto'>;
          <motion.h2;
<<<<<<< HEAD
            className='text - 4xl md:text - 5xl font - bold text - white text - center mb - 16'            initial={{ opacity: 0, coordinate_y: 20 }}      <section className="py - 20 px - 4 bg - black / 20">;
        <div className="max - w-7xl mx - auto">;
          <motion.h2;
            className="text - 4xl md:text - 5xl font - bold text - white text - center mb - 16";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

=======
            className='text - 4xl md:text - 5xl font - bold text - white text - center mb - 16'            initial={{ opacity: 0, coordinate_y: 20 }}      <section className="py - 20 px-4 bg-black / 20">;
        <div className="max-w-7xl mx-auto">;
          <motion.h2;
            className="text - 4xl md:text - 5xl font - bold text - white text-center mb-16";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >;
            Market Impact & Growth;
            className='text - 4xl md:text - 5xl font - bold text - white text - center mb - 16'            initial={{ opacity: 0, coordinate_y: 20 }}      <section className="py - 20 px - 4 bg - black / 20">;"
        <div className="max - w-7xl mx - auto">;"
            className="text - 4xl md:text - 5xl font - bold text - white text - center mb - 16";"
pr-12325
          </motion.h2>;
            className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'            initial={{ opacity: 0, coordinate_y: 20 }}
          <motion.div;
            className="grid md:grid - cols - 2 lg:grid - cols-4 gap-8";
            className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8";"
pr-12325
            initial={{ opacity: 0, coordinate_y: 20 }}
<<<<<<< HEAD
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      {_/* Market Statistics */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Market Impact & Growth
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, _delay: 0.2}}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            <div className='text-center'>
=======

      {_/* Market Statistics */}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <div className='text-4xl md:text-5xl font-bold text-cyan-400 mb-2'>
              <div className='text-white text-lg'>New Services Added</div>
              <div className='text-4xl md:text-5xl font-bold text-blue-400 mb-2'>
              <div className='text-white text-lg'>Total Addressable Market</div>
              <div className='text-4xl md:text-5xl font-bold text-purple-400 mb-2'>
              <div className='text-white text-lg'>Average Annual Growth</div>
              <div className='text-4xl md:text-5xl font-bold text-green-400 mb-2'>
              <div className='text-white text-lg'>Service Categories</div>            </div>            </div>
<<<<<<< HEAD
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$150B+</div>
              <div className="text-white text-lg">Total Addressable Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">40%+</div>
              <div className="text-white text-lg">Average Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5</div>
              <div className="text-white text-lg">Service Categories</div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Call to Action */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-white mb-6'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4">

      {_/* Call to Action */}
      <section className="py-20 px-4">

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p
            className='text-xl text-gray-300 mb-8'            initial={{ opacity: 0, y: 20 }}          <motion.p
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$150B+</div>""
              <div className="text-white text-lg">Total Addressable Market</div>"
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">40%+</div>""
              <div className="text-white text-lg">Average Annual Growth</div>"
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5</div>""
              <div className="text-white text-lg">Service Categories</div>"
            className='text-xl text-gray-300 mb-8'            initial={{ opacity: 0, y: 20 }}          <motion.p;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}>;
            <div className='text-center'>;
              <div className='text-4xl md:text-5xl font-bold text-cyan-400 mb-2'>;
              <div className='text-white text-lg'>New Services Added</div>;
              <div className='text-4xl md:text-5xl font-bold text-blue-400 mb-2'>;
              <div className='text-white text-lg'>Total Addressable Market</div>;
              <div className='text-4xl md:text-5xl font-bold text-purple-400 mb-2'>;
              <div className='text-white text-lg'>Average Annual Growth</div>;
              <div className='text-4xl md:text-5xl font-bold text-green-400 mb-2'>;
              <div className='text-white text-lg'>Service Categories</div>            </div>            </div>;
            <div className="text-center">;"
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$150B+</div>;""
              <div className="text-white text-lg">Total Addressable Market</div>;"
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">40%+</div>;""
              <div className="text-white text-lg">Average Annual Growth</div>;"
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5</div>;""
              <div className="text-white text-lg">Service Categories</div>;"
      <section className='py-20 px-4'>;
        <div className='max-w-4xl mx-auto text-center'>;
            className='text-4xl md:text-5xl font-bold text-white mb-6'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4">;"
        <div className="max-w-4xl mx-auto text-center">;"
            className="text-4xl md:text-5xl font-bold text-white mb-6""
          </motion && motion.h2>;
<<<<<<< HEAD
          <motion&& motion.p
            className='text-xl text-gray-300 mb-8'            initial={{ opacity: 0, y: 20 }}          <motion && motion.p 
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======

          </motion && motion.p>;
          <motion&& motion.div 

            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}>;
            <a
              href={`mailto:${contactInfo && contactInfo.email}`}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'>;
              Contact Our Team;
            </a>;
            <a

            transition={{ duration: 0.6, delay: 0.2 }}
=======

      {_/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, _delay: 0.2}}
          >
            Join thousands of businesses already transforming their operations
            with our cutting-edge solutions.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'            initial={{ opacity: 0, y: 20 }}            Join thousands of businesses already transforming their operations with our cutting-edge solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, _delay: 0.4}}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'
            >
              Contact Our Team
            </a>
            <a
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              href='https://ziontechgroup.com'
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'            >              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </a>
            <a
              href="https://ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
);
}
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, _delay: 0.2}}

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          >
            Join thousands of businesses already transforming their operations
            with our cutting-edge solutions.
          </motion.p>

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'
            >
              Contact Our Team
            </a>
            <a
              href='https://ziontechgroup.com'
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'            >              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </a>
            <a
              href="https://ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
);

}
=======
              href='https://ziontechgroup && ziontechgroup.com'
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'>              href={`mailto:${contactInfo && contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg";
            >;
              Contact Our Team;
            </a>;
            <a
              href="https://ziontechgroup && ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">;
              Visit Website;
            </a>;
          </motion && motion.div>;
        </div>;
=======
          <motion&& motion.p;"
            className='text-xl text-gray-300 mb-8'            initial={{ opacity: 0, y: 20 }}          <motion && motion.p;
            className="text-xl text-gray-300 mb-8""
              href={`mailto:${contactInfo.email}`}"
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg
              href='https://ziontechgroup.com`;
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'            >              href={`mailto:${contactInfo.email}`}
              href="https://ziontechgroup.com"""
              href="https://ziontechgroup && ziontechgroup.com"""
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </section>;
            <div className='text - center'>;
              <div className='text - 4xl md:text - 5xl font - bold text - cyan - 400 mb - 2'>;
              <div className='text - white text - lg'>New Services Added</div>;
              <div className='text - 4xl md:text - 5xl font - bold text - blue - 400 mb - 2'>;
              <div className='text - white text - lg'>Total Addressable Market</div>;
              <div className='text - 4xl md:text - 5xl font - bold text - purple - 400 mb - 2'>;
              <div className='text - white text - lg'>Average Annual Growth</div>;
              <div className='text - 4xl md:text - 5xl font - bold text - green - 400 mb - 2'>;
              <div className='text - white text - lg'>Service Categories</div>            </div>            </div>;
            <div className="text-center">;
              <div className="text - 4xl md:text - 5xl font - bold text - blue-400 mb-2">$150B+</div>;
              <div className="text-white text-lg">Total Addressable Market</div>;
            </div>;
            <div className="text-center">;
              <div className="text - 4xl md:text - 5xl font - bold text - purple-400 mb-2">40%+</div>;
              <div className="text-white text-lg">Average Annual Growth</div>;
            </div>;
            <div className="text-center">;
              <div className="text - 4xl md:text - 5xl font - bold text - green-400 mb-2">5</div>;
              <div className="text-white text-lg">Service Categories</div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Call to Action */}
      <section className='py - 20 px - 4'>;
        <div className='max - w-4xl mx - auto text - center'>;
          <motion.h2;
            className='text - 4xl md:text - 5xl font - bold text - white mb - 6'            initial={{ opacity: 0, coordinate_y: 20 }}      <section className="py-20 px-4">;
        <div className="max - w-4xl mx-auto text-center">;
          <motion.h2;
            className="text - 4xl md:text - 5xl font - bold text-white mb-6";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >;
            Ready to Lead the Future?;
          </motion.h2>;
          <motion.p;
            className='text - xl text - gray - 300 mb - 8'            initial={{ opacity: 0, coordinate_y: 20 }}          <motion.p;
            className="text - xl text - gray-300 mb-8";
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >;
            Join thousands of businesses already transforming their operations;
            with our cutting - edge solutions.;
          </motion.p>;
          <motion.div;
            className='flex flex - col sm:flex - row gap - 4 justify - center'            initial={{ opacity: 0, coordinate_y: 20 }}            Join thousands of businesses already transforming their operations with our cutting - edge solutions.;
          </motion.p>;
          <motion.div;
            className="flex flex - col sm:flex - row gap-4 justify-center";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true }}
            <div className="text - center">;"
              <div className="text - 4xl md:text - 5xl font - bold text - blue - 400 mb - 2">$150B+</div>;""
              <div className="text - white text - lg">Total Addressable Market</div>;"
              <div className="text - 4xl md:text - 5xl font - bold text - purple - 400 mb - 2">40%+</div>;""
              <div className="text - white text - lg">Average Annual Growth</div>;"
              <div className="text - 4xl md:text - 5xl font - bold text - green - 400 mb - 2">5</div>;""
              <div className="text - white text - lg">Service Categories</div>;"
      <section className='py - 20 px - 4'>;
            className='text - 4xl md:text - 5xl font - bold text - white mb - 6'            initial={{ opacity: 0, coordinate_y: 20 }}      <section className="py - 20 px - 4">;"
            className="text - 4xl md:text - 5xl font - bold text - white mb - 6";"
            className='text - xl text - gray - 300 mb - 8'            initial={{ opacity: 0, coordinate_y: 20 }}          <motion.p;
            className="text - xl text - gray - 300 mb - 8";"
            className='flex flex - col sm:flex - row gap - 4 justify - center'            initial={{ opacity: 0, coordinate_y: 20 }}            Join thousands of businesses already transforming their operations with our cutting - edge solutions.;
pr-12325
            transition={{ duration: 0.6, delay: 0.4 }}
              href={`mailto:${contact_info.email}`}"
              href='https://ziontechgroup.com';`;
              className='px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 200'            >              href={`mailto:${contact_info.email}`}
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 hover:scale-105 shadow-lg";
            >;
              Contact Our Team;
            </a>;
            <a;
              href="https://ziontechgroup.com";
              className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition-all duration-200";
            >;
              Visit Website;
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              href="https://ziontechgroup.com";""
    </div>);"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

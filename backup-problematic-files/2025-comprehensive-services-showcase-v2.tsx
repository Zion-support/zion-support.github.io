import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Brain
  Atom
  Shield
  Target
  Rocket
  ArrowRight
  Check
  Star
  TrendingUp
  Users
  Globe
  Zap
  Lock
  Cloud
  Smartphone
  Building
  Phone
  Mail
  MapPin;} from 'lucide-react';
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

  Mail,;
  MapPin,;} from 'lucide-react';
  Brain, Atom, Shield, Target, Rocket;
  ArrowRight, Check, Star, TrendingUp, Users;
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin;
} from 'lucide-react';
// Import our new 2025 V2 innovative services
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';
import { industrySpecificSolutions2025V2 } from '../data/2025-industry-specific-solutions-v2';
import { emergingTechBreakthroughs2025V2 } from '../data/2025-emerging-tech-breakthroughs-v2';

const fadeInUp = {;
  initial: { opacity: 0, y: 20 },;
  animate: { opacity: 1, y: 0 },;
  transition: { duration: 0 && 0.6 },};import { Zap, Star } from 'lucide-react';
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
};

  const allNewServices = [;
    ...innovativeMicroSaas2025ExpansionV2,;
    ...innovativeITServices2025ExpansionV2,;
    ...innovativeAIServices2025ExpansionV2,;
    ...industrySpecificSolutions2025V2,;

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
      description: 'Cutting-edge micro SAAS solutions for modern businesses';
      id: 'it-infrastructure',;
      name: 'IT Infrastructure Services',;
      icon: <Cloud className="w-8 h-8" />,;
      color: 'from-purple-500 to-pink-500',;
      services: innovativeITServices2025ExpansionV2,;
      description: 'Advanced IT infrastructure and security solutions';
      id: 'ai-services',;
      name: 'AI & Machine Learning',;
      icon: <Brain className="w-8 h-8" />,;
      color: 'from-green-500 to-emerald-500',;
      services: innovativeAIServices2025ExpansionV2,;
      description: 'Intelligent AI solutions for business transformation';
      id: 'industry-solutions',;
      name: 'Industry Solutions',;
      icon: <Building className="w-8 h-8" />,;
      color: 'from-orange-500 to-red-500',;
      services: industrySpecificSolutions2025V2,;
      description: 'Specialized solutions for specific industries';
      id: 'emerging-tech',;
      name: 'Emerging Technology',;
      icon: <Atom className="w-8 h-8" />,;
      color: 'from-indigo-500 to-purple-500',;
      services: emergingTechBreakthroughs2025V2,;
      description: 'Breakthrough technologies of the future',;
      icon: <Cloud className='w-8 h-8' />,;
      description: 'Advanced IT infrastructure and security solutions',;
      icon: <Brain className='w-8 h-8' />,;
      description: 'Intelligent AI solutions for business transformation',;
      icon: <Building className='w-8 h-8' />,;
      description: 'Specialized solutions for specific industries',;
      icon: <Atom className='w-8 h-8' />,;
    },  ];      description: 'Breakthrough technologies of the future';
  ];

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;

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
      />
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'            initial={{ opacity: 0, y: 30 }}      <section className="relative py-20 px-4 overflow-hidden">
import React from 'react'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react',

            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

                      key={service.id}

                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      whileHover={_{ y: -5}}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {_service.title}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {_service.description}
                      </p>
                      <div className='space-y-3 mb-6'>
                        <div className='flex items-center text-sm text-cyan-400'>
                          <TrendingUp className='w-4 h-4 mr-2' />
                          {service.marketSize}

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-cyan-400">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {_service.marketSize}
                        </div>
                        <div className='flex items-center text-sm text-green-400'>
                          <Star className='w-4 h-4 mr-2' />
                          {service.growthRate}
                      <div className='mb-6'>
                        <div className='text-2xl font-bold text-white mb-2'>
                          Starting at{' '}
                          {(service as any).pricing?.starter |service.price}
                          {(service as any).pricing?.starter || service.price}

                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {_(service as any).pricing?.starter || service.price}
                        <div className='text-sm text-gray-400'>
                          {(service as any).pricing?.professional
                            ? `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}`
                            : `${service.price} ${service.period}`}

                      <a
                        href={`/services/${service && service.slug}`}
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200'>;
                        Learn More <ArrowRight className='w-4 h-4 ml-2' />                      </a>            variants={staggerContainer}
            initial="initial";
            whileInView="animate";
            viewport={{ once: true }}

                      </p>;
                      <div className='space - y-3 mb - 6'>;
                        <div className='flex items - center text - sm text - cyan - 400'>;
                          <TrendingUp className='w - 4 h - 4 mr - 2' />;
                          {service.market_size}
                        </div>;
                        <div className='flex items - center text - sm text - green - 400'>;
                          <Star className='w - 4 h - 4 mr - 2' />;
                          {service.growth_rate}
                      <div className='mb - 6'>;
                        <div className='text - 2xl font - bold text - white mb - 2'>;
                        <div className='text - sm text - gray - 400'>;
                          {(service as any).pricing?.professional;
                            ? `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}`;
                      <a;
                        href={`/services/${service.slug}`}
                        className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200';
                      >;
                        Learn More <ArrowRight className='w - 4 h - 4 ml - 2' />                      </a>            variants={stagger_container}
            {service_categories.map ((category) => (
              <motion.div key={category.id} variants={fadeInUp}>;
                <div className="text - center mb - 12">;
                  <div className={`inline - flex p - 4 rounded - 2xl bg - gradient - to - r ${category.color} mb - 6`}>;

                    {category.icon}
                  <h3 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;
                    {category.name}
                  </h3>;
                  <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                    {category.description}

                <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                  {category.services.map ((service) => (
                    <motion.div;

                      className="bg - black / 30 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:scale - 105";
                      while_hover={{ coordinate_y: -5 }}
                      <h4 className="text - xl font - semibold text - white mb - 3">;
                        {service.title}
                      </h4>;
                      <p className="text - gray - 300 mb - 4">;
                        {service.description}

            {serviceCategories && serviceCategories.map((category) => (;
              <motion && motion.div key={category && category.id} variants={fadeInUp}>;
                <div className="text-center mb-12">;
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category && category.color} mb-6`}>;
                    {category && category.icon}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                    {category && category.name}
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                    {category && category.description}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
                  {category && category.services.map((service) => (;
                    <motion&& motion.div
                      key={service && service.id}
                      whileHover={{ y: -5 }}>;
                      <h4 className="text-xl font-semibold text-white mb-3">;
                        {service && service.title}
                      <p className="text-gray-300 mb-4">;
                        {service && service.description}

                      <div className="space-y-3 mb-6">;
                        <div className="flex items-center text-sm text-cyan-400">;
                          <TrendingUp className="w-4 h-4 mr-2" />;
                          {service && service.marketSize}
                        <div className="flex items-center text-sm text-green-400">;
                          <Star className="w-4 h-4 mr-2" />;
                          {service && service.growthRate}

                      <div className="mb-6">;
                        <div className="text-2xl font-bold text-white mb-2">;
                          Starting at {(service as any).pricing?.starter || service && service.price}
                        <div className="text-sm text-gray-400">;
                          {(service as any).pricing?.professional ? ;
                            `Professional: ${(service as any).pricing && pricing.professional} | Enterprise: ${(service as any).pricing && pricing.enterprise}` :;
                            `${service && service.price} ${service && service.period}`;

                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">;
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />;
                      </a>;
                    </motion && motion.div>;
                  ))}
          </motion.div>
      </section>
      {/* Market Statistics */}
      <section className='py-20 px-4 bg-black/20'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'            initial={{ opacity: 0, y: 20 }}      <section className="py-20 px-4 bg-black/20">

      {_/* Market Statistics */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            transition={{ duration: 0.6 }}
            Market Impact & Growth
          </motion.h2>
          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'            initial={{ opacity: 0, y: 20 }}

            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"

            className="text-xl text-gray-300 mb-8"

          </motion && motion.p>;

            className="flex flex-col sm:flex-row gap-4 justify-center"
            transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}>;
              href={`mailto:${contactInfo && contactInfo.email}`}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'>;
              Contact Our Team;

            transition={{ duration: 0.6, delay: 0.2 }}

      {_/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
            Ready to Lead the Future?
          <motion.p 
            transition={_{ duration: 0.6, _delay: 0.2}}
            Join thousands of businesses already transforming their operations
            with our cutting-edge solutions.
          </motion.p>
            className='flex flex-col sm:flex-row gap-4 justify-center'            initial={{ opacity: 0, y: 20 }}            Join thousands of businesses already transforming their operations with our cutting-edge solutions.
            transition={{ duration: 0.6, delay: 0.4 }}
            transition={_{ duration: 0.6, _delay: 0.4}}
              href={`mailto:${contactInfo.email}`}
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg'
              Contact Our Team
            </a>

              href='https://ziontechgroup.com'
              className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200'            >              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              href="https://ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              Visit Website
);

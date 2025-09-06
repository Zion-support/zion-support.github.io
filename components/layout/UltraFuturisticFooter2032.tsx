import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cpu,
  Target,
  Microscope,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Heart,
  Star,
  Award,
  CheckCircle,
  Home,
  Briefcase,
  BookOpen,
  MessageCircle,
  DollarSign,
  TrendingUp,
  Target as TargetIcon,
  Users as UsersIcon,
  Briefcase as BriefcaseIcon,
  BookOpen as BookOpenIcon,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,;} from 'lucide-react';import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle;
  Home, Briefcase, BookOpen, MessageCircle, DollarSign;
  TrendingUp, Target as TargetIcon, Users as UsersIcon;
  Briefcase as BriefcaseIcon, BookOpen as BookOpenIcon;
  MessageCircle as MessageCircleIcon, Star as StarIcon

} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
};

const mainNavigationRoutes = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Welcome to Zion Tech Group',
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    description: 'Our comprehensive service portfolio',
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: TargetIcon,
    description: 'Tailored solutions for your business',
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign,
    description: 'Transparent pricing and packages',
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    description: 'Knowledge base and documentation',
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    icon: Users,
    description: 'Success stories and implementations',
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: MessageCircle,
    description: 'Latest insights and updates',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: MessageCircle,
    description: 'Get in touch with our team',
  },];  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service portfolio' },
  { name: 'Solutions', href: '/solutions', icon: TargetIcon, description: 'Tailored solutions for your business' },
  { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing and packages' },
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base and documentation' },
  { name: 'Case Studies', href: '/case-studies', icon: Users, description: 'Success stories and implementations' },
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and updates' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }

];

const serviceCategories = [
  {
    title: '🚀 2032 Revolutionary AI Services',
    services: [
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-platform',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai-emotional-intelligence-platform',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/ai-creativity-orchestrator',
      },
      {
        name: 'AI Autonomous Business Manager',
        href: '/ai-autonomous-business-manager',
      },
    ],
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
    services: [
      {
        name: 'Quantum DNA Computing',
        href: '/quantum-dna-computing-platform',
      },
      {
        name: 'Quantum Internet Security',
        href: '/quantum-internet-security-gateway',
      },
      {
        name: 'Quantum Financial Trading',
        href: '/quantum-financial-trading-platform',
      },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' },
    ],
  },  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' }
    ]
  };

  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },

];

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },};

export default function UltraFuturisticFooter2032() {
  return (
    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden'>

};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },

};

export default function UltraFuturisticFooter2032() {
  return (

                    {contactInfo.website}

                  </a>
                </div>
              </div>
            </motion.div>

            {/* Service Categories */}
            <motion.div variants={itemVariants} className='lg:col-span-2'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>

                Our Revolutionary Services
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {serviceCategories.map((category, index) => (
                  <div key={index} className='space-y-4'>
                    <h4 className='text-lg font-medium text-white'>
                      {category.title}
                    </h4>
                    <ul className='space-y-2'>                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className='text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform'                          >

                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}

                          >

                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

                Quick Access
              </h3>

              {/* Quick Links */}
              <div className='mb-8'>
                <h4 className='text-lg font-medium text-white mb-4'>
                  Quick Links
                </h4>
                <ul className='space-y-2'>                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        <span>{link.name}</span>

                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}

                        <span>{link.name}</span>

                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info */}
              <div className='mb-8'>
                <h4 className='text-lg font-medium text-white mb-4'>Company</h4>
                <ul className='space-y-2'>                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >

                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}

                      >

                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className='text-lg font-medium text-white mb-4'>
                  Follow Us
                </h4>
                <div className='flex space-x-4'>                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}

                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}

                    </a>

                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-12'
          >
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-4'>

                Stay Ahead with Future Technology
              </h3>
              <p className='text-slate-300 mb-8 max-w-2xl mx-auto'>
                Get the latest insights on AI breakthroughs, quantum computing
                advances, space technology innovations, and autonomous systems
                development. Join our community of future technology pioneers.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
                />
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105'>                  Subscribe

                  Subscribe

                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-8'
          >
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='flex items-center space-x-2 text-slate-400 text-sm'>

                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className='text-cyan-400'>|</span>
                <span>Leading the Future of Technology</span>
              </div>

              <div className='flex items-center space-x-6 text-sm'>
                <Link
                  href='/privacy'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookies'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'
                >                  Cookie Policy

                  Cookie Policy

                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <div className='fixed bottom-8 right-8 z-50'>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className='w-6 h-6 transform rotate-[-90deg]' />        </motion.button>
      </div>
    </footer>
  );
}

        </motion.button>
      </div>
    </footer>
  );
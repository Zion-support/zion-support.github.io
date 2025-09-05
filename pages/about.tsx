import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Star, 
  TrendingUp, 
  Rocket, 
  Lightbulb, 
  Handshake 
} from 'lucide-react';

const values = [{
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what&apos;s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients&apos; success. We are committed to being true partners in their growth journey.'
  }
];

const team = [{
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    image: '/team/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    expertise: 'Cloud Infrastructure',
    experience: '12+ years',
    image: '/team/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Watson',
    role: 'Lead Data Scientist',
    expertise: 'Data Analytics & AI',
    experience: '10+ years',
    image: '/team/emily-watson.jpg'
  },
  {
    name: 'David Kim',
    role: 'Security Architect',
    expertise: 'Cybersecurity',
    experience: '14+ years',
    image: '/team/david-kim.jpg'
  }
];

const achievements = [{
    icon: Award,
    title: 'Industry Recognition',
    description: 'Named "Top AI Solutions Provider" by TechCrunch 2024',
    stat: '2024'
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: '98% client retention rate with 500+ successful projects',
    stat: '98%'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 25+ countries worldwide',
    stat: '25+'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: '300% year-over-year growth in AI services',
    stat: '300%'
  }
];

const timeline = [{
    year: '2018',
    title: 'Company Founded',
    description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    year: '2020',
    title: 'AI Division Launch',
    description: 'Launched our specialized AI services division, focusing on machine learning and automation.'
  },
  {
    year: '2022',
    title: 'Cloud Expansion',
    description: 'Expanded into comprehensive cloud infrastructure and cybersecurity services.'
  },
  {
    year: '2024',
    title: 'Micro SaaS Platform',
    description: 'Introduced our Micro SaaS solutions platform for rapid business application deployment.'
  }
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals." />
        <meta name="keywords" content="aboutpage,zion tech group,technology solutions" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
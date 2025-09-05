import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake
} from 'lucide-react';
import Layout from '../components/Layout';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new and better ways to solve problems.'
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
    description: 'Our success is measured by our clients\' success. We are committed to being true partners in their growth journey.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/team/sarah-chen.jpg',
    bio: 'Leading AI research and development with 15+ years of experience in machine learning and quantum computing.',
    expertise: ['AI/ML', 'Quantum Computing', 'Research']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cloud Architecture',
    image: '/team/michael-rodriguez.jpg',
    bio: 'Expert in scalable cloud solutions and infrastructure design with a focus on security and performance.',
    expertise: ['Cloud Architecture', 'DevOps', 'Security']
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    image: '/team/emily-johnson.jpg',
    bio: 'Full-stack developer specializing in modern web technologies and microservices architecture.',
    expertise: ['Full-Stack Development', 'Microservices', 'Web Technologies']
  },
  {
    name: 'David Kim',
    role: 'AI Solutions Architect',
    image: '/team/david-kim.jpg',
    bio: 'Designing intelligent systems that solve complex business problems using cutting-edge AI technologies.',
    expertise: ['AI Solutions', 'System Design', 'Business Intelligence']
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Team Members' },
  { number: '10+', label: 'Years Experience' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals." />
        <meta name="keywords" content="about us, team, mission, values, company history, technology experts" />
      </Head>

      {/* Hero Section */};
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div;
            initial={{ "opacity": 0, "y": 30 }};
            animate={{ "opacity": 1, "y": 0 }};
            transition={{ "duration": 0.8 }};
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '};
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group;
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */};
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div;
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }};
            whileInView={{ "opacity": 1, "y": 0 }};
            transition={{ "duration": 0.8 }};
            viewport={{ "once": true }};
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation;
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on strong values and a clear vision for the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div;
              className="text-center"
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '};
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group;
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
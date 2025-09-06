import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import Head from 'next/head';
import Link from 'next/link';

=======

import Layout from '../components/Layout';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain,
  Shield,
  Users,
  Zap,
  Target,
  Award,
  ChevronRight,
  CheckCircle,
  Star,
  Globe,
  Code,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Heart,
  Lightbulb,
  Rocket,
  Lock,
  TrendingUp;
} from 'lucide-react';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, Globe, Heart, CheckCircle } from 'lucide-react';
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    };
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.";
      color: "from-red-500 to-orange-500"
    };
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.";
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    };
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"
    };
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.";
      color: "from-pink-500 to-rose-500"
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon;
  ArrowRight, ChevronRight, MapPin, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Enterprise Clients', icon: Users, color: 'from-purple-500 to-pink-500' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security is at the core of everything we do. We build solutions that protect your business and data with quantum-resistant technology.',
      color: 'from-red-500 to-orange-500'
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable business value.',
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to understand your needs and deliver solutions that transform your business.',
      color: 'from-emerald-500 to-teal-500'
  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Advanced AI and machine learning solutions', color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum-powered computing and cryptography', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions', color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', icon: Network, description: 'Intelligent edge orchestration platforms', color: 'from-yellow-500 to-orange-500' },
    { name: 'Space Technology', icon: Rocket, description: 'AI-powered space exploration solutions', color: 'from-indigo-500 to-purple-500' },

    { name: 'Biotechnology', icon: ZapIcon, description: 'Neural interfaces and biomedical innovations', color: 'from-pink-500 to-rose-500'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI and quantum technologies',
      image: '/api/placeholder/150/150',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence',
      image: '/api/placeholder/150/150',
      color: 'from-purple-500 to-pink-500'
    },
    {
import React from "react";
import Layout from "../components/Layout";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export default function About() {
  return (
<<<<<<< HEAD
=======
    </Layout>;

  );
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">About Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of technology with innovative solutions and exceptional expertise
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, 
                  efficiency, and growth. We believe in the transformative power of technology and 
                  its ability to solve complex challenges while creating new opportunities.
                </p>
                <p className="text-lg text-gray-300">
                  Our commitment extends beyond delivering solutions – we partner with our clients 
                  to understand their unique needs and provide tailored strategies that deliver 
                  measurable results.
                </p>
              </div>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 mb-4">
                  To be the leading technology partner that organizations trust to navigate 
                  the digital transformation journey and achieve sustainable competitive advantage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Innovation-driven solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Client-centric approach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Sustainable growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Constantly pushing boundaries and exploring new technologies to deliver breakthrough solutions.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Delivering the highest quality solutions with attention to detail and commitment to perfection.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Working closely with clients and partners to achieve shared goals and mutual success.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-300 text-sm">
                  Maintaining the highest ethical standards and transparency in all our business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">CT</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Chief Technology Officer</h3>
                <p className="text-gray-400 mb-4">Technology Strategy & Innovation</p>
                <p className="text-gray-300 text-sm">
                  Leading our technology vision with 15+ years of experience in enterprise software development and AI implementation.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">PM</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Project Manager</h3>
                <p className="text-gray-400 mb-4">Client Success & Delivery</p>
                <p className="text-gray-300 text-sm">
                  Ensuring project success with expertise in agile methodologies and client relationship management.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions Architect</h3>
                <p className="text-gray-400 mb-4">Machine Learning & AI</p>
                <p className="text-gray-300 text-sm">
                  Designing and implementing AI solutions that transform business processes and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get In Touch
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

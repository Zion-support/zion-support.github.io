import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Shield, 
  Globe, 
  Heart, 
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Code,
  Cpu,
  Cloud
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityProvider from '../components/AccessibilityProvider';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  avatar?: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function About() {
  const [isLoading, setIsLoading] = useState(false);

  const values: Value[] = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth.',
      icon: Lightbulb
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, ensuring exceptional results for our clients.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty, building long-term relationships based on trust.',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.',
      icon: Users
    }
  ];

  const team: TeamMember[] = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years of experience in technology and business development.',
      expertise: ['Strategic Planning', 'Technology Leadership', 'Business Development', 'AI & Machine Learning']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical expert specializing in cloud architecture and AI implementation.',
      expertise: ['Cloud Architecture', 'AI Implementation', 'System Design', 'DevOps']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Services',
      bio: 'AI specialist with deep expertise in machine learning and autonomous systems.',
      expertise: ['Machine Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity expert ensuring the highest levels of protection for our clients.',
      expertise: ['Cybersecurity', 'Threat Analysis', 'Compliance', 'Risk Management']
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology services.'
    },
    {
      year: '2021',
      title: 'First AI Service Launch',
      description: 'Launched our first AI-powered service, marking our entry into the AI market.'
    },
    {
      year: '2022',
      title: '100+ Services Milestone',
      description: 'Reached 100+ technology services across micro SaaS, AI, and IT solutions.'
    },
    {
      year: '2023',
      title: 'Enterprise Expansion',
      description: 'Expanded into enterprise solutions and established partnerships with major corporations.'
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Received industry awards and recognition for innovation in technology services.'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Calendar },
    { label: 'Services Delivered', value: '350+', icon: Code },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Success Rate', value: '99%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Heart }
  ];

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading about us..." />;
  }

  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <SEOHead 
          title="About Us - Zion Tech Group"
          description="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of innovative technology solutions with 15+ years of experience."
          keywords="about us, company, team, mission, values, technology solutions, AI services, micro SaaS, IT solutions"
        />
        
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-300 mb-8"
              >
                Pioneering the future of technology with innovative solutions and exceptional service
              </motion.p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-slate-300 mb-6">
                    To empower businesses with cutting-edge technology solutions that drive growth, 
                    innovation, and success in the digital age. We believe technology should be 
                    accessible, powerful, and transformative.
                  </p>
                  <p className="text-lg text-slate-300 mb-8">
                    Through our comprehensive suite of micro SaaS products, AI services, and IT solutions, 
                    we help organizations of all sizes harness the power of technology to achieve their goals.
                  </p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Explore Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-white/10 text-center">
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Our Values</h2>
                <p className="text-xl text-slate-400">The principles that guide everything we do</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <value.icon className="w-12 h-12 mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
                <p className="text-xl text-slate-400">The experts behind our innovative solutions</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                    <div className="text-blue-400 font-semibold mb-4">{member.role}</div>
                    <p className="text-slate-300 mb-4">{member.bio}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
                <p className="text-xl text-slate-400">Key milestones in our company's growth</p>
              </motion.div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 p-6 bg-slate-900/60 rounded-xl border border-white/10">
                      <h3 className="text-2xl font-bold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Join hundreds of satisfied clients who trust us with their technology needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <PerformanceMonitor />
      </div>
    </AccessibilityProvider>
  );
}
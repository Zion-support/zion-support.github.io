import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
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
  DollarSign, 
  Clock, 
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.'
  }
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    expertise: 'Strategic Leadership',
    experience: '15+ years in technology leadership'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    expertise: 'Technical Innovation',
    experience: '12+ years in AI and cloud technologies'
  },
  {
    name: 'Mike Chen',
    role: 'Lead Developer',
    expertise: 'Full-Stack Development',
    experience: '10+ years in modern web technologies'
  }
];

const achievements = [
  {
    stat: '500+',
    title: 'Projects Completed',
    description: 'Successfully delivered projects across various industries',
    icon: CheckCircle
  },
  {
    stat: '99.9%',
    title: 'Client Satisfaction',
    description: 'Consistently high client satisfaction ratings',
    icon: Star
  },
  {
    stat: '24/7',
    title: 'Support Available',
    description: 'Round-the-clock support for all our clients',
    icon: Clock
  },
  {
    stat: '50+',
    title: 'Team Members',
    description: 'Expert professionals dedicated to your success',
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <MainLayout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge technology solutions."
      keywords="about us, company, team, mission, values, technology solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses 
              through innovative AI solutions, IT services, and micro SaaS applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.stat}</div>
                <div className="text-white font-semibold mb-2">{achievement.title}</div>
                <div className="text-gray-300 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <value.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your project and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
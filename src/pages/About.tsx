<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
<<<<<<< HEAD
<<<<<<< HEAD
  Award, 
  Globe, 
  Rocket, 
  Brain, 
  Shield, 
  Cpu,
  TrendingUp,
  CheckCircle,
  Star,
  Zap
=======
  Award, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Brain
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
<<<<<<< HEAD
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users }
=======
  Rocket, 
  Shield, 
  Brain, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, TrendingUp, Zap, Shield, Brain, Rocket, Star, CheckCircle, ArrowRight } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Global Clients', value: '50+', icon: Globe },
    { label: 'Team Members', value: '25+', icon: Users },
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
  ];

  const values = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Brain,
      title: 'Innovation First',
<<<<<<< HEAD
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
=======
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.',
      color: 'from-purple-500 to-pink-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
    },
    {
      icon: Shield,
      title: 'Trust & Security',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Your data and business operations are protected with enterprise-grade security measures.'
=======
      description: 'Your data and business operations are protected with enterprise-grade security and compliance standards.'
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
    },
    {
      icon: Users,
      title: 'Client Success',
<<<<<<< HEAD
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
=======
      description: 'Your data and systems are protected with enterprise-grade security and compliance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Rocket,
  Shield,
  Zap,
  Heart,
  Star
} from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud,
  TrendingUp,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import { SEO } from '../components/SEO';
>>>>>>> origin/cursor/build-and-fix-errors-e276

const About: React.FC = () => {
  const values = [
    {
<<<<<<< HEAD
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and exploring new frontiers in technology"
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Delivering exceptional quality in everything we do"
=======
import { Zap, Shield, Cpu, Cloud, Brain, Rocket, Users, Award, Globe, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Target },
=======
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap, Globe, Shield, Sparkles, Lightbulb } from 'lucide-react';
import { Header } from "@/components/Header";
=======
import { Header } from "@/components/header/Header";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Award, color: 'text-zion-cyan' },
    { label: 'Projects Completed', value: '100+', icon: Target, color: 'text-zion-purple' },
    { label: 'Happy Clients', value: '50+', icon: Users, color: 'text-zion-cyan' },
    { label: 'Team Members', value: '15+', icon: Users, color: 'text-zion-purple' }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  ];

  const values = [
    {
<<<<<<< HEAD
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client relationships.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
      icon: Users,
<<<<<<< HEAD
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our relationships"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business dealings.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.',
      color: 'text-zion-cyan'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every project we deliver meets the highest standards of quality, security, and performance that our clients expect.',
      color: 'text-zion-purple'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their needs and building solutions that truly serve their business objectives.',
      color: 'text-zion-cyan'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our services are available worldwide, helping businesses across different industries and regions achieve digital transformation.',
      color: 'text-zion-purple'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and business transformation.',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Team',
      role: 'AI Specialists',
      description: 'Expert team specializing in machine learning, natural language processing, and AI-powered solutions.',
      avatar: '🤖'
    },
    {
      name: 'Dev Team',
      role: 'Development Engineers',
      description: 'Skilled developers creating robust, scalable, and innovative software solutions.',
      avatar: '👨‍💻'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated professionals ensuring exceptional customer experience and support.',
      avatar: '🎯'
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    }
  ];

  const timeline = [
<<<<<<< HEAD
<<<<<<< HEAD
    {
<<<<<<< HEAD
      year: '2015',
      title: 'Company Founded',
<<<<<<< HEAD
      description: 'Zion Tech Group was established with a vision to democratize AI and emerging technologies.'
    },
    {
      year: '2017',
      title: 'AI Solutions Launch',
      description: 'Launched our first AI-powered business solutions and autonomous systems platform.'
    },
    {
      year: '2019',
      title: 'Quantum Technology',
      description: 'Expanded into quantum computing and quantum-secure solutions for enterprise clients.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients across 25+ nations.'
    },
    {
      year: '2023',
      title: 'AI Consciousness Platform',
      description: 'Pioneered the development of AI consciousness evolution and simulation platforms.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in autonomous business operations and next-generation AI systems.'
=======
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business automation platform'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve Fortune 500 companies and government agencies'
    },
    {
      year: '2023',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing solutions for enterprise applications'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended services to international markets and emerging economies'
    },
    {
      year: '2025',
      title: 'AI Revolution',
      description: 'Leading the charge in autonomous AI systems and consciousness evolution'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for technological innovation"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business solutions platform"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded multiple industry awards for innovation and excellence"
    },
    {
      year: "2024",
      title: "Future Technologies",
      description: "Pioneering quantum computing and advanced AI solutions"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
    }
  ];
=======
>>>>>>> origin/main

<<<<<<< HEAD
const AboutPage: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and autonomous systems solutions.
            </p>
=======
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former AI researcher with 15+ years in technology leadership"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "Expert in emerging technologies and system architecture"
    },
    {
      name: "Dr. James Kim",
      role: "Chief Innovation Officer",
      description: "Leading research in quantum computing and AI"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      description: "Specialist in scaling technology operations globally"
=======
      description: 'We measure our success by your success, building long-term partnerships based on results.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Our team stays ahead of industry trends, ensuring you benefit from the latest technological advancements.'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions that address your unique business challenges and requirements.'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and streamlined development processes for modern applications.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that automate processes and enhance decision-making.'
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
    }
  ];
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1

const About = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to technological innovation and excellence." />
        <meta name="keywords" content="about Zion Tech Group, company mission, technology innovation, AI company, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Zion Tech Group
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Pioneering the future of technology through innovation, excellence, and unwavering commitment to our clients' success.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-400">
                We believe that technology should serve humanity, making the impossible possible and creating opportunities for growth, innovation, and positive change across all industries and communities.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto border border-purple-500/30">
                <Target className="w-32 h-32 text-purple-400" />
              </div>
            </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions, 
              cutting-edge AI, and comprehensive digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
=======
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize business technology solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and began building our reputation in the industry.'
    },
    {
      year: '2022',
      title: 'AI Services Launch',
      description: 'Launched our AI and machine learning services division, expanding our capabilities.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple countries and continents.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established our innovation lab for cutting-edge research and development.'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in next-generation technology solutions and digital transformation.'
    }
  ];

=======
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Cpu, 
  Cloud,
  Brain,
  Rocket,
  CheckCircle,
  Target
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Technologies', icon: Cpu },
    { number: '99%', label: 'Client Satisfaction', icon: Award }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, understanding your business goals and delivering tailored solutions.'
=======
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your business security and data protection are our top priorities in every solution we deliver.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the growth and success of our clients\' businesses.',
      color: 'from-red-500 to-orange-500'
>>>>>>> origin/cursor/build-and-fix-errors-e276
    },
    {
      icon: Globe,
      title: 'Global Impact',
<<<<<<< HEAD
      description: 'Our solutions reach businesses worldwide, driving digital transformation across industries.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations and decision-making.',
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation that ensures reliability and performance.',
      link: '/cloud-devops'
    },
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions designed for enterprise-scale operations.',
      link: '/enterprise-solutions'
    },
    {
      icon: Cpu,
      title: 'Micro SAAS Services',
      description: 'Custom software solutions that address specific business needs with rapid deployment.',
      link: '/micro-saas-services'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization that drives growth and competitive advantage.',
      link: '/digital-transformation'
    },
    {
      icon: TrendingUp,
      title: 'Emerging Tech',
      description: 'Next-generation technology solutions that keep you ahead of the curve.',
      link: '/emerging-tech'
    }
  ];

>>>>>>> origin/cursor/website-audit-and-enhancement-796c
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, ArrowRight, CheckCircle, Star, Rocket, Shield, Cpu, Brain } from 'lucide-react';
import { SEO } from '@/components/SEO';

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
    icon: Target,
    color: "text-zion-purple"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
    icon: Award,
    color: "text-green-400"
  },
  {
    title: "Global Impact",
    description: "We believe technology should make the world better, more connected, and more sustainable.",
    icon: Globe,
    color: "text-blue-400"
  }
];

const team = [
  {
    name: "Kleber Santos",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in technology and business transformation.",
    expertise: ["AI & Machine Learning", "Digital Transformation", "Strategic Planning"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Technology expert specializing in cloud architecture and emerging technologies.",
    expertise: ["Cloud Computing", "DevOps", "Emerging Tech"]
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    description: "Engineering leader focused on scalable solutions and technical excellence.",
    expertise: ["Software Architecture", "Team Leadership", "Quality Assurance"]
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Zion Tech Group established with a vision to transform businesses through technology."
  },
  {
    year: "2021",
    title: "First AI Solutions",
    description: "Successfully deployed our first AI-powered business solutions for enterprise clients."
  },
  {
    year: "2022",
    title: "Cloud Platform Launch",
    description: "Launched our comprehensive cloud and DevOps platform serving 100+ clients."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations internationally, serving clients across 15+ countries."
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description: "Recognized as a leader in emerging technology solutions and digital transformation."
  }
];
=======
      description: 'We serve clients worldwide, bringing technology solutions that transcend borders and cultures.',
      color: 'from-green-500 to-emerald-500'
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Building secure, reliable solutions that our clients can trust with their most critical business operations.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable business outcomes and growth.',
      color: 'from-zion-cyan to-zion-blue-light'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Delivering world-class solutions with attention to detail, quality, and performance that exceeds expectations.',
      color: 'from-zion-purple to-zion-cyan'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    }
  ];

  const milestones = [
<<<<<<< HEAD
    { year: '2014', title: 'Company Founded', description: 'Zion Tech Group established with a vision to transform businesses through technology' },
    { year: '2016', title: 'First AI Project', description: 'Successfully delivered our first AI-powered solution to a Fortune 500 company' },
    { year: '2018', title: 'Cloud Division', description: 'Launched cloud infrastructure and migration services' },
    { year: '2020', title: 'Cybersecurity Focus', description: 'Expanded into comprehensive cybersecurity solutions' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices in multiple countries and served 500+ clients' },
    { year: '2024', title: 'AI Revolution', description: 'Leading the AI transformation with cutting-edge machine learning platforms' }
=======
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize technology solutions.',
      icon: Calendar
    },
    {
      year: '2024',
      title: 'First AI Platform',
      description: 'Launched our flagship AI-powered analytics platform.',
      icon: Brain
    },
    {
      year: '2024',
      title: 'Quantum Computing',
      description: 'Introduced quantum computing services for research institutions.',
      icon: Cpu
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to serve clients worldwide.',
      icon: Globe
    }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
  ];

  const team = [
    {
<<<<<<< HEAD
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      expertise: 'AI & Technology Strategy',
      experience: '15+ years',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      expertise: 'AI Platforms & Solutions',
      experience: '8+ years average',
      avatar: '🤖'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Architects',
      expertise: 'AWS, Azure, Google Cloud',
      experience: '10+ years average',
      avatar: '☁️'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      expertise: 'Threat Detection & Prevention',
      experience: '12+ years average',
      avatar: '🔒'
    }
  ];
>>>>>>> origin/cursor/build-and-fix-errors-e276

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI, and digital transformation."
        keywords="about us, Zion Tech Group, company history, team, mission, values, technology company"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              About{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative solutions, cutting-edge AI, and comprehensive digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
=======
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative micro SAAS solutions, cutting-edge IT services, and advanced AI technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative micro SAAS solutions, 
            cutting-edge AI services, and transformative digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </motion.div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transforming businesses through innovative micro SAAS solutions, cutting-edge IT services, 
            and advanced AI technologies since 2020.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
        </div>
      </section>

      {/* Mission & Vision */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
<<<<<<< HEAD
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth. We believe that every organization deserves access to 
                world-class technology that can transform their operations and unlock their full potential.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Through our comprehensive suite of services, from AI and machine learning to cloud 
                infrastructure and digital transformation, we help companies navigate the complex 
                technology landscape and emerge stronger, more competitive, and future-ready.
=======
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, cloud computing, and digital transformation to achieve their goals.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that technology should be accessible, scalable, and transformative, 
                driving innovation across industries and creating lasting value for our clients.
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
<<<<<<< HEAD
              <div className="w-full h-96 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Rocket className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
                  <p className="text-zion-slate-light max-w-sm">
                    To be the leading force in business technology innovation, 
                    shaping the future of how organizations operate and succeed.
                  </p>
                </div>
=======
              <div className="w-full h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl flex items-center justify-center">
                <Target className="w-32 h-32 text-zion-cyan/40" />
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              </div>
            </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
<<<<<<< HEAD
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, automation, and digital transformation to achieve unprecedented growth.
              </p>
              <p className="text-lg text-zion-slate-light">
                We believe that innovation should be accessible, scalable, and sustainable for every organization.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Target className="w-16 h-16 text-zion-cyan mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Vision 2030</h3>
              <p className="text-zion-slate-light">
                To become the leading platform for AI-powered business solutions, connecting talent, 
                technology, and innovation across the global marketplace.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to thrive in the digital age through innovative micro SAAS platforms 
                and AI-powered services.
              </p>
              <p className="text-zion-slate-light">
                We believe that every organization deserves access to enterprise-grade technology 
                that drives growth, efficiency, and competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the leading force in the democratization of advanced technology, 
                creating a world where innovation is accessible, sustainable, and beneficial 
                for all.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where technology serves humanity, enhances productivity, 
                and creates meaningful impact across industries and communities.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Values */}
=======
      {/* Values Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
<<<<<<< HEAD
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              The principles that guide everything we do, from client relationships to technology development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      title: 'Excellence in Execution',
      description: 'Every project is delivered with precision, quality, and attention to detail that exceeds expectations.',
      icon: Star,
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable, transformative results.',
      icon: Target,
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve through continuous research, training, and adoption of cutting-edge technologies.',
      icon: Brain,
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Development'],
      avatar: '/avatars/kleber.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Machine Learning with expertise in neural networks and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development'],
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Former government cybersecurity expert with deep knowledge of threat intelligence.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      avatar: '/avatars/marcus.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      bio: 'Software architect with experience building scalable systems for Fortune 500 companies.',
      expertise: ['Software Architecture', 'Cloud Computing', 'DevOps'],
      avatar: '/avatars/emily.jpg'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in healthcare and finance',
      category: 'Industry Recognition'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Successfully delivered over 500 technology solutions worldwide',
      category: 'Business Growth'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries across 3 continents',
      category: 'Market Expansion'
    },
    {
      year: '2021',
      title: 'Patent Portfolio',
      description: 'Filed 25+ patents in AI, cybersecurity, and quantum computing',
      category: 'Innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
            and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Founded 2014
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              Global Presence
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Innovation Leader
            </span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to harness the power of AI, quantum computing, and advanced automation for sustainable growth 
                and competitive advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Accelerate digital transformation</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Bridge the technology gap</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Foster innovation ecosystems</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-purple">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the global leader in AI-powered technology solutions, creating a future where every 
                organization can leverage intelligent automation, predictive analytics, and quantum computing 
                to solve humanity's greatest challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>AI-first world</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Sustainable technology</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Human-AI collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
=======
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light">{value.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push boundaries and explore new technologies to deliver 
                cutting-edge solutions that drive real business value.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Our success is measured by our customers' success. We build lasting 
                partnerships and ensure every solution delivers measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We maintain the highest standards of security and data protection, 
                ensuring our clients' information and systems remain safe and secure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-zion-slate-light">
                We're committed to creating positive change through technology, 
                supporting sustainable practices and inclusive growth worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-zion-slate-light">
                We strive for excellence in everything we do, from code quality 
                to customer service, ensuring the highest standards of delivery.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-zion-slate-light">
                We foster a culture of continuous learning and improvement, 
                staying ahead of industry trends and technological advancements.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-zion-slate mb-6 leading-relaxed">
                We believe that every organization deserves access to cutting-edge technology 
                that can transform their operations and unlock new possibilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Our Vision
              </h3>
              <p className="text-zion-slate leading-relaxed">
                To be the leading technology partner for businesses worldwide, 
                known for innovation, reliability, and exceptional results.
              </p>
              <div className="mt-6">
                <TrendingUp className="w-12 h-12 text-zion-cyan" />
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Micro SAAS Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, quantum computing, and digital transformation, 
            empowering businesses to thrive in the digital age through innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
=======
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
=======
      {/* Timeline */}
=======
      {/* Services Overview */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader driving innovation and strategic growth across all business units.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Team</h3>
              <p className="text-zion-cyan mb-2">Engineering Excellence</p>
              <p className="text-zion-slate-light text-sm">
                World-class developers and engineers building the future of technology.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Division</h3>
              <p className="text-zion-cyan mb-2">AI & ML Specialists</p>
              <p className="text-zion-slate-light text-sm">
                Experts in artificial intelligence and machine learning solutions.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
=======
      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
<<<<<<< HEAD
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Mission & Vision */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize access to advanced AI and emerging technologies, enabling businesses 
                of all sizes to leverage the power of autonomous systems, quantum computing, and 
                intelligent automation for unprecedented growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Democratize AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enable autonomous business operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Drive digital transformation</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the global leader in autonomous business technology, pioneering the future 
                of work where AI and humans collaborate seamlessly to create unprecedented value 
                and solve humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Global AI leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Human-AI collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Solve global challenges</span>
                </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business deserves access to the same powerful AI tools 
                that Fortune 500 companies use, leveling the playing field and driving 
                innovation across industries.
              </p>
              <Link
                to="/mission"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-cyan-400" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
=======
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses through 
              innovative AI solutions, cloud computing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Join Our Team
                <Users className="w-5 h-5" />
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
=======
              These principles guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            ))}
=======
      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push the boundaries of what's possible, embracing emerging technologies 
                and creative solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We prioritize data security, privacy, and ethical AI practices in everything we build.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Your success is our success. We're committed to delivering measurable results and 
                exceptional support.
              </p>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="About Zion Tech Group - Technology Innovation Leaders"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership."
        canonical="/about"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
=======
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI/ML', 'Quantum Computing', 'Strategic Planning'],
      avatar: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      description: 'Expert researchers developing cutting-edge artificial intelligence solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      avatar: '🤖'
    },
    {
      name: 'Security Experts',
      role: 'Cybersecurity Team',
      description: 'Certified security professionals protecting digital assets and infrastructure.',
      expertise: ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      avatar: '🛡️'
    },
    {
      name: 'Cloud Architects',
      role: 'DevOps & Cloud',
      description: 'Infrastructure specialists building scalable, resilient cloud solutions.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Terraform', 'CI/CD'],
      avatar: '☁️'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              🚀 Our Story
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transforming Business
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                Through Innovation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over a decade, Zion Tech Group has been at the forefront of technology 
              innovation, helping businesses transform and thrive in the digital age. 
              We combine deep expertise with cutting-edge solutions to drive real results.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-zion-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <span>1000+ Projects Delivered</span>
              </div>
            </motion.div>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, building revolutionary solutions that transform 
              businesses and drive human progress through innovation, excellence, and unwavering commitment to success.
            </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Mission & Vision Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  To democratize access to cutting-edge technology solutions, enabling 
                  businesses of all sizes to compete and thrive in the digital economy. 
                  We believe that innovation should be accessible to everyone.
                </p>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Democratize technology access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Drive business transformation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Foster innovation culture</span>
                  </li>
                </ul>
              </Card>
=======
      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes 
                to achieve digital transformation and competitive advantage through innovative AI, quantum computing, 
                and autonomous systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Democratize advanced technology</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Drive digital transformation</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Enable competitive advantage</span>
                </li>
              </ul>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
<<<<<<< HEAD
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  To be the global leader in AI-powered business transformation, 
                  creating a world where every business can leverage cutting-edge 
                  technology to achieve unprecedented growth and success.
                </p>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Global technology leadership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>AI-powered transformation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Unprecedented business growth</span>
                  </li>
                </ul>
              </Card>
=======
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the world's leading technology partner, pioneering the future of AI consciousness, 
                quantum supremacy, and autonomous systems that create a more intelligent, secure, and 
                sustainable world for future generations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Global technology leadership</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>AI consciousness advancement</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Sustainable future technology</span>
                </li>
              </ul>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Core Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions 
              to how we work with our clients and each other.
=======
      {/* Company Values */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do, from product development to client relationships.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
=======
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From humble beginnings to global technology leadership, here's how 
              we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-pink"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-6">
                      <div className="text-zion-cyan font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-zion-slate-light">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
>>>>>>> origin/cursor/build-and-fix-errors-e276
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
      {/* Company Story */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              From a bold vision to a revolutionary technology company, discover the journey that brought us here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
=======
      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              From startup to global technology leader - our story of innovation and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
=======
              From startup to industry leader, discover the milestones that shaped our company.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
              ))}
=======
      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">AI Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">1000+</div>
              <div className="text-zion-slate-light">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Team Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              cybersecurity, quantum computing, and digital transformation.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg"
            >
              <Users className="w-6 h-6" />
              <span>View Our Team</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
=======
      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development
=======
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              To democratize cutting-edge technology and make AI, cloud computing, and digital transformation 
              accessible to businesses of all sizes. We believe that every organization deserves access to 
              the tools and expertise needed to thrive in the digital age.
            </p>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              Through our innovative solutions and dedicated team, we're helping companies across industries 
              transform their operations, enhance customer experiences, and achieve sustainable growth.
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-slate-light">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">200+</div>
                  <div className="text-zion-slate-light">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-zion-slate-light">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-zion-slate-light">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of organizations that trust Zion Tech Group to drive their digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
=======
      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in technology, AI, and business transformation.
=======
      {/* Team Section */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Passionate experts dedicated to pushing the boundaries of technology and delivering exceptional results.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 text-4xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-zion-cyan font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="text-zion-slate-light text-sm mb-3">
                    {member.expertise}
                  </p>
                  <div className="text-zion-slate-light text-xs">
                    Experience: {member.experience}
                  </div>
                </Card>
              </motion.div>
            ))}
>>>>>>> origin/cursor/build-and-fix-errors-e276
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
        </div>
      </section>

<<<<<<< HEAD
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="lg:w-1/3 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
                </div>
              </motion.div>
=======
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              What We Do
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the diverse needs of modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate text-center">
                  {service.description}
                </p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
=======
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-semibold mb-3">{member.role}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${value.color} rounded-lg text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-zion-cyan text-sm mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan mr-1 mb-1"
                    >
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
<<<<<<< HEAD
            Join hundreds of companies already leveraging our AI and autonomous technology solutions.
=======
            Join hundreds of organizations that trust Zion Tech Group with their digital transformation.
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
=======
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </Link>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for businesses and organizations. We are committed to delivering cutting-edge 
            technology services that drive growth and efficiency.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible in technology</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering excellence in every project we undertake</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
>>>>>>> origin/main
          </div>
=======
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our company forward
=======
      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
=======
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              From humble beginnings to industry leadership - our story of growth and innovation.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                <div className={`absolute top-0 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark ${
                  index % 2 === 0 ? 'right-0 transform translate-x-2' : 'left-0 transform -translate-x-2'
                }`}></div>
                
                <div className={`max-w-md ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}>
                  <div className="bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-zion-slate-light">{item.description}</p>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Core Values
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${value.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
              </motion.div>
            );
          })}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Clients Worldwide" },
              { icon: Globe, number: "25+", label: "Countries Served" },
              { icon: Award, number: "50+", label: "Industry Awards" },
              { icon: Rocket, number: "100+", label: "Innovation Projects" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
=======
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                Kleber
              </h3>
              <p className="text-zion-slate mb-2">CEO & Founder</p>
              <p className="text-sm text-zion-slate-light">
                Technology visionary with over 10 years of experience in software development and business transformation.
              </p>
            </div>
            {/* Add more team members as needed */}
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
=======
      {/* Team Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a team that's revolutionizing technology and making a difference in the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Our Team
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Partner With Us
=======
            <h2 className="text-4xl font-bold mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional technology solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kleber Santos',
                role: 'CEO & Founder',
                description: 'Visionary leader with 15+ years in technology and business transformation.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Sarah Chen',
                role: 'CTO',
                description: 'Technology expert specializing in AI, cloud architecture, and emerging technologies.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Head of AI Research',
                description: 'Leading our AI initiatives and developing cutting-edge machine learning solutions.',
                image: '/api/placeholder/300/300'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-zion-cyan mb-3">{member.role}</div>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader with 15+ years in tech innovation and business transformation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Team</h3>
              <p className="text-zion-cyan mb-2">AI Research & Development</p>
              <p className="text-zion-slate-light text-sm">
                Experts in machine learning, neural networks, and AI ethics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dev Team</h3>
              <p className="text-zion-cyan mb-2">Software Development</p>
              <p className="text-zion-slate-light text-sm">
                Full-stack developers specializing in scalable microservices and cloud solutions.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Join hundreds of companies that have already revolutionized their operations 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
              </button>
=======
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and create lasting competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start a Conversation
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request a Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
        </div>
      </section>
=======

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We are a leading technology company specializing in AI, IT services, and micro SAAS solutions.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg leading-relaxed">
            Zion Tech Group is dedicated to transforming businesses through innovative technology solutions. 
            Our team of experts combines cutting-edge AI with proven IT infrastructure to deliver results 
            that drive growth and efficiency.
          </p>
        </div>
<<<<<<< HEAD
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their operations 
                and achieved remarkable growth with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Partnership Inquiry'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start a Partnership
                </FuturisticNeonButton>
                <FuturisticNeonButton
                  onClick={() => window.location.href = '/contact'}
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get in Touch
                </FuturisticNeonButton>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/build-and-fix-errors-e276
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default AboutPage;
=======
export default About;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
export default About;
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
export default About;
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experienced professionals passionate about technology and committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium">{member.role}</div>
              </div>
              <p className="text-zion-slate-light mb-6 text-center">{member.description}</p>
              <div>
                <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                <ul className="space-y-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Journey
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Key milestones that have shaped our company and our impact on the technology industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zion-cyan/30 h-full"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                  <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Project
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Users className="w-5 h-5" />
                Join Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
=======
};

export default About;
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
export default About;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to 25+ countries and launched revolutionary AI consciousness platform.'
    },
    {
      year: '2023',
      title: 'AI Breakthrough',
      description: 'Developed breakthrough AI solutions that increased client efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing applications for enterprise solutions.'
    },
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology solutions.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO
        title="About Zion Tech Group - Our Story & Mission"
        description="Learn about Zion Tech Group's journey from startup to global technology leader, our mission to revolutionize business through AI and innovation, and the team behind our success."
        keywords="about Zion Tech Group, company history, team, mission, vision, technology innovation"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-zion-blue-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      <stat.icon className="h-12 w-12" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-xl text-zion-slate-light mb-6 leading-relaxed">
                    To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve digital transformation and competitive advantage through innovative AI, cybersecurity, and cloud solutions.
                  </p>
                  <p className="text-lg text-zion-slate-light leading-relaxed">
                    We believe that every business deserves access to enterprise-grade technology that can drive growth, improve efficiency, and create new opportunities in the digital economy.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/30 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-zion-cyan" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Core Values
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The principles that guide everything we do and every solution we deliver
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="text-center group"
                    variants={itemVariants}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Meet Our Team
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The brilliant minds behind our innovative solutions and exceptional service delivery
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                    variants={itemVariants}
                  >
                    <div className="text-6xl mb-4 text-center">{member.avatar}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white text-center">{member.name}</h3>
                    <p className="text-zion-cyan font-semibold mb-4 text-center">{member.role}</p>
                    <p className="text-zion-slate-light text-center leading-relaxed">{member.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  From startup to global technology leader - our story of innovation and growth
                </p>
              </motion.div>

              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {timeline.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="flex items-center space-x-8"
                    variants={itemVariants}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
export default About;
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-zion-cyan" />
                Cutting-Edge Technology
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Latest AI/ML algorithms and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Quantum computing capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Advanced cybersecurity solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Cloud-native architecture</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-zion-cyan" />
                Proven Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">15+ years of technology experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Certified security professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Industry-recognized solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Continuous learning and innovation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our revolutionary technology solutions can transform your business 
              and help you achieve your goals. Our team is ready to partner with you on your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-2">{achievement.description}</p>
                      <span className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our solutions, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef

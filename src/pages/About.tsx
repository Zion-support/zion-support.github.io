import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Brain,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

import { Footer } from "@/components/Footer";
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
=======
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
=======
=======
=======
import React from 'react';
=======
=======
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Brain,
  TrendingUp,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Delivered', value: '500+', icon: Code },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Technologies', value: '100+', icon: Zap },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.'
    },
    {
      year: '2017',
      title: 'AI Division Launch',
      description: 'Launched our AI and machine learning services division.'
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
    }
  ];
=======

      title: 'Innovation First',
      description: 'We stay at the cutting edge of technology to deliver the most advanced solutions',
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by your outcomes',
      icon: <Circle className="h-8 w-8 text-green-500" />
    },
    {
      title: 'Global Excellence',
      description: 'Consistent quality and service standards across all our global operations',
      icon: <Award className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Continuous Learning',
      description: 'We continuously evolve our skills and knowledge to serve you better',
      icon: <Zap className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <>
      <SEO 
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
    }
  ];
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
=======
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        canonical="https://app.ziontechgroup.com/about"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
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
=======
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
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
    },
    {
      icon: Globe,
      title: 'Global Impact',
  Award, 
  Globe, 
  Rocket, 
  Shield, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Target,
  Heart,
  Eye
} from 'lucide-react';

export default function About() {
  const companyStats = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across diverse industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals with diverse expertise"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    }
  ];

  const companyHistory = [
    {
      year: "2020",
      title: "Foundation",
      description: "Zion Tech Group was founded with a vision to democratize cutting-edge technology and make AI accessible to businesses of all sizes.",
      achievements: ["Company established", "First AI research team formed", "Initial funding secured"]
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description: "Developed our first AI-powered business solution and secured our first enterprise client.",
      achievements: ["First AI solution launched", "Enterprise client acquired", "Research partnerships established"]
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our service portfolio and opened our first international office.",
      achievements: ["Service portfolio expanded", "International office opened", "Team doubled in size"]
    },
    {
      year: "2023",
      title: "Innovation Milestone",
      description: "Achieved breakthrough in quantum computing research and launched autonomous business operations platform.",
      achievements: ["Quantum computing breakthrough", "Autonomous platform launch", "Industry recognition awards"]
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as a leader in AI solutions and expanded to serve clients in 25+ countries.",
      achievements: ["Industry leadership recognition", "Global expansion", "Strategic partnerships formed"]
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to push boundaries in AI, quantum computing, and autonomous systems.",
      achievements: ["Next-gen AI platform", "Quantum commercial solutions", "Autonomous business revolution"]
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer & Chief AI Officer",
      bio: "Dr. Chen is a visionary leader with over 15 years of experience in AI research and enterprise technology. She holds a PhD in Computer Science from MIT and has led breakthrough research in autonomous AI systems.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Research & Development"],
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      bio: "James leads our technology strategy and oversees the development of cutting-edge solutions. He has extensive experience in cloud architecture, cybersecurity, and emerging technologies.",
      expertise: ["Cloud Architecture", "Cybersecurity", "Technology Strategy"],
      image: "/images/team/james-wilson.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      bio: "Dr. Rodriguez leads our quantum computing and advanced research initiatives. His work has been published in leading scientific journals and has received international recognition.",
      expertise: ["Quantum Computing", "Research & Development", "Scientific Innovation"],
      image: "/images/team/michael-rodriguez.jpg"
    }
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket,
      details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches"
      ]
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award,
      details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Customer satisfaction focus"
      ]
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users,
      details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Knowledge sharing culture"
      ]
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield,
      details: [
        "Transparent communication",
        "Ethical AI development",
        "Trust-based relationships"
      ]
    }
  ];

  const awards = [
    {
      title: "Top AI Solutions Provider 2024",
      organization: "TechResearch Insights",
      description: "Recognized for excellence in AI-powered business solutions and innovation",
      year: "2024"
    },
    {
      title: "Innovation Excellence Award",
      organization: "Technology Innovation Forum",
      description: "Awarded for breakthrough developments in quantum computing and autonomous systems",
      year: "2023"
    },
    {
      title: "Best Cybersecurity Solution",
      organization: "Security Excellence Awards",
      description: "Recognized for outstanding cybersecurity and compliance automation solutions",
      year: "2023"
    },
    {
      title: "Rising Star in Tech",
      organization: "Global Technology Awards",
      description: "Acknowledged as an emerging leader in the technology industry",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
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
    }
  ];

  const milestones = [
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
  ];

  const team = [
    {
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
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
=======
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "10x", label: "Performance Improvement", icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge AI and quantum technologies"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering measurable results"
    },
    {
      icon: Star,
      title: "Future-Focused",
      description: "Anticipating tomorrow's challenges and building solutions today"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to revolutionize technology"
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Launched our first AI autonomous systems for enterprise clients"
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Introduced quantum computing infrastructure solutions"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries worldwide"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and quantum technology"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to pioneer the next generation of technology solutions"
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology innovation",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "CTO",
      description: "Quantum computing expert with PhD from MIT",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI Research",
      description: "Leading our AI autonomous systems development",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Security Officer",
      description: "Cybersecurity specialist with government experience",
      image: "/images/team/emily-watson.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Pioneering the future of technology with revolutionary AI autonomous systems, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
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
=======
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to revolutionize the tech and AI marketplace, our team, and our commitment to innovation."
        keywords="Zion Tech Group, about us, tech marketplace, AI marketplace, company mission"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative marketplace solutions, 
            AI integration, and sustainable tech practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, cloud computing, and digital transformation to achieve their goals.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that technology should be accessible, scalable, and transformative, 
                driving innovation across industries and creating lasting value for our clients.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl flex items-center justify-center">
                <Target className="w-32 h-32 text-zion-cyan/40" />
              </div>
            </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
=======
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              We are a forward-thinking technology company dedicated to democratizing cutting-edge 
              AI solutions, quantum computing, and autonomous systems. Our mission is to empower 
              businesses of all sizes to achieve extraordinary results through innovative technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                <span>Innovation Leader</span>
              </div>
=======
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className="text-zion-slate-light text-lg">
                By connecting talent with opportunity and innovation with implementation, we're creating 
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

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
              <p className="text-zion-slate-light text-lg">
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
                alt="Tech innovation"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="text-center content-section">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-zion-slate-light">
                  We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light">
                  We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                <p className="text-zion-slate-light">
                  We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
=======
=======
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
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries.'
    },
    {
      year: '2023',
      title: 'Autonomous Systems',
      description: 'Pioneered autonomous business operations and AI-powered decision systems.'
    },
    {
      year: '2025',
      title: 'Future Technologies',
      description: 'Leading the charge in emerging technologies and next-generation solutions.'
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
=======
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light">{value.description}</p>
                </motion.div>
=======
      {/* Company Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>
            
            <div className="space-y-12">
              {companyHistory.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                {/* Member Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{value.description}</p>
                  
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </section>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses through 
            innovative AI solutions, quantum computing, and cutting-edge digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital age.
              </p>
              <p className="text-lg text-gray-300">
                We believe that technology should be an enabler, not a barrier, and we work tirelessly 
                to make advanced solutions accessible to businesses of all sizes.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the global leader in AI-powered technology solutions, pioneering the future of 
                business automation and digital transformation.
              </p>
              <p className="text-lg text-gray-300">
                We envision a world where every business can leverage the power of AI, quantum computing, 
                and autonomous systems to achieve unprecedented success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
=======
      {/* Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold">{award.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <p className="text-cyan-400 text-sm mb-3">{award.organization}</p>
              <p className="text-gray-300 text-sm">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

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
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </motion.div>
            );
          })}
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Team Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
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
=======
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact in numbers - delivering results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and create lasting competitive advantages.
=======
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can transform your business and help you 
              achieve extraordinary results in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
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
              to="/case-studies"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
=======
          </div>
        </div>
      </div>
    </div>
=======
      </main>
      
    </>
  );
}

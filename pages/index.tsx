import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Users,
  Clock,
  Star
} from 'lucide-react';
import Layout from '../components/Layout';

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: FileText,
    href: '/docs',
    color: 'from-blue-600 to-blue-800',
    items: ['API Reference', 'Integration Guides', 'Code Examples', 'Best Practices']
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and implementations',
    icon: BarChart3,
    href: '/case-studies',
    color: 'from-green-600 to-green-800',
    items: ['Client Success Stories', 'ROI Analysis', 'Implementation Details', 'Lessons Learned']
  },
  {
    title: 'Blog',
    description: 'Latest insights and technology trends',
    icon: MessageSquare,
    href: '/blog',
    color: 'from-purple-600 to-purple-800',
    items: ['Technology Insights', 'Industry Trends', 'Best Practices', 'Expert Opinions']
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Settings,
    href: '/api-docs',
    color: 'from-orange-600 to-orange-800',
    items: ['REST API', 'GraphQL', 'SDKs', 'Webhooks']
  }
];

const additionalResources = [
  {
    title: 'Tutorials',
    description: 'Step-by-step learning guides',
    icon: BookOpen,
    href: '/tutorials',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    title: 'Guides',
    description: 'Comprehensive how-to guides',
    icon: Code,
    href: '/guides',
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: Users,
    href: '/faq',
    color: 'from-teal-600 to-teal-800'
  },
  {
    title: 'Support',
    description: 'Get help and support',
    icon: Clock,
    href: '/support',
    color: 'from-red-600 to-red-800'
  }
];

const featuredContent = [
  {
    title: 'Getting Started with Our API',
    type: 'Tutorial',
    description: 'Learn how to integrate with our platform in under 30 minutes',
    readTime: '15 min read',
    difficulty: 'Beginner',
    rating: 4.8
  },
  {
    title: 'Enterprise Security Best Practices',
    type: 'Guide',
    description: 'Comprehensive security guidelines for enterprise implementations',
    readTime: '25 min read',
    difficulty: 'Advanced',
    rating: 4.9
  },
  {
    title: 'AI Integration Case Study',
    type: 'Case Study',
    description: 'How we helped a Fortune 500 company implement AI solutions',
    readTime: '20 min read',
    difficulty: 'Intermediate',
    rating: 4.7
  }
];

export default function ResourcesPage() {
  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, tutorials, and API reference for developers and businesses."
      keywords="resources, documentation, case studies, blog, API reference, tutorials, guides, support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Developer{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Everything you need to build, integrate, and scale with our platform. 
                Documentation, tutorials, case studies, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/docs">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start with Docs
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Support
                  </span>
                </Link>
              </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];
=======
import Layout from '../components/Layout';
import { Brain, Server, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> main

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Transform your business with intelligent automation and data-driven insights.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions tailored to your business needs.',
    features: ['Cloud Migration', 'DevOps & CI/CD', 'Container Orchestration', 'Auto-scaling']
  },
  {
    icon: Zap,
    title: 'Micro SaaS Solutions',
    description: 'Custom software-as-a-service applications that drive growth and efficiency.',
    features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'User Management']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cloud services, and technology consulting. Transform your business with innovative technology." />
        <meta name="keywords" content="AI solutions, cloud services, technology consulting, software development, cybersecurity" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-300">AI Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Leading provider of AI solutions, cloud services, and technology consulting
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Cloud,
  Network,
  Shield,
  Zap,
  Globe,
  Code,
  Database,
  Settings,
  Brain,
  Phone,
  Mail,
  MapPin
=======
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Zap,
  Shield,
  CheckCircle,
  Users,
  Globe,
  Award,
  Building,
  Rocket,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Settings,
  BarChart3,
  Cpu,
  Car,
  MessageSquare,
  Phone,
  FileText,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Lock,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Handshake
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  { number: '200+', label: 'Happy Clients', icon: Users },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '99%', label: 'Client Satisfaction', icon: Star }
=======
import Layout from '../components/Layout';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Cpu, Rocket, Car, Eye } from 'lucide-react';

<<<<<<< HEAD
const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
    href: "/ai-services",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services", 
    description: "Comprehensive technology infrastructure",
    icon: Network,
    href: "/it-services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "Innovative software-as-a-service solutions",
    icon: Cloud,
    href: "/micro-saas",
    color: "from-green-500 to-emerald-500"
=======
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "50+", label: "Expert Team Members" },
  { number: "24/7", label: "Support Available" }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
];

const services = [
  {
<<<<<<< HEAD
    icon: Brain,
    title: 'AI Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions.',
    href: '/ai-services',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: Network,
    title: 'IT Services',
    description: 'Comprehensive IT solutions to keep your business running smoothly.',
    href: '/it-services',
    features: ['Infrastructure Management', 'Cloud Migration', 'Cybersecurity', 'Technical Support']
  },
  {
    icon: Cloud,
    title: 'Micro SaaS',
    description: 'Scalable software solutions designed for modern businesses.',
    href: '/micro-saas',
    features: ['Custom Development', 'API Integration', 'Scalable Architecture', '24/7 Support']
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
  }
];

const solutions = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security protocols and compliance standards"
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with innovative technology solutions.',
    href: '/solutions/digital-transformation'
  },
  {
<<<<<<< HEAD
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide infrastructure and 24/7 support"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions for your specific needs"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Powerful insights from your business data"
  },
  {
    icon: Settings,
    title: "Easy Integration",
    description: "Seamless integration with existing systems"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "ZionTech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupXYZ",
    content: "The micro SaaS solutions are game-changing. We launched our product 6 months ahead of schedule.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, GlobalCorp",
    content: "Outstanding support and innovative solutions. They truly understand enterprise needs.",
    rating: 5
=======
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security solutions and best practices.',
    href: '/solutions/cybersecurity'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with powerful analytics tools.',
    href: '/solutions/data-analytics'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connect and manage your devices with intelligent IoT platforms.',
    href: '/solutions/iot'
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, href: '/industries/healthcare' },
  { name: 'Finance', icon: DollarSign, href: '/industries/finance' },
  { name: 'Education', icon: BookOpen, href: '/industries/education' },
  { name: 'Manufacturing', icon: Settings, href: '/industries/manufacturing' },
  { name: 'Retail', icon: ShoppingCart, href: '/industries/retail' },
  { name: 'Government', icon: Building, href: '/industries/government' }
];

export default function HomePage() {
  return (
<<<<<<< HEAD
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
=======
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services."
      keywords="technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We deliver cutting-edge AI, IT services, and micro SaaS solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
=======
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for your business',
    icon: Brain,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    link: '/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support solutions',
    icon: Network,
<<<<<<< HEAD
    features: ['Cloud Migration', 'Network Security', 'System Administration', 'Technical Support'],
    link: '/it-services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and management services',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
    link: '/cloud-solutions'
=======
    features: ['Cloud Migration', 'DevOps', 'Cybersecurity', 'System Integration'],
    href: '/it-services'
  },
  {
    title: 'Micro SaaS',
    description: 'Scalable software-as-a-service platforms and solutions',
    icon: Cloud,
    features: ['Custom Development', 'API Integration', 'White-label Solutions', 'Maintenance'],
    href: '/micro-saas'
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "FinanceFlow Ltd.",
    role: "CEO",
    content: "Their cloud migration expertise saved us months of work and significantly improved our performance.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "HealthCare Plus",
    role: "IT Director",
    content: "Outstanding cybersecurity implementation. We feel completely secure with their solutions.",
    rating: 5
>>>>>>> main
  }
];

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Zion Tech Group - Technology Solutions for Modern Businesses</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and cloud infrastructure. Transform your business with cutting-edge technology." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
      keywords="AI solutions, technology consulting, cloud services, automation, cybersecurity, web development, mobile development"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Leading provider of AI services, IT solutions, and cloud infrastructure
              </p>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                We help businesses harness the power of cutting-edge technology to drive innovation, efficiency, and growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
=======
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}AI & Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of innovative AI services, IT solutions, and micro SaaS platforms. 
                Empowering businesses to thrive in the digital age.
>>>>>>> main
              </p>
              <p className="text-lg mb-8 text-gray-300">
                We help businesses harness the power of artificial intelligence and cutting-edge technology to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
=======
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> main
                >
                  Our Services
                </Link>
              </div>
<<<<<<< HEAD
=======
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}AI & Technology
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Leading provider of AI solutions, cloud services, and technology consulting. 
                We help businesses achieve their goals through innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
>>>>>>> main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Main Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
=======
<<<<<<< HEAD
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
=======
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
>>>>>>> main
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
<<<<<<< HEAD
                  <div className="text-gray-600">
=======
                  <div className="text-gray-600 font-medium">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
                    {stat.label}
                  </div>
                </motion.div>
              ))}
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            </div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
>>>>>>> main
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential resources to help you get started and succeed with our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {resource.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More resources to help you learn, troubleshoot, and get the most out of our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Access
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Popular and highly-rated content to help you get started quickly.
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
                Comprehensive technology solutions designed to accelerate your digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> main
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
=======
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
>>>>>>> main
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
<<<<<<< HEAD
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <ul className="mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
=======
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
=======
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                </div>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
>>>>>>> main
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
<<<<<<< HEAD
              {featuredContent.map((content, index) => (
                <motion.div
                  key={content.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {content.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {content.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{content.readTime}</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">
                      {content.difficulty}
                    </span>
                  </div>
                  
                  <Link
                    href="/docs"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
=======
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>> main
>>>>>>> main
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
=======
        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ZionTech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by industry leaders worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
=======
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions designed to meet the unique needs of modern businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions designed to solve complex business challenges.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link href={solution.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience across various industries, delivering tailored solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <Link href={industry.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
>>>>>>> main
=======
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </motion.div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
>>>>>>> main
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's work together to create innovative solutions that drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
=======
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
<<<<<<< HEAD
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/support">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and discover how we can help transform your business.
=======
<<<<<<< HEAD
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied clients who trust ZionTech Group for their technology needs
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and technology solutions can help you achieve your goals.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
=======
<<<<<<< HEAD
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
>>>>>>> main
              </div>
            </motion.div>
>>>>>>> main
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
          </div>
        </section>
<<<<<<< HEAD
      </Layout>
    </>
=======
      </div>
    </Layout>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
>>>>>>> main
=======
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
  );
};

export default Page;

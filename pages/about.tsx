<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
import { motion } from 'framer-motion';
>>>>>>> main
>>>>>>> main
import Layout from '../components/Layout';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
import { 
<<<<<<< HEAD
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
=======
>>>>>>> main
  Brain, 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
<<<<<<< HEAD
  Star,
  TrendingUp,
  Building,
  Rocket,
  Phone,
  Mail,
  MapPin
=======
<<<<<<< HEAD
  Star, 
<<<<<<< HEAD
  DollarSign, 
  Clock, 
  BarChart3
=======
  Rocket, 
  Code
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Building2,
  Rocket,
  Factory,
  Cpu,
  Network,
  Code,
  Brain,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  BarChart3,
  Leaf,
  Satellite,
  HelpCircle,
  Menu,
  X,
  Building,
  DollarSign,
  ShoppingCart,
  Heart,
  Eye,
  Database,
  Cloud,
  Server,
  Shield,
  Zap,
  Lock
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';
=======
  Star
} from 'lucide-react';

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    image: "/team/sarah-chen.jpg",
    bio: "Leading AI research with 15+ years in machine learning and neural networks.",
    expertise: ["Machine Learning", "Deep Learning", "AI Ethics"]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    image: "/team/michael-rodriguez.jpg",
    bio: "Technology visionary with expertise in scalable cloud architectures.",
    expertise: ["Cloud Computing", "DevOps", "System Architecture"]
  },
  {
    name: "Dr. Priya Patel",
    role: "Head of Data Science",
    image: "/team/priya-patel.jpg",
    bio: "Data science expert specializing in predictive analytics and big data.",
    expertise: ["Data Science", "Analytics", "Statistics"]
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    image: "/team/james-wilson.jpg",
    bio: "Full-stack developer with passion for creating innovative solutions.",
    expertise: ["Full-Stack Development", "React", "Node.js"]
  }
];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

<<<<<<< HEAD
const values = [
  {
    icon: Brain,
<<<<<<< HEAD
    title: 'Innovation',
    description: 'We push the boundaries of technology to create cutting-edge solutions that drive real business value.'
=======
<<<<<<< HEAD
    title: 'Innovation',
<<<<<<< HEAD
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
=======
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions'
>>>>>>> main
>>>>>>> main
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
  BarChart3
} from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We push the boundaries of technology to create cutting-edge solutions that transform businesses.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    icon: Users,
    title: 'Collaboration',
<<<<<<< HEAD
<<<<<<< HEAD
    description: 'We work closely with our clients as partners, ensuring every solution is tailored to their unique needs.'
=======
<<<<<<< HEAD
    description: 'We work closely with our clients as partners, fostering long-term relationships built on trust and mutual success.'
=======
    description: 'We work closely with our clients as partners in their digital transformation journey'
>>>>>>> main
>>>>>>> main
=======
    description: 'We work closely with our clients as partners, ensuring their success is our success.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    icon: Award,
    title: 'Excellence',
<<<<<<< HEAD
<<<<<<< HEAD
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
=======
<<<<<<< HEAD
    description: 'We strive for the highest quality in everything we do, from code to customer service, ensuring exceptional results.'
=======
    description: 'We maintain the highest standards of quality in everything we deliver'
>>>>>>> main
>>>>>>> main
=======
    description: 'We maintain the highest standards in everything we do, delivering quality that exceeds expectations.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    icon: Target,
    title: 'Results',
<<<<<<< HEAD
<<<<<<< HEAD
    description: 'We focus on delivering measurable outcomes that directly impact your bottom line.'
=======
    description: 'We focus on measurable outcomes that drive real business value and growth.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    icon: Heart,
    title: 'Integrity',
<<<<<<< HEAD
    description: 'We believe in doing the right thing, even when no one is watching.'
=======
    description: 'We conduct business with honesty, transparency, and ethical practices.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    icon: Globe,
    title: 'Global Impact',
<<<<<<< HEAD
    description: 'We build solutions that can scale globally while respecting local needs and cultures.'
=======
<<<<<<< HEAD
    description: 'We focus on delivering measurable outcomes that directly impact our clients\' bottom line and business growth.'
>>>>>>> main
=======
    description: 'We build solutions that make a positive difference in the world.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  }
];

const stats = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

<<<<<<< HEAD
=======
  { number: '18+', label: 'Years Experience' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '150+', label: 'Team Members' },
  { number: '50+', label: 'Countries Served' }
];

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that transform business operations',
    icon: Brain
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable cloud solutions for modern businesses',
    icon: Globe
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategies and implementation',
    icon: Rocket
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions and protection',
    icon: Shield
  }
];

=======
    description: 'We focus on delivering measurable business outcomes and ROI'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We serve clients worldwide with localized expertise and support'
  }
];

const team = [
  {
    name: 'Dr. Kleber Santos',
    role: 'CEO & Founder',
    description: '20+ years in AI and technology leadership',
    image: '/team/kleber.jpg'
=======
const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/john-smith.jpg',
    bio: 'Visionary leader with 15+ years in tech innovation.'
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
<<<<<<< HEAD
    description: 'Expert in AI architecture and cloud solutions',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI Research',
    description: 'PhD in Machine Learning, 15+ years experience',
    image: '/team/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Engineering',
    description: 'Full-stack development and DevOps expertise',
    image: '/team/emily.jpg'
  }
];

const stats = [
  { number: '20+', label: 'Years Experience' },
  { number: '3,500+', label: 'Projects Completed' },
  { number: '200+', label: 'Team Members' },
  { number: '95+', label: 'Services & Solutions' },
  { number: '50+', label: 'Countries Served' },
  { number: '99.9%', label: 'Client Satisfaction' }
];

>>>>>>> main
>>>>>>> main
export default function About() {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions." />
<<<<<<< HEAD
=======
        <meta name="keywords" content="about us, company, mission, values, team, technology solutions" />
>>>>>>> main
      </Head>
      
      <Layout>
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
        <title>About Us | ZionTech Group</title>
        <meta name="description" content="Learn about ZionTech Group's mission, values, and team. We're leading the way in AI services, IT solutions, and micro SaaS platforms." />
        <meta name="keywords" content="about us, company, team, mission, values, AI experts, technology leaders" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> main
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering businesses through innovative technology solutions
              </p>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through cutting-edge AI, cloud solutions, and digital innovation.
=======
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering businesses through innovative technology solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Our Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>
=======
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}ZionTech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI services, IT solutions, 
                and micro SaaS platforms. Our mission is to transform businesses through 
                innovative technology solutions.
>>>>>>> main
              </p>
>>>>>>> main
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
=======
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
>>>>>>> main
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
=======
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
>>>>>>> main
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
>>>>>>> main
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and technology solutions that drive 
                  growth, efficiency, and innovation. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Since our founding, we've been committed to delivering exceptional value through 
                  innovative solutions, expert guidance, and unwavering support for our clients' 
                  success.
                </p>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Expert Team</h4>
                      <p className="text-gray-300">20+ years of combined experience in AI and technology</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Proven Results</h4>
                      <p className="text-gray-300">3,500+ successful projects and 99.9% client satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">24/7 Support</h4>
                      <p className="text-gray-300">Round-the-clock support and maintenance services</p>
                    </div>
                  </li>
                </ul>
=======
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative problem-solving."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust, transparency, and results."
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "We prioritize the security of your data and systems with industry-leading practices and compliance standards."
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, ensuring long-term value and adaptability to changing needs."
  }
];

const achievements = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Reliable systems with industry-leading availability"
  },
  {
    number: "50+",
    label: "Team Members",
    description: "Expert professionals dedicated to your success"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance when you need it"
  }
];

export default function About() {
=======
const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.',
      icon: Rocket
    },
    {
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and drive real business value.',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring alignment with their goals.',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.',
      icon: Shield
    }
  ];

>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
  return (
    <MainLayout 
      title="About Us - Zion Tech Group"
<<<<<<< HEAD
<<<<<<< HEAD
      description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      keywords="about us, company, mission, values, team, technology solutions"
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the future of technology with innovative solutions that transform businesses and empower communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve their digital transformation goals through innovative AI, IT services, and micro SaaS platforms.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Innovation First</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the global leader in technology solutions, creating a world where every business can leverage the power of AI and digital innovation to solve complex challenges and drive sustainable growth.
=======
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and technology solutions that transform businesses."
      keywords="about us, AI company, technology team, company mission, AI experts, tech leadership"
    >
=======
      description="Learn about Zion Tech Group's mission, values, and team. We're passionate about delivering innovative technology solutions that transform businesses."
      keywords="about us, company, team, mission, values, technology company, AI experts, software development"
    >
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
    image: '/images/team/sarah-johnson.jpg',
    bio: 'Technical expert specializing in AI and cloud architecture.'
  },
  {
    name: 'Mike Chen',
    role: 'Head of Engineering',
    image: '/images/team/mike-chen.jpg',
    bio: 'Full-stack developer passionate about scalable solutions.'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: '/images/team/emily-davis.jpg',
    bio: 'Creative director focused on user experience excellence.'
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                cutting-edge development, and exceptional service delivery.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative solutions, 
                cutting-edge AI services, and comprehensive IT infrastructure.
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of excellence and innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We conduct business with the highest ethical standards, building trust through transparency and reliability."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership, both within our organization and with our clients."
              },
              {
                icon: Zap,
                title: "Excellence",
                description: "We strive for excellence in everything we do, delivering solutions that exceed expectations."
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "We understand our clients' challenges and work with compassion to find the best solutions for their needs."
              },
              {
                icon: Globe,
                title: "Impact",
                description: "We're committed to creating positive change in the world through technology that makes a difference."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're proud of the measurable impact we've made in the technology landscape.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: CheckCircle },
              { number: "200+", label: "Happy Clients", icon: Users },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "99%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
=======
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize artificial intelligence and advanced technology, making it accessible 
                  and beneficial for businesses of all sizes. We believe that every organization should 
                  have the power to leverage AI for growth, efficiency, and innovation.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of experts works tirelessly to create solutions that not only meet today's 
                  challenges but anticipate tomorrow's opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                      <div className="text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </motion.div>
=======
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
            </div>
          </div>
        </section>

        {/* Values Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-6">
=======
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence and innovation.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture
>>>>>>> main
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                The principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
=======
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
=======
<<<<<<< HEAD
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
>>>>>>> main
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<<<<<<< HEAD
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
=======
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
=======
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
<<<<<<< HEAD
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
>>>>>>> main
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
=======
        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive technology solutions to help your business thrive in the digital age.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                technology, and business innovation
>>>>>>> main
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
>>>>>>> main
=======
        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                The brilliant minds behind our innovative solutions and exceptional service delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
                Our diverse team of experts brings together decades of experience in technology, 
                design, and business strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
<<<<<<< HEAD
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
          </div>
        </section>

<<<<<<< HEAD
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, innovation, and business transformation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                description: "Visionary leader with 15+ years in tech innovation",
                icon: Rocket
              },
              {
                name: "Michael Chen",
                role: "CTO",
                description: "AI and machine learning expert with PhD in Computer Science",
                icon: Brain
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Engineering",
                description: "Full-stack development specialist and team builder",
                icon: Code
              },
              {
                name: "David Kim",
                role: "Head of AI Solutions",
                description: "Machine learning researcher and AI implementation expert",
                icon: Zap
              },
              {
                name: "Lisa Thompson",
                role: "Head of Client Success",
                description: "Customer experience champion and relationship builder",
                icon: Heart
              },
              {
                name: "Alex Morgan",
                role: "Head of Security",
                description: "Cybersecurity expert and compliance specialist",
                icon: Shield
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-gray-600">
                    {achievement.description}
                  </div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
=======
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}Zion Tech Group
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We're a team of passionate technologists dedicated to transforming businesses 
                  through innovative AI, cloud, and software solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, 
                  understandable, and transformative.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team combines deep technical expertise with business acumen to deliver 
                  solutions that not only work but also provide measurable value to our clients.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Cutting-edge technology expertise</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Dedicated support and maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Scalable and future-proof solutions</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to build the future of your business with cutting-edge technology.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our expertise and solutions
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge technology solutions.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get in Touch
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
<<<<<<< HEAD
<<<<<<< HEAD
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
>>>>>>> main
                >
                  Learn More
                </motion.button>
=======
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
                </Link>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </div>
>>>>>>> main
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
      </Layout>
    </>
=======

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
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/careers" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Join Our Team
                </Link>
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
                </Link>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
    </Layout>
>>>>>>> main
=======
      </div>
    </Layout>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
      </div>
    </>
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
  );
}
=======
    </MainLayout>
  );
};

export default AboutPage;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440

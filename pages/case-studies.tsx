import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Building, 
  CheckCircle, 
  Star, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Lock, 
  Award, 
  Target, 
  Users, 
  Lightbulb, 
  Rocket
} from 'lucide-react';
=======
<<<<<<< HEAD
import Layout from './components/Layout';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import {
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
<<<<<<< HEAD
=======
  Users,
  Clock,
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  CheckCircle,
<<<<<<< HEAD
  Building,
  Globe,
  Award,
  BarChart3,
  Brain,
  Shield,
  Zap
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Building, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  Star
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
} from 'lucide-react';
<<<<<<< HEAD
=======
=======
import Head from 'next/head';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Building, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  Star
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  Clock,
  Target,
  Zap,
  Shield,
  Cloud,
  Brain,
  Search
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  BarChart3,
  Building,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05

const caseStudies = [
  {
    id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",
=======
<<<<<<< HEAD
    title: 'AI-Powered E-commerce Transformation',
    client: 'TechRetail Inc.',
    industry: 'E-commerce',
    duration: '6 months',
    team: '8 members',
    challenge: 'TechRetail needed to improve their customer experience and increase sales through AI-powered personalization and automation.',
    solution: 'Implemented a comprehensive AI solution including recommendation engines, chatbots, and predictive analytics.',
    results: [
      '45% increase in conversion rates',
      '60% improvement in customer satisfaction',
      '35% reduction in support tickets',
      '25% increase in average order value'
    ],
    technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    image: '/case-studies/techretail.jpg',
    testimonial: {
      quote: 'Zion Tech Group transformed our entire e-commerce platform. The AI solutions they implemented have revolutionized our customer experience.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechRetail Inc.'
    },
=======
    title: "AI-Powered Healthcare Platform",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
    client: "Regional Medical Center",
=======
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    results: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction",
      "50% increase in efficiency"
=======
      "60% reduction in diagnosis time",
      "40% improvement in accuracy",
      "80% reduction in manual data entry",
      "95% patient satisfaction rate"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    ],
    technologies: ["AI/ML", "Computer Vision", "Data Analytics", "Cloud Computing"],
    duration: "6 months",
<<<<<<< HEAD
    team: "8 experts",
<<<<<<< HEAD
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"],
    image: "/images/case-studies/ecommerce-ai.jpg"
=======
    image: "/images/case-studies/healthcare-ai.jpg",
    icon: Brain
=======
      "60% reduction in diagnosis time",
      "40% improvement in accuracy",
      "80% reduction in manual data entry",
      "95% patient satisfaction rate"
    ],
    technologies: ["AI/ML", "Computer Vision", "Data Analytics", "Cloud Computing"],
    duration: "6 months",
    team: "12 experts",
    image: "/images/case-studies/healthcare-ai.jpg"
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    team: "12 experts",
    image: "/images/case-studies/healthcare-ai.jpg"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
<<<<<<< HEAD
<<<<<<< HEAD
    industry: "Finance",
    challenge: "Legacy system limitations and scalability issues",
=======
    industry: "Financial Services",
    challenge: "Legacy systems causing performance issues and high maintenance costs",
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "3x faster application performance",
      "Zero security incidents"
    ],
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    duration: "8 months",
    team: "15 experts",
    image: "/images/case-studies/cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework with 24/7 monitoring",
    results: [
      "100% compliance with industry standards",
      "90% reduction in security incidents",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
<<<<<<< HEAD
    team: "6 experts",
    image: "/images/case-studies/healthcare-security.jpg",
    icon: Shield
=======
    industry: "Financial Services",
    challenge: "Legacy systems causing performance issues and high maintenance costs",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "3x faster application performance",
      "Zero security incidents"
    ],
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    duration: "8 months",
    team: "15 experts",
    image: "/images/case-studies/cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework with 24/7 monitoring",
    results: [
      "100% compliance with industry standards",
      "90% reduction in security incidents",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
<<<<<<< HEAD
    duration: "4 months",
    team: "6 experts",
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    image: "/images/case-studies/healthcare-security.jpg"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
=======
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
    team: "8 experts",
    image: "/images/case-studies/cybersecurity.jpg"
=======
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
    results: [
      "95% diagnostic accuracy improvement",
      "60% reduction in diagnosis time",
=======
      "85% reduction in diagnosis time",
      "60% improvement in accuracy",
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
      "40% cost savings",
      "500+ patients served daily"
    ],
    duration: "6 months",
    team: "12 developers",
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
    image: "/api/placeholder/600/400",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
    featured: true
  },
  {
    id: 2,
<<<<<<< HEAD
    title: 'Healthcare Data Analytics Platform',
    client: 'MediCare Systems',
    industry: 'Healthcare',
    duration: '8 months',
    team: '12 members',
    challenge: 'MediCare needed to analyze large volumes of patient data to improve treatment outcomes and reduce costs.',
    solution: 'Built a comprehensive data analytics platform with AI-powered insights and predictive modeling.',
    results: [
      '40% reduction in readmission rates',
      '30% improvement in treatment accuracy',
      '50% faster diagnosis times',
      '20% reduction in operational costs'
    ],
    technologies: ['Data Analytics', 'Machine Learning', 'Cloud Computing', 'Security'],
    image: '/case-studies/medicare.jpg',
    testimonial: {
      quote: 'The analytics platform has been a game-changer for our healthcare operations. We can now make data-driven decisions that save lives.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      company: 'MediCare Systems'
    },
=======
    title: "E-commerce Platform Migration",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Legacy system causing performance issues and scalability problems",
    solution: "Migrated to modern cloud-based architecture with microservices",
    results: [
      "300% performance improvement",
      "99.9% uptime achieved",
      "50% reduction in server costs",
      "2M+ monthly active users"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["Next.js", "AWS", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
    featured: true
  },
  {
    id: 3,
<<<<<<< HEAD
    title: 'Financial Services Automation',
    client: 'FinTech Solutions',
    industry: 'Financial Services',
    duration: '4 months',
    team: '6 members',
    challenge: 'FinTech Solutions needed to automate their loan processing and risk assessment workflows.',
    solution: 'Developed an AI-powered automation platform for loan processing and risk assessment.',
    results: [
      '70% reduction in processing time',
      '85% improvement in accuracy',
      '90% reduction in manual errors',
      '50% increase in loan approval efficiency'
    ],
    technologies: ['Process Automation', 'Risk Assessment', 'Machine Learning', 'API Integration'],
    image: '/case-studies/fintech.jpg',
    testimonial: {
      quote: 'The automation platform has transformed our loan processing. We can now process applications 10x faster with higher accuracy.',
      author: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'FinTech Solutions'
    },
=======
    title: "Cybersecurity Implementation",
    client: "FinanceCorp",
    industry: "Financial Services",
    challenge: "Need for comprehensive security framework and compliance",
    solution: "Implemented zero-trust security architecture with advanced monitoring",
    results: [
      "100% compliance with SOC 2 Type II",
      "Zero security breaches",
      "99.9% threat detection rate",
      "50% reduction in security incidents"
    ],
    duration: "8 months",
    team: "15 security experts",
    technologies: ["Zero Trust", "SIEM", "WAF", "IAM"],
    image: "/api/placeholder/600/400",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
    featured: false
  },
  {
    id: 4,
<<<<<<< HEAD
    title: 'Manufacturing IoT Integration',
    client: 'Industrial Corp',
    industry: 'Manufacturing',
    duration: '10 months',
    team: '15 members',
    challenge: 'Industrial Corp needed to integrate IoT devices and implement predictive maintenance for their manufacturing facilities.',
    solution: 'Built a comprehensive IoT platform with AI-powered predictive maintenance and real-time monitoring.',
    results: [
      '60% reduction in unplanned downtime',
      '35% improvement in equipment efficiency',
      '45% reduction in maintenance costs',
      '80% improvement in predictive accuracy'
    ],
    technologies: ['IoT', 'Predictive Analytics', 'Cloud Computing', 'Real-time Monitoring'],
    image: '/case-studies/industrial.jpg',
    testimonial: {
      quote: 'The IoT platform has revolutionized our manufacturing operations. We can now predict and prevent equipment failures before they happen.',
      author: 'James Wilson',
      position: 'Plant Manager',
      company: 'Industrial Corp'
    },
=======
    title: "Data Analytics Platform",
    client: "ManufacturingCo",
    industry: "Manufacturing",
    challenge: "Need for real-time production monitoring and predictive analytics",
    solution: "Built comprehensive IoT and analytics platform",
    results: [
      "25% increase in production efficiency",
      "30% reduction in downtime",
      "40% improvement in quality control",
      "Real-time monitoring of 1000+ sensors"
    ],
    duration: "5 months",
    team: "10 developers",
    technologies: ["IoT", "Python", "TensorFlow", "InfluxDB"],
    image: "/api/placeholder/600/400",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
    featured: false
  },
  {
    id: 5,
<<<<<<< HEAD
    title: 'Educational AI Platform',
    client: 'EduTech University',
    industry: 'Education',
    duration: '7 months',
    team: '10 members',
    challenge: 'EduTech University needed to personalize learning experiences and improve student outcomes.',
    solution: 'Developed an AI-powered educational platform with personalized learning paths and adaptive assessments.',
    results: [
      '50% improvement in student engagement',
      '35% increase in course completion rates',
      '40% improvement in learning outcomes',
      '60% reduction in administrative workload'
    ],
    technologies: ['Educational AI', 'Personalization', 'Adaptive Learning', 'Analytics'],
    image: '/case-studies/edutech.jpg',
    testimonial: {
      quote: 'The AI platform has transformed how we deliver education. Students are more engaged and achieving better outcomes.',
      author: 'Dr. Lisa Thompson',
      position: 'Dean of Technology',
      company: 'EduTech University'
    },
=======
    title: "Cloud Migration Strategy",
    client: "TechStartup",
    industry: "Technology",
    challenge: "Need to scale infrastructure and reduce operational costs",
    solution: "Migrated entire infrastructure to AWS with auto-scaling",
    results: [
      "70% reduction in infrastructure costs",
      "Auto-scaling to handle 10x traffic",
      "99.9% availability",
      "50% faster deployment times"
    ],
    duration: "3 months",
    team: "6 developers",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
    featured: false
  },
  {
    id: 6,
<<<<<<< HEAD
    title: 'Cybersecurity AI Defense',
    client: 'SecureBank',
    industry: 'Banking',
    duration: '5 months',
    team: '8 members',
    challenge: 'SecureBank needed to enhance their cybersecurity posture with AI-powered threat detection and response.',
    solution: 'Implemented an AI-powered cybersecurity platform with real-time threat detection and automated response.',
    results: [
      '95% reduction in false positives',
      '80% faster threat detection',
      '70% improvement in response time',
      '90% reduction in security incidents'
    ],
<<<<<<< HEAD
    technologies: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automated Response'],
    image: '/case-studies/securebank.jpg',
    testimonial: {
      quote: 'The AI security platform has significantly strengthened our defense against cyber threats. We feel much more secure now.',
      author: 'Robert Kim',
      position: 'CISO',
      company: 'SecureBank'
    },
    featured: false
=======
    title: "Mobile App Development",
    client: "ServiceProvider",
    industry: "Services",
    challenge: "Need for mobile presence and customer engagement",
    solution: "Developed cross-platform mobile app with real-time features",
    results: [
      "50,000+ app downloads",
      "4.8/5 app store rating",
      "40% increase in customer engagement",
      "Real-time notifications and chat"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
    image: "/api/placeholder/600/400",
    featured: false
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    team: "8 experts",
    image: "/images/case-studies/cybersecurity.jpg"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    technologies: ["SaaS Development", "Multi-tenancy", "Cloud Computing"],
    duration: "12 months",
    team: "25 experts",
    image: "/api/placeholder/600/400"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

const industries = [
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'All', count: caseStudies.length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Education', count: caseStudies.filter(cs => cs.industry === 'Education').length },
  { name: 'Banking', count: caseStudies.filter(cs => cs.industry === 'Banking').length }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = caseStudies.filter(cs => 
    selectedIndustry === 'All' || cs.industry === selectedIndustry
  );
=======
<<<<<<< HEAD
  "Healthcare",
  "Financial Services",
  "Manufacturing",
<<<<<<< HEAD
=======
<<<<<<< HEAD
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Education",
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
  "Retail",
  "Education",
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

<<<<<<< HEAD
<<<<<<< HEAD
const technologies = [
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity",
  "Web Development",
  "Mobile Apps",
  "Data Analytics",
  "IoT",
  "Blockchain"
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
  "All Industries",
  "Healthcare",
  "E-commerce",
  "Finance",
  "Manufacturing",
  "Real Estate",
  "SaaS",
  "Education"
];

const technologies = [
  "All Technologies",
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity",
  "IoT",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
];

export default function CaseStudiesPage() {
  return (
<<<<<<< HEAD
    <MainLayout
=======
    <Layout
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
      title="Case Studies - Zion Tech Group"
<<<<<<< HEAD
      description="Explore our successful projects and client transformations across various industries"
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

=======
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
=======
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and see how we've helped clients transform their businesses with innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
=======
  { name: "All", count: caseStudies.length },
  { name: "Healthcare", count: caseStudies.filter(cs => cs.industry === "Healthcare").length },
  { name: "Retail", count: caseStudies.filter(cs => cs.industry === "Retail").length },
  { name: "Financial Services", count: caseStudies.filter(cs => cs.industry === "Financial Services").length },
  { name: "Manufacturing", count: caseStudies.filter(cs => cs.industry === "Manufacturing").length },
  { name: "Technology", count: caseStudies.filter(cs => cs.industry === "Technology").length },
  { name: "Services", count: caseStudies.filter(cs => cs.industry === "Services").length }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesIndustry = selectedIndustry === "All" || caseStudy.industry === selectedIndustry;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(cs => cs.featured);
  const regularCaseStudies = filteredCaseStudies.filter(cs => !cs.featured);
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
<<<<<<< HEAD
      description="Explore our success stories and see how we've helped businesses transform with AI, IT, and Micro SaaS solutions. Real results from real clients."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses transform with our AI, IT, and Micro SaaS solutions. 
              Real results from real clients across various industries.
            </motion.p>
=======
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and see how we've helped clients transform their businesses with innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Learn About Us
              </Link>
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
                key={stat.label}
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

      {/* Industry Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Filter by Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedIndustry === industry.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  caseStudy.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {caseStudy.featured && (
                  <div className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                    Featured Case Study
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {caseStudy.client}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.solution}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
=======
      description="Explore our successful projects and see how we've helped businesses transform with innovative technology solutions."
      keywords="case studies, projects, success stories, AI solutions, technology implementation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals 
                through innovative technology solutions.
=======
              transition={{ duration: 0.6 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped organizations transform their operations with cutting-edge technology solutions
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions and achieve remarkable results.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with innovative technology solutions.
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View All Projects
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Your Project
                </button>
              </div>
            </motion.div>
=======
      description="Explore our successful technology implementations across various industries. Real results, proven solutions, and measurable business impact."
      keywords="case studies, technology solutions, success stories, AI implementation, cloud migration, cybersecurity, PropTech"
      canonical="https://ziontechgroup.com/case-studies"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Success 
              <span className="text-emerald-400"> Stories</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-emerald-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge technology solutions. Real results, proven impact.
            </motion.p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
=======
<<<<<<< HEAD
        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped our clients achieve their goals.
              </p>
            </motion.div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="ml-4 text-gray-500 text-sm">
                          {study.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
      {/* Featured Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {(() => {
            const featured = caseStudies.find(study => study.featured);
            return featured ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featured.image} 
                      alt={featured.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Building className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="text-emerald-600 font-semibold">{featured.industry}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featured.title}</h2>
                    <p className="text-gray-600 mb-6">{featured.challenge}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{featured.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{featured.team}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies/${featured.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">All Case Studies</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    {technologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.filter(study => !study.featured).map((study, index) => (
                  <motion.article 
                    key={study.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Building className="w-4 h-4 text-emerald-600 mr-2" />
                        <span className="text-emerald-600 font-semibold text-sm">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                            {tech}
                          </span>
                        ))}
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result) => (
                          <li key={result} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
=======
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.team}</span>
                      </div>
=======

                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </button>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                    </div>
                  </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses across 
                different industries achieve their technology goals.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                            {study.industry}
                          </span>
                          <span className="text-gray-500 text-sm">{study.duration}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          <strong>Client:</strong> {study.client}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
                          </div>
                          <a
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
                          <p className="text-green-100">
                            A comprehensive solution that transformed our client's business operations
                          </p>
                        </div>
                      </div>
=======
        {/* Industries & Technologies */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
=======
        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experience across multiple industries, helping businesses of all sizes achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our success and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </motion.div>
=======
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedIndustry === industry.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {industry.name} ({industry.count})
                  </button>
=======
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedIndustry('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            </div>
          </div>
<<<<<<< HEAD
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your business forward.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Contact Us
                </a>
=======
        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most successful and impactful projects that showcase our expertise and innovation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <Building className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{caseStudy.client}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        <strong>Challenge:</strong> {caseStudy.challenge}
                      </p>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        <strong>Solution:</strong> {caseStudy.solution}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-gray-900">Key Results:</h4>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
=======
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-16 bg-gray-50">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View All Projects
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Your Project
                </button>
=======
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects across various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <Building className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{caseStudy.client}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
                            {result}
                          </li>
                        ))}
                      </ul>
<<<<<<< HEAD
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <blockquote className="text-gray-700 italic mb-2">
                          "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <div className="font-semibold">{caseStudy.testimonial.author}</div>
                          <div>{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                    >
                      Start Similar Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you transform your business with our proven AI, IT, and Micro SaaS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Our Work?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
=======
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
=======
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {caseStudy.team}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{caseStudy.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create your own success story. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
=======
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Consultation
                </button>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </MainLayout>
=======
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped our clients achieve their goals.
              </p>
            </motion.div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="ml-4 text-gray-500 text-sm">
                          {study.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </button>
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experience across multiple industries, helping businesses of all sizes achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our success and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Consultation
                </button>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
      </div>
    </>
=======
      </div>
    </Layout>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
      </div>
    </>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    </Layout>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}
import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Heart,
  Star,
  Award,
  Coffee,
  Zap,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
  CheckCircle
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [
      "7+ years experience in cloud architecture",
      "Certifications in AWS, Azure, or GCP",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of security best practices"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Competitive salaries, performance bonuses, and equity participation"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Professional development budget, conference attendance, and training programs"
  },
  {
    icon: Globe,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance"
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Collaborative environment, team events, and inclusive workplace"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and advancement opportunities"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication across all levels."
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do and continuously improve."
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices."
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
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
=======
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CareersPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Careers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our team of innovative developers, engineers, and designers
              </p>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  );

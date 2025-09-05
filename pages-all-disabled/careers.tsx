import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award, 
  BookOpen, 
  Coffee, 
  Laptop, 
  Globe, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      '5+ years of experience in AI/ML',
      'Strong Python and TensorFlow skills',
      'Experience with cloud platforms',
      'PhD in Computer Science preferred'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'Full Stack Developer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Build scalable web applications and APIs using modern technologies.',
    requirements: [
      '3+ years of full-stack development',
      'React, Node.js, and database experience',
      'API design and development',
      'Strong problem-solving skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Manage cloud infrastructure and deployment pipelines for our AI services.',
    requirements: [
      '4+ years of DevOps experience',
      'AWS/Azure/GCP expertise',
      'Docker and Kubernetes knowledge',
      'CI/CD pipeline experience'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'Product Manager',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Product',
    description: 'Drive product strategy and roadmap for our AI and technology solutions.',
    requirements: [
      '5+ years of product management',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
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
    <Layout
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

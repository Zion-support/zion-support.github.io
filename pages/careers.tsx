import React from 'react';
import Link from 'next/link';
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
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous PTO"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities, conference attendance, and skill development"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-competitive salaries, performance bonuses, and equity options"
  },
  {
    icon: Coffee,
    title: "Great Workplace",
    description: "Modern office spaces, free snacks, and a collaborative environment"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with international clients and teams across different time zones"
  }
];

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Services",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and implement machine learning models and AI solutions for enterprise clients.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Docker"]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability and security.",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "Monitoring"]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy, roadmap, and collaborate with engineering teams to deliver solutions.",
    skills: ["Product Strategy", "Agile", "Analytics", "User Research", "Roadmapping"]
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "2+ years",
    description: "Technical sales support, client demos, and solution architecture for enterprise clients.",
    skills: ["Technical Sales", "Solution Architecture", "Client Relations", "Cloud Technologies"]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Design intuitive user experiences and interfaces for our technology solutions.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"]
  }
];

const values = [
  {
    icon: Star,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative problem-solving"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together to achieve common goals and support each other's growth"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions"
  }
];

export default function CareersPage() {
  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
      description="Join our team of innovative professionals. Explore career opportunities at Zion Tech Group and help shape the future of technology."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Join our team of innovators and help shape the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  View Open Positions
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

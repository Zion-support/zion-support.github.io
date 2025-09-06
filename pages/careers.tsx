import React from "react";
import MainLayout from "../src/components/layout/MainLayout";
import { motion } from "framer-motion";
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import React from "react";
import MainLayout from "../src/components/layout/MainLayout";
import { motion } from "framer-motion";
origin/main
origin/automation-improvements-final
import {
<<<<<<< HEAD

  Users
  MapPin
  Clock
  DollarSign
  ArrowRight
  Heart
  Star
  Award
  Coffee
  Zap
  Shield
  Briefcase
  GraduationCap
  Globe
  CheckCircle
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
  CheckCircle,;

<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
} from "lucide-react";
const jobOpenings = [
  {
    id: 1
    title: "Senior AI Engineer"
    department: "AI & Machine Learning"
    location: "Remote"
    type: "Full-time"
    experience: "5+ years"
    description:
      "Lead the development of cutting-edge AI solutions and machine learning models for our clients."
    requirements: [
      "Master's degree in Computer Science or related field"
      "5+ years experience in AI/ML development"
      "Proficiency in Python, TensorFlow, PyTorch"
      "Experience with cloud platforms (AWS, Azure, GCP)"
      "Strong problem-solving and communication skills"
    ]
    benefits: [
      "Competitive salary"
      "Health insurance"
      "Remote work"
      "Professional development"
    ]
  }
  {
    id: 2
    title: "Full-Stack Developer"
    department: "Micro SaaS"
    location: "New York, NY"
    type: "Full-time"
    experience: "3+ years"
    description:
      "Build scalable web applications and microservices for our SaaS solutions."
    requirements: [
      "3+ years experience in full-stack development"
      "Proficiency in React, Node.js, TypeScript"
      "Experience with databases (PostgreSQL, MongoDB)"
      "Knowledge of cloud deployment and DevOps"
    ]
    benefits: [
      "Competitive salary"
      "Health insurance"
      "Flexible hours"
      "Stock options"
    ]
  }
  {
    id: 3
    title: "Cloud Solutions Architect"
    department: "IT Services"
    location: "Remote"
    type: "Full-time"
    experience: "7+ years"
    description:
      "Design and implement cloud infrastructure solutions for enterprise clients."
    requirements: [
      "7+ years experience in cloud architecture"
      "Certifications in AWS, Azure, or GCP"
      "Experience with containerization (Docker, Kubernetes)"
      "Strong understanding of security best practices"
    ]
    benefits: [
      "Competitive salary"
      "Health insurance"
      "Remote work"
      "Certification support"
    ]
  }
];
const benefits = [
  {
    icon: Heart
    title: "Health & Wellness"
    description:
      "Comprehensive health insurance, mental health support, and wellness programs"
  }
  {
    icon: DollarSign
    title: "Competitive Compensation"
    description:
      "Competitive salaries, performance bonuses, and equity participation"
  }
  {
    icon: GraduationCap
    title: "Learning & Development"
    description:
      "Professional development budget, conference attendance, and training programs"
  }
  {
    icon: Globe
    title: "Flexible Work"
    description: "Remote work options, flexible hours, and work-life balance"
  }
  {
    icon: Coffee
    title: "Great Culture"
    description:
      "Collaborative environment, team events, and inclusive workplace"
  }
  {
    icon: Award
    title: "Career Growth"
    description:
      "Clear career paths, mentorship programs, and advancement opportunities"
  }
];
const values = [
  {
    title: "Innovation"
    description:
      "We encourage creative thinking and embrace new technologies to solve complex problems."
  }
  {
    title: "Collaboration"
    description:
      "We believe in the power of teamwork and open communication across all levels."
  }
  {
    title: "Excellence"
    description:
      "We strive for the highest quality in everything we do and continuously improve."
  }
  {
    title: "Integrity"
    description:
      "We conduct business with honesty, transparency, and ethical practices."
  }
];
export default function CareersPage() {



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import MainLayout from "../src/components/layout/MainLayout";
import { motion } from "framer-motion";
import {;
  Users,;
  MapPin,;
  Clock,;
  DollarSign,;
  ArrowRight,;
  Heart,;
  Star,;
  Award,;
  Coffee,;
  Zap,;
  Shield,;
  Briefcase,;
  GraduationCap,;
  Globe,;
  CheckCircle,;
} from "lucide-react";


const Careers: React.FC<CareersProps> = ({ className }) => {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
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
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CareersPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
              <h1 className="text-4xl md:text-6xl font-bold mb-6">

                Join Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Amazing Team;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;

                Be part of a team that's building the future of technology.;
                We're looking for passionate individuals who want to make a;
                difference.;
              </p>;

                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  See Benefits;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Why Join Us */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Why Join Zion Tech Group?;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We're not just a company - we're a community of innovators,;
                creators, and problem-solvers working together to build amazing;
                technology solutions.;
              </p>;
            </motion && motion.div>;

            <div className="max-w-6xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {benefits && benefits.map((benefit, index) => (;
                  <motion&& motion.div
                    key={benefit && benefit.title}

                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="text-blue-600 mb-4">;
                      <benefit && benefit.icon className="w-12 h-12" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">;
                      {benefit && benefit.title}
                    </h3>;
                    <p className="text-gray-600">{benefit && benefit.description}</p>;
                  </motion && motion.div>;
                ))}



  );


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  );

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
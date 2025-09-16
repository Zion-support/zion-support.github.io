
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
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Competitive salaries, performance bonuses, and equity participation",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
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
      "Clear career paths, mentorship programs, and advancement opportunities",
  },
];
const values = [
  {
    title: "Innovation",
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
      "We conduct business with honesty, transparency, and ethical practices.",
  },
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

const jobOpenings = [;
  {;
    id: 1,;
    title: "Senior AI Engineer",;
    department: "AI & Machine Learning",;
    location: "Remote",;
    type: "Full-time",;
    experience: "5+ years",;
    description:;
      "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",;
    requirements: [;
      "Master's degree in Computer Science or related field",;
      "5+ years experience in AI/ML development",;
      "Proficiency in Python, TensorFlow, PyTorch",;
      "Experience with cloud platforms (AWS, Azure, GCP)",;
      "Strong problem-solving and communication skills",;
    ],;
    benefits: [;
      "Competitive salary",;
      "Health insurance",;
      "Remote work",;
      "Professional development",;
    ],;
  },;
  {;
    id: 2,;
    title: "Full-Stack Developer",;
    department: "Micro SaaS",;
    location: "New York, NY",;
    type: "Full-time",;
    experience: "3+ years",;
    description:;
      "Build scalable web applications and microservices for our SaaS solutions.",;
    requirements: [;
      "3+ years experience in full-stack development",;
      "Proficiency in React, Node && Node.js, TypeScript",;
      "Experience with databases (PostgreSQL, MongoDB)",;
      "Knowledge of cloud deployment and DevOps",;
    ],;
    benefits: [;
      "Competitive salary",;
      "Health insurance",;
      "Flexible hours",;
      "Stock options",;
    ],;
  },;
  {;
    id: 3,;
    title: "Cloud Solutions Architect",;
    department: "IT Services",;
    location: "Remote",;
    type: "Full-time",;
    experience: "7+ years",;
    description:;
      "Design and implement cloud infrastructure solutions for enterprise clients.",;
    requirements: [;
      "7+ years experience in cloud architecture",;
      "Certifications in AWS, Azure, or GCP",;
      "Experience with containerization (Docker, Kubernetes)",;
      "Strong understanding of security best practices",;
    ],;
    benefits: [;
      "Competitive salary",;
      "Health insurance",;
      "Remote work",;
      "Certification support",;
    ],;
  },;
];

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
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;

                Join Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Amazing Team;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;

import React from './react';
import MainLayout from "../src / components / layout / MainLayout";
import { motion  } from './framer-motion';
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
  CheckCircle,
} from './lucide-react';
;
const job_openings = [;
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote",
    type: "Full - time",
    experience: "5+ years",
    description:;
      "Lead the development of cutting - edge AI solutions and machine learning models for our clients.",
    requirements: [;
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI / ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem - solving and communication skills",
    ],
    benefits: [;
      "Competitive salary",
      "Health insurance",
      "Remote work",
      "Professional development",
    ],
  },
  {
    id: 2,
    title: "Full - Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full - time",
    experience: "3+ years",
    description:;
      "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [;
      "3+ years experience in full - stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps",
    ],
    benefits: [;
      "Competitive salary",
      "Health insurance",
      "Flexible hours",
      "Stock options",
    ],
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full - time",
    experience: "7+ years",
    description:;
      "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [;
      "7+ years experience in cloud architecture",
      "Certifications in AWS, Azure, or GCP",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of security best practices",
    ],
    benefits: [;
      "Competitive salary",
      "Health insurance",
      "Remote work",
      "Certification support",
    ],
  },
];
;
const benefits = [;
  {
    icon: Heart,
    title: "Health & Wellness",
    description:;
      "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description:;
      "Competitive salaries, performance bonuses, and equity participation",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:;
      "Professional development budget, conference attendance, and training programs",
  },
  {
    icon: Globe,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work - life balance",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description:;
      "Collaborative environment, team events, and inclusive workplace",
  },
  {
    icon: Award,
    title: "Career Growth",
    description:;
      "Clear career paths, mentorship programs, and advancement opportunities",
  },
];
;
const values = [;
  {
    title: "Innovation",
    description:;
      "We encourage creative thinking and embrace new technologies to solve complex problems.",
  },
  {
    title: "Collaboration",
    description:;
      "We believe in the power of teamwork and open communication across all levels.",
  },
  {
    title: "Excellence",
    description:;
      "We strive for the highest quality in everything we do and continuously improve.",
  },
  {
    title: "Integrity",
    description:;
      "We conduct business with honesty, transparency, and ethical practices.",
  },
];
;
export default /**
 * CareersPage - Function description
 */
function CareersPage() {
  return (
    <MainLayout;
      title="Careers - Zion Tech Group";
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group.";
      keywords="careers, jobs, employment, technology careers, AI jobs, software development";
    >;
      <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - blue - 900 via - purple - 900 to - indigo - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - blue - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Join Our{" "}
                <span className="bg - gradient - to - r from - blue - 400 to - purple - 400 bg - clip - text text - transparent">;
                  Amazing Team;
                </span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;

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


              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="#open - positions";
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  View Open Positions;
                </a>;
                <a;
                  href="#benefits";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - gray - 900 transition - all duration - 300 font - semibold";
                >;
                  See Benefits;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Why Join Us */}
        <section className="py - 20 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}

              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company
                culture.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">;
                      {value && value.title}
                    </h3>;
                    <p className="text-gray-600">{value && value.description}</p>;
                  </motion && motion.div>;
                ))}

        {/* Our Values */}
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Our Values;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                These core values guide everything we do and shape our company;
                culture.;
              </p>;
            </motion.div>;
            <div className="max - w-4xl mx - auto">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
                {values.map ((value, index) => (
                  <motion.div;
                    key={value.title}
                    className="bg - white p - 6 rounded - lg shadow - lg";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}

                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Open Positions */}

        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div

              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for
                you.
              </p>
            </motion.div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                      <span className="text-gray-500 text-sm">{job.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements
                          .slice(0, 3)
                          .map((requirement, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              {requirement}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Benefits:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a

                      href={`/careers/${job && job.id}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center">;
                      Apply Now;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </a>;
                  </motion && motion.div>;
                ))}

                      </div>;
                    </div>;
                    <div className="mb - 6">;
                      <h4 className="font - semibold text - gray - 900 mb - 2">;
                        Key Requirements:;
                      </h4>;
                      <ul className="space - y-1">;
                        {job.requirements;
                          .slice (0, 3);
                          .map ((requirement, idx) => (
                            <li;
                              key={idx}
                              className="flex items - center text - sm text - gray - 600";
                            >;
                              <CheckCircle className="w - 3 h - 3 text - green - 500 mr - 2" />;
                              {requirement}
                            </li>))}
                      </ul>;
                    </div>;
                    <div className="mb - 6">;
                      <h4 className="font - semibold text - gray - 900 mb - 2">;
                        Benefits:;
                      </h4>;
                      <div className="flex flex - wrap gap - 2">;
                        {job.benefits.map ((benefit, idx) => (
                          <span;
                            key={idx}
                            className="bg - gray - 100 text - gray - 700 px - 2 py - 1 rounded text - xs";
                          >;
                            {benefit}
                          </span>))}
                      </div>;
                    </div>;
                    <a;
                      href={`/careers/${job.id}`}
                      className="w - full bg - gradient - to - r from - blue - 500 to - purple - 600 text - white py - 3 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold flex items - center justify - center";
                    >;
                      Apply Now;
                      <ArrowRight className="w - 4 h - 4 ml - 2" />;
                    </a>;
                  </motion.div>))}

              </div>;
            </div>;
          </div>;
        </section>;




                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  Learn More About Us;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  );

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your
                resume and let us know how you'd like to contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Send Resume
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>


    </MainLayout>;


  );


}


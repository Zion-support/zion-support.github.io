:pages_backup/careers.tsx

import React from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

import React from "react";
import MainLayout from "../src/components/layout/MainLayout";
import { motion } from "framer-motion";

import React from 'react';

import {
const Page = () => {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team and help shape the future of technology"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-xl text-gray-600">Join our innovative team! Check back soon for exciting career opportunities.</p>
        </div>
      </div>
    </MainLayout>
  );
};

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
  CheckCircle,;
:pages_backup/careers.tsx

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
];
const values = [
  {
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
];

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
export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer', department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time', experience: '5+ years',
      icon: Brain, description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field', '
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch', 'Experience with cloud platforms (AWS, Azure, GCP)', 'Strong problem-solving and communication skills'
      ]
    }, {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '7+ years', icon: Cloud,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.', requirements: [
        'Bachelor\'s degree in Computer Science or related field','
        '7+ years experience in cloud architecture', 'Certifications in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)', 'Strong understanding of DevOps practices'
      ]
    }, {
      title: 'Cybersecurity Specialist',
      department: 'Security', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '4+ years', icon: Shield,
      description: 'Protect our clients\' digital assets with advanced security solutions and threat analysis.', '
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field','
        '4+ years experience in cybersecurity', 'Certifications (CISSP, CISM, CEH preferred)', 'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ]
    }, {
      title: 'Full Stack Developer',
      department: 'Software Development', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '3+ years', icon: Code,
      description: 'Build innovative web applications and microservices using modern technologies.', requirements: [
        'Bachelor\'s degree in Computer Science or related field','
        '3+ years experience in full-stack development', 'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)', 'Knowledge of modern development practices'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation', description: 'Above-market salaries with performance bonuses',
      icon: Award
    }, {
      title: 'Flexible Work Environment',
      description: 'Remote work options and flexible hours', icon: Globe
    },
    {
      title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs',
      icon: Heart
    }, {
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities', icon: Lightbulb
    },
    {
      title: 'Innovation Time', description: '20% time for personal projects and innovation',
      icon: Target
    }, {
      title: 'Team Building',
      description: 'Regular team events and company retreats', icon: Users
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First', description: 'We push the boundaries of technology to create solutions that matter.',
      icon: Lightbulb
    }, {
      title: 'Client Success',
      description: 'Our success is measured by our clients\' achievements and satisfaction.', '
      icon: Target
    },
    {
      title: 'Collaborative Culture', description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users
    }, {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development.', '
      icon: Award
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
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
:pages_backup/careers.tsx
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';

import {
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
const benefits = [;
  {;
    icon: Heart,;
    title: "Health & Wellness",;
    description:;
      "Comprehensive health insurance, mental health support, and wellness programs",;
  },;
  {;
    icon: DollarSign,;
    title: "Competitive Compensation",;
    description:;
      "Competitive salaries, performance bonuses, and equity participation",;
  },;
  {;
    icon: GraduationCap,;
    title: "Learning & Development",;
    description:;
      "Professional development budget, conference attendance, and training programs",;
  },;
  {;
    icon: Globe,;
    title: "Flexible Work",;
    description: "Remote work options, flexible hours, and work-life balance",;
  },;
  {;
    icon: Coffee,;
    title: "Great Culture",;
    description:;
      "Collaborative environment, team events, and inclusive workplace",;
  },;
  {;
    icon: Award,;
    title: "Career Growth",;
    description:;
      "Clear career paths, mentorship programs, and advancement opportunities",;
  },;
];
const values = [;
  {;
    title: "Innovation",;
    description:;
      "We encourage creative thinking and embrace new technologies to solve complex problems.",;
  },;
  {;
    title: "Collaboration",;
    description:;
      "We believe in the power of teamwork and open communication across all levels.",;
  },;
  {;
    title: "Excellence",;
    description:;
      "We strive for the highest quality in everything we do and continuously improve.",;
  },;
  {;
    title: "Integrity",;
    description:;
      "We conduct business with honesty, transparency, and ethical practices.",;
  },;
];


  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
:pages_backup/careers.tsx
import Head from 'next/head';

:pages_backup/careers.tsx
export default function CareersPage() {

    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;
:pages_backup/careers.tsx
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Build the future of technology with us. We&apos;re looking for passionate innovators to join our growing team.''
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="#positions">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Open Positions
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

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
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Why Join Zion Tech Group?;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                We're not just a company - we're a community of innovators,
                creators, and problem - solvers working together to build amazing;
                technology solutions.;
              </p>;
            </motion.div>;
            <div className="max - w-6xl mx - auto">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                {benefits.map ((benefit, index) => (
                  <motion.div;
                    key={benefit.title}
                    className="bg - gray - 50 p - 6 rounded - lg hover:shadow - lg transition - shadow duration - 300";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >;
                    <div className="text - blue - 600 mb - 4">;
                      <benefit.icon className="w - 12 h - 12" />;
                    </div>;
                    <h3 className="text - xl font - semibold text - gray - 900 mb - 3">;
                      {benefit.title}
                    </h3>;
                    <p className="text - gray - 600">{benefit.description}</p>;
                  </motion.div>))}
              </div>;
            </div>;
          </div>;
        </section>;
transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Our Values;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                These core values guide everything we do and shape our company;
                culture.;
              </p>;
            </motion && motion.div>;
            <div className="max-w-4xl mx-auto">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {values && values.map((value, index) => (;
                  <motion&& motion.div
                    key={value && value.title}
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
                  >;
                    <h3 className="text - xl font - semibold text - gray - 900 mb - 3">;
                      {value.title}
                    </h3>;
                    <p className="text - gray - 600">{value.description}</p>;
                  </motion.div>))}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Open Positions */}
:pages_backup/careers.tsx
        <section id="positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-2">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don&apos;t See Your Role?''
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and let&apos;s discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <a href="mailto:careers@ziontechgroup.com" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                careers@ziontechgroup.com
              </a>
              <a href="tel:+13024640950" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
:pages_backup/careers.tsx

  );

}
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Don't See Your Dream Job?;
              </h2>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
                We're always looking for talented individuals. Send us your;
                resume and let us know how you'd like to contribute to our team.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Send Resume;
                </a>;
                <a;
                  href="/about";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  Learn More About Us;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
:pages_backup/careers.tsx
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your
                resume and let us know how you'd like to contribute to our team.
:pages_backup/careers.tsx
              </p>
            </div>
          </div>
:pages_backup/careers.tsx
        </section>
      </div>
    </MainLayout>
    </MainLayout>
    </Layout>
    </MainLayout>;
ursor/integrate-build-improve-and-re-verify-8f7d
    </MainLayout>;
  );
}
:pages_backup/careers.tsx
}
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team and help shape the future of technology"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-xl text-gray-600">Join our innovative team! Check back soon for exciting career opportunities.</p>
:pages_backup/careers.tsx
        </div>

:pages_backup/careers.tsx
export default Page;


        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{position.type}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <span>{position.department}</span>
                      <span className="mx-2">•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <button className="text-blue-400 hover:text-blue-300 font-medium">Apply Now →</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                  <p className="text-gray-300">Work on cutting-edge AI and technology projects that push the boundaries of what's possible.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                  <p className="text-gray-300">Continuous learning and development opportunities to advance your career.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Great Benefits</h3>
                  <ul className="text-gray-300 space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

import React from 'react';
import MainLayout from '../components/layout/MainLayout';
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

const culture = [
  {
    icon: Star,
    title: "Innovation First",
    description: "We encourage creative thinking and innovative solutions to complex problems"
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work alongside talented professionals who support each other's growth"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do and celebrate achievements"
  },
  {
    icon: Zap,
    title: "Fast-Paced",
    description: "Dynamic environment where you can make an impact and see results quickly"
  }
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our engineering team to build scalable web applications using modern technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP)",
      "Strong problem-solving and communication skills"
    ]
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "Work on cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      "MS/PhD in Computer Science or related field",
      "3+ years of ML/AI development experience",
      "Expertise in Python, TensorFlow, PyTorch",
      "Experience with MLOps and model deployment"
    ]
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Lead product strategy and roadmap for our SaaS platforms and client solutions.",
    requirements: [
      "3+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and strategic thinking",
      "Excellent communication and leadership skills"
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time", 
    salary: "$100,000 - $130,000",
    description: "Build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: [
      "3+ years of DevOps/SRE experience",
      "Expertise in AWS, Docker, Kubernetes",
      "Experience with CI/CD pipelines",
      "Knowledge of monitoring and logging tools"
    ]
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative professionals. Explore career opportunities at Zion Tech Group and help shape the future of technology."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Careers
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Join our team of innovators and help shape the future of technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-lg text-gray-600">
                  We offer more than just a job - we provide a platform for growth and innovation
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-600">
                  Values that drive our team and define our workplace
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {culture.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300"
                    >
                      <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-gray-600">
                  Find your next opportunity and join our growing team
                </p>
              </motion.div>

              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
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
                            <DollarSign className="w-4 h-4 mr-1" />
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Link
                          href={`/careers/${position.id}`}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Don't See a Perfect Fit?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  We're always looking for talented individuals. Send us your resume and tell us how you can contribute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Send Your Resume
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                  >
                    Contact HR
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
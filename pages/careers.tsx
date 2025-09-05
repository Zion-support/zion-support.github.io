import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Globe,
  Heart,
  Zap,
  Award,
  BookOpen
} from 'lucide-react';
import Layout from '../components/Layout';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "AI & Machine Learning",
    location: "Remote / New York, NY",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
    requirements: [
      "Master's degree in Computer Science, AI, or related field",
      "5+ years of experience in machine learning and AI development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong understanding of NLP and computer vision"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ],
    posted: "2024-01-15"
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices using modern technologies and best practices.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services and DevOps practices"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ],
    posted: "2024-01-10"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years of DevOps experience",
      "Experience with AWS, Docker, Kubernetes",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Strong scripting skills (Bash, Python)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ],
    posted: "2024-01-05"
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Seattle, WA",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead product strategy and roadmap for our AI-powered SaaS solutions.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of product management experience",
      "Experience with SaaS products and AI/ML technologies",
      "Strong analytical and communication skills",
      "Experience with agile development methodologies"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ],
    posted: "2024-01-03"
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and work-from-anywhere policy"
  },
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description: "Annual learning budget and conference attendance for professional development"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Regular performance reviews and recognition programs for outstanding work"
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Work with talented professionals from around the world"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Collaborative environment with cross-functional teams and knowledge sharing"
  }
];

export default function Careers() {
  return (
    <Layout title="Careers - Zion Tech Group" description="Join our team of innovative professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group.">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-blue-300">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Be part of a dynamic team that's shaping the future of technology. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#open-positions" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Open Positions
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, 
                innovate, and make a real impact on the world.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and interests.
              </p>
            </motion.div>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-4 lg:mb-0">
                      Posted: {job.posted}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={`/contact?position=${encodeURIComponent(job.title)}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href={`/contact?position=${encodeURIComponent(job.title)}`}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Your Resume
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
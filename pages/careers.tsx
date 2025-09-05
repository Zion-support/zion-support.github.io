import React from "react";
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Star,
  Award,
  Target,
  Shield,
  Brain,
  Code,
  Rocket
} from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    department: "AI Services",
    location: "Remote / New York",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years of experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ],
    posted: "2 days ago",
    urgent: true
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our platform.",
    requirements: [
      "Bachelor's degree in Computer Science or equivalent",
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud technologies and DevOps"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ],
    posted: "1 week ago",
    urgent: false
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage and scale our cloud infrastructure and deployment pipelines.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years of DevOps experience",
      "Proficiency in AWS, Docker, Kubernetes",
      "Experience with CI/CD pipelines",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ],
    posted: "3 days ago",
    urgent: false
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Seattle",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive product strategy and roadmap for our AI and technology solutions.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of product management experience",
      "Experience with AI/ML products preferred",
      "Strong analytical and communication skills",
      "Experience with agile development methodologies"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ],
    posted: "1 week ago",
    urgent: false
  }
];

const companyValues = [
  {
    icon: Heart,
    title: "Passion for Innovation",
    description: "We're driven by the desire to create groundbreaking technology that makes a real difference."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "We believe in the power of teamwork and diverse perspectives to solve complex problems."
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "We encourage growth and development, providing opportunities to learn and advance your career."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work reaches customers worldwide, creating meaningful change on a global scale."
  }
];

const benefits = [
  {
    icon: Star,
    title: "Competitive Compensation",
    description: "Market-leading salaries, equity, and performance bonuses"
  },
  {
    icon: Shield,
    title: "Comprehensive Benefits",
    description: "Health, dental, vision, and life insurance coverage"
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Remote work options and flexible hours to support work-life balance"
  },
  {
    icon: Brain,
    title: "Learning & Development",
    description: "Budget for courses, conferences, and professional development"
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Clear advancement paths and mentorship opportunities"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Regular recognition and rewards for outstanding contributions"
  }
];

export default function CareersPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <value.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore exciting career opportunities and find your next role with us
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <span className="text-sm text-gray-500">Posted {job.posted}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive environment to help you thrive
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <benefit.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals. Send us your resume!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Your Resume
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
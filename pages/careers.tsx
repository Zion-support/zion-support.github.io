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
  Globe,
  CheckCircle,
  Brain
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Above-market compensation with performance bonuses and equity options"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous PTO"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Professional development budget, conference attendance, and skill training"
  },
  {
    icon: Coffee,
    title: "Office Perks",
    description: "Free snacks, coffee, team events, and modern office environment"
  },
  {
    icon: Zap,
    title: "Innovation Time",
    description: "20% time for personal projects and innovation initiatives"
  }
];

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "AI Solutions",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead AI model development and implementation for enterprise clients",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience with machine learning frameworks",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong programming skills in Python, TensorFlow, PyTorch"
    ],
    benefits: ["$120,000 - $180,000", "Equity options", "Health insurance", "Remote work"]
  },
  {
    title: "Cloud Infrastructure Architect",
    department: "IT Services",
    location: "Hybrid / Delaware",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud infrastructure solutions",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "7+ years experience with cloud architecture",
      "Certifications in AWS, Azure, or GCP",
      "Experience with DevOps and CI/CD pipelines"
    ],
    benefits: ["$130,000 - $200,000", "Performance bonus", "Health insurance", "Flexible schedule"]
  },
  {
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and maintain micro SaaS applications and platforms",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience with React, Node.js, and databases",
      "Experience with microservices architecture",
      "Knowledge of modern development practices"
    ],
    benefits: ["$80,000 - $120,000", "Health insurance", "Remote work", "Learning budget"]
  },
  {
    title: "DevOps Engineer",
    department: "IT Services",
    location: "Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage deployment pipelines and infrastructure automation",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years experience with DevOps tools and practices",
      "Experience with Kubernetes and Docker",
      "Knowledge of monitoring and logging systems"
    ],
    benefits: ["$90,000 - $140,000", "Health insurance", "Office perks", "Career growth"]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Hybrid / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead product strategy and development for our service offerings",
    requirements: [
      "Bachelor's degree in Business or related field",
      "5+ years product management experience",
      "Experience with SaaS products",
      "Strong analytical and communication skills"
    ],
    benefits: ["$100,000 - $150,000", "Equity options", "Health insurance", "Flexible schedule"]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create user-centered designs for our digital products and services",
    requirements: [
      "Bachelor's degree in Design or related field",
      "3+ years UX/UI design experience",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Portfolio demonstrating user-centered design"
    ],
    benefits: ["$70,000 - $110,000", "Health insurance", "Remote work", "Design tools budget"]
  }
];

const companyValues = [
  {
    icon: Brain,
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication across all levels"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business practices"
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We're committed to creating technology solutions that make a positive difference"
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts. Explore career opportunities at Zion Tech Group and be part of our mission to transform businesses with innovative technology."
      keywords="careers, jobs, technology careers, AI engineer, cloud architect, developer jobs, Delaware tech jobs"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of a team that's shaping the future of technology. We're looking for passionate 
                individuals who want to make a real impact in the world of AI, cloud computing, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Company Values
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Employee Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We offer comprehensive benefits to support our team members' health, 
                well-being, and professional growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
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
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Join our growing team and help us build the future of technology.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Apply Now
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and 
                let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Email Our HR Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
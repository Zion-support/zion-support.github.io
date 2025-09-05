import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, ArrowRight, CheckCircle, Heart, Brain, Code, Shield, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of cutting-edge web applications using React, Node.js, and cloud technologies",
    requirements: [
      "5+ years of full-stack development experience",
      "Expert in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure)",
      "Strong problem-solving and communication skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Services",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and implement AI solutions for our clients across various industries",
    requirements: [
      "3+ years of AI/ML experience",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with NLP and computer vision",
      "Strong mathematical and statistical background"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "AI conference attendance"]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage and optimize our cloud infrastructure and deployment pipelines",
    requirements: [
      "4+ years of DevOps experience",
      "Expert in AWS, Docker, Kubernetes",
      "Experience with CI/CD pipelines",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  },
  {
    title: "Solutions Architect",
    department: "Solutions",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "6+ years",
    description: "Design enterprise solutions and work directly with clients to understand their needs",
    requirements: [
      "6+ years of solution architecture experience",
      "Strong technical and business acumen",
      "Experience with enterprise software",
      "Excellent client communication skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Client interaction"]
  }
];

const companyValues = [
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions",
    icon: Brain,
    color: "blue"
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do",
    icon: Shield,
    color: "green"
  },
  {
    title: "Collaboration",
    description: "We work together to achieve common goals",
    icon: Users,
    color: "purple"
  },
  {
    title: "Growth",
    description: "We invest in our team's professional development",
    icon: Zap,
    color: "orange"
  }
];

const benefits = [
  "Competitive salary and equity",
  "Comprehensive health insurance",
  "Flexible remote work options",
  "Professional development budget",
  "Generous vacation policy",
  "Latest technology and tools",
  "Team building events",
  "Career advancement opportunities"
];

const stats = [
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Countries" },
  { number: "95%", label: "Employee Satisfaction" },
  { number: "4.8/5", label: "Glassdoor Rating" }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals building the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology jobs, remote work, software engineering, AI jobs"
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
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate, talented individuals 
                who want to make a real impact in the world of AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600",
                  purple: "from-purple-500 to-purple-600",
                  orange: "from-orange-500 to-orange-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[value.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team's well-being and professional growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your career.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
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
                        <div className="text-blue-600 font-semibold">
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
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
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
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
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Your Resume
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
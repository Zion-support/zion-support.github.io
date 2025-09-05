import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Layout from "../components/Layout";

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI and machine learning solutions for our clients.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years of experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "7+ years of cloud architecture experience",
      "Expertise in AWS, Azure, and Google Cloud",
      "Experience with Kubernetes and Docker",
      "Strong understanding of DevOps practices"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build beautiful and responsive user interfaces for our web applications.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of frontend development experience",
      "Proficiency in React, TypeScript, and Next.js",
      "Experience with modern CSS frameworks",
      "Strong attention to detail and user experience"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Analyze complex datasets and develop predictive models to drive business insights.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "4+ years of data science experience",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning algorithms",
      "Strong analytical and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description: "Automate and optimize our development and deployment processes.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years of DevOps experience",
      "Experience with CI/CD pipelines",
      "Knowledge of infrastructure as code",
      "Strong scripting and automation skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead product strategy and development for our technology solutions.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of product management experience",
      "Experience with agile development methodologies",
      "Strong analytical and communication skills",
      "Understanding of technology and market trends"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  }
];

const companyValues = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and value diverse perspectives in everything we do."
  },
  {
    title: "Growth",
    description: "We invest in our people's development and provide opportunities for career advancement."
  },
  {
    title: "Impact",
    description: "We work on meaningful projects that make a real difference in the world."
  }
];

const perks = [
  "Competitive salary and equity",
  "Comprehensive health, dental, and vision insurance",
  "Flexible work arrangements and remote work options",
  "Professional development budget and conference attendance",
  "401(k) with company matching",
  "Unlimited paid time off",
  "Modern equipment and home office setup",
  "Team building events and company retreats",
  "Mentorship and career development programs",
  "Stock options and performance bonuses"
];

export default function TalentPage() {
  return (
    <Layout 
      title="Join Our Team - Zion Tech Group" 
      description="Join our team of talented professionals and help us build the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Be part of a team that's building the future of technology. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#openings" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </a>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.department}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-300 text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{job.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {job.experience} experience
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Perks & Benefits
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive benefits and perks to support our team members' well-being and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{perk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our team.
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
    </Layout>
  );
}
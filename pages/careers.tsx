import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Code, 
  Brain, 
  Shield, 
  Users, 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star
} from 'lucide-react'

const SEO = dynamic(() => import('../src/components/SEO'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with NLP, computer vision, or deep learning",
        "Strong problem-solving and analytical skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Micro SaaS Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$90,000 - $140,000",
      experience: "3+ years",
      description: "Build scalable micro SaaS applications using modern web technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of database design and optimization"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "IT Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      experience: "4+ years",
      description: "Manage cloud infrastructure and implement DevOps best practices.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in DevOps and cloud infrastructure",
        "Proficiency in AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, CI/CD",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$110,000 - $160,000",
      experience: "4+ years",
      description: "Protect our systems and data with advanced cybersecurity measures.",
      requirements: [
        "Bachelor's degree in Cybersecurity, Computer Science, or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our micro SaaS solutions.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "3+ years experience in product management",
        "Experience with SaaS products and agile methodologies",
        "Strong analytical and communication skills",
        "Experience with user research and data analysis"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    }
  ]

  const companyBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Above-market salaries with equity participation and performance bonuses"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Flexible Work Environment",
      description: "Remote-first culture with flexible hours and work-life balance"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance, 401(k) matching, and wellness programs"
    }
  ]

  return (
    <>
      <SEO
        title="Careers - Zion Tech Group"
        description="Join our team of innovative developers, AI engineers, and technology experts. Explore career opportunities at Zion Tech Group."
        keywords="careers, jobs, AI engineer, developer, DevOps, cybersecurity, Zion Tech Group"
        canonical="https://ziontechgroup.com/careers"
      />
      
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Team</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Build the future of technology with innovative AI, micro SaaS, and IT solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#openings"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    View Open Positions
                  </motion.a>
                  <motion.a
                    href="mailto:careers@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Send Resume
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Company Benefits */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer a comprehensive benefits package and a culture that values innovation, growth, and work-life balance.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Job Openings */}
          <section id="openings" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Open Positions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our team and help shape the future of technology
                </p>
              </motion.div>

              <div className="space-y-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {job.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold mb-2">
                            {job.department}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                          Apply Now
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {job.description}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Don't See Your Role?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:careers@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Send Resume
                  </motion.a>
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Call Us: +1 302 464 0950
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}

export default CareersPage
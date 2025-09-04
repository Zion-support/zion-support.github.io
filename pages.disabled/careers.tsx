//
// Careers Page (conflicts resolved)
//
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
import { Cloud, Rocket } from 'lucide-react'

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
        "Certifications: CISS P, CISM, or equivalent",
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
      icon: <DollarSign className="w-8 h-8"  />,
      title: "Competitive Compensation",
      description: "Above-market salaries with equity participation and performance bonuses"
    },
    {
      icon: <Users className="w-8 h-8"  />,
      title: "Flexible Work Environment",
      description: "Remote-first culture with flexible hours and work-life balance"
    },
    {
      icon: <Brain className="w-8 h-8"  />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: <Shield className="w-8 h-8"  />,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance, 401(k) matching, and wellness programs"
    }
  ]

  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Lead the development of cutting-edge AI and machine learning solutions for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Security",
      description: "Design and implement comprehensive cybersecurity solutions to protect client infrastructure."
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Architect scalable cloud solutions using AWS, Azure, and Google Cloud platforms."
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain CI/CD pipelines and infrastructure automation systems."
    },
    {
      title: "Business Development Manager",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Sales",
      description: "Drive business growth by identifying and pursuing new client opportunities."
    },
    {
      title: "UX/UI Designer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Design",
      description: "Create intuitive and engaging user experiences for our technology solutions."
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team to achieve common goals"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction"
    }
  ]

  return (
    <>
      <SEO title="Careers - Zion Tech Group"
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
                    <ArrowRight className="w-5 h-5"  />
                    View Open Positions
                  </motion.a>
                  <motion.a
                    href="mailto:careers@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Send Resume
                  </motion.a>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Be part of a team that's revolutionizing technology and building the future. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, innovate, and make a real impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and interests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{position.department}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-cyan-500 text-sm font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  We believe that great technology comes from great people working together.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team is diverse, inclusive, and passionate about making a difference. We encourage 
                  creativity, support professional growth, and celebrate both individual and team achievements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Remote-first work environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Flexible working hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Learning and development budget</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Regular team events and retreats</span>
                  </div>
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
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  We're not just building software - we're building the future. Join us in creating 
                  technology solutions that transform businesses and improve lives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Cutting-edge technology stack</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">AI and machine learning projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Cybersecurity and compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Innovation and experimentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
              >
                Email Us
              </a>
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
                              <MapPin className="w-4 h-4"  />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4"  />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4"  />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4"  />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 lg: m t-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover: b g-blue-700 transition-colors"
                        >
                          <ArrowRight className="w-5 h-5"  />
                          Apply Now
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {job.description}
                      </p>
                      
                      <div className="grid grid-cols-1 lg: gri d-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"  />
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
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"  />
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
            <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 2 0 }}
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
                    <ArrowRight className="w-5 h-5"  />
                    Send Resume
                  </motion.a>
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
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

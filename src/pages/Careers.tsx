import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Zap, Globe, Award, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our AI team to develop cutting-edge machine learning models and AI solutions for enterprise clients.",
      requirements: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Remote work"]
    },
    {
      id: 2,
      title: "Quantum Computing Researcher",
      department: "Research & Development",
      location: "Cambridge, MA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $150k",
      description: "Research and develop quantum algorithms and quantum computing solutions for complex business problems.",
      requirements: ["Quantum Physics", "Python", "Qiskit", "Linear Algebra", "Research experience"],
      benefits: ["Competitive salary", "Research budget", "Conference attendance", "Health insurance"]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $160k",
      description: "Protect our clients' digital assets and develop innovative security solutions using AI and advanced technologies.",
      requirements: ["Cybersecurity", "Network Security", "Incident Response", "Compliance", "AI Security"],
      benefits: ["Competitive salary", "Security certifications", "Health insurance", "Remote work"]
    },
    {
      id: 4,
      title: "Blockchain Developer",
      department: "Web3 & Blockchain",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $150k",
      description: "Build decentralized applications and blockchain solutions for supply chain, healthcare, and government sectors.",
      requirements: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "JavaScript"],
      benefits: ["Competitive salary", "Crypto bonuses", "Health insurance", "Remote work"]
    },
    {
      id: 5,
      title: "IoT Solutions Architect",
      department: "IoT & Edge Computing",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "6+ years",
      salary: "$130k - $190k",
      description: "Design and implement IoT solutions with edge computing capabilities for industrial and commercial applications.",
      requirements: ["IoT", "Edge Computing", "Cloud Platforms", "Embedded Systems", "Architecture"],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Relocation assistance"]
    },
    {
      id: 6,
      title: "Space Technology Engineer",
      department: "Space Tech",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $160k",
      description: "Develop space technology solutions and applications for Earth-based commercial and government use.",
      requirements: ["Aerospace", "Satellite Systems", "Python", "Data Analysis", "Space Tech"],
      benefits: ["Competitive salary", "Space industry exposure", "Health insurance", "Relocation assistance"]
    }
  ];

  const departments = ["All", "Artificial Intelligence", "Research & Development", "Security", "Web3 & Blockchain", "IoT & Edge Computing", "Space Tech"];

  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and continuous learning opportunities"
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible work arrangements with remote and hybrid options available"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Competitive compensation, stock options, and performance-based bonuses"
    }
  ];

  const cultureValues = [
    "Innovation at the core of everything we do",
    "Diversity and inclusion in our team and solutions",
    "Continuous learning and professional growth",
    "Work-life balance and flexible arrangements",
    "Impact-driven work that makes a difference",
    "Collaboration and knowledge sharing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Be part of a team that's shaping the future of technology and making a global impact through innovation
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Why Work at Zion Tech Group?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Culture Values */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Culture Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Open Positions
          </motion.h2>

          {/* Department Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map((dept, index) => (
              <motion.button
                key={dept}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  dept === "All" 
                    ? "bg-cyan-500 text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                {/* Position Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-cyan-400 font-medium">{position.department}</p>
                </div>

                {/* Position Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Briefcase className="w-4 h-4" />
                    {position.experience}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    {position.salary}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">{position.description}</p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.requirements.map((req) => (
                      <span
                        key={req}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Positions Message */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Don't see a position that matches your skills?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Send us your resume
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Application Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Submit your application with resume and cover letter through our portal"
              },
              {
                step: "2",
                title: "Interview",
                description: "Meet with our team through technical and cultural fit interviews"
              },
              {
                step: "3",
                title: "Join Us",
                description: "Receive offer and join our mission to transform technology"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

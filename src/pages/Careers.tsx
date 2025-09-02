import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, MapPin, Clock, ArrowRight, Star, 
  Award, Globe, Heart, Zap, Brain, Shield
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Research Scientist",
      department: "AI Research",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead cutting-edge AI research and develop innovative machine learning solutions.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years experience in AI/ML research",
        "Strong publication record",
        "Experience with deep learning frameworks"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Engineer",
      department: "Quantum Computing",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop quantum algorithms and work with quantum computing platforms.",
      requirements: [
        "MS/PhD in Physics or Computer Science",
        "Experience with quantum computing",
        "Knowledge of quantum algorithms",
        "Programming experience in Python/C++"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and develop advanced security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, etc.)",
        "Experience with security tools and frameworks"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and microservices.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years full-stack development experience",
        "Proficiency in React, Node.js, and cloud platforms",
        "Experience with modern development practices"
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries and equity packages",
      icon: Star
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: Heart
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible schedules",
      icon: Globe
    },
    {
      title: "Learning & Development",
      description: "Professional development and conference attendance",
      icon: Award
    },
    {
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI and quantum technologies",
      icon: Brain
    },
    {
      title: "Security & Privacy",
      description: "Enterprise-grade security and privacy protection",
      icon: Shield
    }
  ];

  const companyStats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Countries", icon: Globe },
    { number: "95%", label: "Employee Satisfaction", icon: Star },
    { number: "24/7", label: "Support", icon: Zap }
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group | Join Our Team of Technology Innovators"
        description="Join Zion Tech Group and work with cutting-edge AI, quantum computing, and cybersecurity technologies. Explore open positions and be part of the future of technology."
        keywords="careers, jobs, employment, AI jobs, quantum computing careers, cybersecurity jobs, technology careers, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the future of technology. Work with cutting-edge AI, 
                quantum computing, and cybersecurity solutions that are shaping tomorrow.
              </p>
              <div className="flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a team that's pushing the boundaries of what's possible in technology
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits to support our team members' well-being and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore current opportunities to join our team of technology innovators
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
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
                          </div>
                        </div>
                        {position.featured && (
                          <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {position.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:w-64 flex flex-col justify-between">
                      <div className="mb-4">
                        <span className="text-sm text-gray-400">Experience Required:</span>
                        <p className="text-white font-medium">{position.experience}</p>
                      </div>
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for exceptional talent. Send us your resume and 
                let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
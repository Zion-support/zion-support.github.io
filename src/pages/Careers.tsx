import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Careers: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise applications.",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect client systems and data through advanced security measures and threat detection.",
      skills: ["Penetration Testing", "SIEM", "Compliance", "Incident Response"]
    },
    {
      title: "Full Stack Developer",
      department: "Web Development",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern, responsive web applications using cutting-edge technologies.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"]
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Transform raw data into actionable insights for business decision-making.",
      skills: ["Python", "R", "SQL", "Tableau", "Machine Learning"]
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate and optimize development and deployment processes.",
      skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Monitoring"]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote First",
      description: "Work from anywhere with flexible remote work options"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation packages with equity options"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building and social activities"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Teamwork and knowledge sharing drive our success"
    },
    {
      icon: "💡",
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "Continuous learning and personal development"
    }
  ];

  return (
    <>
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore exciting career opportunities in AI, cloud computing, cybersecurity, and more."
        keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, remote work"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Innovation Team
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be part of a team that's revolutionizing technology and shaping the future. 
              We're looking for passionate individuals who want to make a real impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#open-positions"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Open Positions
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                Contact HR
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Work With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're a team of innovators, problem-solvers, and future-shapers.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We take care of our team so you can focus on doing your best work
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to join our team? Check out our current openings and find your perfect fit
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      {position.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-600/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Don't See Your Perfect Role?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Your Resume
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and career growth paths'
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules and global collaboration'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and autonomous systems'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and clients with advanced security measures'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and execution for AI-powered solutions'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Bridge technical expertise with business solutions for clients'
    }
  ];

  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology'
    },
    {
      icon: HeartIcon,
      title: 'Human Centered',
      description: 'Technology serves humanity, not the other way around'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Impact',
      description: 'We solve problems that affect people worldwide'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Help us shape the future of AI, quantum computing, and technology. 
            Work with brilliant minds on projects that change the world.
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-zion-blue-dark">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
    <>
      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Build the future of technology with us. Join a team of innovators, 
              problem-solvers, and visionaries transforming businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#open-positions"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                View Open Positions
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Values */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{value.title}</h3>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Work With Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Open Positions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{position.department}</span>
                    </span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.experience}</span>
                  </div>
                  <p className="text-gray-300">{position.description}</p>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How to Apply
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our simple and transparent application process designed to find the best talent.
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Submit Application</h3>
              <p className="text-gray-400">Send your resume and cover letter to careers@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Initial Review</h3>
              <p className="text-gray-400">Our team reviews your application within 48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Technical Interview</h3>
              <p className="text-gray-400">Discuss your skills and experience with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Join Our Team</h3>
              <p className="text-gray-400">Welcome aboard! Start your journey with us</p>
            </div>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Perks Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work at <span className="text-zion-cyan">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer more than just a job – we provide an environment where you can 
              thrive, grow, and make a real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-4 text-center">
                  <p className="text-zion-slate-light group-hover:text-zion-cyan transition-colors font-medium">
                    {perk}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open <span className="text-zion-cyan">Positions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, passion, and career goals. 
              We're always looking for talented individuals to join our team.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => {
              const isActive = selectedDepartment === dept.id;
              
              return (
                <motion.button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r ' + dept.color + ' text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-blue-dark/30 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 border border-zion-blue-light/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept.name}
                </motion.button>
              );
            })}
          </div>

          {/* Jobs Grid */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                            {departments.find(d => d.id === job.department)?.name}
                          </Badge>
                          <Badge variant="outline" className="border-zion-blue-light/30 text-zion-slate-light">
                            {job.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                          {job.title}
                        </h3>
                        
                        <p className="text-zion-slate-light mb-4">
                          {job.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-zion-cyan" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <FuturisticNeonButton
                          onClick={() => setIsApplying(job.id)}
                          size="sm"
                          className="px-6"
                        >
                          Apply Now
                        </FuturisticNeonButton>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsApplying(job.id)}
                          className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
>>>>>>> origin/cursor/build-and-fix-errors-e276
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Help us revolutionize technology and shape the future of AI and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Send Application</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No positions found</h3>
              <p className="text-gray-500">Try selecting a different department or check back later for new openings.</p>
=======

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
=======
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
=======
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Send General Application</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
      {/* General Application CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Submit General Application
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Contact Recruiting Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals 
            to join our team. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105">
              Submit Resume
            </button>
            <button className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 transition-all duration-300">
              Contact Recruiting
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Learn More About Zion Tech Group</h3>
            <p className="text-gray-300">Discover our mission, team, and the impact we're making</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/about" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">About Us</h4>
                    <p className="text-gray-300 text-sm">Learn about our company and mission</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/team" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Our Team</h4>
                    <p className="text-gray-300 text-sm">Meet the people behind our success</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Contact Us</h4>
                    <p className="text-gray-300 text-sm">Get in touch with our team</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
                </div>
                
                <div className="lg:text-right">
                  <a
                    href="mailto:careers@ziontechgroup.com?subject=Application for ${position.title}"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Email Us</div>
                <a href="mailto:careers@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  careers@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Call Us</div>
                <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Visit Us</div>
                <div className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Send Your Resume
                <Rocket className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======


const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Build the future of technology with Zion Tech Group.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg">
            We're always looking for talented individuals to join our team. Check back soon for open positions!
          </p>
        </div>
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
      {/* Application Modal */}
      <AnimatePresence>
        {isApplying && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zion-blue-dark/95 backdrop-blur-lg border border-zion-blue-light/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Apply for {jobOpenings.find(j => j.id === isApplying)?.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsApplying(null)}
                    className="text-zion-slate-light hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">LinkedIn Profile</label>
                      <Input
                        type="url"
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Cover Letter *</label>
                    <Textarea
                      required
                      rows={4}
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Resume/CV *</label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zion-cyan file:text-white hover:file:bg-zion-cyan-light"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <FuturisticNeonButton
                      type="submit"
                      className="flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </FuturisticNeonButton>
                    <Button
                      variant="outline"
                      onClick={() => setIsApplying(null)}
                      className="border-zion-blue-light/30 text-zion-slate-light hover:bg-zion-blue-light/20"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=General Career Inquiry'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Send Resume
                </FuturisticNeonButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4"
                >
                  Get in Touch
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    </div>
  );
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Careers;
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            {openPositions.map((position, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="lg:ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us shape the future of technology. Join a team of innovators, 
              researchers, and industry experts committed to transforming businesses 
              through cutting-edge AI solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, departments, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>{jobOpenings.length} Open Positions</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Growing Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {job.department}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Job Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          All Open Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {job.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                  {job.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Requirements</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded text-center"
                      >
                        {req.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to join our team
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding 
              the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<<<<<<< HEAD
            );
          })}
=======
<<<<<<< HEAD
            {[
              { step: '1', title: 'Apply', description: 'Submit your application and resume' },
              { step: '2', title: 'Review', description: 'Our team reviews your application' },
              { step: '3', title: 'Interview', description: 'Technical and cultural fit interviews' },
              { step: '4', title: 'Offer', description: 'Welcome to the team!' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
=======
            );
          })}
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Submit Resume
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <Card key={position.id} className={`bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors ${position.featured ? 'ring-2 ring-zion-cyan' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-white">{position.title}</CardTitle>
                        {position.featured && (
                          <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {position.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
                      <a href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}>
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
              <p className="text-zion-slate-light">
                Submit your application with resume and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
              <p className="text-zion-slate-light">
                Our team reviews your application within 48 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              <p className="text-zion-slate-light">
                Technical and cultural fit interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Offer</h3>
              <p className="text-zion-slate-light">
                Welcome to the Zion Tech Group team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <a href="mailto:careers@ziontechgroup.com?subject=General Application">
                Send General Application
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
export default Careers;
=======
export default Careers;
=======
export default Careers;
=======
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-zion-slate-light">Submit your resume and cover letter through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Screening</h3>
              <p className="text-zion-slate-light">Initial review and phone screening with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview</h3>
              <p className="text-zion-slate-light">Technical assessment and team interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Offer</h3>
              <p className="text-zion-slate-light">Welcome to the Zion Tech Group family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join us in building the future of technology. Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#open-positions">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Browse Openings
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default CareersPage;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

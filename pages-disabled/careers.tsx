import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  UsersRocketBrainAtomShieldCloud
  ArrowRightMapPinClockDollarSignStarZap
=======
  Users, Rocket, Brain, Atom, Shield, Cloud, 
  ArrowRight, MapPin, Clock, DollarSign, Star, Zap
>>>>>>> origin/auto/autonomy-17186719616
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "Lead the development of cutting-edge AI solutions and neural networks for enterprise clients",
      requirements: [
<<<<<<< HEAD
        "Advanced degree in Computer ScienceAIor related field",
        "Expertise in TensorFlowPyTorchand deep learning frameworks",
        "Experience with large-scale AI model deployment",
        "Strong background in machine learning algorithms"
      ],
      benefits: ["Competitive salary"Equity options"Health insurance"Flexible work arrangements"],
=======
        "Advanced degree in Computer Science, AI, or related field",
        "Expertise in TensorFlow, PyTorch, and deep learning frameworks",
        "Experience with large-scale AI model deployment",
        "Strong background in machine learning algorithms"
      ],
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work arrangements"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Researcher",
      department: "Quantum Computing",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "3+ years",
      salary: "$120,000 - $180,000",
      description: "Research and develop quantum algorithms and quantum-resistant cryptography solutions",
      requirements: [
<<<<<<< HEAD
        "PhD in PhysicsComputer Scienceor related field",
        "Experience with quantum computing frameworks (QiskitCirq)",
        "Knowledge of quantum algorithms and cryptography",
        "Strong mathematical and analytical skills"
      ],
      benefits: ["Competitive salary"Research funding"Conference attendance"Health insurance"],
=======
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum computing frameworks (Qiskit, Cirq)",
        "Knowledge of quantum algorithms and cryptography",
        "Strong mathematical and analytical skills"
      ],
      benefits: ["Competitive salary", "Research funding", "Conference attendance", "Health insurance"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "7+ years",
      salary: "$160,000 - $220,000",
      description: "Design and implement enterprise-level security architectures and zero-trust solutions",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Expertise in security frameworks and compliance standards",
        "Experience with zero-trust architecture implementation",
        "Strong knowledge of threat detection and response"
      ],
<<<<<<< HEAD
      benefits: ["Competitive salary"Security certifications"Health insurance"Remote work"],
=======
      benefits: ["Competitive salary", "Security certifications", "Health insurance", "Remote work"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Infrastructure Engineer",
      department: "Cloud Infrastructure",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $180,000",
      description: "Build and maintain scalable cloud infrastructure and DevOps automation systems",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
<<<<<<< HEAD
        "Expertise in AWSAzureor GCP",
        "Experience with KubernetesDockerand CI/CD",
        "Strong knowledge of infrastructure as code"
      ],
      benefits: ["Competitive salary"Cloud certifications"Health insurance"Flexible hours"],
=======
        "Expertise in AWS, Azure, or GCP",
        "Experience with Kubernetes, Docker, and CI/CD",
        "Strong knowledge of infrastructure as code"
      ],
      benefits: ["Competitive salary", "Cloud certifications", "Health insurance", "Flexible hours"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "3+ years",
      salary: "$110,000 - $160,000",
      description: "Develop predictive analytics models and data-driven insights for business clients",
      requirements: [
<<<<<<< HEAD
        "Master's degree in Data ScienceStatisticsor related field",
        "Proficiency in PythonRand SQL",
        "Experience with machine learning and statistical modeling",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary"Learning budget"Health insurance"Remote work"],
=======
        "Master's degree in Data Science, Statistics, or related field",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning and statistical modeling",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Learning budget", "Health insurance", "Remote work"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Product Manager",
      department: "Product",
<<<<<<< HEAD
      location: "San FranciscoCA / Remote",
=======
      location: "San Francisco, CA / Remote",
>>>>>>> origin/auto/autonomy-17186719616
      type: "Full-time",
      experience: "5+ years",
      salary: "$140,000 - $190,000",
      description: "Lead product strategy and development for our technology solutions portfolio",
      requirements: [
<<<<<<< HEAD
        "Bachelor's degree in BusinessEngineeringor related field",
=======
        "Bachelor's degree in Business, Engineering, or related field",
>>>>>>> origin/auto/autonomy-17186719616
        "Experience in B2B SaaS or technology products",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and leadership abilities"
      ],
<<<<<<< HEAD
      benefits: ["Competitive salary"Equity options"Health insurance"Professional development"],
=======
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Professional development"],
>>>>>>> origin/auto/autonomy-17186719616
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Health & Wellness",
<<<<<<< HEAD
      description: "Comprehensive healthdentaland vision insurance for you and your family",
=======
      description: "Comprehensive health, dental, and vision insurance for you and your family",
>>>>>>> origin/auto/autonomy-17186719616
      icon: Star,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professional Growth",
<<<<<<< HEAD
      description: "Continuous learning opportunitiesconferencesand career development",
=======
      description: "Continuous learning opportunities, conferences, and career development",
>>>>>>> origin/auto/autonomy-17186719616
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
<<<<<<< HEAD
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AIquantum computingand emerging technologies. Remote workcompetitive benefitsand cutting-edge projects." />
=======
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects." />
>>>>>>> origin/auto/autonomy-17186719616
        </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0y: 30 }}
            animate={{ opacity: 1y: 0 }}
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/auto/autonomy-17186719616
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Build the future of technology with cutting-edge AIquantum computingand cybersecurity solutions
=======
              Build the future of technology with cutting-edge AI, quantum computing, and cybersecurity solutions
>>>>>>> origin/auto/autonomy-17186719616
            </p>
          </motion.div>

          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0y: 30 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
>>>>>>> origin/auto/autonomy-17186719616
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Work alongside world-class engineers and researchers to solve the most complex 
              technological challenges and shape the future of computing.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0y: 30 }}
            whileInView={{ opacity: 1y: 0 }}
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/auto/autonomy-17186719616
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer competitive benefits and a collaborative environment that fosters innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {benefits.map((benefitindex) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0y: 30 }}
                whileInView={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
=======
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> origin/auto/autonomy-17186719616
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0y: 30 }}
            whileInView={{ opacity: 1y: 0 }}
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/auto/autonomy-17186719616
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join our team of innovators and help build the future of technology
            </p>
          </motion.div>

          <div className="space-y-6">
<<<<<<< HEAD
            {openPositions.map((positionindex) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0y: 30 }}
                whileInView={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
=======
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> origin/auto/autonomy-17186719616
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <p className="text-white/70">{position.department}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Users className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Requirements</h4>
                      <ul className="space-y-1">
<<<<<<< HEAD
                        {position.requirements.map((reqidx) => (
=======
                        {position.requirements.map((req, idx) => (
>>>>>>> origin/auto/autonomy-17186719616
                          <li key={idx} className="text-sm text-white/80 flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.map((benefit) => (
                          <span key={benefit} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
<<<<<<< HEAD

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
=======
              </motion.div>
>>>>>>> origin/auto/autonomy-17186719616
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0y: 30 }}
            whileInView={{ opacity: 1y: 0 }}
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/auto/autonomy-17186719616
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Recruiting
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> job openings
            {selectedDepartment !== 'All' && ` in ${selectedDepartment}`}
            {selectedLocation !== 'All' && ` at ${selectedLocation}`}
          </p>
        </div>

        {/* All Job Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📍</span>
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">⏰</span>
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">💼</span>
                    {job.experience}
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium">
                    <span className="mr-2">💰</span>
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Don&apos;t See the Perfect Role?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. 
              Send us your resume and let&apos;s discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Send Your Resume
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>


    </div>
=======
        </motion.div>
      </div>
    </UltraAdvancedFuturisticBackground>
>>>>>>> origin/auto/autonomy-17186719616
  );
};

      <EnhancedFooter />
    </div>
  );
}

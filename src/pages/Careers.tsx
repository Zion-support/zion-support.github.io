import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket,
  ArrowRight,
  Send,
  Heart,
  Star,
  Award,
  Globe,
  Building
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const jobCategories = [
    'All',
    'Engineering',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Data Science',
    'Product Management',
    'Sales & Marketing',
    'Operations'
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our AI team to build cutting-edge machine learning models and AI solutions for enterprise clients.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of cloud platforms (AWS, Azure, GCP)",
        "Experience with MLOps and model deployment"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Cybersecurity",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Help protect our clients' digital assets with advanced security solutions and threat detection systems.",
      requirements: [
        "Experience with security tools and frameworks",
        "Knowledge of network security and penetration testing",
        "Familiarity with compliance standards (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary",
        "Professional certifications support",
        "Modern security lab environment",
        "Comprehensive benefits package"
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud architectures for enterprise clients across multiple cloud platforms.",
      requirements: [
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with Kubernetes and containerization",
        "Strong understanding of DevOps practices",
        "Excellent communication and client interaction skills"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Remote work flexibility",
        "Latest cloud technology access",
        "Professional development opportunities"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Transform raw data into actionable insights and build predictive models for business intelligence.",
      requirements: [
        "Strong statistical and mathematical background",
        "Proficiency in Python, R, and SQL",
        "Experience with data visualization tools",
        "Knowledge of big data technologies (Spark, Hadoop)"
      ],
      benefits: [
        "Competitive salary",
        "Remote work environment",
        "Data science conference attendance",
        "Health and wellness benefits"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product Management",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and development for our innovative technology solutions and services.",
      requirements: [
        "Experience in B2B SaaS product management",
        "Strong analytical and strategic thinking",
        "Excellent stakeholder management skills",
        "Technical background preferred"
      ],
      benefits: [
        "Competitive salary and equity",
        "Product leadership opportunities",
        "Modern office environment",
        "Comprehensive benefits package"
      ]
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Great ideas come from working together and sharing knowledge"
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "We move quickly to deliver value and stay ahead of the competition"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Everything we do is centered around solving real customer problems"
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Flexible remote work options",
    "Professional development and training",
    "Health, dental, and vision insurance",
    "401(k) with company match",
    "Unlimited PTO and flexible holidays",
    "Modern technology and tools",
    "Team building and social events",
    "Career growth opportunities",
    "Work-life balance focus"
  ];

  const filteredJobs = selectedCategory === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Join the
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Innovation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Build the future with cutting-edge technology. Join our team of innovators, problem-solvers, and technology enthusiasts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-gray-600">
              Contact Recruiting
            </button>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find your next opportunity to make an impact in the world of technology
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {jobCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                    <span>Apply Now</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions available in this category at the moment.</p>
              <p className="text-gray-500 mt-2">Check back soon or contact us about future opportunities!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Submit Your Resume
              </button>
              <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-gray-600">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / New York, NY",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for a passionate full-stack developer to join our engineering team and help build scalable web applications.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Experience with microservices architecture",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our AI team to develop cutting-edge machine learning models and algorithms that power our intelligent solutions.",
    requirements: [
      "3+ years of experience in machine learning and deep learning",
      "Proficiency in Python, TensorFlow, and PyTorch",
      "Experience with NLP and computer vision",
      "Strong mathematical and statistical background",
      "PhD in Computer Science or related field preferred"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Research conference attendance",
      "State-of-the-art equipment",
      "Collaborative research environment"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description: "Help us build and maintain our cloud infrastructure while implementing best practices for CI/CD and monitoring.",
    requirements: [
      "4+ years of DevOps experience",
      "Expertise in AWS, Azure, or Google Cloud",
      "Experience with Kubernetes and Docker",
      "Knowledge of Infrastructure as Code (Terraform, CloudFormation)",
      "Strong scripting skills (Python, Bash, or PowerShell)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Certification reimbursement",
      "Flexible work schedule",
      "Team building events"
    ]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Seattle, WA",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Experience with user research and usability testing",
      "Strong portfolio showcasing design skills",
      "Knowledge of accessibility standards"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Design tool subscriptions",
      "Creative freedom and ownership",
      "Regular design reviews and feedback"
    ]
  }
];

const benefits = [
  {
    icon: Star,
    title: "Competitive Compensation",
    description: "We offer competitive salaries, equity packages, and performance bonuses to reward your contributions."
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Access to learning resources, conference attendance, and mentorship programs to advance your career."
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Work on cutting-edge projects with the latest technologies and tools in a collaborative environment."
  },
  {
    icon: Users,
    title: "Great Culture",
    description: "Join a diverse, inclusive team that values work-life balance and celebrates achievements together."
  }
];

const stats = [
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Countries Represented" },
  { number: "4.8/5", label: "Employee Satisfaction" },
  { number: "95%", label: "Retention Rate" }
];

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals who want to make a real impact.
              </p>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and career goals.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
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
                          <li key={benefitIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Send Your Resume
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
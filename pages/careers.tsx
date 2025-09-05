import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Award,
  Coffee,
  Laptop,
  BookOpen,
  Target
} from 'lucide-react'

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Above-market salaries and performance bonuses",
    icon: Award
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
    icon: Heart
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Laptop
  },
  {
    title: "Learning & Development",
    description: "Professional development budget and training programs",
    icon: BookOpen
  },
  {
    title: "Team Building",
    description: "Regular team events and company retreats",
    icon: Users
  },
  {
    title: "Innovation Time",
    description: "Dedicated time for personal projects and innovation",
    icon: Zap
  }
];

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and communication skills"
    ],
    featured: true
  },
  {
    title: "AI/ML Engineer",
    department: "AI Services",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and deploy machine learning models and AI solutions for enterprise clients.",
    requirements: [
      "3+ years of ML/AI development experience",
      "Proficiency in Python, TensorFlow, and PyTorch",
      "Experience with MLOps and model deployment",
      "Knowledge of cloud ML services"
    ],
    featured: true
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation.",
    requirements: [
      "4+ years of DevOps experience",
      "Expertise in AWS, Docker, and Kubernetes",
      "Experience with CI/CD tools (Jenkins, GitLab CI)",
      "Infrastructure as Code (Terraform, CloudFormation)"
    ],
    featured: false
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead product strategy and roadmap for our AI and SaaS solutions.",
    requirements: [
      "3+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and communication skills",
      "Technical background preferred"
    ],
    featured: false
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "2+ years",
    description: "Support sales team with technical expertise and client demonstrations.",
    requirements: [
      "2+ years of technical sales experience",
      "Strong technical background",
      "Excellent presentation and communication skills",
      "Experience with enterprise software sales"
    ],
    featured: false
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Design user experiences and interfaces for our web and mobile applications.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Experience with design systems",
      "Portfolio demonstrating B2B product design"
    ],
    featured: false
  }
];

const culture = [
  {
    title: "Innovation First",
    description: "We encourage experimentation and innovative thinking in everything we do.",
    icon: Zap
  },
  {
    title: "Collaborative Environment",
    description: "Open communication and teamwork are at the heart of our culture.",
    icon: Users
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth with learning opportunities and development programs.",
    icon: BookOpen
  },
  {
    title: "Work-Life Balance",
    description: "We believe in sustainable work practices and supporting our team's well-being.",
    icon: Heart
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    content: "Working at Zion Tech Group has been incredible. The projects are challenging, the team is supportive, and I've grown tremendously as a developer.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "AI Engineer",
    content: "The opportunity to work on cutting-edge AI projects while having the flexibility to work remotely has been perfect for my career and lifestyle.",
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    content: "The collaborative culture and focus on innovation make this an amazing place to work. I love being part of building solutions that make a real impact.",
    avatar: "EJ"
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative technologists. Explore career opportunities at Zion Tech Group and help us build the future of technology."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Build the future of technology with us. Explore exciting career opportunities at Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Work With Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer more than just a job - we provide opportunities to grow, learn, and make a real impact in the technology industry.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Our Culture
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {culture.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Open Positions
                </h2>
                <div className="space-y-6">
                  {openPositions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                            {position.featured && (
                              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
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
                          </div>
                          <p className="text-gray-600 mb-4">{position.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  What Our Team Says
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
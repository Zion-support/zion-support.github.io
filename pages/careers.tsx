import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Globe,
  Code,
  Brain,
  Shield,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  BookOpen,
  Target
} from 'lucide-react';

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
      "Experience with B2B SaaS products"
      "Strong analytical and communication skills"}
      "Technical background preferred"}
    ],}
    featured: false}
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
    content: "Working at Zion Tech Group has been incredible. The team is supportive, the projects are challenging, and I've grown tremendously in my career.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "AI Engineer",
    content: "The opportunity to work on cutting-edge AI projects while having the flexibility to work remotely has been perfect for me.",
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
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const filteredJobs = selectedCategory === 'all'
    ? openPositions
    : openPositions.filter(job => job.department.toLowerCase() === selectedCategory)
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
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Build the future of technology with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Remote Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-gray-600">Team Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a culture that values innovation, collaboration, and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {}
                const IconComponent = benefit.icon;}
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where everyone can thrive and contribute to our mission.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culture.map((value, index) => {}
                const IconComponent = value.icon;}
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="open-positions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our team and help us build innovative solutions that make a difference.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (}
                <motion.div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    position.featured ? "ring-2 ring-blue-500" : ''
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  {position.featured && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((requirement, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  We don't have any open positions in this category right now. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Team Says
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about their experience working at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (}
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Send Us Your Resume
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More About Us
                </Link>`
              </div>`
            </motion.div>`
          </div>`
        </section>`
      </div>`
    </MainLayout>`
}
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Globe,
  CheckCircle,
  ExternalLink,
  Send
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of our core platform using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and deploy machine learning models for our AI-powered solutions.",
    requirements: [
      "3+ years of ML/AI experience",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with MLOps and model deployment",
      "Strong understanding of data science principles"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
    requirements: [
      "4+ years of DevOps experience",
      "Expertise in Kubernetes, Docker, and CI/CD",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong automation and scripting skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive product strategy and roadmap for our technology solutions.",
    requirements: [
      "4+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and communication skills",
      "Technical background preferred"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Help clients understand and implement our technology solutions.",
    requirements: [
      "3+ years of sales engineering experience",
      "Technical background in software development",
      "Excellent presentation and communication skills",
      "Experience with enterprise sales"
    ],
    benefits: [
      "Competitive salary and commission",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "2+ years",
    description: "Ensure client success and satisfaction with our solutions.",
    requirements: [
      "2+ years of customer success experience",
      "Strong relationship-building skills",
      "Technical aptitude and problem-solving ability",
      "Experience with enterprise clients"
    ],
    benefits: [
      "Competitive salary and bonus",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  }
];

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
    icon: Heart
  },
  {
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours",
    icon: Globe
  },
  {
    title: "Learning & Growth",
    description: "Professional development budget and learning opportunities",
    icon: GraduationCap
  },
  {
    title: "Innovation Time",
    description: "20% time for personal projects and innovation",
    icon: Zap
  },
  {
    title: "Competitive Pay",
    description: "Competitive salary and equity participation",
    icon: Briefcase
  },
  {
    title: "Work-Life Balance",
    description: "Unlimited PTO and flexible scheduling",
    icon: Clock
  }
];

const values = [
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions",
    icon: Zap
  },
  {
    title: "Collaboration",
    description: "We work together to achieve common goals",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do",
    icon: CheckCircle
  },
  {
    title: "Growth",
    description: "We invest in our people's personal and professional development",
    icon: GraduationCap
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Countries' },
  { number: '95%', label: 'Employee Satisfaction' },
  { number: '4.8/5', label: 'Glassdoor Rating' }
];

export default function CareersPage() {
  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals building the future of technology. Explore open positions and learn about our culture."
      keywords="careers, jobs, employment, hiring, technology jobs, remote work, engineering jobs"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Join Our Team
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate, 
                talented individuals to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our current openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {position.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {position.type}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Experience Required</div>
                      <div className="text-sm text-gray-600">{position.experience}</div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 mb-2">Key Requirements</div>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 2).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {position.requirements.length > 2 && (
                          <li className="text-sm text-gray-500">
                            +{position.requirements.length - 2} more requirements
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {position.benefits.length} benefits included
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer comprehensive benefits and perks to support our team members.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Your Resume
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Culture
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
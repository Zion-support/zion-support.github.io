import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Globe,
  Shield,
  Brain
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
    title: "Competitive Salary",
    description: "Above-market compensation with performance bonuses and equity options.",
    icon: Star
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and mental health support.",
    icon: Heart
  },
  {
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance initiatives.",
    icon: Globe
  },
  {
    title: "Learning & Development",
    description: "Professional development budget, conferences, and continuous learning opportunities.",
    icon: Brain
  },
  {
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and advancement opportunities.",
    icon: Zap
  },
  {
    title: "Team Culture",
    description: "Collaborative environment, team events, and inclusive workplace culture.",
    icon: Users
  }
];

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Services",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and implement machine learning models and AI solutions for enterprise clients.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Docker"]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability and security.",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "Monitoring"]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy, roadmap, and collaborate with engineering teams to deliver solutions.",
    skills: ["Product Strategy", "Agile", "Analytics", "User Research", "Roadmapping"]
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "2+ years",
    description: "Technical sales support, client demos, and solution architecture for enterprise clients.",
    skills: ["Technical Sales", "Solution Architecture", "Client Relations", "Cloud Technologies"]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Design intuitive user experiences and interfaces for our technology solutions.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"]
  }
];

const values = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative problem-solving.",
    icon: Brain
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we deliver.",
    icon: Star
  },
  {
    title: "Collaboration",
    description: "We work together as a team to achieve common goals.",
    icon: Users
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions.",
    icon: Shield
  }
];

export default function CareersPage() {
  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts. Explore career opportunities at Zion Tech Group and be part of innovative solutions that shape the future."
      keywords="careers, jobs, technology careers, software engineering, AI jobs, remote work, tech jobs"
    >
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Be part of a team that's building the future of technology. 
                Work on cutting-edge projects and grow your career with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#open-positions"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment that helps you grow both personally and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="text-sm text-gray-600">
                        Experience: {position.experience}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Send Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
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
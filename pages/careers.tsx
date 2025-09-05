import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Zap,
  Globe,
  Shield,
  Rocket,
  Building
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Above-market salaries and performance bonuses",
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
    description: "Professional development budget and training programs",
    icon: Zap
  },
  {
    title: "Work-Life Balance",
    description: "Generous PTO and sabbatical programs",
    icon: Clock
  },
  {
    title: "Career Growth",
    description: "Clear promotion paths and mentorship programs",
    icon: Rocket
  }
];

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead AI model development and deployment for enterprise clients"
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud infrastructure solutions"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive product strategy and roadmap for our AI platform"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Seattle",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and maintain CI/CD pipelines and infrastructure automation"
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Chicago",
    type: "Full-time",
    experience: "3+ years",
    description: "Technical sales support and solution architecture for enterprise clients"
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote / Los Angeles",
    type: "Full-time",
    experience: "4+ years",
    description: "Create intuitive user experiences for our AI-powered applications"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We push the boundaries of what's possible with technology",
    icon: Zap
  },
  {
    title: "Excellence",
    description: "We deliver high-quality solutions that exceed expectations",
    icon: Star
  },
  {
    title: "Collaboration",
    description: "We work together to achieve common goals",
    icon: Users
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in everything we do",
    icon: Shield
  }
];

export default function CareersPage() {
  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
      description="Join our team of innovative engineers, designers, and technologists. Explore career opportunities at Zion Tech Group and help shape the future of technology."
      keywords="careers, jobs, employment, engineering jobs, tech careers, AI jobs, cloud jobs, remote work"
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
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Help us build the future of technology. Join a team of passionate 
                innovators working on cutting-edge AI and cloud solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#positions"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  View Open Positions <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">With Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment 
                that helps you grow both personally and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-green-600 p-3 rounded-lg mr-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Positions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {position.title}
                      </h3>
                      <p className="text-gray-400 mb-2">
                        {position.description}
                      </p>
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Building className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group"
                  >
                    Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Send Your Resume <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
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
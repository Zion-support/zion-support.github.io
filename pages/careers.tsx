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
  Brain,
  BookOpen
} from 'lucide-react';
import Layout from '../src/components/Layout';

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
    icon: BookOpen
  },
  {
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and advancement opportunities.",
    icon: Brain
  },
  {
    title: "Team Culture",
    description: "Collaborative environment with regular team events and social activities.",
    icon: Users
  }
];

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Software Development",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications using modern technologies and frameworks."
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "Cloud & Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud-based solutions for enterprise clients."
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' systems and data with advanced security measures."
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive product strategy and roadmap for our technology solutions."
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Automate deployment processes and maintain our cloud infrastructure."
  }
];

const values = [
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
    icon: Brain
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
    icon: Star
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices.",
    icon: Shield
  }
];

const CareersPage = () => {
  return (
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Help us build the future of technology. Join a team of passionate professionals 
                working on cutting-edge AI and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#open-positions"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
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
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a dynamic work environment where you can grow your career while making a real impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="bg-white rounded-xl p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Link
                        href={`/careers/${job.id}`}
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:careers@ziontechgroup.com"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Send Your Resume
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
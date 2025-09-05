import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Clock
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong relationships with our clients and partners."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and the highest ethical standards."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from code to customer service."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "AI and machine learning expert with 15+ years of experience in developing cutting-edge solutions.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity specialist with extensive experience in protecting enterprise systems and data.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Jennifer Liu",
      role: "Cloud Solutions Architect",
      bio: "Cloud computing expert specializing in scalable infrastructure and migration strategies.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Park",
      role: "Product Manager",
      bio: "Product strategy leader with a track record of delivering successful technology solutions.",
      image: "/api/placeholder/300/300"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to revolutionize technology consulting."
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful AI implementation project."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our team to 25+ experts and expanded our service offerings."
    },
    {
      year: "2023",
      title: "Cloud Migration Focus",
      description: "Specialized in cloud migration services and helped 50+ companies move to the cloud."
    },
    {
      year: "2024",
      title: "AI Solutions Launch",
      description: "Launched our comprehensive AI services portfolio and completed 100+ AI projects."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded our services globally and established partnerships with leading technology companies."
    }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and team. Discover how we're transforming businesses through innovative technology solutions."
      keywords="about us, company, team, mission, values, technology consulting, AI solutions"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We're a team of passionate technologists dedicated to transforming businesses 
                through innovative AI and technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600">
                    To empower businesses with cutting-edge technology solutions that drive growth, 
                    efficiency, and innovation. We believe technology should be accessible, reliable, 
                    and transformative for organizations of all sizes.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-600">
                    To be the leading technology partner that helps businesses navigate the digital 
                    transformation journey, making advanced AI and cloud technologies accessible 
                    and beneficial for everyone.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Talented professionals who are passionate about technology and committed to your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key milestones in our company's growth and evolution
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1/2 px-8">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
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
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
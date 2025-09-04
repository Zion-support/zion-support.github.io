import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Heart,
  Star
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  { number: '50+', label: 'Expert Team Members', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { number: '300%', label: 'Average ROI', icon: TrendingUp },
  { number: '24/7', label: 'Support Available', icon: Globe },
  { number: '15+', label: 'Years Experience', icon: Award }
];

const values = [
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Security',
    description: 'Security is at the core of everything we do. We implement enterprise-grade security measures to protect your data and systems.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring transparent communication and alignment with business objectives.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive measurable results.',
    color: 'from-purple-500 to-pink-500'
  }
];

const team = [
  {
    name: 'Kleber Santos',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in technology and business transformation.',
    image: '/team/kleber.jpg'
  },
  {
    name: 'AI Engineering Team',
    role: 'Machine Learning Specialists',
    description: 'Expert team of data scientists and AI engineers building cutting-edge solutions.',
    image: '/team/ai-team.jpg'
  },
  {
    name: 'Cloud Infrastructure Team',
    role: 'DevOps & Cloud Architects',
    description: 'Certified professionals managing scalable cloud infrastructure and deployments.',
    image: '/team/cloud-team.jpg'
  },
  {
    name: 'Security Team',
    role: 'Cybersecurity Experts',
    description: 'Security specialists ensuring enterprise-grade protection and compliance.',
    image: '/team/security-team.jpg'
  }
];

const achievements = [
  {
    year: '2024',
    title: 'AI Innovation Award',
    description: 'Recognized for breakthrough AI solutions in business automation'
  },
  {
    year: '2023',
    title: 'Top Cloud Provider',
    description: 'Certified AWS Advanced Consulting Partner with 100% customer satisfaction'
  },
  {
    year: '2022',
    title: 'Security Excellence',
    description: 'SOC 2 Type II certified with zero security incidents'
  },
  {
    year: '2021',
    title: 'Rapid Growth',
    description: '300% year-over-year growth in client base and revenue'
  }
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us - Zion Tech Group | Leading Technology Solutions Provider"
      description="Learn about Zion Tech Group, a leading technology solutions provider specializing in AI, cloud services, and digital transformation. 15+ years of excellence with 500+ successful projects."
      keywords="about us, technology company, AI solutions, cloud services, digital transformation, team, mission, values"
      canonical="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud services, and digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center">
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-8 h-8 text-blue-600 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive innovation, 
                    efficiency, and growth. We are committed to delivering exceptional value through 
                    AI-powered solutions, robust cloud infrastructure, and comprehensive IT services.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the world's leading technology partner, recognized for our innovation, 
                    reliability, and commitment to client success. We envision a future where 
                    every business can leverage advanced technology to achieve their full potential.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do What We Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology should be an enabler, not a barrier. We believe that every business, 
                  regardless of size, deserves access to world-class technology solutions that can 
                  transform their operations and accelerate their growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{achievement.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our technology solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors">
                Explore Our Services
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📞 +1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">✉️ kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📍 364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
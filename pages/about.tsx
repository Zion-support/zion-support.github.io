import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Building, 
  Rocket, 
  Lightbulb, 
  Handshake 
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, fostering long-term relationships built on trust and mutual success.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.'
  }
];

const team = [
  {
    name: 'Kleber Santos',
    role: 'Founder & CEO',
    image: '/team/kleber.jpg',
    bio: 'Visionary leader with 15+ years in technology and business development.',
    linkedin: 'https://linkedin.com/in/kleber-santos'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/team/sarah.jpg',
    bio: 'Technology expert specializing in AI, cloud architecture, and scalable systems.',
    linkedin: 'https://linkedin.com/in/sarah-johnson'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: '/team/michael.jpg',
    bio: 'Full-stack developer with expertise in modern web technologies and microservices.',
    linkedin: 'https://linkedin.com/in/michael-chen'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
  { number: '99%', label: 'Client Satisfaction' }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about delivering innovative technology solutions." />
        <meta name="keywords" content="about us, team, mission, values, technology company, AI services, IT solutions" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-blue-300">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                We're passionate about transforming businesses through innovative technology solutions, 
                AI-powered automation, and cutting-edge digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, powerful, 
                  and transformative for organizations of all sizes.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Rocket className="w-5 h-5 mr-2" />
                  Driving Innovation Forward
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading technology partner that helps businesses thrive in the digital age, 
                  creating a world where technology seamlessly integrates with human potential to achieve 
                  extraordinary results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape our culture of excellence and innovation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-blue-100">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Talented professionals who are passionate about technology and committed to your success.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start a Project
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
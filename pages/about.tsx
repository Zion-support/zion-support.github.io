import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { 
=======
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
<<<<<<< HEAD
  ArrowRight,
  Rocket,
  Lightbulb,
  Handshake
=======
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  BarChart3
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
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
<<<<<<< HEAD
    description: 'We work closely with our clients as partners, understanding their unique challenges and co-creating solutions together.'
=======
    description: 'We work closely with our clients as partners, ensuring their success is our success.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, delivering quality that exceeds expectations.'
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive results.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We believe technology should make the world better, creating solutions that have positive impact on society and the environment.'
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
    name: 'AI Research Team',
    role: 'Machine Learning Engineers',
    description: 'World-class AI researchers and engineers pushing the boundaries of artificial intelligence.',
    image: '/team/ai-team.jpg'
  },
  {
    name: 'Cloud Architecture Team',
    role: 'Cloud Solutions Architects',
    description: 'Experts in cloud infrastructure, DevOps, and scalable system design.',
    image: '/team/cloud-team.jpg'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
<<<<<<< HEAD
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Countries Served' }
=======
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/john-smith.jpg',
    bio: 'Visionary leader with 15+ years in tech innovation.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/images/team/sarah-johnson.jpg',
    bio: 'Technical expert specializing in AI and cloud architecture.'
  },
  {
    name: 'Mike Chen',
    role: 'Head of Engineering',
    image: '/images/team/mike-chen.jpg',
    bio: 'Full-stack developer passionate about scalable solutions.'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: '/images/team/emily-davis.jpg',
    bio: 'Creative director focused on user experience excellence.'
  }
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're transforming businesses through innovative AI and technology solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI technology, cloud services" />
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering innovative technology solutions." />
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Transforming businesses through innovative AI and technology solutions
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
=======
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
<<<<<<< HEAD
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age. We believe that every organization deserves access to world-class technology that can transform their operations and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate experts behind our innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
                </Link>
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
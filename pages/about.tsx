import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
<<<<<<< HEAD
<<<<<<< HEAD
  Brain, Users, Award, Target, Heart, Globe, Shield, Zap, CheckCircle, 
  ArrowRight, Star, TrendingUp, Building, Rocket, Lightbulb, Handshake 
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
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
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
<<<<<<< HEAD
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
=======
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  },
  {
    icon: Shield,
    title: 'Security',
<<<<<<< HEAD
    description: 'Your data and systems are protected with enterprise-grade security measures.'
=======
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.'
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  },
  {
    icon: Users,
    title: 'Collaboration',
<<<<<<< HEAD
    description: 'We work closely with our clients to understand their unique needs and challenges.'
  },
  {
<<<<<<< HEAD
    icon: Zap,
    title: 'Efficiency',
    description: 'Our solutions are designed to maximize efficiency and minimize waste.'
=======
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering quality results every time.'
>>>>>>> main
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions that transform businesses." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, micro SaaS, company values" />
=======
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI, IT, and micro SaaS solutions. Our expert team delivers innovative technology solutions for modern businesses." />
        <meta name="keywords" content="about us, technology company, AI solutions, IT services, micro SaaS, team, expertise" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology solutions provider with expert team and innovative approach." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
>>>>>>> main
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
=======
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
=======
    description: 'We work closely with our clients as partners, understanding their unique challenges and co-creating solutions.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const team = [
  {
    name: 'Kleber Santos',
    role: 'CEO & Founder',
    image: '/team/kleber.jpg',
    bio: 'Technology visionary with 15+ years of experience in AI and cloud computing.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/team/sarah.jpg',
    bio: 'Expert in machine learning and distributed systems architecture.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: '/team/michael.jpg',
    bio: 'Full-stack developer specializing in modern web technologies.'
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission, values, and the team behind our innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
<<<<<<< HEAD
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              We are a leading technology solutions provider dedicated to transforming 
              businesses through innovative AI, cloud, and micro SaaS solutions.
            </motion.p>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider specializing in AI, IT services, and micro SaaS platforms. Our expert team delivers innovative solutions that transform businesses and drive growth.
=======
                About <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, cloud infrastructure, 
                and digital transformation services. Our mission is to empower businesses with cutting-edge technology.
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
<<<<<<< HEAD
>>>>>>> main
=======
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced technology solutions, enabling businesses of all sizes 
                  to leverage the power of AI, cloud computing, and digital transformation to achieve their goals.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe that technology should be accessible, reliable, and transformative. Our team of 
                  experts works tirelessly to create solutions that not only meet today's needs but anticipate 
                  tomorrow's challenges.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Passionate About Technology</h3>
                    <p className="text-gray-600">We love what we do and it shows in our work</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>15+ years of experience</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Expert team of professionals</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Cutting-edge technology solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
          </div>
        </section>

        {/* Values Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to technology solutions.
=======
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
<<<<<<< HEAD
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to delivering exceptional technology solutions.
>>>>>>> main
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
=======
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
>>>>>>> main
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
            >
              Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
=======
=======
        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology and innovation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

>>>>>>> cursor/expand-services-advertise-and-build-project-9473
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get In Touch
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Our Services
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
>>>>>>> main
          </div>
        </section>
      </div>
    </>
  );
}
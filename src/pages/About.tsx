<<<<<<< HEAD
import React from 'react';
import { ArrowRight, Award, CheckCircle, Globe, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform enterprises with AI-powered solutions and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Leading the transformation of enterprises through AI-powered solutions
                and digital innovation.
              </p>
            </div>
=======
import { ArrowRight, Award, CheckCircle, Globe, Lightbulb, Shield, Target, Users, Zap } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and projects are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring alignment with your business goals.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and drive measurable results.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Business Development',
      experience: '15+ years in AI and technology leadership'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Technical Architecture & Innovation',
      experience: '12+ years in software engineering and cloud technologies'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Solutions',
      expertise: 'Machine Learning & Data Science',
      experience: '10+ years in AI research and implementation'
    },
    {
      name: 'David Thompson',
      role: 'Lead DevOps Engineer',
      expertise: 'Cloud Infrastructure & Automation',
      experience: '8+ years in DevOps and infrastructure management'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by Tech Innovation Awards 2024'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: '500+ successful projects delivered across various industries'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients in 25+ countries worldwide'
    },
    {
      icon: Zap,
      title: 'Innovation Leader',
      description: 'First to market with several breakthrough AI solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and technology solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about us, AI company, technology team, mission, values, leadership, innovation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions that drive real results.
              </p>
            </motion.div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
          </div>
        </section>

        {/* Mission Section */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                To empower enterprises with cutting-edge AI solutions that drive growth,
                efficiency, and innovation. We believe in the transformative power of
                technology to solve complex business challenges and create sustainable
                competitive advantages.
              </p>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Zion Tech Group, we believe that technology should empower businesses to achieve their full potential. Our mission is to democratize access to cutting-edge AI and technology solutions, making them accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We combine deep technical expertise with business acumen to deliver solutions that not only meet your immediate needs but also position you for long-term success in an increasingly digital world.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transform Industries</h4>
                      <p className="text-gray-600">Revolutionize how businesses operate through AI and automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Empower Innovation</h4>
                      <p className="text-gray-600">Enable companies to innovate faster and more effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Drive Growth</h4>
                      <p className="text-gray-600">Help businesses scale and achieve sustainable growth</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our relationships with clients and partners
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
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We stay at the forefront of technology, constantly exploring new
                    ways to solve business challenges.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    We work closely with our clients as partners, ensuring solutions
                    that truly meet their needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We deliver exceptional results through meticulous attention to
                    detail and quality.
                  </p>
                </div>
              </div>
=======
        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced professionals passionate about delivering exceptional results
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.expertise}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {member.experience}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recognition and milestones that reflect our commitment to excellence
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">$2M+</div>
                  <div className="text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help transform your enterprise.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
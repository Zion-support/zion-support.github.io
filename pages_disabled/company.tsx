import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight;
} from 'lucide-react';
import Layout from '../components/Layout';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our interactions and deliver on our promises with transparency.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and work closely with our clients as partners in their success.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from the quality of our solutions to the level of our service.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re committed to making a positive impact on businesses and communities worldwide through technology.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We\'re passionate about technology and helping our clients achieve their goals through innovative solutions.'
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    year: '2021',
    title: 'First AI Product Launch',
    description: 'Launched our first AI-powered solution, revolutionizing how businesses handle customer interactions.'
  },
  {
    year: '2022',
    title: '100+ Clients',
    description: 'Reached our first major milestone of serving over 100 clients across various industries.'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded our services internationally, establishing partnerships across North America and Europe.'
  },
  {
    year: '2024',
    title: '500+ Projects',
    description: 'Successfully completed over 500 projects, delivering exceptional results for our clients.'
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to innovate and expand our offerings to meet the evolving needs of our clients.'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Expert Team Members' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '5+', label: 'Years of Experience' }
];

const leadership = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    image: '/team/john-smith.jpg',
    bio: 'Visionary leader with 15+ years in technology and AI. Passionate about democratizing AI for businesses of all sizes.'
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    image: '/team/sarah-johnson.jpg',
    bio: 'Technical expert with deep expertise in machine learning and cloud architecture. Leads our innovation initiatives.'
  },
  {
    name: 'Michael Chen',
    position: 'Head of AI',
    image: '/team/michael-chen.jpg',
    bio: 'AI researcher and practitioner with PhD in Computer Science. Specializes in natural language processing and computer vision.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Head of Operations',
    image: '/team/emily-rodriguez.jpg',
    bio: 'Operations expert ensuring smooth delivery of our services. Focused on client satisfaction and process optimization.'
  }
];
}

export default function CompanyPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Building the Future of Technology
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                At Zion Tech Group, we're passionate about transforming businesses through,
    innovative AI solutions and cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
    href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a
    href="/careers"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Join Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
    initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                      Mission
                    </h3>
                    <p className="text-gray-600 text-lg">
                      To democratize artificial intelligence and advanced technology solutions, 
                      making them accessible and beneficial for businesses of all sizes. We believe,
    that every company, regardless of its size or industry, should have access to,
    cutting-edge technology that can drive growth and innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-3">
                      Vision
                    </h3>
                    <p className="text-gray-600 text-lg">
                      To be the world's leading provider of AI-powered solutions, creating a future,
    where technology seamlessly integrates with human creativity to solve complex,
    challenges and unlock unprecedented opportunities for growth and success.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
    initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
              >
                <div className="text-center">
                  <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Impact
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Since our founding, we've helped hundreds of companies transform their operations,
    and achieve their goals through innovative technology solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 4).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These values guide everything we do and shape how we work with our clients, 
                partners, and each other.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
    key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders who are driving innovation and shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
    key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {leader.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a leading technology company, here's how we've grown and evolved.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The results speak for themselves. Here's what we've achieved together with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
    key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the hundreds of companies that trust Zion Tech Group for their technology needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
    href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
    href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );

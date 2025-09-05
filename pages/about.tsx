import React from 'react';
import Layout from '../components/Layout';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Target, Rocket, Heart, Users, Award, Globe } from 'lucide-react';
=======

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients\' success. We are committed to being true partners in their growth journey.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/team/sarah-chen.jpg',
    bio: 'Leading AI research and development with 15+ years of experience in machine learning and quantum computing.',
    expertise: ['AI/ML', 'Quantum Computing', 'Research']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cloud Architecture',
    image: '/team/michael-rodriguez.jpg',
    bio: 'Expert in scalable cloud solutions and infrastructure design with a focus on security and performance.',
    expertise: ['Cloud Architecture', 'DevOps', 'Security']
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    image: '/team/emily-johnson.jpg',
    bio: 'Full-stack developer specializing in modern web technologies and microservices architecture.',
    expertise: ['Full-Stack Development', 'Microservices', 'Web Technologies']
  },
  {
    name: 'David Kim',
    role: 'AI Solutions Architect',
    image: '/team/david-kim.jpg',
    bio: 'Designing intelligent systems that solve complex business problems using cutting-edge AI technologies.',
    expertise: ['AI Solutions', 'System Design', 'Business Intelligence']
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Team Members' },
  { number: '10+', label: 'Years Experience' }
];
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4

export default function AboutPage() {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Leadership',
      experience: '15+ years'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      expertise: 'Technology Innovation',
      experience: '12+ years'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      experience: '10+ years'
    },
    {
      name: 'Emily Davis',
      role: 'AI Specialist',
      expertise: 'Machine Learning',
      experience: '8+ years'
    }
  ];

  const achievements = [
    {
      title: '500+ Projects',
      description: 'Successfully delivered',
      icon: Award
    },
    {
      title: '50+ Clients',
      description: 'Satisfied customers',
      icon: Users
    },
    {
      title: '10+ Countries',
      description: 'Global presence',
      icon: Globe
    },
    {
      title: '99% Uptime',
      description: 'Reliable service',
      icon: Award
    }
  ];

  return (
<<<<<<< HEAD
    <Layout title="About Us - Zion Tech Group">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
=======
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a leading technology company specializing in AI-powered solutions, 
                cloud services, and digital transformation. Our mission is to empower 
                businesses with cutting-edge technology that drives growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe technology should empower businesses to achieve their full potential. Our mission is to deliver innovative solutions that drive real results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation in the digital age.
=======
                <p className="text-gray-600">
                  To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We are committed to delivering exceptional value through our expertise in AI, cloud architecture, and modern development practices.
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in AI-powered technology solutions, setting the 
                  standard for innovation and excellence.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, integrity, excellence, and client success are the core values 
                  that guide everything we do.
=======
                <p className="text-gray-600">
                  To be the world's leading technology partner, recognized for our innovation, integrity, and commitment to client success. We envision a future where technology seamlessly integrates with business operations to create unprecedented value.
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
                </p>
              </motion.div>
            </div>

<<<<<<< HEAD
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
=======
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals who make our success possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
=======
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Our Core Values
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
                <motion.div
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
<<<<<<< HEAD
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience}</p>
=======
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
=======
        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence and client success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognition and results that speak to our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, innovation, and client success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Expertise</h3>
                </div>
                <p className="text-gray-600">
                  Our team brings deep expertise in AI, cloud architecture, and modern development practices, ensuring you get the best solutions for your needs.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  We stay at the forefront of technology trends, constantly exploring new ways to solve problems and deliver value to our clients.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Client Focus</h3>
                </div>
                <p className="text-gray-600">
                  Your success is our success. We work closely with you to understand your goals and deliver solutions that exceed your expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
      </div>
    </Layout>
  );
}
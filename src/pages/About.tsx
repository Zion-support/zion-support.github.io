import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      image: "👩‍💼",
      description: "Leading our AI initiatives with 15+ years of experience in machine learning and data science."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      expertise: "Cloud Architecture",
      image: "👨‍💻",
      description: "Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments."
    },
    {
      name: "Emily Johnson",
      role: "Security Director",
      expertise: "Cybersecurity",
      image: "👩‍🔬",
      description: "Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements."
    },
    {
      name: "David Kim",
      role: "Product Manager",
      expertise: "Digital Transformation",
      image: "👨‍💼",
      description: "Driving product strategy and digital transformation initiatives for our enterprise clients."
    }
  ];

  const companyStats = [
    { number: "500+", label: "Projects Delivered", icon: "🚀" },
    { number: "99.9%", label: "Client Satisfaction", icon: "⭐" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "10+", label: "Years Experience", icon: "📅" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card
            title="Our Mission"
            description="To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in the digital age."
          />
          <Card
            title="Our Vision"
            description="To be the leading technology partner that transforms how businesses operate and compete in the global marketplace."
          />
          <Card
            title="Our Values"
            description="Excellence, innovation, integrity, and client success are the core principles that guide everything we do."
          />
        </div>

        {/* Company Stats */}
        <section className="py-16 bg-slate-800 rounded-2xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, innovation, and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="text-center h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-blue-400 font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-gray-400 mb-3">{member.expertise}</div>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Rapid development and deployment of solutions to meet your timeline.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and reliability in all our solutions.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals with deep expertise in cutting-edge technologies.</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Get in Touch
              </Button>
              <Button variant="outline" size="large">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
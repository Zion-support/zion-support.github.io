import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import {
  ArrowRight,
  Brain,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to revolutionize business through AI-powered solutions and cutting-edge technology."
      keywords="about us, company, mission, team, AI technology, innovation"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are pioneers in AI-powered technology solutions, dedicated to transforming businesses 
                through innovative approaches and cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  To democratize access to advanced AI and technology solutions, enabling businesses 
                  of all sizes to compete and thrive in the digital age.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "AI Innovation",
                    description: "Leading the charge in artificial intelligence and machine learning solutions."
                  },
                  {
                    icon: Users,
                    title: "Client Success",
                    description: "Dedicated to delivering exceptional value and results for our clients."
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "Committed to the highest standards of quality and innovation."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do and shape our culture.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Target, title: "Focus", description: "Clear objectives and strategic focus" },
                  { icon: Heart, title: "Passion", description: "Genuine enthusiasm for technology" },
                  { icon: Globe, title: "Global", description: "Worldwide impact and reach" },
                  { icon: Shield, title: "Trust", description: "Reliability and security first" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can help transform your business with AI and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
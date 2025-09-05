import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Users, Award, Target, Heart, Globe, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Rocket, Lightbulb, Handshake } from 'lucide-react';
import Layout from './components/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="About Us - Leading Technology Solutions Provider"
      description="Learn about Zion Tech Group's mission, vision, and values. Discover our 15+ years of experience in AI, IT services, and micro SaaS solutions."
      keywords="about us, company history, mission, vision, values, technology team, AI experts"
      ogTitle="About Zion Tech Group - Technology Solutions Provider"
      ogDescription="Discover our mission to transform businesses through cutting-edge technology solutions."
      ogUrl="https://ziontechgroup.com/about"
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering the Future of Technology
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over 15 years, we've been at the forefront of technological innovation, 
              helping businesses transform and thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered technology solutions, creating a world where 
                every business can leverage advanced technology to achieve extraordinary results.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, excellence, and client success drive everything we do. 
                We believe in building lasting partnerships based on trust and mutual growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 15 years of delivering exceptional technology solutions to businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1,200+', label: 'Projects Completed' },
              { number: '95+', label: 'Expert Team Members' },
              { number: '235+', label: 'Services & Solutions' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                From startup to industry leader
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded in 2009</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Zion Tech Group was founded with a simple yet ambitious vision: to democratize 
                    access to cutting-edge technology solutions. What started as a small team of 
                    passionate developers has grown into a global technology powerhouse.
                  </p>
                </div>
                <div className="bg-blue-100 w-32 h-32 rounded-full flex items-center justify-center">
                  <Building className="w-16 h-16 text-blue-600" />
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col md:flex-row-reverse items-center gap-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Revolution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2015, we recognized the transformative potential of artificial intelligence 
                    and pivoted to become early adopters. Today, we offer 80+ AI solutions that 
                    help businesses automate, optimize, and innovate.
                  </p>
                </div>
                <div className="bg-purple-100 w-32 h-32 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-purple-600" />
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Expansion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we serve clients across 6 continents with our comprehensive suite of 
                    technology solutions. Our team of 95+ experts continues to push the boundaries 
                    of what's possible in technology.
                  </p>
                </div>
                <div className="bg-green-100 w-32 h-32 rounded-full flex items-center justify-center">
                  <Globe className="w-16 h-16 text-green-600" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              95+ certified professionals dedicated to delivering exceptional technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                description: "15+ years in technology leadership, former VP at Microsoft"
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                description: "AI and machine learning expert, PhD in Computer Science"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Innovation",
                description: "Quantum computing specialist, former Google researcher"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/team" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Meet the Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group for their technology needs. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get in Touch
            </Link>
            <Link href="/careers" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions",
    icon: Target
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service",
    icon: Award
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners to achieve shared success",
    icon: Users
  },
  {
    title: "Global Impact",
    description: "We're committed to making a positive impact on businesses worldwide",
    icon: Globe
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "15+ years in technology leadership, former VP at Microsoft"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "AI/ML expert with PhD in Computer Science from Stanford"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Engineering",
    description: "Full-stack developer with expertise in scalable architectures"
  },
  {
    name: "David Kim",
    role: "Head of Design",
    description: "UX/UI specialist focused on creating intuitive user experiences"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Expert Team Members" },
  { number: "99.9%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
];

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Zion Tech Group was established with a vision to democratize advanced technology"
  },
  {
    year: "2019",
    title: "First AI Project",
    description: "Successfully delivered our first machine learning solution for a Fortune 500 client"
  },
  {
    year: "2020",
    title: "Cloud Migration Expertise",
    description: "Became certified partners with AWS, Azure, and Google Cloud Platform"
  },
  {
    year: "2021",
    title: "Micro SaaS Division",
    description: "Launched our specialized micro SaaS development services"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across North America, Europe, and Asia"
  },
  {
    year: "2023",
    title: "AI Innovation Lab",
    description: "Opened our dedicated AI research and development facility"
  }
];

export default function AboutPage() {
  return (
    <MainLayout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge technology solutions."
      keywords="about us, company history, team, mission, values, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the future of technology with innovative solutions and exceptional service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                innovation, and success. We believe that every organization, regardless of size, 
                should have access to world-class technology expertise and solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment is to deliver not just technology, but transformative experiences 
                that help our clients achieve their most ambitious goals and stay ahead in an 
                ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-4 mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Experienced professionals passionate about delivering exceptional technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company's growth and evolution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {event.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Let's discuss how our team can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get In Touch
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </MainLayout>
  );
}
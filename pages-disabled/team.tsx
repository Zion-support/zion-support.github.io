import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Code,
  Shield
} from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    bio: "Visionary leader with 15+ years in technology and business development.",
    image: "/images/team/kleber-santos.jpg",
    email: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: ["Strategic Leadership", "Business Development", "Technology Innovation", "Team Building"]
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Chief Technology Officer",
    expertise: ["AI & Machine Learning", "Data Science", "Neural Networks", "Deep Learning"],
    icon: Code,
    bio: "Leading our AI initiatives with 12+ years of experience in machine learning and data science."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Engineering",
    expertise: ["Cloud Architecture", "Distributed Systems", "DevOps", "Microservices"],
    icon: Shield,
    bio: "Expert in scalable cloud solutions and distributed systems architecture."
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with technology.",
    icon: Code
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
    icon: Shield
  },
  {
    title: "Collaboration",
    description: "We believe great things happen when people work together.",
    icon: ArrowRight
  }
];

export default function TeamPage() {
  return (
    <MainLayout
      title="Our Team - Zion Tech Group"
      description="Meet the talented individuals behind Zion Tech Group. Our diverse team of experts is dedicated to delivering exceptional technology solutions."
      keywords="team, leadership, experts, developers, designers, AI specialists, cloud engineers"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-blue-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The talented individuals behind Zion Tech Group's success. We're a diverse team of experts passionate about technology and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
                <p className="text-xl text-gray-600">
                  Experienced leaders driving innovation and growth
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg text-center"
                  >
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.position || member.role}
                    </p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    
                    {member.expertise && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center space-x-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
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
                <p className="text-xl text-gray-600">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
                <p className="text-xl text-blue-100 mb-8">
                  We're always looking for talented individuals to join our growing team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/talent"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
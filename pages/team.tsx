import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  Globe,
  Code,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in enterprise technology. Passionate about AI innovation and digital transformation.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: ["Strategic Leadership", "AI/ML", "Cloud Architecture", "Business Development"]
  },
    expertise: [
      "Strategic Leadership",
      "AI/ML",
      "Cloud Architecture",
      "Business Development"
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    department: "Technology",
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  },
  {
    id: 3,
    name: "Mike Chen",
    position: "Head of Cybersecurity",
    department: "Security",
    bio: "Cybersecurity expert with deep knowledge in threat intelligence, zero-trust architecture, and compliance frameworks.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/mikechen",
    twitter: "https://twitter.com/mikechen",
    github: "https://github.com/mikechen",
    expertise: [
      "Cybersecurity",
      "Zero-Trust",
      "Threat Intelligence",
      "Compliance"
    ]
  }
];

export default function Team() {
  return (
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet the talented individuals behind Zion Tech Group's innovative solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Meet the talented individuals behind our innovative solutions
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {member.department}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">
                        {member.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href={member.github}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals to join our mission
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
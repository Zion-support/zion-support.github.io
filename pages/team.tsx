import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Users, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    icon: Brain,
    description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      github: 'https://github.com/sarahjohnson'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Cloud Solutions Architect',
    expertise: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Expert in designing and implementing scalable cloud solutions for enterprise clients.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      github: 'https://github.com/michaelrodriguez'
    }
  },
  {
    name: 'Emily Chen',
    role: 'Security Lead',
    expertise: 'Cybersecurity',
    icon: Shield,
    description: 'Ensuring our solutions meet the highest security standards and compliance requirements.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/emilychen',
      twitter: 'https://twitter.com/emilychen',
      github: 'https://github.com/emilychen'
    }
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    expertise: 'Software Development',
    icon: Users,
    description: 'Leading our engineering team in building robust, scalable software solutions.',
    image: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      github: 'https://github.com/davidkim'
    }
  }
];

export default function TeamPage() {
  return (
    <Layout title="Our Team - Zion Tech Group">
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented individuals behind Zion Tech Group's innovative solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Our Team
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Meet the talented individuals behind our innovative solutions
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <member.icon className="h-16 w-16 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                    <p className="text-gray-600 mb-6 text-sm">{member.description}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-gray-600 hover:text-gray-800">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                <p className="text-xl text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">We constantly push the boundaries of what's possible with technology.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
                  <p className="text-gray-600">We build secure, reliable solutions that our clients can depend on.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                  <p className="text-gray-600">We work together to achieve extraordinary results for our clients.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals to join our growing team.
            </p>
            <a href="/talent" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Openings
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  Code,
  Cpu,
  Database,
  Network,
  Rocket
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    icon: Brain,
    bio: 'Leading our AI research and development with 15+ years of experience in machine learning and data science.',
    achievements: ['PhD in Computer Science', '50+ Research Papers', 'AI Innovation Award 2023']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Executive Officer',
    expertise: 'Business Strategy',
    icon: Target,
    bio: 'Visionary leader driving our company\'s growth and strategic direction in the technology sector.',
    achievements: ['MBA from Stanford', '20+ Years Experience', 'Forbes 30 Under 30']
  },
  {
    name: 'Emily Chen',
    role: 'Head of Engineering',
    expertise: 'Software Development',
    icon: Code,
    bio: 'Expert in full-stack development and system architecture, leading our engineering teams.',
    achievements: ['15+ Years Experience', 'Open Source Contributor', 'Tech Leadership Award']
  },
  {
    name: 'David Kim',
    role: 'Head of Design',
    expertise: 'UX/UI Design',
    icon: Heart,
    bio: 'Creative director focused on user experience and interface design for our products.',
    achievements: ['Design Thinking Expert', 'Award-Winning Designer', '10+ Years Experience']
  },
  {
    name: 'Alex Thompson',
    role: 'Head of Security',
    expertise: 'Cybersecurity',
    icon: Shield,
    bio: 'Cybersecurity expert ensuring our systems and client data remain secure and compliant.',
    achievements: ['CISSP Certified', 'Security Expert', '15+ Years Experience']
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Operations',
    expertise: 'Business Operations',
    icon: Users,
    bio: 'Operations leader managing our business processes and ensuring smooth operations.',
    achievements: ['Operations Expert', 'Process Optimization', '12+ Years Experience']
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and mutual support'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of ethics and transparency'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do'
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Countries Represented' },
  { number: '98%', label: 'Employee Satisfaction' }
];

export default function Team() {
  return (
    <Layout 
      title="Our Team - Zion Tech Group"
      description="Meet the talented team behind Zion Tech Group. Our diverse team of experts is dedicated to delivering innovative technology solutions."
      keywords="team, about us, leadership, employees, Zion Tech Group team, technology experts"
    >
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our diverse team of experts is dedicated to delivering innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Talented individuals working together to build the future of technology. 
                Our diverse team brings together expertise from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600">
                Meet the leaders driving our vision forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <member.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Open Positions
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
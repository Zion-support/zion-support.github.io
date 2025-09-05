import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Brain, Cloud, Shield, Users } from 'lucide-react';


const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    image: '/api/placeholder/300/300',
    bio: 'Leading expert in artificial intelligence with a PhD from MIT. Sarah has published over 50 research papers and led AI initiatives at Fortune 500 companies.',
    icon: Brain
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    expertise: 'Cloud Architecture',
    experience: '12+ years',
    image: '/api/placeholder/300/300',
    bio: 'Cloud infrastructure specialist with extensive experience in AWS, Azure, and Google Cloud. Michael has architected solutions for companies of all sizes.',
    icon: Cloud
  },
  {
    name: 'Emily Johnson',
    role: 'Security Director',
    expertise: 'Cybersecurity',
    experience: '10+ years',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity expert with certifications in CISSP and CISM. Emily has helped organizations protect against advanced persistent threats.',
    icon: Shield
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    expertise: 'SaaS Development',
    experience: '8+ years',
    image: '/api/placeholder/300/300',
    bio: 'Product management leader with a track record of launching successful SaaS products. David combines technical expertise with business acumen.',
    icon: Users
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Average Experience' },
  { number: '25+', label: 'Countries Represented' },
  { number: '100+', label: 'Certifications' }
];

export default function TeamPage() {
  return (
    <Layout 
      title="Our Team - Zion Tech Group"
      description="Meet the expert team behind Zion Tech Group's innovative technology solutions."
    >
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6"
              >
                Meet Our Expert Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                We're a diverse group of passionate technologists, innovators, and problem-solvers 
                dedicated to transforming businesses through cutting-edge technology.
              </motion.p>
            </div>
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
                <p className="text-xl text-gray-600">
                  Our leadership team brings together decades of experience in technology and business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <member.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-center mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm text-center mb-3">
                        {member.expertise} • {member.experience}
                      </p>
                      <p className="text-gray-600 text-sm text-center">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
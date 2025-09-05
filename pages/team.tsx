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
    bio: 'Experienced cloud architect with expertise in AWS, Azure, and Google Cloud. Michael has led the migration of over 100 enterprise applications to the cloud.',
    icon: Cloud
  },
  {
    name: 'Jennifer Kim',
    role: 'Chief Security Officer',
    expertise: 'Cybersecurity',
    experience: '10+ years',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity expert with extensive experience in enterprise security, compliance, and risk management. Jennifer holds multiple security certifications.',
    icon: Shield
  },
  {
    name: 'David Thompson',
    role: 'Head of Product',
    expertise: 'Product Management',
    experience: '8+ years',
    image: '/api/placeholder/300/300',
    bio: 'Product management leader with a track record of launching successful SaaS products. David has experience in both B2B and B2C markets.',
    icon: Users
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet our talented team of technology experts and innovators" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our talented team of technology experts and innovators who are shaping the future of business technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <member.icon className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
              <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
              
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
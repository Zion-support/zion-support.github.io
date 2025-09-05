import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Building, 
  Rocket, 
  Lightbulb, 
  Handshake,
  Code,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    description: 'Leading our AI initiatives with a PhD in Computer Science and extensive experience in machine learning research.',
    icon: Brain,
    achievements: ['Published 50+ research papers', 'Led 100+ AI projects', 'MIT Alumni']
  },
  {
    name: 'Michael Chen',
    role: 'Head of Engineering',
    expertise: 'Full-Stack Development',
    experience: '12+ years',
    description: 'Expert in building scalable applications and leading development teams to deliver exceptional products.',
    icon: Code,
    achievements: ['Built 200+ applications', 'Led 50+ developers', 'Google Alumni']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of AI Solutions',
    expertise: 'Machine Learning',
    experience: '10+ years',
    description: 'Specializes in implementing AI solutions for enterprise clients and driving innovation in our AI offerings.',
    icon: Zap,
    achievements: ['Implemented 150+ AI solutions', 'AI Strategy Expert', 'Stanford Alumni']
  },
  {
    name: 'David Kim',
    role: 'Head of Security',
    expertise: 'Cybersecurity',
    experience: '14+ years',
    description: 'Ensures our clients\' data and systems are protected with cutting-edge security solutions and best practices.',
    icon: Shield,
    achievements: ['Certified Ethical Hacker', 'Security Expert', 'Former NSA']
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Client Success',
    expertise: 'Customer Experience',
    experience: '11+ years',
    description: 'Dedicated to ensuring our clients achieve their goals and maintain high satisfaction with our services.',
    icon: Heart,
    achievements: ['99% Client Satisfaction', 'Led 500+ projects', 'Customer Success Expert']
  },
  {
    name: 'Alex Morgan',
    role: 'Head of Cloud Solutions',
    expertise: 'Cloud Architecture',
    experience: '13+ years',
    description: 'Expert in cloud migration, architecture design, and helping businesses scale their infrastructure efficiently.',
    icon: Building,
    achievements: ['AWS Certified', 'Cloud Migration Expert', 'Scaled 100+ businesses']
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.'
  }
];

export default function TeamPage() {
  return (
    <MainLayout
      title="Our Team - Zion Tech Group"
      description="Meet our diverse team of experts who bring together decades of experience in technology, innovation, and business transformation."
      keywords="team, experts, technology, AI, engineering, cybersecurity, cloud solutions, leadership"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Our diverse team of experts brings together decades of experience in technology, innovation, and business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines deep technical expertise with business acumen to drive innovation and deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <div className="text-sm text-gray-500 mb-4">{member.expertise} • {member.experience}</div>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our team's decisions and shape our culture of excellence and innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Code, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Kleber Santos',
    position: 'CEO & Founder',
    department: 'Leadership',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 15+ years in technology and business transformation. Passionate about AI and digital innovation.',
    expertise: ['Strategic Planning', 'AI Strategy', 'Business Development'],
    linkedin: 'https://linkedin.com/in/kleber-santos',
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950'
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    department: 'Technology',
    image: '/api/placeholder/300/300',
    bio: 'Technology architect with expertise in cloud infrastructure, AI/ML, and scalable system design.',
    expertise: ['Cloud Architecture', 'Machine Learning', 'System Design'],
    linkedin: 'https://linkedin.com/in/sarah-johnson',
    email: 'sarah@ziontechgroup.com',
    phone: '+1 302 464 0951'
  },
  {
    name: 'Michael Chen',
    position: 'Head of AI Research',
    department: 'AI & Machine Learning',
    image: '/api/placeholder/300/300',
    bio: 'AI researcher and practitioner with PhD in Computer Science. Leading our AI innovation initiatives.',
    expertise: ['Deep Learning', 'NLP', 'Computer Vision'],
    linkedin: 'https://linkedin.com/in/michael-chen',
    email: 'michael@ziontechgroup.com',
    phone: '+1 302 464 0952'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Head of Cybersecurity',
    department: 'Security',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity expert with certifications in ethical hacking and security architecture.',
    expertise: ['Penetration Testing', 'Security Architecture', 'Compliance'],
    linkedin: 'https://linkedin.com/in/emily-rodriguez',
    email: 'emily@ziontechgroup.com',
    phone: '+1 302 464 0953'
  },
  {
    name: 'David Kim',
    position: 'Lead Cloud Engineer',
    department: 'Cloud & DevOps',
    image: '/api/placeholder/300/300',
    bio: 'Cloud infrastructure specialist with expertise in AWS, Azure, and Kubernetes.',
    expertise: ['AWS', 'Azure', 'Kubernetes', 'DevOps'],
    linkedin: 'https://linkedin.com/in/david-kim',
    email: 'david@ziontechgroup.com',
    phone: '+1 302 464 0954'
  },
  {
    name: 'Lisa Thompson',
    position: 'Head of Product',
    department: 'Product Management',
    image: '/api/placeholder/300/300',
    bio: 'Product strategist with experience in SaaS platforms and user experience design.',
    expertise: ['Product Strategy', 'UX Design', 'SaaS Development'],
    linkedin: 'https://linkedin.com/in/lisa-thompson',
    email: 'lisa@ziontechgroup.com',
    phone: '+1 302 464 0955'
  }
];

const departments = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    count: 12,
    description: 'Our AI team develops cutting-edge machine learning solutions and AI-powered applications.'
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    count: 8,
    description: 'Cloud infrastructure experts ensuring scalable and reliable technology solutions.'
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    count: 6,
    description: 'Security specialists protecting your data and systems with enterprise-grade solutions.'
  },
  {
    name: 'Product Development',
    icon: Code,
    count: 15,
    description: 'Full-stack developers and product managers creating innovative software solutions.'
  },
  {
    name: 'Data Science',
    icon: Zap,
    count: 10,
    description: 'Data scientists and analysts turning data into actionable business insights.'
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Countries Served' },
  { number: '500+', label: 'Projects Completed' }
];

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group | Meet Our Technology Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cloud computing, cybersecurity, and software development are here to help your business succeed." />
        <meta name="keywords" content="zion tech team, technology experts, AI specialists, cloud engineers, cybersecurity team" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet our team of technology experts and innovators." />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our Team
                <span className="block text-blue-400">Technology Experts & Innovators</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Our diverse team of 50+ experts brings together decades of experience in AI, cloud computing, cybersecurity, and software development to deliver exceptional results for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
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

        {/* Departments Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Departments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organized expertise across key technology domains to deliver comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <dept.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{dept.count} Members</p>
                  <p className="text-gray-600">{dept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the leaders driving innovation and excellence at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-center mb-2">{member.position}</p>
                    <p className="text-gray-500 text-center mb-4">{member.department}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our team and shape our culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Innovation',
                  description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and work closely with clients and colleagues.'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for the highest quality in everything we do, from code to customer service.'
                },
                {
                  icon: Globe,
                  title: 'Diversity',
                  description: 'We embrace diverse perspectives and backgrounds to drive innovation and creativity.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
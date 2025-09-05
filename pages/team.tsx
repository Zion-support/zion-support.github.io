import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Brain, 
  Code, 
  Shield, 
  Cloud, 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Kleber Santos',
    role: 'CEO & Founder',
    department: 'Leadership',
    image: '/images/team/kleber-santos.jpg',
    bio: 'Visionary leader with 15+ years in AI and technology. PhD in Computer Science from MIT, former Google AI researcher.',
    expertise: ['AI Strategy', 'Machine Learning', 'Leadership', 'Innovation'],
    social: {
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      email: 'kleber@ziontechgroup.com'
    },
    achievements: ['Forbes 30 Under 30', 'MIT Technology Review Innovator', 'AI Research Pioneer']
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    department: 'Technology',
    image: '/images/team/sarah-chen.jpg',
    bio: 'Technology visionary with expertise in cloud architecture and scalable systems. Former AWS Principal Engineer.',
    expertise: ['Cloud Architecture', 'DevOps', 'System Design', 'Scalability'],
    social: {
      linkedin: 'https://linkedin.com/in/sarah-chen',
      github: 'https://github.com/sarah-chen',
      email: 'sarah@ziontechgroup.com'
    },
    achievements: ['AWS Certified Solutions Architect', 'Open Source Contributor', 'Tech Conference Speaker']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of AI Research',
    department: 'AI & Machine Learning',
    image: '/images/team/michael-rodriguez.jpg',
    bio: 'AI researcher and practitioner with focus on computer vision and natural language processing. PhD from Stanford.',
    expertise: ['Computer Vision', 'NLP', 'Deep Learning', 'Research'],
    social: {
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      github: 'https://github.com/michael-rodriguez',
      email: 'michael@ziontechgroup.com'
    },
    achievements: ['NeurIPS Paper Author', 'Google Research Fellow', 'AI Ethics Advocate']
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Product',
    department: 'Product Management',
    image: '/images/team/emily-johnson.jpg',
    bio: 'Product strategist with experience building successful SaaS platforms. Former Product Manager at Salesforce.',
    expertise: ['Product Strategy', 'SaaS Development', 'User Experience', 'Growth'],
    social: {
      linkedin: 'https://linkedin.com/in/emily-johnson',
      twitter: 'https://twitter.com/emily_johnson',
      email: 'emily@ziontechgroup.com'
    },
    achievements: ['Product Hunt #1 Launch', 'SaaS Growth Expert', 'UX Design Award Winner']
  },
  {
    name: 'David Kim',
    role: 'Head of Security',
    department: 'Cybersecurity',
    image: '/images/team/david-kim.jpg',
    bio: 'Cybersecurity expert with 12+ years protecting enterprise systems. Former NSA security analyst.',
    expertise: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Risk Management'],
    social: {
      linkedin: 'https://linkedin.com/in/david-kim',
      email: 'david@ziontechgroup.com'
    },
    achievements: ['CISSP Certified', 'Security Researcher', 'Zero-Day Discovery']
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Data Science',
    department: 'Data & Analytics',
    image: '/images/team/lisa-wang.jpg',
    bio: 'Data science leader specializing in predictive analytics and business intelligence. PhD in Statistics from Harvard.',
    expertise: ['Predictive Analytics', 'Business Intelligence', 'Statistics', 'Data Engineering'],
    social: {
      linkedin: 'https://linkedin.com/in/lisa-wang',
      github: 'https://github.com/lisa-wang',
      email: 'lisa@ziontechgroup.com'
    },
    achievements: ['Kaggle Grandmaster', 'Harvard Research Fellow', 'Data Science Mentor']
  }
];

const departments = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    count: 25,
    description: 'Cutting-edge AI research and development'
  },
  {
    name: 'Software Engineering',
    icon: Code,
    count: 30,
    description: 'Full-stack development and architecture'
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    count: 15,
    description: 'Enterprise security and compliance'
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    count: 20,
    description: 'Infrastructure and deployment automation'
  },
  {
    name: 'Product & Design',
    icon: Users,
    count: 18,
    description: 'User experience and product strategy'
  },
  {
    name: 'Data Science',
    icon: Award,
    count: 12,
    description: 'Analytics and business intelligence'
  }
];

const values = [
  {
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what\'s possible with technology',
    icon: Brain
  },
  {
    title: 'Collaborative Culture',
    description: 'We believe the best solutions come from diverse teams working together',
    icon: Users
  },
  {
    title: 'Excellence in Execution',
    description: 'We deliver high-quality solutions that exceed expectations',
    icon: Award
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth and development',
    icon: Star
  }
];

export default function TeamPage() {
  return (
    <Layout 
      title="Our Team - Zion Tech Group | Meet the Experts"
      description="Meet our world-class team of AI researchers, engineers, and technology experts. 95+ professionals dedicated to delivering cutting-edge solutions."
      keywords="team, AI experts, engineers, developers, technology professionals, leadership"
    >
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
                <span className="block text-blue-400">95+ World-Class Experts</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Our diverse team of AI researchers, engineers, and technology experts is dedicated to 
                delivering cutting-edge solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Join Our Team
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Work With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and excellence at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                      <p className="text-gray-500 text-sm">{member.department}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-center">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Achievements:</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Departments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organized teams of experts working together to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((department, index) => (
                <motion.div
                  key={department.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <department.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{department.name}</h3>
                  <p className="text-gray-600 mb-4">{department.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{department.count}+</span>
                    <span className="text-gray-500">Experts</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our team and shape our culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
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
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Ready to work with the best? We're always looking for talented individuals to join our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
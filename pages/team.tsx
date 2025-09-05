import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Globe, 
  Linkedin, 
  Mail,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Kleber Santos',
    role: 'CEO & Founder',
    department: 'Leadership',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 15+ years in technology and business strategy. Passionate about AI and digital transformation.',
    skills: ['Strategic Planning', 'AI Strategy', 'Business Development'],
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    department: 'Technology',
    image: '/api/placeholder/300/300',
    bio: 'AI researcher and technology architect with expertise in machine learning and cloud infrastructure.',
    skills: ['Machine Learning', 'Cloud Architecture', 'AI Research'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Security',
    department: 'Cybersecurity',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity expert with extensive experience in threat detection and security architecture.',
    skills: ['Cybersecurity', 'Threat Analysis', 'Security Architecture'],
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    department: 'Engineering',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack developer specializing in micro SaaS applications and modern web technologies.',
    skills: ['Full-Stack Development', 'Micro SaaS', 'Web Technologies'],
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'David Kim',
    role: 'Cloud Solutions Architect',
    department: 'Infrastructure',
    image: '/api/placeholder/300/300',
    bio: 'Cloud infrastructure specialist with expertise in AWS, Azure, and Google Cloud Platform.',
    skills: ['Cloud Infrastructure', 'DevOps', 'System Architecture'],
    icon: Cloud,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Lisa Wang',
    role: 'AI Research Scientist',
    department: 'Research',
    image: '/api/placeholder/300/300',
    bio: 'AI researcher focused on natural language processing and computer vision applications.',
    skills: ['NLP', 'Computer Vision', 'AI Research'],
    icon: Brain,
    color: 'from-pink-500 to-rose-500'
  }
];

const departments = [
  { name: 'Leadership', count: 3, icon: Users },
  { name: 'Engineering', count: 12, icon: Code },
  { name: 'AI Research', count: 8, icon: Brain },
  { name: 'Cybersecurity', count: 6, icon: Shield },
  { name: 'Cloud Infrastructure', count: 10, icon: Cloud },
  { name: 'Business Development', count: 5, icon: Globe }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Countries Represented' },
  { number: '95%', label: 'Employee Satisfaction' }
];

export default function TeamPage() {
  return (
    <MainLayout>
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
              <div className="flex items-center justify-center mb-6">
                <Users className="h-16 w-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Meet Our{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Team
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                A diverse group of passionate professionals dedicated to pushing the boundaries of technology and delivering exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

        {/* Departments */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Departments
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Organized expertise across key technology domains to deliver comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <motion.div
                    key={dept.name}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-sm text-gray-600">{dept.count} members</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Members */}
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
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the leaders driving innovation and excellence at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <motion.div
                    key={member.name}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mr-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                          <p className="text-blue-600 font-semibold">{member.role}</p>
                          <p className="text-sm text-gray-600">{member.department}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
                        <a
                          href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@ziontechgroup.com`}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={`https://linkedin.com/in/${member.name.toLowerCase().replace(' ', '-')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
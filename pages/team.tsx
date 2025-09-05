import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
=======
<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../components/Layout';
<<<<<<< HEAD
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Users } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

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
<<<<<<< HEAD
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
=======

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: ["Strategic Leadership", "AI/ML", "Cloud Architecture", "Business Development"]
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
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/mikechen",
    twitter: "https://twitter.com/mikechen",
    github: "https://github.com/mikechen",
    expertise: ["Cybersecurity", "Zero-Trust", "Threat Intelligence", "Compliance"]
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Head of AI/ML",
    department: "AI & Machine Learning",
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
    github: "https://github.com/emilyrodriguez",
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    id: 5,
    name: "David Kim",
    position: "Head of Data Analytics",
    department: "Data & Analytics",
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/davidkim",
    twitter: "https://twitter.com/davidkim",
    github: "https://github.com/davidkim",
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  },
  {
    id: 6,
    name: "Lisa Wang",
    position: "Head of Product Development",
    department: "Product",
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
    github: "https://github.com/lisawang",
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
  }
];

const departments = [
  {
    name: "Leadership",
    description: "Strategic vision and company direction",
    icon: "👑",
    count: 1
  },
  {
    name: "Technology",
    description: "Engineering and technical innovation",
    icon: "💻",
    count: 15
  },
  {
    name: "AI & Machine Learning",
    description: "Artificial intelligence and data science",
    icon: "🤖",
    count: 12
  },
  {
    name: "Cybersecurity",
    description: "Security and compliance solutions",
    icon: "🛡️",
    count: 8
  },
  {
    name: "Data & Analytics",
    description: "Business intelligence and analytics",
    icon: "📊",
    count: 10
  },
  {
    name: "Product",
    description: "Product development and design",
    icon: "🎨",
    count: 6
  },
  {
    name: "Sales & Marketing",
    description: "Business development and growth",
    icon: "📈",
    count: 8
  },
  {
    name: "Operations",
    description: "Project management and delivery",
    icon: "⚙️",
    count: 5
  }
];

const stats = [
  { number: "65+", label: "Team Members" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Countries Represented" },
  { number: "95%", label: "Employee Satisfaction" }
];

export default function TeamPage() {
  return (
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results."
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals"
      canonical="https://ziontechgroup.com/team"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet Our 
              <span className="text-purple-400"> Expert Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our diverse team of technology professionals brings together decades of experience 
              in AI, cloud computing, cybersecurity, and business transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Visionary leaders driving innovation and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-semibold">{member.position}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-5 h-5" />
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                  </a>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
=======
    name: 'David Thompson',
    role: 'Team Lead',
    expertise: 'Project Management',
    icon: Users,
    description: 'Leading our development teams with agile methodologies and client-focused delivery.'
  }
];

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet our expert team of technology professionals dedicated to delivering exceptional solutions." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Passionate professionals dedicated to delivering cutting-edge technology solutions
              </p>
            </motion.div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Values Section */}
=======
      {/* All Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals across all departments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm">{member.position}</p>
                  <p className="text-gray-500 text-xs">{member.department}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.expertise.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Specialized teams working together to deliver excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div 
                key={dept.name}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                <div className="text-purple-600 font-semibold">{dept.count} members</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/careers" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Open Positions
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
<<<<<<< HEAD

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
=======
        {/* Team Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.expertise}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}
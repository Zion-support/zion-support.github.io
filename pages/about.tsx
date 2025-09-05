import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import Layout from '../components/Layout';
import { 
  TrendingUp,
  Building,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Star, 
  DollarSign, 
  Clock, 
  BarChart3,
  Brain,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Cloud,
  Server
} from 'lucide-react';

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    expertise: "Machine Learning & AI Strategy",
    image: "/team/sarah-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Software Architect",
    expertise: "Cloud Computing & DevOps",
    image: "/team/michael-rodriguez.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    expertise: "User Experience & Product Strategy",
    image: "/team/emily-johnson.jpg"
  },
  {
    name: "David Kim",
    role: "Senior Data Scientist",
    expertise: "Data Analytics & Predictive Modeling",
    image: "/team/david-kim.jpg"
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their unique challenges and deliver tailored solutions.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'We prioritize security and compliance in everything we do, ensuring your data and systems are protected.'
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'We focus on delivering solutions that improve efficiency and reduce operational costs for our clients.'
  }
];

<<<<<<< HEAD
const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    year: '2021',
    title: 'First AI Project',
    description: 'Successfully delivered our first machine learning solution for a healthcare client.'
  },
  {
    year: '2022',
    title: 'Cloud Migration Services',
    description: 'Launched comprehensive cloud migration and DevOps services.'
  },
  {
    year: '2023',
    title: 'Micro SaaS Platform',
    description: 'Introduced our Micro SaaS solutions for small and medium businesses.'
  },
  {
    year: '2024',
    title: 'AI Automation Suite',
    description: 'Launched advanced AI automation tools and platforms.'
  }
];

export default function About() {
=======
const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Executive Officer',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 20+ years in technology innovation and business strategy.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: '/api/placeholder/300/300',
    bio: 'AI and quantum computing expert leading our technical innovation initiatives.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of AI Research',
    image: '/api/placeholder/300/300',
    bio: 'Leading researcher in machine learning and artificial intelligence applications.'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack development expert specializing in scalable cloud architectures.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Security',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity specialist ensuring enterprise-grade security across all solutions.'
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    image: '/api/placeholder/300/300',
    bio: 'Operations expert managing global delivery and client success initiatives.'
  }
];

const achievements = [
  {
    icon: Award,
    number: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Happy Clients',
    description: 'Satisfied clients worldwide trust our solutions'
  },
  {
    icon: Globe,
    number: '50+',
    label: 'Countries Served',
    description: 'Global presence with local expertise'
  },
  {
    icon: Star,
    number: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable and consistent service delivery'
  }
];

export default function AboutPage() {
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI, IT, and Micro SaaS solutions."
      keywords="about us, team, company, AI company, technology solutions, mission, values"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI, IT services, and Micro SaaS solutions. 
                Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize access to advanced technology solutions by providing affordable, 
                  scalable, and innovative AI, IT, and Micro SaaS services that empower businesses 
                  of all sizes to compete and thrive in the digital economy.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every business, regardless of size, should have access to 
                  cutting-edge technology that can transform their operations and drive growth.
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Leading the way in artificial intelligence solutions</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Cloud className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Excellence</h3>
                  <p className="text-gray-300 text-sm">Expert cloud computing and migration services</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Micro SaaS</h3>
                  <p className="text-gray-300 text-sm">Custom software solutions for every need</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <value.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind our success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.expertise}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our company's growth
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative mb-8 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className={`bg-gray-800 rounded-lg p-6 max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="text-blue-400 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
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
  Code,
  Database,
  Cloud
} from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology, exploring new frontiers in AI, machine learning, and cutting-edge development practices.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaboration, working closely with our clients to understand their unique challenges and goals.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive real business value.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and its potential to transform businesses and improve lives.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We work with clients worldwide, helping them leverage technology to achieve their global ambitions.'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/team/sarah.jpg',
    bio: '15+ years in tech leadership, former VP at Microsoft',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/images/team/michael.jpg',
    bio: 'AI/ML expert, PhD in Computer Science from Stanford',
    linkedin: 'https://linkedin.com/in/michaelchen'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/images/team/emily.jpg',
    bio: 'Award-winning UX designer, former Apple design lead',
    linkedin: 'https://linkedin.com/in/emilyrodriguez'
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: '/images/team/david.jpg',
    bio: 'Full-stack expert, open source contributor',
    linkedin: 'https://linkedin.com/in/davidkim'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, machine learning models, and intelligent automation systems.'
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure, migration services, and cloud-native applications.'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Web applications, mobile apps, and enterprise software solutions.'
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Data analytics, business intelligence, and data-driven decision making tools.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission, values, and the team behind our innovative technology solutions." />
        <meta name="keywords" content="about us, team, company, technology, AI, cloud, development" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get in Touch
                </Link>
                <Link href="/case-studies" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                innovation, and success in the digital age. We believe technology should be 
                accessible, powerful, and transformative.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions across multiple domains, 
                helping businesses leverage the latest innovations to achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience 
                in technology, design, and business strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View LinkedIn
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Started
                </Link>
                <Link href="/case-studies" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
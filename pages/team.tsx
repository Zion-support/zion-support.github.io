import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Code,
  Shield,
  Brain,
  Cloud,
  Zap,
  Target,
  Heart,
  Building,
  Lightbulb
} from 'lucide-react';

const leadership = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/images/team/sarah-johnson.jpg",
    bio: "15+ years in technology leadership, specializing in digital transformation and AI strategy. Former VP at Google and Microsoft.",
    expertise: ["Strategic Planning", "AI Strategy", "Leadership", "Digital Transformation"],
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    email: "sarah@ziontechgroup.com",
    achievements: ["Forbes 30 Under 30", "TechCrunch Disrupt Speaker", "AI Innovation Award 2023"]
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/images/team/michael-chen.jpg",
    bio: "Expert in cloud architecture, quantum computing, and advanced AI systems. PhD in Computer Science from MIT.",
    expertise: ["Cloud Architecture", "Quantum Computing", "AI Systems", "Machine Learning"],
    linkedin: "https://linkedin.com/in/michaelchen",
    twitter: "https://twitter.com/michaelchen",
    email: "michael@ziontechgroup.com",
    achievements: ["IEEE Fellow", "ACM Distinguished Scientist", "Cloud Innovation Award 2023"]
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of AI Research",
    image: "/images/team/emily-rodriguez.jpg",
    bio: "PhD in Machine Learning from Stanford, leading our AI research and development initiatives. Published 50+ research papers.",
    expertise: ["Machine Learning", "Research", "Data Science", "Neural Networks"],
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
    email: "emily@ziontechgroup.com",
    achievements: ["NeurIPS Best Paper Award", "Google Research Scholar", "AI Ethics Pioneer"]
  },
  {
    name: "David Kim",
    role: "Head of Cybersecurity",
    image: "/images/team/david-kim.jpg",
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems and data. Former NSA security analyst.",
    expertise: ["Cybersecurity", "Risk Management", "Compliance", "Incident Response"],
    linkedin: "https://linkedin.com/in/davidkim",
    twitter: "https://twitter.com/davidkim",
    email: "david@ziontechgroup.com",
    achievements: ["CISSP Certified", "Security+ Expert", "Zero Trust Architecture Pioneer"]
  }
];

const departments = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    members: 25,
    description: "Our AI team develops cutting-edge machine learning models and AI solutions",
    lead: "Dr. Emily Rodriguez"
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    members: 20,
    description: "Expert cloud architects and DevOps engineers building scalable solutions",
    lead: "Michael Chen"
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    members: 15,
    description: "Security experts protecting businesses from evolving cyber threats",
    lead: "David Kim"
  },
  {
    name: "Software Development",
    icon: Code,
    members: 30,
    description: "Full-stack developers creating innovative software solutions",
    lead: "Alex Thompson"
  },
  {
    name: "Data Science",
    icon: Target,
    members: 18,
    description: "Data scientists turning raw data into actionable business insights",
    lead: "Dr. Maria Santos"
  },
  {
    name: "Product Management",
    icon: Zap,
    members: 12,
    description: "Product managers driving innovation and user experience excellence",
    lead: "Jennifer Lee"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies",
    icon: Lightbulb
  },
  {
    title: "Collaboration",
    description: "We believe great solutions come from diverse teams working together",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do",
    icon: Award
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our work",
    icon: Heart
  }
];

const stats = [
  { number: '95+', label: 'Team Members' },
  { number: '15+', label: 'Countries Represented' },
  { number: '50%', label: 'Women in Leadership' },
  { number: '25+', label: 'Languages Spoken' },
  { number: 'PhD', label: 'Advanced Degrees' },
  { number: '24/7', label: 'Global Coverage' }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Our Team - ZION TECH GROUP</title>
        <meta name="description" content="Meet the talented team behind ZION TECH GROUP. Our experts in AI, cloud computing, cybersecurity, and software development." />
        <meta name="keywords" content="team, leadership, AI experts, cloud architects, cybersecurity specialists, software developers" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our diverse team of experts brings together decades of experience in technology, AI, and business innovation to deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">95+ Expert Team Members</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">15+ Countries</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">50% Women in Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of experience with a passion for innovation and excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized into specialized teams, each department brings unique expertise to our projects.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{dept.members} members</span>
                  <span>Lead: {dept.lead}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our team culture and shape how we work together.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Team Statistics</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our diverse and talented team represents the best in technology and innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
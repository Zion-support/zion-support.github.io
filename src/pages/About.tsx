
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Rocket,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Cloud,
  Heart,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Lightbulb,
  Target,
  Eye,
  Handshake
} from 'lucide-react';

// Team data
const teamMembers = [
  {
    name: "Kleber Santos",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in technology and innovation",
    avatar: "/images/team/kleber.jpg",
    linkedin: "https://linkedin.com/in/klebersantos"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    bio: "AI and quantum computing expert with PhD from MIT",
    avatar: "/images/team/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Security Officer",
    bio: "Cybersecurity specialist with 20+ years protecting Fortune 500 companies",
    avatar: "/images/team/marcus.jpg",
    linkedin: "https://linkedin.com/in/marcusrodriguez"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Research",
    bio: "Leading researcher in emerging technologies and sustainable IT",
    avatar: "/images/team/emily.jpg",
    linkedin: "https://linkedin.com/in/emilywatson"
  }
];

// Values data
const values = [
  {
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions.",
    icon: Lightbulb,
    color: "from-zion-cyan to-zion-blue"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, ensuring exceptional results for our clients.",
    icon: Award,
    color: "from-zion-purple to-zion-pink"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships, working closely with clients and stakeholders.",
    icon: Handshake,
    color: "from-zion-green to-zion-cyan"
  },
  {
    title: "Sustainability",
    description: "We're committed to creating technology solutions that benefit both business and the environment.",
    icon: Heart,
    color: "from-zion-orange to-zion-red"
  }
];

// Stats data
const stats = [
  {
    value: "500+",
    label: "Global Clients",
    description: "Serving businesses worldwide"
  },
  {
    value: "50+",
    label: "Countries",
    description: "International presence"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always available"
  }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <p className="text-lg text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We are the world's first free marketplace dedicated to high-tech and artificial intelligence, 
              connecting innovators, talent, and cutting-edge technology worldwide. Our mission is to democratize 
              access to advanced technology solutions and create a sustainable future through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions by creating the world's most 
                comprehensive and accessible marketplace for AI, quantum computing, cybersecurity, and 
                emerging technologies.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that innovation should be accessible to all, regardless of company size or 
                geographic location. Through our platform, we're building bridges between technology 
                providers and businesses seeking transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zion-slate-dark rounded-2xl p-8 border border-zion-cyan/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                To be the global catalyst for technological advancement, fostering innovation ecosystems 
                that drive sustainable growth and positive change across industries and societies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Global technology democratization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Sustainable innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Worldwide impact</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-zion-slate rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Zion Tech Group by the Numbers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our impact and growth in the technology industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experienced professionals driving innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-zion-slate rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-zion-cyan transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-zion-cyan text-center mb-4 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-zion-slate-light text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="text-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a technology provider, business seeking solutions, or talent looking to make an impact, 
              we invite you to be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-cyan rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link 
                to="/careers" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

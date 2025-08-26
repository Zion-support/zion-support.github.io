import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';
export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring exceptional results.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and intellectual property are protected with enterprise-grade security measures.",
      color: "from-orange-500 to-red-500"
    }
  ];
  const milestones = [
    {
      year: "2024",
      title: "Quantum Computing Launch",
      description: "Launched our quantum computing platform, making cutting-edge quantum resources accessible to businesses."
    },
    {
      year: "2023",
      title: "AI Innovation Center",
      description: "Established our AI innovation center, developing advanced machine learning solutions."
    },
    {
      year: "2022",
      title: "Blockchain Solutions",
      description: "Expanded into blockchain and Web3 services, helping businesses navigate the decentralized future."
    },
    {
      year: "2021",
      title: "Company Founded",
      description: "Zion Tech Group was founded with a vision to democratize advanced technology for businesses."
    }
  ];
  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in technology innovation and business transformation.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200",
      expertise: ["AI Strategy", "Quantum Computing", "Business Development"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "PhD in Computer Science with expertise in machine learning and quantum algorithms.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&h=200",
      expertise: ["Machine Learning", "Quantum Algorithms", "Research & Development"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      description: "Cybersecurity expert with certifications in ethical hacking and threat intelligence.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
      expertise: ["Cybersecurity", "Threat Intelligence", "Compliance"]
    },
    {
      name: "Emily Watson",
      role: "Lead AI Engineer",
      description: "Specialist in natural language processing and computer vision applications.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
      expertise: ["NLP", "Computer Vision", "AI Integration"]
    }
  ];
  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "50+", label: "Services Offered", icon: Zap },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to democratize advanced technology. Discover our team, values, and commitment to innovation in AI, quantum computing, and beyond." 
        keywords="about Zion Tech Group, company mission, team, AI innovation, quantum computing, technology leadership" 
        url="https://ziontechgroup.com/about"
      />
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan/10 rounded-full animate-float"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, dedicated to democratizing advanced AI, quantum computing, and innovative IT solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To democratize cutting-edge technology and make advanced AI, quantum computing, and innovative IT solutions accessible to businesses of all sizes. We believe that every organization deserves access to the tools that will define the future.
              </p>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our vision is to be the leading force in technological innovation, helping businesses transform and thrive in the digital age while maintaining the highest standards of security, quality, and ethical AI development.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Innovation-Driven</h3>
                  <p className="text-zion-slate-light">Constantly pushing technological boundaries</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white">Cutting-edge AI & Quantum Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white">Enterprise-grade Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white">24/7 Expert Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white">Proven Track Record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white">Custom Solutions</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-zion-cyan/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-zion-purple/30 rounded-full animate-pulse-slow"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Company Values */}
      <section className="py-20 bg-zion-blue-dark/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The core principles that guide our every decision and action in serving our clients and advancing technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Company Timeline */}
      <section className="py-20 bg-zion-blue-dark/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From startup to industry leader, discover the key milestones that have shaped Zion Tech Group's growth and success.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full border-4 border-zinc-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, quantum computing, cybersecurity, and business transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-zion-cyan/30"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium mb-3">{member.role}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{member.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </a>
              <a href="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

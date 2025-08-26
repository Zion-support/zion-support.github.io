import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield, Globe, Award, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business value."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We serve clients worldwide, bringing diverse perspectives and global best practices."
    }
  ];

  const team = [
    {
      name: "Dr. Kleber Santos",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in AI and quantum computing research.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Dr. Sarah Chen",
      role: "CTO",
      bio: "Former Google AI researcher specializing in machine learning and neural networks.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      bio: "Expert in scalable cloud architecture and DevOps automation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
            cutting-edge cybersecurity, and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-zion-slate-light text-lg leading-relaxed">
                <p>
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize access to cutting-edge technology. 
                  What started as a small team of AI researchers has grown into a global technology powerhouse.
                </p>
                <p>
                  We've helped over 500 companies across 30+ countries transform their operations through intelligent automation, 
                  advanced analytics, and next-generation cybersecurity solutions.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, investing heavily in research and development 
                  to stay at the forefront of technological innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/30 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-zion-slate-light">Companies Transformed</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zion-blue-dark/30 p-8 rounded-2xl border border-zion-cyan/20"
            >
              <Target className="w-16 h-16 text-zion-cyan mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zion-slate-light leading-relaxed">
                To empower organizations with the tools and expertise they need to thrive in the digital age, 
                making advanced technology accessible and actionable for businesses of all sizes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zion-purple-dark/30 p-8 rounded-2xl border border-zion-purple/20"
            >
              <Globe className="w-16 h-16 text-zion-purple mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light leading-relaxed">
                To be the global leader in AI-powered business transformation, creating a future where every 
                organization can harness the full potential of artificial intelligence and emerging technologies.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we deliver
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              World-class experts driving innovation and delivering exceptional results
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-2xl border border-zion-cyan/20 text-center group hover:border-zion-cyan/40 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-zion-cyan/20 group-hover:border-zion-cyan/40 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium mb-4">{member.role}</div>
                <p className="text-zion-slate-light leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 p-12 rounded-2xl border border-zion-cyan/20">
            <Award className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Recognized by industry leaders for our innovative solutions and exceptional service delivery
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">2024</div>
                <div className="text-zion-slate-light">AI Innovation Award</div>
                <div className="text-sm text-zion-slate">TechCrunch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">2023</div>
                <div className="text-zion-slate-light">Cybersecurity Excellence</div>
                <div className="text-sm text-zion-slate">Gartner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">2023</div>
                <div className="text-zion-slate-light">Best Cloud Provider</div>
                <div className="text-sm text-zion-slate">AWS Partner</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

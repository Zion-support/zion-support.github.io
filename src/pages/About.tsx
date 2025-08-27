
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Heart, 
  Target, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-zion-cyan" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.'
    },
    {
      icon: <Shield className="w-12 h-12 text-zion-cyan" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client relationships.'
    },
    {
      icon: <Users className="w-12 h-12 text-zion-cyan" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: <Heart className="w-12 h-12 text-zion-cyan" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all our interactions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      description: 'Leading our AI research and development initiatives with 15+ years of experience in machine learning and neural networks.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Security & Compliance',
      description: 'Expert in enterprise security architecture with certifications in CISSP, CISM, and extensive experience in threat detection.'
    },
    {
      name: 'Dr. James Kim',
      role: 'Quantum Computing Lead',
      expertise: 'Emerging Technologies',
      description: 'Pioneering quantum computing solutions with a PhD in Quantum Physics and experience at leading research institutions.'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Client Success',
      expertise: 'Business Strategy',
      description: 'Ensuring client success through strategic technology implementation and ongoing support excellence.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize advanced technology solutions.'
    },
    {
      year: '2021',
      title: 'AI Breakthrough',
      description: 'Developed proprietary AI algorithms for enterprise automation and decision-making.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries and established strategic partnerships.'
    },
    {
      year: '2023',
      title: 'Quantum Initiative',
      description: 'Launched quantum computing division and secured major government contracts.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Named Top 10 Technology Companies by Tech Innovation Awards.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in consciousness simulation and advanced AI systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're a team of innovators, researchers, and technology experts dedicated to 
              democratizing advanced technology and shaping the future of human-AI collaboration.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#mission"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Target className="mr-2 w-5 h-5" />
                Our Mission
              </a>
              <a 
                href="#team"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                To democratize advanced technology and create a future where AI and human intelligence 
                work together to solve humanity's greatest challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Transforming the Future Through Technology
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  At Zion Tech Group, we believe that advanced technology should be accessible to everyone, 
                  not just large corporations. Our mission is to bridge the gap between cutting-edge research 
                  and practical business applications.
                </p>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  We're pioneering the development of consciousness simulation, advanced AI systems, and 
                  quantum computing solutions that will revolutionize how businesses operate and how humans 
                  interact with technology.
                </p>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Ethical AI Development</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Sustainable Innovation</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Human-Centric Design</span>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
                  <div className="text-center">
                    <Rocket className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                    <p className="text-zion-slate-light">
                      To create a world where technology enhances human potential, 
                      where AI serves as a collaborative partner, and where innovation 
                      drives sustainable progress for all.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Brilliant minds from diverse backgrounds, united by a passion for innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-zion-cyan font-medium mb-1">{member.role}</p>
                    <p className="text-zion-slate-light text-sm mb-4">{member.expertise}</p>
                    <p className="text-zion-slate-light leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones that have shaped our company and our impact on the technology landscape
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-zion-cyan to-zion-blue"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-slate-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                      <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zion-slate-light">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Shaping the Future</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Ready to be part of the next technological revolution? Let's work together to create 
              solutions that will change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="mr-2 w-5 h-5" />
                Start a Project
              </a>
              <a 
                href="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

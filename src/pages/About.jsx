import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance in everything we do'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise and global standards'
    }
  ];

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started as a small IT consulting firm' },
    { year: '2012', title: 'First AI Project', description: 'Launched our first AI-powered solution' },
    { year: '2015', title: 'Cybersecurity Division', description: 'Expanded into enterprise security' },
    { year: '2018', title: 'Cloud Services Launch', description: 'Introduced cloud infrastructure services' },
    { year: '2021', title: 'Global Expansion', description: 'Opened offices in 5 countries' },
    { year: '2024', title: 'AI Innovation Hub', description: 'Established AI research and development center' }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: '15+ years in AI and enterprise technology. Former CTO at Fortune 500 companies.',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and DevOps. Led 50+ enterprise cloud migrations.',
      image: '/images/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist with 12+ years protecting Fortune 100 companies.',
      image: '/images/team/michael-rodriguez.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic py-20">
      <SEO 
        title="About Zion Tech Group"
        description="Learn about Zion Tech Group's 15+ years of expertise in AI, cybersecurity, and digital transformation. Discover our mission, values, and commitment to innovation."
        keywords="about Zion Tech Group, company history, team, mission, values, AI expertise, cybersecurity leadership"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Pioneering the future of technology with 15+ years of expertise in AI, cybersecurity, 
            and digital transformation. We're not just consultants – we're your innovation partners.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zion-slate-dark">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-zion-slate-light mb-6 leading-relaxed">
                To empower organizations with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe technology should 
                be an enabler, not a barrier.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Our team of experts works tirelessly to deliver solutions that not only meet today's 
                challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-white opacity-80" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-full flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zion-blue-dark">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-blue-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-zion-slate-dark">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From a small startup to a global technology leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full border-4 border-zion-slate-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-cyan/20">
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zion-slate-light">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zion-blue-dark">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experienced professionals passionate about technology and innovation
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/50 p-8 rounded-xl border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className="w-32 h-32 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium mb-4">{member.role}</div>
                <p className="text-zion-slate-light leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 bg-zion-slate-dark">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our impact in numbers - real results for real businesses
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Happy Clients', icon: Users },
              { number: '15+', label: 'Years Experience', icon: Award },
              { number: '99.9%', label: 'Uptime SLA', icon: Shield },
              { number: '24/7', label: 'Support', icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group with their technology transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
              Get Started Today
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300">
              View Our Work
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Rocket, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Database
} from 'lucide-react';

const About: React.FC = (): JSX.Element => {
  const stats = [
    { number: '500+', label: 'Projects Completed', description: 'Successfully delivered across industries' },
    { number: '50+', label: 'Team Members', description: 'Expert professionals and specialists' },
    { number: '25+', label: 'Countries Served', description: 'Global presence and reach' },
    { number: '99%', label: 'Client Satisfaction', description: 'Consistent high-quality delivery' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Excellence in Execution',
      description: 'Every project is delivered with meticulous attention to detail and unwavering commitment to quality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, building long-term relationships based on trust and mutual success.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Innovation'],
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence.',
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture'],
      image: '/images/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure'],
      image: '/images/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      image: '/images/team/emily-watson.jpg'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology.'
    },
    {
      year: '2020',
      title: 'AI Solutions Launch',
      description: 'Launched our first AI-powered business solutions platform.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries worldwide.'
    },
    {
      year: '2024',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing solutions for enterprise clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI solutions, innovative micro SAAS services, and world-class consulting expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving innovation and delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-slate-700 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <p className="text-zion-cyan text-center mb-4">{member.role}</p>
                <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped our company and our commitment to innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-white mb-4">{milestone.title}</h3>
                <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-200 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

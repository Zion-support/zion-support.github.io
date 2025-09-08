import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Database,
  Handshake
 } from 'lucide-react';

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
    icon: Handshake,
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
    title: 'First AI Product Launch',
    description: 'Successfully launched our flagship AI compliance assistant.'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded operations to 25+ countries with 100+ enterprise clients.'
  },
  {
    year: '2024',
    title: 'Quantum Computing Initiative',
    description: 'Launched quantum computing research and development program.'
  },
  {
    year: '2025',
    title: 'AI Ethics Leadership',
    description: 'Recognized as industry leader in responsible AI development.'
  }
];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Google with 15+ years in machine learning and business strategy.',
      expertise: ['AI Strategy', 'Business Development', 'Team Leadership'],
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft engineer specializing in cloud architecture and scalable AI systems.',
      expertise: ['Cloud Architecture', 'AI Engineering', 'DevOps'],
      image: '/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science from Stanford, leading our cutting-edge AI research initiatives.',
      expertise: ['Machine Learning', 'Research', 'Innovation'],
      image: '/team/emily-watson.jpg'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Seasoned engineering leader with experience building teams at Facebook and Amazon.',
      expertise: ['Engineering', 'Team Building', 'Product Development'],
      image: '/team/david-kim.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const certifications = [
    'ISO 27001 Information Security',
    'SOC 2 Type II Compliance',
    'AWS Advanced Consulting Partner',
    'Microsoft Gold Partner',
    'Google Cloud Partner',
    'Certified B Corporation'
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      bio: 'Experts in machine learning, neural networks, and autonomous systems development.',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'DevOps Engineers',
      role: 'Infrastructure & Cloud',
      bio: 'Specialists in cloud architecture, automation, and scalable infrastructure solutions.',
      image: '/team/devops-team.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to transforming businesses through innovative AI and technology solutions."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technologists, innovators, and problem-solvers 
              dedicated to transforming businesses through cutting-edge AI and technology solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To democratize access to cutting-edge AI and quantum technologies, enabling businesses 
                of all sizes to leverage the power of next-generation computing for unprecedented growth 
                and innovation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that technology should be accessible, secure, and transformative, driving 
                positive change across industries and communities worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To be the global leader in AI-powered business transformation, pioneering the future 
                of work through intelligent automation, quantum computing, and sustainable technology solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a world where every organization can harness the full potential of AI 
                to solve complex challenges and create lasting value for humanity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients, partners, and communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - here's how we got here.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">{milestone.year}</span>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">{milestone.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
                      <Award className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-cyan-400 text-sm font-medium">{milestone.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

      {/* Team Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders and experts driving innovation at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of organizations already leveraging our AI and quantum computing solutions 
              to drive innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to quality, security, and excellence is recognized by industry leaders.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We foster a culture of innovation, collaboration, and continuous learning. Our team 
                  members are encouraged to think creatively, take risks, and push the boundaries of 
                  what's possible.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We believe in work-life balance, professional development, and creating an inclusive 
                  environment where everyone can thrive and contribute their best work.
                </p>
                <div className="flex items-center text-cyan-400 font-medium">
                  <span>Join our team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">What We Value</h3>
                <ul className="space-y-3">
                  {[
                    'Continuous learning and growth',
                    'Diversity and inclusion',
                    'Work-life balance',
                    'Innovation and creativity',
                    'Collaboration and teamwork',
                    'Client success and satisfaction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

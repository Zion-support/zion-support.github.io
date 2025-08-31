import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
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
  Play,
  Quote
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'People-Centric',
      description: 'Our team is our greatest asset. We invest in talent, foster collaboration, and celebrate diversity.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We build secure, reliable solutions that protect our clients\' data and maintain the highest ethical standards.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results that exceed expectations.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes.',
      achievement: 'Started with 5 team members'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, establishing our reputation for quality.',
      achievement: '100% client satisfaction'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ experts and opened our San Francisco headquarters.',
      achievement: '300% team growth'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and expanded our service portfolio.',
      achievement: '5 industry awards'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Launched international operations and served clients across 15+ countries.',
      achievement: '15+ countries served'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to transforming businesses through innovative AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technologists, innovators, and problem-solvers 
              dedicated to transforming businesses through cutting-edge AI and technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize artificial intelligence and cutting-edge technology, making it accessible 
                to businesses of all sizes. We believe that every organization deserves the opportunity 
                to leverage AI to drive growth, efficiency, and innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our expertise, dedication, and commitment to excellence, we help our clients 
                navigate the complex landscape of modern technology and emerge stronger, more competitive, 
                and future-ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading force in AI-driven business transformation, creating a future where 
                technology serves humanity, enhances productivity, and unlocks unprecedented possibilities 
                for organizations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from how we work with clients to how we build our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
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
            transition={{ duration: 0.8 }}
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

      {/* Team Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-400 bg-slate-600/50 rounded px-2 py-1">
                      {skill}
                    </div>
                  ))}
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our impact in numbers - measurable results that speak for themselves.
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/careers"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

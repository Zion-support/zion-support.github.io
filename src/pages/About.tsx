import React from 'react';'
import { Link } from 'react-router-dom';'
import { motion } from 'framer-motion';

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
  Lock,'
  Database} from 'lucide-react';

export default function About() {
  const stats = [
    {
'
      number: '500+','
      label: 'Projects Completed','
      description: 'Successfully delivered across industries'},
    {
'
      number: '50+','
      label: 'Team Members','
      description: 'Expert professionals and specialists'},
    {
'
      number: '25+','
      label: 'Countries Served','
      description: 'Global presence and reach'},
    {
'
      number: '99%','
      label: 'Client Satisfaction','
      description: 'Consistent high-quality delivery'},
  ];

  const values = [
    {

      icon: Lightbulb,'
      title: 'Innovation First',
      description:'
        "We push the boundaries of what's possible, constantly exploring emerging technologies and creative solutions.",'
      color: 'from-purple-500 to-pink-500'},
    {

      icon: Award,'
      title: 'Excellence in Execution',
      description:'
        'Every project is delivered with meticulous attention to detail and unwavering commitment to quality.','
      color: 'from-blue-500 to-cyan-500'},
    {

      icon: Heart,'
      title: 'Partnership Approach',
      description:'
        'We work as an extension of your team, building long-term relationships based on trust and mutual success.','
      color: 'from-green-500 to-emerald-500'},
    {

      icon: Shield,'
      title: 'Security & Trust',
      description:'
        'Your data and systems are protected with enterprise-grade security and compliance standards.','
      color: 'from-red-500 to-orange-500'},
  ];

  const teamMembers = [
    {
'
      name: 'Kleber Santos','
      role: 'CEO & Founder','
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['
        'AI Strategy','
        'Digital Transformation','
        'Business Innovation',
      ],'
      image: '/images/team/kleber-santos.jpg'},
    {
'
      name: 'Dr. Sarah Chen','
      role: 'CTO & AI Research Lead','
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence.','
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture'],'
      image: '/images/team/sarah-chen.jpg'},
    {
'
      name: 'Marcus Rodriguez','
      role: 'Head of Cloud & DevOps','
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud.','
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure'],'
      image: '/images/team/marcus-rodriguez.jpg'},
    {
'
      name: 'Dr. Emily Watson','
      role: 'Cybersecurity Director','
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence.','
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],'
      image: '/images/team/emily-watson.jpg'},
  ];

  const milestones = [
    {
'
      year: '2018','
      title: 'Company Founded',
      description:'
        'Zion Tech Group established with a vision to democratize AI technology.'},
    {
'
      year: '2020','
      title: 'AI Breakthrough',
      description:'
        'Developed first autonomous AI research assistant for enterprise clients.'},
    {
'
      year: '2022','
      title: 'Global Expansion',
      description:'
        'Expanded services to 25+ countries with localized solutions.'},
    {
'
      year: '2024','
      title: 'Quantum Leap',
      description:'
        'Launched quantum computing services and AI-powered solutions.'},
    {
'
      year: '2025','
      title: 'Future Forward',
      description:'
        'Leading the next generation of AI and technology innovation.'},
  ];

  const technologies = [
    {
'
      name: 'Artificial Intelligence',
      icon: Brain,'
      color: 'from-purple-500 to-pink-500'},
    {
'
      name: 'Quantum Computing',
      icon: Cpu,'
      color: 'from-blue-500 to-cyan-500'},
    {
'
      name: 'Cloud Infrastructure',
      icon: Cloud,'
      color: 'from-green-500 to-emerald-500'},
    {
'
      name: 'Cybersecurity',
      icon: Shield,'
      color: 'from-red-500 to-orange-500'},
    {
'
      name: 'Blockchain & Web3',
      icon: Lock,'
      color: 'from-indigo-500 to-purple-500'},
    {
'
      name: 'IoT & Edge Computing',
      icon: Zap,'
      color: 'from-yellow-500 to-orange-500'},
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">"
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}"
          className="text-center text-white mb-20"
        >"
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>"
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            We are a forward-thinking technology company dedicated to
            transforming businesses through cutting-edge AI, quantum computing,
            and innovative digital solutions. Our mission is to democratize
            advanced technology and make it accessible to organizations of all
            sizes.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}"
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
            >"
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>"
              <div className="text-cyan-400 font-semibold mb-1">
                {stat.label}
              </div>"
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}"
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >"
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">"
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">"
              <Target className="w-8 h-8 text-white" />
            </div>"
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>"
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize advanced technology and empower organizations with
              AI-powered solutions that drive innovation, efficiency, and
              competitive advantage in the digital age.
            </p>
          </div>
"
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">"
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">"
              <Rocket className="w-8 h-8 text-white" />
            </div>"
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>"
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered technology solutions,
              shaping the future of business through innovation, sustainability,
              and human-centric design.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}"
          className="mb-20"
        >"
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >"
                  <value.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>"
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}"
          className="mb-20"
        >"
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Technology Expertise
          </h2>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div`
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >"
                  <tech.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}"
          className="mb-20"
        >"
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Meet Our Leadership Team
          </h2>"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >"
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Users className="w-12 h-12 text-white" />
                </div>"
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>"
                <p className="text-cyan-400 font-semibold mb-3">
                  {member.role}
                </p>"
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>"
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}"
                      className="text-xs text-gray-400 bg-white/5 rounded px-2 py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}"
          className="mb-20"
        >"
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>"
          <div className="relative">"
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>"
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}'`
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >"
                  <div className="w-1/2 flex justify-center">"
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-sm">"
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {milestone.year}
                      </div>"
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>"
                      <p className="text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>"
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>"
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}"
          className="text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">"
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their
              operations with our AI-powered solutions.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact""
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link"
                to="/services""
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
'"`
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket, Award, Clock, Headphones, Mail, Phone, MapPin } from 'lucide-react'

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: 'KS',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'SJ',
      bio: 'Technical architect specializing in AI systems and cloud infrastructure.',
      expertise: ['AI Engineering', 'Cloud Architecture', 'System Design']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      image: 'MC',
      bio: 'Leading AI researcher with expertise in machine learning and NLP.',
      expertise: ['Machine Learning', 'NLP', 'Computer Vision']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'ER',
      bio: 'Product strategist focused on user experience and market innovation.',
      expertise: ['Product Strategy', 'UX Design', 'Market Analysis']
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'DK',
      bio: 'Full-stack developer with expertise in modern web technologies.',
      expertise: ['Full-Stack Development', 'React', 'Node.js']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Operations',
      image: 'LW',
      bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
      expertise: ['Project Management', 'Operations', 'Client Relations']
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your results.',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Quality Excellence',
      description: 'We deliver nothing but the highest quality solutions and services.',
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback in everything we do.',
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead by constantly learning and adapting to new technologies.',
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Team Collaboration',
      description: 'Great results come from great teams working together seamlessly.',
      icon: <Users className="w-8 h-8 text-red-400" />
    }
  ]

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology.'
    },
    {
      year: '2015',
      title: 'First AI Product',
      description: 'Launched our first AI-powered content generation platform.'
    },
    {
      year: '2018',
      title: '100+ Clients',
      description: 'Reached our first milestone of serving 100+ satisfied clients.'
    },
    {
      year: '2020',
      title: 'Cloud Migration',
      description: 'Successfully migrated all services to cloud infrastructure.'
    },
    {
      year: '2022',
      title: 'AI Innovation Award',
      description: 'Received the prestigious AI Innovation Award for our chatbot technology.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 50+ countries.'
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of AI and IT solutions with a proven track record of success." />
        <meta name="keywords" content="about us, company, team, mission, values, Zion Tech Group, AI solutions, IT services" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
            Our mission is to empower businesses with cutting-edge technology that drives real results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Target className="w-8 h-8 text-cyan-400 mr-3" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              To democratize AI technology and make it accessible to businesses of all sizes. 
              We believe that every company should have access to cutting-edge AI solutions that can 
              transform their operations and drive growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Make AI accessible to all businesses</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Deliver measurable business value</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Foster innovation and growth</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              To be the world's leading provider of AI-powered business solutions, 
              helping organizations across all industries harness the power of artificial 
              intelligence to achieve unprecedented success.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Global leader in AI solutions</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Transform every industry with AI</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Create a more intelligent future</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-300 text-center mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-slate-700/50 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                    <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can help transform your business and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

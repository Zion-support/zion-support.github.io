<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket, Award, Clock, Headphones, Mail, Phone, MapPin } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: 'KS',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Users, Award, Target, Globe, Clock, Star, Zap, Shield, Brain, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Client-First Approach',
      description: 'We prioritize our clients\' success and work closely with them to achieve their goals.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in all our projects and deliver exceptional results.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Innovation Focus',
      description: 'We stay at the forefront of technology and bring innovative solutions to our clients.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Perspective',
      description: 'We understand diverse markets and provide solutions that work across different cultures.'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
    }
  ]

  const team = [
    {
<<<<<<< HEAD
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/150/150'
=======
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
<<<<<<< HEAD
      description: 'Expert in cloud architecture and scalable system design.',
      image: '/api/placeholder/150/150'
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0389
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
<<<<<<< HEAD
      role: 'Head of Security',
      description: 'Cybersecurity expert with extensive experience in enterprise security.',
      image: '/api/placeholder/150/150'
=======
      description: 'Technical expert specializing in AI and cloud architecture solutions.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Engineering',
      description: 'Full-stack developer with expertise in modern web technologies.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      description: 'UX/UI specialist focused on creating exceptional user experiences.'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0389
    }
  ]

  const stats = [
<<<<<<< HEAD
    { number: '500+', label: 'Projects Completed' },
<<<<<<< HEAD
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
=======
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99.9%', label: 'Client Satisfaction' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
=======
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0389
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI solutions, IT services, and digital transformation. Meet our expert team and discover our mission." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT services company, digital transformation, team, mission, values" />
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
=======
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of AI and IT solutions with a proven track record of success." />
        <meta name="keywords" content="about us, company, team, mission, values, Zion Tech Group, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                We are a leading technology company specializing in AI and IT solutions. 
                Our mission is to help businesses transform and thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                improve efficiency, and create lasting competitive advantages.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
          </div>
        </div>

        {/* Team Section */}
<<<<<<< HEAD
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900 flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our team can help transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Our Services
              </Link>
=======
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Meet the experts behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how we can help your business achieve its goals 
                  with our innovative AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    to="/careers" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  )
}
=======
    </>
  )
}

export default AboutPage
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  EyeIcon,
  CpuChipIcon,
  CloudIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge AI and IT solutions that transform businesses.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability as core principles, ensuring your data is always protected.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges, delivering personalized solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to implementation, ensuring exceptional results.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: RocketLaunchIcon },
    { number: '200+', label: 'Happy Clients', icon: UserGroupIcon },
    { number: '99.9%', label: 'Uptime SLA', icon: ShieldCheckIcon },
    { number: '5+', label: 'Years Experience', icon: StarIcon }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'Machine Learning Experts',
      description: 'PhD-level researchers specializing in cutting-edge AI technologies.',
      image: '🤖'
    },
    {
      name: 'Engineering Team',
      role: 'Full-Stack Developers',
      description: 'Expert developers building scalable and secure solutions.',
      image: '👨‍💻'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Specialists',
      description: 'Certified security experts protecting your digital assets.',
      image: '🛡️'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and IT solutions.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered micro SaaS solutions for small businesses.'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve enterprise clients with comprehensive IT solutions.'
    },
    {
      year: '2023',
      title: 'Cloud Infrastructure',
      description: 'Built robust cloud infrastructure to support global operations.'
    },
    {
      year: '2024',
      title: 'AI Innovation',
      description: 'Pioneered advanced AI solutions with 99.9% accuracy and real-time processing.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for businesses worldwide." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, mission, values" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Discover our mission to transform businesses with cutting-edge AI and IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">About Zion Tech Group</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                About Us
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Empowering businesses through <span className="text-cyan-400 font-semibold">innovative technology solutions</span> 
                and cutting-edge AI that drives growth, efficiency, and transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </Link>
                <Link 
                  to="/services" 
                  className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                >
                  <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  Our Services
                </Link>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-10 h-10 text-purple-400" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, 
                reliable, and transformative for organizations of all sizes.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <CpuChipIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI Innovation</h3>
                  <p className="text-gray-300">Pioneering the future of artificial intelligence with solutions that think, learn, and adapt.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <CloudIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cloud Excellence</h3>
                  <p className="text-gray-300">Building scalable, secure, and reliable cloud infrastructure for modern businesses.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <GlobeAltIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                  <p className="text-gray-300">Transforming businesses worldwide with technology solutions that make a difference.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Values
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  The principles that guide everything we do and shape our culture of excellence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Team
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Meet the experts behind our innovative solutions and exceptional service.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Key milestones in our mission to transform businesses through technology.
                </p>
              </div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-8 group">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group-hover:bg-slate-800/70 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join hundreds of businesses already using our AI and IT solutions to drive growth and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Start Your Project
                  </Link>
                  <Link 
                    to="/services" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Explore Services
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
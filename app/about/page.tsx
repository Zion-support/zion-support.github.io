'use client';
import React  from 'react';
import {Helmet} from 'react-helmet-async';

const AboutPage: React.FC = () => {,
  return(<>)
      <Helmet />
const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      image: "/team/kleber-santos.jpg",
      bio: "Visionary leader with 15+ years in AI and technology innovation.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "/team/sarah-chen.jpg",
      bio: "AI research expert with PhD in Machine Learning from MIT.",
      expertise: ["Machine Learning", "AI Research", "Technical Architecture"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      image: "/team/michael-rodriguez.jpg",
      bio: "Full-stack engineer with expertise in cloud infrastructure and DevOps.",
      expertise: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Solutions",
      image: "/team/emily-johnson.jpg",
      bio: "AI specialist focused on practical business applications and implementation.",
      expertise: ["AI Implementation", "Data Science", "Business Intelligence"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the value we deliver to our clients.",
      icon: "🎯"
    },
    {
      title: "Transparency",
      description: "We believe in open communication, clear processes, and honest feedback throughout every project.",
      icon: "🔍"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do we. We invest heavily in learning and development.",
      icon: "📚"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses. Meet our expert team and discover our mission." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, technology team, company mission" />
        <meta property="og:title" content="About Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Learn about our mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions with a mission to transform businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We are passionate about transforming businesses through cutting-edge AI and IT solutions.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center mb-20">,</div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage in the digital age.</p>
              </p>
              <p className="text-gray-300 leading-relaxed">We believe technology should be accessible, powerful, and transformative. Our team of experts works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions. 
              Founded in 2014, we've helped over 500 companies achieve their digital transformation goals.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                We believe technology should be accessible, powerful, and transformative. Our team of experts works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                To be the world's leading provider of AI and IT solutions, enabling every business to harness the power of technology for sustainable growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Cutting-edge AI and IT solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Proven track record of success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-lg">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-gray-300 text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300 text-lg">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300 text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );};

export default AboutPage;

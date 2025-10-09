'use client';
import React from 'react';
import { Users, Award, Target, Globe, Phone, Mail, MapPin, CheckCircle, Star, TrendingUp, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users as Team, Award as Achievement, Target as Goal, Globe as World, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the growth and success of our clients.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and compliance, ensuring your data and systems are always protected.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, and we work with clients worldwide to create positive change.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      bio: 'AI and quantum computing expert with 15+ years in enterprise technology solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Machine learning specialist and cloud architecture expert with a passion for scalable solutions.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science, leading our AI research and development initiatives.',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of IT Services',
      bio: 'Cybersecurity and infrastructure expert with extensive enterprise experience.',
      image: '/team/emily-johnson.jpg'
    }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and advanced technology.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, implementing AI solutions that increased their efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Quantum Computing Division',
      description: 'Launched our quantum computing research division, positioning us as industry leaders.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'AI Breakthrough',
      description: 'Developed proprietary AI algorithms that achieved 99.9% accuracy in predictive analytics.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions. Discover our story and values."
        keywords={['about us', 'company', 'team', 'mission', 'values', 'AI company', 'IT solutions']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Pioneering the Future of AI and Technology
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Founded in 2020, Zion Tech Group has been at the forefront of AI innovation and digital transformation. 
                We combine cutting-edge technology with deep industry expertise to deliver solutions that transform businesses and create lasting impact.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To democratize artificial intelligence and advanced technology, making it accessible to businesses of all sizes. 
                    We believe that every organization should have access to cutting-edge AI solutions that can transform their operations, 
                    improve efficiency, and drive growth.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    Our mission is not just about technology—it's about empowering people and organizations to achieve their full potential 
                    through intelligent automation, data-driven insights, and innovative solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="cyber-button inline-flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Get in Touch
                    </a>
                    <a
                      href="/services"
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    To be the world's leading provider of AI-powered solutions, creating a future where technology seamlessly 
                    integrates with human potential to solve the world's most complex challenges.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">Sustainable AI development</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">Ethical technology practices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">Global accessibility</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">Continuous innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="container mx-auto px-4 py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="container mx-auto px-4 py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
                <div className="space-y-12">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 px-8">
                        <div className="cyber-card p-6">
                          <div className="text-cyan-400 font-bold text-lg mb-2">{achievement.year}</div>
                          <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                          <p className="text-gray-300">{achievement.description}</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div className="w-1/2 px-8"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Join hundreds of companies that trust Zion Tech Group to transform their business with cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Start Your Project</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
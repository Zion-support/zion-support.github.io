'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Shield, Globe, Brain, Cloud
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Trust',
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your business.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client Success',
      description: 'We measure our success by your success. Our dedicated team ensures every project exceeds expectations.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across all time zones.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and IT solutions, passionate about transforming businesses through technology.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah.jpg',
      bio: 'Technical visionary with expertise in AI, machine learning, and cloud architecture.',
      expertise: ['AI/ML', 'Cloud Architecture', 'Technical Strategy']
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/team/michael.jpg',
      bio: 'AI specialist focused on developing cutting-edge machine learning solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Research']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'AI Solutions' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI and IT solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
      </Helmet>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes. 
                  We believe that every organization deserves access to the tools that will define the future.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our mission is to bridge the gap between complex technology and practical business solutions, 
                  ensuring that our clients not only survive but thrive in the digital age.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">AI Innovation</h3>
                      <p className="text-gray-300 text-sm">Cutting-edge AI solutions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Cloud Solutions</h3>
                      <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Security First</h3>
                      <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-orange-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
                      <p className="text-gray-300 text-sm">Rapid implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence and innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, IT, and business transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that have already revolutionized their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
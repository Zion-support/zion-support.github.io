'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Users, Award, Target, ArrowRight, CheckCircle, Star, Globe, Zap, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of technology to create cutting-edge solutions that drive business transformation.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution is tailored to their unique needs.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security is at the core of everything we do, protecting your data and systems with enterprise-grade solutions.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive results.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'AI and quantum computing expert with 15+ years of experience in enterprise technology solutions.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Cloud architecture specialist with expertise in scalable infrastructure and DevOps practices.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      image: '/images/team/michael.jpg',
      bio: 'Machine learning researcher and AI solutions architect with a focus on business applications.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      image: '/images/team/emily.jpg',
      bio: 'Cybersecurity expert with extensive experience in threat detection and compliance management.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and the expert team behind our innovative technology solutions." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, team, mission, values" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI and IT solutions with a mission to transform businesses through innovative technology." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, cloud infrastructure, 
                and digital transformation services. Our mission is to empower businesses with cutting-edge 
                technology that drives growth and innovation.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To revolutionize business operations through innovative AI and IT solutions that 
                    drive efficiency, growth, and competitive advantage. We believe technology should 
                    be accessible, powerful, and transformative.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    Our team of experts combines deep technical knowledge with business acumen to 
                    deliver solutions that not only meet current needs but anticipate future challenges.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
                    <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Cloud className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Cloud Excellence</h3>
                    <p className="text-gray-300">Scalable and secure cloud infrastructure</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Shield className="w-12 h-12 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                    <p className="text-gray-300">Enterprise-grade security solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Rapid Delivery</h3>
                    <p className="text-gray-300">Fast and efficient project delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and shape our culture, 
                  relationships, and approach to solving complex challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of experience 
                  in AI, cloud computing, cybersecurity, and business transformation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's work together to create innovative solutions that drive your business forward. 
                  Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View Our Services
                  </Link>
                </div>
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

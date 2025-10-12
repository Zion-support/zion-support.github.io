import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield, Database, ArrowRight, Star, Clock, TrendingUp, Brain, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability, ensuring your business operations run smoothly 24/7.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to final delivery and ongoing support.'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: 'KS'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI system design.',
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Specialist in machine learning and neural network optimization.',
      image: 'MC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered solutions and IT services. Our mission is to transform businesses through innovative technology." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT services company, technology solutions, team, mission, values" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              We are a leading technology company specializing in AI-powered solutions and comprehensive IT services. 
              Our mission is to transform businesses through innovative technology and exceptional service.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="w-8 h-8 text-cyan-400 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in AI-powered business solutions, transforming how organizations operate and compete in the digital age.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-8 h-8 text-purple-400 mr-3" />
                Our Approach
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We combine deep technical expertise with a client-first mindset to deliver solutions that exceed expectations and drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The experts behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Let's discuss how we can help transform your business with our innovative AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Our Services
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-white transition-colors">+1 302 464 0950</a></p>
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-white transition-colors">kleber@ziontechgroup.com</a></p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
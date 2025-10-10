'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  Globe,
  Zap,
  TrendingUp
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '5★', label: 'Client Rating' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge AI and technology solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security and compliance are at the core of everything we build and deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    }
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
      role: 'Machine Learning Engineers',
      description: 'Expert team of PhD-level researchers and engineers.',
      image: '🤖'
    },
    {
      name: 'DevOps Team',
      role: 'Infrastructure Specialists',
      description: 'Cloud and infrastructure experts ensuring 99.9% uptime.',
      image: '☁️'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated support team providing 24/7 assistance.',
      image: '🎧'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading AI and IT solutions company. Discover our mission, values, team, and commitment to transforming businesses through technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, company mission, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes. 
                    We believe that every company should have access to cutting-edge AI solutions that can transform their operations and drive growth.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    Our mission is to bridge the gap between complex AI technology and practical business applications, 
                    ensuring that our clients can leverage the full power of artificial intelligence to achieve their goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </a>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Proven Expertise</h4>
                        <p className="text-gray-300 text-sm">15+ years of experience in AI and technology solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Enterprise Security</h4>
                        <p className="text-gray-300 text-sm">Bank-level security and compliance standards</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                        <p className="text-gray-300 text-sm">Round-the-clock technical support and maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                        <p className="text-gray-300 text-sm">Solutions that grow with your business needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The principles that guide everything we do and shape our company culture
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Meet the talented individuals who make our success possible
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how we can help transform your business with our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-gray-300">
                  <p>📧 kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
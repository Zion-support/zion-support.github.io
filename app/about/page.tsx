'use client';
import React from 'react';
import { Brain, Users, Award, Target, Globe, Shield, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '300%', label: 'Average ROI', icon: Award },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and breakthrough solutions.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We work closely with you to understand your unique challenges and deliver solutions that drive real results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better. Our solutions are designed to create positive impact at scale.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI researcher and entrepreneur with 15+ years of experience in machine learning and enterprise solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Former Google AI engineer specializing in large-scale machine learning systems and quantum computing.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Expert in cloud architecture and DevOps with a passion for building scalable, reliable systems.',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science with focus on neural networks and autonomous systems research.',
      image: '/team/emily-watson.jpg'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide."
        keywords={['about zion tech group', 'AI company', 'IT solutions provider', 'enterprise AI', 'team', 'mission']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Pioneering the Future of AI and IT Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, Zion Tech Group has emerged as a leading provider of AI-powered enterprise solutions, 
              quantum computing, autonomous systems, and digital transformation services. We're committed to helping 
              businesses harness the power of cutting-edge technology to achieve unprecedented growth and efficiency.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To democratize access to advanced AI and IT solutions, empowering businesses of all sizes to 
                  leverage cutting-edge technology for growth, efficiency, and innovation. We believe that every 
                  organization deserves access to enterprise-grade AI tools and services.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Make AI accessible to businesses of all sizes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Deliver measurable ROI and business value
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ensure security and compliance in all solutions
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To be the world's leading provider of AI-powered business solutions, creating a future where 
                  intelligent automation and human creativity work together to solve the world's most complex 
                  challenges and drive unprecedented progress.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Lead the AI revolution in enterprise solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Create sustainable, ethical AI technologies
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Build a global community of AI innovators
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                  <p className="text-cyan-400 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Company History */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our Journey</h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2020</div>
                  <h3 className="text-xl font-bold text-white mb-3">Founded</h3>
                  <p className="text-gray-300 text-sm">
                    Zion Tech Group was founded with a vision to democratize AI technology for businesses worldwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">2022</div>
                  <h3 className="text-xl font-bold text-white mb-3">First Major Client</h3>
                  <p className="text-gray-300 text-sm">
                    Secured our first Fortune 500 client, proving the value of our AI solutions at enterprise scale.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">2024</div>
                  <h3 className="text-xl font-bold text-white mb-3">Global Expansion</h3>
                  <p className="text-gray-300 text-sm">
                    Expanded to serve clients across 25+ countries with our comprehensive AI and IT solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our AI and IT solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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
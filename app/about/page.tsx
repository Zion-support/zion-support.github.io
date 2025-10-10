'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Shield,
  Zap,
  Users,
  Target,
  Globe,
  Award
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
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
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We deliver lightning-fast, scalable solutions that grow with your business needs.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team to understand your unique challenges and deliver tailored solutions.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Our solutions are designed to deliver measurable business outcomes and ROI.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with localized support and expertise.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and neural networks.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology visionary with expertise in cloud architecture and scalable systems.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards.',
      image: '/team/emily-rodriguez.jpg'
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      bio: 'Data science specialist transforming raw data into actionable business insights.',
      image: '/team/david-kim.jpg'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're on a mission to revolutionize business through advanced AI and IT solutions, 
                helping companies achieve unprecedented growth and efficiency.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                    efficiency, and growth. We believe technology should be accessible, powerful, and 
                    transformative.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    Our team of experts combines deep technical knowledge with business acumen to 
                    deliver solutions that not only meet your current needs but also prepare you for 
                    the future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                      Get Started
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                    <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                      View Our Work
                    </button>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Proven track record of successful projects
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Cutting-edge AI and machine learning expertise
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Enterprise-grade security and compliance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      24/7 technical support and maintenance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Scalable solutions that grow with your business
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and shape our approach to solving 
                  complex business challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of experience in AI, 
                  technology, and business innovation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
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

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Let's discuss how our AI and IT solutions can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
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

AboutPage.displayName = 'AboutPage';

export default AboutPage;
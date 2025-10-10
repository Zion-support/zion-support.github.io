'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize security and compliance in all our solutions to protect your business and data.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations and drive results.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, cloud infrastructure, 
                and digital transformation services that help businesses thrive in the digital age.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, reliable, and 
                  transformative for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of expert engineers, data scientists, and technology consultants work 
                  tirelessly to deliver solutions that not only meet today's challenges but also 
                  prepare our clients for tomorrow's opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                  <Brain className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Leading the way in artificial intelligence and machine learning solutions.</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                  <Cloud className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Excellence</h3>
                  <p className="text-gray-300 text-sm">Scalable and secure cloud infrastructure solutions.</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
                  <Shield className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and compliance solutions.</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/20">
                  <Zap className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                  <p className="text-gray-300 text-sm">Rapid deployment and implementation of solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, cloud computing, 
                cybersecurity, and software development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">KJ</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber Johnson</h3>
                <p className="text-cyan-400 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with 15+ years in AI and technology innovation. 
                  Passionate about transforming businesses through cutting-edge solutions.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">SM</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Martinez</h3>
                <p className="text-purple-400 mb-4">CTO</p>
                <p className="text-gray-300 text-sm">
                  Technology architect with expertise in cloud infrastructure and AI systems. 
                  Leads our technical innovation and development teams.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 border border-green-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">DC</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">David Chen</h3>
                <p className="text-green-400 mb-4">Head of AI Research</p>
                <p className="text-gray-300 text-sm">
                  AI researcher and data scientist with PhD in Machine Learning. 
                  Specializes in developing advanced AI models and algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
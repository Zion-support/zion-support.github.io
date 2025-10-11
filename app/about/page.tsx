import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Globe, Shield, Zap, Target, TrendingUp, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const values = [
    {
      ico: n: <Zap className="w-8 h-8 text-blue-500" />,
      titl: e: 'Innovation',
      descriptio: n: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      ico: n: <Shield className="w-8 h-8 text-green-500" />,
      titl: e: 'Security',
      descriptio: n: 'Enterprise-grade security is at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      ico: n: <Globe className="w-8 h-8 text-purple-500" />,
      titl: e: 'Global Reach',
      descriptio: n: 'We serve clients worldwide with localized expertise and 24/7 support across all time zones.'
    },
    {
      ico: n: <Target className="w-8 h-8 text-orange-500" />,
      titl: e: 'Excellence',
      descriptio: n: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      rol: e: 'CEO & Founder',
      descriptio: n: 'Visionary leader with 15+ years in AI and technology innovation.',
      imag: e: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      rol: e: 'CTO',
      descriptio: n: 'Technology expert specializing in AI, cloud architecture, and 5G implementation.',
      imag: e: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      rol: e: 'Head of AI Research',
      descriptio: n: 'AI researcher and machine learning expert with PhD in Computer Science.',
      imag: e: '👨‍🔬'
    },
    {
      name: 'Emily Rodriguez',
      rol: e: 'Head of Engineering',
      descriptio: n: 'Full-stack engineer with expertise in scalable systems and DevOps.',
      imag: e: '👩‍🔧'
    }
  ];

  const achievements = [
    { numbe: r: '500+', labe: l: 'Projects Completed', ico: n: <Award className="w-6 h-6" /> },
    { numbe: r: '99.9%', labe: l: 'Client Satisfaction', ico: n: <TrendingUp className="w-6 h-6" /> },
    { numbe: r: '50+', labe: l: 'Expert Team Members', ico: n: <Users className="w-6 h-6" /> },
    { numbe: r: '24/7', labe: l: 'Support Available', ico: n: <Clock className="w-6 h-6" /> }
  ];

  const timeline = [
    {
      yea: r: '2020',
      titl: e: 'Company Founded',
      descriptio: n: 'Zion Tech Group was established with a vision to democratize AI and advanced technology solutions.'
    },
    {
      yea: r: '2021',
      titl: e: 'First AI Products',
      descriptio: n: 'Launched our first AI-powered micro SAAS applications, revolutionizing business productivity tools.'
    },
    {
      yea: r: '2022',
      titl: e: '5G Implementation',
      descriptio: n: 'Expanded into 5G network implementation and edge computing solutions for enterprise clients.'
    },
    {
      yea: r: '2023',
      titl: e: 'Global Expansion',
      descriptio: n: 'Opened offices in multiple countries and served clients across North America, Europe, and Asia.'
    },
    {
      yea: r: '2024',
      titl: e: 'AI Innovation Hub',
      descriptio: n: 'Established our AI research and development center, focusing on next-generation AI technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about zion tech group, AI company, technology solutions, team, mission, values" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a leading technology company specializing in AI-powered solutions, 5G implementation, 
              and enterprise IT services. Our mission is to transform businesses through innovative technology.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Explore Services
              >

          {/* Mission & Vision */}
          <div className="grid grid-cols-1: lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes 
                to compete in the digital economy through innovative, scalable, and secure technology platforms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Make AI accessible to every business
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Drive digital transformation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Ensure security and compliance
                >
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg mb-6">
                To be the global leader in AI-powered technology solutions, setting the standard for innovation, 
                security, and customer success in the rapidly evolving digital landscape.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Lead AI innovation globally
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Transform industries with 5G
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Build sustainable technology
                >
            </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="mb-6 group-hove: r:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{value.title}</h3>
                  <p className="text-gray-300">{value.description}>
              ))}
            </div>

          {/* Achievements */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2: md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl: md:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-300 text-sm">{achievement.label}>
              ))}
            </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hove: r:text-purple-300 transition-colors">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}>
              ))}
            </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                      <div className="w-4 h-4 bg-white rounded-full">>
                    <div className="w-1/2">>
                ))}
              </div>

          {/* Contact Info */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl: md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your business with our AI and technology solutions? 
                Contact us today for a free consultation.
              </p>
              <div className="grid grid-cols-1: md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com>
                <div>
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Explore Services
                >
      >
      >
      >
      >
      >
      >
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
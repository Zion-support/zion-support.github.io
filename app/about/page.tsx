'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
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
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Users,
  Target,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin;
const AboutPage: React.FC = () => {
  const stats = [
  ];

  const values = [
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
      icon: Shield,
      title: 'Security',
      description: 'We prioritize security and compliance in all our solutions to protect your business and data.'
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations and drive results.'
  ];

  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through cutting-edge technology." />
        <meta name="keywords" content="about us, company, AI solutions, IT services, technology, team, mission" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"/>
              About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              We are a leading technology company specializing in AI solutions and IT services, 
              dedicated to transforming businesses through innovative technology.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                Get In Touch;
                <ArrowRight className="w-5 h-5" />
              <a;
                href="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                Our Services;
                <ArrowRight className="w-5 h-5" />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div, className="tex, t-4xl, font-bold, text-cya, n-400, mb-2">{sta, t.numbe, r}</di, v>
                  <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                  Our Mission;
                <p className="text-lg text-gray-300 mb-6"></p>
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                  improve efficiency, and create sustainable competitive advantages in the digital age.
                <p className="text-lg text-gray-300 mb-8"></p>
                  We believe technology should be accessible, powerful, and transformative. 
                  Our team of experts works tirelessly to deliver solutions that exceed expectations;
                  and deliver measurable results.
                <div className="flex flex-col sm:flex-row gap-4"></div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"></button>
                    Learn More;
                  <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"></button>
                    Contact Us;
              <div className="grid grid-cols-2 gap-6"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Brain className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Cutting-edge artificial intelligence solutions</p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Users className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-sm">50+ experienced professionals</p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Target className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300 text-sm">500+ successful projects</p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Award className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">Award Winning</h3>
                  <p className="text-gray-300 text-sm">Industry recognition and awards</p>

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
              <div></div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-6"></p>
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and;
                  transformative for organizations of all sizes.
                <p className="text-gray-300"></p>
                  Our team of experts combines deep technical knowledge with industry experience;
                  to deliver solutions that not only meet current needs but also prepare;
                  you for future challenges.
              <div className="text-center"></div>
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <Target className="w-12 h-12 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300"></p>
                  To be the leading provider of AI and IT solutions, recognized for our innovation, 
                  reliability, and commitment to client success. We envision a future where technology;
                  seamlessly integrates with business operations to create unprecedented value.

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{valu, e.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-30, 0">{valu, e.descriptio, n}</p>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Our Values;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                The principles that guide everything we do;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <Brain className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300"></p>
                  We constantly push the boundaries of what's possible with technology, 
                  always seeking new and better ways to solve complex problems.
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <Users className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300"></p>
                  We work closely with our clients as partners, ensuring their success;
                  is our success and building long-term relationships.
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <Target className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300"></p>
                  We strive for excellence in everything we do, delivering high-quality;
                  solutions that exceed expectations and drive real business value.

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"></p>
              Our diverse team of experts brings together decades of experience in AI, 
              cloud computing, cybersecurity, and software development.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Brain className="w-10 h-10 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Specialists</h3>
                <p className="text-gray-300">Machine learning engineers and data scientists</p>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Cloud className="w-10 h-10 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Architects</h3>
                <p className="text-gray-300">Infrastructure and cloud solution experts</p>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-10 h-10 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Security Experts</h3>
                <p className="text-gray-300">Cybersecurity and compliance specialists</p>

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Work With Us?
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss how we can help transform your business with AI and technology.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Get in Touch;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Ready to transform your business? Let's discuss how we can help you achieve your goals.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <Phone className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                <p className="text-gray-300 mb-2">+1 (302) 464-0950</p>
                <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <Mail className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <MapPin className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">Address</h3>
                <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>
  );

export default AboutPage;
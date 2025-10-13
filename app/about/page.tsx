import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Download, ExternalLink, ChevronRight, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  // Team members data (for future use)
  // const teamMembers = [
  //   {
  //     name: "Sarah Chen",
  //     role: "CEO & Co-Founder",
  //     expertise: "AI Strategy & Business Development",
  //     image: "/images/team/sarah-chen.jpg",
  //     bio: "15+ years in AI and machine learning, former Google AI researcher."
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "CTO & Co-Founder",
  //     expertise: "Cloud Architecture & Security",
  //     image: "/images/team/michael-rodriguez.jpg",
  //     bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
  //   },
  //   {
  //     name: "Emily Johnson",
  //     role: "Head of AI Research",
  //     expertise: "Machine Learning & Data Science",
  //     image: "/images/team/emily-johnson.jpg",
  //     bio: "PhD in Computer Science, specializing in deep learning and NLP."
  //   },
  //   {
  //     name: "David Kim",
  //     role: "Head of Engineering",
  //     expertise: "5G Technology & IoT",
  //     image: "/images/team/david-kim.jpg",
  //     bio: "Telecommunications expert with extensive experience in 5G implementation."
  //   }
  // ];

  // Company values (for future use)
  // const values = [
  //   {
  //     icon: <Brain className="w-8 h-8" />,
  //     title: "Innovation First",
  //     description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Security & Trust",
  //     description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Client Success",
  //     description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Excellence",
  //     description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  //   }
  // ];

  // Company stats (for future use)
  // const stats = [
  //   { number: "500+", label: "Projects Completed" },
  //   { number: "150+", label: "Happy Clients" },
  //   { number: "99.9%", label: "Uptime Guarantee" },
  //   { number: "24/7", label: "Support Available" }
  // ];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
          </p>
        </div>

        <section className="py-20 bg-slate-800 rounded-2xl mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
                  </p>
                </div>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative AI and IT solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
                  <
                <
              <
            <
          <
<
                These principles guide everything we do and shape our approach to innovation and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and solutions.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success journey.
                </p>
        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                <p className="text-gray-400">Leading AI researchers and engineers</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <span>Expert Team Support</span>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
            ))}
    </div>
  );
}

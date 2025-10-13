import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Clock,
  Code,
  BarChart3,
  Smartphone
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in AI and technology innovation',
      image: '/images/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in cloud infrastructure and AI systems',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'AI researcher with expertise in machine learning and natural language processing',
      image: '/images/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring enterprise-grade security for all solutions',
      image: '/images/team/emily.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional value',
      icon: Target,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we do',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Global Impact',
      description: 'We believe technology should make the world a better place for everyone',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Customers', icon: Users },
    { number: '50+', label: 'Micro SAAS Services', icon: Zap },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Globe },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '300%', label: 'Average ROI', icon: TrendingUp }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, micro SAAS services, and IT consulting. Founded in 2020, serving 1000+ customers worldwide." />
        <meta name="keywords" content="about us, AI company, IT solutions, micro saas, team, mission, values, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're a team of passionate technologists, AI researchers, and innovators 
                dedicated to transforming businesses through cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes 
                to leverage cutting-edge technology for growth and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Founded in 2020, Zion Tech Group has been at the forefront of the AI revolution, 
                developing micro SAAS services that make enterprise-grade technology accessible and affordable 
                for startups, SMBs, and large enterprises alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group p-8 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
              { name: 'Cloud', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
              { name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
              { name: 'APIs', icon: Code, color: 'from-green-500 to-teal-500' },
              { name: 'Analytics', icon: BarChart3, color: 'from-indigo-500 to-purple-500' },
              { name: '5G', icon: Smartphone, color: 'from-cyan-500 to-blue-500' }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business. 
              We're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start a Project
              </Link>
              <Link to="/services" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
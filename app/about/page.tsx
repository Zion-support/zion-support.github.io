import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, Award, Globe, Target, Brain, Code, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security',
      description: 'Security is at the core of everything we do. We implement enterprise-grade security measures to protect your data and systems.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication and shared success throughout every project.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive measurable results.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: '20+ years in technology leadership',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in AI and machine learning',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      description: 'Full-stack development specialist',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      description: 'UX/UI design and user experience',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and the team behind our innovative technology services." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a leading technology company specializing in AI and IT solutions. 
            Our mission is to transform businesses through innovative technology and exceptional service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we believe technology should empower businesses to achieve their full potential. 
                Our mission is to deliver cutting-edge AI and IT solutions that drive innovation, efficiency, and growth.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We combine deep technical expertise with a client-first approach to create solutions that not only 
                meet your current needs but also scale with your future ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Code className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                <p className="text-gray-300 text-sm">Advanced artificial intelligence services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Cloud className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
                <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade security solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Globe className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300 text-sm">Worldwide deployment and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak to our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              The experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
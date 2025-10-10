'use client';
import React from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Target, 
  Globe, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI researcher with 15+ years of experience in machine learning and quantum computing.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Former Google engineer specializing in cloud infrastructure and distributed systems.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science with expertise in neural networks and deep learning.',
      image: '/team/michael.jpg'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and data protection.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world a better place for everyone.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are a leading technology company specializing in AI solutions, quantum computing, 
            and digital transformation. Our mission is to help businesses harness the power of 
            cutting-edge technology to achieve unprecedented growth and success.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to advanced AI and technology solutions, enabling businesses 
                of all sizes to compete and thrive in the digital age. We believe that cutting-edge 
                technology should be accessible, understandable, and beneficial to everyone.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team of world-class engineers, researchers, and consultants work tirelessly 
                to develop innovative solutions that solve real-world problems and drive meaningful 
                business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Proven Expertise</h4>
                    <p className="text-gray-300">15+ years of experience in AI and technology solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Innovation Focus</h4>
                    <p className="text-gray-300">Cutting-edge research and development capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Client Success</h4>
                    <p className="text-gray-300">Dedicated to delivering exceptional results and ROI</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">24/7 Support</h4>
                    <p className="text-gray-300">Round-the-clock technical support and maintenance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, technology, and business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our expertise can help transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
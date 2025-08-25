import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Rocket, 
  Shield, 
  Brain, 
  Cpu,
  Building,
  Heart,
  Zap,
  Star
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security and compliance.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Rapid deployment and continuous improvement to keep you ahead of the competition.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      bio: 'Experts in artificial intelligence, machine learning, and autonomous systems.',
      image: '/images/team/ai-team.jpg'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Experts',
      bio: 'Dedicated professionals ensuring your digital assets remain secure and compliant.',
      image: '/images/team/security-team.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering the future of technology with AI-powered solutions that transform businesses and drive innovation across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge AI and technology solutions, enabling businesses of all sizes to thrive in the digital age through innovative, secure, and scalable solutions.
              </p>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Driving Digital Transformation</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the global leader in AI-powered business solutions, creating a future where technology seamlessly enhances human potential and drives sustainable growth across all industries.
              </p>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Shaping Tomorrow's Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2015, Zion Tech Group began as a small team of passionate technologists with a vision to make advanced AI and technology solutions accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Today, we've grown into a comprehensive technology partner, serving clients across 25+ countries with innovative solutions that drive real business value and competitive advantage.
              </p>
              <p className="text-lg text-gray-300">
                Our journey has been marked by continuous innovation, deep client relationships, and an unwavering commitment to excellence in everything we do.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                <Building className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join hundreds of companies that have already transformed their operations with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

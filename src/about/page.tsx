import React from 'react';
import { Brain, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const _team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical expert specializing in machine learning and cloud architecture.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.',
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic technology partners.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">50+ skilled professionals</p>
          </div>
          <div className="text-center">
            <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions</h3>
            <p className="text-gray-300">Tailored to your needs</p>
          </div>
          <div className="text-center">
            <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-300">Enterprise-grade security</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            To democratize access to advanced AI technology and empower businesses of all sizes 
            to leverage artificial intelligence for growth, efficiency, and innovation. We believe 
            that AI should be accessible, understandable, and beneficial to everyone.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in cutting-edge AI and ML solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Cloud Architecture Team',
      role: 'Cloud Solutions Architects',
      description: 'Certified professionals in AWS, Azure, and GCP platforms.',
      image: '/api/placeholder/300/300'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and support.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up">
            Leading the future of technology with innovative AI, micro SaaS, and enterprise solutions that transform businesses worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe technology should be accessible, secure, 
              and transformative for organizations of all sizes.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered technology solutions, creating a world 
              where every business can leverage advanced technology to achieve unprecedented 
              success and growth.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
=======
import React, { useState } from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      image: "👩‍💼",
      description: "Leading our AI initiatives with 15+ years of experience in machine learning and data science."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      expertise: "Cloud Architecture",
      image: "👨‍💻",
      description: "Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments."
    },
    {
      name: "Emily Johnson",
      role: "Security Director",
      expertise: "Cybersecurity",
      image: "👩‍🔬",
      description: "Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements."
    },
    {
      name: "David Kim",
      role: "Product Manager",
      expertise: "Digital Transformation",
      image: "👨‍💼",
      description: "Driving product strategy and digital transformation initiatives for our enterprise clients."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            We are a leading technology company specializing in AI solutions, cybersecurity, 
            and cloud infrastructure. Our mission is to transform businesses through 
            innovative technology solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {[
            { id: 'mission', label: 'Our Mission' },
            { id: 'team', label: 'Our Team' },
            { id: 'values', label: 'Our Values' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'mission' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                title="Our Mission"
                description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age."
                icon="🎯"
              />
              <Card
                title="Our Vision"
                description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world."
                icon="🚀"
              />
            </div>
          )}

          {activeTab === 'team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  title={member.name}
                  description={member.description}
                  icon={member.image}
                  className="text-center"
                >
                  <div className="mt-4">
                    <p className="text-cyan-400 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.expertise}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Innovation"
                description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve complex problems."
                icon="💡"
              />
              <Card
                title="Excellence"
                description="We maintain the highest standards in everything we do, from our code quality to our customer service and support."
                icon="⭐"
              />
              <Card
                title="Integrity"
                description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners."
                icon="🤝"
              />
            </div>
          )}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        </div>
      </div>
    </div>
  );
};

export default About;
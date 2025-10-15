import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from development to support.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: '🤝'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.',
      icon: '👥'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      position: 'CEO & Founder',
      bio: 'Technology visionary with 15+ years of experience in AI and IT solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'AI and machine learning expert with a passion for innovative solutions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Engineering',
      bio: 'Full-stack developer and cloud architecture specialist.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of AI Research',
      bio: 'PhD in Computer Science with expertise in machine learning and NLP.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Zion Tech Group founded with a vision to democratize AI' },
    { year: '2021', event: 'Launched first AI-powered micro SaaS solutions' },
    { year: '2022', event: 'Expanded to serve 100+ clients across multiple industries' },
    { year: '2023', event: 'Introduced advanced cloud infrastructure services' },
    { year: '2024', event: 'Launched comprehensive AI service portfolio' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide innovative AI and IT solutions for businesses worldwide. Founded in 2020, we're transforming industries with cutting-edge technology." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions provider, technology team, company mission" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI and IT solutions that drive business growth and innovation across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge AI and IT solutions that transform their operations, 
                  drive sustainable growth, and create competitive advantages in the digital economy. We believe 
                  technology should be accessible, powerful, and transformative for organizations of all sizes.
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in AI and IT innovation, helping organizations achieve their digital 
                  transformation goals while building a more connected, intelligent, and efficient world. We envision 
                  a future where every business can leverage advanced technology to reach its full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Founded in 2020, Zion Tech Group emerged from a simple belief: every business deserves access to cutting-edge technology.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  What started as a small team of passionate technologists has grown into a comprehensive AI and IT solutions provider, 
                  serving businesses across multiple industries. Our journey began when our founder, Kleber Santos, recognized the gap 
                  between advanced technology and practical business applications.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, we combine deep technical expertise with business acumen to deliver solutions that not only work but drive 
                  real business value. From AI-powered micro SaaS applications to enterprise cloud infrastructure, we've helped 
                  hundreds of companies transform their operations and achieve unprecedented growth.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to innovation, excellence, and client success continues to drive us forward as we shape the future 
                  of business technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The talented individuals behind our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our growth and development
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                    <div className="ml-6">
                      <p className="text-lg text-gray-900">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Email: kleber@ziontechgroup.com
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Contact Form
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
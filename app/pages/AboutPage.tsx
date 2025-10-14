import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with security and reliability as core principles.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to implementation.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cybersecurity,
              cloud infrastructure, and digital transformation services.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation,
                enhance security, and accelerate digital transformation. We believe in the power
                of artificial intelligence and advanced IT solutions to solve complex business challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experts combines deep technical knowledge with industry experience
                to deliver solutions that not only meet current needs but also prepare businesses
                for future challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Expert team with proven track record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable and secure solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-300">Numbers that speak to our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, cybersecurity, 
              cloud computing, and digital transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & ML Experts</h3>
                <p className="text-gray-300">Specialists in machine learning, natural language processing, and computer vision</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security Professionals</h3>
                <p className="text-gray-300">Cybersecurity experts ensuring your data and systems are protected</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Architects</h3>
                <p className="text-gray-300">Infrastructure specialists designing scalable and secure cloud solutions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help transform your business
              and drive growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
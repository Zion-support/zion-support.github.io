import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Users, Award, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security is paramount in everything we do. We implement robust security measures to protect your data and systems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring solutions are tailored to their specific needs and goals.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in every project, exceeding expectations and driving results.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through cutting-edge technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              cybersecurity, and digital transformation services.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  enhance security, and accelerate digital transformation. We believe technology should 
                  be accessible, reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of expert developers, data scientists, and cybersecurity professionals 
                  work tirelessly to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-500/20 p-6 rounded-xl text-center">
                  <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">AI Expertise</h3>
                  <p className="text-gray-400 text-sm">Advanced machine learning and AI solutions</p>
                </div>
                <div className="bg-purple-500/20 p-6 rounded-xl text-center">
                  <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Cloud Solutions</h3>
                  <p className="text-gray-400 text-sm">Scalable cloud infrastructure and services</p>
                </div>
                <div className="bg-purple-500/20 p-6 rounded-xl text-center">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
                  <p className="text-gray-400 text-sm">Comprehensive security solutions</p>
                </div>
                <div className="bg-purple-500/20 p-6 rounded-xl text-center">
                  <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Quality</h3>
                  <p className="text-gray-400 text-sm">99% client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our 
              cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-500 text-purple-300 font-semibold py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

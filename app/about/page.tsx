'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team to ensure solutions that perfectly fit your needs.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and drive real results.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, cybersecurity, and custom software development." />
        <meta name="keywords" content="about us, company, AI solutions, cloud services, cybersecurity, software development, technology team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company specializing in artificial intelligence, cloud infrastructure, 
                cybersecurity, and custom software development solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and 
                  transformative for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of expert engineers, data scientists, and cybersecurity professionals 
                  work tirelessly to deliver solutions that not only meet your current needs but 
                  also scale with your future ambitions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Cloud className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Expertise</h3>
                  <p className="text-gray-300 text-sm">AWS, Azure, Google Cloud certified professionals</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Brain className="h-8 w-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Machine learning and AI solution specialists</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Shield className="h-8 w-8 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security implementations</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Code className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
                  <p className="text-gray-300 text-sm">Tailored software solutions for your business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help transform your business with 
                cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

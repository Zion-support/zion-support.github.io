'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, ArrowRight, Zap, Shield, Target, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and developing cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships and deliver solutions that drive real business value.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart automation', 'Predictive analytics', 'Intelligent insights', 'Automated processes']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom reports']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms and infrastructure.',
      benefits: ['Optimized performance', 'Fast response times', 'Scalable architecture', 'Efficient processing']
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      description: 'AI researcher with 15+ years of experience in machine learning and business strategy.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      description: 'Full-stack developer and cloud architecture expert with a passion for scalable solutions.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      description: 'PhD in Computer Science specializing in natural language processing and computer vision.',
      image: '/team/emily-rodriguez.jpg'
    },
    {
      name: 'David Kim',
      role: 'Lead Security Engineer',
      description: 'Cybersecurity expert with extensive experience in enterprise security solutions.',
      image: '/team/david-kim.jpg'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI and IT solutions. Meet our team of experts and discover our innovative approach." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To revolutionize the way businesses operate by providing cutting-edge AI and IT solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our unique approach combines technical expertise with business acumen to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Numbers that speak to our success and commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-cyan-100">{stat.label}</div>
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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, technology, and business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
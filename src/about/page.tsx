import React from 'react';
import { Users, Award, Target, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '300%', label: 'Average ROI' },
    { value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to give our clients a competitive edge.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships and tailor solutions to meet your specific business needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and project delivery.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and scalable solutions that grow with your business.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning, Deep Learning, Computer Vision',
      image: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      expertise: 'Cloud Architecture, DevOps, System Design',
      image: '👨‍💻'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Research',
      expertise: 'Quantum Computing, Advanced Analytics',
      image: '👨‍🔬'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      expertise: 'Project Management, Client Relations',
      image: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We are a leading provider of AI and IT solutions, dedicated to transforming businesses 
            through cutting-edge technology and innovative approaches.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To democratize AI and advanced technology, making it accessible and beneficial for 
              businesses of all sizes. We believe that every organization should have access to 
              cutting-edge solutions that can transform their operations and drive growth.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our team of experts combines deep technical knowledge with business acumen to deliver 
              solutions that not only work technically but also provide real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">
                AI Innovation
              </div>
              <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
                Enterprise Solutions
              </div>
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
                Digital Transformation
              </div>
            </div>
          </div>
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                  <p className="text-gray-300 text-sm">50+ successful projects with measurable results</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                  <p className="text-gray-300 text-sm">PhD-level experts in AI, ML, and IT infrastructure</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                  <p className="text-gray-300 text-sm">Round-the-clock support and monitoring</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-gray-300 text-sm">Solutions that grow with your business</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center cyber-card p-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the hundreds of companies that have already transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

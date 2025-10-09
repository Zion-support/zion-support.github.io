import React from 'react';
import { Brain, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: role,

      $4: 'CEO & Founder',
      image: bio,

      $4: 'Visionary leader with 15+ years in AI and technology innovation.',
    },
    {
      name: role,

      $4: 'CTO',
      image: bio,

      $4: 'Technical expert specializing in machine learning and cloud architecture.',
    },
    {
      name: role,

      $4: 'Lead AI Engineer',
      image: bio,

      $4: 'AI researcher and developer with expertise in deep learning and NLP.',
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, transforming businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize AI technology and make it accessible to businesses of all sizes, 
                  empowering them to achieve unprecedented growth and efficiency.
                </p>
                <p className="text-lg text-gray-300">
                  We believe in the transformative power of artificial intelligence and its potential 
                  to solve complex business challenges while creating sustainable value.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">Cutting-edge AI solutions</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-300">Quality-driven approach</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Intelligence</h3>
                  <p className="text-gray-300">Smart automation</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-gray-300">Enterprise-grade protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
                  <div className="w-24 h-24 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div> </div>);
};

export default AboutPage;
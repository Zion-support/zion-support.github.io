'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Users, Zap, Shield, Brain, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of world-class engineers, data scientists, and AI researchers with decades of combined experience.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Solutions',
      description: 'We leverage the latest technologies including quantum computing, machine learning, and advanced analytics.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Security is at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Our solutions are powered by advanced AI algorithms that learn and adapt to your business needs.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven',
      description: 'We use data analytics and insights to drive decision-making and optimize performance.'
    }
  ];

  return (
    <>
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
                We are a leading technology company specializing in AI solutions, quantum computing, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                To empower businesses with transformative AI and technology solutions that drive innovation, 
                efficiency, and growth. We believe in the power of technology to solve complex problems and 
                create a better future for all.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
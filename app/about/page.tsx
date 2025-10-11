'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const features = [
    {
      title: 'About Us',
      description: 'Learn more about Zion Tech Group and our mission.',
      benefits: ['Expert Team', 'Proven Track Record', 'Innovation Focus', 'Client Success']
    },
    {
      title: 'Our Mission',
      description: 'Delivering cutting-edge technology solutions to businesses worldwide.',
      benefits: ['Technology Excellence', 'Client Satisfaction', 'Innovation', 'Quality Service']
    },
    {
      title: 'Why Choose Us',
      description: 'Discover what makes us the preferred choice for technology solutions.',
      benefits: ['Expertise', 'Reliability', 'Innovation', 'Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn more about Zion Tech Group and our mission." />
        <meta name="keywords" content="about us, company, mission, team" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading provider of advanced AI and IT solutions for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center mx-auto">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
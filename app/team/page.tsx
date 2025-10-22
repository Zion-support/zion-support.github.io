import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Globe, Shield, Zap } from 'lucide-react';

const TeamPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide presence with local expertise and 24/7 support.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Our Team | Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative AI and IT solutions." />
        <meta name="keywords" content="team, experts, AI specialists, IT professionals, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the talented professionals who make Zion Tech Group a leader in AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Our Team Excels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default TeamPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions and IT services for modern businesses" />
      </Helmet>

      <div className="[^"]*">
        {/* Hero Section */}
        <section className="[^"]*">
          <div className="[^"]*">
            <h1 className="[^"]*">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                AI-Powered Solutions
              </span>
            </h1>
            <p className="[^"]*">
              We deliver cutting-edge artificial intelligence and IT solutions that drive innovation, 
              efficiency, and growth for businesses of all sizes.
            </p>
            <button className="[^"]*">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="[^"]*">
          <div className="[^"]*">
            <h2 className="[^"]*">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid md:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4"
                  <h3 className="text-xl font-semibold text-white mb-4"
                  <p className="text-gray-300"
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-white/5"
          <div className="container mx-auto"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-blue-400 mb-2"
                  <div className="text-gray-300"
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"
          <div className="container mx-auto text-center"
            <h2 className="text-4xl font-bold text-white mb-6"
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              Join hundreds of companies that trust Zion Tech Group for their AI and IT needs.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              Start Your Journey Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
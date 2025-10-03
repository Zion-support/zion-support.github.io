import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Shield, TrendingUp, Globe, Users, MapPin, Phone, Award, Mail } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of AI experts dedicated to transforming businesses through cutting-edge technology." />
        <meta name="keywords" content="about zion tech, AI company, technology team, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Transforming Businesses Through AI Innovation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're a team of passionate technologists dedicated to helping enterprises 
                harness the power of artificial intelligence for sustainable growth and competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                      <value.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Meet Our Team
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.description}
                    </p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
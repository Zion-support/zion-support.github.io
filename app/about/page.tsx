'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize the security and privacy of our clients\' data.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
      </Helmet>
      
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Ready to transform your business with our AI and IT solutions? Contact us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
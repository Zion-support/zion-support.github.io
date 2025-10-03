import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Target, Shield, TrendingUp, Globe } from 'lucide-react'

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
      title: 'Security & Reliability',
      description: 'Your data and systems are protected with enterprise-grade security measures and 99.9% uptime guarantee.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business, ensuring optimal performance as you expand.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with localized support and 24/7 availability.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are pioneers in AI and enterprise technology, delivering innovative solutions 
              that transform businesses and drive digital transformation across industries.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                To empower businesses with cutting-edge AI and technology solutions that drive 
                innovation, efficiency, and growth. We believe in the transformative power of 
                technology and its ability to solve complex business challenges.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">What We Do</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">AI & Machine Learning</h4>
                    <p className="text-gray-600">
                      We develop custom AI solutions including predictive analytics, 
                      natural language processing, and computer vision applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Enterprise Solutions</h4>
                    <p className="text-gray-600">
                      From cloud migration to digital transformation, we help businesses 
                      modernize their infrastructure and processes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Consulting & Strategy</h4>
                    <p className="text-gray-600">
                      Our experts provide strategic guidance on technology adoption, 
                      digital transformation, and innovation roadmaps.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Support & Maintenance</h4>
                    <p className="text-gray-600">
                      We offer comprehensive support services to ensure your systems 
                      run smoothly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our relationships with clients and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
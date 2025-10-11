import React from 'react';
import { CheckCircle, Users, Target, Award, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive edge.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality and reliability in every project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical practices, building long-term relationships based on trust.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: '15+ years in AI and enterprise technology leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Expert in 5G implementation and cloud architecture.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      description: 'PhD in Machine Learning with 10+ years experience.'
    },
    {
      name: 'David Kim',
      role: 'Lead Solutions Architect',
      description: 'Specialist in digital transformation and system integration.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering advanced AI and IT solutions." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 5G implementation, and enterprise IT services. Our mission is to help businesses harness the power of cutting-edge technology to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to advanced AI and IT technologies, enabling businesses of all sizes to compete in the digital economy. We believe technology should be accessible, reliable, and transformative.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Since our founding in 2020, we've helped over 500 companies transform their operations through innovative technology solutions. Our team of experts combines deep technical knowledge with business acumen to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Proven track record of successful implementations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Expert team with deep industry knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">24/7 support and maintenance services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Cutting-edge technology and methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Scalable solutions that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our expertise and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function About() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive business transformation.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We build long-term relationships with our clients, understanding their unique challenges and goals.'
    },
    {
      icon: '💡',
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring exceptional results.'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'We stay ahead of technology trends and continuously enhance our expertise and capabilities.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Technology visionary with over 15 years of experience in AI, cloud computing, and digital transformation.',
      image: '👨‍💼'
    },
    {
      name: 'AI & ML Team',
      role: 'Machine Learning Engineers',
      description: 'Expert data scientists and ML engineers specializing in AI solutions and predictive analytics.',
      image: '🤖'
    },
    {
      name: 'Cloud & DevOps',
      role: 'Infrastructure Specialists',
      description: 'Cloud architects and DevOps engineers focused on scalable, secure infrastructure solutions.',
      image: '☁️'
    },
    {
      name: 'Cybersecurity',
      role: 'Security Experts',
      description: 'Certified security professionals dedicated to protecting your digital assets and infrastructure.',
      image: '🔒'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to transform businesses through innovative technology.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Successfully delivered our first AI-powered business intelligence solutions to enterprise clients.'
    },
    {
      year: '2022',
      title: 'Cloud Expansion',
      description: 'Expanded services to include comprehensive cloud migration and DevOps solutions.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Recognized as a leading technology solutions provider in the Delaware region.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended our services to serve clients across multiple industries and geographies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to empowering businesses 
              with innovative solutions that drive growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap between 
                cutting-edge technology and practical business solutions. We recognized that many 
                organizations struggle to harness the full potential of emerging technologies like 
                AI, cloud computing, and cybersecurity.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple mission: to make advanced technology accessible, 
                understandable, and beneficial for businesses of all sizes. We believe that 
                innovation should drive growth, not complexity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve clients across various industries, helping them 
                navigate digital transformation, implement AI solutions, and build secure, 
                scalable technology infrastructure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses with innovative technology solutions that accelerate growth, 
                  enhance efficiency, and create sustainable competitive advantages in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals who make Zion Tech Group a trusted technology partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that mark our growth and commitment to technological excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

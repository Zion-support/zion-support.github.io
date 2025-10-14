import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly explore cutting-edge technologies to deliver innovative solutions that give our clients a competitive edge.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our commitment to quality and reliability ensures that every project we deliver meets the highest standards.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial consultation to final delivery and ongoing support.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader with 4+ years of experience in AI and IT solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in AI model development and deployment.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'IT Solutions Team',
      role: 'Infrastructure Specialists',
      description: 'Experienced professionals in cloud infrastructure and cybersecurity.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. Discover how we're transforming businesses with AI and IT solutions." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT solutions company, team, mission, values" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, values, and team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To democratize access to advanced AI and IT technologies, enabling businesses of all sizes to 
                  leverage cutting-edge solutions that drive growth, efficiency, and innovation.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe that technology should be accessible, reliable, and transformative. Our team of experts 
                  works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 p-8 rounded-2xl">
                <div className="text-center">
                  <HeartIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Passion for Innovation</h3>
                  <p className="text-gray-300">
                    We're driven by our passion for technology and its potential to transform businesses and improve lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Talented professionals dedicated to delivering exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-purple-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-300 text-center leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+1-302-464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

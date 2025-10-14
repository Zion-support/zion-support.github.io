import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: CpuChipIcon
    },
    {
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Reliability',
      description: 'We deliver consistent, high-quality solutions that you can depend on.',
      icon: CloudIcon
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Technology visionary with 10+ years in AI and IT solutions.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and cybersecurity solutions.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Specialist in machine learning and artificial intelligence.',
      image: '/team/michael.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI company, IT solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the Future of Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Founded in 2020, Zion Tech Group has been at the forefront of technological innovation, 
              delivering cutting-edge AI and IT solutions that transform businesses and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with innovative technology solutions that drive digital transformation, 
              enhance security, and accelerate growth in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
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

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/careers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

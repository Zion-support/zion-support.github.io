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

export default function AboutPage() {
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
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with security and stability as top priorities, ensuring your business runs smoothly.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business development.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in AI and cloud architecture.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and expertise in AI and IT solutions. Discover our team and company culture." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through innovative technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we've been at the forefront of digital transformation, 
              helping businesses leverage the power of AI and cutting-edge technology to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              To democratize access to advanced AI and IT solutions, enabling businesses of all sizes 
              to compete in the digital economy through innovative, scalable, and secure technology platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-6">What We Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Develop custom AI solutions tailored to your business needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Provide comprehensive cybersecurity services and solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Build scalable cloud infrastructure and migration services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Deliver end-to-end digital transformation consulting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading provider of AI-powered solutions that transform how businesses 
                  operate, compete, and grow in an increasingly digital world. We envision a future 
                  where technology seamlessly integrates with human potential to create unprecedented value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
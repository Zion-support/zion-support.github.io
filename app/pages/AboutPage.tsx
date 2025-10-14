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
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Security is at the core of everything we do, ensuring your data and systems are protected.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering results that exceed expectations.'
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
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business development.',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in AI and machine learning with a passion for innovation.',
      image: '/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Security',
      description: 'Cybersecurity specialist ensuring our clients stay protected.',
      image: '/images/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      description: 'Full-stack developer creating robust and scalable solutions.',
      image: '/images/team/emily-rodriguez.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, values, Zion Tech Group, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded in 2020, we've been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to cutting-edge technology solutions, enabling businesses 
                  of all sizes to compete and thrive in the digital age. We believe that every 
                  organization deserves access to world-class AI and IT solutions.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment is to deliver innovative, secure, and scalable solutions that 
                  drive real business value and sustainable growth for our clients.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-3" />
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-3" />
                    <span>Expert team of professionals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-3" />
                    <span>Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-3" />
                    <span>24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
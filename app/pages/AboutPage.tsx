import React from 'react';
import { Link } from 'react-router-dom';
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
  const values = [
    {
      icon: CheckCircleIcon,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'
    },
    {
      icon: UserGroupIcon,
      title: 'Client-Focused',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Growth',
      description: 'We are passionate about helping businesses grow and scale through innovative technology solutions.'
    }
  ];
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We are a leading provider of AI and IT solutions." />
        <meta name="keywords" content="about us, Zion Tech Group, mission, values, team, AI solutions, IT services" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company specializing in AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.
              </p>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, growth, and digital transformation. We believe in the power of AI and advanced IT solutions to solve complex business challenges and create lasting value.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of experts is dedicated to delivering exceptional results through innovative approaches, deep technical expertise, and unwavering commitment to client success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Expert team with deep technical knowledge</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Cutting-edge technology solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <PhoneIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
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

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and expertise in AI and IT solutions. Discover our team and company culture." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
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

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive 
                  innovation, efficiency, and growth. We believe technology should be 
                  accessible, powerful, and transformative.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Innovation-driven approach</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Client-focused solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Cutting-edge technology</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <StarIcon className="w-5 h-5 mr-3" />
                    Expert team with years of experience
                  </li>
                  <li className="flex items-center">
                    <StarIcon className="w-5 h-5 mr-3" />
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <StarIcon className="w-5 h-5 mr-3" />
                    Cutting-edge technology solutions
                  </li>
                  <li className="flex items-center">
                    <StarIcon className="w-5 h-5 mr-3" />
                    24/7 support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to transform your business with our AI and IT solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
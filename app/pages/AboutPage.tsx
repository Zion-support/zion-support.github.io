<<<<<<< HEAD
import React from 'react';
import { Helmet   } from 'react-helmet-async';
import { CheckCircleIcon,
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
  const features = [
    {
      icon: 'CheckCircleIcon',
      title: 'Proven Expertise',
      description: 'Over 5 years of experience in AI and IT solutions'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Expert Team',
      description: 'Skilled professionals with deep industry knowledge'
    },
    {
      icon: 'LightBulbIcon',
      title: 'Innovation Focus',
      description: 'Cutting-edge technology and creative solutions'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Security First',
      description: 'Robust security measures and compliance standards'
    },
    {
      icon: 'RocketLaunchIcon',
      title: 'Rapid Delivery',
      description: 'Fast implementation and quick time-to-market'
    },
    {
      icon: 'HeartIcon',
      title: 'Client Success',
      description: 'Dedicated to achieving your business goals'
    }
  ];
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];
  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and IT solutions expert with over 5 years of experience',
      image: '/images/team/kleber.jpg'
    },
    {
      name: 'Development Team',
      role: 'Software Engineers',
      description: 'Skilled developers specializing in modern technologies',
      image: '/images/team/developers.jpg'
    },
    {
      name: 'AI Specialists',
      role: 'AI Engineers',
      description: 'Experts in machine learning and artificial intelligence',
      image: '/images/team/ai-specialists.jpg'
    }
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions', cloud infrastructure, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise', innovation, and commitment to client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the talented individuals who make our success possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce

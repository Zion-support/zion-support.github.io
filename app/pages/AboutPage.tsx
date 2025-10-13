import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability in mind.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Technical expert specializing in machine learning and cloud architecture.'
    },
    {
      name: 'Mike Chen',
      role: 'Lead AI Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'AI researcher and engineer with expertise in deep learning and NLP.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Product strategist focused on user experience and market innovation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're transforming businesses through advanced AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to transforming businesses 
                through cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/services"
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and IT solutions, making them accessible 
                  to businesses of all sizes. We believe technology should empower, 
                  not complicate.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our mission is to bridge the gap between cutting-edge technology 
                  and practical business applications, helping organizations thrive 
                  in the digital age.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-semibold">500+</span>
                    <span className="text-gray-300">Projects Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">200+</span>
                    <span className="text-gray-300">Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8">
                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-300">
                      To be the leading provider of AI and IT solutions that transform 
                      how businesses operate, compete, and grow in the digital economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 group-hover:scale-105">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help your organization 
              achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/solutions"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

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
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Security is at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in technology and business development.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technology expert specializing in AI and cloud architecture.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      image: '/team/michael.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering innovative AI and IT solutions." />
        <meta name="keywords" content="about us, company, team, mission, values, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we have been at the forefront of technological innovation, helping businesses across various industries 
              leverage cutting-edge technology to achieve their goals and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              To empower businesses with innovative technology solutions that drive growth, enhance efficiency, 
              and create sustainable competitive advantages in the digital age.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in AI and IT solutions, recognized for our innovation, 
                  reliability, and commitment to client success.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Purpose</h3>
                <p className="text-gray-300">
                  We exist to bridge the gap between complex technology and business success, 
                  making advanced solutions accessible and actionable for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that speak to our success and commitment</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <UserGroupIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Our Team
                <HeartIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <PhoneIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
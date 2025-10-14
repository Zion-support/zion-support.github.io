import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const TeamPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Technology visionary with over 10 years of experience in AI and IT solutions.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and cybersecurity with a passion for innovation.',
      image: '/images/team/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarah_johnson'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning specialist focused on developing cutting-edge AI solutions.',
      image: '/images/team/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michael-chen',
      twitter: 'https://twitter.com/michael_chen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director with expertise in user experience and interface design.',
      image: '/images/team/emily-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      twitter: 'https://twitter.com/emily_rodriguez'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring scalable and reliable cloud solutions.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/david_kim'
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring timely delivery of complex solutions.',
      image: '/images/team/lisa-wang.jpg',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      twitter: 'https://twitter.com/lisa_wang'
    }
  ];

  const values = [
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great results.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Innovation',
      description: 'We continuously innovate and stay ahead of technology trends.'
    },
    {
      icon: BriefcaseIcon,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative AI and IT solutions." />
        <meta name="keywords" content="team, leadership, AI experts, IT professionals, technology team" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              cybersecurity, cloud computing, and digital transformation.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
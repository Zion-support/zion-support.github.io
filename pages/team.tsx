import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Users, Award, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in AI/ML and cloud architecture with a passion for innovation.',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      github: 'https://github.com/sarah-johnson',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Specialist in machine learning and autonomous systems development.',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michael-chen',
      github: 'https://github.com/michael-chen',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and market innovation.',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      image: '/team/emily-rodriguez.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
      icon: Brain
    },
    {
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and shared knowledge.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.',
      icon: Award
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind Zion Tech Group's innovative solutions. 
                We're passionate about technology and committed to delivering exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a 
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={`GitHub profile for ${member.name}`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-xl mb-8 opacity-90">
                We're always looking for talented individuals to join our mission of transforming businesses through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/careers"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="tel:+13024640950" className="hover:text-blue-400">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/company/zion-tech-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://github.com/zion-tech-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
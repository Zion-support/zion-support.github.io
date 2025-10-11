'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Linkedin, Mail, MapPin, Calendar, GraduationCap, Code, Brain, Cloud, Shield } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation, driving Zion Tech Group\'s mission to transform businesses through cutting-edge solutions.',
      image: '/team/kleber.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'AI research pioneer with PhD in Machine Learning, leading our technical vision and ensuring cutting-edge solutions for our clients.',
      image: '/team/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Research', 'Architecture']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems, ensuring our clients\' data and infrastructure remain secure.',
      image: '/team/marcus.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez-security',
      email: 'marcus@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    },
    {
      name: 'Emily Watson',
      role: 'Head of Cloud Solutions',
      bio: 'Cloud architecture specialist with expertise in AWS, Azure, and GCP, helping businesses scale and optimize their infrastructure.',
      image: '/team/emily.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson-cloud',
      email: 'emily@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'Scalability']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and ethical practices in all our engagements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & IT Professionals</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Our skilled professionals bring decades of experience in AI, cybersecurity, cloud computing, and digital transformation." />
        <meta name="keywords" content="team, experts, AI professionals, cybersecurity experts, cloud specialists, technology leaders" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the expert team behind Zion Tech Group's success" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of AI specialists, cybersecurity experts, and technology leaders 
              brings decades of combined experience to deliver exceptional results for our clients.
            </p>
          </section>

          {/* Team Members */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 text-lg mb-4">{member.role}</p>
                      <p className="text-gray-300 mb-4">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={member.linkedin}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is ready to help transform your business with cutting-edge AI and IT solutions. 
                Get in touch to start your journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Contact Our Team
                </a>
                <a
                  href="/careers"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TeamPage;

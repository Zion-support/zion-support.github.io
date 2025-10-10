import React from 'react';
import { Users, Mail, Phone, MapPin, Star, Award, Brain, Zap, Shield } from 'lucide-react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      avatar: 'KS',
      specialties: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      email: 'sarah@ziontechgroup.com',
      phone: '+1 302 464 0951',
      bio: 'Technical architect specializing in scalable AI solutions.',
      avatar: 'SJ',
      specialties: ['AI Architecture', 'Machine Learning', 'Cloud Computing']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      email: 'michael@ziontechgroup.com',
      phone: '+1 302 464 0952',
      bio: 'Leading researcher in quantum computing and advanced AI.',
      avatar: 'MC',
      specialties: ['Quantum AI', 'Research', 'Deep Learning']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="Our Team - Zion Tech Group | AI & Technology Experts"
        description="Meet our world-class team of AI experts, engineers, and innovators driving the future of technology at Zion Tech Group."
        keywords="AI team, technology experts, AI engineers, machine learning specialists, quantum computing experts"
      />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 particle-field"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                Meet Our
                <span className="block neon-text">Expert Team</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our world-class team of AI experts, engineers, and innovators are dedicated to 
                pushing the boundaries of technology and delivering exceptional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation at Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your AI and technology needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Visit our office:</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
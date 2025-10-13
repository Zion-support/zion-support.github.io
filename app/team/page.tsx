import React from 'react';
import { Linkedin, Mail, Github, Award, Users, Globe, Brain, Shield } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Passionate about transforming businesses through innovative solutions.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/klebersantos',
        email: 'kleber@ziontechgroup.com',
        github: 'https://github.com/klebersantos'
      },
      expertise: ['AI Strategy', 'Leadership', 'Innovation'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect with expertise in cloud infrastructure and AI systems. Leads our engineering team in building scalable solutions.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        email: 'sarah@ziontechgroup.com',
        github: 'https://github.com/sarahjohnson'
      },
      expertise: ['Cloud Architecture', 'AI Systems', 'DevOps'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      bio: 'AI researcher and data scientist with PhD in Machine Learning. Drives innovation in our AI algorithms and models.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        email: 'michael@ziontechgroup.com',
        github: 'https://github.com/michaelchen'
      },
      expertise: ['Machine Learning', 'Data Science', 'Research'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with deep understanding of user needs and market trends. Shapes our product roadmap and user experience.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/emilyrodriguez',
        email: 'emily@ziontechgroup.com',
        github: 'https://github.com/emilyrodriguez'
      },
      expertise: ['Product Strategy', 'UX Design', 'Market Analysis'],
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with expertise in modern web technologies. Leads our development team in building robust applications.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        email: 'david@ziontechgroup.com',
        github: 'https://github.com/davidkim'
      },
      expertise: ['Full-Stack Development', 'System Design', 'Team Leadership'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Marketing',
      bio: 'Marketing strategist with expertise in digital marketing and brand building. Drives our growth and market presence.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        email: 'lisa@ziontechgroup.com',
        github: 'https://github.com/lisawang'
      },
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth'],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: <Users className="w-8 h-8" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '25+', label: 'Countries Served', icon: <Globe className="w-8 h-8" /> },
    { number: '1000+', label: 'Projects Completed', icon: <Brain className="w-8 h-8" /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Our Team - Zion Tech Group | Meet the Experts"
        description="Meet the talented team behind Zion Tech Group. Our experts in AI, engineering, and business are dedicated to delivering exceptional solutions."
        keywords="team, experts, AI team, engineering team, leadership, company culture"
        canonical="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The brilliant minds behind Zion Tech Group. We're a diverse team of innovators, engineers, and visionaries working together to transform the future of technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in AI, technology, and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/careers"
            >
              View Open Positions
            </FuturisticButton>
            <FuturisticButton
              variant="outline"
              size="lg"
              to="/contact"
            >
              Get in Touch
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
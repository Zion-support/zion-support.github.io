import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Projects Delivered', value: '500+', icon: Target },
    { label: 'Team Members', value: '100+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Technologies', value: '50+', icon: Zap },
    { label: 'Security Certifications', value: '10+', icon: Shield }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and cutting-edge solutions.',
      icon: Zap
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We work as an extension of your team, ensuring every solution drives real business value.',
      icon: Target
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with clients to understand their unique challenges.',
      icon: Users
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Leading our AI and quantum computing initiatives with 20+ years in advanced technology.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation',
      bio: 'Driving our R&D efforts and emerging technology partnerships.',
      image: '/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Scientist',
      bio: 'Pioneering breakthrough AI solutions and machine learning architectures.',
      image: '/team/emily-watson.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
            cutting-edge technology, and unparalleled expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage 
                the power of AI, quantum computing, and emerging technologies to drive innovation and growth.
              </p>
              <p className="text-lg text-gray-300">
                We believe that technology should be accessible, understandable, and transformative for every organization.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the leading force in technological innovation, creating a future where AI and advanced technologies 
                enhance human potential and solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-300">
                We envision a world where technology serves humanity, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            >
              Start a Conversation
            </Link>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

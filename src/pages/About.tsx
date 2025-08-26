
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former AI researcher at Stanford, leading Zion Tech Group\'s vision for AI-powered business transformation.',
      expertise: ['AI Strategy', 'Business Transformation', 'Research Leadership'],
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: '20+ years in enterprise architecture, specializing in cloud infrastructure and cybersecurity solutions.',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'Enterprise Systems'],
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning, leading our AI research initiatives and autonomous systems development.',
      expertise: ['Machine Learning', 'AI Research', 'Autonomous Systems'],
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      bio: 'Operations expert with deep experience in scaling technology companies and managing global teams.',
      expertise: ['Operations Management', 'Team Leadership', 'Process Optimization'],
      image: '/api/placeholder/300/300'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and novel approaches.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by the tangible results we deliver for your business.',
      icon: '🎯'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from working together - with our clients, partners, and within our team.',
      icon: '🤝'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Zion Tech Group established with focus on AI and emerging technologies' },
    { year: '2021', event: 'First AI Solution', description: 'Launched our flagship AI-powered business intelligence platform' },
    { year: '2022', event: 'Enterprise Expansion', description: 'Secured partnerships with Fortune 500 companies' },
    { year: '2023', event: 'Quantum Initiative', description: 'Started research into quantum computing applications' },
    { year: '2024', event: 'Global Reach', description: 'Expanded operations to serve clients across 15 countries' },
    { year: '2025', event: 'AI Autonomous Systems', description: 'Launched revolutionary autonomous business operations platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
            About Zion Tech Group
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pioneering the Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded in 2020, Zion Tech Group has emerged as a leading force in AI-powered business solutions, 
            quantum computing research, and digital transformation. We're not just consultants; we're your 
            strategic partners in navigating the complex landscape of emerging technologies.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize access to cutting-edge AI and quantum technologies, enabling businesses of all sizes 
                to leverage the power of autonomous systems and intelligent automation for unprecedented growth and efficiency.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where AI and quantum computing work seamlessly together to solve humanity's greatest challenges, 
                creating sustainable, efficient, and intelligent business ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Milestones */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones that have shaped Zion Tech Group into the company we are today
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals passionate about technology and committed to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">AI Solutions Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">15</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-xl border border-blue-400/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions for unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with technology, always seeking innovative solutions to complex challenges.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code quality to client relationships.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust through reliable and ethical business practices.",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, both within our team and with our clients.",
      icon: "🤲"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Serving businesses across various industries"
    },
    {
      number: "1000+",
      label: "Projects Delivered",
      description: "Successfully completed technology solutions"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Deep expertise in technology consulting"
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      description: "Reliable infrastructure and support"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "AI/ML, Cloud Architecture, Digital Transformation",
      experience: "15+ years in enterprise technology",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Security Architecture, Compliance, Threat Intelligence",
      experience: "12+ years in cybersecurity",
      avatar: "MR"
    },
    {
      name: "Jennifer Kim",
      role: "VP of Cloud Solutions",
      expertise: "Cloud Migration, DevOps, Infrastructure",
      experience: "10+ years in cloud computing",
      avatar: "JK"
    },
    {
      name: "David Thompson",
      role: "Director of AI Solutions",
      expertise: "Machine Learning, NLP, Computer Vision",
      experience: "8+ years in AI development",
      avatar: "DT"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management", icon: "🔒" },
    { name: "SOC 2 Type II", description: "Security and Availability Controls", icon: "🛡️" },
    { name: "Microsoft Gold Partner", description: "Cloud Platform & Application Development", icon: "☁️" },
    { name: "AWS Advanced Partner", description: "Cloud Infrastructure & Migration", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate technologists dedicated to helping businesses 
            navigate the complex landscape of modern technology and achieve digital transformation success.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2010, Zion Tech Group began with a simple mission: to make cutting-edge 
                  technology accessible and beneficial for businesses of all sizes. What started as a 
                  small team of passionate developers has grown into a comprehensive technology 
                  consulting firm serving clients across the globe.
                </p>
                <p>
                  Over the years, we've witnessed the rapid evolution of technology and have been at 
                  the forefront of implementing innovative solutions. From the early days of cloud 
                  computing to the current AI revolution, we've consistently delivered value to our 
                  clients through expertise, innovation, and unwavering commitment to excellence.
                </p>
                <p>
                  Today, we're proud to serve over 500 clients across various industries, helping them 
                  leverage technology to drive growth, improve efficiency, and stay ahead of the competition.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">Z</span>
                  </div>
                  <p className="text-white/80 text-lg">Innovation • Excellence • Growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations with cutting-edge technology solutions that enable growth, 
                efficiency, and innovation in an ever-evolving digital world. We strive to be the 
                trusted technology partner that businesses turn to for transformative solutions.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology consulting firm that shapes the future of business 
                through innovative AI, cloud, and cybersecurity solutions. We envision a world 
                where every organization can harness the full potential of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that tell the story of our success and impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{achievement.label}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals passionate about technology and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-medium mb-3">{member.role}</div>
                <div className="text-gray-300 text-sm mb-3">{member.expertise}</div>
                <div className="text-gray-400 text-xs">{member.experience}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Certifications & Partnerships</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry recognition and strategic partnerships that validate our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 text-center border border-blue-400/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and innovative solutions can help transform your business 
            and drive success in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

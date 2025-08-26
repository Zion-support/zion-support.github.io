
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. Discover our mission, values, and team." />
        <meta name="keywords" content="Zion Tech Group, technology solutions, AI services, digital transformation, IT consulting, cybersecurity, cloud services" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of technology with cutting-edge AI solutions, innovative digital transformation services, and world-class expertise that drives business success.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To empower businesses with transformative technology solutions that drive innovation, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that technology should be an enabler, not a barrier. Our solutions are 
                  designed to simplify complex challenges and unlock new possibilities for growth.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading force in technological innovation, creating a future where 
                  businesses thrive through intelligent, sustainable, and human-centric technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
                  icon: "🚀"
                },
                {
                  title: "Excellence",
                  description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
                  icon: "⭐"
                },
                {
                  title: "Integrity",
                  description: "We build trust through honest communication, ethical practices, and reliable partnerships.",
                  icon: "🤝"
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
                  icon: "🤝"
                },
                {
                  title: "Customer Focus",
                  description: "Our clients' success is our success. We're committed to understanding and exceeding their needs.",
                  icon: "🎯"
                },
                {
                  title: "Sustainability",
                  description: "We develop solutions that are not only effective today but sustainable for future generations.",
                  icon: "🌱"
                }
              ].map((value, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Expert Team Members" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kleber Santos",
                  role: "CEO & Founder",
                  bio: "Visionary leader with over 15 years of experience in technology innovation and business transformation.",
                  image: "/images/team/kleber-santos.jpg"
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  bio: "Technology expert specializing in AI, cloud architecture, and digital transformation strategies.",
                  image: "/images/team/sarah-chen.jpg"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Engineering",
                  bio: "Experienced engineer leading our development teams in creating cutting-edge solutions.",
                  image: "/images/team/michael-rodriguez.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies that trust Zion Tech Group to drive their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

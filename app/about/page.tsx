import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that exceed expectations and drive measurable results.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Global Impact",
      description: "We believe technology should make the world better. Our solutions are designed to create positive impact at scale.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology and business transformation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Technology expert specializing in AI, cloud architecture, and digital innovation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of AI Solutions",
      bio: "AI researcher and practitioner with expertise in machine learning and automation.",
      image: "/api/placeholder/300/300"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "10,000+", label: "Active Users" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI and IT Solutions Company"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI solutions, IT services, and digital transformation for businesses worldwide."
        keywords="about zion tech group, AI company, IT solutions, technology team, digital transformation, business innovation"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology company specializing in AI-powered solutions, 
              IT services, and digital transformation. Our mission is to empower businesses 
              with cutting-edge technology that drives growth and innovation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to advanced technology and empower businesses of all sizes 
                with AI-powered solutions that drive real value. We believe technology should be 
                accessible, powerful, and transformative.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From startups to enterprise organizations, we provide the tools, expertise, 
                and support needed to navigate the digital landscape and achieve sustainable growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">World-class engineers and consultants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Award className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm">Track record of successful implementations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Target className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">Cutting-edge technology solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300 text-sm">Serving clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals behind our innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-44 h-44 rounded-full bg-gray-700 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
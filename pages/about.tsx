import React from 'react';
import Link from 'next/link';
import { CheckCircle, Users, Award, Target, Zap, Shield, Heart, Globe, TrendingUp, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="text-blue-600" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business success."
    },
    {
      icon: <Shield className="text-green-600" />,
      title: "Reliability",
      description: "Our commitment to quality and reliability ensures that our solutions stand the test of time and deliver consistent results."
    },
    {
      icon: <Heart className="text-red-600" />,
      title: "Passion",
      description: "We are passionate about technology and helping our clients achieve their goals through innovative solutions."
    }
  ];

  const teamMembers = [
    {
      image: <Users className="text-blue-600 mx-auto" />,
      name: "Alex Johnson",
      role: "CEO & Founder",
      expertise: "Strategic Leadership",
      description: "Visionary leader with 15+ years in tech innovation."
    },
    {
      image: <Zap className="text-purple-600 mx-auto" />,
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Technical Architecture",
      description: "Expert in scalable systems and cloud infrastructure."
    },
    {
      image: <Globe className="text-green-600 mx-auto" />,
      name: "Michael Rodriguez",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      description: "Passionate about creating seamless user experiences."
    },
    {
      image: <Award className="text-orange-600 mx-auto" />,
      name: "Emily Davis",
      role: "UX Designer",
      expertise: "User Experience",
      description: "Crafts intuitive interfaces that users love."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Zion Tech</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                To empower businesses with innovative technology solutions that drive growth, efficiency and success in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get In Touch
                <CheckCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                View Our Work
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zion Tech</h3>
              <p className="text-gray-600">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Web Development</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Mobile Apps</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
              <p className="text-gray-600 mb-2">hello@ziontech.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-500">&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
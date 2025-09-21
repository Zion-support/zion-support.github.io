import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in enterprise technology and AI innovation",
      expertise: ["AI Strategy", "Enterprise Architecture", "Team Leadership"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the value we deliver to our clients.",
      icon: "🎯"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest pricing, and transparent processes throughout every project.",
      icon: "🔍"
    },
    {
      title: "Quality Assurance",
      description: "Enterprise-grade solutions with rigorous testing and quality control measures.",
      icon: "✅"
    }
  ];

  const stats = [
    { number: "1000%", label: "ROI Target" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through AI, IT solutions, and micro SaaS development. Meet our experienced team." />
        <meta name="keywords" content="about, team, mission, AI company, IT services, micro SaaS" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                  Zion Tech Group
                </span>
              </Link>
              <div className="hidden md:flex space-x-8">
<<<<<<< HEAD
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-white font-semibold">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
=======
                <Link href="/">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text-white font-semibold cursor-pointer">About</span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
>>>>>>> eb27c99c79d217f9b0efb8a5696b9ac45618d951
              </div>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a technology company dedicated to transforming businesses through innovative AI solutions, 
              enterprise IT services, and rapid micro SaaS development.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize cutting-edge technology by making AI solutions, enterprise IT services, 
                  and micro SaaS development accessible to businesses of all sizes. We believe that every 
                  organization deserves access to world-class technology solutions that drive real, 
                  measurable results.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
              <div className="grid md:grid-cols-1 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-cyan-400 text-lg mb-4">{member.role}</p>
                      <p className="text-gray-300 mb-6">{member.bio}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Info Section */}
          <section>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-center mb-8">Company Information</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Founded</h3>
                    <p className="text-gray-300">2020</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Headquarters</h3>
                    <p className="text-gray-300">Middletown, Delaware, USA</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Specialties</h3>
                    <p className="text-gray-300">AI Solutions, Enterprise IT, Micro SaaS Development</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Industry Focus</h3>
                    <p className="text-gray-300">Technology, Healthcare, Finance, E-commerce</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-gray-300 mb-8">Let's discuss how we can help transform your business.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
                <a href="/services-advertising" className="border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Our Services
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
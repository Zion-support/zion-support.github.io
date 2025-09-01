import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We build trust through honest communication and reliable delivery.",
      icon: "🔒"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology and business transformation.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Technology expert specializing in AI, cloud architecture, and emerging technologies.",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director focused on user experience and digital innovation.",
      image: "/team/emily.jpg"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Senior engineer with expertise in scalable systems and modern development practices.",
      image: "/team/david.jpg"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals committed to excellence"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Decades of combined expertise in technology"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction rates from our clients"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, team, and commitment to delivering innovative technology solutions for businesses worldwide." />
        <meta name="keywords" content="about Zion Tech Group, company history, mission, values, team, technology company" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of technology solutions with innovation, expertise, and unwavering commitment to client success
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Zion Tech Group began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a comprehensive technology solutions provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past decade, we've helped hundreds of companies transform their digital presence, streamline operations, and achieve remarkable growth through innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible, combining deep technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-6xl font-bold">Z</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Zion Tech Group</h3>
                <p className="text-gray-600">Est. 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner for businesses worldwide, known for innovation, reliability, and transformative solutions that shape the future of digital business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{achievement.label}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your technology goals and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pioneering the
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Future of Technology
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              At Zion Tech Group, we're not just building technology—we're building the future. 
              Our mission is to democratize advanced technology, making cutting-edge AI, quantum computing, 
              and space technology accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To democratize advanced technology and empower businesses with the tools they need to thrive 
                in the digital age. We believe that cutting-edge technology should be accessible to everyone, 
                not just the largest corporations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Through our innovative platforms and solutions, we're helping businesses of all sizes 
                leverage the power of AI, quantum computing, and space technology to solve complex challenges 
                and drive unprecedented growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                A world where advanced technology is seamlessly integrated into every business operation, 
                enabling unprecedented innovation, efficiency, and growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Universal AI adoption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Quantum-secure infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Space-enabled business solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              World-class experts with decades of combined experience in AI, quantum computing, and space technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-slate-100 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From startup to industry leader, here are the key milestones in our company's growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white/70 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Future?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/portfolio"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}
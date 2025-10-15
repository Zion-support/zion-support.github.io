import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, value: "1000+", label: "Projects Completed" },
    { icon: <Shield className="w-8 h-8" />, value: "99.9%", label: "Uptime Guarantee" },
    { icon: <Zap className="w-8 h-8" />, value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Mission-Driven",
      description: "We are committed to delivering innovative AI and IT solutions that transform businesses and drive growth."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Client-Centric",
      description: "Our success is measured by our clients' success. We build lasting partnerships based on trust and results."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to deliver cutting-edge AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, AI company, IT services, technology team, innovation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a leading technology company specializing in AI-powered solutions, 
                IT services, and digital transformation. Our mission is to help businesses 
                harness the power of cutting-edge technology to achieve their goals.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with innovative AI and IT solutions that drive growth, 
                  efficiency, and competitive advantage. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of experts combines deep technical knowledge with business acumen 
                  to deliver solutions that not only meet today&apos;s needs but anticipate 
                  tomorrow&apos;s challenges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the world&apos;s most trusted partner for AI and IT transformation, 
                  helping organizations of all sizes unlock their full potential through 
                  innovative technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                IT, and business transformation.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Leadership</h3>
                <p className="text-gray-300 mb-6">
                  Led by industry veterans with proven track records in technology innovation 
                  and business growth. Our team combines technical expertise with strategic 
                  vision to deliver exceptional results.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">AI & Machine Learning</span>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">Cloud Architecture</span>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">Cybersecurity</span>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">DevOps</span>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">Data Analytics</span>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full">5G Technology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let&apos;s discuss how our AI and IT solutions can transform your business. 
                Get in touch for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
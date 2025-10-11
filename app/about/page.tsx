'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Users, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      image: "/team/kleber-santos.jpg",
      bio: "Visionary leader with 15+ years in AI and technology innovation.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "/team/sarah-chen.jpg",
      bio: "AI research expert with PhD in Machine Learning from MIT.",
      expertise: ["Machine Learning", "AI Research", "Technical Architecture"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      image: "/team/michael-rodriguez.jpg",
      bio: "Full-stack engineer with expertise in cloud infrastructure and DevOps.",
      expertise: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Solutions",
      image: "/team/emily-johnson.jpg",
      bio: "AI specialist focused on practical business applications and implementation.",
      expertise: ["AI Implementation", "Data Science", "Business Intelligence"]
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
      description: "We believe in open communication, clear processes, and honest feedback throughout every project.",
      icon: "🔍"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do we. We invest heavily in learning and development.",
      icon: "📚"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses. Meet our expert team and discover our mission." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, technology team, company mission" />
        <meta property="og:title" content="About Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Learn about our mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions with a mission to transform businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">
                  About <span className="text-cyan-400">Zion Tech Group</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>500+ Projects Completed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>99% Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                      efficiency, and innovation. We believe technology should be accessible, 
                      understandable, and transformative.
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                      Our team of experts combines deep technical knowledge with business acumen 
                      to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="/contact" 
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                      >
                        Get in Touch
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a 
                        href="/services" 
                        className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                      <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
                      <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                      <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-300">Experienced professionals in AI and IT</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                      <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Client Focus</h3>
                      <p className="text-gray-300">Dedicated to your success</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                      <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                      <p className="text-gray-300">Track record of success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    These core values guide everything we do and shape how we work with our clients and each other.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-800/70 transition-colors">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our diverse team of experts brings together decades of experience in AI, 
                    technology, and business innovation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-6 text-center hover:bg-slate-700/70 transition-colors">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                      <div className="space-y-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="inline-block bg-slate-600 text-gray-300 text-xs px-2 py-1 rounded mr-1 mb-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI and IT solutions can transform your business. 
                  Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
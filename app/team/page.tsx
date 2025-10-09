import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "20+ years in AI and enterprise technology leadership. Former CTO at Fortune 500 companies.",
      image: "JD",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      expertise: ["AI Strategy", "Enterprise Architecture", "Leadership"]
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in machine learning and quantum computing. PhD in Computer Science from MIT.",
      image: "JS",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      expertise: ["Machine Learning", "Quantum Computing", "Research"]
    },
    {
      name: "Mike Johnson",
      role: "VP of Engineering",
      bio: "Specialist in scalable AI infrastructure and DevOps. 15+ years building enterprise systems.",
      image: "MJ",
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      expertise: ["DevOps", "Infrastructure", "Scalability"]
    },
    {
      name: "Sarah Wilson",
      role: "Head of AI Research",
      bio: "Leading AI researcher with focus on natural language processing and computer vision.",
      image: "SW",
      linkedin: "https://linkedin.com/in/sarahwilson",
      github: "https://github.com/sarahwilson",
      twitter: "https://twitter.com/sarahwilson",
      expertise: ["NLP", "Computer Vision", "Deep Learning"]
    },
    {
      name: "David Chen",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity expert with 18+ years protecting enterprise systems and data.",
      image: "DC",
      linkedin: "https://linkedin.com/in/davidchen",
      github: "https://github.com/davidchen",
      twitter: "https://twitter.com/davidchen",
      expertise: ["Cybersecurity", "Compliance", "Risk Management"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product strategist with focus on AI-powered solutions and user experience.",
      image: "ER",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      expertise: ["Product Strategy", "UX Design", "AI Applications"]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance in every solution we deliver."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project and interaction."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Meet the expert team at Zion Tech Group. Our AI and IT professionals are dedicated to delivering cutting-edge solutions for your business." />
        <meta name="keywords" content="team, AI experts, IT professionals, leadership, Zion Tech Group, technology team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Our Team
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Meet the brilliant minds behind Zion Tech Group. Our diverse team of AI experts, 
                engineers, and innovators is dedicated to transforming your business with cutting-edge technology.
              </p>
            </div>
          </section>

          {/* Team Members */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{member.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Values */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <value.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for AI and technology. 
                Join us in building the future of enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
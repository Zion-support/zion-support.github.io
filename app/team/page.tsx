import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      bio: '20+ years in AI and enterprise technology leadership. Former CTO at Fortune 500 companies.',
      image: '/images/team/john-doe.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe'
      },
      expertise: ['AI Strategy', 'Enterprise Leadership', 'Technology Innovation']
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Expert in machine learning and quantum computing. PhD in Computer Science from MIT.',
      image: '/images/team/jane-smith.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
        github: 'https://github.com/janesmith'
      },
      expertise: ['Machine Learning', 'Quantum Computing', 'AI Research']
    },
    {
      name: 'Mike Johnson',
      position: 'VP of Engineering',
      bio: 'Specialist in scalable AI infrastructure and DevOps. 15+ years building enterprise systems.',
      image: '/images/team/mike-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/mikejohnson',
        twitter: 'https://twitter.com/mikejohnson',
        github: 'https://github.com/mikejohnson'
      },
      expertise: ['DevOps', 'Infrastructure', 'Scalability']
    },
    {
      name: 'Sarah Wilson',
      position: 'Head of AI Research',
      bio: 'Leading AI researcher with expertise in natural language processing and computer vision.',
      image: '/images/team/sarah-wilson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahwilson',
        twitter: 'https://twitter.com/sarahwilson',
        github: 'https://github.com/sarahwilson'
      },
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    },
    {
      name: 'David Chen',
      position: 'Head of Security',
      bio: 'Cybersecurity expert with 18+ years protecting enterprise systems and data.',
      image: '/images/team/david-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/davidchen',
        twitter: 'https://twitter.com/davidchen',
        github: 'https://github.com/davidchen'
      },
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Head of Client Success',
      bio: 'Client success leader ensuring exceptional outcomes for all our enterprise clients.',
      image: '/images/team/lisa-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisarodriguez',
        twitter: 'https://twitter.com/lisarodriguez',
        github: 'https://github.com/lisarodriguez'
      },
      expertise: ['Client Relations', 'Project Management', 'Success Metrics']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and their outcomes.',
      icon: Target
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to client service.',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative problem-solving.',
      icon: Users
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Our diverse team of AI researchers, engineers, and consultants deliver cutting-edge solutions." />
        <meta name="keywords" content="team, AI experts, IT professionals, leadership, technology team, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Meet Our Team
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Our diverse team of AI researchers, engineers, and consultants brings together 
                decades of experience to deliver cutting-edge solutions for your business.
              </p>
            </div>
          </section>

          {/* Team Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Members */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300">Meet the experts driving our innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-3xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-600 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-600 transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-600 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
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
                Join us in building the future of intelligent systems.
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
                  href="mailto:careers@ziontechgroup.com"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
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
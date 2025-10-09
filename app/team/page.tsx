'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, Award, Zap, Brain, Shield, Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Star, TrendingUp, Globe } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'AI researcher with 15+ years of experience in machine learning and quantum computing. Led breakthrough research in neural networks and autonomous systems.',
      image: '👩‍💼',
      expertise: ['AI Research', 'Quantum Computing', 'Strategic Leadership'],
      linkedin: 'https://linkedin.com/in/sarah-johnson-ai'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Expert in autonomous systems and enterprise architecture with a focus on scalability. Previously led engineering teams at major tech companies.',
      image: '👨‍💻',
      expertise: ['Autonomous Systems', 'Enterprise Architecture', 'Cloud Computing'],
      linkedin: 'https://linkedin.com/in/michael-chen-cto'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of AI Research',
      bio: 'Leading researcher in natural language processing and computer vision applications. Published 50+ papers in top-tier AI conferences.',
      image: '👩‍🔬',
      expertise: ['NLP', 'Computer Vision', 'Machine Learning'],
      linkedin: 'https://linkedin.com/in/emily-rodriguez-ai'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer specializing in cloud infrastructure and distributed systems. Expert in building scalable, high-performance applications.',
      image: '👨‍🔧',
      expertise: ['Cloud Infrastructure', 'Distributed Systems', 'DevOps'],
      linkedin: 'https://linkedin.com/in/david-kim-engineering'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems. Certified in multiple security frameworks and threat intelligence.',
      image: '👩‍🔒',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      linkedin: 'https://linkedin.com/in/lisa-wang-security'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Data Science',
      bio: 'Data science leader specializing in predictive analytics and business intelligence. Transformed data strategies for Fortune 500 companies.',
      image: '👨‍📊',
      expertise: ['Data Science', 'Predictive Analytics', 'Business Intelligence'],
      linkedin: 'https://linkedin.com/in/james-rodriguez-data'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We develop AI solutions that are fair, transparent, and beneficial'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Team - Zion Tech Group"
        description="Meet the talented team of AI and IT experts at Zion Tech Group, driving innovation in enterprise technology solutions."
        keywords={['team', 'AI experts', 'IT professionals', 'technology team', 'leadership']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                The experts behind our innovative AI and IT solutions
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our diverse team of engineers, researchers, and strategists work together to deliver 
                cutting-edge technology solutions that transform businesses worldwide.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Members */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our mission of advancing AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>View Open Positions</span>
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Resume</span>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">(302) 464-0950</div>
                    <div className="text-gray-400 text-sm">Call us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                    <div className="text-gray-400 text-sm">Email us</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Middletown, DE</div>
                    <div className="text-gray-400 text-sm">Visit our office</div>
                  </div>
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
export default TeamPage;

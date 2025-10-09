'use client';
import React from 'react';
import { Linkedin, Mail, Github, Twitter, ArrowRight, Phone, MapPin, Clock, Award, Users, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Star, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      title: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Former Google AI researcher and serial entrepreneur.',
      image: '/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Machine Learning', 'Leadership', 'Innovation'],
      education: 'PhD Computer Science, MIT',
      experience: '15+ years'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'CTO & Co-Founder',
      bio: 'Leading AI researcher and former Microsoft AI director. Expert in quantum computing and neural networks.',
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Quantum Computing', 'Neural Networks', 'Research', 'Architecture'],
      education: 'PhD Quantum Physics, Stanford',
      experience: '12+ years'
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Engineering',
      bio: 'Full-stack engineering leader with expertise in scalable systems and cloud architecture.',
      image: '/team/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'Scalability', 'Team Leadership'],
      education: 'MS Computer Science, Carnegie Mellon',
      experience: '10+ years'
    }
  ];

  const aiTeam = [
    {
      name: 'Dr. Alex Kim',
      title: 'Lead AI Researcher',
      bio: 'Specialist in computer vision and natural language processing.',
      image: '/team/alex-kim.jpg',
      linkedin: 'https://linkedin.com/in/alexkim',
      expertise: ['Computer Vision', 'NLP', 'Deep Learning', 'Research'],
      education: 'PhD AI, MIT'
    },
    {
      name: 'Dr. Maria Gonzalez',
      title: 'Senior ML Engineer',
      bio: 'Expert in machine learning algorithms and data science.',
      image: '/team/maria-gonzalez.jpg',
      linkedin: 'https://linkedin.com/in/mariagonzalez',
      expertise: ['Machine Learning', 'Data Science', 'Algorithms', 'Python'],
      education: 'PhD Statistics, Berkeley'
    },
    {
      name: 'James Wilson',
      title: 'AI Solutions Architect',
      bio: 'Designs and implements AI solutions for enterprise clients.',
      image: '/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/jameswilson',
      expertise: ['Solution Architecture', 'AI Integration', 'Enterprise Systems', 'Consulting'],
      education: 'MS Computer Science, Georgia Tech'
    },
    {
      name: 'Dr. Priya Patel',
      title: 'Quantum Computing Specialist',
      bio: 'Leading our quantum computing research and development initiatives.',
      image: '/team/priya-patel.jpg',
      linkedin: 'https://linkedin.com/in/priyapatel',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Research', 'Physics'],
      education: 'PhD Quantum Physics, Caltech'
    }
  ];

  const itTeam = [
    {
      name: 'David Thompson',
      title: 'Head of Cloud Infrastructure',
      bio: 'Cloud architecture and infrastructure expert with AWS and Azure certifications.',
      image: '/team/david-thompson.jpg',
      linkedin: 'https://linkedin.com/in/davidthompson',
      expertise: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps'],
      education: 'MS Information Systems, NYU'
    },
    {
      name: 'Lisa Zhang',
      title: 'Cybersecurity Director',
      bio: 'Cybersecurity expert with extensive experience in enterprise security.',
      image: '/team/lisa-zhang.jpg',
      linkedin: 'https://linkedin.com/in/lisazhang',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance', 'Security Architecture'],
      education: 'MS Cybersecurity, Johns Hopkins'
    },
    {
      name: 'Robert Johnson',
      title: 'Senior DevOps Engineer',
      bio: 'DevOps and automation specialist with expertise in CI/CD pipelines.',
      image: '/team/robert-johnson.jpg',
      linkedin: 'https://linkedin.com/in/robertjohnson',
      expertise: ['DevOps', 'CI/CD', 'Automation', 'Kubernetes'],
      education: 'BS Computer Science, University of Washington'
    },
    {
      name: 'Jennifer Lee',
      title: 'Database Administrator',
      bio: 'Database optimization and management specialist.',
      image: '/team/jennifer-lee.jpg',
      linkedin: 'https://linkedin.com/in/jenniferlee',
      expertise: ['Database Management', 'SQL', 'Performance Tuning', 'Data Architecture'],
      education: 'MS Database Systems, University of Texas'
    }
  ];

  const supportTeam = [
    {
      name: 'Amanda Foster',
      title: 'Head of Customer Success',
      bio: 'Ensures client satisfaction and project success.',
      image: '/team/amanda-foster.jpg',
      linkedin: 'https://linkedin.com/in/amandafoster',
      expertise: ['Customer Success', 'Project Management', 'Client Relations', 'Strategy'],
      education: 'MBA, Wharton'
    },
    {
      name: 'Carlos Mendez',
      title: 'Technical Support Manager',
      bio: 'Leads our technical support and helpdesk operations.',
      image: '/team/carlos-mendez.jpg',
      linkedin: 'https://linkedin.com/in/carlosmendez',
      expertise: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Training'],
      education: 'BS Information Technology, Florida State'
    },
    {
      name: 'Rachel Green',
      title: 'Business Development Manager',
      bio: 'Drives business growth and strategic partnerships.',
      image: '/team/rachel-green.jpg',
      linkedin: 'https://linkedin.com/in/rachelgreen',
      expertise: ['Business Development', 'Partnerships', 'Sales', 'Strategy'],
      education: 'MBA, Harvard Business School'
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'PhD Holders', value: '15+', icon: GraduationCap },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Certifications', value: '100+', icon: Star },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Heart }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.',
      icon: Shield
    },
    {
      title: 'Growth',
      description: 'We invest in continuous learning and development for our team members.',
      icon: TrendingUp
    },
    {
      title: 'Impact',
      description: 'We focus on creating meaningful solutions that make a real difference.',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Our Team - Zion Tech Group"
        description="Meet the talented individuals behind Zion Tech Group. Our diverse team of AI researchers, engineers, and business experts work together to deliver cutting-edge solutions."
        keywords={['team', 'leadership', 'AI researchers', 'engineers', 'experts', 'about us', 'company culture', 'careers']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Meet the brilliant minds behind Zion Tech Group. Our diverse team of AI researchers, engineers, and business experts work together to deliver cutting-edge solutions.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{member.title}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 text-sm text-gray-400">
                  <p>{member.education}</p>
                  <p>{member.experience} experience</p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-cyan-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-cyan-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI Research Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTeam.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3 text-sm">{member.title}</p>
                <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-purple-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-800 text-purple-400 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-4">
                  <p>{member.education}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-purple-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            IT & Infrastructure Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itTeam.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-3 text-sm">{member.title}</p>
                <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-blue-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-800 text-blue-400 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-4">
                  <p>{member.education}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-blue-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Support & Business Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTeam.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-green-400 font-semibold mb-3 text-sm">{member.title}</p>
                <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-green-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-800 text-green-400 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-4">
                  <p>{member.education}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-green-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented individuals to join our mission of advancing AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="cyber-button px-8 py-4 text-lg font-semibold">
                View Open Positions
              </a>
              <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
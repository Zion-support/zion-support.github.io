'use client';
import React from 'react';
import { Brain, Mail, Linkedin, Github, Award, Users, Target, Zap, Shield, Code, BarChart, Cloud, Database, Settings, Phone, MapPin, ArrowRight, CheckCircle, Star, Globe, Cpu, Lock, MessageSquare, Eye, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, FileText, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former Google AI researcher and serial entrepreneur.',
      expertise: ['AI Strategy', 'Enterprise Solutions', 'Quantum Computing'],
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        email: 'kleber@ziontechgroup.com'
      },
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', 'TechCrunch Disrupt Winner']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'Leading AI researcher with PhD from MIT. Expert in machine learning, computer vision, and quantum algorithms.',
      expertise: ['Machine Learning', 'Computer Vision', 'Quantum Computing'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        github: 'https://github.com/sarah-chen',
        email: 'sarah@ziontechgroup.com'
      },
      achievements: ['IEEE Fellow', 'NeurIPS Best Paper', 'MIT Technology Review Innovator']
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Engineering',
      image: '/images/team/marcus-johnson.jpg',
      bio: 'Full-stack architect with expertise in scalable systems, cloud infrastructure, and DevOps automation.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      social: {
        linkedin: 'https://linkedin.com/in/marcus-johnson',
        github: 'https://github.com/marcus-johnson',
        email: 'marcus@ziontechgroup.com'
      },
      achievements: ['AWS Solutions Architect', 'Kubernetes Expert', 'Open Source Contributor']
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Head of AI Research',
      image: '/images/team/elena-rodriguez.jpg',
      bio: 'Neuroscience PhD turned AI researcher. Specializes in natural language processing and cognitive computing.',
      expertise: ['NLP', 'Cognitive Computing', 'Neural Networks'],
      social: {
        linkedin: 'https://linkedin.com/in/elena-rodriguez',
        email: 'elena@ziontechgroup.com'
      },
      achievements: ['Nature AI Research', 'ACL Outstanding Paper', 'Google Research Fellow']
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: '/images/team/david-kim.jpg',
      bio: 'Product strategist with deep understanding of enterprise needs and user experience design.',
      expertise: ['Product Strategy', 'UX Design', 'Enterprise Solutions'],
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        email: 'david@ziontechgroup.com'
      },
      achievements: ['Product of the Year 2023', 'Design Excellence Award', 'Customer Satisfaction Leader']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Security',
      image: '/images/team/lisa-thompson.jpg',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems and implementing compliance frameworks.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        email: 'lisa@ziontechgroup.com'
      },
      achievements: ['CISSP Certified', 'Security Excellence Award', 'Zero Breach Record']
    },
    {
      name: 'James Wilson',
      role: 'Head of Data Science',
      image: '/images/team/james-wilson.jpg',
      bio: 'Data science leader with expertise in big data analytics, predictive modeling, and business intelligence.',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence'],
      social: {
        linkedin: 'https://linkedin.com/in/james-wilson',
        email: 'james@ziontechgroup.com'
      },
      achievements: ['Kaggle Grandmaster', 'Data Science Excellence', 'ROI Optimization Expert']
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Operations',
      image: '/images/team/maria-garcia.jpg',
      bio: 'Operations leader ensuring smooth delivery of AI solutions and maintaining high service quality standards.',
      expertise: ['Operations', 'Project Management', 'Quality Assurance'],
      social: {
        linkedin: 'https://linkedin.com/in/maria-garcia',
        email: 'maria@ziontechgroup.com'
      },
      achievements: ['PMP Certified', 'Operational Excellence', 'Customer Success Leader']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      title: 'Customer Success',
      description: 'Our clients\' success is our primary measure of achievement',
      icon: Target,
      color: 'text-cyan-400'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do',
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together',
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles',
      icon: Shield,
      color: 'text-blue-400'
    },
    {
      title: 'Growth',
      description: 'We continuously learn, adapt, and evolve with technology',
      icon: TrendingUp,
      color: 'text-pink-400'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Our Team - Zion Tech Group"
        description="Meet the talented team of AI experts, engineers, and innovators driving the future of technology at Zion Tech Group."
        keywords={['team', 'leadership', 'AI experts', 'engineers', 'Zion Tech Group', 'technology team']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The brilliant minds behind Zion Tech Group's innovative AI solutions and cutting-edge technology
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Achievements:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-xs text-gray-300">
                        <Award className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-pink-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
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
                <value.icon className={`w-12 h-12 ${value.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Join Our Team
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for AI and innovation. 
            Explore our open positions and be part of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
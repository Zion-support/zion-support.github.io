'use client';
import React from 'react';
import { Users, Award, GraduationCap, Linkedin, Mail, Phone, MapPin, Star, CheckCircle, ArrowRight, Brain, Shield, Zap, Target, Globe, Code, BarChart, Settings, Heart, Briefcase, Clock, DollarSign, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      position: 'CEO & Founder',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology. Former Google AI researcher and serial entrepreneur.',
      expertise: ['AI Strategy', 'Technology Leadership', 'Business Development'],
      education: 'PhD in Computer Science, MIT',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', 'TechCrunch Disrupt Winner']
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'CTO & Co-Founder',
      image: '/images/team/sarah-chen.jpg',
      bio: 'Leading AI researcher and former Microsoft AI director. Expert in machine learning and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development'],
      education: 'PhD in Quantum Computing, Stanford',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      email: 'sarah@ziontechgroup.com',
      achievements: ['IEEE Fellow', 'Nature AI Research Award', 'Google Scholar Top 1%']
    },
    {
      name: 'Michael Rodriguez',
      position: 'VP of Engineering',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Full-stack engineering leader with expertise in scalable systems and cloud architecture.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      education: 'MS Computer Science, Carnegie Mellon',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      email: 'michael@ziontechgroup.com',
      achievements: ['AWS Solutions Architect', 'Docker Captain', 'Open Source Contributor']
    }
  ];

  const departments = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      teamSize: '25+',
      description: 'Our AI team develops cutting-edge machine learning models and AI solutions.',
      keyMembers: [
        { name: 'Dr. Alex Kim', role: 'Senior AI Researcher', expertise: 'Deep Learning' },
        { name: 'Lisa Wang', role: 'ML Engineer', expertise: 'Computer Vision' },
        { name: 'David Park', role: 'AI Product Manager', expertise: 'AI Strategy' }
      ]
    },
    {
      name: 'Software Engineering',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      teamSize: '30+',
      description: 'Full-stack developers building scalable and robust applications.',
      keyMembers: [
        { name: 'Jennifer Liu', role: 'Senior Full-Stack Developer', expertise: 'React/Node.js' },
        { name: 'Carlos Mendez', role: 'Backend Engineer', expertise: 'Python/Django' },
        { name: 'Emma Thompson', role: 'Frontend Specialist', expertise: 'TypeScript/Next.js' }
      ]
    },
    {
      name: 'Data Science & Analytics',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      teamSize: '15+',
      description: 'Data scientists and analysts turning data into actionable insights.',
      keyMembers: [
        { name: 'Dr. Maria Garcia', role: 'Lead Data Scientist', expertise: 'Predictive Analytics' },
        { name: 'James Wilson', role: 'Data Engineer', expertise: 'Big Data' },
        { name: 'Anna Petrov', role: 'Business Intelligence Analyst', expertise: 'Data Visualization' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30',
      teamSize: '12+',
      description: 'Security experts protecting our clients and infrastructure.',
      keyMembers: [
        { name: 'Robert Chen', role: 'Chief Security Officer', expertise: 'Threat Intelligence' },
        { name: 'Sofia Martinez', role: 'Security Engineer', expertise: 'Penetration Testing' },
        { name: 'Kevin O\'Brien', role: 'Compliance Specialist', expertise: 'Security Audits' }
      ]
    },
    {
      name: 'Product & Design',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      teamSize: '18+',
      description: 'Product managers and designers creating exceptional user experiences.',
      keyMembers: [
        { name: 'Rachel Green', role: 'VP of Product', expertise: 'Product Strategy' },
        { name: 'Tom Anderson', role: 'UX Designer', expertise: 'User Research' },
        { name: 'Nina Patel', role: 'UI Designer', expertise: 'Design Systems' }
      ]
    },
    {
      name: 'Operations & Support',
      icon: Settings,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      teamSize: '20+',
      description: 'Operations team ensuring smooth delivery and client success.',
      keyMembers: [
        { name: 'Mark Johnson', role: 'VP of Operations', expertise: 'Process Optimization' },
        { name: 'Sarah Davis', role: 'Client Success Manager', expertise: 'Account Management' },
        { name: 'Chris Lee', role: 'Technical Support Lead', expertise: 'Customer Support' }
      ]
    }
  ];

  const stats = [
    { label: 'Total Team Members', value: '120+', icon: Users },
    { label: 'Years Combined Experience', value: '1,200+', icon: Clock },
    { label: 'PhD Holders', value: '15+', icon: GraduationCap },
    { label: 'Industry Certifications', value: '200+', icon: Award },
    { label: 'Countries Represented', value: '25+', icon: Globe },
    { label: 'Client Satisfaction', value: '99%', icon: Star }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with technology.',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by our clients\' achievements and satisfaction.',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest heavily in learning and staying ahead of technology trends.',
      icon: GraduationCap,
      color: 'text-blue-400'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.',
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Award,
      color: 'text-purple-400'
    },
    {
      title: 'Integrity',
      description: 'We operate with complete transparency and ethical practices.',
      icon: Shield,
      color: 'text-cyan-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Meet Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We're a diverse team of innovators, engineers, and visionaries working together to build the future of AI and technology.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 neon-text">{leader.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{leader.position}</div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    {leader.education}
                  </div>
                  <div className="text-sm text-gray-400">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    {leader.experience} experience
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <a href={leader.linkedin} className="text-cyan-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${leader.email}`} className="text-cyan-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Achievements:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center">
                        <Award className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Departments
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${dept.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${dept.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <dept.icon className={`w-8 h-8 ${dept.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{dept.name}</h3>
                    <div className={`text-sm font-semibold ${dept.color}`}>{dept.teamSize} members</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{dept.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Members:</h4>
                  <ul className="space-y-2">
                    {dept.keyMembers.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-xs text-gray-400">{member.role} • {member.expertise}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Send Your Resume
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
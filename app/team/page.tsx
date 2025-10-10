'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Award, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  Zap,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Shield,
  Target,
  Activity,
  Clock,
  DollarSign,
  Mic,
  Heart,
  Mail,
  Bot,
  Palette,
  FileText,
  Settings,
  Lock,
  Eye,
  Music,
  FlaskConical
} from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning, Deep Learning, AI Research',
      experience: '15+ years',
      image: '/team/sarah-johnson.jpg',
      bio: 'Leading AI researcher with expertise in neural networks and machine learning algorithms.',
      achievements: ['PhD in Computer Science', '50+ Research Papers', 'AI Innovation Award 2023']
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Cloud Architecture, DevOps, System Design',
      experience: '12+ years',
      image: '/team/michael-chen.jpg',
      bio: 'Technology visionary with extensive experience in cloud infrastructure and scalable systems.',
      achievements: ['AWS Certified Solutions Architect', 'Cloud Migration Expert', 'Tech Leadership Award']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity, Risk Management, Compliance',
      experience: '10+ years',
      image: '/team/emily-rodriguez.jpg',
      bio: 'Cybersecurity expert with deep knowledge of threat detection and security architecture.',
      achievements: ['CISSP Certified', 'Security Expert', 'Cybersecurity Innovation Award']
    },
    {
      name: 'David Kim',
      role: 'Lead Software Engineer',
      expertise: 'Full-Stack Development, AI Integration, API Design',
      experience: '8+ years',
      image: '/team/david-kim.jpg',
      bio: 'Full-stack developer with expertise in building scalable applications and AI integration.',
      achievements: ['Senior Software Engineer', 'Open Source Contributor', 'Innovation Award']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product Management',
      expertise: 'Product Strategy, User Experience, Market Analysis',
      experience: '9+ years',
      image: '/team/lisa-wang.jpg',
      bio: 'Product management expert with a focus on user-centric design and market strategy.',
      achievements: ['MBA in Technology', 'Product Innovation Award', 'User Experience Expert']
    },
    {
      name: 'James Wilson',
      role: 'Lead Data Scientist',
      expertise: 'Data Analytics, Machine Learning, Business Intelligence',
      experience: '11+ years',
      image: '/team/james-wilson.jpg',
      bio: 'Data science expert specializing in predictive analytics and business intelligence solutions.',
      achievements: ['PhD in Statistics', 'Data Science Expert', 'Analytics Innovation Award']
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and cross-functional collaboration',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Team - AI & IT Experts | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Meet our team of AI and IT experts. Experienced professionals dedicated to delivering innovative solutions and exceptional service to our clients." 
        />
        <meta 
          name="keywords" 
          content="team, AI experts, IT professionals, software engineers, data scientists, cybersecurity experts, product managers" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Expert Team
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of AI and IT 
              experts brings together decades of experience, cutting-edge knowledge, and 
              unwavering dedication to innovation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team consists of world-class professionals with deep expertise in AI, 
              cloud computing, cybersecurity, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.experience}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Expertise</h4>
                  <p className="text-gray-300 text-sm">{member.expertise}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Bio</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values guide everything we do and shape our culture of excellence, 
              innovation, and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work with Our
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expert Team?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you achieve your technology goals. 
            Get in touch with us to discuss your project and discover how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/careers"
              className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
            >
              <Award className="w-5 h-5 mr-2" />
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
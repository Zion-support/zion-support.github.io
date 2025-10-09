import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, GraduationCap, Briefcase, Star, Linkedin, Github, Mail, Phone, MapPin, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      department: "Executive",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 15+ years in AI and technology. Former CTO at Fortune 500 companies, PhD in Computer Science from MIT.",
      expertise: ["Strategic Leadership", "AI Innovation", "Business Development"],
      education: "PhD Computer Science, MIT",
      experience: "15+ years",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah.chen@ziontechgroup.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      department: "Technology",
      image: "/api/placeholder/300/300",
      bio: "Technology architect with expertise in cloud infrastructure and AI systems. Led development teams at major tech companies.",
      expertise: ["Cloud Architecture", "AI Systems", "Team Leadership"],
      education: "MS Computer Science, Stanford",
      experience: "12+ years",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      email: "michael.rodriguez@ziontechgroup.com"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      department: "Research & Development",
      image: "/api/placeholder/300/300",
      bio: "Leading AI researcher specializing in machine learning and natural language processing. Published 50+ research papers.",
      expertise: ["Machine Learning", "NLP", "Research"],
      education: "PhD AI, Carnegie Mellon",
      experience: "10+ years",
      linkedin: "https://linkedin.com/in/emilywatson",
      email: "emily.watson@ziontechgroup.com"
    },
    {
      name: "James Kim",
      role: "Head of Cybersecurity",
      department: "Security",
      image: "/api/placeholder/300/300",
      bio: "Cybersecurity expert with extensive experience in enterprise security and threat detection. Former security consultant.",
      expertise: ["Cybersecurity", "Threat Detection", "Compliance"],
      education: "MS Information Security, Georgia Tech",
      experience: "8+ years",
      linkedin: "https://linkedin.com/in/jameskim",
      email: "james.kim@ziontechgroup.com"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Cloud Infrastructure",
      department: "Infrastructure",
      image: "/api/placeholder/300/300",
      bio: "Cloud infrastructure specialist with expertise in AWS, Azure, and GCP. Led migration projects for enterprise clients.",
      expertise: ["Cloud Migration", "DevOps", "Infrastructure"],
      education: "BS Computer Engineering, UC Berkeley",
      experience: "9+ years",
      linkedin: "https://linkedin.com/in/lisathompson",
      email: "lisa.thompson@ziontechgroup.com"
    },
    {
      name: "David Park",
      role: "Head of Data Analytics",
      department: "Analytics",
      image: "/api/placeholder/300/300",
      bio: "Data science expert specializing in predictive analytics and business intelligence. Transformed data strategies for multiple companies.",
      expertise: ["Data Science", "Predictive Analytics", "BI"],
      education: "MS Statistics, Harvard",
      experience: "7+ years",
      linkedin: "https://linkedin.com/in/davidpark",
      email: "david.park@ziontechgroup.com"
    }
  ];

  const departments = [
    {
      name: "Executive Leadership",
      icon: Users,
      description: "Strategic vision and company direction",
      members: 3
    },
    {
      name: "Research & Development",
      icon: Brain,
      description: "AI innovation and technology advancement",
      members: 12
    },
    {
      name: "Cloud Infrastructure",
      icon: Cloud,
      description: "Scalable and secure cloud solutions",
      members: 8
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      description: "Protecting digital assets and data",
      members: 6
    },
    {
      name: "Data Analytics",
      icon: BarChart,
      description: "Insights and intelligence from data",
      members: 10
    },
    {
      name: "Customer Success",
      icon: Target,
      description: "Ensuring client satisfaction and growth",
      members: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team of AI experts, engineers, and technology leaders driving innovation at Zion Tech Group." />
        <meta name="keywords" content="team, AI experts, engineers, technology leaders, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Talented professionals, innovative thinkers, and technology leaders working together to transform businesses through AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">80%</h3>
              <p className="text-gray-300">Advanced Degrees</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Departments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organized teams working together to deliver exceptional results across all areas of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <dept.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-300 mb-4">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-semibold">{dept.members} members</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the leaders driving innovation and excellence at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.department}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {member.education}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {member.experience} experience
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={member.linkedin}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors text-center"
                  >
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
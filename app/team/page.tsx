'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight,
  Star,
  Globe,
  Code,
  Brain,
  Shield,
  Cloud,
  Database,
  Settings
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      department: 'Leadership',
      bio: 'AI and Machine Learning expert with 15+ years of experience in enterprise technology solutions. PhD in Computer Science from MIT.',
      image: '/api/placeholder/300/300',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      skills: ['AI/ML', 'Leadership', 'Strategy', 'Innovation'],
      achievements: ['AI Innovation Award 2024', 'Forbes 30 Under 30', '50+ Patents']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      department: 'Technology',
      bio: 'Cloud architecture specialist with expertise in scalable infrastructure and DevOps practices. Former AWS Solutions Architect.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      github: 'https://github.com/sarah-johnson',
      skills: ['Cloud Architecture', 'DevOps', 'Kubernetes', 'AWS'],
      achievements: ['AWS Certified Solutions Architect', 'Kubernetes Expert', 'Open Source Contributor']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      department: 'AI Research',
      bio: 'Leading AI researcher with PhD in Computer Science and multiple published papers in top-tier conferences.',
      image: '/api/placeholder/300/300',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michael-chen',
      github: 'https://github.com/michael-chen',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'Research'],
      achievements: ['NeurIPS 2023 Best Paper', 'Google Scholar 1000+ Citations', 'Turing Award Nominee']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      department: 'Cybersecurity',
      bio: 'Cybersecurity expert with certifications in ethical hacking and compliance frameworks. Former NSA security analyst.',
      image: '/api/placeholder/300/300',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      github: 'https://github.com/emily-rodriguez',
      skills: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Risk Management'],
      achievements: ['CISSP Certified', 'CEH Certified', 'Security+ Certified']
    },
    {
      name: 'David Kim',
      role: 'Lead Software Engineer',
      department: 'Engineering',
      bio: 'Full-stack developer with expertise in modern web technologies and microservices architecture.',
      image: '/api/placeholder/300/300',
      email: 'david@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/david-kim',
      github: 'https://github.com/david-kim',
      skills: ['React', 'Node.js', 'Python', 'Microservices'],
      achievements: ['10+ Years Experience', 'Open Source Maintainer', 'Tech Speaker']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Data Science',
      department: 'Data Science',
      bio: 'Data science expert with PhD in Statistics and extensive experience in machine learning and big data analytics.',
      image: '/api/placeholder/300/300',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      github: 'https://github.com/lisa-wang',
      skills: ['Data Science', 'Machine Learning', 'Statistics', 'Big Data'],
      achievements: ['Kaggle Grandmaster', 'Published Author', 'Data Science Mentor']
    },
    {
      name: 'James Wilson',
      role: 'Head of Cloud Operations',
      department: 'Cloud Operations',
      bio: 'Cloud operations specialist with expertise in multi-cloud environments and infrastructure automation.',
      image: '/api/placeholder/300/300',
      email: 'james@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/james-wilson',
      github: 'https://github.com/james-wilson',
      skills: ['Cloud Operations', 'Terraform', 'Ansible', 'Monitoring'],
      achievements: ['AWS Certified DevOps Engineer', 'Terraform Expert', 'Infrastructure Automation']
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Product',
      department: 'Product Management',
      bio: 'Product management expert with experience in AI-powered products and user experience design.',
      image: '/api/placeholder/300/300',
      email: 'maria@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/maria-garcia',
      github: 'https://github.com/maria-garcia',
      skills: ['Product Management', 'UX Design', 'AI Products', 'Strategy'],
      achievements: ['Product Management Certified', 'UX Design Expert', 'AI Product Specialist']
    }
  ];

  const departments = [
    { name: 'Leadership', icon: Users, count: 1 },
    { name: 'Technology', icon: Code, count: 2 },
    { name: 'AI Research', icon: Brain, count: 1 },
    { name: 'Cybersecurity', icon: Shield, count: 1 },
    { name: 'Engineering', icon: Settings, count: 1 },
    { name: 'Data Science', icon: Database, count: 1 },
    { name: 'Cloud Operations', icon: Cloud, count: 1 },
    { name: 'Product Management', icon: Globe, count: 1 }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & IT Professionals</title>
        <meta name="description" content="Meet the expert team at Zion Tech Group - AI researchers, cloud architects, cybersecurity experts, and software engineers driving innovation." />
        <meta name="keywords" content="team, AI experts, cloud architects, cybersecurity professionals, software engineers" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Expert team of AI researchers, cloud architects, and cybersecurity professionals" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Our diverse team of AI researchers, cloud architects, cybersecurity experts, and software engineers 
              work together to deliver cutting-edge solutions that transform businesses.
            </p>
          </section>

          {/* Departments Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <dept.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{dept.name}</h3>
                  <p className="text-gray-400 text-sm">{dept.count} member{dept.count !== 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 text-xs flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center"
                    >
                      <Linkedin className="w-4 h-4 inline mr-1" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team CTA */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for AI and technology. 
                Explore our open positions and join our mission to transform businesses through innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
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

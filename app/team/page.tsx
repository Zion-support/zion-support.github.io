'use client';
import { Users, Award, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Linkedin, Twitter, Github, Globe, Brain, Code, Shield, Cloud, Target, BarChart, MessageSquare } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      department: 'Leadership',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions. Passionate about transforming businesses through technology.',
      image: '/images/team/kleber-santos.webp',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation', 'Leadership'],
      experience: '15+ years',
      education: 'MBA in Technology Management',
      location: 'Middletown, DE',
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        twitter: 'https://twitter.com/kleber_santos',
        github: 'https://github.com/kleber-santos'
      },
      achievements: [
        'Led 50+ successful AI implementations',
        'Published 20+ research papers',
        'Speaker at 30+ tech conferences'
      ]
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      department: 'Technology',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing. Leading our R&D initiatives.',
      image: '/images/team/sarah-chen.webp',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development', 'Neural Networks'],
      experience: '12+ years',
      education: 'PhD in Computer Science',
      location: 'San Francisco, CA',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarah_chen_ai',
        github: 'https://github.com/sarah-chen'
      },
      achievements: [
        '50+ patents in AI technology',
        'Nobel Prize nominee 2023',
        'Author of "Quantum AI Revolution"'
      ]
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      department: 'Engineering',
      bio: 'Full-stack architect specializing in scalable AI systems. Expert in cloud infrastructure and DevOps.',
      image: '/images/team/michael-rodriguez.webp',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps', 'Microservices'],
      experience: '10+ years',
      education: 'MS in Software Engineering',
      location: 'Austin, TX',
      social: {
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        twitter: 'https://twitter.com/mike_rodriguez',
        github: 'https://github.com/michael-rodriguez'
      },
      achievements: [
        'Built systems serving 1M+ users',
        'Open source contributor (500+ repos)',
        'AWS Solutions Architect certified'
      ]
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      department: 'Research',
      bio: 'Leading researcher in natural language processing and computer vision. Driving innovation in AI algorithms.',
      image: '/images/team/emily-watson.webp',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning', 'Algorithm Design'],
      experience: '8+ years',
      education: 'PhD in Artificial Intelligence',
      location: 'Boston, MA',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        twitter: 'https://twitter.com/emily_watson_ai',
        github: 'https://github.com/emily-watson'
      },
      achievements: [
        'Published 40+ papers in top journals',
        'Best Paper Award at NeurIPS 2023',
        'Advisor to 15+ PhD students'
      ]
    }
  ];

  const departments = [
    { name: 'Leadership', count: 1, color: 'text-blue-400' },
    { name: 'Technology', count: 1, color: 'text-purple-400' },
    { name: 'Engineering', count: 1, color: 'text-green-400' },
    { name: 'Research', count: 1, color: 'text-cyan-400' }
  ];

  const stats = [
    { label: 'Team Members', value: '50+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Patents Filed', value: '25+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Meet the talented individuals behind our innovative AI and IT solutions. Our diverse team brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="card-futuristic glass-dark p-6 text-center">
                <div className={`w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Users className={`w-8 h-8 ${dept.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400">{dept.count} member{dept.count !== 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-futuristic glass-dark p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12 text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 text-lg font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.department} • {member.experience}</p>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                      <div className="flex space-x-2">
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence. Explore career opportunities with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              View Open Positions
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
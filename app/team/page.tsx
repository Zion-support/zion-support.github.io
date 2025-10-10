'use client';

import React from 'react';
import { 
  Linkedin,
  Twitter,
  Github,
  Mail,
  Award,
  Users,
  Clock,
  Globe
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      bio: "AI researcher with 15+ years in machine learning and quantum computing. Former Google AI engineer with expertise in large-scale systems.",
      avatar: "KS",
      social: {
        linkedin: "https://linkedin.com/in/kleber-santos",
        twitter: "https://twitter.com/kleber_santos",
        github: "https://github.com/kleber-santos"
      },
      expertise: ["AI Research", "Quantum Computing", "Machine Learning", "Leadership"]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Former Google AI engineer specializing in large-scale systems and distributed computing. Expert in AI infrastructure and deployment.",
      avatar: "SC",
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        twitter: "https://twitter.com/sarah_chen",
        github: "https://github.com/sarah-chen"
      },
      expertise: ["AI Infrastructure", "Distributed Systems", "Cloud Computing", "Technical Leadership"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Research",
      bio: "PhD in Computer Science with expertise in neural networks and deep learning. Published researcher in top AI conferences.",
      avatar: "MR",
      social: {
        linkedin: "https://linkedin.com/in/michael-rodriguez",
        twitter: "https://twitter.com/michael_rod",
        github: "https://github.com/michael-rodriguez"
      },
      expertise: ["Deep Learning", "Neural Networks", "Research", "AI Ethics"]
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Operations",
      bio: "Operations expert with 12+ years in technology companies. Specializes in scaling operations and client success.",
      avatar: "JW",
      social: {
        linkedin: "https://linkedin.com/in/jennifer-walsh",
        twitter: "https://twitter.com/jennifer_walsh"
      },
      expertise: ["Operations", "Client Success", "Scaling", "Process Optimization"]
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in AI applications and microservices architecture. Leads our engineering team.",
      avatar: "DK",
      social: {
        linkedin: "https://linkedin.com/in/david-kim",
        github: "https://github.com/david-kim"
      },
      expertise: ["Full-Stack Development", "Microservices", "AI Applications", "Team Leadership"]
    },
    {
      name: "Lisa Thompson",
      role: "Head of Design",
      bio: "UX/UI designer with a focus on AI-powered interfaces. Creates intuitive experiences for complex AI systems.",
      avatar: "LT",
      social: {
        linkedin: "https://linkedin.com/in/lisa-thompson",
        twitter: "https://twitter.com/lisa_thompson"
      },
      expertise: ["UX/UI Design", "AI Interfaces", "User Research", "Design Systems"]
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "20+", label: "Countries", icon: Globe },
    { number: "100+", label: "Publications", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Meet the brilliant minds behind our innovative AI solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in AI, technology, and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a href="mailto:contact@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">We believe in the power of teamwork and cross-functional collaboration to solve complex problems.</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in everything we do, from code quality to client satisfaction.</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Impact</h3>
              <p className="text-gray-300">We're driven by the desire to make a positive impact on businesses and society through technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for AI and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
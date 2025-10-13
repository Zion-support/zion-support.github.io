import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Linkedin, Mail, MapPin, Star, CheckCircle } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      image: "/images/team/kleber-santos.jpg",
      bio: "Visionary leader with 15+ years in AI and technology innovation. Expert in digital transformation and business strategy.",
      expertise: ["AI Strategy", "Business Development", "Leadership"],
      linkedin: "https://linkedin.com/in/kleber-santos",
      email: "kleber@ziontechgroup.com"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "/images/team/sarah-chen.jpg",
      bio: "AI research pioneer with PhD in Machine Learning. Leading our technical innovation and product development.",
      expertise: ["Machine Learning", "AI Research", "Product Development"],
      linkedin: "https://linkedin.com/in/sarah-chen-ai",
      email: "sarah@ziontechgroup.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Full-stack engineering expert with extensive experience in scalable systems and cloud architecture.",
      expertise: ["Cloud Architecture", "System Design", "DevOps"],
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      email: "michael@ziontechgroup.com"
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Solutions",
      image: "/images/team/emily-johnson.jpg",
      bio: "AI solutions architect specializing in enterprise implementations and custom AI development.",
      expertise: ["AI Implementation", "Enterprise Solutions", "Data Science"],
      linkedin: "https://linkedin.com/in/emily-johnson-ai",
      email: "emily@ziontechgroup.com"
    },
    {
      name: "David Kim",
      role: "Head of Cybersecurity",
      image: "/images/team/david-kim.jpg",
      bio: "Cybersecurity expert with certifications in ethical hacking and advanced threat protection.",
      expertise: ["Cybersecurity", "Threat Analysis", "Security Architecture"],
      linkedin: "https://linkedin.com/in/david-kim-security",
      email: "david@ziontechgroup.com"
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      image: "/images/team/lisa-wang.jpg",
      bio: "Product management leader with deep experience in SaaS platforms and user experience design.",
      expertise: ["Product Management", "UX Design", "SaaS Development"],
      linkedin: "https://linkedin.com/in/lisa-wang-product",
      email: "lisa@ziontechgroup.com"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and technology.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Client Success",
      description: "Our success is measured by the success of our clients and their digital transformation.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative problem-solving.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client service.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & Technology Professionals</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Our diverse team of AI specialists, engineers, and technology leaders driving innovation." />
        <meta name="keywords" content="team, AI experts, technology professionals, leadership, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI specialists, engineers, and technology leaders are united by a shared passion for innovation and excellence.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-8 h-8 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our expert team can help transform your business with cutting-edge AI and technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get in Touch
              <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/careers"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Join Our Team
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
import React from 'react';
import { Helmet } from "react-helmet-async";
import { Brain, Shield, Users, Award, Zap, Globe, Target, CheckCircle, Star, Mail, Phone, MapPin } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech innovation and business strategy",
      image: "/api/placeholder/300/300",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Technical architect specializing in AI and cloud solutions",
      image: "/api/placeholder/300/300",
      expertise: ["AI/ML", "Cloud Architecture", "System Design"],
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creative director focused on user experience and interface design",
      image: "/api/placeholder/300/300",
      expertise: ["UI/UX Design", "Product Design", "User Research"],
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies",
      image: "/api/placeholder/300/300",
      expertise: ["React/Node.js", "TypeScript", "DevOps"],
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Lisa Wang",
      role: "AI Research Lead",
      description: "Machine learning expert with focus on natural language processing",
      image: "/api/placeholder/300/300",
      expertise: ["Machine Learning", "NLP", "Data Science"],
      linkedin: "https://linkedin.com/in/lisawang"
    },
    {
      name: "James Wilson",
      role: "Cybersecurity Director",
      description: "Security specialist with expertise in enterprise protection",
      image: "/api/placeholder/300/300",
      expertise: ["Cybersecurity", "Risk Assessment", "Compliance"],
      linkedin: "https://linkedin.com/in/jameswilson"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cybersecurity, cloud computing, and digital transformation are here to help your business succeed." />
        <meta name="keywords" content="team, experts, AI specialists, cybersecurity experts, cloud architects, developers, leadership" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the talented team behind our success" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The talented individuals behind our success. Our diverse team of experts brings together 
                decades of experience in AI, cybersecurity, cloud computing, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experienced leaders driving innovation and excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <div className="text-cyan-400 mb-3 font-medium">{member.role}</div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    View LinkedIn
                    <Globe className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="/careers"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default TeamPage;
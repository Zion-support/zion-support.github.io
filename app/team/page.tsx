import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Users, 
  Award, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Mail, 
  Linkedin, 
  Github,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      department: "Leadership",
      bio: "Visionary leader with 15+ years in AI and technology innovation. Former Google AI researcher and serial entrepreneur.",
      image: "/images/team/kleber-santos.jpg",
      linkedin: "https://linkedin.com/in/klebersantos",
      github: "https://github.com/klebersantos",
      email: "kleber@ziontechgroup.com",
      expertise: ["AI/ML", "Strategic Leadership", "Innovation"]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      department: "Technology",
      bio: "Expert in cloud architecture and AI systems with 12+ years building scalable solutions for Fortune 500 companies.",
      image: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      email: "sarah@ziontechgroup.com",
      expertise: ["Cloud Computing", "AI Systems", "Architecture"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Research",
      department: "AI & Machine Learning",
      bio: "PhD in Computer Science specializing in deep learning and natural language processing. Published researcher and AI innovator.",
      image: "/images/team/michael-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez",
      email: "michael@ziontechgroup.com",
      expertise: ["Deep Learning", "NLP", "Research"]
    },
    {
      name: "Emily Johnson",
      role: "Head of Cybersecurity",
      department: "Security",
      bio: "Cybersecurity expert with CISSP certification and 10+ years protecting enterprise systems from advanced threats.",
      image: "/images/team/emily-johnson.jpg",
      linkedin: "https://linkedin.com/in/emilyjohnson",
      github: "https://github.com/emilyjohnson",
      email: "emily@ziontechgroup.com",
      expertise: ["Cybersecurity", "Threat Detection", "Compliance"]
    },
    {
      name: "David Kim",
      role: "Lead 5G Engineer",
      department: "5G Technology",
      bio: "Telecommunications expert specializing in 5G network design and implementation with extensive experience in edge computing.",
      image: "/images/team/david-kim.jpg",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
      email: "david@ziontechgroup.com",
      expertise: ["5G Networks", "Edge Computing", "IoT"]
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      department: "Product Management",
      bio: "Product strategist with 8+ years transforming complex technical solutions into user-friendly products that drive business value.",
      image: "/images/team/lisa-wang.jpg",
      linkedin: "https://linkedin.com/in/lisawang",
      github: "https://github.com/lisawang",
      email: "lisa@ziontechgroup.com",
      expertise: ["Product Strategy", "UX Design", "Business Analysis"]
    }
  ];

  const departments = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Pioneering the future of artificial intelligence with cutting-edge research and development.",
      memberCount: "15+ specialists",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Protecting digital assets with advanced security solutions and threat intelligence.",
      memberCount: "12+ specialists",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Zap className="w-8 h-8" />,
      description: "Building scalable and reliable cloud solutions for modern businesses.",
      memberCount: "10+ specialists",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "5G Technology",
      icon: <Globe className="w-8 h-8" />,
      description: "Implementing next-generation connectivity solutions for IoT and smart cities.",
      memberCount: "8+ specialists",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cybersecurity, cloud computing, and 5G technology are driving innovation." />
        <meta name="keywords" content="team, experts, AI engineers, cybersecurity specialists, cloud architects, 5G engineers, technology leaders" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the experts driving innovation in AI and technology" />
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
                The brilliant minds behind Zion Tech Group. Our diverse team of experts is united by a passion for innovation 
                and a commitment to transforming businesses through cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Departments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized teams working together to deliver comprehensive technology solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{dept.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{dept.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{dept.description}</p>
                  <div className="text-cyan-400 font-semibold">{dept.memberCount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the leaders who are shaping the future of technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label={`LinkedIn profile for ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label={`GitHub profile for ${member.name}`}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation and technology. 
                Explore career opportunities and be part of our mission to transform businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
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
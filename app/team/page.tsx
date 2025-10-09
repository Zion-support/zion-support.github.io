import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Linkedin, Mail, MapPin, Calendar, GraduationCap, Briefcase, Star, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "20+ years in AI and technology leadership. Former VP at Google AI, PhD in Computer Science from MIT.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@ziontechgroup.com",
      expertise: ["AI Strategy", "Machine Learning", "Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in quantum computing and cloud architecture. Former Principal Engineer at Amazon Web Services.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@ziontechgroup.com",
      expertise: ["Quantum Computing", "Cloud Architecture", "DevOps"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Research",
      bio: "Leading researcher in natural language processing and computer vision. PhD from Stanford University.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily@ziontechgroup.com",
      expertise: ["NLP", "Computer Vision", "Deep Learning"]
    },
    {
      name: "David Kim",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity expert with 15+ years experience. Former security consultant for Fortune 500 companies.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david@ziontechgroup.com",
      expertise: ["Cybersecurity", "Risk Assessment", "Compliance"]
    },
    {
      name: "Lisa Wang",
      role: "Head of Product Development",
      bio: "Product strategist with expertise in AI product development and user experience design.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/lisawang",
      email: "lisa@ziontechgroup.com",
      expertise: ["Product Strategy", "UX Design", "Agile Development"]
    },
    {
      name: "James Wilson",
      role: "Head of Business Development",
      bio: "Business development expert with extensive experience in enterprise sales and partnerships.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/jameswilson",
      email: "james@ziontechgroup.com",
      expertise: ["Business Development", "Enterprise Sales", "Partnerships"]
    }
  ];

  const achievements = [
    { number: "50+", label: "Team Members", description: "Expert professionals across AI, IT, and business domains" },
    { number: "15+", label: "Years Average Experience", description: "Our team brings decades of combined expertise" },
    { number: "25+", label: "PhD Holders", description: "Advanced degrees in computer science and related fields" },
    { number: "100%", label: "Certified Professionals", description: "Industry certifications in their respective domains" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group's AI and IT solutions. Our diverse team of professionals brings decades of experience in technology and innovation." />
        <meta name="keywords" content="team, leadership, AI experts, IT professionals, technology team" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our diverse team of AI researchers, IT specialists, and business experts work together to deliver cutting-edge solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {achievement.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team combines decades of experience in AI, technology, and business to drive innovation and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all text-center flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            Join us in shaping the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and technology innovation. Passionate about transforming businesses through cutting-edge technology.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in cloud architecture and AI system design. Leads our technical team in developing scalable and secure solutions.",
      expertise: ["Cloud Architecture", "AI System Design", "Technical Leadership"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning specialist and AI research lead. Develops cutting-edge AI models and algorithms for our clients.",
      expertise: ["Machine Learning", "AI Research", "Data Science"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      description: "Cybersecurity expert with enterprise security experience. Ensures our solutions meet the highest security standards.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies. Builds robust and scalable applications.",
      expertise: ["Full-Stack Development", "Web Technologies", "System Architecture"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      description: "Product strategy expert with a focus on AI and IT solutions. Ensures our products meet client needs and market demands.",
      expertise: ["Product Strategy", "AI Products", "Market Analysis"],
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology",
      icon: CpuChipIcon
    },
    {
      title: "Security",
      description: "Security is at the core of everything we build and deliver",
      icon: ShieldCheckIcon
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: UserGroupIcon
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project and interaction",
      icon: CloudIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="team, experts, AI specialists, cybersecurity experts, cloud architects, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is passionate about delivering innovative AI and IT solutions 
              that transform businesses and drive success.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors border border-slate-700">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto bg-slate-700 rounded-full mb-4 flex items-center justify-center">
                      <UserGroupIcon className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6">{member.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expert team can help transform your business with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link 
                to="/careers" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;

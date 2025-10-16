import React from "react";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Lightbulb,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security is at the core of everything we do. We implement robust security measures to protect our clients' data and systems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients as partners, ensuring their success is our success."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "AI & Machine Learning",
      experience: "15+ years"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Cloud Infrastructure",
      experience: "12+ years"
    },
    {
      name: "Emily Johnson",
      role: "Head of Cybersecurity",
      expertise: "Cybersecurity & Compliance",
      experience: "10+ years"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      expertise: "Machine Learning & NLP",
      experience: "8+ years"
    }
  ];

  const milestones = [
    { year: "2018", event: "Company Founded" },
    { year: "2019", event: "First AI Solution Deployed" },
    { year: "2020", event: "100+ Projects Completed" },
    { year: "2021", event: "ISO 27001 Certification" },
    { year: "2022", event: "500+ Clients Served" },
    { year: "2023", event: "AI Innovation Award" },
    { year: "2024", event: "Global Expansion" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We are a leading technology company specializing in AI solutions, cybersecurity, 
              and digital transformation. Our mission is to empower businesses with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize advanced technology and make AI-powered solutions accessible to businesses of all sizes. 
                We believe that every company should have access to cutting-edge technology that can transform their operations 
                and drive growth.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's leading provider of AI and IT solutions, creating a future where technology 
                seamlessly integrates with business operations to drive unprecedented growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, cybersecurity, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  {member.expertise}
                </p>
                <p className="text-gray-400 text-xs">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                      <div className="text-2xl font-bold text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-white text-lg">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

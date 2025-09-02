import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Twitter, Mail, MapPin, Award, Users, Briefcase, GraduationCap } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kleber Santos",
      title: "Founder & CEO",
      bio: "Visionary leader with 15+ years of experience in technology and business development. Passionate about innovation and helping businesses transform through technology.",
      image: "/images/team/kleber-santos.jpg",
      linkedin: "https://linkedin.com/in/kleber-santos",
      twitter: "https://twitter.com/kleber-santos",
      email: "kleber@ziontechgroup.com",
      location: "Middletown, DE",
      expertise: ["Strategic Planning", "Business Development", "Technology Leadership"],
      education: "MBA in Technology Management, University of Delaware"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      title: "AI Research Director",
      bio: "Leading AI researcher with expertise in machine learning, natural language processing, and computer vision. Published author and speaker at international conferences.",
      image: "/images/team/sarah-johnson.jpg",
      linkedin: "https://linkedin.com/in/sarah-johnson-ai",
      twitter: "https://twitter.com/sarah-johnson-ai",
      email: "sarah@ziontechgroup.com",
      location: "Remote",
      expertise: ["Artificial Intelligence", "Machine Learning", "Research & Development"],
      education: "PhD in Computer Science, MIT"
    },
    {
      id: 3,
      name: "Mike Chen",
      title: "Cybersecurity Expert",
      bio: "Cybersecurity specialist with extensive experience in threat analysis, security architecture, and compliance. Former security consultant for Fortune 500 companies.",
      image: "/images/team/mike-chen.jpg",
      linkedin: "https://linkedin.com/in/mike-chen-security",
      twitter: "https://twitter.com/mike-chen-security",
      email: "mike@ziontechgroup.com",
      location: "New York, NY",
      expertise: ["Cybersecurity", "Risk Assessment", "Compliance"],
      education: "MS in Cybersecurity, Carnegie Mellon University"
    },
    {
      id: 4,
      name: "Emily Watson",
      title: "SaaS Product Manager",
      bio: "Product management expert specializing in SaaS platforms and user experience. Led the development of multiple successful micro SaaS products.",
      image: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emily-watson-pm",
      twitter: "https://twitter.com/emily-watson-pm",
      email: "emily@ziontechgroup.com",
      location: "San Francisco, CA",
      expertise: ["Product Management", "SaaS Development", "User Experience"],
      education: "MBA in Product Management, Stanford University"
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      title: "Digital Strategy Consultant",
      bio: "Digital transformation expert helping organizations modernize their operations and adopt new technologies. 10+ years of consulting experience.",
      image: "/images/team/alex-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/alex-rodriguez-digital",
      twitter: "https://twitter.com/alex-rodriguez-digital",
      email: "alex@ziontechgroup.com",
      location: "Chicago, IL",
      expertise: ["Digital Transformation", "Strategy Consulting", "Change Management"],
      education: "MBA in Digital Strategy, Northwestern University"
    },
    {
      id: 6,
      name: "David Kim",
      title: "Data Analytics Director",
      bio: "Data science leader with expertise in big data analytics, business intelligence, and predictive modeling. Helps organizations make data-driven decisions.",
      image: "/images/team/david-kim.jpg",
      linkedin: "https://linkedin.com/in/david-kim-analytics",
      twitter: "https://twitter.com/david-kim-analytics",
      email: "david@ziontechgroup.com",
      location: "Seattle, WA",
      expertise: ["Data Analytics", "Business Intelligence", "Predictive Modeling"],
      education: "MS in Data Science, University of Washington"
    },
    {
      id: 7,
      name: "Lisa Thompson",
      title: "DevOps Engineer",
      bio: "DevOps specialist focused on automation, cloud infrastructure, and continuous integration/deployment. Expert in modern development practices.",
      image: "/images/team/lisa-thompson.jpg",
      linkedin: "https://linkedin.com/in/lisa-thompson-devops",
      twitter: "https://twitter.com/lisa-thompson-devops",
      email: "lisa@ziontechgroup.com",
      location: "Austin, TX",
      expertise: ["DevOps", "Cloud Infrastructure", "Automation"],
      education: "BS in Computer Engineering, University of Texas"
    },
    {
      id: 8,
      name: "Maria Garcia",
      title: "UX/UI Designer",
      bio: "Creative designer with a passion for creating intuitive and beautiful user experiences. Specializes in web and mobile application design.",
      image: "/images/team/maria-garcia.jpg",
      linkedin: "https://linkedin.com/in/maria-garcia-design",
      twitter: "https://twitter.com/maria-garcia-design",
      email: "maria@ziontechgroup.com",
      location: "Miami, FL",
      expertise: ["UX/UI Design", "User Research", "Prototyping"],
      education: "BFA in Graphic Design, Art Institute of Miami"
    }
  ];

  const stats = [
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Combined Experience", value: "200+", icon: Briefcase },
    { label: "Certifications", value: "100+", icon: Award },
    { label: "Universities Represented", value: "25+", icon: GraduationCap }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Technology Experts</title>
        <meta name="description" content="Meet the talented team of technology experts at Zion Tech Group. Our diverse team brings together decades of experience in AI, cybersecurity, SaaS development, and more." />
        <meta name="keywords" content="team, technology experts, AI researchers, cybersecurity specialists, SaaS developers, digital transformation consultants" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our Technology Experts
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Our diverse team brings together decades of experience in AI, cybersecurity, SaaS development, and digital transformation to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-12 h-12" />
                    </div>
                    <div className="text-lg font-bold">{member.name.split(' ')[0]}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <GraduationCap className="w-4 h-4" />
                      <span className="line-clamp-1">{member.education}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation. Explore our open positions and join our mission to transform businesses through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
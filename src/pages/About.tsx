import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Award, 
  Globe, 
  Rocket, 
  Shield, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Target,
  Heart,
  Eye
} from 'lucide-react';

export default function About() {
  const companyStats = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across diverse industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals with diverse expertise"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    }
  ];

  const companyHistory = [
    {
      year: "2020",
      title: "Foundation",
      description: "Zion Tech Group was founded with a vision to democratize cutting-edge technology and make AI accessible to businesses of all sizes.",
      achievements: ["Company established", "First AI research team formed", "Initial funding secured"]
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description: "Developed our first AI-powered business solution and secured our first enterprise client.",
      achievements: ["First AI solution launched", "Enterprise client acquired", "Research partnerships established"]
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our service portfolio and opened our first international office.",
      achievements: ["Service portfolio expanded", "International office opened", "Team doubled in size"]
    },
    {
      year: "2023",
      title: "Innovation Milestone",
      description: "Achieved breakthrough in quantum computing research and launched autonomous business operations platform.",
      achievements: ["Quantum computing breakthrough", "Autonomous platform launch", "Industry recognition awards"]
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as a leader in AI solutions and expanded to serve clients in 25+ countries.",
      achievements: ["Industry leadership recognition", "Global expansion", "Strategic partnerships formed"]
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to push boundaries in AI, quantum computing, and autonomous systems.",
      achievements: ["Next-gen AI platform", "Quantum commercial solutions", "Autonomous business revolution"]
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer & Chief AI Officer",
      bio: "Dr. Chen is a visionary leader with over 15 years of experience in AI research and enterprise technology. She holds a PhD in Computer Science from MIT and has led breakthrough research in autonomous AI systems.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Research & Development"],
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      bio: "James leads our technology strategy and oversees the development of cutting-edge solutions. He has extensive experience in cloud architecture, cybersecurity, and emerging technologies.",
      expertise: ["Cloud Architecture", "Cybersecurity", "Technology Strategy"],
      image: "/images/team/james-wilson.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      bio: "Dr. Rodriguez leads our quantum computing and advanced research initiatives. His work has been published in leading scientific journals and has received international recognition.",
      expertise: ["Quantum Computing", "Research & Development", "Scientific Innovation"],
      image: "/images/team/michael-rodriguez.jpg"
    }
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket,
      details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches"
      ]
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award,
      details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Customer satisfaction focus"
      ]
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users,
      details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Knowledge sharing culture"
      ]
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield,
      details: [
        "Transparent communication",
        "Ethical AI development",
        "Trust-based relationships"
      ]
    }
  ];

  const awards = [
    {
      title: "Top AI Solutions Provider 2024",
      organization: "TechResearch Insights",
      description: "Recognized for excellence in AI-powered business solutions and innovation",
      year: "2024"
    },
    {
      title: "Innovation Excellence Award",
      organization: "Technology Innovation Forum",
      description: "Awarded for breakthrough developments in quantum computing and autonomous systems",
      year: "2023"
    },
    {
      title: "Best Cybersecurity Solution",
      organization: "Security Excellence Awards",
      description: "Recognized for outstanding cybersecurity and compliance automation solutions",
      year: "2023"
    },
    {
      title: "Rising Star in Tech",
      organization: "Global Technology Awards",
      description: "Acknowledged as an emerging leader in the technology industry",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              We are a forward-thinking technology company dedicated to democratizing cutting-edge 
              AI solutions, quantum computing, and autonomous systems. Our mission is to empower 
              businesses of all sizes to achieve extraordinary results through innovative technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                <span>Innovation Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>
            
            <div className="space-y-12">
              {companyHistory.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                {/* Member Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{value.description}</p>
                  
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold">{award.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <p className="text-cyan-400 text-sm mb-3">{award.organization}</p>
              <p className="text-gray-300 text-sm">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can transform your business and help you 
              achieve extraordinary results in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

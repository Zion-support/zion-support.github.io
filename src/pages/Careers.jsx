import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Zap, 
  Globe,
  Code,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI autonomous systems and machine learning models",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Computing"],
      icon: Brain
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and maintain advanced security protocols and threat detection systems",
      skills: ["Cybersecurity", "SOC2", "Threat Detection", "Zero Trust", "Compliance"],
      icon: Shield
    },
    {
      title: "Cloud Infrastructure Engineer",
      department: "Infrastructure",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and manage scalable cloud infrastructure solutions",
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"],
      icon: Cloud
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications and APIs using cutting-edge technologies",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"],
      icon: Code
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop data-driven insights and predictive models for business optimization",
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
      icon: Brain
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Streamline development processes and maintain production infrastructure",
      skills: ["CI/CD", "Monitoring", "Automation", "Linux", "Networking"],
      icon: Zap
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conferences, and career development",
      icon: Brain,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI, quantum computing, and emerging technologies",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with passionate technology innovators",
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace emerging technologies to solve complex challenges",
      icon: Zap
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to client service",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to achieve greatness",
      icon: Users
    },
    {
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering measurable results",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Innovation Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Help us shape the future of technology. Work with cutting-edge AI, 
              quantum computing, and emerging technologies that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Why Join Zion Tech Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => {
            const Icon = position.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-2">
                      {position.department}
                    </span>
                    <div className="text-slate-400 text-sm">{position.type}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{position.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {position.experience} experience
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-medium mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Send Resume
            </Link>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              Contact HR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

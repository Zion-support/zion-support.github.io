import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Award,
  Brain,
  Code,
  BarChart3,
  Cloud,
  Smartphone
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and microservices using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and clients from cyber threats with advanced security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex data sets to drive business decisions.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience in data science",
        "Proficiency in Python, R, SQL",
        "Experience with machine learning libraries",
        "Strong analytical and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years experience in cloud architecture",
        "Certifications (AWS, Azure, GCP preferred)",
        "Experience with containerization and orchestration",
        "Strong understanding of cloud security and compliance"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Mobile App Developer",
      department: "Mobile Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Create innovative mobile applications for iOS and Android platforms.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in mobile development",
        "Proficiency in React Native, Flutter, or native development",
        "Experience with mobile UI/UX design",
        "Knowledge of app store deployment processes"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Professional development budget",
        "Cutting-edge technology exposure"
      ],
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity participation",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Learning & Growth",
      description: "Professional development budget and training opportunities",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI and cloud technologies",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with passionate professionals",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "100%", label: "Remote Friendly", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and work with cutting-edge AI and IT solutions. Explore career opportunities in technology, engineering, and innovation." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, cybersecurity, data scientist, cloud architect, remote work" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Build the Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join our team of innovators and help shape the future of AI and IT solutions. 
            Work with cutting-edge technology in a collaborative, remote-first environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#open-positions"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Get in Touch
              <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore exciting career opportunities and join our team of technology innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-3">
                      <span className="bg-white/10 px-2 py-1 rounded">{position.department}</span>
                      <span className="bg-white/10 px-2 py-1 rounded">{position.location}</span>
                      <span className="bg-white/10 px-2 py-1 rounded">{position.type}</span>
                      <span className="bg-white/10 px-2 py-1 rounded">{position.experience}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {position.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't see a position that matches your skills? We're always looking for talented individuals 
            who share our passion for innovation. Send us your resume and let's start a conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Learn About Us
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
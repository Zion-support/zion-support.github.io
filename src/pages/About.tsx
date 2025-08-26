
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Users, 
  Award, 
  Globe, 
  Rocket,
  Shield,
  Brain,
  Cloud,
  Code,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Lightbulb,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies to deliver cutting-edge solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to understanding your unique challenges and delivering solutions that drive real results.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication and project delivery.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, both within our organization and with our clients.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in San Francisco and New York, expanding our reach to serve clients across the United States.",
      achievement: "3 Office Locations"
    },
    {
      year: "2023",
      title: "AI Breakthrough",
      description: "Successfully deployed our first AI autonomous business platform, achieving 300% ROI for manufacturing clients.",
      achievement: "AI Platform Launch"
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded our team to 50+ technology experts, including specialists in AI, cybersecurity, and quantum computing.",
      achievement: "50+ Team Members"
    },
    {
      year: "2021",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize cutting-edge technology for businesses of all sizes.",
      achievement: "Company Founded"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      expertise: "AI & Machine Learning, Strategic Leadership",
      experience: "15+ years in technology leadership",
      education: "Ph.D. Computer Science, MIT",
      achievements: ["Led 50+ AI implementations", "Former Google AI Research Lead", "Published 25+ research papers"],
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      expertise: "Cloud Architecture, Cybersecurity",
      experience: "12+ years in enterprise technology",
      education: "M.S. Computer Engineering, Stanford",
      achievements: ["Architected 100+ cloud solutions", "Cybersecurity expert", "AWS Solutions Architect"],
      image: "/images/team/michael-rodriguez.jpg"
    },
    {
      name: "Dr. James Kim",
      position: "Chief Innovation Officer",
      expertise: "Quantum Computing, Research",
      experience: "18+ years in research & development",
      education: "Ph.D. Physics, Caltech",
      achievements: ["Quantum computing pioneer", "15+ patents", "Former NASA researcher"],
      image: "/images/team/james-kim.jpg"
    },
    {
      name: "Lisa Thompson",
      position: "Chief Operations Officer",
      expertise: "Business Operations, Client Success",
      experience: "14+ years in operations management",
      education: "MBA, Harvard Business School",
      achievements: ["Scaled operations 10x", "99% client satisfaction", "Process optimization expert"],
      image: "/images/team/lisa-thompson.jpg"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Technology Experts", description: "Dedicated professionals" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach" },
    { icon: Award, value: "150+", label: "Projects Completed", description: "Successful deliveries" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", description: "Exceeding expectations" },
    { icon: Rocket, value: "300%", label: "Average ROI", description: "Client value generated" },
    { icon: Star, value: "15+", label: "Industry Awards", description: "Recognition for excellence" }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine learning, neural networks, and autonomous systems" },
    { name: "Quantum Computing", icon: Zap, description: "Quantum algorithms and hybrid quantum-classical solutions" },
    { name: "Cybersecurity", icon: Shield, description: "Zero-trust architecture and threat detection" },
    { name: "Cloud Infrastructure", icon: Cloud, description: "Multi-cloud solutions and edge computing" },
    { name: "5G & IoT", icon: Code, description: "Next-generation networks and connected devices" },
    { name: "Data Analytics", icon: TrendingUp, description: "Big data processing and business intelligence" }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security and Availability Controls" },
    { name: "AWS Advanced Consulting Partner", description: "Cloud Solutions Excellence" },
    { name: "Microsoft Gold Partner", description: "Enterprise Solutions Provider" },
    { name: "Google Cloud Partner", description: "Cloud Innovation Partner" },
    { name: "CISSP", description: "Certified Information Systems Security Professional" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group, a leading technology company specializing in AI, quantum computing, and cybersecurity solutions."
        keywords="about us, Zion Tech Group, AI, quantum computing, cybersecurity, technology company"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We're a team of technology innovators, problem solvers, and visionaries 
              dedicated to transforming businesses through cutting-edge AI and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#mission"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Our Mission
              </a>
              <a
                href="#team"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              To democratize cutting-edge technology and make AI, quantum computing, and 
              advanced cybersecurity accessible to businesses of all sizes. We believe that 
              every organization deserves access to the tools that will define the future.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our mission is to bridge the gap between emerging technologies and practical 
              business applications, ensuring that our clients not only survive but thrive 
              in the digital age.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Democratize advanced technology</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Drive measurable business outcomes</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Foster innovation and growth</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              To be the world's most trusted partner for technology transformation, 
              leading the charge in making AI and quantum technologies accessible, 
              practical, and profitable for businesses worldwide.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We envision a future where every business, regardless of size or industry, 
              can leverage the power of autonomous systems, quantum computing, and 
              intelligent automation to achieve unprecedented growth and efficiency.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                <span>Global technology leadership</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                <span>Universal technology access</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                <span>Sustainable innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Zion Tech Group by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-slate-300 text-sm">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Our Journey
        </h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="inline-block px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-full mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{milestone.description}</p>
                  <div className="text-cyan-400 font-semibold">{milestone.achievement}</div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-700/30 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <Calendar className="h-16 w-16 mx-auto mb-4" />
                    <p>Milestone Image</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technologies We Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Meet Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-slate-700/30 rounded-xl h-24 w-24 flex items-center justify-center flex-shrink-0">
                  <div className="text-center text-slate-400">
                    <Users className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-xs">Photo</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.position}</p>
                  <p className="text-slate-300 text-sm mb-3">{member.expertise}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.experience}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.education}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Certifications & Partnerships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <Award className="h-6 w-6 text-cyan-400" />
              </div>
              <p className="text-slate-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed their operations 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

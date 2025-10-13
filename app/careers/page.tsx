import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  Code,
  Brain,
  Cloud,
  Database
} from "lucide-react";

const CareersPage = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Remote Work",
      description: "Flexible remote and hybrid work options"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Career Growth",
      description: "Clear paths for advancement and skill development"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health Benefits",
      description: "Comprehensive health and wellness programs"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote",
      type: "Full-time",
      icon: <Brain className="w-6 h-6" />,
      description: "Lead the development of cutting-edge AI solutions and machine learning models."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote",
      type: "Full-time",
      icon: <Cloud className="w-6 h-6" />,
      description: "Design and implement scalable cloud architectures for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      icon: <Shield className="w-6 h-6" />,
      description: "Protect our clients' digital assets with advanced security solutions."
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: <Code className="w-6 h-6" />,
      description: "Build innovative web applications and microservices."
    }
  ];

  const values = [
    "Innovation and creativity",
    "Collaboration and teamwork",
    "Continuous learning",
    "Customer focus",
    "Integrity and transparency",
    "Work-life balance"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="careers, jobs, technology careers, AI engineer, cloud architect, cybersecurity specialist, remote work" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Innovation Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing technology. We're looking for passionate individuals 
              who want to make a difference in the world of AI, cloud computing, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#positions"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose, growth, and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your career.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mr-4">
                      {position.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
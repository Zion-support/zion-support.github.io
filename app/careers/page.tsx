import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Briefcase } from "lucide-react";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience with machine learning frameworks",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "5G Solutions Architect",
      department: "5G & IoT",
      location: "Delaware / Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement 5G network solutions for smart cities and enterprise clients.",
      requirements: [
        "Bachelor's degree in Telecommunications or Engineering",
        "7+ years experience in 5G/4G network design",
        "Knowledge of 3GPP standards",
        "Experience with edge computing and IoT"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Delaware",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with SIEM and threat detection"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      id: 4,
      title: "Cloud Solutions Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain scalable cloud infrastructure solutions.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years experience with cloud platforms",
        "Proficiency in Kubernetes, Docker",
        "Experience with infrastructure as code"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We push the boundaries of technology to create solutions that transform industries."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to solve complex problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices and client relationships."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "We're committed to creating technology solutions that make a positive difference in the world."
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training budget",
    "Generous paid time off and holidays",
    "401(k) retirement plan with company matching",
    "Modern office space with cutting-edge technology",
    "Team building events and company retreats"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, 5G, cybersecurity, cloud computing, and more."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, 5G solutions, cybersecurity, cloud computing, technology careers, remote work"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of technology. Join Zion Tech Group and help us build 
              innovative solutions that transform businesses and industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
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

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities and find your perfect role at Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/careers/${position.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment that helps you grow and succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Benefits & Perks</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Our Culture</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
                      <p className="text-gray-300">We encourage experimentation and reward creative thinking.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Collaborative Environment</h4>
                      <p className="text-gray-300">Work with talented individuals who share your passion for technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h4>
                      <p className="text-gray-300">Continuous learning and career advancement opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Us Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="mailto:careers@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  careers@ziontechgroup.com
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
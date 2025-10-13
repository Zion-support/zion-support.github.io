'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Heart, Zap, Globe, Award } from 'lucide-react';
import { Link } from "react-router-dom";

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI-powered solutions and machine learning models for our clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong understanding of NLP and computer vision",
        "Previous experience in AI product development"
      ],
      benefits: [
        "Competitive salary ($120k - $180k)",
        "Stock options",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain web applications using modern technologies and best practices.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps",
        "Strong problem-solving skills"
      ],
      benefits: [
        "Competitive salary ($80k - $120k)",
        "Health, dental, vision insurance",
        "401(k) with company matching",
        "Flexible work arrangements",
        "Learning and development opportunities"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience with AWS, Docker, Kubernetes",
        "Experience with CI/CD pipelines",
        "Knowledge of monitoring and logging tools",
        "Scripting skills (Python, Bash)"
      ],
      benefits: [
        "Competitive salary ($100k - $140k)",
        "Health, dental, vision insurance",
        "Stock options",
        "Flexible work arrangements",
        "Certification reimbursement"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for our AI and IT solutions.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years product management experience",
        "Experience with AI/ML products preferred",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ],
      benefits: [
        "Competitive salary ($110k - $150k)",
        "Health, dental, vision insurance",
        "Stock options",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We're always pushing the boundaries of what's possible with technology",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Work-Life Balance",
      description: "We believe in flexible work arrangements and supporting our team's well-being",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Global Impact",
      description: "Our solutions help businesses worldwide transform and grow",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta
          name="description"
          content="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities in AI engineering, software development, and more."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, software developer, DevOps, product manager, remote work, technology careers"
        />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and technology. Join a team of passionate innovators 
              who are transforming businesses worldwide with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                What drives us and makes Zion Tech Group a great place to work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore current opportunities and find your perfect role
              </p>
            </div>
            <div className="space-y-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
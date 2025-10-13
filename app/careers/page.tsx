import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CareersPage = () => {
  const currentYear = new Date().getFullYear();

  const jobOpenings = [
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
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Web Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and client data with advanced security measures.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate and optimize our deployment and infrastructure processes.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in DevOps/Infrastructure",
        "Proficiency in Docker, Kubernetes, CI/CD",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Innovation",
      description: "We encourage creative thinking and cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Impact",
      description: "We strive to make a positive difference in the world."
    }
  ];

  const perks = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote work options",
    "Professional development and learning budget",
    "401(k) with company matching",
    "Unlimited PTO and paid holidays",
    "Modern equipment and home office setup",
    "Team building events and company retreats",
    "Mentorship and career growth opportunities",
    "Stock options and performance bonuses"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore career opportunities in AI, development, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, developer, cybersecurity, remote work, tech jobs, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing the future of AI and technology. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#openings"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Perks & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/50">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/contact?position=${encodeURIComponent(job.title)}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group mt-4 lg:mt-0"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center group"
            >
              Send Us Your Resume
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
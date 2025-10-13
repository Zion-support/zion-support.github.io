import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, MapPin, Clock, Briefcase, Star, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: true
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
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps practices",
        "Strong collaboration and code review skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' systems and data with advanced security solutions and monitoring.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, Terraform",
        "Knowledge of monitoring and logging tools",
        "Strong automation and scripting skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex data sets and build predictive models for our clients.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience in data analysis and machine learning",
        "Proficiency in Python, R, SQL",
        "Experience with data visualization tools",
        "Strong statistical and analytical skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Technical Sales Engineer",
      department: "Sales",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "2+ years",
      description: "Help clients understand our technology solutions and drive business growth.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "2+ years experience in technical sales or consulting",
        "Strong technical and communication skills",
        "Experience with CRM systems",
        "Ability to travel as needed"
      ],
      benefits: [
        "Competitive salary and commission",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve great results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do and build trust with our clients."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "We're committed to making a positive difference in the world through technology."
    }
  ];

  const perks = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning budget",
    "401(k) with company matching",
    "Unlimited PTO and paid holidays",
    "Modern office space with latest technology",
    "Team building events and company retreats",
    "Mentorship and career growth opportunities",
    "Stock options and performance bonuses"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join the Zion Tech Group team and help build the future of AI and technology. Explore open positions, benefits, and our company culture."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, software developer, cybersecurity, data scientist, remote work, technology careers"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Join Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Team
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of AI and technology. Join a team of passionate innovators 
              who are transforming businesses and creating meaningful impact through cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#open-positions"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Open Positions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your career.
              </p>
            </div>
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    position.featured
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {position.featured && (
                    <div className="absolute -top-4 left-8">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {position.experience}
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{position.description}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Link
                          to="/contact"
                          className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                            position.featured
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                              : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                          }`}
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Perks & Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team's well-being and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Learn About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years of experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and contribute to our product development.",
      requirements: [
        "Bachelor's degree in Computer Science or equivalent",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and data with advanced security measures and monitoring.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years of cybersecurity experience",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    }
  ];

  const companyValues = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication across all levels.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Security",
      description: "We prioritize the security and privacy of our clients and their data.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Global Impact",
      description: "We're building solutions that make a positive impact on businesses worldwide.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const perks = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning budget",
    "Unlimited paid time off",
    "Modern office spaces with cutting-edge technology",
    "Team building events and company retreats",
    "Mentorship and career growth opportunities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, engineering, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, full stack developer, cybersecurity, remote work, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Users className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Careers at Zion
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join a team of passionate innovators building the future of technology. 
            We're looking for talented individuals who share our vision of transforming businesses through AI and cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#positions"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Open Positions
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              Contact Us
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment to help you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{perk}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current opportunities and find your perfect role
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
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
                  <div className="lg:ml-8">
                    <FuturisticButton
                      href="/contact"
                      variant="outline"
                      size="lg"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Apply Now
                    </FuturisticButton>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                Send Your Resume
              </FuturisticButton>
              <FuturisticButton
                href="/about"
                variant="outline"
                size="lg"
                icon={<Users className="w-5 h-5" />}
              >
                Learn More About Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CareersPage;
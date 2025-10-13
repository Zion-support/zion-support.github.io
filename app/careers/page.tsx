import React from 'react';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years of experience in machine learning and AI development",
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
      ],
      posted: "2024-01-15"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets by implementing and maintaining robust cybersecurity measures.",
      requirements: [
        "Bachelor's degree in Cybersecurity, IT, or related field",
        "3+ years of experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Health and dental insurance",
        "Paid time off and holidays",
        "Training and certification support",
        "Career advancement opportunities"
      ],
      posted: "2024-01-12"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud solutions using AWS, Azure, and Google Cloud Platform.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of cloud architecture experience",
        "Certifications: AWS Solutions Architect, Azure Solutions Architect",
        "Experience with containerization (Docker, Kubernetes)",
        "Strong understanding of microservices architecture"
      ],
      benefits: [
        "Competitive salary and stock options",
        "Comprehensive benefits package",
        "Remote work flexibility",
        "Learning and development opportunities",
        "Team building events"
      ],
      posted: "2024-01-10"
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Development",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of frontend development experience",
        "Proficiency in React, TypeScript, HTML, CSS",
        "Experience with modern build tools (Vite, Webpack)",
        "Understanding of responsive design principles"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health and vision insurance",
        "Flexible work schedule",
        "Professional development budget",
        "Modern development equipment"
      ],
      posted: "2024-01-08"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Streamline our development and deployment processes using CI/CD pipelines and automation tools.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of DevOps experience",
        "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Comprehensive health insurance",
        "Remote work options",
        "Training and certification support",
        "401(k) with company matching"
      ],
      posted: "2024-01-05"
    }
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do, building trust with our clients and team."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "We're committed to making a positive difference in the world through technology and innovation."
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training budget",
    "401(k) with company matching",
    "Paid time off and company holidays",
    "Modern equipment and tools",
    "Team building and social events",
    "Career advancement opportunities",
    "Mentorship and learning programs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity specialist, cloud architect, frontend developer, DevOps engineer, technology careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of a team that's revolutionizing technology and making a real impact in the world. 
            We're looking for passionate individuals who share our vision of innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#open-positions"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive work environment that helps you grow both personally and professionally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Benefits & Perks</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Company Culture</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  Our team members are encouraged to think creatively, take initiative, and contribute to meaningful projects.
                </p>
                <p>
                  We believe in work-life balance and provide flexible arrangements that allow our team to 
                  perform at their best while maintaining their personal commitments.
                </p>
                <p>
                  Diversity and inclusion are at the heart of our company. We welcome individuals from all 
                  backgrounds and believe that diverse perspectives make us stronger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and interests.
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                    <Link
                      to={`/careers/${position.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">Posted on {new Date(position.posted).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
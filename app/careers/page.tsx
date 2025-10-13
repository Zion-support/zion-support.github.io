import React from 'react';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Heart, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build cutting-edge web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expertise in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills",
        "Experience with agile development methodologies"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Work on innovative AI solutions and machine learning models that power our next-generation products.",
      requirements: [
        "3+ years of ML/AI development experience",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with NLP and computer vision",
        "Strong mathematical and statistical background",
        "Experience with MLOps and model deployment"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "1 week ago",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and data by implementing security best practices and responding to threats.",
      requirements: [
        "4+ years of cybersecurity experience",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "3 days ago",
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure and CI/CD pipelines to support our growing platform.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitLab CI)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Strong scripting skills (Bash, Python)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "5 days ago",
      featured: false
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and development for our AI-powered solutions and platform features.",
      requirements: [
        "5+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and data-driven decision making",
        "Experience with agile development processes",
        "Excellent communication and leadership skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 6,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for our web and mobile applications.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, Adobe Creative Suite",
        "Experience with user research and testing",
        "Strong portfolio showcasing design skills",
        "Knowledge of design systems and accessibility"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ],
      posted: "4 days ago",
      featured: false
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Innovation",
      description: "We're driven by a genuine passion for technology and its potential to solve real-world problems."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "We believe in continuous growth and provide opportunities for professional development and learning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description: "We work together as a team, sharing knowledge and supporting each other's success."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    }
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development budget ($2,000/year)",
    "Unlimited paid time off",
    "401(k) with company matching",
    "Home office setup allowance",
    "Learning and conference attendance",
    "Team building events and retreats",
    "Stock options for all employees"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's building the future of AI and IT solutions. Explore open positions and start your career with us." />
        <meta name="keywords" content="careers, jobs, employment, tech jobs, AI jobs, software engineering, remote work" />
        <meta property="og:title" content="Careers - Zion Tech Group | Join Our Team" />
        <meta property="og:description" content="Join Zion Tech Group and be part of a team that's building the future of AI and IT solutions. Explore open positions and start your career with us." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's building the future of AI and IT solutions. Work with cutting-edge technologies and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and make Zion Tech Group a great place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team's well-being and professional growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and interests
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 ${
                    position.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        {position.featured && (
                          <span className="bg-cyan-500 text-white px-2 py-1 rounded text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {position.experience}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>Posted {position.posted}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    <div className="lg:ml-6">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
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
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
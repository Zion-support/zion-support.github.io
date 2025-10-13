import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, MapPin, Clock, Briefcase, Star, CheckCircle, Shield, Globe, Code, Mail, Award } from 'lucide-react';
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
      department: "Web Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using modern technologies and frameworks.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud platforms and DevOps practices"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work options",
        "Learning and development opportunities",
        "Team building events"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets and implement robust security measures.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Security training and certifications",
        "Flexible schedule",
        "401(k) matching"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "6+ years experience in cloud architecture",
        "AWS, Azure, or GCP certifications",
        "Experience with containerization (Docker, Kubernetes)",
        "Strong communication and leadership skills"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Comprehensive health benefits",
        "Cloud certification reimbursement",
        "Remote work flexibility",
        "Stock options"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from data and build predictive models for business intelligence.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience in data science",
        "Proficiency in Python, R, SQL",
        "Experience with machine learning libraries",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Data science conference attendance",
        "Flexible work arrangements",
        "Professional development budget"
      ],
      featured: false
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Streamline development processes and maintain reliable infrastructure.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in DevOps",
        "Experience with CI/CD pipelines",
        "Knowledge of infrastructure as code",
        "Familiarity with monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "DevOps training and certifications",
        "Flexible schedule",
        "401(k) matching"
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Competitive Compensation",
      description: "We offer competitive salaries, equity, and performance bonuses."
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Work from anywhere with flexible schedules and remote-first culture."
    },
    {
      icon: Code,
      title: "Learning & Development",
      description: "Continuous learning opportunities with training budgets and conference attendance."
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with regular team events and company retreats."
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career paths with mentorship and advancement opportunities."
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Remote Workers", value: "80%", icon: Globe },
    { label: "Employee Satisfaction", value: "95%", icon: Star },
    { label: "Years in Business", value: "5+", icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, developer, remote work, tech jobs" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Our
              </span>
              <br />
              <span className="text-white">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and IT solutions. Join a team of passionate innovators making a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div key={position.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {position.title}
                          </h3>
                          {position.featured && (
                            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {position.experience}
                          </div>
                        </div>
                        <p className="text-gray-300 mb-6">{position.description}</p>
                      </div>
                      <div className="lg:ml-8">
                        <Link
                          to={`/careers/${position.id}`}
                          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors group-hover:translate-x-1"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                          {position.requirements.length > 3 && (
                            <li className="text-gray-400 text-sm">
                              +{position.requirements.length - 3} more requirements
                            </li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                          {position.benefits.length > 3 && (
                            <li className="text-gray-400 text-sm">
                              +{position.benefits.length - 3} more benefits
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
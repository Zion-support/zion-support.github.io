import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, MapPin, Clock, CheckCircle, ArrowRight, Star, Heart, Zap, Globe } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in DevOps/Infrastructure",
        "Expertise in Docker, Kubernetes, CI/CD",
        "Experience with AWS/Azure cloud services",
        "Knowledge of monitoring and logging tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for our AI-powered solutions.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years experience in product management",
        "Experience with AI/ML products",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our systems and clients from cyber threats and vulnerabilities.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO27001)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful and intuitive user interfaces for our AI applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in frontend development",
        "Expertise in React, TypeScript, CSS",
        "Experience with modern build tools",
        "Strong UI/UX design sense"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Extract insights from data and build predictive models for our clients.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "4+ years experience in data science",
        "Expertise in Python, R, SQL",
        "Experience with machine learning libraries",
        "Strong statistical and analytical skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Stock options"]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries and performance bonuses",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Remote Work",
      description: "Flexible remote work options and home office stipend",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget and conference attendance",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours and unlimited PTO policy",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Growth Opportunities",
      description: "Clear career paths and advancement opportunities",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const culture = [
    "Innovation-driven environment where creativity is encouraged",
    "Collaborative team culture with regular knowledge sharing sessions",
    "Diverse and inclusive workplace that values different perspectives",
    "Opportunity to work on cutting-edge AI and technology projects",
    "Regular team building activities and company retreats",
    "Mentorship programs for career development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our AI & Technology Team</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, engineering, product management, and more. Remote work available." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, remote work, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Be part of a team that's shaping the future of AI and technology. Work on cutting-edge projects that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Contact Us
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-cyan-400 font-medium">{position.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-300 text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {position.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                    {position.requirements.length > 3 && (
                      <li className="text-cyan-400 text-sm">+{position.requirements.length - 3} more requirements</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {position.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes Zion Tech Group a great place to work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {culture.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Apply?</h3>
              <p className="text-gray-300 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
              >
                Send Us Your Resume
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
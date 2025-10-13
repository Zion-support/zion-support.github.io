import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, MapPin, Clock, Briefcase, Star, Award, Zap, Brain, Shield, Globe } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI-powered solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong background in NLP and computer vision",
        "Experience with MLOps and model deployment"
      ],
      benefits: [
        "Competitive salary ($120k - $180k)",
        "Stock options",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Flexible work arrangements",
        "Professional development budget"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets and infrastructure with cutting-edge security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or CEH preferred",
        "Experience with SIEM tools and incident response",
        "Knowledge of compliance frameworks (SOC2, ISO27001)"
      ],
      benefits: [
        "Competitive salary ($90k - $130k)",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Professional certification reimbursement",
        "Flexible PTO policy"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and microservices using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with cloud platforms and DevOps",
        "Knowledge of database design and optimization",
        "Experience with API development and integration"
      ],
      benefits: [
        "Competitive salary ($80k - $120k)",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Remote work flexibility",
        "Professional development opportunities"
      ],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our micro SAAS solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience with AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, Terraform",
        "Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Experience with monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary ($100k - $140k)",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Stock options",
        "Flexible work arrangements"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and development for our AI and IT solutions portfolio.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "5+ years product management experience",
        "Experience with AI/ML products preferred",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ],
      benefits: [
        "Competitive salary ($110k - $150k)",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Stock options",
        "Professional development budget"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Support sales team with technical expertise and product demonstrations.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "3+ years sales engineering experience",
        "Technical background in AI/ML or IT solutions",
        "Excellent presentation and communication skills",
        "Experience with CRM systems"
      ],
      benefits: [
        "Competitive base salary + commission",
        "Health, dental, vision insurance",
        "401k with company matching",
        "Unlimited earning potential",
        "Flexible work arrangements"
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, innovative environment."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, cloud, and cybersecurity technologies."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career advancement paths."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules to support work-life balance."
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6" /> },
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore career opportunities in AI engineering, cybersecurity, development, and more."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, cybersecurity, developer, remote work, Zion Tech Group careers"
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
              Help us build the future of AI and IT solutions. Join a team of passionate professionals 
              working on cutting-edge technology that transforms businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Work With Us?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an opportunity to make a real impact 
                while growing your career in a supportive, innovative environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Open Positions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role to advance your career.
              </p>
            </div>
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    position.featured ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {position.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Contact HR Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
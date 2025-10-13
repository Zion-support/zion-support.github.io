import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe as GlobeIcon, Code, Zap, TrendingUp, Clock, CheckCircle, ExternalLink, MapPin, Calendar, DollarSign } from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $160,000",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for our enterprise clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
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
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $120,000",
      description: "Build scalable web applications and APIs using modern technologies and best practices.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps"
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
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90,000 - $130,000",
      description: "Protect our clients' systems and data with advanced cybersecurity solutions and threat monitoring.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with SIEM, IDS/IPS, and threat hunting",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)"
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
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      salary: "$85,000 - $125,000",
      description: "Design and maintain cloud infrastructure, CI/CD pipelines, and automation systems.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in DevOps",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with Terraform, Ansible",
        "Knowledge of monitoring and logging tools"
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
      title: "AI Product Manager",
      department: "Product",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $140,000",
      description: "Lead product strategy and development for our AI-powered solutions and platforms.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years experience in product management",
        "Experience with AI/ML products",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
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
      title: "Data Scientist",
      department: "AI & Machine Learning",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95,000 - $135,000",
      description: "Analyze complex data sets and develop predictive models to drive business insights.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience in data science",
        "Proficiency in Python, R, SQL",
        "Experience with machine learning frameworks",
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
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Above-market salaries with equity participation and performance bonuses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance, 401(k) matching, and life insurance"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO policy"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Professional development budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Culture",
      description: "Collaborative environment, team events, and recognition programs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description: "Work with latest AI, cloud, and cybersecurity technologies"
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and reward creative problem-solving",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Collaboration",
      description: "Cross-functional teams work together to deliver exceptional results",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "Regular training, conferences, and knowledge sharing sessions",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work to support your lifestyle",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our innovative company culture. Remote and on-site opportunities available."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, software developer, cybersecurity, remote work, tech jobs, Delaware, Zion Tech Group"
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
              Be part of a dynamic team that's shaping the future of AI and technology. 
              Work on cutting-edge projects, grow your skills, and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Work With Us?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a team that values innovation, collaboration, and personal growth. 
                Here's what makes Zion Tech Group a great place to work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Company Culture */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Culture
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment where creativity, collaboration, and continuous learning thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
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
                Explore our current job openings and find the perfect role for your career growth.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    position.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">{position.department}</p>
                      </div>
                      {position.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
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
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/careers/${position.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <a
                        href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">careers@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GlobeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com?subject=General Application"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
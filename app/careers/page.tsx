import { ArrowRight, CheckCircle, MapPin, Clock, Users, Heart, Zap, Globe, Award, Star, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI/ML projects and develop cutting-edge artificial intelligence solutions for our clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401k with company matching"
      ],
      salary: "$120,000 - $180,000",
      posted: "2 days ago"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and contribute to our micro SAAS platform development.",
      requirements: [
        "Bachelor's degree in Computer Science or equivalent",
        "3+ years full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Remote work options",
        "Learning and development opportunities",
        "Flexible PTO policy"
      ],
      salary: "$90,000 - $140,000",
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our technology solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years DevOps experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with Terraform, Ansible",
        "Knowledge of monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary + equity",
        "Comprehensive health benefits",
        "Work from anywhere policy",
        "Professional development budget",
        "Stock options program"
      ],
      salary: "$100,000 - $150,000",
      posted: "3 days ago"
    },
    {
      title: "AI Solutions Architect",
      department: "Solutions",
      location: "Remote / Chicago, IL",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement AI solutions for enterprise clients across various industries.",
      requirements: [
        "Master's degree in AI/ML or related field",
        "6+ years experience in AI solution design",
        "Experience with enterprise AI platforms",
        "Strong client-facing and presentation skills",
        "Knowledge of AI ethics and compliance"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Conference and training budget",
        "Performance bonuses"
      ],
      salary: "$130,000 - $200,000",
      posted: "5 days ago"
    },
    {
      title: "Product Manager - AI Platform",
      department: "Product",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead product strategy and development for our AI-powered platform solutions.",
      requirements: [
        "Bachelor's degree in Business or Technical field",
        "4+ years product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Remote work flexibility",
        "Product management training",
        "Team building events"
      ],
      salary: "$110,000 - $160,000",
      posted: "1 week ago"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Denver, CO",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and maintain security measures for our cloud infrastructure and client solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years cybersecurity experience",
        "Certifications (CISSP, CISM, etc.) preferred",
        "Experience with cloud security",
        "Knowledge of compliance frameworks"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Security training and certifications",
        "Flexible work arrangements",
        "Professional development support"
      ],
      salary: "$95,000 - $145,000",
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries with equity participation and performance bonuses",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible schedules to support work-life balance",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Learning & Growth",
      description: "Professional development budget, training programs, and conference attendance",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with regular team events and company retreats",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Time Off",
      description: "Generous PTO policy, paid holidays, and sabbatical opportunities",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "4.8/5", label: "Employee Rating", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Retention Rate", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and be part of a team that's transforming businesses with AI and technology solutions. Explore open positions and career opportunities."
        />
        <meta
          name="keywords"
          content="careers, jobs, employment, AI engineer, software developer, remote work, technology careers, Zion Tech Group jobs"
        />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Users className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Join Our Growing Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Careers at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Zion Tech Group
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are transforming businesses with cutting-edge AI and technology solutions. 
              Be part of our mission to drive digital transformation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact HR Team
                <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                  Why Work With Us
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a supportive work environment that encourages growth and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
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
                Explore our current job openings and find the perfect role to advance your career in technology.
              </p>
            </div>
            
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
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
                        <div className="text-cyan-400 font-semibold">
                          {position.salary}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 self-start">
                        {position.posted}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">careers@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Learn About Us
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
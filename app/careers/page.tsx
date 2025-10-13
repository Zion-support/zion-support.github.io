import { ArrowRight, MapPin, Clock, Users, Award, Zap, Brain, Shield, Globe, Mail, Phone, Calendar, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  const positions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
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
        "Unlimited PTO"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years experience in cloud architecture",
        "Certifications in AWS, Azure, or GCP",
        "Experience with DevOps and CI/CD",
        "Strong leadership and client management skills"
      ],
      benefits: [
        "Competitive salary and bonus",
        "Comprehensive health benefits",
        "401(k) with company matching",
        "Remote work options",
        "Learning and development opportunities"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect client systems and data through advanced cybersecurity measures and threat analysis.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with SIEM tools and incident response",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary",
        "Health and wellness benefits",
        "Flexible schedule",
        "Security training and certifications",
        "Career advancement opportunities"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, responsive user interfaces for our web applications and client projects.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in frontend development",
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with design systems and accessibility",
        "Strong collaboration and communication skills"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work flexibility",
        "Latest tools and equipment",
        "Team building events"
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
      description: "Access to the latest tools, technologies, and professional development opportunities."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Make a difference by helping businesses worldwide transform with technology."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear paths for advancement and opportunities to take on new challenges."
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Employee Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "4.8/5", label: "Glassdoor Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge AI and technology solutions. Explore career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, frontend developer, technology careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Be part of a team that's transforming businesses with cutting-edge AI and technology solutions. 
              Work on meaningful projects that make a real impact.
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
                Contact Us
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

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're not just another tech company. We're a team of passionate innovators 
                who believe in the power of technology to transform businesses and create positive change.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help us build the future of technology. 
                We're looking for passionate individuals who share our vision.
              </p>
            </div>
            
            <div className="space-y-8">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    position.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {position.title}
                        </h3>
                        {position.featured && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="lg:ml-8">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {benefit}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation. 
              Send us your resume and let's start a conversation.
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
                <ArrowRight className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
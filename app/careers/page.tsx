import React from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Users, Heart, ArrowRight, CheckCircle, Star, Briefcase } from "lucide-react"; const CareersPage: React.FC = () => { const openPositions = [ { id: 1, title: "Senior AI Engineer", department: "AI & Machine Learning", location: "Remote / Delaware", type: "Full-time", experience: "5+ years", description: "Lead the development of cutting-edge AI solutions and machine learning models.", requirements: [ "Master's degree in Computer Science or related field", "5+ years of experience in AI/ML development", "Proficiency in Python, TensorFlow, PyTorch", "Experience with cloud platforms (AWS, Azure, GCP)", "Strong problem-solving and communication skills" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] }, { id: 2, title: "5G Network Engineer", department: "5G Technology", location: "Delaware", type: "Full-time", experience: "3+ years", description: "Design and implement next-generation 5G network solutions for enterprise clients.", requirements: [ "Bachelor's degree in Telecommunications or related field", "3+ years of 5G/telecommunications experience", "Knowledge of 5G NR, network slicing, and edge computing", "Experience with network planning and optimization tools", "Certifications in 5G technologies preferred" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] }, { id: 3, title: "Cybersecurity Specialist", department: "Security", location: "Remote / Delaware", type: "Full-time", experience: "4+ years", description: "Protect our clients' digital assets with advanced cybersecurity solutions and threat detection.", requirements: [ "Bachelor's degree in Cybersecurity or related field", "4+ years of cybersecurity experience", "Certifications: CISSP, CISM, or equivalent", "Experience with SIEM, IDS/IPS, and vulnerability assessment", "Knowledge of compliance frameworks (SOC 2, ISO 27001)" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] }, { id: 4, title: "Cloud Solutions Architect", department: "Cloud Computing", location: "Remote", type: "Full-time", experience: "6+ years", description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.", requirements: [ "Bachelor's degree in Computer Science or related field", "6+ years of cloud architecture experience", "Expertise in AWS, Azure, and Google Cloud Platform", "Experience with containerization (Docker, Kubernetes)", "Strong understanding of microservices architecture" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] }, { id: 5, title: "Frontend Developer", department: "Development", location: "Remote", type: "Full-time", experience: "3+ years", description: "Build beautiful and responsive user interfaces for our AI and IT solutions.", requirements: [ "Bachelor's degree in Computer Science or related field", "3+ years of frontend development experience", "Proficiency in React, TypeScript, and modern CSS", "Experience with responsive design and accessibility", "Knowledge of state management and testing frameworks" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] }, { id: 6, title: "DevOps Engineer", department: "Infrastructure", location: "Remote / Delaware", type: "Full-time", experience: "4+ years", description: "Streamline our development and deployment processes with modern DevOps practices.", requirements: [ "Bachelor's degree in Computer Science or related field", "4+ years of DevOps experience", "Proficiency in CI/CD pipelines and automation tools", "Experience with infrastructure as code (Terraform, CloudFormation)", "Knowledge of monitoring and logging solutions" ], benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours", "Professional development budget"] } ]; const companyValues = [ { icon: <Heart className="w-8 h-8" />, title: "Innovation First", description: "We encourage creative thinking and embrace new technologies to solve complex problems." }, { icon: <Users className="w-8 h-8" />, title: "Collaborative Culture", description: "We believe in the power of teamwork and open communication across all levels." }, { icon: <Star className="w-8 h-8" />, title: "Excellence", description: "We strive for the highest quality in everything we do, from code to customer service." },
    { icon: <Briefcase className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "We invest in our team's professional development and career advancement." }
  ];
  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company matching",
    "Flexible work hours and remote work options",
    "Professional development and training budget",
    "Generous paid time off and holidays",
    "Modern equipment and home office setup",
    "Team building events and company retreats",
    "Mentorship and career development programs",
    "Employee wellness programs"
  ];
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI, IT, and 5G technology. Explore career opportunities and be part of our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, 5G engineer, cybersecurity, cloud architect, frontend developer, DevOps" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our innovative team and shape the future of technology" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us shape the future of AI, IT, and 5G technology. Join a team of passionate innovators 
                who are building the next generation of digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#positions"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact HR Team
                </a>
              </div>
            </div>
          </div>
        </section>
        { /* Company Values */ }
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're more than just a company - we're a community of innovators who share common values and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { companyValues.map((value, index) => (
                <div key={index } className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{ value.icon }</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{ value.title }</h3>
                  <p className="text-gray-300">{ value.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Benefits Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment that helps you thrive both personally and professionally.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                { benefits.map((benefit, index) => (
                  <div key={index } className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{ benefit }</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        { /* Open Positions */ }
        <section id="positions" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            <div className="max-w-6xl mx-auto space-y-8">
              { openPositions.map((position) => (
                <div key={position.id } className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{ position.title }</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{ position.department }</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{ position.location }</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{ position.type }</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{ position.experience }</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{ position.description }</p>
                    </div>
                    <div className="lg:ml-8">
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        { position.requirements.map((requirement, index) => (
                          <li key={index } className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">{ requirement }</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        { position.benefits.map((benefit, index) => (
                          <li key={index } className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">{ benefit }</span>
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
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  Contact HR Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CareersPage;
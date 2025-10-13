import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Briefcase, Heart, Lightbulb, Target, Rocket } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
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
        "401(k) with company matching"
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
      description: "Protect our clients' digital assets with advanced cybersecurity solutions and threat detection systems.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, GDPR)"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Comprehensive health coverage",
        "Remote work options",
        "Security training and certifications",
        "Team building events"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients using modern cloud technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in cloud architecture",
        "AWS, Azure, or GCP certifications preferred",
        "Experience with DevOps and CI/CD",
        "Strong understanding of microservices"
      ],
      benefits: [
        "Competitive salary and stock options",
        "Health and wellness benefits",
        "Flexible schedule",
        "Cloud certification reimbursement",
        "Annual team retreat"
      ],
      featured: true
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful, responsive user interfaces for our AI and IT solutions using modern web technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years experience in frontend development",
        "Proficiency in React, TypeScript, and CSS",
        "Experience with modern build tools",
        "Strong UI/UX design sense"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work flexibility",
        "Learning and development budget",
        "Modern equipment provided"
      ],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate deployment processes and maintain our cloud infrastructure for optimal performance and reliability.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in DevOps",
        "Experience with Docker, Kubernetes, and CI/CD",
        "Knowledge of infrastructure as code",
        "Strong scripting skills (Bash, Python)"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Comprehensive benefits package",
        "Remote work options",
        "Professional development opportunities",
        "Flexible PTO"
      ],
      featured: false
    },
    {
      id: 6,
      title: "AI Research Scientist",
      department: "Research & Development",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "PhD + 2 years",
      description: "Conduct cutting-edge research in artificial intelligence and develop innovative solutions for complex business problems.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "2+ years post-PhD research experience",
        "Strong publication record in AI/ML",
        "Experience with deep learning frameworks",
        "Excellent analytical and research skills"
      ],
      benefits: [
        "Competitive research salary",
        "Research budget and resources",
        "Conference and publication support",
        "Health and retirement benefits",
        "Collaborative research environment"
      ],
      featured: true
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules to support work-life balance"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Learning & Growth",
      description: "Professional development budget and opportunities for continuous learning"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Development",
      description: "Clear career paths and mentorship programs to help you grow"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Work on cutting-edge projects that shape the future of technology"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Team",
      description: "Collaborate with talented, passionate professionals from diverse backgrounds"
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and creative problem-solving to drive technological advancement.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and knowledge sharing to achieve extraordinary results.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and educational opportunities.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Work-Life Balance",
      description: "We support our team's well-being with flexible schedules and comprehensive benefits.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta
          name="description"
          content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore career opportunities in AI, cybersecurity, cloud computing, and more."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, cybersecurity specialist, cloud architect, frontend developer, DevOps engineer, tech careers, remote jobs"
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
              Be part of a team that's shaping the future of AI and technology. 
              Join us in building innovative solutions that transform businesses and create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Culture
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment of innovation, collaboration, and continuous learning where every team member can thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Benefits & Perks
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team's well-being and professional growth.
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {position.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">{position.department}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        {position.experience}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Requirements:</h4>
                      {position.requirements.slice(0, 3).map((req, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </div>
                      ))}
                      {position.requirements.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{position.requirements.length - 3} more requirements
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
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
    </>
  );
}
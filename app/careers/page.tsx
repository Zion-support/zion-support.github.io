import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Award, Heart, Zap, Globe } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Build scalable web applications and microservices for our platform.",
      requirements: ["3+ years full-stack experience", "React, Node.js, TypeScript", "Cloud experience preferred"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      requirements: ["4+ years DevOps experience", "AWS/Azure, Docker, Kubernetes", "CI/CD expertise"]
    },
    {
      title: "AI Solutions Architect",
      department: "Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Design and implement AI solutions for enterprise clients.",
      requirements: ["7+ years experience", "AI/ML architecture", "Client-facing experience"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI platform.",
      requirements: ["5+ years PM experience", "AI/ML product knowledge", "Technical background"]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Support sales team with technical expertise and client demos.",
      requirements: ["3+ years sales engineering", "Technical background", "AI/ML knowledge preferred"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Remote Work",
      description: "Flexible remote work options and home office setup allowance"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equity & Growth",
      description: "Stock options and clear career progression paths"
    }
  ];

  const values = [
    "Innovation First",
    "Collaboration",
    "Continuous Learning",
    "Customer Success",
    "Transparency",
    "Work-Life Balance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join Zion Tech Group and help shape the future of AI and technology. Explore open positions and discover why we're a great place to work."
        keywords="careers, jobs, AI engineer, software developer, remote work, technology careers, join our team"
        canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Help us build the future of AI and technology. Join a team of passionate 
            innovators who are transforming how businesses operate in the digital age.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building something amazing, and we want you to be part of it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <span className="ml-3 bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">Requirements:</h4>
                      <ul className="text-sm text-gray-300">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We believe in creating an environment where everyone can thrive. 
                Our culture is built on trust, collaboration, and a shared passion 
                for innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Diverse & Inclusive</h3>
                    <p className="text-gray-300">We celebrate diversity and create an inclusive environment where everyone belongs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Fast-Paced & Dynamic</h3>
                    <p className="text-gray-300">We move quickly and adapt to change, always staying ahead of the curve.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Excellence Focused</h3>
                    <p className="text-gray-300">We strive for excellence in everything we do, from code to customer service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Team</span>
              </div>
              <div className="aspect-square bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Growth</span>
              </div>
              <div className="aspect-square bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Innovation</span>
              </div>
              <div className="aspect-square bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for innovation. 
            Send us your resume and let us know how you'd like to contribute.
          </p>
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
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients."
    },
    {
      title: "Cloud Infrastructure Specialist",
      department: "Cloud & DevOps",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions using AWS, Azure, and Google Cloud."
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Protect client systems and data through advanced threat detection and security analysis."
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
      location: "Remote",
      type: "Full-time",
      description: "Guide clients through digital transformation initiatives and technology strategy development."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build modern, responsive web applications using React, TypeScript, and modern web technologies."
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote",
      type: "Full-time",
      description: "Automate deployment processes and maintain CI/CD pipelines for optimal development workflows."
    }
  ];

  const benefits = [
    { title: "Competitive Salary", icon: "💰", description: "Market-leading compensation packages" },
    { title: "Health Benefits", icon: "🏥", description: "Comprehensive health, dental, and vision coverage" },
    { title: "Remote Work", icon: "🏠", description: "Flexible remote and hybrid work options" },
    { title: "Professional Growth", icon: "📚", description: "Continuous learning and development opportunities" },
    { title: "Team Events", icon: "🎉", description: "Regular team building and social activities" },
    { title: "Stock Options", icon: "📈", description: "Equity participation in company growth" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers — Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's dynamic team of technology professionals. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta property="og:title" content="Careers — Zion Tech Group" />
        <meta property="og:description" content="Join our team of technology innovators and help shape the future of business technology." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Zion Tech Group, we foster an environment of innovation, collaboration, and continuous learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">We encourage creative thinking and pushing the boundaries of what's possible</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">Work with talented professionals who share your passion for technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-gray-300">Continuous learning and development opportunities to advance your career</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team members with comprehensive benefits and a great work environment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to join our team? Check out our current openings and find the perfect role for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <span className="mr-4">{position.department}</span>
                    <span>{position.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Apply Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Send Your Resume
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
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
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in technology, AI, cybersecurity, and consulting." />
        <meta property="og:title" content="Careers — Zion Tech Group" />
        <meta property="og:description" content="Exciting career opportunities at Zion Tech Group. Join our team of technology innovators." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
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
              Be part of a team that's shaping the future of technology. Work with cutting-edge 
              solutions and make a real impact on businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We foster an environment of innovation, collaboration, and continuous learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <p className="text-gray-300 mb-6">
                  At Zion Tech Group, we believe in empowering our team members to reach their full potential. 
                  We provide the tools, resources, and support needed to excel in your role.
                </p>
                <p className="text-gray-300 mb-6">
                  Our culture is built on trust, transparency, and teamwork. We encourage innovation, 
                  celebrate diversity, and value every contribution to our success.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Innovation at the forefront</li>
                  <li>• Customer success first</li>
                  <li>• Excellence in delivery</li>
                  <li>• Continuous improvement</li>
                  <li>• Team collaboration</li>
                  <li>• Integrity in all we do</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and perks
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our team and help us build the future of technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 text-sm mb-3">
                    <span className="mr-4">{position.department}</span>
                    <span>{position.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Apply Now
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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
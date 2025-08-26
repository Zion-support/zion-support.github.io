import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Careers: React.FC = () => {
  const openPositions = [
    {
<<<<<<< HEAD
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build cutting-edge technology solutions"
    },
    {
      title: "AI/ML Engineer",
      department: "AI Solutions",
      location: "Remote",
      type: "Full-time",
      description: "Develop innovative AI and machine learning solutions for our clients"
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients with advanced cybersecurity solutions"
    },
    {
      title: "Technology Consultant",
      department: "Consulting",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Provide strategic technology guidance to our enterprise clients"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead product strategy and development for our technology solutions"
=======
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our AI team to develop cutting-edge machine learning solutions and AI-powered applications.",
      requirements: ["5+ years ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure/GCP certified", "Kubernetes expertise", "5+ years cloud architecture"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat detection.",
      requirements: ["CISSP certification", "Incident response experience", "3+ years security"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our technology platforms.",
      requirements: ["React/Next.js expert", "TypeScript proficiency", "2+ years frontend development"]
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
    }
  ];

  const benefits = [
<<<<<<< HEAD
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
=======
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference attendance, and certification support"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements, unlimited PTO, and remote work options"
    },
    {
      title: "Team Culture",
      description: "Collaborative environment, team events, and recognition programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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
            Build the future of technology with a team that values innovation, collaboration, and excellence
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
              Contact Recruiting
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
              We foster an environment where innovation thrives and every team member can make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">We encourage creative thinking and breakthrough solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300">Teamwork and knowledge sharing drive our success</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we do</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
              <p className="text-gray-300">Continuous learning and career development opportunities</p>
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
              We take care of our team with comprehensive benefits and a supportive work environment
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
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
<<<<<<< HEAD
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
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
              Join our team and help shape the future of technology
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
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
            Send Resume
          </Link>
        </div>
      </section>
    </div>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
  );
};

export default Careers;
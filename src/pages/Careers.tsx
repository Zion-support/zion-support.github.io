import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const jobOpenings = [
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
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision coverage",
    "Flexible work arrangements and remote options",
    "Professional development and training programs",
    "401(k) matching and financial wellness programs",
    "Generous paid time off and holidays",
    "Modern office spaces with cutting-edge technology",
    "Team building events and company outings"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Company Culture */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Zion Tech Group, we foster an environment of innovation, collaboration, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  We encourage creative thinking and experimentation to solve complex challenges.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  Teamwork and knowledge sharing are at the heart of everything we do.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-gray-300">
                  We invest in your growth with ongoing training and development opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team members with comprehensive benefits and a great work environment.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300">
                      <span className="font-semibold">Department:</span> {job.department}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Location:</span> {job.location}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <button className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Submit Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
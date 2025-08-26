import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Lead development of cutting-edge AI solutions and machine learning models."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Protect client systems and develop comprehensive security strategies."
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Guide organizations through digital transformation initiatives."
    }
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
              Be part of a team that's shaping the future of technology and AI innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work at Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Innovation First</h3>
                    <p className="text-gray-300">Work on cutting-edge AI and technology solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Remote-First Culture</h3>
                    <p className="text-gray-300">Flexible work environment with global team collaboration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Professional Growth</h3>
                    <p className="text-gray-300">Continuous learning and career development opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Impact-Driven</h3>
                    <p className="text-gray-300">Make a real difference in how businesses use technology</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Competitive salary and equity packages</li>
                <li>• Comprehensive health, dental, and vision coverage</li>
                <li>• Flexible PTO and paid holidays</li>
                <li>• Professional development budget</li>
                <li>• Home office setup allowance</li>
                <li>• Team building events and activities</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{position.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{position.department} • {position.location}</p>
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
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/comprehensive-app-audit-and-update-5693
import SEOHead from '../components/SEOHead';";";";

const CareersPage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="CareersPage - Zion Tech Group - Zion Tech Group"";";
        description="Zion Tech Group CareersPage page"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">CareersPage - Zion Tech Group</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";
<<<<<<< HEAD
=======
=======
import React from 'react';
import SEOHead from '../components/SEOHead';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Protect our clients from cyber threats and implement security best practices.'
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'Cloud Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and maintain scalable cloud infrastructure solutions.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain web applications and microservices.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Careers - Zion Tech Group"
        description="Join our team of experts in AI, IT solutions, cybersecurity, and digital transformation. Explore career opportunities at Zion Tech Group."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals to join our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Competitive salary and benefits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Remote work opportunities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Professional development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Cutting-edge technology</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Collaborative environment</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
              <p className="text-gray-300 mb-4">
                We believe in innovation, collaboration, and continuous learning. Our team is diverse, inclusive, and passionate about technology.
              </p>
              <p className="text-gray-300">
                We encourage our employees to think creatively, take initiative, and contribute to our shared mission of delivering exceptional technology solutions.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <p className="text-gray-300">{job.description}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Match?</h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Send Us Your Resume
            </a>
          </div>
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-604b
>>>>>>> cursor/comprehensive-app-audit-and-update-5693
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default CareersPage;
=======
<<<<<<< HEAD
export default CareersPage;
=======
export default CareersPage;
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-604b
>>>>>>> cursor/comprehensive-app-audit-and-update-5693

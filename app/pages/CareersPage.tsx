import React from 'react';
import { Helmet } from 'react-helmet-async;';
import { Link } from 'react-router-dom';
import { BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon } from '@heroicons/react/24/outline;
const CareersPage: React.FC = () => {
  const positions = [
    {';
      title: 'Senior AI Engineer,
      location: 'Remote / Middletown, DE,
      type: 'Full-time,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.,
      requirements: [
        '5+ years experience in AI/ML,
        'Proficiency in Python, TensorFlow, PyTorch,
        'Experience with cloud platforms,
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist,
      location: 'Remote / Middletown, DE,
      type: 'Full-time,
      description: 'Protect our clients\' digital assets with advanced security solutions.,
      requirements: [
        '3+ years in cybersecurity,
        'Certifications (CISSP, CISM, etc.),
        'Experience with security tools,
        'Knowledge of compliance standards'
      ]
    },
    {
      title: 'Cloud Solutions Architect,
      location: 'Remote / Middletown, DE,
      type: 'Full-time,
      description: 'Design and implement scalable cloud infrastructure solutions.,
      requirements: [
        '4+ years cloud experience,
        'AWS/Azure/GCP certifications,
        'Infrastructure as Code,
        'DevOps practices'
      ]
  }
  ];
  const benefits = [
    {
      title: 'Competitive Salary,
      description: 'Above-market compensation packages,
      icon: BriefcaseIcon;
    },
    {
      title: 'Remote Work,
      description: 'Flexible work arrangements,
      icon: MapPinIcon;
    },
    {
      title: 'Learning & Development,
      description: 'Continuous learning opportunities,
      icon: ClockIcon;
    },
    {
      title: 'Health Benefits,
      description: 'Comprehensive health coverage,
      icon: UserGroupIcon;
  ];
  return (
    <>
      <Helmet></Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI and IT." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1></h1>
              Careers;
            </h1>
            <p></p>
              Join our team and help us build the future of technology.
            </p>
<p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Be part of a dynamic team that's revolutionizing the way businesses use technology. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now;
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Open Positions Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next career opportunity with us;
            </p>
          </div>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {position.location;
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {position.type;
                      </div>
                    </div>
                  </div>
                  <Link;
                    to="/contact"
                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Apply Now;
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {requirement;
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Benefits;
                </h3>
                <p></p>
                  Competitive salary, health insurance, and professional development.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Culture;
                </h3>
                <p></p>
                  Collaborative, innovative, and inclusive work environment.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Open Positions;
              </button>
            </div>
          </div>;
const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>CareersPage - Zion Tech Group</title>
        <meta name="description" content="CareersPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1>CareersPage</h1>
          <p>This page is under construction.</p>
        </div>
      </div>
</>
  );
export default Page;
    <div></div>
      <h1>CareersPage</h1>"
      <p>This page is under development.</p>"
    </div>
  );
}
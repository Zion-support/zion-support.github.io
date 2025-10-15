import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckIcon, MapPinIcon, ClockIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for a Senior AI Engineer to join our team and help build cutting-edge AI solutions.',
      requirements: [
        '5+ years of experience in machine learning and AI',
        'Strong programming skills in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'PhD or Master\'s degree in Computer Science or related field'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Join our team as a Cloud Solutions Architect to design and implement scalable cloud infrastructure.',
      requirements: [
        '7+ years of experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong communication and leadership skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We need a Cybersecurity Specialist to help protect our clients\' digital assets and infrastructure.',
      requirements: [
        '4+ years of experience in cybersecurity',
        'Knowledge of security frameworks and compliance',
        'Experience with penetration testing and vulnerability assessment',
        'Relevant certifications (CISSP, CISM, etc.)'
      ]
    },
    {
      title: 'Frontend Developer',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our frontend team to build beautiful and responsive user interfaces for our applications.',
      requirements: [
        '3+ years of experience in React, TypeScript, and modern frontend technologies',
        'Experience with UI/UX design principles',
        'Knowledge of responsive design and accessibility',
        'Strong problem-solving and collaboration skills'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited vacation policy',
    'Top-tier equipment and tools',
    'Team building events',
    'Mentorship programs'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts in AI, cloud computing, and cybersecurity. Explore career opportunities at Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be part of a team that's shaping the future of technology. We're looking for passionate 
                individuals who want to make a difference in the world of AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for your career growth.
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer competitive benefits and a great work environment to help you thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <CheckIcon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we believe that great technology comes from great people. 
                  We foster an environment of innovation, collaboration, and continuous learning.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team is diverse, inclusive, and passionate about making a positive impact 
                  through technology. We encourage creativity, support personal growth, and 
                  celebrate achievements together.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-300">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">25+</div>
                    <div className="text-gray-300">Countries</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
                <div className="space-y-4">
                  {[
                    'Innovation and creativity',
                    'Collaboration and teamwork',
                    'Continuous learning',
                    'Customer success',
                    'Integrity and transparency'
                  ].map((value, index) => (
                    <div key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;